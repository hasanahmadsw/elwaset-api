import { CreateUser, IUserSchema } from "../interfaces/schema/user.schema";

import { IUserRepository } from "../interfaces/repositories/user.repository.interface";
import { User } from "../models/user.model";

export class UserRepository implements IUserRepository {
  async insertOne(data: CreateUser): Promise<IUserSchema> {
    return await User.create(data);
  }
  async findOneById(id: string): Promise<IUserSchema> {
    return await User.findByPk(id);
  }
  async findOneByEmail(email: string): Promise<IUserSchema> {
    return await User.findOne({ where: { email: email } });
  }
  async findAll(): Promise<{ count: number; rows: IUserSchema[] }> {
    const users = await User.findAndCountAll();
    return users;
  }
  async updateOne(
    id: string,
    data: Partial<IUserSchema>
  ): Promise<IUserSchema> {
    const user = await User.findByPk(id);
    return await user.update(data);
  }
  async deleteOne(id: string): Promise<boolean> {
    await User.destroy({ where: { _id: id } });
    return;
  }
}

export default new UserRepository();
