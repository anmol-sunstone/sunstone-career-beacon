
import React from 'react';
import { BookOpen, Rocket, Users, GraduationCap } from 'lucide-react';

const CareerIntro = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-sunstone-blue text-center mb-6">
          Career at Sunstone
          <div className="w-24 h-1.5 bg-sunstone-orange mx-auto mt-6"></div>
        </h2>
        
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          At Sunstone, we don't just offer jobs—we create careers. Whether you're a fresh graduate or an experienced professional, 
          our dynamic environment provides endless opportunities to grow, learn, and make an impact in the world of education.
        </p>
        
        <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">You'll get</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BookOpen size={32} />,
              title: "Challenging and meaningful projects",
              desc: "Work on projects that impact thousands of students across India"
            },
            {
              icon: <Rocket size={32} />,
              title: "A fast-paced, innovation-driven culture",
              desc: "Thrive in an environment that encourages creative solutions"
            },
            {
              icon: <Users size={32} />,
              title: "A supportive team that values your idea",
              desc: "Be heard and make meaningful contributions from day one"
            },
            {
              icon: <GraduationCap size={32} />,
              title: "Mentorship from industry leaders",
              desc: "Learn and grow alongside experienced professionals in education"
            }
          ].map((item, index) => (
            <div key={index} className="benefit-card group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-sunstone-blue/10 to-sunstone-blue/5 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-sunstone-blue">{item.icon}</div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerIntro;
