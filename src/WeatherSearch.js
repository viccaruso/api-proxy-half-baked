import { useState } from 'react';
import ForecastList from './ForecastList';
import Spinner from './Spinner';

export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [formCity, setFormCity] = useState('London');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherResults, setWeatherResults] = useState([]);

  async function handleWeatherSubmit(e) {
    e.preventDefault();

    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const response = await fetch(`/.netlify/functions/weather?city=${formCity}`);
    // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setIsLoading(false);
    setWeatherResults(json);
    setCity(formCity);
  }

  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
        Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          City:
          <input required type='text' value={formCity} onChange={e => setFormCity(e.target.value)} />
        </label>
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isLoading
          ? <Spinner />
          : <ForecastList city={city} currentWeather={weatherResults} />
      }
    </section>
  );

}
