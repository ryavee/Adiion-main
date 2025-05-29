import React from "react";
import digitalmarket from "../images/pages/digitalmarketing.png";

const Marketing = () => {
  return (
    <div className="font-ptsans">
      {/* Hero Section */}
      <div className="h-[250px] md:h-[400px] lg:h-[500px]">
        <img
          src={digitalmarket}
          alt="Digital Marketing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-8 md:py-10">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800  text-center mb-4">
          DIGITAL MARKETING
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          At Adiion, we help brands grow in the digital space with data-driven, results-oriented marketing strategies.
          Whether you're looking to build awareness, generate leads, or drive conversions, our digital marketing
          services are designed to meet your business goals — and exceed them.
        </p>
      </div>

      {/* Info Grid */}
      <div className="px-4 sm:px-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        <InfoCard
          title="SEARCH ENGINE OPTIMIZATION"
          content="Boost your website's visibility and attract quality traffic through proven on-page and off-page SEO techniques, helping you rank higher on Google and reach the right audience consistently."
        />
        <InfoCard
          title="SOCIAL MEDIA MARKETING"
          content="Strengthen your brand presence and community engagement across major social platforms like Instagram, Facebook, LinkedIn, and Twitter (X) with strategy-driven content, ad campaigns, and follower interaction."
        />
        <InfoCard
          title="PAY-PER-CLICK ADVERTISING"
          content="Run data-backed ad campaigns on Google, Facebook, and more to generate instant traffic, qualified leads, and a strong return on investment through precisely targeted and optimized ads."
        />
        <InfoCard
          title="EMAIL MARKETING"
          content="Engage your audience through automated, personalized email campaigns that nurture leads, promote products, and boost conversions while maintaining consistent communication and brand recall."
        />
      </div>
    </div>
  );
};

const InfoCard = ({ title, content }) => (
  <div className="w-full sm:w-[280px] text-center font-ptsans p-4 shadow-sm border border-gray-200 rounded-md bg-white">
    <h4 className="text-md sm:text-lg font-semibold mb-2 font-ptsans ">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default Marketing;

