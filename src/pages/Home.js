import React, { useState } from 'react';
import Confetti from 'react-confetti';

function Home({ user }) {
  const [predictions, setPredictions] = useState({});
  const [correctPrediction, setCorrectPrediction] = useState(null);

  const mockGames = [
    {
      id: 1,
      sport: 'Basketball',
      team1: 'Lakers',
      team2: 'Bulls',
      actualWinner: 'Lakers',
      gameDate: '2025-04-22 13:00',
      logos: {
        Lakers: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
        Bulls: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/200px-Chicago_Bulls_logo.svg.png',
      },
      teamColors: {
        Lakers: '#552583', // Purple
        Bulls: '#E41B17',  // Red
      },
    },
    {
      id: '2',
      sport: 'NBA',
      team1: 'Celtics',
      team2: 'Heat',
      actualWinner: 'Heat',
      gameDate: '2025-04-22 13:00',
      logos: {
        Celtics: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
        Heat: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg',
      },
    },
    {
      id: '3',
      sport: 'Tennis',
      team1: 'Nadal',
      team2: 'Djokovic',
      actualWinner: 'Nadal',
      gameDate: '2025-04-22 13:00',
      flags: {
        Nadal: 'https://flagcdn.com/w40/es.png', // Spain
        Djokovic: 'https://flagcdn.com/w40/rs.png', // Serbia
      },
    },
    {
      id: '4',
      sport: 'Volleyball',
      team1: 'USA',
      team2: 'Brazil',
      actualWinner: 'USA',
      gameDate: '2025-04-22 13:00',
      flags: {
        USA: 'https://flagcdn.com/w40/us.png',
        Brazil: 'https://flagcdn.com/w40/br.png',
      },
    },
  ];

  const handlePrediction = (gameId, team) => {
    setPredictions((prev) => ({ ...prev, [gameId]: team }));
    const selectedGame = mockGames.find((game) => game.id === gameId);
    if (selectedGame.actualWinner === team) {
      setCorrectPrediction(gameId);
    } else {
      setCorrectPrediction(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🏀🎾🏐 Bry's Sports Prediction App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Predict the winners. Check your accuracy. Stay sharp!
        </p>

        {mockGames.map((game) => {
          const userPrediction = predictions[game.id];
          const isCorrect = userPrediction === game.actualWinner;

          return (
            <div
              key={game.id}
              className={`bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 ${
                userPrediction
                  ? isCorrect
                    ? 'border-green-500'
                    : 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              {correctPrediction === game.id && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                />
              )}

              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {game.sport}: {game.team1} vs {game.team2}
                </h2>
                <p className="text-gray-500 text-sm">
                  Game Time: {new Date(game.gameDate).toLocaleString()}
                </p>
                {userPrediction && (
                  <p
                    className={`mt-1 text-sm font-medium ${
                      isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    You predicted: {userPrediction} —{' '}
                    {isCorrect ? 'Correct ✅' : `Wrong ❌ (Answer: ${game.actualWinner})`}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                {[game.team1, game.team2].map((team) => (
                  <button
                    key={team}
                    onClick={() => handlePrediction(game.id, team)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border transition hover:scale-105 duration-150 ${
                      predictions[game.id] === team
                        ? 'bg-blue-600 text-white border-blue-700'
                        : `bg-${
                            game.teamColors?.[team] || 'gray'
                          } text-white border-${
                            game.teamColors?.[team] || 'gray'
                          }`
                    }`}
                  >
                    {game.logos?.[team] && (
                      <img src={game.logos[team]} alt={team} className="h-6 w-6" />
                    )}
                    {game.flags?.[team] && (
                      <img src={game.flags[team]} alt={team} className="h-4 w-6" />
                    )}
                    {team}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

