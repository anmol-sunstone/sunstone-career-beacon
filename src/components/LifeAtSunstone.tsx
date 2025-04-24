
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LifeAtSunstone = () => {
  const images = [
    "/lovable-uploads/52f98796-9ee7-422e-a474-27588b7c9669.png",
    "/lovable-uploads/1e71b67d-9eec-4160-acdd-8a916104c083.png",
    "/lovable-uploads/d1cca07f-c291-46e6-ba0f-62c7a78f4ffb.png",
    "/lovable-uploads/884f2bef-d86f-4fbc-b84f-70e0d3f03c2a.png",
    "/lovable-uploads/bd89d4c0-4dcf-43a4-8edf-fbe20d87cf95.png",
    "/lovable-uploads/20518657-23d0-4fda-a2d9-84c2b97f43f0.png"
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-3">
          Life at Sunstone
        </h2>
        <div className="w-20 h-1 bg-sunstone-orange mx-auto mb-8"></div>
        <h3 className="text-2xl font-medium text-center mb-12 text-gray-800">Work Hard, Celebrate Harder!</h3>

        {/* Carousel Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`Life at Sunstone ${index + 1}`} 
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
              <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>

        {/* Career Impact Section */}
        <div className="mt-16 bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Column */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-sunstone-blue mb-8 leading-tight">
                Ready to Do the Most Meaningful Work of Your Career?
              </h3>
              
              <div className="space-y-6">
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
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-1 transition-all duration-200">
                    <span className="text-2xl flex-shrink-0 mt-1">{item.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Column */}
            <div className="bg-sunstone-blue p-8 md:p-12 flex items-center justify-center relative">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Join Our Growing Team
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-md mx-auto">
                  Be part of something extraordinary. Shape the future of education with us.
                </p>
                <a 
                  href="https://www.notion.so/sunstonecareers/Open-positions-at-Sunstone-1d5cc35f259e80f8bb03e79251ccc00a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sunstone-orange text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition-all duration-300"
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
