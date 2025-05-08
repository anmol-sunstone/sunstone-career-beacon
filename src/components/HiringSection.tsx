
import React from 'react';
import { Button } from '@/components/ui/button';

const HiringSection = () => {
  return (
    <section id="open-roles" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-sunstone-blue mb-3">Open Roles</h2>
        <div className="w-20 h-1 bg-sunstone-orange mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 mb-10">Join us to reinvent the future of education</p>
        
        <a 
          href="https://www.notion.so/sunstonecareers/Open-positions-at-Sunstone-1d5cc35f259e80f8bb03e79251ccc00a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sunstone-orange hover:bg-white text-white hover:text-sunstone-blue font-semibold px-8 py-3 rounded-md text-lg shadow-md transition-all duration-300 border border-sunstone-orange"
        >
          View All Openings
        </a>
      </div>
    </section>
  );
};

export default HiringSection;
