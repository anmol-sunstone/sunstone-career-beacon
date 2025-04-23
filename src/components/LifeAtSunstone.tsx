
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LifeAtSunstone = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "/lovable-uploads/52f98796-9ee7-422e-a474-27588b7c9669.png",
    "/lovable-uploads/1e71b67d-9eec-4160-acdd-8a916104c083.png",
    "/lovable-uploads/d1cca07f-c291-46e6-ba0f-62c7a78f4ffb.png",
    "/lovable-uploads/884f2bef-d86f-4fbc-b84f-70e0d3f03c2a.png",
    "/lovable-uploads/bd89d4c0-4dcf-43a4-8edf-fbe20d87cf95.png",
    "/lovable-uploads/20518657-23d0-4fda-a2d9-84c2b97f43f0.png"
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-6">
          Life at Sunstone
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-12">Work Hard, Celebrate Harder!</h3>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Life at Sunstone ${index + 1}`} 
                  className="w-full h-[400px] md:h-[600px] object-contain bg-white flex-shrink-0"
                />
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-sunstone-blue" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-sunstone-blue" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeSlide === index ? "bg-sunstone-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSunstone;
