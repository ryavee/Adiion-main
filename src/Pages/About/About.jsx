import React from "react";
import about from './aboutus.png'

const About = () => {
  return (
    <div className="font-ptsans">
      {/* Hero Section */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px]">
        <img src={about} alt="About Adiion" className="w-full h-full object-cover" />
      </div>

      {/* Introduction */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-10 text-gray-800">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">ABOUT ADIION</h2>
        <p className="text-base sm:text-lg text-justify leading-relaxed">
          At <span className="font-semibold">Adiion</span>, we are driven by innovation, strategy, and technology. As a forward-thinking
          IT and automation solutions company, we help brands and businesses scale through smart digital transformation.
          From cutting-edge websites to data intelligence and mobile applications, we craft tailored digital solutions
          that bridge the gap between vision and results.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-gray-50 px-4 sm:px-10 md:px-20 lg:px-36 py-10">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Our Mission</h3>
        <p className="text-gray-700 text-base text-justify leading-relaxed">
          Our mission is to empower businesses through technology that works — building scalable, user-friendly, and
          impactful solutions. We’re not just about code and designs. We’re about creating seamless digital experiences
          that solve real problems, elevate brand value, and deliver measurable growth.
        </p>
      </div>

      {/* What We Do */}
      

      {/* Why Adiion */}
      <div className="bg-blue-50 px-4 sm:px-10 md:px-20 lg:px-36 py-10">
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Why Choose Adiion?</h3>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Client-focused, results-driven approach</li>
          <li>Custom solutions tailored to your business needs</li>
          <li>End-to-end service — from planning to deployment</li>
          <li>Experienced team passionate about innovation</li>
          <li>Supportive partnerships and long-term growth</li>
        </ul>
      </div>
    </div>
  );
};



export default About;

