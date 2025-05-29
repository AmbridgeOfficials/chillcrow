import React, { ReactNode } from 'react';

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
        hover:bg-amber-600 transition-colors duration-300 group"
      aria-label={label}
    >
      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
        {icon}
      </span>
    </a>
  );
};

export default SocialButton;