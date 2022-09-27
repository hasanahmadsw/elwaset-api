import {
  CreateJobCategory,
  IJobCategorySchema,
} from "../schema/job-category.schema";

export type JobCategoryQueryType = {
  page?: number;
  limit?: number;
};

export interface IJobCategoryRepository {
  insertOne(data: CreateJobCategory): Promise<IJobCategorySchema>;
  findOneById(id: string): Promise<IJobCategorySchema | undefined>;
  findOneBySlug(slug: string): Promise<IJobCategorySchema | undefined>;
  findAll(query: JobCategoryQueryType): Promise<{
    rows: IJobCategorySchema[];
    count: number;
  }>;
  updateOne(
    id: string,
    data: Partial<CreateJobCategory>
  ): Promise<IJobCategorySchema>;
  deleteOne(id: string): Promise<boolean>;
}
