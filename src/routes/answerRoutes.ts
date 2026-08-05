import { Hono } from "hono";
import { }

const answerRoutes = new Hono();

answerRoutes.get("/questions/:id/answers/:answerID/edit");
answerRoutes.post("/questions/:id/answers");
answerRoutes.post("/questions/:id/answers/:answerID/edit");
