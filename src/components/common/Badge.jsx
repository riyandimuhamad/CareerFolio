import React from 'react';

const Badge = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    gray: 'bg-gray-100 text-gray-800',
    health: 'bg-health-teal/10 text-health-teal',
    agro: 'bg-agro-green/10 text-agro-green',
    tech: 'bg-tech-blue/10 text-tech-blue',
    law: 'bg-law-navy/10 text-law-navy',
    biz: 'bg-biz-blue/10 text-biz-blue',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
