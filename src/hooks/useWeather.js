
import { useContext, useCallback } from 'react';
import { WeatherContext } from '../context/WeatherContext.jsx';

export function useWeather() {
  const { state, dispatch } = useContext(WeatherContext);

  const fetchWeather = useCallback(async (city) => {
    if (!city.trim()) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Please enter a city name.',
      });
      return;
    }

    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch(
        `/api/search/${encodeURIComponent(city.trim())}`
      );

      if (!response.ok) {
        throw new Error('Could not find that city. Please try again.');
      }

      const data = await response.json();

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: error.message || 'Something went wrong. Please try again.',
      });
    }
  }, [dispatch]);

  return {
    ...state,
    fetchWeather,
  };
}
