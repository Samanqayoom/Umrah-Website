import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (sidebarOpen) setPackagesOpen(false);
  };

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

      {/* Desktop Navbar */}
      <nav className="navbar desktop-menu">
        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</a>
        <div className="dropdown">
          <a>
            UMRAH PACKAGES <i className="fas fa-chevron-down"></i>
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

      {/* Mobile Burger Icon */}
      <div className="mobile-menu-icon" onClick={toggleSidebar}>
        <i className={sidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Overlay */}
      <div className={`mobile-sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a onClick={() => { navigate('/'); toggleSidebar(); }}>HOME</a>

        <div className="dropdown-mobile">
          <a onClick={() => setPackagesOpen(!packagesOpen)}>
            UMRAH PACKAGES <i className={`fas fa-chevron-down ${packagesOpen ? 'rotate' : ''}`}></i>
          </a>
          {packagesOpen && (
            <div className="dropdown-content-mobile">
              <a onClick={() => { navigate('/packages/3star'); toggleSidebar(); }}>3 Star Packages</a>
              <a onClick={() => { navigate('/packages/4star'); toggleSidebar(); }}>4 Star Packages</a>
              <a onClick={() => { navigate('/packages/5star'); toggleSidebar(); }}>5 Star Packages</a>
            </div>
          )}
        </div>

        <a onClick={() => { navigate('/about'); toggleSidebar(); }}>ABOUT US</a>
        <a onClick={() => { navigate('/contact'); toggleSidebar(); }}>CONTACT US</a>
      </div>
    </header>
  );
};

export default Header;
