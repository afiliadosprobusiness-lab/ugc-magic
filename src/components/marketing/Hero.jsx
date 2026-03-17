import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AntiGravityCanvas } from '../ui/particle-effect-for-hero';
import { LiquidButton } from '../ui/liquid-glass-button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center pt-32 pb-20 overflow-hidden bg-vyra-black z-0">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-vyra-violet/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 1. Hero Copy & Actions */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="mb-6 flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-glow-cyan/20 bg-glow-cyan/5 backdrop-blur-md">
           <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-cyan"></span>
           </span>
           <p className="text-xs font-mono text-glow-cyan tracking-widest uppercase">
              {t('hero.badge')}
           </p>
        </div>

        <h1 className="mb-6 text-white text-5xl md:text-7xl font-extrabold tracking-tight text-balance leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-balance mb-10">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"> 
           <button className="h-14 px-8 rounded-full bg-gradient-to-r from-glow-cyan via-electric-blue to-vyra-violet text-white font-semibold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all hover:-translate-y-1">
             {t('hero.cta.primary')}
           </button> 
           <button className="h-14 px-8 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all">
             {t('hero.cta.secondary')}
           </button>
        </div>

        <p className="mt-8 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          {t('hero.microcopy')}
        </p>
      </div>

      {/* 2. Abstract Dashboard Mockup (Visual Demo) */}
      <div className="relative w-full max-w-6xl mx-auto mt-20 px-6 z-10 perspective-[2000px]">
        {/* Glow underneath the mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-glow-cyan/10 blur-[100px] pointer-events-none" />
        
        <div className="relative w-full bg-[#0B1020]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl overflow-hidden transform-gpu rotate-x-[2deg] hover:rotate-x-0 transition-transform duration-700 ease-out">
          
          {/* Mac window controls */}
          <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="ml-4 flex-1 flex justify-center">
              <div className="h-6 w-64 bg-black/40 rounded-full border border-white/5 flex items-center justify-center">
                <span className="text-[10px] font-mono text-white/30">vyra.studio/app/requests/new</span>
              </div>
            </div>
          </div>

          {/* Inner Dashboard View */}
          <div className="p-8 grid grid-cols-12 gap-6 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
            
            {/* Left Col: Workflow Steps */}
            <div className="col-span-3 space-y-3">
              <div className="glass-panel p-4 rounded-2xl border-l-[3px] border-l-glow-cyan">
                <div className="text-xs font-mono text-glow-cyan mb-1">STEP 1</div>
                <div className="font-medium text-white text-sm">Reference Input</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl opacity-50">
                <div className="text-xs font-mono text-white/40 mb-1">STEP 2</div>
                <div className="font-medium text-white/70 text-sm">Creative Direction</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl opacity-50">
                <div className="text-xs font-mono text-white/40 mb-1">STEP 3</div>
                <div className="font-medium text-white/70 text-sm">Creator Consistency</div>
              </div>
            </div>

            {/* Middle Col: Reference Cards & Input */}
            <div className="col-span-6 space-y-4">
              <div className="glass-panel-light !bg-white/5 !border border-white/10 rounded-2xl p-6 h-64 border-dashed flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-vyra-violet/20 flex items-center justify-center mb-4">
                  <span className="text-vyra-violet">↑</span>
                </div>
                <h3 className="text-white font-medium mb-1">Drop references here</h3>
                <p className="text-white/40 text-xs">Auren Skin campaign references (mp4, png)</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-[4/5] rounded-xl bg-slate-core border border-white/5 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover opacity-60" alt="ref" />
                </div>
                <div className="aspect-[4/5] rounded-xl bg-slate-core border border-white/5 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover opacity-60" alt="ref" />
                </div>
                <div className="aspect-[4/5] rounded-xl glass-panel flex items-center justify-center cursor-pointer">
                  <span className="text-white/30 text-2xl">+</span>
                </div>
              </div>
            </div>

            {/* Right Col: Direction & Creators */}
            <div className="col-span-3 space-y-4">
              <div className="glass-panel p-5 rounded-2xl">
                <div className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">Direction Tags</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-electric-blue/20 text-electric-blue text-[10px] font-mono border border-electric-blue/30">Clean Luxury</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-white/60 text-[10px] font-mono border border-white/10">Beauty UGC</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-white/60 text-[10px] font-mono border border-white/10">+ Edit</span>
                </div>
              </div>
              
              <div className="glass-panel p-5 rounded-2xl">
                <div className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">Creator Match</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
                    <img src="https://i.pravatar.cc/150?u=mia" className="w-8 h-8 rounded-full grayscale" alt="Mia" />
                    <div>
                      <div className="text-white text-xs font-medium">Mia</div>
                      <div className="text-glow-cyan text-[10px]">98% Consistency</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl opacity-50">
                    <img src="https://i.pravatar.cc/150?u=lena" className="w-8 h-8 rounded-full grayscale" alt="Lena" />
                    <div>
                      <div className="text-white text-xs font-medium">Lena</div>
                      <div className="text-white/50 text-[10px]">95% Consistency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Gradient overlay */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-vyra-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
