import "dotenv/config";
import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandlerMiddleware.js";

/**
 * Middleware for verifying JWT token and ensuring user authentication.
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {object} next - The Express next function.
 * @returns {Promise<void>}  A Promise that resolves if the user is authenticated, or rejects with an error message if authentication fails.
 */
const authMiddleware = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).send({ message: "utilisateur non autorisé" });
    }

    const token = authorization.split(" ")[1];
    const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);

    if (!verifyToken) {
      return res.status(401).send({ message: "utilisateur non autorisé" });
    }
    next();
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

export { authMiddleware };
