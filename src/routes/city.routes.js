"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const city_controller_1 = require("../controllers/city.controller");
const router = express_1.default.Router();
router.get('/search', (req, res) => {
    (0, city_controller_1.searchCityWeather)(req, res).catch((err) => {
        console.error('Error in searchCityWeather:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});
exports.default = router;
