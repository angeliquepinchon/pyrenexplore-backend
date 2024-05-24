import express from "express";
import { articleController } from "../controllers/articleController.js";
import { validate } from "../middelware/validation.js";
import { articleValidation } from "../validations/articleValidation.js";

const articleRouter = express.Router();

articleRouter.get("/", articleController.getAllArticles);
articleRouter.get("/:id", articleController.getOneArticle);
articleRouter.get("/:id/comments", articleController.getAllComments);
articleRouter.post(
  "/",
  validate(articleValidation.create, "body"),
  articleController.createArticles
);
articleRouter.patch(
  "/:id",
  validate(articleValidation.update, "body"),
  articleController.updateArticles
);
articleRouter.delete("/:id", articleController.deleteArticles);
export { articleRouter };
