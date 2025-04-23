
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Sample testimonials (based on the Notion link description)
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Engineering Lead",
      quote: "Working at Sunstone has given me the opportunity to build technology that directly impacts thousands of students' futures. It's incredibly rewarding to see our platform help students achieve their career goals.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
    },
    {
      name: "Priya Singh",
      position: "Product Manager",
      quote: "The culture at Sunstone encourages innovation and ownership. I've been able to drive significant product initiatives that have transformed our education delivery system.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
    },
    {
      name: "Amit Patel",
      position: "Marketing Specialist",
      quote: "What I love most about Sunstone is how our work directly impacts students across India. The collaborative environment and the passion everyone brings makes this more than just a job.",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=300"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-4">Hear from our team</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 text-center mb-12">Know what it's like to work at Sunstone</h3>
        
        {/* Testimonials Slider */}
        <div className="relative max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-sunstone-blue">
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt={testimonials[activeSlide].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-sunstone-blue text-white rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <div className="mb-6 relative testimonial-quote">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-sunstone-blue/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.708-.935 1.18-1.217l-.4-.895c-1.16.236-2.077.752-2.753 1.548-.677.797-1.014 1.75-1.015 2.865 0 .78.223 1.466.67 2.054.448.588 1.05.886 1.805.894.21.004.43-.03.67-.103.24-.073.46-.193.67-.36.21-.167.38-.39.51-.664.13-.274.2-.6.2-.975zm7.975 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.68.41-2.205.32-.525.71-.93 1.17-1.217l-.39-.895c-1.16.236-2.08.752-2.76 1.548-.67.797-1.01 1.756-1.01 2.877 0 .78.22 1.463.67 2.048.45.585 1.05.88 1.8.89.21 0 .43-.03.67-.102.24-.073.46-.193.67-.36.21-.167.38-.39.51-.664.13-.274.2-.6.2-.975z"></path>
                </svg>
                <p className="text-lg italic text-gray-700 slide-animation">"{testimonials[activeSlide].quote}"</p>
              </div>
              <h4 className="text-xl font-semibold">{testimonials[activeSlide].name}</h4>
              <p className="text-gray-600">{testimonials[activeSlide].position}</p>
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevSlide} 
              className="bg-gray-200 hover:bg-sunstone-blue hover:text-white transition-colors p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="bg-gray-200 hover:bg-sunstone-blue hover:text-white transition-colors p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeSlide === index ? "bg-sunstone-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
