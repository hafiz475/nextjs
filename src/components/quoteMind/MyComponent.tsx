// app/components/MyComponent.tsx
'use client'; // Optional, add if using client-side features

import React from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div className="bg-[var(--primary-bg)] text-white p-5 rounded-lg">
      <h1 className="text-2xl font-semibold">Hello, {name}!</h1>
      <div className="bg-[var(--secondary-bg)] p-4 mt-2.5 text-black">
        This is a card with secondary background.
      </div>
      <button
        className="bg-[var(--accent-bg)] text-white px-5 py-2.5 mt-2.5 rounded"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--dark-bg)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-bg)')}
      >
        Click Me! (Accent background)
      </button>
      <div className="bg-[var(--success-bg)] p-4 mt-2.5 text-white">
        Success message background.
      </div>
    </div>
  );
};

export default MyComponent;