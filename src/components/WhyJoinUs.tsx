import React from 'react';
import { 
  TrendingUp, 
  Scale, 
  Target, 
  Lightbulb, 
  GraduationCap, 
  Heart,
  BadgeDollarSign,
  Clock,
  Handshake
} from 'lucide-react';

const WhyJoinUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-sunstone-blue text-center mb-4">
          Why Join Us
        </h2>
        <div className="w-24 h-1.5 bg-sunstone-orange mx-auto mb-16 rounded-full"></div>
        
        {/* Great Place to Work Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-16 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
          <img 
            src="/lovable-uploads/2536c168-96a3-4184-a7f1-c20d87f75e17.png"
            alt="Great Place to Work Banner"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Great Place To Work Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-sunstone-blue mb-8">
            Sunstone is Awarded with Great Place to Work!
          </h3>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            We are proud to be recognized as a Great Place to Work, reflecting our commitment to employee satisfaction, 
            workplace culture, and professional growth. At Sunstone, we prioritize a positive and inclusive work 
            environment that fosters innovation and collaboration.
          </p>
          
          <p className="text-2xl font-semibold text-center text-sunstone-blue border-b border-gray-200 pb-8 mb-12">
            But that's just the beginning!
          </p>

          <p className="text-2xl font-semibold text-center text-sunstone-blue mb-12">
            Here's what makes Sunstone an exciting place to grow and thrive:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-sunstone-orange" />, 
                title: "Impactful Work",
                desc: "Shape the future of education and career success for students" },
              { icon: <TrendingUp className="w-8 h-8 text-sunstone-orange" />, 
                title: "Fast Growth",
                desc: "Be part of an ever-growing, dynamic work environment" },
              { icon: <Lightbulb className="w-8 h-8 text-sunstone-orange" />, 
                title: "Innovative Culture",
                desc: "Work with industry leaders on cutting-edge projects" },
              { icon: <Scale className="w-8 h-8 text-sunstone-orange" />, 
                title: "Work-Life Balance",
                desc: "Flexible work hours, team-building activities, and vibrant workplace culture" },
              { icon: <GraduationCap className="w-8 h-8 text-sunstone-orange" />, 
                title: "Learning & Development",
                desc: "Get access to mentorship, training sessions, and career advancement opportunities" },
              { icon: <Heart className="w-8 h-8 text-sunstone-orange" />, 
                title: "Health Insurance",
                desc: "Comprehensive medical insurance for you and your family with coverage for regular checkups and emergencies" },
              { icon: <BadgeDollarSign className="w-8 h-8 text-sunstone-orange" />, 
                title: "Employee Stock Options",
                desc: "Be a part-owner of the company with our ESOP program, letting you share in Sunstone's success" },
              { icon: <Handshake className="w-8 h-8 text-sunstone-orange" />, 
                title: "Referral Benefits",
                desc: "Attractive rewards for referring talented professionals who join our growing team" },
              { icon: <Clock className="w-8 h-8 text-sunstone-orange" />, 
                title: "Flexible Work",
                desc: "Hybrid work model with the flexibility to work remotely on certain days of the week" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
