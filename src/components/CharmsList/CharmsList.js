import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CharmsList.css';

function CharmsList() {
  const [charms, setCharms] = useState([]);

  useEffect(() => {
    fetchCharms();
  }, []);

  const fetchCharms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/charms'); // TODO: Replace with env var
      const data = await response.json();
      setCharms(data);
    } catch (error) {
      console.error('Error fetching charms:', error);
    }
  };

  return (
    <div className="charms-list">
      <h2>Charms List</h2>
      <ul>
        {charms.map(charm => (
          <li key={charm.id} className="charm-item">
            <div className="charm-name">
              <Link to={`/charms/${charm.id}`} className='charm-link'>
                {charm.name}
              </Link>
            </div>
            <div className="charm-details">
              <span>School:</span> {charm.school}
            </div>
            <div className="charm-details">
              <span>Effect:</span> {charm.percentage}
            </div>
            <div className="charm-details">
              <span>Pips:</span> {charm.pips}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharmsList;
