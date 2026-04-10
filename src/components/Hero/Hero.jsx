import React, { useState, useEffect, useRef, useCallback } from "react";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";

const slides = [
  {
    heading: "Innovate with Adiion",
    text: "We deliver custom solutions that drive success.",
    image: slide1,
  },
  {
    heading: "Empower Your Business",
    text: "Smart automation and secure technologies.",
    image: slide2,
  },
  {
    heading: "Join the Future Today",
    text: "AI-driven solutions for tomorrow’s challenges.",
    image: slide3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef();

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <section className="relative h-[70vh] md:h-[70vh] sm:h-[60vh] overflow-hidden flex items-center justify-center text-white text-center">

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex h-full w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="absolute z-10 max-w-2xl px-5">
        <h1 className="text-4xl md:text-5xl font-semibold mb-3 drop-shadow-lg">
          {slides[currentIndex].heading}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 drop-shadow">
          {slides[currentIndex].text}
        </p>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 flex gap-3 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === currentIndex
                ? "bg-pink-400"
                : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;