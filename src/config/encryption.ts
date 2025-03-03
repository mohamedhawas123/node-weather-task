import crypto from "crypto";

import dotenv from "dotenv";

dotenv.config();

const algorithm = "aes-256-ctr";
const secretKey = process.env.ENCRYPTION_KEY || "any_secret_key";

const key = crypto.createHash("sha256").update(secretKey).digest();

const iv = crypto.randomBytes(16);

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};

export const decrypt = (hash: string): string => {
  const [ivHex, encryptedText] = hash.split(":"); // Extract IV and encrypted data
  const ivBuffer = Buffer.from(ivHex, "hex"); // Convert IV back to Buffer
  const decipher = crypto.createCipheriv(algorithm, key, ivBuffer);

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
};
