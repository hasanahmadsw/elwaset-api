import * as bcrypt from "bcrypt";

export async function encryptPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export function comparePasswordWithHash(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
