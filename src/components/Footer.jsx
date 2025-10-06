import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2>
            <i className="fa-solid fa-mosque"></i>{" "}
            <a href="https://www.muqaddastravels.co.uk" target="_blank" rel="noopener noreferrer">
              Muqaddas Travels
            </a>
          </h2>
          <p>
            <i className="fa-solid fa-location-dot"></i> London, United Kingdom
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>{" "}
            <a href="tel:+442038219282">020 38219282</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>{" "}
            <a href="mailto:umrah@muqaddastravels.com">umrah@muqaddastravels.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <i className="fa-solid fa-kaaba"></i>{" "}
              <a href="https://www.muqaddastravels.co.uk/packages/3star" target="_blank" rel="noopener noreferrer">
                3 Star Packages
              </a>
            </li>
            <li>
              <i className="fa-solid fa-file-contract"></i>{" "}
              <a href="https://www.muqaddastravels.co.uk/" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </li>
            <li>
              <i className="fa-solid fa-shield-halved"></i>{" "}
              <a href="https://www.muqaddastravels.co.uk/" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <i className="fa-solid fa-envelope-open-text"></i>{" "}
              <a href="https://www.muqaddastravels.co.uk/contact" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/muqaddastravels" target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/muqaddastravels" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/447465683556" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.youtube.com/@muqaddastravels" target="_blank" rel="noopener noreferrer" className="youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 <a href="https://www.muqaddastravels.co.uk" target="_blank" rel="noopener noreferrer">Muqaddas Travels</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
