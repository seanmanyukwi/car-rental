import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from './pages/firebase'; // Import Firebase auth
import { signOut } from "firebase/auth";
import "./Navbar.css";

export const Navbar = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after successful logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Scroll event handler for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='header'>
      <Link className='title' to="#" onClick={(e) => e.preventDefault()}>
        #CarRental
      </Link>
      <div className="menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/about" onClick={handleMenuItemClick}>About</NavLink>
            </li>
            <li>
              <NavLink to="/vans" onClick={handleMenuItemClick}>Vans</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>
                <i className="fa-solid fa-sign-out-alt"></i> Logout
              </button>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <li>
            <NavLink to="/login" onClick={handleMenuItemClick}>
              <i className="fa-solid fa-user"></i> Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
