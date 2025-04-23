
import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      {/* Banner */}
      <div className="hero-banner h-[85vh] relative flex items-center justify-center text-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(1, 47, 108, 0.85), rgba(1, 47, 108, 0.85)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="container max-w-5xl mx-auto px-6">
          <div className="z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Build Your Career <span className="text-sunstone-orange">With Us</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto">Work with purpose, grow with passion at Sunstone</p>
            <a 
              href="#open-roles" 
              className="inline-block bg-sunstone-orange text-white font-semibold px-8 py-3 rounded-md text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
