import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LayoutDashboard, SlidersHorizontal, Users2, Database } from 'lucide-react';

export default function DashboardPreview() {
  const { language } = useLanguage();

  const features = [
    {
      icon: LayoutDashboard,
      title: language === 'en' ? 'Production Hub' : 'Hub de Producción',
      desc: language === 'en' ? 'Centralized views for all your ongoing campaigns and requests.' : 'Vistas centralizadas para todas tus campañas y solicitudes en curso.'
    },
    {
      icon: SlidersHorizontal,
      title: language === 'en' ? 'Direction Templates' : 'Plantillas de Dirección',
      desc: language === 'en' ? 'Enforce visual consistency across every single output.' : 'Aplica consistencia visual en cada uno de los resultados.'
    },
    {
      icon: Users2,
      title: language === 'en' ? 'Creator Matching' : 'Asignación de Creadores',
      desc: language === 'en' ? 'Algorithmic matching to our vetted network of visual-first creators.' : 'Asignación algorítmica a nuestra red verificada de creadores visual-first.'
    },
    {
      icon: Database,
      title: language === 'en' ? 'Visual Vault' : 'Bóveda Visual',
      desc: language === 'en' ? 'Secure, searchable storage for all your raw features and deliveries.' : 'Almacenamiento seguro y con capacidad de búsqueda para todos tus brutos y entregas.'
    }
  ];

  return (
    <section className="py-32 bg-vyra-black relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-glow-cyan font-semibold mb-4">
            {language === 'en' ? 'THE OPERATING SYSTEM' : 'EL SISTEMA OPERATIVO'}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Platform Features' : 'Funciones de la Plataforma'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-glow-cyan/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feat.icon className="w-6 h-6 text-white/80 group-hover:text-glow-cyan transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{feat.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
