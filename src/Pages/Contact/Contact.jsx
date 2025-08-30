import React, { useEffect } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-overlay">
          <h2>Why Contact Us?</h2>
          <p>
            We’re here to help you with your tech needs, business queries, or collaborations.
            <br />
            Let’s build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-main">

          {/* Left Side - Contact Info Card */}
          <div className="contact-card contact-left">
            <h3>Our Office</h3>

            <p>
              <FaMapMarkerAlt className="icon" />
              73C, 74C, 2nd Floor, S Park St, Secretariat Colony, Venkatapuram
              Ambattur, Chennai, Tamil Nadu, IN 600053
            </p>
            <p><FaEnvelope className="icon" /> info@adiion.com</p>
            <p><FaPhone className="icon" /> +91-7029395817</p>

            {/* ✅ Google Map Embed */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6810550783025!2d80.14853247321275!3d13.119380411624856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52637f41897ffd%3A0x261f50bf454406e4!2sAdiion%20Digital%20Labs%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756580203816!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adiion Office Location"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form Card */}
          <div className="contact-card contact-right">
            <h3>Send Us a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message..." rows="5" required></textarea>

              {/* reCAPTCHA can be added here later */}
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
