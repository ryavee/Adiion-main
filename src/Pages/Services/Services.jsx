import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import software from './images/hero/software.jpg';
import web from './images/hero/web.jpg';
import app from './images/hero/app.jpg';
import consulting from './images/hero/consulting.avif';
import portfolio from './images/hero/portfolio.avif';

import appdev from './images/vector/app.png';
import datasol from './images/vector/brandcommunication.png';
import marketing from './images/vector/searchmark.png';
import webdev from './images/vector/web-deve.png';

const slides = [
  { image: software, caption: 'Software Development' },
  { image: web, caption: 'Web Development' },
  { image: app, caption: 'App Development' },
  { image: consulting, caption: ' Data Solution ' },
  { image: portfolio, caption: 'Digital Marketing' },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-white pt-4 pb-20 md:pt-0 md:pb-28">
      {/* Image Slider */}
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden mb-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-60 text-white text-sm md:text-lg lg:text-xl px-8 py-12 md:px-40 md:py-40  text-center font-bold">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Title and Subtitle */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Transforming Ideas into <span className="text-blue-600">Digital Excellence</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          Adiion delivers cutting-edge technology solutions that drive business growth and innovation across industries.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex justify-center flex-wrap gap-12 px-4 text-center bg-gray-50 py-6">
        <div className="flex flex-col items-center w-[250px] transition-transform duration-300 hover:scale-105">
          <Link to="/appdevelopment">
            <img src={appdev} alt="App Development" className="w-[150px] h-[150px] mb-2 opacity-80 cursor-pointer transition-transform duration-300" />
          </Link>
          <p className="text-gray-900 text-base font-sans">APP DEVELOPMENT</p>
        </div>
        <div className="flex flex-col items-center w-[250px] transition-transform duration-300 hover:scale-105">
          <Link to="/webdevelopment">
            <img src={webdev} alt="Web Development" className="w-[150px] h-[150px] mb-2 opacity-80 cursor-pointer transition-transform duration-300" />
          </Link>
          <p className="text-gray-900 text-base font-sans">WEB DEVELOPMENT</p>
        </div>
        <div className="flex flex-col items-center w-[250px] transition-transform duration-300 hover:scale-105">
          <Link to="/datasolutions">
            <img src={datasol} alt="Data Solutions" className="w-[150px] h-[150px] mb-2 opacity-80 cursor-pointer transition-transform duration-300" />
          </Link>
          <p className="text-gray-900 text-base font-sans">DATA SOLUTIONS</p>
        </div>
        <div className="flex flex-col items-center w-[250px] transition-transform duration-300 hover:scale-105">
          <Link to="/marketing">
            <img src={marketing} alt="Digital Marketing" className="w-[150px] h-[150px] mb-2 opacity-80 cursor-pointer transition-transform duration-300" />
          </Link>
          <p className="text-gray-900 text-base font-sans">DIGITAL MARKETING</p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Services;
