import Joi from "joi";

const projectValidation ={
  create: Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required(),
    photo: Joi.string().allow(null).optional(),
    numberParticipant: Joi.number().integer().optional(),
    description: Joi.string().required(),
    createdAt: Joi.date().default(new Date()),
  }),
  update: Joi.object({
    title: Joi.string(),
    location: Joi.string(),
    photo: Joi.string().allow(null).optional(),
    numberParticipant: Joi.number().integer().optional(),
    description: Joi.string(),
    createdAt: Joi.date(),
  }),
};

export { projectValidation };

