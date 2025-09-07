import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand Section */}
          <div className="footer-section">
            <Link to="/" className="footer-logo">ADIION</Link>
            <p className="footer-description">
              Empowering businesses with innovative IT solutions and smart automation.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/1BwXMTbEPv/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="facebook">
                <FaFacebookF />
              </a>
              <a href="https://x.com/Adiion_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="twitter">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/company/adiion/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/_adiion_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Data Solutions</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Mobile Apps</a></li>
              <li><a href="/services">AI & Automation</a></li>
              <li><a href="/services">Cloud Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/services">Services</a></li>

              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Career</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  Chennai, Tamil Nadu<br />
                  India 600053
                </span>
              </li>
              <li className="contact-item">
                <a href="mailto:info@adiion.com">
                  <FaEnvelope className="contact-icon" />
                  info@adiion.com
                </a>
              </li>
              <li className="contact-item">
                <a href="tel:+917029395817">
                  <FaPhoneAlt className="contact-icon" />
                  +91-7029395817
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Adiion Digital Labs Private Limited | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
