import { questions } from "../data.js";
import { type Question } from "../types.js";

export function getAllQuestions(): Question[] {
  return questions;
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((question) => question.id === id);
}
