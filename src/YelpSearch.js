// eslint-disable-next-line
import { useState } from 'react';
import BusinessesList from './BusinessesList';
import Spinner from './Spinner';

export default function YelpSearch() {
  // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [formCity, setFormCity] = useState('Portland');
  const [formState, setFormState] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // eslint-disable-next-line
  async function handleYelpSubmit(e) {
    e.preventDefault();

    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`/.netlify/functions/yelp?city=${formCity}&state=${formState}&country=${formCountry}`);
    // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setIsLoading(false);
    setSearchResults(json);
    console.log(searchResults);
  }

  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          City:
          <input required type='text' value={formCity} onChange={e => setFormCity(e.target.value)} />
        </label>
        <label>
          State:
          <input type='text' value={formState} onChange={e => setFormState(e.target.value)} />
        </label>
        <label>
          Country:
          <input type='text' value={formCountry} onChange={e => setFormCountry(e.target.value)} />
        </label>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isLoading
          ? <Spinner />
          : <BusinessesList businesses={searchResults} />
      }
    </section>
  );
}

