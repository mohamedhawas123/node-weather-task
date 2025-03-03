import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { limiter } from './config/rateLimiter';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler.middleware';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


dotenv.config();

const app = express();

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Middleware
app.use(helmet()); 
app.use(cors()); 
app.use(compression()); 
app.use(express.json()); 
app.use(limiter); 

// API Routes
app.use('/api', routes);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

// Global Error Handler (must be at the end)
app.use(errorHandler);

export default app;
