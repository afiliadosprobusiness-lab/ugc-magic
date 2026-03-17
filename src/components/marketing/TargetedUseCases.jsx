import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check } from 'lucide-react';

export default function TargetedUseCases() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 'beauty',
      label: language === 'en' ? 'For Beauty' : 'Para Belleza',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
      points: language === 'en' ? [
        'Macro texture shots for serums and creams.',
        'Before/after split screen templates.',
        'Skincare routine integrations.'
      ] : [
        'Tomas macro de texturas para sueros y cremas.',
        'Plantillas de pantalla dividida de antes/después.',
        'Integraciones en rutinas de skincare.'
      ]
    },
    {
      id: 'jewelry',
      label: language === 'en' ? 'For Jewelry' : 'Para Joyería',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      points: language === 'en' ? [
        'Strict lighting requirements for maximum sparkle.',
        'On-model styling guidelines.',
        'Unboxing and detail pan shots.'
      ] : [
        'Requisitos estrictos de iluminación para máximo brillo.',
        'Directrices de estilo en modelo.',
        'Tomas de unboxing y panorámicas de detalles.'
      ]
    },
    {
      id: 'fashion',
      label: language === 'en' ? 'For Fashion' : 'Para Moda',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
      points: language === 'en' ? [
        'GRWM (Get Ready With Me) structured flows.',
        'Fit and fabric close-ups.',
        'Trend-aligned aesthetic matching.'
      ] : [
        'Flujos estructurados GRWM (Get Ready With Me).',
        'Acercamientos de ajuste y tela.',
        'Coincidencia estética alineada con tendencias.'
      ]
    }
  ];

  const activeCase = useCases[activeTab];

  return (
    <section className="bg-[#06080F] relative z-20 py-32 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-medium tracking-tight text-white/50 mb-2">
            {language === 'en' ? 'Built for your vertical' : 'Construido para tu vertical'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Interactions */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              {useCases.map((useCase, idx) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(idx)}
                  className={\`flex items-center justify-between p-6 rounded-2xl border transition-all text-left w-full \${
                    activeTab === idx 
                      ? 'bg-white/10 border-electric-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                      : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                  }\`}
                >
                  <span className={\`text-xl font-semibold \${activeTab === idx ? 'text-white' : 'text-white/50'}\`}>
                    {useCase.label}
                  </span>
                  <div className={\`w-2 h-2 rounded-full transition-all \${activeTab === idx ? 'bg-electric-blue shadow-[0_0_10px_#3B82F6]' : 'bg-transparent'}\`} />
                </button>
              ))}
            </div>

            <div className="p-8 bg-[#0B1020] rounded-2xl border border-white/5">
              <h4 className="text-white font-medium mb-4">{language === 'en' ? 'Included parameters:' : 'Parámetros incluidos:'}</h4>
              <ul className="space-y-3">
                {activeCase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-glow-cyan shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 glass-panel group">
            <img 
              src={activeCase.image} 
              alt={activeCase.label}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vyra-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-glow-cyan mb-1 uppercase tracking-widest">Active Preset</div>
                  <div className="text-white font-medium">{activeCase.label}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-electric-blue/20 border border-electric-blue/30 text-electric-blue text-xs font-mono">
                  Applied
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
