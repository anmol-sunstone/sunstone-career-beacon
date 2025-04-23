
import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      {/* Banner with reduced height */}
      <div className="hero-banner h-[65vh] relative flex items-center justify-center text-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(1, 47, 108, 0.85), rgba(1, 47, 108, 0.85)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="container max-w-5xl mx-auto px-6 relative">
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Build Your Career <span className="text-[#c88c32]">With Us</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">Work with purpose, grow with passion</p>
            <a 
              href="#open-roles" 
              className="inline-block bg-[#c88c32] text-white font-semibold px-8 py-3 rounded-md text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
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
