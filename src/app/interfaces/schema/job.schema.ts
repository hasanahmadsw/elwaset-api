export interface IJobSchema {
  _id: string;
  slug: string;
  title: string;
  description: string;
  country?: string;
  city?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  company?: string;
  salary?: number;
  featured?: number;
  employmentType?: string;
  experiences?: string;
}

export type CreateJob = Omit<IJobSchema, "_id">;
