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
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const validateRequest_middleware_1 = require("../middleware/validateRequest.middleware");
const router = express_1.default.Router();
router.post("/register", (req, res) => {
    (0, auth_controller_1.register)(req, res).catch((err) => {
        console.error("Error in registerUser:", err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});
router.post("/login", validateRequest_middleware_1.validateLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield (0, auth_controller_1.loginUser)(email, password);
        res.json({ token });
    }
    catch (err) {
        console.error("Error in loginUser:", err);
        res.status(400).json({ error: err });
    }
}));
exports.default = router;
