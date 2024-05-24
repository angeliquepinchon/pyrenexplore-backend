import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

const authService = {
  /**
   * @description - generate an encrypted password
   * @param {string} plainPassword - user's plain password
   * @returns {Promise<string>} - hashed password
   * @example - authService.generateHashedPassword('my-plain-password')
   */
  generateHashedPassword: async (plainPassword) => {
    try {
      const salt = 10;
      const hashPassword = await bcrypt.hash(plainPassword, salt);
      return hashPassword;
    } catch (error) {
      console.error("Error generating hashed password:", error);
      throw new Error("Error generating hashed password");
    }
  },

  /**
   *
   * @param {string} password - the user's plain password
   * @param {string} hashedPassword - hashed password
   * @returns {Promise<boolean>} - Resolves to true if the two passwords match. Otherwisen return false
   * @example - authService.validatePassword('my-plain-password','the hashed-password')
   */
  validatePassword: async (password, hashedPassword) => {
    try {
      const comparePassword = await bcrypt.compare(password, hashedPassword);
      return comparePassword;
    } catch (error) {
      console.error("Error validatePassword:", error);
      throw new Error("Error validatePassword");
    }
  },

  /**
   * @description - generate a jason web token
   * @param {string} email - user's email
   * @param {string} pseudo - user's pseudo
   * @return {string} - A string encrypted with 3 parts (payload+secreteKey+header)
   * @example - authService.generateJwt("johnDo@gmail.com", "jonnyDo")
   */
  generateJwt: (email, pseudo) => {
    try {
      const secretKey = process.env.SECRET_KEY;
      const expiration = Math.floor(Date.now() / 1000) + 60 * 60;

      const payload = {
        email: email,
        pseudo: pseudo,
        exp: expiration,
      };

      const header = {
        alg: "HS256",
        typ: "JWT",
      };

      const token = jwt.sign(payload, secretKey, { header });
      return token;
    } catch (error) {
      console.error("Error generate jwt:", error);
      throw new Error("Error generate jwt");
    }
  },
};

export { authService };
