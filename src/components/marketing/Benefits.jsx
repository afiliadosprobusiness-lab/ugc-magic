import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BatteryCharging, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Benefits() {
  const { language } = useLanguage();

  const benefits = [
    {
      title: language === 'en' ? 'Multiply volume with precision' : 'Multiplica volumen con precisión',
      desc: language === 'en' ? 'Scale your visual production without scaling your team\'s workload or tracking down creators.' : 'Escala tu producción visual sin aumentar la carga operativa de tu equipo ni perseguir creadores.',
      icon: BatteryCharging,
      color: 'text-glow-cyan'
    },
    {
      title: language === 'en' ? 'Brand consistency' : 'Consistencia inalterable',
      desc: language === 'en' ? 'We secure alignment with the initial brief. Manual corrections due to creative concept loss drop drastically.' : 'Cuidamos el alineamiento con el brief inicial. Las correcciones manuales por pérdida de visión se reducen drásticamente.',
      icon: CheckCircle2,
      color: 'text-electric-blue'
    },
    {
      title: language === 'en' ? 'Structured operations' : 'Operativa clara y estructurada',
      desc: language === 'en' ? 'Elevate from an artisanal creative process to a reliable production protocol.' : 'Pasa de un proceso creativo disperso y artesanal a un protocolo de producción confiable.',
      icon: ShieldAlert,
      color: 'text-vyra-violet'
    }
  ];

  return (
    <section id="benefits" className="bg-vyra-black relative z-20 py-32 overflow-hidden border-b border-white/5">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-cyan/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-glow-cyan font-semibold mb-4">
              {language === 'en' ? 'WHY VYRA?' : '¿Por qué Vyra?'}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {language === 'en' ? 'Scale volume. Keep identity.' : 'Escala volumen. Conserva identidad.'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-[24px] border border-white/10 hover:border-white/20 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className={"w-6 h-6 " + benefit.color} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}
