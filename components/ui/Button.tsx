
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  asLink = false,
  to = '#',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-cv-blue text-white hover:bg-cv-blue/90 focus:ring-cv-blue',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-cv-red text-white hover:bg-cv-red/90 focus:ring-cv-red',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-200 focus:ring-gray-400',
  };

  const sizeClasses = {
    sm: 'h-9 px-3',
    md: 'h-10 py-2 px-4',
    lg: 'h-11 px-8',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (asLink) {
    return <Link to={to} className={combinedClasses}>{children}</Link>;
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
