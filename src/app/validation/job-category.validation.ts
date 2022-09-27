import * as Joi from "joi";

export const createCategory = Joi.object()
  .keys({
    slug: Joi.string().min(2).max(256).required(),
    title: Joi.string().min(3).max(256).required(),
    icon: Joi.string().min(6).max(256).required(),
  })
  .required();

export const updateCategory = Joi.object()
  .keys({
    slug: Joi.string().min(2).max(256).optional(),
    title: Joi.string().min(3).max(256).optional(),
    icon: Joi.string().min(6).max(256).optional(),
  })
  .required();
