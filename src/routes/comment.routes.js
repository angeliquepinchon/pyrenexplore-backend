import express from "express";
import { commentController } from "../controllers/commentController.js";
import { validate } from "../middelware/validation.js";
import { commentValidation } from "../validations/commentValidation.js";

const commentRouter = express.Router();

commentRouter.post(
  "/",
  validate(commentValidation.create, "body"),
  commentController.createComment
);
commentRouter.patch(
  "/:id",
  validate(commentValidation.update, "body"),
  commentController.updateComment
);
commentRouter.delete("/:id", commentController.deleteComment);
export { commentRouter };
