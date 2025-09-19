'use client';

import React from 'react';
import Button from '../Button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-7xl font-semibold text-[var(--nav-text)] leading-tight">
        Smart Quotation Engine <br /> for Manufacturing
      </h1>
      <p className="mt-4 px-4 md:px-0 text-xs md:text-2xl font-normal text-[var(--foreground)] max-w-3xl">
        Accelerate quoting, reduce errors, and scale operations — <br /> powered by Machine Learning and Dynamics 365 F&O.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button>Request a Demo</Button>
        <Button
          className="bg-transparent border-2 border-[var(--accent-bg)] text-[var(--accent-bg)] hover:bg-[var(--accent-bg)] hover:text-white"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;