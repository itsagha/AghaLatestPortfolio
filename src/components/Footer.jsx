import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-darkBGSec text-gray-600 dark:text-gray-400 transition-colors duration-700">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-gray-200">Cooked in code by <span className="text-primary">Agha</span></span>.  
          All rights reserved.
        </p>
        
        {/* Right Section */}
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-right">
            100% bug-free (until you find one)
        </p>
      </div>
    </footer>
  );
};

export default Footer;