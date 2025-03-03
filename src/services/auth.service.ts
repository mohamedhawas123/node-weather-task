import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const registerUser = async (
  email: string,
  password: string
): Promise<void> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword });
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.getDataValue("password"));
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign(
    { id: user.getDataValue("id") },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
};
