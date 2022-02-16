import React from 'react';
import Forecast from './Forecast';

export default function ForecastList({ city, currentWeather }) {
  return (
    <div>
      { <Forecast city={city} currentWeather={currentWeather} /> }
    </div>
  );
}
