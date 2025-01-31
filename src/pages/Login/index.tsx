import React, { useState } from 'react';
import { useAuth } from '../../state/auth';
import { useNavigate } from '@tanstack/react-router';

import './index.css';

export default function Login() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate({ from: '/' });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login('Yuri');
    navigate({ to: '/dashboard' });
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin} className="form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
