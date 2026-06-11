import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className = '', hover = false, glass = false, ...props }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
        glass && "bg-white/60 backdrop-blur-xl border-white/50 shadow-glass",
        hover && "hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 transition-all duration-400 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={cn("p-6 border-b border-gray-50/80 bg-gray-50/30", className)}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={cn("p-6", className)}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={cn("p-6 bg-gray-50/50 rounded-b-2xl border-t border-gray-50/80", className)}>
    {children}
  </div>
);

export default Card;
