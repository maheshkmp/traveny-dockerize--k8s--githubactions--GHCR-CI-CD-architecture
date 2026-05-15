# ── Stage 1: deps ──────────────────────────────────────────
FROM oven/bun:1 AS deps
WORKDIR /app

# Copy workspace manifests first (layer caching)
COPY package.json bun.lockb ./
COPY apps/web/package.json ./apps/web/
COPY packages/core/package.json ./packages/core/

RUN bun install --frozen-lockfile

# ── Stage 2: builder ───────────────────────────────────────
FROM oven/bun:1 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build shared package first
RUN cd packages/core && bun run build

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN cd apps/web && bun run build

# ── Stage 3: runner ────────────────────────────────────────
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js standalone output
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["bun", "apps/web/server.js"]