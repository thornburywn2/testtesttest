import { Hono } from "hono";
export const metrics = new Hono();
metrics.get("/", (c)=>c.json([]));
metrics.get("/:id", (c)=>c.json({}));
metrics.post("/", async (c)=>{ const b=await c.req.json(); return c.json(b,201); });
metrics.delete("/:id", (c)=>c.json({ok:true}));
