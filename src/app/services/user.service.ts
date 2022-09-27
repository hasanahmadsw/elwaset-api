import { CreateUser, LoginUser } from "../interfaces/schema/user.schema";
import { comparePasswordWithHash, encryptPassword } from "../utils/encrypt";

import { v4 as uuidv4 } from "uuid";
import { JWT_SECRET } from "../../config";
import { IUserSchema } from "../interfaces/schema/user.schema";
import { createToken } from "../middlewares/auth.middleware";
import UserRepository from "../repositories/user.repository";
import errorCodes from "../utils/constants/errorCodes";
import Exception from "../utils/exception";

export async function createUser(data: IUserSchema) {
  const userExists = await UserRepository.findOneByEmail(data.email);
  if (userExists) throw new Exception(errorCodes.EMAIL_NOT_AVAILABLE);
  const insertData = {
    _id: uuidv4(),
    name: data.name,
    email: data.email,
    password: await encryptPassword(data.password),
    role: "user",
  };
  const user = await UserRepository.insertOne(insertData);
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
  };
  const token = await createToken(payload, JWT_SECRET);
  return {
    user,
    token,
  };
}
export async function loginUser(data: LoginUser) {
  const user = await UserRepository.findOneByEmail(data.email);
  if (!user) throw new Exception(errorCodes.INVALID_LOGIN);
  const isValidPassword = await comparePasswordWithHash(
    data.password,
    user.password
  );
  if (!isValidPassword) throw new Exception(errorCodes.INVALID_LOGIN);
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
  };
  const token = await createToken(payload, JWT_SECRET);
  return {
    user,
    token,
  };
}
export async function findOneById(id: string) {
  const user = await UserRepository.findOneById(id);
  if (!user) throw new Exception(errorCodes.NOT_FOUND);
  return user;
}
export async function findOneByEmail(email: string) {
  const user = await UserRepository.findOneByEmail(email);
  if (!user) throw new Exception(errorCodes.NOT_FOUND);
  return user;
}
export async function findAll() {
  const users = await UserRepository.findAll();
  return users;
}
export async function updateOne(id: string, data: Partial<IUserSchema>) {
  const userExist = await UserRepository.findOneById(id);
  if (!userExist) throw new Exception(errorCodes.NOT_FOUND);
  const user = await UserRepository.updateOne(id, data);
  return user;
}
export async function deleteOne(id: string) {
  const userExist = await UserRepository.findOneById(id);
  if (!userExist) throw new Exception(errorCodes.NOT_FOUND);
  const user = await UserRepository.deleteOne(id);
  return user;
}

export async function createAdmin(data: CreateUser) {
  const insertData = {
    name: data.name,
    email: data.email,
    password: await encryptPassword(data.password),
    role: "admin",
  };
  const isExist = await UserRepository.findOneByEmail(data.email);
  if (isExist) throw new Exception(errorCodes.ADMIN_EXISTS);
  const admin = await UserRepository.insertOne(insertData);
  return admin;
}
