import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--accent-bg)] text-white px-4 py-2 rounded-[8px] font-normal text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {children}
    </button>
  );
};

export default Button;