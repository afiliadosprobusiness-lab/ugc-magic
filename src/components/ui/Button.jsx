import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

export const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  isLoading = false,
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vyra-violet disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:-translate-y-[1px]";
  
  const variants = {
    default: "bg-vyra-black text-white hover:bg-slate-core shadow-md hover:shadow-lg border border-white/5",
    primary: "bg-gradient-to-r from-glow-cyan via-electric-blue to-vyra-violet text-white shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-sm",
    glow: "bg-glow-cyan text-vyra-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] font-semibold",
    ghost: "hover:bg-white/5 text-white",
    link: "text-white underline-offset-4 hover:underline hover:text-glow-cyan",
  };

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg rounded-3xl",
    icon: "h-11 w-11",
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Comp>
  );
});

Button.displayName = "Button";
