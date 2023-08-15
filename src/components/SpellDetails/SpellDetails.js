import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

function SpellDetails() {
  const spellId = useParams().spellId;
  const [spell, setSpell] = useState(null);
  const spellAttributes = ['school', 'damage', 'accuracy', 'pips'];

  useEffect(() => {
    fetchSpellDetails();
  }, []);

  const fetchSpellDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/spells/${spellId}`); // TODO: Replace with env var
      const data = await response.json();
      setSpell(data);
    } catch (error) {
      console.error('Error fetching spell details:', error);
    }
  };

  if (!spell) {
    return <div>Loading spell details...</div>;
  }

  return (
    <div>
      <h2>Spell Details</h2>
      <CardDetails item={spell} attributes={spellAttributes} />
    </div>
    
  );
}

export default SpellDetails;
