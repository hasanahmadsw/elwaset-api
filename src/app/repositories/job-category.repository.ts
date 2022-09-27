import {
  IJobCategoryRepository,
  JobCategoryQueryType,
} from "../interfaces/repositories/job-category.repository.interface";
import {
  CreateJobCategory,
  IJobCategorySchema,
} from "../interfaces/schema/job-category.schema";
import { JobCategory } from "../models/job-category.model";

export class JobCategoryRepository implements IJobCategoryRepository {
  async insertOne(data: CreateJobCategory): Promise<IJobCategorySchema> {
    const jobCategory = await JobCategory.create(data);
    return jobCategory;
  }
  async findOneById(id: string): Promise<IJobCategorySchema> {
    const jobCategory = await JobCategory.findByPk(id);
    return jobCategory;
  }
  async findOneBySlug(slug: string): Promise<IJobCategorySchema> {
    const jobCategory = await JobCategory.findOne({ where: { slug: slug } });
    return jobCategory;
  }
  async findAll(query: JobCategoryQueryType): Promise<{
    rows: IJobCategorySchema[];
    count: number;
  }> {
    const limit = Math.max(parseInt(`${query.limit || 10}`, 10), 1);
    const offset = (Math.max(query.page || 1, 1) - 1) * limit;
    const categories = await JobCategory.findAndCountAll({
      limit: limit,
      offset: offset,
    });
    return categories;
  }
  async updateOne(
    id: string,
    data: Partial<CreateJobCategory>
  ): Promise<IJobCategorySchema> {
    const jobCategory = await JobCategory.findByPk(id);
    await jobCategory.update(data);
    return jobCategory;
  }
  async deleteOne(id: string): Promise<boolean> {
    await JobCategory.destroy({ where: { _id: id } });
    return;
  }
}

export default new JobCategoryRepository();
