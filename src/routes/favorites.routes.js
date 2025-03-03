"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favorites_controller_1 = require("../controllers/favorites.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.post('/add', auth_middleware_1.authenticate, (req, res) => {
    (0, favorites_controller_1.getFavorites)(req, res).catch((err) => {
        console.error('Error in addFavoriteCity:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});
router.get('/:userId', auth_middleware_1.authenticate, (req, res) => {
    (0, favorites_controller_1.addFavorite)(req, res).catch((err) => {
        console.error('Error in getFavoriteCities:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});
exports.default = router;
