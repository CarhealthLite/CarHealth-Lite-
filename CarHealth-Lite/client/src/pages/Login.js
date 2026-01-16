import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await loginUser(email, password);
      if (response.success) {
        login(response.user, response.token);
      } else {
        setError(response.message || 'Datele sunt incorecte');
      }
    } catch {
      setError('Eroare server, \u00EEncearc\u0103 din nou');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <img
          src="/CarHealth%20Lite.png"
          alt="CarHealth Lite"
          className="page-logo"
        />
        <h2>Autentificare</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parola"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Nu ai cont? <Link to="/signup">{'\u00CEnregistreaz\u0103-te'}</Link></p>
      </div>
    </div>
  );
};

export default Login;
