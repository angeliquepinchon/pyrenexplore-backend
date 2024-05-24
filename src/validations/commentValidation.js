import Joi from "joi";

const commentValidation = {
  create: Joi.object({
    content: Joi.string().required(),
    createdAt: Joi.date().default(new Date()),
  }),
  update: Joi.object({
    content: Joi.string(),
  }),
};

export { commentValidation };
