
import React from 'react';
import { 
  TrendingUp, 
  Scale, 
  Target, 
  Lightbulb, 
  GraduationCap 
} from 'lucide-react';

const WhyJoinUs = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-12">
          Why Join Us
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        
        {/* Value Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full mb-4 shadow-md">
              <TrendingUp size={32} className="text-sunstone-blue" />
            </div>
            <h4 className="text-lg font-semibold">Growth</h4>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full mb-4 shadow-md">
              <Scale size={32} className="text-sunstone-blue" />
            </div>
            <h4 className="text-lg font-semibold">Balance</h4>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full mb-4 shadow-md">
              <Target size={32} className="text-sunstone-blue" />
            </div>
            <h4 className="text-lg font-semibold">Impact</h4>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full mb-4 shadow-md">
              <Lightbulb size={32} className="text-sunstone-blue" />
            </div>
            <h4 className="text-lg font-semibold">Innovation</h4>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full mb-4 shadow-md">
              <GraduationCap size={32} className="text-sunstone-blue" />
            </div>
            <h4 className="text-lg font-semibold">Learning</h4>
          </div>
        </div>
        
        {/* Great Place to Work Banner */}
        <div className="mx-[-1rem] md:mx-[-2rem] lg:mx-[-4rem] xl:mx-[-8rem] mb-12">
          <img 
            src="/lovable-uploads/2536c168-96a3-4184-a7f1-c20d87f75e17.png"
            alt="Great Place to Work Banner"
            className="w-full h-auto"
          />
        </div>

        {/* Great Place To Work Content */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-12">
          <h3 className="text-2xl font-bold text-center text-sunstone-blue mb-6">
            Sunstone is Awarded with Great Place to Work!
          </h3>
          
          <p className="text-lg text-gray-700 mb-6">
            We are proud to be recognized as a Great Place to Work, reflecting our commitment to employee satisfaction, 
            workplace culture, and professional growth. At Sunstone, we prioritize a positive and inclusive work 
            environment that fosters innovation and collaboration.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            But that's just the beginning! Here's what makes Sunstone an exciting place to grow and thrive:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Target size={18} className="text-sunstone-blue" />
              </div>
              <p><strong>Impactful Work:</strong> Shape the future of education and career success for students.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <TrendingUp size={18} className="text-sunstone-blue" />
              </div>
              <p><strong>Fast Growth:</strong> Be part of an ever-growing, dynamic work environment.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Lightbulb size={18} className="text-sunstone-blue" />
              </div>
              <p><strong>Innovative Culture:</strong> Work with industry leaders on cutting-edge projects.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Scale size={18} className="text-sunstone-blue" />
              </div>
              <p><strong>Work-Life Balance:</strong> Flexible work hours, team-building activities, and vibrant workplace culture.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <GraduationCap size={18} className="text-sunstone-blue" />
              </div>
              <p><strong>Learning & Development:</strong> Get access to mentorship, training sessions, and career advancement opportunities.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg className="w-[18px] h-[18px] text-sunstone-blue" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 15a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm0-8a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0V9a2 2 0 0 0-2-2Zm-8 2a1 1 0 0 0 1 1h3.18a3 3 0 0 1-.18-1V8h-3a1 1 0 0 0-1 1Zm16-1h-3v1a3 3 0 0 1-.18 1H18a1 1 0 0 0 0-2Zm4 2.114A3.991 3.991 0 0 0 20 6h-5a5 5 0 0 0-10 0H0a4 4 0 0 0 0 8h2v.5A5.507 5.507 0 0 0 7.5 20h9a5.507 5.507 0 0 0 5.5-5.5v-.5h.5a4.5 4.5 0 0 0 0-9h-.5Zm-6 5.386A3.5 3.5 0 0 1 12.5 18h-1a3.5 3.5 0 0 1-3.5-3.5v-.5h8Z"/>
                </svg>
              </div>
              <p><strong>Health Insurance:</strong> Comprehensive medical insurance for you and your family.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg className="w-[18px] h-[18px] text-sunstone-blue" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 6a3.939 3.939 0 0 0-3.932 3.934V12H8v2h4c1.1 0 2-.9 2-2V9.934C14 7.764 13.144 6 12 6zm-1 7v2h2v-2h-2z"/>
                  <path d="M18.561 6h-2.132c-.186-1.183-.979-2.132-1.997-2.867C15.789 2.443 17.623 2 20.005 2c.002 0 .003-.1.005-.1a19.708 19.708 0 0 0-3.228-.789C15.563.089 14.297 0 12.969 0a15.815 15.815 0 0 0-4.962.803 9.9 9.9 0 0 0-3.05 1.5 4.46 4.46 0 0 0-1.578 1.7 5.152 5.152 0 0 0-.514 2.214c0 1.575.816 2.964 2.05 3.821.398.276.854.5 1.355.679V9.413c0-2.269 1.881-4.113 4.19-4.113 2.32 0 4.198 1.869 4.198 4.093v1.015a3.766 3.766 0 0 1-1.058.634 3.99 3.99 0 0 1-1.924.21A5.615 5.615 0 0 1 8.640 9.78a15.435 15.435 0 0 1-2.836-1.726A10.94 10.94 0 0 1 4.258 7h.594c.664 0 1.266-.257 1.755-.676.488-.42.795-.991.829-1.623a2.201 2.201 0 0 0-.15-.828 2.224 2.224 0 0 0-.478-.717 2.152 2.152 0 0 0-.73-.483 2.143 2.143 0 0 0-.97-.093 2.277 2.277 0 0 0-.862.268 2.188 2.188 0 0 0-.643.54 2.178 2.178 0 0 0-.394.739 2.209 2.209 0 0 0-.092.757l2.173.351L9.138 6.9c.538.591.983 1.255 1.312 1.973.33.719.553 1.485.654 2.284.627.38 1.313.617 2.039.732.735.117 1.483.08 2.204-.11a5.697 5.697 0 0 0 1.921-.862 5.769 5.769 0 0 0 1.44-1.5 5.865 5.865 0 0 0 .795-1.83c.043-.266.074-.531.091-.8h-.033z"/>
                </svg>
              </div>
              <p><strong>Employee Stock Options:</strong> Be a part-owner of the company with our ESOP program.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg className="w-[18px] h-[18px] text-sunstone-blue" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2a9.929 9.929 0 0 1 7.071 2.929c3.898 3.898 3.898 10.243 0 14.142A9.93 9.93 0 0 1 12 22a9.93 9.93 0 0 1-7.071-2.929c-3.898-3.899-3.898-10.243 0-14.142A9.929 9.929 0 0 1 12 2Zm0 2a8.039 8.039 0 0 0-5.657 2.343 8.3 8.3 0 0 0 0 11.314A7.978 7.978 0 0 0 12 20a7.978 7.978 0 0 0 5.657-2.343 8.3 8.3 0 0 0 0-11.314A8.039 8.039 0 0 0 12 4Zm3.536 4.293 1.414 1.414-5.657 5.657-3.536-3.536 1.414-1.414 2.122 2.122 4.243-4.243Z"/>
                </svg>
              </div>
              <p><strong>Referral Benefits:</strong> Attractive rewards for referring talented professionals.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg className="w-[18px] h-[18px] text-sunstone-blue" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm9 17v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1h2Z"/>
                </svg>
              </div>
              <p><strong>Flexible Work:</strong> Hybrid work model with the flexibility to work remotely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
