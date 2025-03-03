"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherByCityName = exports.getWeatherByCoordinates = void 0;
const axios_1 = __importDefault(require("axios"));
const redis_1 = require("../config/redis");
const encryption_1 = require("../config/encryption");
const getWeatherByCoordinates = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = `weather:${lat}:${lon}`;
    const cachedData = yield redis_1.redisClient.get(cacheKey);
    if (cachedData) {
        return (0, encryption_1.encrypt)(cachedData);
    }
    const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { lat, lon, appid: process.env.WEATHER_API_KEY },
    });
    const data = JSON.stringify(response.data);
    yield redis_1.redisClient.setex(cacheKey, 3600, data);
    return (0, encryption_1.encrypt)(data);
});
exports.getWeatherByCoordinates = getWeatherByCoordinates;
const getWeatherByCityName = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = `weather:${city.toLowerCase()}`;
    const cachedData = yield redis_1.redisClient.get(cacheKey);
    if (cachedData) {
        return (0, encryption_1.encrypt)(cachedData);
    }
    const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { q: city, appid: process.env.WEATHER_API_KEY },
    });
    const data = JSON.stringify(response.data);
    yield redis_1.redisClient.setex(cacheKey, 3600, data);
    return (0, encryption_1.encrypt)(data);
});
exports.getWeatherByCityName = getWeatherByCityName;
