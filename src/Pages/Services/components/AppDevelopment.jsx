import React from 'react';
import app from '../images/pages/app.png';

const AppDevelopment = () => {
  return (
    <div className="font-ptsans">
      {/* Hero Section */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600">
        <img src={app} alt="App Development" className="w-full h-full object-cover" />
      </div>

      {/* Description */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-10">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4">
          MOBILE APP DEVELOPMENT COMPANY
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
          At Adiion, we transform great ideas into powerful digital experiences. Mobile applications are more than just tools —
          they're a direct bridge between your brand and your audience. From iOS and Android to web apps and interactive games,
          we build custom solutions that help businesses grow, engage, and lead.
        </p>
      </div>

      {/* Services */}
      <div className="px-4 sm:px-10 py-6 flex flex-wrap justify-center gap-6">
        <InfoCard
          title="iOS App Development"
          content="Custom apps for iPhone and iPad that harness the full capabilities of iOS, delivering smooth performance and intuitive interfaces."
        />
        <InfoCard
          title="Android App Development"
          content="Reliable, scalable Android applications tailored to your goals — from consumer apps to enterprise-grade solutions."
        />
        <InfoCard
          title="Windows App Development"
          content="Apps designed specifically for Windows devices, ensuring full compatibility and great user experience across platforms."
        />
        <InfoCard
          title="Facebook Apps & Games"
          content="We create interactive Facebook apps and social games that boost engagement and get your brand noticed."
        />
      </div>
    </div>
  );
};

// Reusable card component
const InfoCard = ({ title, content }) => (
  <div className="w-full sm:w-[45%] md:w-[300px] text-center font-ptsans p-4 shadow-sm border border-gray-200 rounded-md bg-white">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default AppDevelopment;
