// SignUp.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from './firebase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import "../pages/page.css"; 

export function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('regular'); // Default to 'regular' user type
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log('Registration successful:', user);

        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          firstName,
          lastName,
          email,
          userType, // Save the user type (host or regular)
        });

        navigate('/');
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <div className="signin-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>First name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label>Last name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label>Email address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="regular">Regular User</option>
            <option value="host">Host User</option>
          </select>
        </div>
        <button className='bttn' type="submit">Sign Up</button>
      </form>
      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  );
}
