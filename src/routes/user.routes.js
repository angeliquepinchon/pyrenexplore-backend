import express from "express";
import { userController } from "../controllers/userController.js";
import { authMiddleware } from "../middelware/authMiddleware.js";
import { validate } from "../middelware/validation.js";
import { userValidation } from "../validations/userValidation.js";

const userRouter = express.Router();

// user endpoint
userRouter.get("/", authMiddleware, userController.getAllUsers);
userRouter.get("/:id", authMiddleware, userController.getOneUser);
userRouter.patch(
  "/:id",
  validate(userValidation.update, "body"),
  authMiddleware,
  userController.updateUser
);
userRouter.delete("/:id", authMiddleware, userController.deleteUser);

//user discoveries endpoint
userRouter.get("/:id/discoveries", userController.getAllDiscoveries);
userRouter.get("/:id/discoveries/:id", userController.getOneDiscoveries);
userRouter.post(
  "/:id/discoveries",
  validate(userValidation.create, "body"),
  userController.createDiscoveries
);
userRouter.patch(
  "/:id/discoveries/:id",
  validate(userValidation.update, "body"),
  userController.updateDiscoveries
);
userRouter.delete("/:id/discoveries/:id", userController.deleteDiscoveries);

//user project endpoint
userRouter.get("/:id/projects", userController.getAllProjects);

export { userRouter };
