import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase'; // Import Firebase auth
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth method
import './page.css'; // Import the CSS file for styling

export const Login = ({ setUserType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Both fields are required.');
      setTimeout(() => setError(''), 10000); // Clear error after 10 seconds
      return;
    }

    try {
      // Directly check for host email and password without fetching from Firebase
      if (email === 'sean@gmail.com' && password === 'sean2024') {
        // Skip fetching user type and navigate directly to Host page
        // setUserType('host'); // Set user type to host
        navigate('/host'); // Directly navigate to Host page
      } else {
        // Regular login for non-host users
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user type for non-host users
        const fetchUserType = async (userId) => {
          try {
            const userDoc = await db.collection('users').doc(userId).get();
            if (userDoc.exists) {
              return userDoc.data().userType; // Assuming userType field exists
            }
            return 'regular';
          } catch (error) {
            console.error('Error fetching user type:', error);
            return 'regular';
          }
        };

        const userType = await fetchUserType(user.uid);
        setUserType(userType);

        if (userType === 'host') {
          navigate('/host'); // Redirect to Host page for host users
        } else {
          navigate('/'); // Redirect to Home page for regular users
        }
      }
    } catch (error) {
      setError('Invalid email or password.');
      setTimeout(() => setError(''), 10000); // Clear error after 10 seconds
      console.error('Error logging in:', error);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
        
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>
        New? <span className="signup-link" onClick={handleSignUpRedirect}>Sign Up Now</span>
      </p>
    </div>
  );
};
