import app from "./app";

Bun.serve({
  fetch: app.fetch,
  port: 8000
});

console.log("PP");
console.log("Hello Guys ");
