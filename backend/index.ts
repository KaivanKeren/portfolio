import app from "./app";
import Bun from "bun"

Bun.serve({
  fetch: app.fetch,
  port: 8000,
});

console.log("OK");
