
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

        {/* Carousel Section */}
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

        {/* Career Impact Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Column */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-sunstone-blue mb-8">
                Ready to Do the Most Meaningful Work of Your Career?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform">
                  <span className="text-2xl flex-shrink-0 mt-1">👩‍💻</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Drive Innovation</h4>
                    <p className="text-gray-600">Lead groundbreaking projects that shape the future of education</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform">
                  <span className="text-2xl flex-shrink-0 mt-1">🎯</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Own Your Impact</h4>
                    <p className="text-gray-600">Take ownership of initiatives that directly affect thousands of students</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform">
                  <span className="text-2xl flex-shrink-0 mt-1">📈</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Scale Rapidly</h4>
                    <p className="text-gray-600">Grow alongside one of India's fastest-expanding edtech companies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform">
                  <span className="text-2xl flex-shrink-0 mt-1">🌱</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Learn Continuously</h4>
                    <p className="text-gray-600">Access mentorship, training, and development opportunities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform">
                  <span className="text-2xl flex-shrink-0 mt-1">🤝</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Collaborate Fearlessly</h4>
                    <p className="text-gray-600">Work with diverse, talented teams who challenge and support you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="bg-gradient-to-br from-sunstone-blue to-blue-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Join Our Growing Team
                </h3>
                <p className="text-white/90 mb-8 text-lg">
                  Be part of something extraordinary. Shape the future of education with us.
                </p>
                <a 
                  href="https://www.notion.so/sunstonecareers/Open-positions-at-Sunstone-1d5cc35f259e80f8bb03e79251ccc00a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-sunstone-blue font-semibold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                  View Openings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSunstone;
