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
      className={`bg-[var(--accent-bg)] text-white px-4 py-2 rounded-[8px] font-normal ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {children}
    </button>
  );
};

export default Button;