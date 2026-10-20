
import { useState } from 'react';
import { useWeather } from './hooks/useWeather.js';
import WeatherDisplay from './components/WeatherDisplay.jsx';

function App() {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather(city);
  }

  return (
    <main>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter a city name"
        />
        <button type="submit">Search</button>
      </form>

      <WeatherDisplay />
    </main>
  );
}

export default App;

