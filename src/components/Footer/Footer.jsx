import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-section">
            <Link to="/">
          
            <span className="footer-logo">ADIION</span>
        </Link>
            <p className="footer-description">
              Empowering businesses with innovative IT solutions and smart automation.
            </p>
            <div className="footer-socials">
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="https://www.linkedin.com/company/adiion/"><Linkedin /></a>
              <a href="#"><Instagram /></a>
            </div>
          </div>

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

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>73C, 74C, 2<sup>nd</sup> Floor, S Park St, Secretariat Colony, Venkatapuram<br/> Ambattur, Chennai</li>
              <li>Tamil Nadu IN 600053</li>
              <li>info@adiion.com</li>
              <li>+91-7029395817</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ADIION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
