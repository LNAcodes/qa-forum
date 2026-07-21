import { Hono } from "hono";
import nunjucks from "nunjucks";
const app = new Hono();

nunjucks.configure("views", {
  autoescape: true,
});

app.get("/", (c) => {
  const html = nunjucks.render("index.html"); // rendering to a string
  return c.html(html);
});
// c.text("Hono!"));

export default {
  port: 3000,
  fetch: app.fetch,
};
