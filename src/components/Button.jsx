import React from 'react';

const Button = ({ children, onClick, variant, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl text-sm flex items-center gap-2 border ${variant} ${className} 
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
    >
      {children}
    </button>
  );
};

export default Button;