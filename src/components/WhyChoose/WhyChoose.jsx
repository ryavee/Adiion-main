import React from 'react';
import { FaUserTie, FaLightbulb, FaHeadset, FaHandshake } from 'react-icons/fa';

const reasons = [
  {
    title: 'Client-Centric Approach',
    description: 'We prioritize your goals and ensure every solution is tailored to your needs.',
    icon: <FaHandshake />,
  },
  {
    title: 'Expert Team',
    description: 'Our skilled professionals bring deep tech expertise and industry experience.',
    icon: <FaUserTie />,
  },
  {
    title: 'Innovative Solutions',
    description: 'We combine creativity and technology to deliver future-ready products.',
    icon: <FaLightbulb />,
  },
  {
    title: 'End-to-End Support',
    description: "From consultation to post-launch support, we're with you at every step.",
    icon: <FaHeadset />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 bg-[#f4f4f4] text-center">

      {/* Section Title with gradient border */}
      <div className="flex justify-center mb-12">
        <h2
          className="relative inline-block px-16 py-8 max-[768px]:px-8 max-[768px]:py-6 text-[2.5rem] max-[768px]:text-[2rem] font-bold text-[#15157d] rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.1)] z-[1]"
          style={{ background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)' }}
        >
          <span
            className="absolute -inset-[6px] rounded-[30px] max-[768px]:rounded-[20px] -z-[1]"
            style={{ background: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
          />
          Why Choose Adiion
        </h2>
      </div>

      {/* Flip Cards Grid */}
      <div className="flex flex-wrap justify-center gap-[30px] px-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-transparent w-[260px] h-[220px] max-[768px]:w-[90%] max-[768px]:max-w-[320px] max-[768px]:h-auto"
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full max-[768px]:min-h-[220px] transition-transform duration-[800ms] group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-[15px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center bg-white text-[#15157d]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-[5rem] max-[768px]:text-[4rem] mb-[10px] text-[#00c9ff]">
                  {reason.icon}
                </div>
                <h3 className="text-[1.2rem] max-[768px]:text-[1.1rem] m-0 font-semibold">
                  {reason.title}
                </h3>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-[15px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center bg-[#15157d] text-white text-[1rem] max-[768px]:leading-[1.4] font-[Verdana,Geneva,Tahoma,sans-serif]"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <p>{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;