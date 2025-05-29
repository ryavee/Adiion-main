import React, { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    heading: 'Innovate with Adiion',
    text: 'We deliver custom solutions that drive success.',
    className: 'slide1'
  },
  {
    heading: 'Transform Your Business',
    text: 'Explore tech that makes your vision a reality.',
    className: 'slide2'
  },
  {
    heading: 'Future-Ready Solutions',
    text: 'Empowering industries with next-gen tools.',
    className: 'slide3'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className={`hero ${currentSlide.className}`}>
      <div className="hero-content">
        <h2>{currentSlide.heading}</h2>
        <p>{currentSlide.text}</p>
      </div>
    </section>
  );
};

export default Hero;
