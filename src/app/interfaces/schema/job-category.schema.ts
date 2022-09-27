export interface IJobCategorySchema {
  _id: string;
  slug: string;
  title: string;
  icon: string;
}

export type CreateJobCategory = Omit<IJobCategorySchema, '_id'>;
