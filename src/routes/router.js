import express from "express";
import { loginRouter } from "./login.routes.js";
import { passwordResetRouter } from "./passwordReset.routes.js";
import { signupRouter } from "./signup.routes.js";
import { speciesRouter } from "./species.routes.js";
import { userRouter } from "./user.routes.js";

const v1Router = express.Router();

v1Router.use("/users", userRouter);
v1Router.use("/species", speciesRouter);
// v1Router.use("/projects", projectRouter);
// v1Router.use("/articles", articleRouter);
// v1Router.use("/comments", commentRouter);
v1Router.use("/login", loginRouter);
v1Router.use("/passwordReset", passwordResetRouter);
v1Router.use("/signup", signupRouter);

export { v1Router };
