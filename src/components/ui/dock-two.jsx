import * as React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const DockIconButton = React.forwardRef(
  // eslint-disable-next-line no-unused-vars
  ({ icon: Icon, onClick, className, href }, ref) => {
    const Component = href ? "a" : "button";
    
    return (
      <Component
        ref={ref}
        onClick={onClick}
        className={cn(
          "relative group p-2.5 md:p-3 rounded-full md:rounded-lg",
          "hover:bg-white/10 transition-colors cursor-pointer",
          className
        )}
      >
        <Icon className="w-5 h-5 md:w-5 md:h-5 text-white/80 group-hover:text-glow-cyan transition-colors" />
      </Component>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("fixed top-4 md:top-6 left-0 w-full z-50 flex items-center justify-center pointer-events-none px-4", className)}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className={cn(
            "pointer-events-auto flex items-center justify-center gap-1.5 md:gap-2 p-2 rounded-full",
            "backdrop-blur-xl border border-white/10 shadow-2xl shadow-vyra-violet/20",
            "bg-[#06080F]/90",
            "hover:shadow-glow-cyan/20 hover:border-white/20 transition-all duration-300"
          )}
        >
          {items.map((item) => (
            <React.Fragment key={item.label}>
              <DockIconButton {...item} />
              {/* Optional separator after specific items if needed, handled by mapping logic generally, but we can keep it simple */}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock, DockIconButton };
