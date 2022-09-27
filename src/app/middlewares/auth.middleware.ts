/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jwt from "jsonwebtoken";

import { NextFunction, Response } from "express";

import { JWT_SECRET } from "../../config";
import { IUserSchema } from "../interfaces/schema/user.schema";
import { User } from "../models/user.model";
import errorCodes from "../utils/constants/errorCodes";
import Exception from "../utils/exception";

const authException = new Exception(errorCodes.UNAUTHORIZED);

export function createToken(user: IUserSchema, secret: string): string {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    },
    secret,
    {
      expiresIn: "10d",
    }
  );
}

export async function userAuth(req: any, res: Response, next: NextFunction) {
  try {
    if (!req.header("Authorization")) return next(authException);
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return next(authException);

    const user: any = await jwt.verify(token, JWT_SECRET);
    if (!user) return next(authException);
    if (user.role !== "user") return next(authException);
    const result = await User.findByPk(user._id);
    if (!result) return next(authException);
    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
}

export async function adminAuth(req: any, res: Response, next: NextFunction) {
  try {
    if (!req.header("Authorization")) return next(authException);
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return next(authException);

    const user: any = await jwt.verify(token, JWT_SECRET);
    if (!user) return next(authException);
    if (user.role !== "admin") return next(authException);
    const result = await User.findByPk(user._id);
    if (!result) return next(authException);
    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
}

export async function isValidUserLoginToken(
  token: string,
  secret: string
): Promise<boolean> {
  try {
    await jwt.verify(token, secret);
    return true;
  } catch {
    return false;
  }
}
