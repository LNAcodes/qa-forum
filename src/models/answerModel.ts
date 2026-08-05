import { type Answer } from "../types.js";

app.get("/questions/:id/answers/:answerID/edit", (c) => {
  console.log("Receiving updated answer page:", c.req.param("answerID"));
  const foundQuestion = questions.find(
    (question) => question.id === c.req.param("id"),
  );
  const foundAnswer = foundQuestion?.answers.find(
    (answer) => answer.id === c.req.param("answerID"),
  );

  if (!foundAnswer) {
    return c.text("Answer not found", 404);
  }

  const html = nunjucks.render("edit-answer.njk", {
    answer: foundAnswer,
    questionId: c.req.param("id"),
  });

  return c.html(html);
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

app.post("/questions/:id/answers/:answerID/edit", async (c) => {
  const body = await c.req.parseBody();

  const foundQuestion = questions.find(
    (question) => question.id === c.req.param("id"),
  );
  const foundAnswer = foundQuestion?.answers.find(
    (answer) => answer.id === c.req.param("answerID"),
  );
  if (!foundAnswer) {
    return c.text("Question not found", 404);
  }

  foundAnswer.body = body.body as string;

  return c.redirect(`/questions/${c.req.param("id")}`);
});
