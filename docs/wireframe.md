# Weather App Wireframe

## Page Layout

```text
+--------------------------------------+
| HEADER                               |
| Weather App                          |
| Scientific atmospheric data          |
+--------------------------------------+
| LOCATION SEARCH                      |
| [ Enter city name........ ] [Search] |
+--------------------------------------+
| WEATHER DISPLAY                      |
|                                      |
| Location name        Weather symbol  |
| Conditions                           |
|                                      |
| Temperature                          |
|                                      |
| Feels Like | Humidity | Pressure     |
| Wind Speed | Visibility              |
+--------------------------------------+
| FOOTER                               |
| OpenWeatherMap data source           |
+--------------------------------------+
```

## Component Tree

```text
App
├── Header
├── Search Form
│   ├── City Input
│   └── Search Button
├── WeatherDisplay
│   ├── Loading State
│   ├── Error State
│   ├── Empty State
│   └── Weather Metrics
└── Footer
```

## State and Events

- `App` stores the city input using `useState`.
- `WeatherContext` stores loading, error, and weather data.
- `useWeather` fetches weather data and dispatches reducer actions.
- `WeatherDisplay` reads the context and displays the current weather state.
- The search form submits the city to `fetchWeather`.
