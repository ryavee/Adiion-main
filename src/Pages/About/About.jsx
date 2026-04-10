import React, { useEffect } from "react";
import aboutImg from "./about.jpg"; // ✅ keep image inside src

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">

      {/* BANNER */}
      <div className="relative h-[70vh] flex items-center justify-center text-center text-white px-5">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 drop-shadow-lg">
            About Adiion
          </h1>
          <p className="text-lg text-gray-200 drop-shadow">
            Driven by innovation, strategy, and technology.
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <section className="bg-blue-50 py-16 px-5">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-3xl text-center font-semibold text-blue-900 mb-6">
            About Adiion
          </h2>
          <p className="text-lg leading-relaxed text-center">
            At <strong>Adiion</strong>, we are driven by innovation, strategy, and technology.
            As a forward-thinking IT and automation solutions company, we help brands
            and businesses scale through smart digital transformation. From cutting-edge
            websites to data intelligence and mobile applications, we craft tailored
            digital solutions that bridge the gap between vision and results.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-orange-50 py-16 px-5">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-3xl text-center font-semibold text-blue-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-center">
            Our mission is to empower businesses through technology that works —
            building scalable, user-friendly, and impactful solutions. We’re not just
            about code and designs. We’re about creating seamless digital experiences
            that solve real problems, elevate brand value, and deliver measurable growth.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-green-50 py-16 px-5">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-3xl text-center font-semibold text-blue-900 mb-6">
            Why Choose Adiion?
          </h2>

          <ul className="space-y-3 text-lg max-w-xl mx-auto list-disc pl-5">
            <li>Client-focused, results-driven approach</li>
            <li>Custom solutions tailored to your business needs</li>
            <li>End-to-end service — from planning to deployment</li>
            <li>Experienced team passionate about innovation</li>
            <li>Supportive partnerships and long-term growth</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default About;