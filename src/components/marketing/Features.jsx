import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Terminal, CheckCircle2, Network, ArrowRight } from 'lucide-react';

export default function Features() {
  const { language } = useLanguage();
  
  // Typewriter effect state
  const [typedText, setTypedText] = useState('');
  const fullText = "const request = new Vyra.Production({\n  brand: 'Auren Skin',\n  format: '9:16 UGC Hook',\n  consistency: 0.98\n});\n\nawait request.deploy();";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => { i = 0; setTypedText(''); }, 3000); // Loop
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-32 bg-vyra-black text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-glow-cyan font-semibold mb-4">
            MICRO-INTERACTIONS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Production as Code.
          </h3>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Experience the precision of Vyra Studio's core mechanics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1. Telemetry / Typewriter */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col h-[400px] group border-t border-t-white/10 hover:border-glow-cyan/50 transition-colors">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-glow-cyan/10 flex items-center justify-center text-glow-cyan">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">1. The Setup</h4>
            </div>
            <p className="text-sm text-white/50 mb-8">Structured parameters replace chaotic email briefs.</p>
            
            <div className="flex-1 bg-[#0c101c] rounded-2xl p-6 font-mono text-[11px] md:text-xs leading-relaxed overflow-hidden border border-white/5 shadow-inner relative">
              <div className="absolute top-2 left-2 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="mt-4 text-glow-cyan opacity-90 whitespace-pre">
                {typedText}
                <span className="animate-pulse ml-1 inline-block w-1 h-3 bg-white" />
              </div>
            </div>
          </div>

          {/* 2. The Vault / Compare */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col h-[400px] group border-t border-t-white/10 hover:border-electric-blue/50 transition-colors">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">2. The Vault</h4>
            </div>
            <p className="text-sm text-white/50 mb-8">Visual proof of execution. Raw vs Final Cut.</p>
            
            <div className="flex-1 rounded-2xl overflow-hidden border border-white/5 relative group/compare cursor-ew-resize">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center" />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono border border-white/10 z-10">Raw Footage</div>
              
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center transition-all duration-500 w-[10%] group-hover/compare:w-[90%] border-r-2 border-electric-blue shadow-[5px_0_15px_rgba(0,0,0,0.5)] z-20">
                <div className="absolute top-2 left-2 bg-electric-blue/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono border border-white/10 text-white whitespace-nowrap">Vyra Cut</div>
              </div>
            </div>
          </div>

          {/* 3. The Network / Orbit */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col h-[400px] group border-t border-t-white/10 hover:border-vyra-violet/50 transition-colors">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vyra-violet/10 flex items-center justify-center text-vyra-violet">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">3. The Network</h4>
            </div>
            <p className="text-sm text-white/50 mb-8">Vetted creators mapped directly to your brand tone.</p>
            
            <div className="flex-1 bg-[#0c101c] rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes orbit { from { transform: rotate(0deg) translateX(70px) rotate(0deg); } to { transform: rotate(360deg) translateX(70px) rotate(-360deg); } }
                @keyframes orbit2 { from { transform: rotate(120deg) translateX(70px) rotate(-120deg); } to { transform: rotate(480deg) translateX(70px) rotate(-480deg); } }
                @keyframes orbit3 { from { transform: rotate(240deg) translateX(70px) rotate(-240deg); } to { transform: rotate(600deg) translateX(70px) rotate(-600deg); } }
                .orbit-1 { animation: orbit 8s linear infinite; }
                .orbit-2 { animation: orbit2 8s linear infinite; }
                .orbit-3 { animation: orbit3 8s linear infinite; }
              `}} />
              
              {/* Center */}
              <div className="w-12 h-12 rounded-xl bg-vyra-black border border-white/10 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <span className="font-bold text-white">V</span>
              </div>
              
              {/* Orbits */}
              <div className="absolute w-[140px] h-[140px] rounded-full border border-dashed border-white/10 z-10" />
              
              {/* Nodes */}
              <div className="absolute orbit-1 z-30">
                <img src="https://i.pravatar.cc/150?u=a1" className="w-8 h-8 rounded-full border-2 border-vyra-violet grayscale hover:grayscale-0 transition-all" alt="Creator 1" />
              </div>
              <div className="absolute orbit-2 z-30">
                <img src="https://i.pravatar.cc/150?u=a2" className="w-8 h-8 rounded-full border-2 border-electric-blue grayscale hover:grayscale-0 transition-all" alt="Creator 2" />
              </div>
              <div className="absolute orbit-3 z-30">
                <img src="https://i.pravatar.cc/150?u=a3" className="w-8 h-8 rounded-full border-2 border-glow-cyan grayscale hover:grayscale-0 transition-all" alt="Creator 3" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
