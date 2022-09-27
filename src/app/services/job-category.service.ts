import { v4 as uuidv4 } from "uuid";
import { JobCategoryQueryType } from "../interfaces/repositories/job-category.repository.interface";
import { IJobCategorySchema } from "../interfaces/schema/job-category.schema";
import JobCategoryRepository from "../repositories/job-category.repository";
import errorCodes from "../utils/constants/errorCodes";
import Exception from "../utils/exception";

export async function createOne(data: IJobCategorySchema) {
  data._id = uuidv4();
  const slugExists = await JobCategoryRepository.findOneBySlug(data.slug);
  if (slugExists) throw new Exception(errorCodes.SLUG_NOT_AVAILABLE);
  const jobCategory = await JobCategoryRepository.insertOne(data);
  return jobCategory;
}

export async function findOneById(id: string) {
  const jobCategory = await JobCategoryRepository.findOneById(id);
  if (!jobCategory) throw new Exception(errorCodes.NOT_FOUND);
  return jobCategory;
}

export async function findOneBySlug(slug: string) {
  const jobCategory = await JobCategoryRepository.findOneBySlug(slug);
  if (!jobCategory) throw new Exception(errorCodes.NOT_FOUND);
  return jobCategory;
}

export async function findAll(query: JobCategoryQueryType) {
  const jobCategorys = await JobCategoryRepository.findAll(query);
  return jobCategorys;
}

export async function updateOne(id: string, data: Partial<IJobCategorySchema>) {
  const isExists = await JobCategoryRepository.findOneById(id);
  if (!isExists) throw new Exception(errorCodes.NOT_FOUND);
  const jobCategory = await JobCategoryRepository.updateOne(id, data);
  return jobCategory;
}

export async function deleteOne(id: string) {
  const jobCategory = await JobCategoryRepository.findOneById(id);
  if (!jobCategory) throw new Exception(errorCodes.NOT_FOUND);
  return await JobCategoryRepository.deleteOne(id);
}
