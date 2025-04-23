
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="mb-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Sunstone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
