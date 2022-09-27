import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASS,
  DATABASE_USER,
} from "../config";

import { Sequelize } from "sequelize-typescript";
import { JobCategory } from "../app/models/job-category.model";
import { Job } from "../app/models/job.model";
import { User } from "../app/models/user.model";

export const db = new Sequelize(
  DATABASE_NAME || "forsa",
  DATABASE_USER || "root",
  DATABASE_PASS || "root",

  {
    host: DATABASE_HOST || "localhost",
    port: +8889,

    dialect: "mysql",
    models: [JobCategory, Job, User],
  }
);