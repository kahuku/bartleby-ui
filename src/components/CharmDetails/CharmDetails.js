import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CharmDetails.css';

function CharmDetails() {
  const { charmId } = useParams();
  const [charm, setCharm] = useState(null);

  useEffect(() => {
    fetchCharmDetails();
  }, []);

  const fetchCharmDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/charms/${charmId}`); // TODO: Replace with env var
      const data = await response.json();
      setCharm(data);
    } catch (error) {
      console.error('Error fetching charm details:', error);
    }
  };

  if (!charm) {
    return <div>Loading charm details...</div>;
  }

  return (
    <div className="charm-details-container">
      <h2>Charm Details</h2>
      <div className="charm-detail">
        <span className="detail-label">Name:</span> {charm.name}
      </div>
      <div className="charm-detail">
        <span className="detail-label">School:</span> {charm.school}
      </div>
      <div className="charm-detail">
        <span className="detail-label">Effect:</span> {charm.percentage}
      </div>
      <div className="charm-detail">
        <span className="detail-label">Pips:</span> {charm.pips}
      </div>
    </div>
  );
}

export default CharmDetails;
