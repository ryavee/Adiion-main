import React from 'react';
import datamining from '../images/pages/datamining.png';

const Datamining = () => {
  return (
    <div className="font-ptsans">
      {/* Hero Section */}
      <div className="h-[250px] md:h-[400px] lg:h-[500px]">
        <img
          src={datamining}
          alt="Data Mining"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service Description */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-10">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          DATA MINING AND IT SOLUTIONS
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          At Adiion, we turn raw data into actionable intelligence. Our IT and data mining solutions help businesses
          discover hidden patterns, forecast trends, and make smarter, data-driven decisions.
          We provide end-to-end support — from data collection and cleansing to advanced analytics and visualization.
          Whether you're looking to optimize operations, understand customer behavior, or drive strategic growth, our
          solutions are designed to extract the most value from your data.
        </p>
      </div>

      {/* Info Cards */}
      <div className="px-4 sm:px-10 py-6 flex flex-wrap justify-center gap-6">
        <InfoCard
          title="DATA MINING & PREDICTIVE ANALYTICS"
          content="Uncover trends, patterns, and correlations in your data to support smarter decision-making and future planning."
        />
        <InfoCard
          title="BUSINESS INTELLIGENCE (BI) SOLUTIONS"
          content="We design dashboards and reporting tools that turn complex data into clear, visual insights — accessible in real time."
        />
        <InfoCard
          title="BIG DATA MANAGEMENT"
          content="Handle massive datasets with ease. We implement scalable systems to process, store, and analyze high-volume data."
        />
        <InfoCard
          title="CUSTOM IT SOLUTIONS"
          content="Tailored software and tech support to streamline business operations, improve efficiency, and reduce costs."
        />
      </div>
    </div>
  );
};

// Reusable card component
const InfoCard = ({ title, content }) => (
  <div className="w-full sm:w-[300px] md:w-[260px] text-center font-ptsans p-4 shadow-sm border border-gray-200 rounded-md bg-white">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default Datamining;

