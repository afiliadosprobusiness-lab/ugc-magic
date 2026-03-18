import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FinalCTA() {
  const { language } = useLanguage();

  return (
    <section className="py-32 bg-[#0B1020] relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8">
          {language === 'en' ? 'Stop improvising.' : 'Deja de improvisar.'}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-vyra-violet">
            {language === 'en' ? 'Systematize your production.' : 'Sistematize tu producción.'}
          </span>
        </h2>
        
        <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          {language === 'en' ? 'Turn references into a continuous workflow. Join top visual-first brands working with Vyra.' : 'Convierte referencias en un workflow continuo. Únete a las mejores marcas visual-first trabajando con Vyra.'}
        </p>
        
        <button className="h-16 px-10 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          {language === 'en' ? 'Book a demo today.' : 'Agenda una demo hoy.'}
        </button>
      </div>
    </section>
  );
}
