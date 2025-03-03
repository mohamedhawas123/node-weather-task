import { Request, Response } from "express";
import {
  getWeatherByCoordinates,
  getWeatherByCityName,
} from "../services/weather.service";

export const getWeatherByLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ error: "Latitude and Longitude are required" });
      return;
    }

    const encryptedData = await getWeatherByCoordinates(
      lat as string,
      lon as string
    );
    res.json({ data: encryptedData });
  } catch (error) {
    console.error("Error in getWeatherByLocation:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

export const getWeatherByCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;

    if (!name) {
      res.status(400).json({ error: "City name is required" });
      return;
    }

    const encryptedData = await getWeatherByCityName(name);
    res.json({ data: encryptedData });
  } catch (error) {
    console.error("Error in getWeatherByCity:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
