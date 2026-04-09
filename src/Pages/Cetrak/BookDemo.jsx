import React, { useEffect, useState } from "react";
import "./BookDemo.css";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Demo request submitted!");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="demo">

      {/* HERO */}
      <section className="demo-hero">
        <h1>Book a Demo</h1>
        <p>
          See how <strong>CETRAK</strong> can help you track products,
          eliminate counterfeits, and gain real-time insights.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="demo-form-section">
        <div className="demo-container">

          {/* FORM */}
          <form className="demo-form" onSubmit={handleSubmit}>
            <h2>Schedule Your Demo</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your use case (optional)"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="btn-primary">
              Request Demo
            </button>
          </form>

          {/* SIDE INFO */}
          <div className="demo-info">
            <h3>What you'll get:</h3>

            <ul>
              <li>✔ Live product walkthrough</li>
              <li>✔ Use-case based demo</li>
              <li>✔ Custom pricing discussion</li>
              <li>✔ Q&A with our team</li>
            </ul>

            <p className="demo-trust">
              Trusted by brands tracking thousands of products daily
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BookDemo;