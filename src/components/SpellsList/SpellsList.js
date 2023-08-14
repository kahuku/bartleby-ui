import React, { useState, useEffect } from 'react';

function SpellsList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/spells'); // Replace with your backend endpoint
      const data = await response.json();
      setSpells(data);
    } catch (error) {
      console.error('Error fetching spells:', error);
    }
  };

  return (
    <div>
      <h2>Spells List</h2>
      <ul>
        {spells.map(spell => (
          <li key={spell.id}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SpellsList;
