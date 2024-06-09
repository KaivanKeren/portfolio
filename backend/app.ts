import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { authRoute } from "./routes/auth";

const app = new Hono();

app.use(logger());

app.use(
  '/api/*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'],
  })
);

app.get("/test", (c) => {
  return c.text("Percobaan pertama");
});

app.route("api/auth", authRoute);

export default app;
