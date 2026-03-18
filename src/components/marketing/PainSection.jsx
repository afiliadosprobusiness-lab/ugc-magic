import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Check, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function PainSection() {
  const { language } = useLanguage();

  return (
    <section id="system" className="py-32 bg-[#050812] relative z-10 border-b border-white/5 overflow-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24 relative">
          <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-glow-cyan font-semibold mb-6 inline-block bg-glow-cyan/5 px-4 py-1.5 rounded-full border border-glow-cyan/10">
            {language === 'en' ? 'CREATIVE OPERATION' : 'OPERACIÓN CREATIVA'}
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            {language === 'en' ? 'Consistency cannot be' : 'La consistencia no se'} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-vyra-violet italic font-medium">
              {language === 'en' ? 'improvised.' : 'improvisa.'}
            </span>
          </h3>
          <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {language === 'en' 
              ? 'Vyra turns loose references and ambiguous briefs into a clear system to produce content with direction, consistency, and speed.' 
              : 'Vyra convierte referencias sueltas y briefs ambiguos en un sistema claro para producir contenido con dirección, consistencia y velocidad.'}
          </p>
        </div>

        {/* CONTRAST GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0A0D18] relative">
          
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          {/* LEFT: SIN ESTRUCTURA */}
          <div className="p-10 md:p-14 relative overflow-hidden group border-b md:border-b-0 border-white/5 bg-gradient-to-b from-black/40 to-transparent">
            {/* Background Blur Chaos */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-red-500/5 blur-[100px] rounded-full opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <X className="w-5 h-5 text-red-500/70" />
                </div>
                <h4 className="text-2xl font-bold text-white/50">
                  {language === 'en' ? 'Without structure' : 'Sin estructura'}
                </h4>
              </div>
              <p className="text-white/30 text-sm mb-12">
                {language === 'en' ? 'The chaos of operating blind, guessing outcomes.' : 'El caos de operar a ciegas, adivinando resultados.'}
              </p>

              <div className="space-y-6 flex-grow mb-16">
                {[
                  language === 'en' ? 'Briefs that change constantly.' : 'Briefs que cambian constantemente.',
                  language === 'en' ? 'References that are routinely ignored.' : 'Referencias que no se respetan.',
                  language === 'en' ? 'Creators interpreting each piece differently.' : 'Creadores interpretando distinto cada pieza.',
                  language === 'en' ? 'More revisions, less visual consistency.' : 'Más revisiones, menos consistencia.'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 opacity-40 transition-opacity duration-300 group-hover:opacity-60 items-start">
                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0" />
                    <span className="text-base text-white/70 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              {/* Visual element Bottom Left */}
              <div className="h-40 relative opacity-40 blur-[1px] grayscale transform transition-all duration-700 group-hover:blur-0 group-hover:grayscale-[50%] mt-auto">
                 <div className="absolute top-4 left-0 right-12 bg-white/5 border border-white/10 p-4 rounded-xl transform -rotate-2 text-sm text-white/40 shadow-xl backdrop-blur-sm shadow-black/50">
                   V2_final_FINAL_ahora_si.mp4
                 </div>
                 <div className="absolute top-20 left-12 right-0 bg-red-500/5 border border-red-500/20 p-4 rounded-xl transform rotate-3 text-sm text-red-400/80 shadow-2xl z-10 backdrop-blur-md shadow-black/80">
                   "El plano es muy abierto y el tono no encaja con la marca..."
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CON VYRA */}
          <div className="p-10 md:p-14 relative overflow-hidden group bg-gradient-to-br from-[#0f1423] to-transparent">
            {/* Background Blue Glow */}
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-glow-cyan/10 blur-[100px] rounded-full opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-glow-cyan/10 flex items-center justify-center border border-glow-cyan/20">
                  <Check className="w-5 h-5 text-glow-cyan" />
                </div>
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {language === 'en' ? 'With Vyra' : 'Con Vyra'}
                </h4>
              </div>
              <p className="text-glow-cyan/60 text-sm mb-12">
                {language === 'en' ? 'The absolute standard for visual production.' : 'El estándar absoluto para la producción visual.'}
              </p>

              <div className="space-y-6 flex-grow mb-16">
                {[
                  language === 'en' ? 'References locked from the start.' : 'Referencias organizadas desde el inicio.',
                  language === 'en' ? 'Clear, repeatable direction logic.' : 'Dirección clara y repetible.',
                  language === 'en' ? 'Output aligned 100% with the brand.' : 'Output alineado 100% con la marca.',
                  language === 'en' ? 'Faster, highly consistent production.' : 'Producción más rápida y consistente.'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-glow-cyan shrink-0" />
                    <span className="text-base text-white/90 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              {/* Visual element Bottom Right */}
              <div className="h-40 relative transform transition-all duration-700 group-hover:-translate-y-2 mt-auto">
                 <div className="absolute top-8 left-4 right-4 bg-vyra-black/80 backdrop-blur-md border border-glow-cyan/30 p-5 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-between z-20">
                   <div className="flex flex-col gap-2">
                     <div className="w-32 h-1.5 bg-glow-cyan/60 rounded-full" />
                     <div className="w-16 h-1.5 bg-white/20 rounded-full" />
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-glow-cyan font-mono bg-glow-cyan/10 px-3 py-1 rounded-full border border-glow-cyan/20">
                       <div className="w-1.5 h-1.5 bg-glow-cyan rounded-full animate-pulse" />
                       {language === 'en' ? 'DEPLOYED' : 'DESPLEGADO'}
                     </span>
                   </div>
                 </div>
                 
                 <div className="absolute top-0 left-8 right-8 bg-[#0a0f1d] border border-white/5 p-5 rounded-2xl shadow-xl z-10 -translate-y-2 scale-95 opacity-50 flex justify-between items-center transition-transform duration-500 group-hover:-translate-y-4">
                   <div className="w-24 h-1 bg-white/10 rounded-full" />
                   <span className="text-[10px] text-white/20 font-mono">ASSET_104</span>
                 </div>
                 
                 <div className="absolute top-16 left-10 right-10 bg-[#070a14] border border-white/5 p-5 rounded-2xl shadow-xl z-0 translate-y-2 scale-90 opacity-20">
                   <div className="w-full h-1 bg-white/10 rounded-full" />
                 </div>
              </div>
            </div>
          </div>

        </div>

        {/* MICROCOPY FINAL */}
        <div className="text-center mt-20 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-medium text-white/40">
          <span>{language === 'en' ? 'More clarity in requests.' : 'Más claridad al pedir.'}</span>
          <ArrowRight className="w-4 h-4 text-glow-cyan/50 hidden md:block" />
          <span className="text-white/90">{language === 'en' ? 'More consistency in production.' : 'Más consistencia al producir.'}</span>
        </div>

      </div>
    </section>
  );
}
