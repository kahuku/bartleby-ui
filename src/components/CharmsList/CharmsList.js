import React, { useState, useEffect } from 'react';
import CardListItem from '../CardListItem/CardListItem';

function CharmsList() {
  const [charms, setCharms] = useState([]);
  const charmAttributes = ['school', 'percentage', 'pips'];

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
          <CardListItem key={charm.id} item={charm} basePath="/charms" attributes={charmAttributes} />
        ))}
      </ul>
    </div>
  );
}

export default CharmsList;
