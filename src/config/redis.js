"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
exports.redisClient = new ioredis_1.default(redisUrl);
exports.redisClient.on("connect", () => console.log("redis is running"));
exports.redisClient.on("error", (err) => console.log("error ", err));
