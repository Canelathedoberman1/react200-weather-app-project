
import { useWeather } from '../hooks/useWeather.js';

function WeatherDisplay() {
  const { loading, error, data } = useWeather();

  if (loading) {
    return <section className="weather-panel">Collecting atmospheric data...</section>;
  }

  if (error) {
    return <section className="weather-panel error">{error}</section>;
  }

  if (!data) {
    return (
      <section className="weather-panel empty">
        <span className="eyebrow">SYSTEM STATUS: STANDBY</span>
        <h2>Atmospheric Analysis</h2>
        <p>Search for a location to retrieve current weather measurements.</p>
      </section>
    );
  }

  const metrics = [
    { label: 'FEELS LIKE', value: `${Math.round(data.main.feels_like)}°F` },
    { label: 'HUMIDITY', value: `${data.main.humidity}%` },
    { label: 'PRESSURE', value: `${data.main.pressure} hPa` },
    ...(data.wind
      ? [{ label: 'WIND SPEED', value: `${data.wind.speed} mph` }]
      : []),
    ...(data.visibility !== undefined
      ? [{ label: 'VISIBILITY', value: `${(data.visibility / 1609.34).toFixed(1)} mi` }]
      : []),
  ];

  return (
    <section className="weather-panel">
      <div className="weather-topline">
        <span className="eyebrow">LIVE OBSERVATION / 01</span>
        <span className="live-status">● DATA RECEIVED</span>
      </div>

      <div className="location-block">
        <div>
          <p className="eyebrow">OBSERVATION LOCATION</p>
          <h2>{data.name}</h2>
          <p className="condition">{data.weather[0].description}</p>
        </div>
        <div className="weather-symbol" aria-hidden="true">
          {data.weather[0].main.toLowerCase().includes('cloud')
            ? '☁'
            : data.weather[0].main.toLowerCase().includes('rain')
              ? '☂'
              : data.weather[0].main.toLowerCase().includes('snow')
                ? '❄'
                : '☀'}
        </div>
      </div>

      <div className="temperature-block">
        <span className="temperature">{Math.round(data.main.temp)}°</span>
        <span className="temperature-unit">FAHRENHEIT</span>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <span className="metric-label">{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="panel-bottom">
        SOURCE: OPENWEATHERMAP
        <span>UNITS: IMPERIAL</span>
      </div>
    </section>
  );
}

export default WeatherDisplay;
