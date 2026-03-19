import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BatteryCharging, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Benefits() {
  const { language } = useLanguage();

  const benefits = [
    {
      title: language === 'en' ? 'Multiply volume with control' : 'Multiplica volumen con control',
      desc: language === 'en' ? 'Stop chasing creators. Scale your visual variations month over month without scaling your internal team\'s workload.' : 'Deja de perseguir creadores. Escala tus variaciones visuales mes a mes sin escalar la carga operativa de tu equipo interno.',
      icon: BatteryCharging,
      color: 'text-glow-cyan'
    },
    {
      title: language === 'en' ? 'Zero brand deviation' : 'Cero desviación de marca',
      desc: language === 'en' ? 'We guarantee strict alignment with the initial brief. Iterations due to creative concept loss drop drastically.' : 'Garantizamos alineamiento estricto con el brief inicial. Las iteraciones por pérdida de concepto creativo se reducen drásticamente.',
      icon: CheckCircle2,
      color: 'text-electric-blue'
    },
    {
      title: language === 'en' ? 'Predictable operations' : 'Operativa predecible',
      desc: language === 'en' ? 'Vetted creators and closed workflows. Move from an artisanal creative process to a structured production chain.' : 'Creadores verificados y flujos de trabajo cerrados. Pasa de un proceso creativo artesanal a una cadena de producción estructurada.',
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
