import {
  AllowNull,
  Column,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

import { IJobCategorySchema } from "../interfaces/schema/job-category.schema";
import { Job } from "./job.model";

@Table({
  tableName: "job-category",
  timestamps: false,
})
export class JobCategory extends Model implements IJobCategorySchema {
  @PrimaryKey
  @Unique
  @Column
  _id!: string;

  @Unique
  @AllowNull(false)
  @NotEmpty
  @Column
  slug!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  title!: string;

  @NotEmpty
  @Column
  icon!: string;

  @HasMany(() => Job)
  jobs!: Job[];
}
