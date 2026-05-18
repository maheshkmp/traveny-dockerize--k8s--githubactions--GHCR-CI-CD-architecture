# ── Stage 1: deps ──────────────────────────────────────────
FROM oven/bun:1 AS deps
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/
COPY packages/core/package.json ./packages/core/

RUN bun install

# ── Stage 2: builder ───────────────────────────────────────
FROM oven/bun:1 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build core first
RUN cd packages/core && bun run build

# Bundle API into single file
RUN bun build apps/api/server.ts \
  --outfile dist/server.js \
  --target bun \
  --minify \
  --external pg \
  --external @neondatabase/serverless \
  --external ws

# ── Stage 3: runner ────────────────────────────────────────
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=builder /app/dist/server.js ./server.js
COPY --from=builder /app/node_modules/pg ./node_modules/pg
COPY --from=builder /app/node_modules/@neondatabase ./node_modules/@neondatabase
COPY --from=builder /app/node_modules/ws ./node_modules/ws

EXPOSE 4000
CMD ["bun", "server.js"]
