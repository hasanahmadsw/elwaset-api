export interface IUserSchema {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type CreateUser = Omit<IUserSchema, '_id' | 'role'>;
export type LoginUser = Omit<IUserSchema, '_id' | 'role' | 'name'>;
