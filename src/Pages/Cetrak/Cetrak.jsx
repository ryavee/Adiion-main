import React, { useEffect } from "react";
import "./Cetrak.css";
import { Link } from "react-router-dom";

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
              Turn Every Product into a{" "}
              <span className="typing-text">
                <span className="typed-word">Smart Digital Asset</span>
              </span>
            </h1>

            <p className="cetrak-hero__desc">
              <strong>CETRAK</strong> is a Customer Engagement, Tracking & Analytics Platform
              that empowers brands to track products, eliminate counterfeiting,
              and unlock real-time customer intelligence.
            </p>

            <div className="cetrak-hero__buttons">
              <Link to="/demo" className="btn btn-primary">
                Request Demo
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
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

      {/* PROBLEMS */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          The Hidden Problems Killing Your Revenue
        </h2>

        <div className="cetrak-grid">
          {[
            "No Visibility After Distribution",
            "Counterfeit Products",
            "Distributor Manipulation",
            "No Real Customer Data",
          ].map((item, i) => (
            <div key={i} className="cetrak-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          One Scan Gives You Complete Control
        </h2>

        <p className="cetrak-center-text">
          CETRAK turns every product into a smart, trackable asset using unique QR codes.
        </p>

        <div className="cetrak-grid">
          {[
            "Real-time location tracking",
            "Customer insights",
            "Product authenticity verification",
            "Direct engagement opportunities",
          ].map((item, i) => (
            <div key={i} className="cetrak-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Everything You Need in One Platform
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

      {/*How it Works?*/}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Simple for Customers. Powerful for Brands.
        </h2>

        <div className="cetrak-steps">
          {[
            "Add Unique QR Codes",
            "Customer Scans Product",
            "Data Captured Instantly",
            "Rewards & Engagement Triggered",
            "Real-Time Insights Dashboard",
          ].map((step, i) => (
            <div key={i} className="cetrak-step">
              <span>{i + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD/ DEMO */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          See What’s Happening in Your Market — Live
        </h2>

        <p className="cetrak-center-text">
          Track sales, scan activity, fake alerts, and customer behavior in real time.
        </p>

        <div className="cetrak-grid">
          <div className="cetrak-card">Dashboard View</div>
          <div className="cetrak-card">Analytics Insights</div>
          <div className="cetrak-card">Scan Reports</div>
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

      {/* BUSINESS IMPACT / Results */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Measurable Business Impact
        </h2>

        <div className="cetrak-grid">
          {[
            "Reduce counterfeit losses",
            "Gain full distribution visibility",
            "Build verified customer database",
            "Improve distributor accountability",
            "Increase customer engagement",
          ].map((item, i) => (
            <div key={i} className="cetrak-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES we serve?*/}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Built for High-Growth Industries
        </h2>

        <div className="cetrak-grid">
          {[
            "FMCG",
            "Pharmaceuticals",
            "Cosmetics",
            "Electronics",
            "Beverages",
            "Chemicals",
          ].map((item, i) => (
            <div key={i} className="cetrak-card">
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Scale */}
      <section className="cetrak-section">
        <h2 className="cetrak-section__title">
          Built for Scale. Designed for Trust.
        </h2>

        <div className="cetrak-grid">
          {[
            "Secure cloud infrastructure",
            "Scalable for millions of products",
            "AI-powered fraud detection",
            "Enterprise-ready architecture",
          ].map((item, i) => (
            <div key={i} className="cetrak-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cetrak-cta">
        <h2>Ready to Take Control of Your Product Distribution?</h2>

        <p style={{ marginTop: "10px" }}>
          Eliminate counterfeits. Track products. Understand your customers.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/demo" className="btn btn-primary">
            Request Demo
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>



    </div>
  );
};

export default Cetrak;