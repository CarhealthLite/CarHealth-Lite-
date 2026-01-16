import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await signupUser(name, email, password);
      if (response.success) {
        login(response.user, response.token);
      } else {
        setError(response.message || '\u00CEnregistrare e\u0219uat\u0103');
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
        <h2>{'\u00CEnregistrare'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nume"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
          <button type="submit">Signup</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Ai deja cont? <Link to="/login">Autentificare</Link></p>
      </div>
    </div>
  );
};

export default Signup;
