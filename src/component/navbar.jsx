import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><a href="/"> work <FontAwesomeIcon icon={faHome} /></a></li>
        <li><a href="/about"> About <FontAwesomeIcon icon={faInfo} /></a></li>
        <li><a href="/services"> Services <FontAwesomeIcon icon={faCogs} /></a></li>
      </ul>
      <div className="navbar-buttons">
        <button> blog <FontAwesomeIcon icon={faEnvelope} /></button>
        <button className='planner-btn'> planner <FontAwesomeIcon icon={faHome} /></button>
      </div>
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
