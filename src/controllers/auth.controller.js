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
exports.loginUser = exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
Object.defineProperty(exports, "loginUser", { enumerable: true, get: function () { return auth_service_1.loginUser; } });
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        yield (0, auth_service_1.registerUser)(email, password);
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        const token = yield (0, auth_service_1.loginUser)(email, password);
        res.json({ token });
    }
    catch (error) {
        console.error("Error in login:", error);
        res.status(400).json({ error: error });
    }
});
exports.login = login;
