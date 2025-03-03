"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_routes_1 = __importDefault(require("./weather.routes"));
const city_routes_1 = __importDefault(require("./city.routes"));
const favorites_routes_1 = __importDefault(require("./favorites.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = express_1.default.Router();
router.use('/weather', weather_routes_1.default);
router.use('/city', city_routes_1.default);
router.use('/favorites', favorites_routes_1.default);
router.use('/auth', auth_routes_1.default);
exports.default = router;
