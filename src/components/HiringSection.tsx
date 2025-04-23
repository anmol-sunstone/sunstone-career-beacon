
import React from 'react';

const HiringSection = () => {
  return (
    <section id="open-roles" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue mb-4">Open Roles</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">Join us to reinvent the future of education</h3>
        
        <a 
          href="https://www.notion.so/sunstonecareers/Open-positions-at-Sunstone-1d5cc35f259e80f8bb03e79251ccc00a"
          target="_blank"
          rel="noopener noreferrer"
          className="sunstone-button inline-block bg-sunstone-blue text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
        >
          View Openings
        </a>
      </div>
    </section>
  );
};

export default HiringSection;
