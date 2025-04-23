
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LifeAtSunstone = () => {
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    "/lovable-uploads/52f98796-9ee7-422e-a474-27588b7c9669.png",
    "/lovable-uploads/1e71b67d-9eec-4160-acdd-8a916104c083.png",
    "/lovable-uploads/d1cca07f-c291-46e6-ba0f-62c7a78f4ffb.png",
    "/lovable-uploads/884f2bef-d86f-4fbc-b84f-70e0d3f03c2a.png",
    "/lovable-uploads/bd89d4c0-4dcf-43a4-8edf-fbe20d87cf95.png",
    "/lovable-uploads/20518657-23d0-4fda-a2d9-84c2b97f43f0.png"
  ];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3 >= images.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? Math.floor((images.length - 1) / 3) * 3 : prev - 3));
  };

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-6">
          Life at Sunstone
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-12">Work Hard, Celebrate Harder!</h3>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div className="grid grid-cols-3 gap-4">
              {visibleImages.map((image, index) => (
                <div key={index} className="aspect-w-4 aspect-h-3">
                  <img 
                    src={image} 
                    alt={`Life at Sunstone ${startIndex + index + 1}`} 
                    className="w-full h-[200px] md:h-[300px] object-contain bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-sunstone-blue" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-sunstone-blue" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * 3)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  Math.floor(startIndex / 3) === index ? "bg-sunstone-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSunstone;
