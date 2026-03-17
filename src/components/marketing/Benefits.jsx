import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ParallaxScrollSecond } from '../ui/parallax-scroll';

export default function Benefits() {
  const { t } = useLanguage();

  const images = [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512496015851-a908f888f9ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1579724131652-9d338cedf135?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="bg-vyra-black relative z-20 py-32 overflow-hidden border-t border-white/5">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric-blue/5 blur-[120px] rounded-[100%] pointer-events-none" />

       <div className="text-center mb-16 max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              {t('benefits.title')}
          </h2>
          <h3 className="text-lg md:text-2xl font-medium tracking-tight text-white/50 text-balance">
              {t('cases.title')}
          </h3>
       </div>

       <div className="w-full relative z-10 flex justify-center">
          <ParallaxScrollSecond images={images} />
       </div>
    </section>
  );
}
