import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
        {children}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionHeading;