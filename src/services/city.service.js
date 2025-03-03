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
exports.searchCityWeather = void 0;
const axios_1 = __importDefault(require("axios"));
const encryption_1 = require("../config/encryption");
const searchCityWeather = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { q: city, appid: process.env.WEATHER_API_KEY },
    });
    return (0, encryption_1.encrypt)(JSON.stringify(response.data));
});
exports.searchCityWeather = searchCityWeather;
