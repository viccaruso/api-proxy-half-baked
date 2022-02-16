const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    // grab the city, state, and country from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    // consult the yelp docs to figure out how to use a city, state, and country to make a request for businesses
    // https://www.yelp.com/developers/documentation/v3/business_search
    // don't forget to add the yelp API key!
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location="${event.queryStringParameters.city},${event.queryStringParameters.state},${event.queryStringParameters.country}"&limit=10`, {
      headers : {
        Authorization: `Bearer ${process.env.YELP_KEY}`
      }
    });
    const json = await response.json();
    return {
      statusCode: 200,
      // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the yelp data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify(json.businesses),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
