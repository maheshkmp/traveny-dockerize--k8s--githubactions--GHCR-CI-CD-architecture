FROM oven/bun:1 AS deps
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/
COPY packages/core/package.json ./packages/core/

RUN bun install

FROM oven/bun:1 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN cd packages/core && bun run build

FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/api ./apps/api
COPY --from=builder /app/package.json ./package.json

EXPOSE 4000
CMD ["bun", "run", "apps/api/dev.ts"]
