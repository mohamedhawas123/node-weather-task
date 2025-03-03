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
exports.getFavoriteCities = exports.addFavoriteCity = void 0;
const favorite_model_1 = require("../models/favorite.model");
const encryption_1 = require("../config/encryption");
const addFavoriteCity = (userId, cityName) => __awaiter(void 0, void 0, void 0, function* () {
    const favorite = yield favorite_model_1.Favorite.create({ userId, cityName });
    return (0, encryption_1.encrypt)(JSON.stringify(favorite));
});
exports.addFavoriteCity = addFavoriteCity;
const getFavoriteCities = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const favorites = yield favorite_model_1.Favorite.findAll({ where: { userId } });
    return (0, encryption_1.encrypt)(JSON.stringify(favorites));
});
exports.getFavoriteCities = getFavoriteCities;
