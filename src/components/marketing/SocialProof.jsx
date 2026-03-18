import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { VYRA_BRANDS } from '../../data/mock';

export default function SocialProof() {
  const { language } = useLanguage();
  // Double the array to ensure smooth infinite scrolling loop
  const brands = [...VYRA_BRANDS, ...VYRA_BRANDS];

  return (
    <section className="py-12 md:py-16 bg-vyra-black relative z-20 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-center text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/30 font-semibold">
          {language === 'en' ? 'OPERATING IN THE VISUAL CORE OF SCALING BRANDS' : 'OPERANDO EN EL CORE VISUAL DE MARCAS QUE ESCALAN'}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-edges">
        {/* We use a custom inline style for the infinite slide animation without needing tailwind.config mutation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 30s linear infinite;
          }
          .mask-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}} />
        
        <div className="flex animate-infinite-scroll w-max items-center">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center mx-12 md:mx-20 group">
              {/* Premium Typographic Logo Mock */}
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white/20 group-hover:text-white/60 transition-colors duration-700 cursor-default uppercase font-mono">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
