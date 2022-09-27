import { v4 as uuidv4 } from "uuid";
import { JobQueryType } from "../interfaces/repositories/job.repository.interface";
import { IJobSchema } from "../interfaces/schema/job.schema";
import JobRepository from "../repositories/job.repository";
import errorCodes from "../utils/constants/errorCodes";
import Exception from "../utils/exception";
export async function createOne(data: IJobSchema) {
  data._id = uuidv4();
  const slugExists = await JobRepository.findOneBySlug(data.slug);
  if (slugExists) throw new Exception(errorCodes.SLUG_NOT_AVAILABLE);
  const job = await JobRepository.insertOne(data);
  return job;
}

export async function findOneById(id: string) {
  const job = await JobRepository.findOneById(id);
  if (!job) throw new Exception(errorCodes.NOT_FOUND);
  return job;
}

export async function findOneBySlug(slug: string) {
  const job = await JobRepository.findOneBySlug(slug);
  if (!job) throw new Exception(errorCodes.NOT_FOUND);
  return job;
}

export async function findAll(query: JobQueryType) {
  const jobs = await JobRepository.findAll(query);
  return jobs;
}

export async function updateOne(id: string, data: Partial<IJobSchema>) {
  const isExists = await JobRepository.findOneById(id);
  if (!isExists) throw new Exception(errorCodes.NOT_FOUND);
  const job = await JobRepository.updateOne(id, data);
  return job;
}

export async function deleteOne(id: string) {
  const job = await JobRepository.findOneById(id);
  if (!job) throw new Exception(errorCodes.NOT_FOUND);
  return await JobRepository.deleteOne(id);
}
