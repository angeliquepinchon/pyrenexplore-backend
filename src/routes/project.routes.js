import express from "express";
import { projectController } from "../controllers/projetcController.js";
import { validate } from "../middelware/validation.js";
import { projectValidation } from "../validations/projectValidation.js";

const projectRouter = express.Router();

projectRouter.get("/", projectController.getAllProjects);
projectRouter.get("/:id", projectController.getOneProject);
projectRouter.post(
  "/",
  validate(projectValidation, "body"),
  projectController.createProject
);
projectRouter.patch("/:id", projectController.updateProject);
projectRouter.delete("/:id", projectController.deleteProject);
export { projectRouter };
