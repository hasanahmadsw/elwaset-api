import * as Joi from "joi";

export const createJob = Joi.object()
  .keys({
    slug: Joi.string().min(2).max(256).required(),
    title: Joi.string().min(3).max(256).required(),
    description: Joi.string().min(3).max(256).required(),
    categoryId: Joi.string().min(3).max(256).required(),
    country: Joi.string().min(3).max(256).optional(),
    city: Joi.string().min(3).max(256).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().min(10).max(10).optional(),
    whatsapp: Joi.string().min(10).max(10).optional(),
    featured: Joi.number().max(1).optional(),
    salary: Joi.number().optional(),
    employmentType: Joi.string().optional(),
    experiences: Joi.string().optional(),
  })
  .required();

export const updateJob = Joi.object()
  .keys({
    slug: Joi.string().min(2).max(256).optional(),
    title: Joi.string().min(3).max(256).optional(),
    description: Joi.string().min(3).max(256).optional(),
    category: Joi.string().min(3).max(256).optional(),
    country: Joi.string().min(3).max(256).optional(),
    city: Joi.string().min(3).max(256).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().min(10).max(10).optional(),
    whatsapp: Joi.string().min(10).max(10).optional(),
    featured: Joi.number().max(1).optional(),
    salary: Joi.number().optional(),
    employmentType: Joi.string().optional(),
    experiences: Joi.string().optional(),
  })
  .required();
