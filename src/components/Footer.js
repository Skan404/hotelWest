import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="contact-header">Dane kontaktowe:</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span className="contact-text">ul. Wolności 6, 09-100 Płońsk</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span className="contact-text">533222444</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <span className="contact-text">westhotelplonsk@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="facebook-icon"
              />
            </span>
            <a
              href="https://www.facebook.com/profile.php?id=61574069219128"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Biały pasek */}
      <div className="footer-divider"></div>

      {/* Tekst praw autorskich */}
      <div className="footer-copyright">
        Wszelkie prawa zastrzeżone © 2025
      </div>
    </footer>
  );
}

export default Footer;
