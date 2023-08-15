import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SpellDetails.css';

function SpellDetails() {
  const spellId = useParams().spellId;
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    fetchSpellDetails();
  }, []);

  const fetchSpellDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/spells/${spellId}`); // TOOD: use env variable
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
    <div className="spell-details-container">
      <h2>Spell Details</h2>
      <div className="spell-detail">
        <span className="detail-label">Name:</span> {spell.name}
      </div>
      <div className="spell-detail">
        <span className="detail-label">School:</span> {spell.school}
      </div>
      <div className="spell-detail">
        <span className="detail-label">Accuracy:</span> {spell.accuracy}
      </div>
      <div className="spell-detail">
        <span className="detail-label">Damage:</span> {spell.damage}
      </div>
    </div>
  );
}

export default SpellDetails;
