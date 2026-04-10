import React, { useState, useEffect } from 'react';
import {
  FaMobileAlt, FaLaptopCode, FaDatabase, FaBullhorn, FaRobot,
  FaCloud, FaShieldAlt, FaHeadset, FaUserTie, FaShoppingCart,
  FaUserClock, FaPlus, FaMinus
} from 'react-icons/fa';
import softwareImg from './images/hero/software.jpg';

const serviceData = [
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    description: ['Seamless apps for iOS & Android.', 'Boost business reach and usability.', 'Custom, scalable solutions.']
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    description: ['Responsive modern websites.', 'Web apps that scale with you.', 'SEO and performance optimized.']
  },
  {
    title: 'Data Solutions',
    icon: <FaDatabase />,
    description: ['Analytics and warehousing.', 'Data-driven decision making.', 'Optimized strategies for growth.']
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn />,
    description: ['SEO, SEM, and social media.', 'Targeted campaigns to engage.', 'Comprehensive analytics reporting.']
  },
  {
    title: 'AI & Automation',
    icon: <FaRobot />,
    description: ['Intelligent automation solutions.', 'Machine learning to optimize.', 'Streamline business processes.']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <FaCloud />,
    description: ['Secure cloud hosting.', 'Scalable infrastructure support.', 'Reliable and cost-effective.']
  },
  {
    title: 'Cybersecurity',
    icon: <FaShieldAlt />,
    description: ['Advanced threat protection.', 'Secure your digital assets.', 'Latest cybersecurity protocols.']
  },
  {
    title: 'BPO & Outsourcing',
    icon: <FaHeadset />,
    description: ['Affordable support operations.', 'Scalable business processes.', 'Expert service delivery.']
  },
  {
    title: 'Recruitment & Consulting',
    icon: <FaUserTie />,
    description: ['Strategic hiring solutions.', 'Workforce consulting.', 'Build your best team.']
  },
  {
    title: 'Ecommerce Solutions',
    icon: <FaShoppingCart />,
    description: ['Robust online store platforms.', 'Easy product management.', 'Seamless shopping experiences.']
  },
  {
    title: 'Virtual Assistance',
    icon: <FaUserClock />,
    description: ['Remote executive assistants.', 'Back-office support services.', 'Flexible, reliable help.']
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div>

      {/* Banner */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center text-white px-5"
        style={{
          backgroundImage: `url(${softwareImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-[2] max-w-[800px]">
          <h1
            className="text-[2.8rem] font-medium mb-[10px]"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
          >
            Your Digital Transformation Partner
          </h1>
          <p
            className="text-[1.2rem] font-medium text-[#ddd]"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Scalable, secure, and smart solutions tailored for modern businesses
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div
        className="text-center py-[60px] px-5"
        style={{ background: 'linear-gradient(to right, #f4f6fa, #ffffff)' }}
      >
        <h2 className="text-[2.5rem] font-bold text-[#15157d] mb-5">
          Transforming Ideas into <span className="text-[#00c9ff]">Digital Excellence</span>
        </h2>
        <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#555]">
          Adiion delivers cutting-edge technology solutions that drive business growth and innovation across industries.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-5 py-[60px] px-[30px] max-[768px]:py-10 max-[768px]:px-5 bg-[#e6ebf5]">
        {serviceData.map((service, index) => {
          const isActive = activeCard === index;
          const isOdd = index % 2 === 0; // 0-indexed, so even index = odd child

          return (
            <div
              key={index}
              className={`bg-[#1c1c2b] text-white rounded-[16px] py-3 px-10 max-[768px]:px-5 shadow-[0_10px_25px_rgba(0,0,0,0.3)] w-[80%] max-w-[650px] max-[768px]:w-full max-[768px]:max-w-none mx-auto flex flex-col justify-center cursor-pointer transition-all duration-300 overflow-visible
                ${isActive ? 'scale-[1.02] shadow-[0_15px_35px_rgba(0,0,0,0.45)]' : ''}
                ${isOdd ? 'justify-self-start' : 'justify-self-end'} max-[768px]:justify-self-center`}
              style={{ minHeight: isActive ? 'auto' : '80px' }}
            >
              {/* Card Header */}
              <div
                className="flex justify-between items-center"
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleCard(index)}
                aria-expanded={isActive}
                aria-controls={`service-desc-${index}`}
              >
                <div className="flex items-center gap-5 max-[768px]:gap-[15px]">
                  <div className="text-[2.4rem] text-[#00c9ff]">{service.icon}</div>
                  <h3 className="text-[1.3rem] max-[768px]:text-[1.2rem] font-bold whitespace-nowrap m-0">
                    {service.title}
                  </h3>
                </div>
                <button
                  className="text-[1.2rem] max-[768px]:text-[1.5rem] text-[#00c9ff] bg-transparent border-none cursor-pointer p-0 leading-none transition-all duration-300 hover:text-[#00eaff] hover:scale-[1.1]"
                  aria-label={isActive ? `Collapse ${service.title}` : `Expand ${service.title}`}
                  onClick={(e) => { e.stopPropagation(); toggleCard(index); }}
                >
                  {isActive ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {/* Description */}
              {isActive && (
                <ul
                  id={`service-desc-${index}`}
                  className="list-none p-0 pt-[15px] px-[5px] m-0 text-[#ddd] text-[1rem] leading-[1.5]"
                >
                  {service.description.map((point, i) => (
                    <li key={i} className="relative pl-[26px] mb-2 before:content-['➤'] before:absolute before:left-0 before:top-[1px] before:text-[#00c9ff] before:text-[1rem]">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div
        className="text-center py-[60px] px-5 text-white"
        style={{ background: 'linear-gradient(to right, #15157d, #4343a5)' }}
      >
        <h2 className="text-[2rem] font-bold mb-5">Ready to Elevate Your Business?</h2>
        <a
          href="/contact"
          className="inline-block mt-5 bg-white text-[#15157d] px-6 py-[10px] rounded-[5px] no-underline font-bold transition-all duration-300 hover:bg-[#f1f1f1]"
        >
          Contact Us Today
        </a>
      </div>

    </div>
  );
}