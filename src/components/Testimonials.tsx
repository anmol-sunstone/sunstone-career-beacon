
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rinky Singh",
      position: "Marketing",
      quote: "People I work with at Sunstone give me the freedom to be myself, and I see myself growing as an individual. The focus on ethics in whatever we do are the things that stand out the most to me. My time here in such a forward-thinking, fast-paced environment has given me an unparalleled experience.",
      image: "/lovable-uploads/5d6d6563-ffae-4e9c-99a2-be5986cdc87a.png"
    },
    {
      name: "Arpit Sarda",
      position: "Business",
      quote: "At Sunstone, you surround yourself with highly driven people who bring their hearts to work. All our daily discussions are anchored in one core belief - \"Is it right for the student?\" A workplace with such strong values is bound to bring out the best in you.",
      image: "/lovable-uploads/15dd3048-f4e5-4eaf-80d0-1fda35e89243.png"
    },
    {
      name: "Guddan",
      position: "Inside Sales",
      quote: "I have been working here for the last 8 months and I don't think I could've found a workplace better than Sunstone, as they take pride in maintaining work-life balance and encouraging employees to grow. I could not be happier with my current role, work environment and ability to progress.",
      image: "/lovable-uploads/5e00d00e-85d9-4bf2-b639-b42fd7c56e86.png"
    },
    {
      name: "Devashish Pandey",
      position: "Strategy & Operations",
      quote: "It's been 3 years that I have been a part of Sunstone and it has indeed been an enriching experience for me. It is an organisation which offers opportunities for everyone to foster and grow both professionally and personally.",
      image: "/lovable-uploads/768437a7-c6f5-4314-9db8-a89085361885.png"
    },
    {
      name: "Shefali Sanwaria",
      position: "Product",
      quote: "Sunstone provides complete freedom and flexibility, which I really enjoy. Each day brings new challenges and hence many opportunities to learn something new and do things which are really impactful. Peers at Sunstone are extremely encouraging, and like one big family who are always around to support.",
      image: "/lovable-uploads/e38d08e0-fb26-43ed-b98d-6b6581d01379.png"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-4">
          Hear from our team
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 text-center mb-12">
          Know what it's like to work at Sunstone
        </h3>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            startIndex: 0
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <div className="h-full bg-gray-50 rounded-xl shadow-lg p-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sunstone-blue">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <blockquote className="mb-4 text-gray-700 italic relative">
                        <span className="text-5xl text-sunstone-blue/20 absolute -top-4 -left-2">"</span>
                        <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                      </blockquote>
                      <div>
                        <h4 className="text-lg font-semibold text-sunstone-blue">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
