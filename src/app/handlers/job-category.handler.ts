import * as JobCategoryServices from "../services/job-category.service";

import { NextFunction, Request, Response } from "express";

import { JobCategoryQueryType } from "../interfaces/repositories/job-category.repository.interface";
import { IJobCategorySchema } from "../interfaces/schema/job-category.schema";

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: IJobCategorySchema = req.body;
  try {
    const category = await JobCategoryServices.createOne(data);
    res.status(201).json({
      response: category,
    });
  } catch (err) {
    next(err);
  }
}

export async function findOneById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: string = req.params.id;
  try {
    const category = await JobCategoryServices.findOneById(id);
    return res.status(200).json({
      response: category,
    });
  } catch (err) {
    next(err);
  }
}

export async function findOneBySlug(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const slug: string = req.params.slug;
  try {
    const category = await JobCategoryServices.findOneBySlug(slug);
    return res.status(200).json({
      response: category,
    });
  } catch (err) {
    next(err);
  }
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const query: JobCategoryQueryType = req.query;
    const categories = await JobCategoryServices.findAll(query);
    return res.status(200).json({
      response: categories,
    });
  } catch (err) {
    next(err);
  }
}

export async function updateOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: Partial<IJobCategorySchema> = req.body;
  const id: string = req.params.id;
  try {
    const category = await JobCategoryServices.updateOne(id, data);
    return res.status(202).json({
      response: category,
    });
  } catch (err) {
    next(err);
  }
}

export async function deleteOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: string = req.params.id;
  try {
    await JobCategoryServices.deleteOne(id);
    return res.status(202).json({
      response: "deleted",
    });
  } catch (err) {
    next(err);
  }
}
