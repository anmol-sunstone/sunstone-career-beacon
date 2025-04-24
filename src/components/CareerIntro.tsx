
import React from 'react';
import { BookOpen, Rocket, Users, GraduationCap } from 'lucide-react';

const CareerIntro = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-3">
          Career at Sunstone
        </h2>
        <div className="w-20 h-1 bg-sunstone-orange mx-auto mb-8"></div>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          At Sunstone, we don't just offer jobs—we create careers. Whether you're a fresh graduate or an experienced professional, 
          our dynamic environment provides endless opportunities to grow, learn, and make an impact in the world of education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <BookOpen size={28} />,
              title: "Challenging and meaningful projects",
              desc: "Work on projects that impact thousands of students across India"
            },
            {
              icon: <Rocket size={28} />,
              title: "A fast-paced, innovation-driven culture",
              desc: "Thrive in an environment that encourages creative solutions"
            },
            {
              icon: <Users size={28} />,
              title: "A supportive team that values your idea",
              desc: "Be heard and make meaningful contributions from day one"
            },
            {
              icon: <GraduationCap size={28} />,
              title: "Mentorship from industry leaders",
              desc: "Learn and grow alongside experienced professionals in education"
            }
          ].map((item, index) => (
            <div key={index} className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-4 rounded-full bg-blue-50 text-sunstone-blue mb-4">
                <div>{item.icon}</div>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerIntro;
