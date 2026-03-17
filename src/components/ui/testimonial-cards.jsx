import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-full max-w-[350px] min-w-[300px] select-none place-content-center space-y-6 rounded-2xl border-2 border-white/5 bg-[#0f1423] p-6 shadow-2xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing border-vyra-violet/30" : "opacity-80"
      }`}
    >
      <img
        src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=150&h=150`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border-2 border-vyra-violet/30 bg-slate-core object-cover"
      />
      <span className="text-center text-lg italic text-gray-300">"{testimonial}"</span>
      <span className="text-center text-sm font-bold text-glow-cyan font-mono uppercase tracking-widest">{author}</span>
    </motion.div>
  );
};
