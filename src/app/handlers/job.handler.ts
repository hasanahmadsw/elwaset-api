import * as JobServices from "../services/job.service";

import { NextFunction, Request, Response } from "express";

import { JobQueryType } from "../interfaces/repositories/job.repository.interface";
import { IJobSchema } from "../interfaces/schema/job.schema";

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: IJobSchema = req.body;
  try {
    const job = await JobServices.createOne(data);
    res.status(201).json({
      response: job,
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
    const job = await JobServices.findOneById(id);
    return res.status(200).json({
      response: job,
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
    const job = await JobServices.findOneBySlug(slug);
    return res.status(200).json({
      response: job,
    });
  } catch (err) {
    next(err);
  }
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
  const query: JobQueryType = req.query;
  try {
    const jobs = await JobServices.findAll(query);
    return res.status(200).json({
      response: jobs,
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
  const data: Partial<IJobSchema> = req.body;
  const id: string = req.params.id;
  try {
    const job = await JobServices.updateOne(id, data);
    return res.status(202).json({
      response: job,
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
    await JobServices.deleteOne(id);
    return res.status(202).json({
      response: "deleted",
    });
  } catch (err) {
    next(err);
  }
}
