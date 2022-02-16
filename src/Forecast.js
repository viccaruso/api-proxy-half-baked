import React from 'react';

export default function Forecast({ city, currentWeather }) {
  return (
    <div>
      <p>The current temperature in {city} is:</p>
      <p>{currentWeather.temp} F</p>
    </div>
  );
}
