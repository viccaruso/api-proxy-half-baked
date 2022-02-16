import React from 'react';

export default function Business({ business }) {


  return (
    <div className='business-card'>
      <h1>{business.name}</h1>
      <img src={business.image_url} style={{ width: '200px' }} />
      <p>Rating: {business.rating} | Price: {business.price}</p>
      <a href={business.url}><p>Visit on Yelp</p></a>
    </div>
  );
}

