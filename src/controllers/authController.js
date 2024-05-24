import { PrismaClient } from "@prisma/client";
import { errorHandler } from "../middelware/errorHandlerMiddleware.js";
import { authService } from "../services/authService.js";
const prisma = new PrismaClient();

const authController = {
  /**
   * @description - Authenticate the user and return a JWT.
   * @param {Object} req - The Express request object.
   * @param {Object} req.body - The request body containing user data.
   * @param {string} req.body.email - The email of the user.
   * @param {string} req.body.password - The plaintext password of the user.
   * @param {Object} res - The Express response object.
   * @param {function} next - The function to call to move to the next middleware step.
   * @returns {Object} - A JSON object containing the JWT token.
   * @throws {Error} If an error occurs during processing.
   * @example - Used within an Express route
   * const authMiddleware = require("./path/to/authMiddleware")
   * const authController = require('./path/to/authController")
   *  app.get('/endpoint', authMiddleware, authController.login)
   **/
  login: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "champs de connexion invalides" });
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (user === null) {
        return res.status(404).send({ message: "Utilisateur non trouvé" });
      }

      //Compare user input password with hashed password
      const isPasswordValid = await authService.validatePassword(
        password,
        user.password
      );
      if (!isPasswordValid) {
        return res.status(400).send({ message: "Mot de passe incorrect" });
      }

      const token = authService.generateJwt(email, user.pseudo);
      // Return a signed JWT for validation
      return res.json({ token });
    } catch (err) {
      errorHandler(err, req, res, next);
    }
  },
  /**
   * @description - Create a user in the database with an encrypted password.
   * @param {Object} req  - The Express request object
   * @param {Object} req.body - The request body containing user data.
   * @param {Object} res - The Express response object
   * @param {Function} next - The function to call to move to the next middleware step.
   * @returns {void}
   * @example - Using within an Express route
   * const authController = require('./path/to/authController');
   * app.post('/signup', authController.signUp)
   */
  signUp: async (req, res, next) => {
    const data = req.body;
    const saltRounds = 10;
    const plaintextPassword = req.body.password;

    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email: data.email }, { pseudo: data.pseudo }],
        },
      });

      if (existingUser) {
        if (existingUser.email === data.email) {
          return res
            .status(400)
            .send({ message: "Cet e-mail est déjà utilisé." });
        }
        if (existingUser.pseudo === data.pseudo) {
          return res
            .status(400)
            .send({ message: "Ce pseudo est déjà utilisé." });
        }
      }

      if (!data.agreedToTerms) {
        return res.status(400).send({
          message: "Vous devez accepter les conditions d'utilisation",
        });
        return;
      }

      const hashPassword = await authService.generateHashedPassword(
        plaintextPassword
      );
      const createdUser = await prisma.user.create({
        data: {
          ...data,
          password: hashPassword,
          consentGivenAt: new Date(),
        },
      });
      // avoid displaying the plain password in the server response
      delete createdUser.password;
      res.status(201).json(createdUser);
    } catch (err) {
      errorHandler(err, req, res, next);
    }
  },

  /**
   * @description - Reset user password
   * @param {object} req  - The Express request object
   * @param {object} req.body - The request body containing user data
   * @param {object} res - The Express response object
   * @param {Function} next - The function to call to move to the next middleware step.
   * @returns {object} - A JSON object containing the JWT token.
   * @throws {Error} If an error occurs during processing
   */
  passwordReset: async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({ message: "champ invalide" });
    }
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });
      if (!user) {
        return res.status(404).send({ message: "utilisateur non trouvé" });
      }

      const token = authService.generateJwt(email, user.pseudo);
      // Return a signed JWT for validation
      return res.json({ token });
    } catch (error) {
      errorHandler(error, req, res, next);
    }
  },
};
export { authController };
