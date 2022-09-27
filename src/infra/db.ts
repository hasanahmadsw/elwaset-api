import { DATABASE_NAME, DATABASE_PASS, DATABASE_USER } from "../config";

import { Sequelize } from "sequelize-typescript";
import { JobCategory } from "../app/models/job-category.model";
import { Job } from "../app/models/job.model";
import { User } from "../app/models/user.model";

export const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
  host: "localhost",
  port: +3306,

  dialect: "mysql",
  models: [JobCategory, Job, User],
});
