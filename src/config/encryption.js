"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const algorithm = "aes-256-ctr";
const secretKey = process.env.ENCRYPTION_KEY || "any_secret_key";
const key = crypto_1.default.createHash("sha256").update(secretKey).digest();
const iv = crypto_1.default.randomBytes(16);
const encrypt = (text) => {
    const cipher = crypto_1.default.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([
        cipher.update(text, "utf8"),
        cipher.final(),
    ]);
    return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};
exports.encrypt = encrypt;
const decrypt = (hash) => {
    const [ivHex, encryptedText] = hash.split(":"); // Extract IV and encrypted data
    const ivBuffer = Buffer.from(ivHex, "hex"); // Convert IV back to Buffer
    const decipher = crypto_1.default.createCipheriv(algorithm, key, ivBuffer);
    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(encryptedText, "hex")),
        decipher.final(),
    ]);
    return decrypted.toString("utf8");
};
exports.decrypt = decrypt;
