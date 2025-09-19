import React from 'react';

const YourselfSection: React.FC = () => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-semibold text-[var(--nav-text)] leading-tight">
        Smart Quotation Engine <br /> for Manufacturing
      </h1>
      <p className="mt-4 text-2xl font-normal text-[var(--foreground)] max-w-3xl">
        Accelerate quoting, reduce errors, and scale operations — <br /> powered by Machine Learning and Dynamics 365 F&O.
      </p>
    </section>
  );
};

export default YourselfSection;