
import React from 'react';
import { BookOpen, Rocket, Users, GraduationCap } from 'lucide-react';

const CareerIntro = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-6">
          Career at Sunstone
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At Sunstone, we don't just offer jobs—we create careers. Whether you're a fresh graduate or an experienced professional, 
          our dynamic environment provides endless opportunities to grow, learn, and make an impact in the world of education.
        </p>
        
        <h3 className="text-2xl font-bold text-center mb-10">You'll get</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-gray-100 p-5 rounded-full mb-4">
              <BookOpen size={36} className="text-sunstone-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Challenging and meaningful projects</h4>
            <p className="text-gray-600">Work on projects that impact thousands of students across India</p>
          </div>
          
          <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-gray-100 p-5 rounded-full mb-4">
              <Rocket size={36} className="text-sunstone-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-2">A fast-paced, innovation-driven culture</h4>
            <p className="text-gray-600">Thrive in an environment that encourages creative solutions</p>
          </div>
          
          <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-gray-100 p-5 rounded-full mb-4">
              <Users size={36} className="text-sunstone-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-2">A supportive team that values your idea</h4>
            <p className="text-gray-600">Be heard and make meaningful contributions from day one</p>
          </div>
          
          <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-gray-100 p-5 rounded-full mb-4">
              <GraduationCap size={36} className="text-sunstone-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Mentorship from industry leaders</h4>
            <p className="text-gray-600">Learn and grow alongside experienced professionals in education</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerIntro;
