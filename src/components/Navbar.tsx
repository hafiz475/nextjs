'use client';

import React, { useState } from 'react';
import Button from './Button';
import { LogoIcon } from './icons/quotemindAI'; // Assuming LogoIcon is defined

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-0 md:px-12"> {/* 0px mobile, 48px desktop */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <LogoIcon className="h-10 w-auto" />
        </div>

        {/* Navigation Links and Login Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] font-normal"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] font-normal"
          >
            Our Services
          </a>
          <a
            href="#products"
            className="text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] font-normal"
          >
            Our Products
          </a>
          <a
            href="#company"
            className="text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] font-normal"
          >
            Company
          </a>
          <Button>Login</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-0"> {/* Explicitly no padding */}
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] py-1 px-2 font-normal"
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] py-1 px-2 font-normal"
            >
              Our Services
            </a>
            <a
              href="#products"
              className="block text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] py-1 px-2 font-normal"
            >
              Our Products
            </a>
            <a
              href="#company"
              className="block text-[16px] leading-[24px] text-[var(--nav-text)] hover:text-[var(--accent-bg)] py-1 px-2 font-normal"
            >
              Company
            </a>
            <div className="px-3">
              <Button className="w-full mt-2">Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;