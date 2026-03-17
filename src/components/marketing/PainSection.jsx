import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeaturesSectionWithHoverEffects } from '../ui/feature-section-with-hover-effects';
import gsap from 'gsap';

export default function PainSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pain-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pain-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
              {t('pain.title')}
            </h2>
          </div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  );
}
