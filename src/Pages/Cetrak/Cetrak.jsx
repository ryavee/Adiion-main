import React, { useEffect } from "react";
import "./Cetrak.css";

const Cetrak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cetrak">

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>

        <div className="hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>
              Turn Every Product into a <span>Smart Digital Asset</span>
            </h1>

            <p>
              <strong>CETRAK</strong> is a Customer Engagement, Tracking & Analytics Platform
              that empowers brands to track products, eliminate counterfeiting,
              and unlock real-time customer intelligence.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">🚀 Request Demo</button>
              <button className="secondary-btn">Contact Us</button>
            </div>

            <div className="trust">
              Trusted by brands tracking thousands of products daily
            </div>
          </div>

          {/* RIGHT SIDE (we'll add image next if needed) */}
          <div className="hero-right"></div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section">
        <h2>Everything You Need to Control Your Products</h2>

        <div className="grid">
          <div className="card">
            <h3>🔐 Authentication</h3>
            <p>Ensure product authenticity using secure QR validation.</p>
          </div>

          <div className="card">
            <h3>📊 Analytics</h3>
            <p>Track scans, behavior & insights in real time.</p>
          </div>

          <div className="card">
            <h3>📍 Tracking</h3>
            <p>Monitor dealer & distributor activities.</p>
          </div>

          <div className="card">
            <h3>🎁 Rewards</h3>
            <p>Drive engagement with loyalty programs.</p>
          </div>

          <div className="card">
            <h3>🚨 Fraud Detection</h3>
            <p>Detect duplicate scans and fake products instantly.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>

        <div className="steps">
          {[
            "Create Product",
            "Generate QR",
            "Print Label",
            "Scan",
            "Verify",
            "Dashboard Update",
          ].map((step, i) => (
            <div className="step" key={i}>
              <span>{i + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <h2>Simple Pricing</h2>

        <div className="pricing">
          <div className="price-card">
            <h3>Starter</h3>
            <p>₹25K/month</p>
          </div>

          <div className="price-card highlight">
            <h3>Growth</h3>
            <p>₹50K/month</p>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>
            <p>Custom</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start tracking smarter today</h2>
        <button className="primary-btn">Book Demo</button>
      </section>

    </div>
  );
};

export default Cetrak;