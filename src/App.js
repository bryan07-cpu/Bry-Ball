import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="bg-white p-4 shadow flex justify-between items-center w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800">
          🏀🎾🏐 Bry's Sports Prediction App
        </h1>
        <img
          src="/EZ P.png"
          alt="App Logo"
          className="h-10 w-auto ml-auto"
        />
      </header>

      {/* Main Content */}
      <main className="p-4 w-full max-w-3xl">
        {user ? <Home user={user} /> : <Login onLogin={setUser} />}
      </main>
    </div>
  );
}

export default App;

