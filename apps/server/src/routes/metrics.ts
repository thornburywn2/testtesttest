import { Hono } from "hono";
export const metrics = new Hono();
metrics.get("/", (c)=>c.json([]));
metrics.get("/:id", (c)=>c.json({}));
