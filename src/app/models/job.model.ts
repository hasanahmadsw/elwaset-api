import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

import { IJobSchema } from "../interfaces/schema/job.schema";
import { JobCategory } from "./job-category.model";

@Table({
  tableName: "job",
  timestamps: true,
})
export class Job extends Model implements IJobSchema {
  @PrimaryKey
  @Unique
  @Column
  _id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  slug!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  title!: string;

  @NotEmpty
  @Column(DataType.TEXT)
  description!: string;

  @Default("الإمارات")
  @Column
  country?: string;

  @Default("")
  @Column
  city?: string;

  @Default("")
  @Column
  email?: string;

  @Default("")
  @Column
  phone?: string;

  @Default("")
  @Column
  whatsapp?: string;

  @Default("")
  @Column
  company?: string;

  @Default(0)
  @Column
  salary?: number;

  @Default(0)
  @Column
  featured?: number;

  @Default("دوام كامل")
  @Column
  employmentType?: string;

  @Default("مبتدئ")
  @Column
  experiences?: string;

  @ForeignKey(() => JobCategory)
  categoryId!: string;

  @BelongsTo(() => JobCategory)
  category!: JobCategory;
}
