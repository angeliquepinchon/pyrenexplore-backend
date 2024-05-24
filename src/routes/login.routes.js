import express from "express";
import { authController } from "../controllers/authController.js";
import { validate } from "../middelware/validation.js";
import { authValidation } from "../validations/authValidation.js";

const loginRouter = express.Router();

loginRouter.post(
  "/",
  validate(authValidation.login, "body"),
  authController.login
);

export { loginRouter };
