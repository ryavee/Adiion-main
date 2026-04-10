import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Cetrak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-32 px-5 bg-gradient-to-b from-[#111827] to-[#020617]">

        {/* Glow */}
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[120px] top-[-100px] left-1/2 -translate-x-1/2 rounded-full"></div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          <div className="w-full max-w-3xl">
            <h1 className="text-5xl font-extrabold">
              Turn Every Product into a <br /> 
              <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Smart Digital Asset
              </span>
            </h1>

            <p className="mt-5 text-gray-400">
              <strong>CETRAK</strong> is a Customer Engagement, Tracking & Analytics Platform
              that empowers brands to track products, eliminate counterfeiting,
              and unlock real-time customer intelligence.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <Link
                to="/demo"
                className="px-7 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 font-semibold hover:-translate-y-1 transition"
              >
                Request Demo
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg border border-gray-600"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-4 text-gray-500">
              Trusted by brands tracking thousands of products daily
            </p>
          </div>
        </div>
      </section>

      

      {/* PROBLEMS */}
      <section className="py-24 px-5 text-center">
        <h2 className="text-3xl mb-12 font-semibold">
          The Hidden Problems Killing Your Revenue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "No Visibility After Distribution",
            "Counterfeit Products",
            "Distributor Manipulation",
            "No Real Customer Data",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl hover:-translate-y-2 hover:border hover:border-green-400 transition">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 px-5 text-center">
        <h2 className="text-3xl mb-6 font-semibold">
          One Scan Gives You Complete Control
        </h2>

        <p className="max-w-xl mx-auto text-gray-400 mb-10">
          CETRAK turns every product into a smart, trackable asset using unique QR codes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Real-time location tracking",
            "Customer insights",
            "Product authenticity verification",
            "Direct engagement opportunities",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl hover:-translate-y-2 hover:border hover:border-green-400 transition">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-5 text-center">
        <h2 className="text-3xl mb-12 font-semibold">
          Everything You Need in One Platform
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            ["🔐 Authentication", "Ensure product authenticity using secure QR validation."],
            ["📊 Analytics", "Track scans, behavior & insights in real time."],
            ["📍 Tracking", "Monitor dealer & distributor activities."],
            ["🎁 Rewards", "Drive engagement with loyalty programs."],
            ["🚨 Fraud Detection", "Detect duplicate scans instantly."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl hover:-translate-y-2 hover:border hover:border-green-400 transition">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 px-5 text-center">
        <h2 className="text-3xl mb-12 font-semibold">
          Simple for Customers. Powerful for Brands.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Add Unique QR Codes",
            "Customer Scans Product",
            "Data Captured Instantly",
            "Rewards & Engagement Triggered",
            "Real-Time Insights Dashboard",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-900 px-5 py-3 rounded-full">
              <span className="bg-green-500 px-2 py-1 rounded-full text-sm">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center bg-gradient-to-r from-blue-600 to-green-500">
        <h2 className="text-3xl font-semibold">
          Ready to Take Control of Your Product Distribution?
        </h2>

        <p className="mt-3">
          Eliminate counterfeits. Track products. Understand your customers.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/demo"
            className="px-7 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 font-semibold hover:-translate-y-1 transition"
          >
            Request Demo
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3 rounded-lg border border-gray-600"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cetrak;