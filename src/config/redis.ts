import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

export const redisClient = new Redis(redisUrl);

redisClient.on("connect", () => console.log("redis is running"));
redisClient.on("error", (err) => console.log("error ", err));
