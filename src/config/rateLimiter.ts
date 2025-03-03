import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'


dotenv.config()


export const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS|| 'RATE_LIMIT_WINDOW_MS'),
    max: parseInt(process.env.RATE_LIMIT_MAX|| '100'),
    message: 'Too Many Requests, please try again later',
    headers: true
})
