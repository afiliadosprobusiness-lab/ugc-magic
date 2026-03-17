import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { Upload, SlidersHorizontal, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const { t } = useLanguage();
  const flowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".flow-step", {
        scrollTrigger: {
          trigger: flowRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
      
      gsap.from(".flow-line", {
        scrollTrigger: {
          trigger: flowRef.current,
          start: "top 60%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power2.inOut"
      });
    }, flowRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      icon: <Upload className="w-6 h-6 text-vyra-violet" />,
      title: t('flow.step1.title'),
      desc: t('flow.step1.desc'),
    },
    {
      num: "02",
      icon: <SlidersHorizontal className="w-6 h-6 text-electric-blue" />,
      title: t('flow.step2.title'),
      desc: t('flow.step2.desc'),
    },
    {
      num: "03",
      icon: <Layers className="w-6 h-6 text-glow-cyan" />,
      title: t('flow.step3.title'),
      desc: t('flow.step3.desc'),
    }
  ];

  return (
    <section id="how-it-works" ref={flowRef} className="py-32 bg-ice-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-vyra-black">
            {t('flow.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="flow-line hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-soft-gray via-vyra-violet/30 to-soft-gray z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flow-step flex flex-col items-center text-center group">
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-white border border-soft-gray custom-shadow flex items-center justify-center mb-8 relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-vyra-violet/30">
                  <div className="absolute inset-2 rounded-full bg-ice-white flex items-center justify-center">
                    <span className="font-mono text-2xl font-semibold text-gray-400 group-hover:text-vyra-black transition-colors">{step.num}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-vyra-black text-white flex items-center justify-center shadow-md shadow-vyra-violet/20">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-vyra-black mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
