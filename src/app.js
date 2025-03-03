"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const rateLimiter_1 = require("./config/rateLimiter");
const routes_1 = __importDefault(require("./routes"));
const errorHandler_middleware_1 = require("./middleware/errorHandler.middleware");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const swaggerDocument = yamljs_1.default.load('./src/docs/swagger.yaml');
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(rateLimiter_1.limiter);
// API Routes
app.use('/api', routes_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
// Global Error Handler (must be at the end)
app.use(errorHandler_middleware_1.errorHandler);
exports.default = app;
