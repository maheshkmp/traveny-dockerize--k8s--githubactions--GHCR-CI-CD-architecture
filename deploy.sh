#!/bin/bash
set -e

# Usage: ./deploy.sh [IMAGE_TAG]
# IMAGE_TAG defaults to "latest" if not provided.
IMAGE_TAG="${1:-latest}"

echo "🚀 Deploying Traveny (tag: ${IMAGE_TAG})..."
cd ~/projects/traveny

# ── Step 1: Sync latest code (for docker-compose.yml, nginx config, migrations) ──
git fetch origin main
git reset --hard origin/main

# ── Step 2: Log in to GHCR and pull pre-built images ──
echo "📦 Pulling images from GHCR..."
echo "${GHCR_TOKEN}" | docker login ghcr.io -u maheshkmp --password-stdin 2>/dev/null || true
export IMAGE_TAG
docker compose pull api web

# ── Step 3: Ensure database is healthy before migrating ──
echo "🗄️ Ensuring database is up..."
docker compose up -d db
docker compose exec -T db sh -c 'until pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}; do sleep 2; done'

# ── Step 4: Run versioned migrations BEFORE starting new application containers ──
#   - Uses drizzle-orm migrator with versioned SQL files checked into git.
#   - Runs in an ephemeral container connected to the Docker network.
#   - This is safe: SQL migration files are additive (ALTER TABLE ADD COLUMN, etc.)
#     and never destructive, unlike `drizzle-kit push` which can drop columns.
echo "⏳ Running database migrations..."
source .env
docker run --rm \
  --network traveny_default \
  -e DATABASE_URL="${DATABASE_URL}" \
  -v "$(pwd)":/app \
  -w /app \
  oven/bun:1 \
  sh -c "bun install --frozen-lockfile && cd packages/core && bun run db:migrate"

# ── Step 5: Start new containers (images already pulled, no build needed) ──
echo "🔄 Starting services with new images..."
docker compose up -d --remove-orphans

# ── Step 6: Clean up old dangling images ──
echo "🧹 Cleaning old images..."
docker image prune -f

echo "📌 Deployed tag: ${IMAGE_TAG}"
echo "📌 Latest commit:"
git log --oneline -1
echo "✅ Done at $(date)"

# Usage: ./deploy.sh [IMAGE_TAG]
# IMAGE_TAG defaults to "latest" if not provided.