/**
 * Production server entry point
 */
import app from "./src/app";

const port = parseInt(process.env.PORT || "4000", 10);

Bun.serve({
  port,
  fetch: app.fetch,
  development: false,  // ← production mode
});

console.log(`🚀 API Server running at http://localhost:${port}`);
console.log(`📚 API Docs: http://localhost:${port}/api/reference`);
console.log(`🔐 Auth API: http://localhost:${port}/api/auth`);