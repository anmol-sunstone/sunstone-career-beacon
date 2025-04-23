
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue text-center mb-12">
          Location
          <div className="w-20 h-1 bg-sunstone-blue mx-auto mt-4"></div>
        </h2>
        
        {/* Map and Contact Info */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Google Map */}
          <div className="md:w-2/3 h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1145672512577!2d77.04198827566707!3d28.47015897583272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18efa878f2d3%3A0x12e12165962daa21!2sUnitech%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1719183565527!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunstone Office Location"
            ></iframe>
          </div>
          
          {/* Contact Information */}
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-sunstone-blue p-3 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-700">
                    9th floor, Tower B, Unitech Cyber Park,<br />
                    Sector - 39, Jharsa Road, Gurugram,<br />
                    Haryana - 122002
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-sunstone-blue p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-700">
                    General enquiries: +91 7065303030
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-sunstone-blue p-3 rounded-full">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-700">
                    Availability: (Mon-Fri) 9AM to 5PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
