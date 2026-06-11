import React from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ children, variant = 'gray', className = '', glow = false }) => {
  const variants = {
    gray: 'bg-gray-100/80 text-gray-700 border-gray-200',
    health: 'bg-health-teal/10 text-health-teal border-health-teal/20',
    agro: 'bg-agro-green/10 text-agro-green border-agro-green/20',
    tech: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20',
    law: 'bg-law-navy/10 text-law-navy border-law-navy/20',
    biz: 'bg-biz-blue/10 text-biz-blue border-biz-blue/20',
  };

  const glows = {
    gray: 'shadow-[0_0_10px_rgba(156,163,175,0.3)]',
    health: 'shadow-[0_0_10px_rgba(20,184,166,0.3)]',
    agro: 'shadow-[0_0_10px_rgba(16,185,129,0.3)]',
    tech: 'shadow-[0_0_10px_rgba(59,130,246,0.3)]',
    law: 'shadow-[0_0_10px_rgba(0,31,63,0.3)]',
    biz: 'shadow-[0_0_10px_rgba(30,64,175,0.3)]',
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold border backdrop-blur-sm",
        variants[variant],
        glow && glows[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
