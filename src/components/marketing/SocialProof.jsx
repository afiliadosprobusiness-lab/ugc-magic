import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { XCard } from '../ui/x-gradient-card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".x-card-stagger", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      link: "#",
      authorName: "Sarah M.",
      authorHandle: "sarah_mktg",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      content: [
        "Vyra completely changed how our agency produces UGC at scale.",
        "Instead of chaotic Slack threads, changing briefs, and missing formats... everything is structured. We get exactly what we need, the first time. 🎬✨"
      ],
      isVerified: true,
      timestamp: "Mar 15, 2026",
    },
    {
      link: "#",
      authorName: "David L.",
      authorHandle: "david_commerce",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      content: [
        "Just shipped 30 new variations for our Q2 campaign.",
        "The creative consistency across different creator formats is insane. It's like having an operating system for brand visual output. 🔥"
      ],
      isVerified: true,
      timestamp: "Mar 12, 2026",
      reply: {
        authorName: "Vyra Team",
        authorHandle: "vyra_studio",
        authorImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150&h=150",
        content: "Love to see it! Those variations are going to crush it.",
        isVerified: true,
        timestamp: "Mar 12"
      }
    },
    {
      link: "#",
      authorName: "Aurea Beauty",
      authorHandle: "aureabeauty_co",
      authorImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=150&h=150",
      content: [
        "Found the perfect workflow for our jewelry brand.",
        "Macro shots logic and premium visual tone implemented via @vyra_studio. Our revision rate dropped to 0%."
      ],
      isVerified: true,
      timestamp: "Mar 08, 2026",
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0f1d] relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-white/40 font-semibold max-w-2xl mx-auto">
            DISEÑADO PARA MARCAS QUE DEPENDEN DE LA CONSISTENCIA VISUAL
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((tItem, idx) => (
             <div key={idx} className="x-card-stagger flex-1 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] flex justify-center w-full">
               <div className="w-full max-w-[450px]">
                 <XCard {...tItem} />
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
