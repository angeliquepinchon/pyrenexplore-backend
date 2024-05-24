import Joi from "joi";

const authValidation = {
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    remember: Joi.boolean(),
  }),
  passwordReset: Joi.object({
    email: Joi.string().email().required(),
  }),
};
export { authValidation };
