import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Check } from 'lucide-react';

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

  return (
    <section className="py-32 bg-vyra-black relative z-10 border-b border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-glow-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
            {language === 'en' ? 'UPGRADE YOUR WORKFLOW' : 'MEJORA TU FLUJO DE TRABAJO'}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {language === 'en' ? 'What Vyra Replaces' : 'Lo que Vyra Reemplaza'}
          </h3>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-2 border-b border-white/10 bg-black/40">
            <div className="p-6 md:p-8 text-center text-white/50 font-mono text-sm tracking-widest uppercase border-r border-white/10">
              {language === 'en' ? 'The Old Way' : 'La Vieja Forma'}
            </div>
            <div className="p-6 md:p-8 text-center text-glow-cyan font-mono text-sm tracking-widest uppercase">
              The Vyra Way
            </div>
          </div>
          
          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 hover:bg-white/[0.02] transition-colors">
                <div className="p-6 md:p-8 flex items-center gap-4 border-r border-white/10 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-white md:text-lg">{item.old}</span>
                </div>
                <div className="p-6 md:p-8 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-glow-cyan/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-glow-cyan" />
                  </div>
                  <span className="text-white md:text-lg font-medium">{item.vyra}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
