import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { Navbar } from "./Components/Navbar";
import { Home, About, Vans } from "./Components/pages";
import Host from './Components/pages/Host';
import { Login } from "./Components/pages/Login";
import { SignUp } from "./Components/pages/SignUp";
import { auth, db } from './Components/pages/firebase'; // Import Firebase auth and Firestore
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore methods

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);

        // Fetch user type from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserType(userDoc.data().userType);
          } else {
            setUserType('regular'); // Default if user type not found
          }
        } catch (error) {
          console.error('Error fetching user type:', error);
          setUserType('regular'); // Default on error
        }
      } else {
        setIsAuthenticated(false);
        setUserType(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='App'>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login setUserType={setUserType} />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Routes accessible to authenticated users */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
        <Route path="/vans" element={isAuthenticated ? <Vans /> : <Navigate to="/login" />} />
        
        {/* Host route that doesn't require authentication */}
        <Route path="/host" element={<Host />} />
      </Routes>
    </div>
  );
}

export default App;
