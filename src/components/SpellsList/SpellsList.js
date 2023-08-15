import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SpellsList.css';

function SpellsList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/spells'); // TODO: Replace with your backend endpoint
      const data = await response.json();
      setSpells(data);
    } catch (error) {
      console.error('Error fetching spells:', error);
    }
  };

  return (
    <div className="spells-list">
      <h2>Spells List</h2>
      <ul>
        {spells.map(spell => (
          <li key={spell.id} className="spell-item">
            <div className="spell-name">
                <Link
                    to={`/spells/${spell.id}`} 
                    className='spell-link'
                >
                    {spell.name}
                </Link>
            </div>
            <div className="spell-details">
              <span>School:</span> {spell.school}
            </div>
            <div className="spell-details">
              <span>Accuracy:</span> {spell.accuracy}
            </div>
            <div className="spell-details">
              <span>Damage:</span> {spell.damage}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpellsList;
