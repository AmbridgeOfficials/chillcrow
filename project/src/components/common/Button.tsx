import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  icon,
  primary = false
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full
    font-medium transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50
  `;
  
  const styles = primary
    ? `${baseClasses} bg-amber-500 hover:bg-amber-600 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20`
    : `${baseClasses} bg-gray-800/70 hover:bg-gray-700/70 text-white border border-amber-500/30 hover:border-amber-500/60`;
  
  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
};

export default Button;