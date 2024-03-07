import express from "express";
import { getWeatherData, getWeatherDataDays } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();
const daysRouter = express.Router();

// We will create a route for the weather data based on the city name

router.get("/:city", validateCityName, getWeatherData);
daysRouter.get("/:city", validateCityName, getWeatherDataDays);


// We will export the router
export { router as weatherRoute, daysRouter };
