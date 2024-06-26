import express from "express";
import { authController } from "../controllers/authController.js";

const passwordResetRouter = express.Router();

passwordResetRouter.post("/", authController.passwordReset);

// Route to handle redirection to deep link
passwordResetRouter.get("/redirectionToApp/:token", (req, res) => {
  const { token } = req.params;
  res.redirect(`myapp://home`);
});

passwordResetRouter.get("/:token", authController.validatePasswordResetLink);

export { passwordResetRouter };
