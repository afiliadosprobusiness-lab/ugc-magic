import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ className, variant = 'default', children, ...props }) => {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-vyra-violet focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-vyra-black text-white hover:bg-slate-core",
    secondary: "border-transparent bg-soft-gray text-vyra-black hover:bg-gray-300",
    outline: "text-vyra-black border-soft-gray",
    glow: "border-transparent bg-vyra-black text-glow-cyan shadow-[0_0_10px_rgba(34,211,238,0.2)]",
    success: "border-transparent bg-green-100 text-green-800",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
