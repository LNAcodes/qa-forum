import { Context } from "hono";
import nunjucks from "nunjucks";
import { questions } from "../data";
import * as questionModel from "../models/questionModel";
import type { Question } from "../types";

export function listQuestions(c: Context) {
  const allQuestions = questionModel.getAllQuestions();
  const html = nunjucks.render("index.njk", { questions: allQuestions });
  return c.html(html);
}

export function showNewQuestionForm(c: Context) {
  const html = nunjucks.render("new-question.njk");
  return c.html(html);
}

export function searchQuestion(c: Context) {
  const searchQuery = c.req.query("q") ?? "";
  const allQuestions = questionModel.getAllQuestions();
  const filteredQuestions = allQuestions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const html = nunjucks.render("index.njk", { questions: filteredQuestions });
  return c.html(html);
}
const questionById = questions.find();

export async function updateQuestion(c: Context) {
  const body = await c.req.parseBody();
  const foundQuestion = questionModel.getQuestionById(c.req.param("id"));
  if (!foundQuestion) {
    return c.text("Question not found", 404);
  }
  // Mutation
  foundQuestion.title = body.title as string;
  foundQuestion.body = body.body as string;
  return c.redirect(`/questions/${c.req.param("id")}`);
}
