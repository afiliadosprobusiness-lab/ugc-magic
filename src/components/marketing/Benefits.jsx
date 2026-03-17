import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BatteryCharging, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Benefits() {
  const { language } = useLanguage();

  const benefits = [
    {
      title: 'The End of Creative Burnout',
      desc: 'No more chasing creators. Scale your visual output without scaling your headcount.',
      icon: BatteryCharging,
      color: 'text-glow-cyan'
    },
    {
      title: 'Zero-friction Revisions',
      desc: 'Our engine guarantees alignment with your initial brief. Revisions drop to near zero.',
      icon: CheckCircle2,
      color: 'text-electric-blue'
    },
    {
      title: 'Brand Safety Guaranteed',
      desc: 'Every creator is vetted, and every asset strictly adheres to your brand guidelines.',
      icon: ShieldAlert,
      color: 'text-vyra-violet'
    }
  ];

  return (
    <section className="bg-vyra-black relative z-20 py-32 overflow-hidden border-b border-white/5">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-cyan/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-glow-cyan font-semibold mb-4">
              WHY VYRA
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {language === 'en' ? 'Built for scale.' : 'Construido para escalar.'}
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
