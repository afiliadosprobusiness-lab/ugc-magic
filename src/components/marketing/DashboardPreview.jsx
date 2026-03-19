import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LayoutDashboard, SlidersHorizontal, Users2, Database } from 'lucide-react';

export default function DashboardPreview() {
  const { language } = useLanguage();

  const features = [
    {
      icon: LayoutDashboard,
      title: language === 'en' ? 'Production Control' : 'Control de Producción',
      desc: language === 'en' ? 'Centralized views for all your ongoing campaigns and visual deployments.' : 'Vistas centralizadas para todas tus campañas y despliegues visuales en curso.'
    },
    {
      icon: SlidersHorizontal,
      title: language === 'en' ? 'Visual Standards' : 'Estándares Visuales',
      desc: language === 'en' ? 'Inject your brand guidelines to enforce consistency in every generated asset.' : 'Inyecta tus directrices de marca para forzar consistencia en cada asset generado.'
    },
    {
      icon: Users2,
      title: language === 'en' ? 'Verified Network' : 'Red Verificada',
      desc: language === 'en' ? 'Algorithmic matching to our private network of high-converting, visual-first creators.' : 'Asignación algorítmica a nuestra red privada de creadores visual-first de alta conversión.'
    },
    {
      icon: Database,
      title: language === 'en' ? 'Asset Vault' : 'Bóveda de Activos',
      desc: language === 'en' ? 'Interconnected structured storage for all your raw features and final deliverables.' : 'Almacenamiento estructurado interconectado para todos tus brutos y entregables finales.'
    }
  ];

  return (
    <section id="premium" className="py-32 bg-vyra-black relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-glow-cyan font-semibold mb-4">
            {language === 'en' ? 'THE SYSTEM IN DETAIL' : 'EL SISTEMA EN DETALLE'}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {language === 'en' ? 'The Operating Layer.' : 'La Capa Operativa.'}
          </h3>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {language === 'en' ? 'The precise modules that structure your visual production.' : 'Los módulos precisos que estructuran tu producción visual.'}
          </p>
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
