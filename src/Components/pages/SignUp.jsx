import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from './firebase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import "../pages/page.css"; 

export function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Define the host email
  const HOST_EMAIL = "sean@gmail.com";  // Replace with your desired host email

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Registration successful:', user);

      // Determine user type based on email
      const userType = (email === HOST_EMAIL) ? "host" : "regular";

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        userType,
      });

      navigate('/login');  // Redirect to login page after signup
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="signin-container">
      <div className='senta'>
        <h2>Sign Up</h2> 
      </div>
     
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
        <button className='bttn' type="submit">Sign Up</button>
      </form>
      <div>
        <p className='end'>Already registered? <Link to="/login">Login</Link></p> 
      </div>
     
    </div>
  );
}
