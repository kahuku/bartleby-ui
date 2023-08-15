import React from 'react';
import './CardDetails.css'

function CardDetails({ item, attributes }) {
  return (
    <div className="card-details-container">
      <h2>{item.name}</h2>
      {attributes.map(attribute => (
        <div className="card-detail" key={attribute}>
          <span className='card-detail-label'>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}:</span>{' '}
          <span className='card-detail-value'>{item[attribute]}</span>
        </div>
      ))}
    </div>
  );
}

export default CardDetails;
