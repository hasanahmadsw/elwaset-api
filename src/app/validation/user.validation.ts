import * as Joi from "joi";

export const register = Joi.object()
  .keys({
    name: Joi.string().min(3).max(256).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  })
  .required();

export const login = Joi.object()
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  })
  .required();
