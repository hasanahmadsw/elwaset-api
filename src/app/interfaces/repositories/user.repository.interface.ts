import { CreateUser, IUserSchema } from "../schema/user.schema";

export interface IUserRepository {
  insertOne(data: CreateUser): Promise<IUserSchema>;
  findOneById(id: string): Promise<IUserSchema | undefined>;
  findOneByEmail(email: string): Promise<IUserSchema | undefined>;
  findAll(): Promise<{
    count: number;
    rows: IUserSchema[];
  }>;
  updateOne(id: string, data: Partial<IUserSchema>): Promise<IUserSchema>;
  deleteOne(id: string): Promise<boolean>;
}
