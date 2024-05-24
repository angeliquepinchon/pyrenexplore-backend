import Joi from "joi";

const speciesValidation = {
  create: Joi.object({
    category: Joi.string().uppercase().valid("ANIMAL", "VEGETAL").required(),
    type: Joi.string()
      .uppercase()
      .valid(
        "MAMMIFERE",
        "OISEAU",
        "INSECT",
        "POISSON",
        "CRUSTACE",
        "MOLLUSQUE",
        "VERS",
        "REPTILE",
        "AMPHIBIEN"
      )
      .required(),
    scientificName: Joi.string(),
    name: Joi.string().required(),
    habitat: Joi.string(),
    findIt: Joi.string(),
    description: Joi.string(),
    behavior: Joi.string(),
    lifeCycle: Joi.string(),
    diet: Joi.string(),
    photo: Joi.string().required(),
    status: Joi.string(),
    addInformation: Joi.string(),
  }),
  update: Joi.object({
    category: Joi.string().uppercase().valid("ANIMAL", "VEGETAL"),
    type: Joi.string()
      .uppercase()
      .valid(
        "MAMMIFERE",
        "OISEAU",
        "INSECT",
        "POISSON",
        "CRUSTACE",
        "MOLLUSQUE",
        "VERS",
        "REPTILE",
        "AMPHIBIEN"
      ),
    scientificName: Joi.string(),
    name: Joi.string(),
    habitat: Joi.string(),
    findIt: Joi.string(),
    description: Joi.string(),
    behavior: Joi.string(),
    lifeCycle: Joi.string(),
    diet: Joi.string(),
    photo: Joi.string(),
    status: Joi.string(),
    addInformation: Joi.string(),
  }),
};

export { speciesValidation };
