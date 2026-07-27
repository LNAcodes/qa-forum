import { Hono } from "hono";
import nunjucks from "nunjucks";
import { questions } from "./src/data.ts";
import type { Question, Answer } from "./src/types.d.ts";

// console.log(questions);

const app = new Hono();

nunjucks.configure("views", {
  // securing: preventing XSS - Cross-Site-Scripting
  autoescape: true,
});

// Routes must be ordered from most specific to most dynamic.
// Static routes like /questions/new and /questions/search must come before
// dynamic routes like /questions/:id — otherwise Hono matches "new" or "search"
// as an id parameter and the correct route is never reached.

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

app.get("/questions/search", async (c) => {
  const searchQuery = c.req.query("q") ?? "";
  // c.req.query("q") returns undefined if no search query is provided (e.g. /questions/search without ?q=something)
  // ?? "" prevents a crash by falling back to an empty string — .toLowerCase() on undefined would throw an error
  // .includes("") matches everything, so all questions are returned when the search is empty
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const html = nunjucks.render("index.html", { questions: filteredQuestions });
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

app.post("/questions/:id/answers", async (c) => {
  const body = await c.req.parseBody();

  const foundQuestion = questions.find(
    (question) => question.id === c.req.param("id"),
  );

  if (!foundQuestion) {
    return c.text("Question not found", 404);
  }

  const answerToQuestion: Answer = {
    // for testing
    id: String(foundQuestion.answers.length + 1),
    body: body.body as string,
    author: "Anonymous",
    //later: session.user.name
    createdAt: new Date().toLocaleDateString(),
  };

  foundQuestion.answers.push(answerToQuestion);
  return c.redirect(`/questions/${c.req.param("id")}`);
});

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
