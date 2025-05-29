import React from "react";
import website from "../images/pages/website.jpg";

const WebDev = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px]">
        <img src={website} alt="Web Development" className="w-full h-full object-cover" />
      </div>

      {/* Service Description */}
      <div className="px-4 sm:px-6 md:px-20 lg:px-36 py-10">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center font-ptsans">
          WEB DESIGN AND DEVELOPMENT
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-ptsans">
          At Adiion, we believe that your website should reflect the uniqueness of your business not just another
          template. That’s why we don’t do “one-size-fits-all.” We design and develop websites that don’t just look
          good they perform.
          Whether you need a sleek static site or a dynamic content management system (CMS), our
          team brings the creativity and technical skills to make it happen. From stunning user interfaces to seamless
          functionality, every site we build is tailored to engage your audience and support your goals.
          And it doesn’t stop there — we also provide SEO (Search Engine Optimization) to ensure your site ranks well and drives the
          right traffic, consistently.
        </p>
      </div>

      {/* Info Cards */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6 space-y-10">
        {/* Grid Group 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <InfoCard
            title="CMS"
            content="A reliable content management system (CMS) is essential for any website. We build structured CMS platforms that allow you to easily create, manage, and update your content without hassle."
          />
          <InfoCard
            title="Responsive Website Design"
            content="We create websites that adapt flawlessly across all screen sizes and platforms. Responsive design is no longer optional — it’s essential."
          />
          <InfoCard
            title="Website Re-Development"
            content="If your current website is outdated, underperforming, or not user-friendly, we’ll help redesign and modernize it to reflect your brand better."
          />
          <InfoCard
            title="Website Performance Optimization"
            content="We monitor and optimize your website’s speed, SEO, structure, and usability to ensure it performs at its best — always."
          />
        </div>

        {/* Grid Group 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <InfoCard
            title="User Experience (UX) Development"
            content="We build intuitive, user-centered experiences that are easy to navigate, engaging, and search engine friendly."
          />
          <InfoCard
            title="Website Design & Implementation"
            content="From wireframes to live launch, we design and implement websites that are visually appealing and aligned with your business goals."
          />
          <InfoCard
            title="Corporate Website Development"
            content="We create professional corporate websites that represent your brand identity and values with credibility."
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, content }) => (
  <div className="w-full sm:w-[280px] md:w-[250px] text-center font-ptsans p-4 shadow-sm border border-gray-200 rounded-md bg-white">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default WebDev;
