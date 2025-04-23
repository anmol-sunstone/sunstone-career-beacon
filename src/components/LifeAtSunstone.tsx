
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LifeAtSunstone = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
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
                  className="w-full h-[400px] object-cover flex-shrink-0"
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
