import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layers, Crosshair, Zap, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { language } = useLanguage();

  const steps = [
    {
      num: '01',
      title: 'The Blueprint',
      desc: 'Input reference visuals, target demographics, and brand guidelines.',
      icon: Layers,
      color: 'border-white/10'
    },
    {
      num: '02',
      title: 'The Logic',
      desc: 'Our engine matches verified creators and enforces visual consistency.',
      icon: Crosshair,
      color: 'border-glow-cyan/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
    },
    {
      num: '03',
      title: 'The Output',
      desc: 'Receive variations ready for deployment within 72 hours.',
      icon: Zap,
      color: 'border-vyra-violet/50 shadow-[0_0_30px_rgba(124,58,237,0.2)]'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#0B1020] relative border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {language === 'en' ? 'Structured creative production.' : 'Producción creativa estructurada.'}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {language === 'en' ? 'A systematic approach to generating high-converting visual assets at scale.' : 'Un enfoque sistemático para generar activos visuales de alta conversión a escala.'}
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-px bg-gradient-to-r from-white/10 via-glow-cyan/50 to-vyra-violet/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className={"glass-panel p-10 rounded-[32px] border h-full flex flex-col items-center text-center transition-all hover:-translate-y-2 " + step.color + " bg-[#0c101c]/80"}>
                  
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white/80" />
                  </div>
                  
                  <div className="text-4xl font-black text-white/5 mb-6 font-mono -mt-6">
                    {step.num}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {step.desc}
                  </p>

                </div>
                
                {/* Mobile connector arrow */}
                {idx < 2 && (
                  <div className="md:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-white/20 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
