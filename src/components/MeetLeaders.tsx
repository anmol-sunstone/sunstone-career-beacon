
import React from 'react';

const MeetLeaders = () => {
  const founders = [
    {
      name: "Ashish Munjal",
      role: "Co-founder & CEO",
      image: "/lovable-uploads/2e904963-79ce-4c13-9b81-8c21fd7e32a0.png"
    },
    {
      name: "Piyush Nangru",
      role: "Co-founder & COO",
      image: "/lovable-uploads/40907d23-dd16-470b-ac4e-5a32e1e75ca9.png"
    },
    {
      name: "Ankur Jain",
      role: "Co-founder & CBO",
      image: "/lovable-uploads/66dafd2f-dcbf-4701-a272-4139e19f4c7f.png"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-3">
            Meet Our Leaders
          </h2>
          <div className="w-20 h-1 bg-sunstone-orange mx-auto mb-12"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-5">
            <p className="text-lg text-gray-700">
              At Sunstone, we bring together the best of learning and industry practices to ensure that 
              students are transformed into professionals who are noticed by employers.
            </p>
            <p className="text-lg text-gray-700">
              We believe in an education that imparts the right knowledge while equipping you with the skills 
              and experiences necessary to thrive in real-world scenarios.
            </p>
            <p className="text-lg text-gray-700">
              Sunstone is transforming India's future workforce, one student at a time, and we proudly invite 
              you to take the first step towards your dream job with us!
            </p>
          </div>
          
          <div className="grid gap-4">
            {founders.map((founder, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-sunstone-orange"
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
