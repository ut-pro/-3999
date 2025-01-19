import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ onFilterChange, onScanClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isMenuOpen && (
        <div className="menu" role="menu" aria-label="Main menu">
          <button onClick={() => handleFilterClick('veg')} role="menuitem">Veg</button>
          <button onClick={() => handleFilterClick('non-veg')} role="menuitem">Non-veg</button>
          <button onClick={() => handleFilterClick('vegan')} role="menuitem">Vegan</button>
          <button onClick={() => handleFilterClick('all')} role="menuitem">All</button>
        </div>
      )}
      <button className="scan-button" onClick={onScanClick}>Scan QR</button>
    </nav>
  );
}

export default Navbar;

