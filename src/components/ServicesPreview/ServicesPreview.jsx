import React from 'react';
import { FaLaptopCode, FaCloud, FaHeadset, FaDatabase, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Data Solutions',
    icon: <FaDatabase />,
    description: 'Unlock insights with advanced data management and analytics.',
  },
  {
    title: 'Development',
    icon: <FaLaptopCode />,
    description: 'Custom software and web solutions tailored to your business needs.',
  },
  {
    title: 'Cloud Services',
    icon: <FaCloud />,
    description: 'Scalable and secure cloud integration for modern infrastructure.',
  },
  {
    title: 'IT Support',
    icon: <FaHeadset />,
    description: 'Reliable support to keep your operations running smoothly.',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 px-4 bg-[#fef9ec] text-center">

      {/* Section Title with gradient border */}
      <div className="flex justify-center mb-12">
        <h2
          className="relative inline-block px-24 py-8 max-[768px]:px-12 max-[768px]:py-6 max-[480px]:px-8 max-[480px]:py-5 text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.8rem] font-bold text-[#15157d] rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.1)] z-[1]"
          style={{ background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)' }}
        >
          <span
            className="absolute -top-[6px] -left-[12px] -right-[12px] -bottom-[6px] max-[768px]:-left-[8px] max-[768px]:-right-[8px] rounded-[30px] -z-[1]"
            style={{ background: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
          />
          Our Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-[30px] max-[480px]:flex-col max-[480px]:items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-[#f9f9f9] rounded-[16px] p-5 w-[260px] max-[768px]:w-[80%] max-[480px]:w-[90%] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px] z-[1] overflow-hidden"
          >
            {/* Gradient border on hover */}
            <span
              className="absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-[14px] -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #00c9ff, #92fe9d)' }}
            />

            {/* Icon */}
            <div className="text-[3rem] text-[#00c9ff] mb-[15px] transition-transform duration-300 group-hover:scale-[1.2]">
              {service.icon}
            </div>

            <h3 className="text-[1.2rem] text-[#222] mb-[10px]">{service.title}</h3>
            <p className="text-[1rem] text-[#555]">{service.description}</p>

            {/* Arrow button */}
            <Link
              to="/services"
              className="absolute bottom-[15px] right-[15px] text-[1.5rem] text-[#15157d] font-bold z-[2] opacity-0 scale-[0.8] group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:text-[#00c9ff]"
            >
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="mt-4 mr-8 max-[768px]:mr-0 flex max-[768px]:justify-center justify-end">
        <Link
          to="/services"
          className="inline-flex items-center gap-1 px-[1.4rem] py-[0.6rem] bg-transparent text-[#15157d] rounded-[8px] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-[1.1rem] font-semibold no-underline transition-all duration-300 hover:text-[#0099ff] group"
        >
          More Services
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-[6px]">{'>>'}</span>
        </Link>
      </div>

    </section>
  );
};

export default ServicesPreview;