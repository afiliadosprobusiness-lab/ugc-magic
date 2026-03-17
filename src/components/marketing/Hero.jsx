import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AntiGravityCanvas } from '../ui/particle-effect-for-hero';
import { LiquidButton } from '../ui/liquid-glass-button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Shader */}
      <AntiGravityCanvas />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="mb-8 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
           <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-cyan"></span>
           </span>
           <p className="text-xs font-mono text-glow-cyan tracking-widest uppercase">
              {t('hero.badge', { defaultValue: "Enterprise Grade Platform" })}
           </p>
        </div>

        {/* Hero Copy */}
        <main className="relative py-10 w-full text-center">
          <h1 className="mb-6 text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-balance">
            {t('hero.title', { defaultValue: "The OS for Visual Output" })}
          </h1>
          <p className="text-white/70 px-6 text-center text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-balance">
            {t('hero.subtitle', { defaultValue: "Stop chasing creators. Build a structured pipeline where visual standards and brand rules are guaranteed by design." })}
          </p>
          
          {/* Action Area */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"> 
             <LiquidButton 
              className="text-white border-none" 
              size="xl"
              variant="default"
             >
               {t('hero.cta.primary', { defaultValue: "Automate your production" })}
             </LiquidButton> 
             <button className="h-12 px-8 rounded-md bg-transparent text-white font-medium border-2 border-white/20 hover:bg-white/10 transition-colors">
               {t('hero.cta.secondary', { defaultValue: "Book Demo" })}
             </button>
          </div>

          <p className="mt-12 font-mono text-xs text-white/50 uppercase tracking-widest">
            {t('pain.new.p2', { defaultValue: "Structured Request" })} • {t('pain.new.p3', { defaultValue: "Fast Turnaround" })} • {t('benefits.b2.title', { defaultValue: "Better Workflows" })}
          </p>
        </main>
      </div>
      
      {/* Bottom Gradient overlay for smooth transition to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#080b14] to-transparent pointer-events-none z-10" />
    </section>
  );
}
