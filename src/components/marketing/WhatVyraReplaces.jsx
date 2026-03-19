import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Check } from 'lucide-react';
import { Component as LightningSplit } from '../ui/lightning-split';

export default function WhatVyraReplaces() {
  const { language } = useLanguage();

  const comparisons = [
    {
      old: language === 'en' ? 'Chaotic Slack/Email Strings' : 'Hilos Caóticos de Email/Slack',
      vyra: language === 'en' ? 'Structured Production Parameters' : 'Parámetros de Producción Estructurados',
    },
    {
      old: language === 'en' ? 'Messy Google Drive Folders' : 'Carpetas Desordenadas de Drive',
      vyra: language === 'en' ? 'Centralized Visual Vault' : 'Bóveda Visual Centralizada',
    },
    {
      old: language === 'en' ? 'Random Unpredictable Creators' : 'Creadores Aleatorios e Impredecibles',
      vyra: language === 'en' ? 'Vetted Network matched to Brand Tone' : 'Red Verificada adaptada al Tono de Marca',
    },
    {
      old: language === 'en' ? 'Endless Revision Cycles' : 'Ciclos Interminables de Revisión',
      vyra: language === 'en' ? 'Guaranteed Output Consistency' : 'Consistencia Garantizada',
    }
  ];

  const OldWayComponent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-24 bg-vyra-black relative">
       {/* Background chaos */}
       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
       
       <div className="max-w-xl mx-auto z-10 w-full mt-16 md:mt-0">
         <div className="mb-8 md:mb-16 text-center lg:text-left">
           <h2 className="text-xs md:text-sm lg:text-base font-mono uppercase tracking-[0.2em] text-red-400/50 font-semibold mb-2 md:mb-4">
             {language === 'en' ? 'THE OLD WAY' : 'LA VIEJA FORMA'}
           </h2>
           <h3 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-white/90">
             {language === 'en' ? 'Operating' : 'Operando'} <br /> <span className="text-red-400 line-through decoration-2 decoration-red-500/50">{language === 'en' ? 'Blind' : 'a Ciegas'}</span>
           </h3>
         </div>

         <div className="space-y-3 md:space-y-6">
           {comparisons.map((item, idx) => (
             <div key={idx} className="flex items-center gap-3 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/40 border border-red-500/10 backdrop-blur-sm">
               <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                 <X className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
               </div>
               <span className="text-white/60 text-sm md:text-lg lg:text-xl font-medium">{item.old}</span>
             </div>
           ))}
         </div>
       </div>
    </div>
  );

  const VyraWayComponent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-24 bg-[#0A0D18] relative">
       {/* Background glow */}
       <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan/10 blur-[150px] rounded-full pointer-events-none" />
       
       <div className="max-w-xl mx-auto z-10 w-full lg:pl-24 mt-16 md:mt-0">
         <div className="mb-8 md:mb-16 text-right">
           <h2 className="text-xs md:text-sm lg:text-base font-mono uppercase tracking-[0.2em] text-glow-cyan font-semibold mb-2 md:mb-4 inline-block bg-glow-cyan/10 px-3 md:px-4 py-1 md:py-2 rounded-full">
             THE VYRA WAY
           </h2>
           <h3 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-white mb-4 md:mb-6">
             {language === 'en' ? 'Flawless' : 'Ejecución'} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-vyra-violet">{language === 'en' ? 'Execution' : 'Perfecta'}</span>
           </h3>
         </div>

         <div className="space-y-3 md:space-y-6">
           {comparisons.map((item, idx) => (
             <div key={idx} className="flex flex-row-reverse items-center gap-3 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#111625]/80 border border-glow-cyan/20 backdrop-blur-md hover:border-glow-cyan/50 hover:bg-[#111625] transition-colors shadow-[0_0_30px_rgba(34,211,238,0.05)]">
               <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-glow-cyan/10 flex items-center justify-center shrink-0 border border-glow-cyan/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                 <Check className="w-4 h-4 md:w-6 md:h-6 text-glow-cyan" />
               </div>
               <span className="text-white text-sm md:text-lg lg:text-xl font-bold text-right">{item.vyra}</span>
             </div>
           ))}
         </div>
       </div>
    </div>
  );

  return (
    <section className="relative z-10 bg-vyra-black overflow-hidden border-b border-white/5">
       <LightningSplit 
         leftComponent={<OldWayComponent />} 
         rightComponent={<VyraWayComponent />} 
       />
    </section>
  );
}
