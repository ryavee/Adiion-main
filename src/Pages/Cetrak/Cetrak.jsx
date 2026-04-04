import React, { useEffect } from "react";
import "./Cetrak.css";

const Cetrak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cetrak">

      {/* HERO */}
      <section className="cetrak-hero">
        <div className="cetrak-hero__glow"></div>

        <div className="cetrak-hero__container">
          {/* LEFT */}
          <div className="cetrak-hero__left">
            <h1 className="cetrak-hero__title">
              Turn Every Product into a <span>Smart Digital Asset</span>
            </h1>

            <p className="cetrak-hero__desc">
              <strong>CETRAK</strong> is a Customer Engagement, Tracking & Analytics Platform
              that empowers brands to track products, eliminate counterfeiting,
              and unlock real-time customer intelligence.
            </p>

            <div className="cetrak-hero__buttons">
              <button className="btn btn-primary">🚀 Request Demo</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>

            <p className="cetrak-hero__trust">
              Trusted by brands tracking thousands of products daily
            </p>
          </div>

          {/* RIGHT */}
          <div className="cetrak-hero__right">
            {/* Add image later */}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Everything You Need to Control Your Products
        </h2>

        <div className="cetrak-grid">
          {[
            ["🔐 Authentication", "Ensure product authenticity using secure QR validation."],
            ["📊 Analytics", "Track scans, behavior & insights in real time."],
            ["📍 Tracking", "Monitor dealer & distributor activities."],
            ["🎁 Rewards", "Drive engagement with loyalty programs."],
            ["🚨 Fraud Detection", "Detect duplicate scans instantly."],
          ].map(([title, desc], i) => (
            <div key={i} className="cetrak-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">How It Works</h2>

        <div className="cetrak-steps">
          {[
            "Create Product",
            "Generate QR",
            "Print Label",
            "Scan",
            "Verify",
            "Dashboard Update",
          ].map((step, i) => (
            <div key={i} className="cetrak-step">
              <span>{i + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">Simple Pricing</h2>

        <div className="cetrak-pricing">
          <div className="cetrak-price-card">
            <h3>Starter</h3>
            <p>₹25K/month</p>
          </div>

          <div className="cetrak-price-card highlight">
            <h3>Growth</h3>
            <p>₹50K/month</p>
          </div>

          <div className="cetrak-price-card">
            <h3>Enterprise</h3>
            <p>Custom</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cetrak-cta">
        <h2>Start tracking smarter today</h2>
        <button className="btn btn-primary">Book Demo</button>
      </section>

    </div>
  );
};

export default Cetrak;