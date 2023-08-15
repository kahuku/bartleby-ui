import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

function CharmDetails() {
  const charmId = useParams().charmId;
  const [charm, setCharm] = useState(null);
  const charmAttributes = ['school', 'percentage', 'pips']

  useEffect(() => {
    fetchCharmDetails();
  }, []);

  const fetchCharmDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/charms/${charmId}`); // TODO: Replace with env var
      const data = await response.json();
      setCharm(data);
    } catch (error) {
      console.error('Error fetching spell details:', error);
    }
  }

  if (!charm) {
    return <div>Loading charm details...</div>
  }

  return (
    <div>
      <h2>Charm Details</h2>
      <CardDetails item={charm} attributes={charmAttributes} />
    </div>
  );
}

export default CharmDetails;
