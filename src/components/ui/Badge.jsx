import React from "react"
import { cn } from "../../lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default:
      "border-transparent bg-vyra-black text-white shadow hover:bg-vyra-black/80",
    secondary:
      "border-transparent bg-slate-core text-white hover:bg-slate-core/80",
    glow:
      "border-transparent bg-glow-cyan/10 text-glow-cyan border border-glow-cyan/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]",
    violet:
      "border-transparent bg-vyra-violet/10 text-vyra-violet border border-vyra-violet/20",
    destructive:
      "border-transparent bg-red-500/10 text-red-500 border border-red-500/20",
    outline: "text-white border-white/20",
    glass: "bg-white/5 border border-white/10 text-white backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-vyra-violet",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
