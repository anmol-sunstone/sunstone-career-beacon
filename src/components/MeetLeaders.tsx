
import React from 'react';

const MeetLeaders = () => {
  const founders = [
    {
      name: "Ashish Munjal",
      role: "Co-founder & CEO",
      image: "/lovable-uploads/66ea4c75-b9d5-48e6-88d1-2f5d537b06cf.png"
    },
    {
      name: "Piyush Nangru",
      role: "Co-founder & COO",
      image: "/lovable-uploads/ff978e56-24c4-4978-bb50-c0219c00b4b7.png"
    },
    {
      name: "Ankur Jain",
      role: "Co-founder & CTO",
      image: "/lovable-uploads/1a088bf7-cb37-4c08-846f-c879f0173372.png"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-12">
          Meet Our Leaders
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              At Sunstone, we bring together the best of learning and industry practices to ensure that 
              students are transformed into professionals who are noticed by employers.
            </p>
            <p className="text-lg text-gray-700">
              We believe in an education that imparts the right knowledge while equipping you with the skills 
              and experiences necessary to thrive in real-world scenarios. Our courses integrate academic 
              excellence with practical skills to foster critical thinking, creativity, and adaptability—essential 
              traits to stand out and excel in the ever-changing global workforce.
            </p>
            <p className="text-lg text-gray-700">
              Sunstone is transforming India's future workforce, one student at a time, and we proudly invite 
              you to take the first step towards your dream job with us!
            </p>

            <div className="pt-6">
              <img 
                src="/lovable-uploads/aac9a65f-7b44-43a2-a961-24637955e0e7.png" 
                alt="Founders' Signatures" 
                className="max-w-full mx-auto"
              />
            </div>
          </div>
          
          <div className="grid gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-sunstone-blue">{founder.name}</h3>
                  <p className="text-gray-600">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetLeaders;
