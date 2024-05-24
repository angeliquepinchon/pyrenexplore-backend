import express from "express";
import { authController } from "../controllers/authController.js";
import { validate } from "../middelware/validation.js";
import { userValidation } from "../validations/userValidation.js";

const signupRouter = express.Router();

signupRouter.post(
  "/",
  validate(userValidation.create, "body"),
  authController.signUp
);

export { signupRouter };
