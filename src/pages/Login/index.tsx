import React, { useState } from 'react';

import './index.css';
import { useSignInMutation } from '../../state/queries/sign-in';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInMutation = useSignInMutation();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signInMutation.mutateAsync({
      password: 'admin',
      username: 'admin',
    });

    navigate({ to: '/dashboard' });
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
