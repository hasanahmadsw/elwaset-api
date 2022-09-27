import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASS = process.env.DATABASE_PASS;
export const JWT_SECRET = process.env.JWT_SECRET;
