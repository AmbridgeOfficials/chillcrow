import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white hover:text-amber-400 transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default Link;