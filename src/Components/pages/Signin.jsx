import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../pages/page.css"

export function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your host validation logic here
    if (email === 'host@gmail.com' && password === 'password') {
      navigate('/host');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign in to your account </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='bttn' type="submit">Sign In</button>
      </form>
    </div>
  );
}





