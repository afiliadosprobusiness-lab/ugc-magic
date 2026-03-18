import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { HeroSection } from '../ui/feature-carousel';

export default function Hero() {
  const { t } = useLanguage();

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", alt: "Beauty UGC reference" },
    { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800", alt: "Clean Luxury" },
    { src: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800", alt: "Skincare shot" },
    { src: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800", alt: "Aesthetic output" },
    { src: "https://images.unsplash.com/photo-1608248593842-8d7d91eeb095?auto=format&fit=crop&q=80&w=800", alt: "Product display" }
  ];

  const badgeProps = (
     <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-glow-cyan/20 bg-glow-cyan/5 backdrop-blur-md">
       <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-cyan opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-cyan"></span>
       </span>
       <p className="text-xs font-mono text-glow-cyan tracking-widest uppercase">
          {t('hero.badge')}
       </p>
    </div>
  );

  return (
    <HeroSection 
      badge={badgeProps}
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
      images={galleryImages}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4"> 
         <button className="h-14 px-8 rounded-full bg-gradient-to-r from-glow-cyan via-electric-blue to-vyra-violet text-white font-semibold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all hover:-translate-y-1">
           {t('hero.cta.primary')}
         </button> 
         <button className="h-14 px-8 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all">
           {t('hero.cta.secondary')}
         </button>
      </div>
      <p className="mt-8 font-mono text-[10px] text-white/40 uppercase tracking-widest text-center">
        {t('hero.microcopy')}
      </p>
    </HeroSection>
  );
}
