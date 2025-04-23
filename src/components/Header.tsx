
import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      {/* Banner */}
      <div className="hero-banner h-[85vh] relative flex items-center justify-center text-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(1, 47, 108, 0.90), rgba(1, 47, 108, 0.80)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight bg-clip-text">
            Build Your Career <span className="text-sunstone-orange">With Us</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-gray-100">Work with purpose, grow with passion</p>
          <a 
            href="#open-roles" 
            className="inline-block bg-sunstone-orange text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
