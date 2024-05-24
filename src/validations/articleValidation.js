import Joi from "joi";

const articleValidation = {
  create: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    photo: Joi.string().allow(null).optional(),
    createdAt: Joi.date().default(new Date()), // Set current date by default when creating, // Make the field optional because it is nullable in the Prisma model
  }),

  update: Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    photo: Joi.string().allow(null).optional(),
    createdAt: Joi.date(),
  }),
};

export { articleValidation };
