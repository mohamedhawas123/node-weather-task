import { Request, Response } from "express";
import {
  addFavoriteCity,
  getFavoriteCities,
} from "../services/favorites.service";

export const addFavorite = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, cityName } = req.body;

    if (!userId || !cityName) {
      res.status(400).json({ error: "User ID and City Name are required" });
      return;
    }

    const encryptedData = await addFavoriteCity(userId, cityName);
    res.status(201).json({ data: encryptedData });
  } catch (error) {
    console.error("Error in addFavorite:", error);
    res.status(500).json({ error: "Failed to add favorite city" });
  }
};

export const getFavorites = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({ error: "User ID is required" });
      return;
    }

    const encryptedData = await getFavoriteCities(userId);
    res.json({ data: encryptedData });
  } catch (error) {
    console.error("Error in getFavorites:", error);
    res.status(500).json({ error: "Failed to retrieve favorite cities" });
  }
};
