import { Hono } from "hono";
import nunjucks from "nunjucks";
import type { Answer, Question } from "./src/types.ts";
import { questions } from "./src/data.ts";

// console.log(questions);

const app = new Hono();

nunjucks.configure("views", {
  autoescape: true,
});

app.get("/", (c) => {
  const html = nunjucks.render("index.html"); // rendering to a string
  return c.html(html);
});
/* c.text("Hono!"));
c means Context and includes both parameters req and res (Express) in one object. Hono is more modern, lightweight, and runs natively with Bun.

Express:
app.get("/", (req, res) => {
  res.render("index.html", { title: "Home" });
});
*/

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
