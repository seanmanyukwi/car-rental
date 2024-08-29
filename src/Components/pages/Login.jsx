// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from './firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import "../pages/page.css"; 

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Fetch user data from Firestore to determine user type
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          if (userData.userType === 'host') {
            navigate('/host');  // Redirect to host page
          } else {
            navigate('/');  // Redirect to home page for regular users
          }
        } else {
          console.error('No user data found!');
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  return (
    <div className="signin-container">
      <h2>Login</h2>
      <form onSubmit={handleSignIn}>
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
        <button className='bttn' type="submit">Submit</button>
      </form>
      <p>New user? <Link to="/register">Register Here</Link></p>
    </div>
  );
}
