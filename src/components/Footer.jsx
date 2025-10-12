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

        {/* Middle Section (optional social links) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rsydagha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/rsydagha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fa-brands fa-linkedin text-lg"></i>
          </a>
          <a
            href="https://instagram.com/rsydagha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <i className="fa-brands fa-instagram text-lg"></i>
          </a>
        </div>

        {/* Right Section */}
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-right">
            100% bug-free (until you find one)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
