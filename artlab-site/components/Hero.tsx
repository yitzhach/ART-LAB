import React, { useState, useEffect } from 'react';
import { HERO_IMAGES, SITE } from '../constants';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToClasses = () => {
    document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden bg-gray-900">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 md:pb-32 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-4 drop-shadow-md uppercase">
          {SITE.name}
        </h1>
        <p className="text-sm md:text-lg font-light tracking-widest uppercase text-gray-200 drop-shadow-sm">
          {SITE.tagline}
        </p>
        <button
          onClick={scrollToClasses}
          className="mt-8 px-8 py-3 border border-white text-white font-light tracking-widest text-sm uppercase hover:bg-white hover:text-gray-900 transition-colors"
        >
          View Classes
        </button>
      </div>

      <div
        onClick={scrollToClasses}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
        aria-label="Scroll to classes"
      >
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
