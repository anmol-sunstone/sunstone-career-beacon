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
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-sunstone-blue text-center mb-6">
          Life at Sunstone
          <div className="w-24 h-1.5 bg-sunstone-orange mx-auto mt-6"></div>
        </h2>
        <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">Work Hard, Celebrate Harder!</h3>

        {/* Carousel Section */}
        <div className="relative max-w-6xl mx-auto mb-24">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="grid grid-cols-3 gap-6">
              {visibleImages.map((image, index) => (
                <div key={index} className="aspect-w-4 aspect-h-3 group">
                  <img 
                    src={image} 
                    alt={`Life at Sunstone ${startIndex + index + 1}`} 
                    className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 -left-16 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} className="text-sunstone-blue" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={28} className="text-sunstone-blue" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * 3)}
                className={`w-4 h-4 mx-2 rounded-full transition-all duration-300 ${
                  Math.floor(startIndex / 3) === index 
                    ? "bg-sunstone-orange scale-110" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Career Impact Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Column */}
            <div className="p-10 lg:p-16">
              <h3 className="text-4xl font-bold text-sunstone-blue mb-12 leading-tight">
                Ready to Do the Most Meaningful Work of Your Career?
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    emoji: "👩‍💻",
                    title: "Drive Innovation",
                    desc: "Lead groundbreaking projects that shape the future of education"
                  },
                  {
                    emoji: "🎯",
                    title: "Own Your Impact",
                    desc: "Take ownership of initiatives that directly affect thousands of students"
                  },
                  {
                    emoji: "📈",
                    title: "Scale Rapidly",
                    desc: "Grow alongside one of India's fastest-expanding edtech companies"
                  },
                  {
                    emoji: "🌱",
                    title: "Learn Continuously",
                    desc: "Access mentorship, training, and development opportunities"
                  },
                  {
                    emoji: "🤝",
                    title: "Collaborate Fearlessly",
                    desc: "Work with diverse, talented teams who challenge and support you"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group hover:transform hover:translate-x-3 transition-all duration-300">
                    <span className="text-3xl flex-shrink-0 mt-1">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Column */}
            <div className="bg-gradient-to-br from-sunstone-blue via-blue-600 to-blue-700 p-10 lg:p-16 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
              <div className="relative text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Join Our Growing Team
                </h3>
                <p className="text-white/90 mb-10 text-xl leading-relaxed">
                  Be part of something extraordinary. Shape the future of education with us.
                </p>
                <a 
                  href="https://www.notion.so/sunstonecareers/Open-positions-at-Sunstone-1d5cc35f259e80f8bb03e79251ccc00a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sunstone-orange text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
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
