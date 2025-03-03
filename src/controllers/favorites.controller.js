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
exports.getFavorites = exports.addFavorite = void 0;
const favorites_service_1 = require("../services/favorites.service");
const addFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, cityName } = req.body;
        if (!userId || !cityName) {
            res.status(400).json({ error: "User ID and City Name are required" });
            return;
        }
        const encryptedData = yield (0, favorites_service_1.addFavoriteCity)(userId, cityName);
        res.status(201).json({ data: encryptedData });
    }
    catch (error) {
        console.error("Error in addFavorite:", error);
        res.status(500).json({ error: "Failed to add favorite city" });
    }
});
exports.addFavorite = addFavorite;
const getFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        if (!userId) {
            res.status(400).json({ error: "User ID is required" });
            return;
        }
        const encryptedData = yield (0, favorites_service_1.getFavoriteCities)(userId);
        res.json({ data: encryptedData });
    }
    catch (error) {
        console.error("Error in getFavorites:", error);
        res.status(500).json({ error: "Failed to retrieve favorite cities" });
    }
});
exports.getFavorites = getFavorites;
