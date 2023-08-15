import React, { useState, useEffect } from 'react';
import CardListItem from '../CardListItem/CardListItem';

function SpellsList() {
  const [spells, setSpells] = useState([]);
  const spellAttributes = ['school', 'damage', 'accuracy', 'pips'];

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/spells'); // TODO: Replace with env var
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
          <CardListItem key={spell.id} item={spell} basePath="/spells" attributes={spellAttributes} />
        ))}
      </ul>
    </div>
  );
}

export default SpellsList;
