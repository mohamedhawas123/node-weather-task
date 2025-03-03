"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCityName = exports.validateLogin = exports.validateRegister = void 0;
const validation_chain_builders_1 = require("express-validator/src/middlewares/validation-chain-builders");
const validation_result_1 = require("express-validator/src/validation-result");
// Validate user registration data
exports.validateRegister = [
    (0, validation_chain_builders_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, validation_chain_builders_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    (req, res, next) => {
        const errors = (0, validation_result_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
// Validate user login data
exports.validateLogin = [
    (0, validation_chain_builders_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, validation_chain_builders_1.body)('password').notEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = (0, validation_result_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
// Validate city name parameter in routes
exports.validateCityName = [
    (0, validation_chain_builders_1.param)('name').notEmpty().withMessage('City name is required'),
    (req, res, next) => {
        const errors = (0, validation_result_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
