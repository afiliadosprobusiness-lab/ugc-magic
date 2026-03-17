import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PainSection() {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.split-card', 
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-vyra-black relative z-10 border-b border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {language === 'en' ? 'The difference is structure.' : 'La diferencia es la estructura.'}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {language === 'en' ? 'Stop relying on chaotic threads and messy shared folders.' : 'Deja de depender de hilos caóticos y carpetas compartidas desordenadas.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* The Old Way */}
          <div className="split-card bg-[#111] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full transition-opacity group-hover:opacity-100 opacity-50" />
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white/50 mb-2 font-mono uppercase tracking-widest">The Old Way</h3>
              <p className="text-white/40">Chaotic shoots, ignored briefs, and burned budgets.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl transform -rotate-1 relative left-4 opacity-70 blur-[1px]">
                <div className="text-[10px] text-white/40 mb-1">Email Thread: 45 messages</div>
                <div className="text-sm text-red-400 font-medium">"Wait, which format did we need?"</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl transform rotate-2">
                <div className="text-[10px] text-red-500/60 mb-1 flex justify-between">
                  <span>Google Drive Link</span>
                  <span>Expired</span>
                </div>
                <div className="text-sm text-white/80 font-medium line-through">Final_V3_FINAL_Actually.mp4</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl transform -rotate-2 relative -left-4 opacity-50 blur-[2px]">
                <div className="text-sm text-white/60 font-medium">Concept drift detected: -40% ROAS</div>
              </div>
            </div>
          </div>

          {/* The Vyra Way */}
          <div className="split-card bg-slate-core/30 border border-white/10 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-glow-cyan/10 blur-[80px] rounded-full transition-opacity group-hover:opacity-100 opacity-50" />
            
            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-electric-blue mb-2 font-mono uppercase tracking-widest">The Vyra Way</h3>
              <p className="text-white/80">The Creative Operating System.</p>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="glass-panel p-4 rounded-xl border-l-[3px] border-l-glow-cyan shadow-lg transform transition-transform group-hover:translate-x-2">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-mono text-glow-cyan">REQ-001</div>
                  <span className="px-2 py-0.5 rounded bg-glow-cyan/20 text-glow-cyan text-[10px] font-mono border border-glow-cyan/30">In Production</span>
                </div>
                <div className="text-sm text-white font-medium mb-2">Summer Glow Serum Launch</div>
                <div className="flex gap-2">
                  <span className="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded">2 Visual References</span>
                  <span className="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded">Creator Matched (98%)</span>
                </div>
              </div>
              
              <div className="glass-panel p-4 rounded-xl border-l-[3px] border-l-vyra-violet shadow-lg transform transition-transform group-hover:translate-x-2 delay-75">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-mono text-vyra-violet">ASSET-104</div>
                  <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-mono border border-green-500/30">Delivered</span>
                </div>
                <div className="text-sm text-white font-medium">Format: 9:16 TikTok Hook Variation</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
