import { readFileSync } from "node:fs";
import type { Question } from "./types";

const raw = readFileSync("../data/questions.json", "utf-8");
export const questions: Question[] = JSON.parse(raw);
