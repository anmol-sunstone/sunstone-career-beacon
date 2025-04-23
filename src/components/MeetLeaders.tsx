
import React from 'react';

const MeetLeaders = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-12">
          Meet Our Leaders
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At Sunstone, we bring together the best of learning and industry practices to ensure that 
              students are transformed into professionals who are noticed by employers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in an education that imparts the right knowledge while equipping you with the skills 
              and experiences necessary to thrive in real-world scenarios. Our courses integrate academic 
              excellence with practical skills to foster critical thinking, creativity, and adaptability—essential 
              traits to stand out and excel in the ever-changing global workforce.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Sunstone is transforming India's future workforce, one student at a time, and we proudly invite 
              you to take the first step towards your dream job with us!
            </p>

            <div className="flex flex-wrap justify-around gap-y-8">
              <img 
                src="/lovable-uploads/aac9a65f-7b44-43a2-a961-24637955e0e7.png" 
                alt="Founders' Signatures" 
                className="max-w-full"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
                alt="Sunstone Leadership" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetLeaders;
