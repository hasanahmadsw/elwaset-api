import * as UserService from "../services/user.service";

import { NextFunction, Request, Response } from "express";
import { IUserSchema, LoginUser } from "../interfaces/schema/user.schema";

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: IUserSchema = req.body;
  try {
    const user = await UserService.createUser(data);
    res.status(201).json({
      response: user,
    });
  } catch (err) {
    next(err);
  }
}

export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: LoginUser = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const user = await UserService.loginUser(data);
    res.status(200).json({
      response: user,
    });
  } catch (err) {
    next(err);
  }
}

export async function findOneById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: string = req.params.id;
  try {
    const user = await UserService.findOneById(id);
    return res.status(200).json({
      response: user,
    });
  } catch (err) {
    next(err);
  }
}
