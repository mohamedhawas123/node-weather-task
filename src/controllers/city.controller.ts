import { Request, Response } from 'express';
import axios from 'axios';
import { encrypt } from '../config/encryption';

export const searchCityWeather = async (req: Request, res: Response) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: { q: city, appid: process.env.WEATHER_API_KEY },
    });

    res.json({ data: encrypt(JSON.stringify(response.data)) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch city weather' });
  }
};
