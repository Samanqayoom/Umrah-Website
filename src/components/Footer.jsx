import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2><i className="fa-solid fa-mosque"></i> Muqaddas Travels</h2>
          <p><i className="fa-solid fa-location-dot"></i> London, United Kingdom</p>
          <p><i className="fa-solid fa-phone"></i> 020 38219282</p>
          <p><i className="fa-solid fa-envelope"></i> umrah@muqaddastravels.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><i className="fa-solid fa-kaaba"></i> Umrah Packages</li>
            <li><i className="fa-solid fa-file-contract"></i> Terms & Conditions</li>
            <li><i className="fa-solid fa-shield-halved"></i> Privacy Policy</li>
            <li><i className="fa-solid fa-envelope-open-text"></i> Contact Us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Muqaddas Travels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
