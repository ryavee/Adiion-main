import React, { useEffect } from "react";
import "./Certo.css";

const Certo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="certo">

      {/* HERO */}
      <section className="certo-hero">
        <h1>Turn Every Product into a Smart Digital Asset</h1>
        <p>
          TraceIQ is a QR-based product intelligence platform that helps brands
          track products, prevent counterfeiting, and engage customers.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Request Demo</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
        <span className="trust-line">
          Already helping brands track thousands of products daily
        </span>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="certo-section">
        <h2>The Problem</h2>
        <p>
          Fake products, no visibility, and zero customer engagement — brands are losing control.
        </p>

        <h2 className="mt">Our Solution</h2>
        <p>
          TraceIQ gives every product a digital identity using secure QR codes.
        </p>
      </section>

      {/* SCREENSHOTS */}
      <section className="certo-section">
        <h2>Product in Action</h2>
        <div className="screenshots">
          <div className="screen-card">Dashboard</div>
          <div className="screen-card">Analytics</div>
          <div className="screen-card">Scan Reports</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="certo-section">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">🔐 Product Authentication</div>
          <div className="card">📊 Analytics Dashboard</div>
          <div className="card">📍 Dealer Tracking</div>
          <div className="card">🎁 Reward System</div>
          <div className="card">🚨 Fraud Detection</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="certo-section">
        <h2>How It Works</h2>
        <div className="steps">
          {[
            "Create Product",
            "Generate QR Code",
            "Print on Product",
            "Customer Scans",
            "Product Verified",
            "Dashboard Updates",
          ].map((step, i) => (
            <div key={i} className="step">{step}</div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="certo-section">
        <h2>Industries</h2>
        <div className="grid">
          <div className="card">Plywood</div>
          <div className="card">FMCG</div>
          <div className="card">Electronics</div>
          <div className="card">Pharma</div>
          <div className="card">Cosmetics</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="certo-section">
        <h2>Pricing</h2>
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
        <h2>Start tracking your products and customers today</h2>
        <button className="primary-btn">Book Demo</button>
      </section>

    </div>
  );
};

export default Certo;