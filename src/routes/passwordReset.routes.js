import express from "express";
import { authController } from "../controllers/authController.js";

const passwordResetRouter = express.Router();

passwordResetRouter.post("/", authController.passwordReset);

export { passwordResetRouter };
