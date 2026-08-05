import { logger } from "hono/logger";
import { Hono } from "hono";
import nunjucks from "nunjucks";
import { questions } from "./src/data.ts";
import type { Question, Answer } from "./src/types.d.ts";

// console.log(questions);

const app = new Hono();

nunjucks.configure("src/views", {
  // securing: preventing XSS - Cross-Site-Scripting
  autoescape: true,
  watch: true,
});

app.use(logger());

// Routes must be ordered from most specific to most dynamic.
// Static routes like /questions/new and /questions/search must come before
// dynamic routes like /questions/:id — otherwise Hono matches "new" or "search"
// as an id parameter and the correct route is never reached.

app.get("/", (c) => {
  const html = nunjucks.render("index.njk", { questions }); // rendering to a string
  return c.html(html);
});
/* c.text("Hono!"));
c means Context and includes both parameters req and res (Express) in one object. Hono is more modern, lightweight, and runs natively with Bun.

Express:
app.get("/", (req, res) => {
  res.render("index.html", { title: "Home" });
});
*/

/*
app.get("/test", (c) => {
  return c.text("test works");
});

app.get("/questions/1", (c) => {
  return c.text("questions 1 works");
});
*/

//starting server
export default {
  port: 3000,
  fetch: app.fetch,
};

/*
Express: app.listen() starts the server manually
Bun + Hono: Bun starts the server automatically,
we just pass the port and app.fetch (Hono handles incoming requests)
*/

/*
Test Code
const testQuestion: Question = {
  id: "1",
  title: "Test",
  body: "Test body",
  author: "LNA",
  createdAt: "2026-07-21",
  answers: [],
};

console.log(testQuestion);
*/
