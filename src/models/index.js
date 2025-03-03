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
exports.Favorite = exports.User = exports.syncDatabase = void 0;
const database_1 = require("../config/database");
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
const favorite_model_1 = require("./favorite.model");
Object.defineProperty(exports, "Favorite", { enumerable: true, get: function () { return favorite_model_1.Favorite; } });
user_model_1.User.hasMany(favorite_model_1.Favorite, { foreignKey: 'userId', onDelete: 'CASCADE' });
favorite_model_1.Favorite.belongsTo(user_model_1.User, { foreignKey: 'userId' });
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');
    }
    catch (error) {
        console.error(' Error synchronizing database:', error);
    }
});
exports.syncDatabase = syncDatabase;
