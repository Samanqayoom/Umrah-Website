import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <i className="fas fa-kaaba"></i> Muqqadas Travels
        </div>
        <div className="contact-info">
          <span>
            <i className="fas fa-phone-alt"></i> 020 38219 282
          </span>
          <span>
            <i className="fas fa-envelope"></i> umrah@muqaddastravels.com
          </span>
        </div>
      </div>
      <nav className="navbar">
        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</a>
          <div className="dropdown">
      <a>
  UMRAH PACKAGES <i className="fa-solid fa-chevron-down"></i>
</a>

    <div className="dropdown-content">
      <a onClick={() => navigate('/packages/3star')}>3 Star Packages</a>
      <a onClick={() => navigate('/packages/4star')}>4 Star Packages</a>
      <a onClick={() => navigate('/packages/5star')}>5 Star Packages</a>
    </div>
  </div>
        <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>ABOUT US</a>
        <a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
