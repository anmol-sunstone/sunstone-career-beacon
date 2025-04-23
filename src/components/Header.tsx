
import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="https://sunstone.in/_next/image?url=https%3A%2F%2Fcdn-eu.aglty.io%2Fsunstoneuniversity%2FAttachments%2FNewItems%2FGroup%20(1)%20(1)_20220516165429_0.png&w=256&q=75" 
          alt="Sunstone Logo" 
          className="h-16 md:h-20"
        />
      </div>

      {/* Banner */}
      <div className="hero-banner h-[80vh] relative flex items-center justify-center text-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(1, 47, 108, 0.85), rgba(1, 47, 108, 0.65)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">Build Your Career With Us</h1>
          <p className="text-xl md:text-2xl mb-8">Work with purpose, grow with passion</p>
          <a 
            href="#open-roles" 
            className="inline-block bg-white text-sunstone-blue font-semibold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-sunstone-orange hover:text-white transition-colors duration-300"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
