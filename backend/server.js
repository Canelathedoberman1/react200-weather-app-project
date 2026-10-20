
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const apiKey = process.env.WEATHER_API_KEY;

app.get('/api/search/:city', async (req, res) => {
  try {
    if (!apiKey) {
      return res.status(500).json({
        error: 'Weather API key is missing. Check your .env file.',
      });
    }

    const cityName = req.params.city;

    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: cityName,
          appid: apiKey,
          units: 'imperial',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    const status = error.response?.status === 404 ? 404 : 500;

    res.status(status).json({
      error:
        error.response?.status === 404
          ? 'City not found. Please try another city.'
          : 'Unable to get weather data. Please try again.',
    });
  }
});

export default app;
