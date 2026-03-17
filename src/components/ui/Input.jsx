import React from 'react';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-[16px] border border-white/10 bg-slate-core/30 px-4 py-2 text-sm text-white shadow-sm ring-offset-vyra-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glow-cyan focus-visible:border-glow-cyan/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-white/20",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
