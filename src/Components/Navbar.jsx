import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };


  document.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  return (
    <nav className='header'>
      <Link className='title' to="/" onClick={handleMenuItemClick}>
        #CarRental
      </Link>
      <div 
        className="menu" 
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about" onClick={handleMenuItemClick}>About</NavLink>
        </li>
        <li>
          <NavLink to="/vans" onClick={handleMenuItemClick}>Vans</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={handleMenuItemClick}><i className="fa-solid fa-user"></i></NavLink>
        </li>
      </ul>
    </nav>
  );
};
