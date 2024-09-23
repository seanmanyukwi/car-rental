import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth,db } from './firebase'; // Import Firebase auth and Firestore
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth method
import { setDoc, doc } from 'firebase/firestore'; // Import Firestore methods
import './page.css'; // Import the CSS file for styling

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password) {
      setError('Both fields are required.');
      setTimeout(() => setError(''), 10000); // Clear error after 10 seconds
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
      setTimeout(() => setError(''), 10000); // Clear error after 10 seconds
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        userType: 'regular' // Default to 'regular'; change as needed
      });

      navigate('/login'); // Redirect to login page after successful sign-up
    } catch (error) {
      setError('Error signing up. Please try again.');
      setTimeout(() => setError(''), 10000); // Clear error after 10 seconds
      console.error('Error signing up:', error);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {error && <p className="error-message">{error}</p>}
        
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="login-link" onClick={handleLoginRedirect}>Log In</span>
      </p>
    </div>
  );
};
