import { IJobSchema } from "../schema/job.schema";

export type JobQueryType = {
  q?: string;
  category?: string;
  city?: string;
  featured?: number;
  page?: number;
  limit?: number;
};

export interface IJobRepository {
  insertOne(data: IJobSchema): Promise<IJobSchema>;
  findOneById(id: string): Promise<IJobSchema | undefined>;
  findOneBySlug(slug: string): Promise<IJobSchema | undefined>;
  findAll(query: JobQueryType): Promise<{
    rows: IJobSchema[];
    count: number;
  }>;

  updateOne(id: string, data: Partial<IJobSchema>): Promise<IJobSchema>;
  deleteOne(id: string): Promise<boolean>;
}
