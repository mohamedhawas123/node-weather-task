import express, { Request, Response } from "express";
import {
  getWeatherByLocation,
  getWeatherByCity,
} from "../controllers/weather.controller";

const router = express.Router();

router.get("/current", (req: Request, res: Response) => {
  getWeatherByLocation(req, res).catch((err) => {
    console.error("Error in getWeatherByLocation:", err);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/city/:name", (req: Request, res: Response) => {
  getWeatherByCity(req, res).catch((err) => {
    console.error("Error in getWeatherByCity:", err);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

export default router;
