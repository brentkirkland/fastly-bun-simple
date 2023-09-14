import { env } from "fastly:env";
import { Hono } from "hono/quick";

const app = new Hono();

app.get("/", (c) => {
  const pop = env("FASTLY_POP");
  return c.html(<div>{`Hello, ${pop || "World"}`}</div>);
});

export { app };
