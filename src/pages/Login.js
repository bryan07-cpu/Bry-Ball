import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Please enter a name');
    
    // Simulate a "login" with local data
    const user = { id: Date.now(), name };
    onLogin(user);
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
