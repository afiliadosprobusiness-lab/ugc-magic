import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const { language } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: language === 'en' ? 'How do you guarantee consistency?' : '¿Cómo garantizan la consistencia?',
      a: language === 'en' ? 'Our proprietary matchmaking logic pairs your direction templates directly with tested creators who have proven capabilities in your exact visual aesthetic.' : 'Nuestra lógica de asignación empareja tus plantillas de dirección directamente con creadores testeados que han demostrado capacidades en tu estética visual exacta.'
    },
    {
      q: language === 'en' ? 'How fast is turnaround?' : '¿Qué tan rápido es el tiempo de entrega?',
      a: language === 'en' ? 'Standard variations are delivered within 48 to 72 hours from request approval, fully edited and formatted.' : 'Las variaciones estándar se entregan dentro de 48 a 72 horas desde la aprobación de la solicitud, completamente editadas y formateadas.'
    },
    {
      q: language === 'en' ? 'Do I own the assets?' : '¿Soy dueño de los activos?',
      a: language === 'en' ? 'Yes. You receive full commercial rights and raw footage ownership upon delivery.' : 'Sí. Recibes derechos comerciales completos y propiedad de las grabaciones en bruto al momento de la entrega.'
    }
  ];

  return (
    <section className="py-24 bg-[#080b14] relative z-10 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-panel border rounded-2xl overflow-hidden transition-all ${openIdx === idx ? 'border-glow-cyan/50 bg-white/5' : 'border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-48' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-white/60 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
