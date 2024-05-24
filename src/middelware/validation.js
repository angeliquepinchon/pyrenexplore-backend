import Joi from "joi";
import { errorHandler } from "./errorHandlerMiddleware.js";

/**
 * @description Middleware for validating request data against a Joi schema.
 * @param {Joi.Schema} schema - The Joi schema to validate the request data against.
 * @param {string} key - The key in the request object where the data to validate is located.
 * @returns {function} - Express middleware function.
 */
const validate = (schema, key) => (req, res, next) => {
  try {
    const validatedValues = Joi.attempt(req[key], schema);
    // Replace the original request data with the validated values
    req[key] = validatedValues;
    next();
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

export { validate };
