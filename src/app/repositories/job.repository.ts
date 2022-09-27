import { Op } from "sequelize";
import {
  IJobRepository,
  JobQueryType,
} from "../interfaces/repositories/job.repository.interface";

import { CreateJob, IJobSchema } from "../interfaces/schema/job.schema";
import { JobCategory } from "../models/job-category.model";
import { Job } from "../models/job.model";

export class JobRepository implements IJobRepository {
  async insertOne(data: CreateJob): Promise<IJobSchema> {
    const job = await Job.create(data);
    return job;
  }
  async findOneById(id: string): Promise<IJobSchema> {
    const job = await Job.findByPk(id);
    return job;
  }
  async findOneBySlug(slug: string): Promise<IJobSchema> {
    const job = await Job.findOne({ where: { slug: slug } });
    return job;
  }
  async findAll(
    query: JobQueryType
  ): Promise<{ rows: IJobSchema[]; count: number }> {
    const limit = Math.max(parseInt(`${query.limit || 10}`, 10), 1);
    const offset = (Math.max(query.page || 1, 1) - 1) * limit;
    if (query.q && query.category) {
      const jobs = await Job.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {
          [Op.and]: {
            categoryId: {
              [Op.like]: `${query.category}`,
            },
            [Op.or]: {
              description: {
                [Op.like]: `%${query.q}%`,
              },
              title: {
                [Op.like]: `%${query.q}%`,
              },
            },
          },
        },
      });
      return jobs;
    } else if (query.q && !query.category) {
      const jobs = await Job.findAndCountAll({
        order: [["createdAt", "desc"]],
        limit: limit,
        offset: offset,
        where: {
          [Op.or]: {
            description: {
              [Op.like]: `%${query.q}%`,
            },
            title: {
              [Op.like]: `%${query.q}%`,
            },
          },
        },
      });
      return jobs;
    } else if (!query.q && query.category) {
      const jobs = await Job.findAndCountAll({
        order: [
          ["featured", "desc"],
          ["createdAt", "desc"],
        ],
        limit: limit,
        offset: offset,
        where: {
          categoryId: {
            [Op.like]: `${query.category}`,
          },
        },
      });
      return jobs;
    } else if (query.city) {
      const jobs = await Job.findAndCountAll({
        order: [
          ["featured", "desc"],
          ["createdAt", "desc"],
        ],
        limit: limit,
        offset: offset,
        where: {
          city: {
            [Op.like]: `${query.city}`,
          },
        },
      });
      return jobs;
    } else if (query.featured) {
      const jobs = await Job.findAndCountAll({
        order: [["createdAt", "desc"]],
        limit: limit,
        offset: offset,
        where: {
          featured: {
            [Op.like]: `${query.featured}`,
          },
        },
      });
      return jobs;
    } else {
      const jobs = await Job.findAndCountAll({
        order: [["createdAt", "desc"]],
        limit: limit,
        offset: offset,
        include: [JobCategory],
      });
      return jobs;
    }
  }

  async updateOne(id: string, data: Partial<IJobSchema>): Promise<IJobSchema> {
    const job = await Job.findByPk(id);
    return await job.update(data);
  }
  async deleteOne(id: string): Promise<boolean> {
    await Job.destroy({ where: { _id: id } });
    return;
  }
}

export default new JobRepository();
