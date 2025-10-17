import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
