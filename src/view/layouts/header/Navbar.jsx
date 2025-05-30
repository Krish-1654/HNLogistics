import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    // Scroll to the target section
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the mobile menu
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>HN Logistics</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
        <li><a href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
