import React, { useState } from 'react';

function PredictionForm() {
  const [userName, setUserName] = useState('');
  const [gameId, setGameId] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePredictionSubmit = async (e) => {
    e.preventDefault();

    const userResponse = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userName }),
    });
    const userData = await userResponse.json();

    const predictionResponse = await fetch('http://localhost:5000/api/predictions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userData.user._id,
        gameId,
        prediction,
      }),
    });
    const predictionData = await predictionResponse.json();
    alert('Prediction saved!');
  };

  return (
    <form onSubmit={handlePredictionSubmit}>
      <div>
        <label>Your Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Game ID:</label>
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Prediction:</label>
        <input
          type="text"
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Prediction</button>
    </form>
  );
}

export default PredictionForm;
