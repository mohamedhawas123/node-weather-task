"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_controller_1 = require("../controllers/weather.controller");
const router = express_1.default.Router();
router.get("/current", (req, res) => {
    (0, weather_controller_1.getWeatherByLocation)(req, res).catch((err) => {
        console.error("Error in getWeatherByLocation:", err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});
router.get("/city/:name", (req, res) => {
    (0, weather_controller_1.getWeatherByCity)(req, res).catch((err) => {
        console.error("Error in getWeatherByCity:", err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});
exports.default = router;
