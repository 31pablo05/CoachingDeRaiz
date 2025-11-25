import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-secondary to-accent-lime text-white hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
