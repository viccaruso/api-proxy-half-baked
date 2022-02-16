import React from 'react';
import Business from './Business';

export default function BusinessesList({ businesses }) {
  return (
    <div>
      {businesses.map((business) => <Business key={business.id} business={business} />)}
    </div>
  );
}
