import express from "express";
import { speciesController } from "../controllers/speciesController.js";
import { validate } from "../middelware/validation.js";
import { speciesValidation } from "../validations/speciesValidation.js";

const speciesRouter = express.Router();

speciesRouter.get("/", speciesController.getAllSpecies);
speciesRouter.get("/:id", speciesController.getOneSpecies);
speciesRouter.post(
  "/",
  validate(speciesValidation.create, "body"),
  speciesController.createSpecies
);
speciesRouter.patch(
  "/:id",
  validate(speciesValidation.update, "body"),
  speciesController.updateSpecies
);
speciesRouter.delete("/:id", speciesController.deleteSpecies);
export { speciesRouter };
