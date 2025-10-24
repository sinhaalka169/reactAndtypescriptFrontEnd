import React, { useState } from 'react';
import { login } from '../services/api';

interface Props {
    onLoginSuccess: () => void;
  }

const LoginForm: React.FC<Props> = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful!');
      onLoginSuccess();
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log In</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
