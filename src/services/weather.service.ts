import axios from 'axios';
import { redisClient } from '../config/redis';
import { encrypt } from '../config/encryption';

export const getWeatherByCoordinates = async (lat: string, lon: string): Promise<string> => {
  const cacheKey = `weather:${lat}:${lon}`;
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    return encrypt(cachedData);
  }

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: { lat, lon, appid: process.env.WEATHER_API_KEY },
  });

  const data = JSON.stringify(response.data);
  await redisClient.setex(cacheKey, 3600, data);

  return encrypt(data);
};

export const getWeatherByCityName = async (city: string): Promise<string> => {
  const cacheKey = `weather:${city.toLowerCase()}`;
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    return encrypt(cachedData);
  }

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: { q: city, appid: process.env.WEATHER_API_KEY },
  });

  const data = JSON.stringify(response.data);
  await redisClient.setex(cacheKey, 3600, data);

  return encrypt(data);
};
