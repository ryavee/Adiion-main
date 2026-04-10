import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_hu94o4q",
        "template_3dkuq4k",
        formData,
        "9VpssFz7gkYS2imlc"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        alert("❌ Failed to send. Try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">

      {/* HERO */}
      <section className="text-center pt-28 pb-12 px-5">
        <h1 className="text-5xl font-extrabold">Book a Demo</h1>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          See how <strong>CETRAK</strong> can help you track products,
          eliminate counterfeits, and gain real-time insights.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 flex flex-col gap-5"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Schedule Your Demo
            </h2>

            {/* INPUT FIELD */}
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "company", label: "Company Name", type: "text" },
              { name: "email", label: "Work Email", type: "email" },
              { name: "phone", label: "Phone Number", type: "tel" },
            ].map((field, i) => (
              <div key={i} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
                />
                <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all 
                  peer-placeholder-shown:top-4 
                  peer-placeholder-shown:text-base 
                  peer-focus:top-2 
                  peer-focus:text-xs 
                  peer-focus:text-green-400">
                  {field.label}
                </label>
              </div>
            ))}

            {/* TEXTAREA */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none min-h-[120px] resize-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
              />
              <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all 
                peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-base 
                peer-focus:top-2 
                peer-focus:text-xs 
                peer-focus:text-green-400">
                Your Use Case
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-green-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Demo"}
            </button>

            {/* SUCCESS */}
            {success && (
              <div className="mt-3 p-3 rounded-lg bg-green-500/10 text-green-400 text-center animate-fadeIn">
                ✅ Demo request sent! Our team will contact you shortly.
              </div>
            )}
          </form>

          {/* SIDE INFO */}
          <div className="flex-1 pt-2">
            <h3 className="text-xl font-semibold mb-4">
              What you'll get:
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>✔ Live product walkthrough</li>
              <li>✔ Use-case based demo</li>
              <li>✔ Custom pricing discussion</li>
              <li>✔ Q&A with our team</li>
            </ul>

            <p className="mt-6 text-gray-500 text-sm">
              Trusted by brands tracking thousands of products daily
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;