import express, { Request, Response } from 'express';
import { searchCityWeather } from '../controllers/city.controller';

const router = express.Router();

router.get('/search', (req: Request, res: Response) => {
  searchCityWeather(req, res).catch((err) => {
    console.error('Error in searchCityWeather:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

export default router;
