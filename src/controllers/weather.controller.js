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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherByCity = exports.getWeatherByLocation = void 0;
const weather_service_1 = require("../services/weather.service");
const getWeatherByLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            res.status(400).json({ error: "Latitude and Longitude are required" });
            return;
        }
        const encryptedData = yield (0, weather_service_1.getWeatherByCoordinates)(lat, lon);
        res.json({ data: encryptedData });
    }
    catch (error) {
        console.error("Error in getWeatherByLocation:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
exports.getWeatherByLocation = getWeatherByLocation;
const getWeatherByCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        if (!name) {
            res.status(400).json({ error: "City name is required" });
            return;
        }
        const encryptedData = yield (0, weather_service_1.getWeatherByCityName)(name);
        res.json({ data: encryptedData });
    }
    catch (error) {
        console.error("Error in getWeatherByCity:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
exports.getWeatherByCity = getWeatherByCity;
