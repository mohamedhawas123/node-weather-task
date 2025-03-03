import axios from 'axios';
import { encrypt } from '../config/encryption';

export const searchCityWeather = async (city: string): Promise<string> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: { q: city, appid: process.env.WEATHER_API_KEY },
  });

  return encrypt(JSON.stringify(response.data));
};
