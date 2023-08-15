import React from 'react';
import { Link } from 'react-router-dom';
import './CardListItem.css'

function CardListItem({ item, basePath, attributes }) {
  return (
    <li className="item">
      <div className="item-name">
        <Link to={`${basePath}/${item.id}`} className="item-link">
          {item.name}
        </Link>
      </div>
      {attributes.map(attribute => (
        <div className="item-details" key={attribute}>
          <span>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}:</span>{' '}
          {item[attribute]}
        </div>
      ))}
    </li>
  );
}

export default CardListItem;
