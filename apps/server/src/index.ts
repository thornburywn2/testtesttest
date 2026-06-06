import { metrics } from "./routes/metrics";
import { Hono } from "hono";
const app = new Hono();
app.route("/metrics", metrics);
export default app;
