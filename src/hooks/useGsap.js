import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom hook matching the user's PRD for GSAP setup and cleanup
export function usePredefinedGsap(factory, dependencies = []) {
  // useLayoutEffect is generally better for animations to avoid flashing
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      factory();
    });
    
    return () => ctx.revert(); // Proper GSAP cleanup
  }, dependencies);
}
