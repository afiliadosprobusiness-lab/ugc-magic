  import React from 'react';
import { MOCK_BRANDS } from '../../data/mock';

export default function SocialProof() {
  // Double the array to ensure smooth infinite scrolling loop
  const brands = [...MOCK_BRANDS, ...MOCK_BRANDS];

  return (
    <section className="py-16 md:py-24 bg-vyra-black relative z-20 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-center text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-white/40 font-semibold">
          TRUSTED BY VISUAL-FIRST BRANDS AROUND THE WORLD
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
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white/30 group-hover:text-white/70 transition-colors duration-500 cursor-default uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
