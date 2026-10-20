
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';
import { WeatherProvider } from '../src/context/WeatherContext.jsx';
import '@testing-library/jest-dom';

describe('Weather App', () => {
  beforeEach(() => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );
  });

  it('should have an h1 heading containing Weather App', () => {
    expect(
      screen.getByRole('heading', { name: /Weather App/i })
    ).toBeInTheDocument();
  });
});
