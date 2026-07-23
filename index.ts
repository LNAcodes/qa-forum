import { Hono } from "hono";
import nunjucks from "nunjucks";
import { questions } from "./src/data.ts";
import type { Question } from "./src/types.d.ts";

// console.log(questions);

const app = new Hono();

nunjucks.configure("views", {
  autoescape: true,
});

app.get("/", (c) => {
  const html = nunjucks.render("index.html", { questions }); // rendering to a string
  return c.html(html);
});
/* c.text("Hono!"));
c means Context and includes both parameters req and res (Express) in one object. Hono is more modern, lightweight, and runs natively with Bun.

Express:
app.get("/", (req, res) => {
  res.render("index.html", { title: "Home" });
});
*/
app.get("/questions/new", (c) => {
  const html = nunjucks.render("new-question.html");
  return c.html(html);
});

app.get("/questions/:id", (c) => {
  // console.log("Route hit:", c.req.param("id"));
  const foundQuestion = questions.find(
    (question) => question.id === c.req.param("id"),
  );
  const html = nunjucks.render("detail.html", { question: foundQuestion });
  return c.html(html);
});

app.post("/questions", async (c) => {
  const body = await c.req.parseBody();

  //for testing only - won't be stored
  const newQuestion: Question = {
    id: String(questions.length + 1),
    title: body.title as string,
    body: body.body as string,
    author: "Anonymous",
    createdAt: new Date().toLocaleDateString(),
    answers: [],
  };

  questions.push(newQuestion);
  return c.redirect("/");
});

/*
app.get("/test", (c) => {
  return c.text("test works");
});

app.get("/questions/1", (c) => {
  return c.text("questions 1 works");
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
