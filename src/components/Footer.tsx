
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sunstone-blue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Sunstone</h3>
            <p className="text-gray-300 mb-4">
              Sunstone is transforming higher education in India with its unique pay-after-placement model
              and industry-aligned curriculum.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">Campus Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">MBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">MCA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">BBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sunstone-orange transition-colors">B.Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Plot No. 1, Sector 125,</p>
              <p>Noida, Uttar Pradesh 201303</p>
              <p className="mt-4">Email: info@sunstone.edu.in</p>
              <p>Phone: +91 1234567890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sunstone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
