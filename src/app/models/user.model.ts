import {
  AllowNull,
  Column,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

import { IUserSchema } from "../interfaces/schema/user.schema";

@Table({
  tableName: "user",
  timestamps: false,
})
export class User extends Model implements IUserSchema {
  @PrimaryKey
  @Unique
  @Column
  _id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @AllowNull(false)
  @Unique
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  role!: string;
}
