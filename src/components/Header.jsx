import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo"> 🕋Muqqadas Travels</div>
        <div className="contact-info">
          <span>📞 020 38219 282</span>
          <span>📧 umrah@muqaddastravels.com</span>
        </div>
      </div>
      <nav className="navbar">
        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a>
        <a href="#">UMRAH PACKAGES</a>
        <a href="#">ABOUT US</a>
        <a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
          CONTACT US
        </a>
      </nav>
    </header>
  );
};

export default Header;
