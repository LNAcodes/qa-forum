import { Hono } from "hono";

const questionRoutes = new Hono();

questionRoutes.get("/questions/new");
questionRoutes.get("/questions/search");
questionRoutes.get("/questions/:id");
questionRoutes.get("/questions/:id/edit");
questionRoutes.post("/questions");
questionRoutes.post("/questions/:id/edit");
