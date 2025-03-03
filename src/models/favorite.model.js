"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const user_model_1 = require("./user.model");
exports.Favorite = database_1.sequelize.define('Favorite', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: user_model_1.User,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    cityName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'favorites',
});
