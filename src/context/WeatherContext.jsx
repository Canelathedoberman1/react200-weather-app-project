
import { createContext, useReducer } from 'react';

export const WeatherContext = createContext();

const initialState = {
  loading: false,
  error: '',
  data: null,
};

function weatherReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { loading: true, error: '', data: null };

    case 'FETCH_SUCCESS':
      return { loading: false, error: '', data: action.payload };

    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, data: null };

    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}
