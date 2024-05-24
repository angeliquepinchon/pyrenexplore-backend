import Joi from "joi";

const userValidation = {
  create: Joi.object({
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    pseudo: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    agreedToTerms: Joi.boolean().valid(true).required(),
    consentGivenAt: Joi.date().required(),
    photo: Joi.string().allow(null).optional(),
  }),
  update: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    pseudo: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    photo: Joi.string().allow(null).optional(),
  }),
};

export { userValidation };
