import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: 'Discovery',
    description: 'We begin with a collaborative exploration of your vision, understanding your challenges, audience, and goals to create a roadmap aligned with your success.',
    image: require('./Images/discovery.jpg'),
  },
  {
    title: 'Planning',
    description: 'Our team outlines clear project timelines, chooses the right technology stack, allocates resources, and establishes communication processes to keep everything on track.',
    image: require('./Images/planning.jpg'),
  },
  {
    title: 'Design & Prototyping',
    description: 'We turn ideas into interactive prototypes. Our designers focus on creating intuitive, user-centric experiences that align with your brand.',
    image: require('./Images/design.jpg'),
  },
  {
    title: 'Development',
    description: 'Our engineers bring the design to life with scalable code. We follow industry best practices for performance, testing, and version control.',
    image: require('./Images/development.jpg'),
  },
  {
    title: 'Delivery & Support',
    description: 'We ensure a smooth handover, provide training if needed, and offer post-launch support to keep your systems running efficiently.',
    image: require('./Images/delivery.jpg'),
  },
];

const HowWeWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-[#f4f4f4]">

      {/* Section Title */}
      <div className="text-center" data-aos="fade-up">
        <h2
          className="relative inline-block px-16 py-8 text-[2.5rem] font-bold text-[#15157d] rounded-[24px] mx-auto mb-12 text-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] z-[1]"
          style={{ background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)' }}
        >
          {/* Gradient border via pseudo-like wrapper */}
          <span
            className="absolute -inset-[6px] rounded-[30px] -z-[1]"
            style={{ background: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
          />
          How Adiion Work
        </h2>
      </div>

      {/* Steps */}
      {steps.map((step, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className={`flex items-center justify-center gap-8 mb-16 flex-wrap max-[1024px]:flex-col max-[1024px]:gap-8 max-[1024px]:text-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Image */}
          <div className="relative w-[500px] max-[1024px]:w-[90%] max-[1024px]:max-w-[500px] aspect-[4/3] overflow-hidden rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] shrink-0">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[15px] z-[1]" />
            {/* Title overlay */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2.2rem] max-[1024px]:text-[1.5rem] text-white font-bold px-[1.8rem] py-[0.6rem] rounded-[10px] text-center z-[2]"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
            >
              {step.title}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 max-w-[600px] max-[1024px]:max-w-[90%] text-[1.5rem] max-[1024px]:text-[1.2rem] font-medium leading-[1.6] text-[#111] p-4 max-[1024px]:px-2 font-['Inter',sans-serif]">
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowWeWork;