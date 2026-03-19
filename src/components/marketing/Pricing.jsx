import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ModernPricingPage } from '../ui/animated-glassy-pricing';

export default function Pricing() {
  const { language } = useLanguage();

  const myPricingPlans = [
    { 
      planName: language === 'en' ? 'Starter' : 'Starter', 
      description: language === 'en' ? 'Launch your first structured creative flow' : 'Inicia tu primer flujo creativo estructurado', 
      price: language === 'en' ? '3 UGC Videos' : '3 Videos UGC', 
      features: language === 'en' ? [
        "Structured visual direction", 
        "Brand-aligned assets", 
        "Ready to test"
      ] : [
        "Dirección visual estructurada", 
        "Piezas alineadas a la marca", 
        "Listos para testear"
      ], 
      buttonText: language === 'en' ? 'Get Started' : 'Comenzar', 
      buttonVariant: 'secondary'
    },
    { 
      planName: language === 'en' ? 'Grow' : 'Grow', 
      description: language === 'en' ? 'Build your weekly variations engine' : 'Construye tu motor de variaciones semanales', 
      price: language === 'en' ? '10 UGC Videos' : '10 Videos UGC', 
      features: language === 'en' ? [
        "Strict visual alignment", 
        "Predictable variation flow", 
        "Designed for weekly campaigns", 
        "Priority brand matching"
      ] : [
        "Alineamiento visual estricto", 
        "Flujo de variaciones predecible", 
        "Diseñado para campañas semanales", 
        "Matching prioritario con la marca"
      ], 
      buttonText: language === 'en' ? 'Deploy Now' : 'Desplegar Ahora', 
      isPopular: true, 
      buttonVariant: 'primary' 
    },
    { 
      planName: language === 'en' ? 'Scale' : 'Scale', 
      description: language === 'en' ? 'Scale your test volume preserving your identity' : 'Escala el volumen de testeo preservando tu identidad', 
      price: language === 'en' ? '30+ UGC Videos' : '30+ Videos UGC', 
      features: language === 'en' ? [
        "Built for heavy campaign volume", 
        "Uncompromising visual consistency", 
        "A/B testing ready material", 
        "Dedicated creative lead"
      ] : [
        "Construido para alto volumen", 
        "Consistencia visual exigente", 
        "Material listo para testing A/B", 
        "Lead creativo dedicado"
      ], 
      buttonText: language === 'en' ? 'Get Started' : 'Comenzar', 
      buttonVariant: 'secondary' 
    },
    { 
      planName: language === 'en' ? 'Custom System' : 'Custom System', 
      description: language === 'en' ? 'Need a tailored production workflow?' : '¿Necesitas un flujo de producción a medida?', 
      price: language === 'en' ? 'Tailored Volume' : 'Volumen a Medida', 
      features: language === 'en' ? [
        "Custom deployment setup", 
        "Absolute consistency control", 
        "Recurring production operations", 
        "Private workflow implementation"
      ] : [
        "Setup de despliegue customizado", 
        "Control absoluto de consistencia", 
        "Operativa de producción recurrente", 
        "Implementación de workflow privado"
      ], 
      buttonText: language === 'en' ? 'Talk to Sales' : 'Hablar con Ventas', 
      buttonVariant: 'secondary' 
    },
  ];

  const titleComponent = (
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
      {language === 'en' ? 'Structure today. Scale tomorrow.' : 'Estructura hoy. Escala mañana.'}
    </h2>
  );

  return (
    <section id="plans">
      <ModernPricingPage
        title={titleComponent}
        subtitle={language === 'en' ? 'Start with the visual production your campaigns need to test right now. Increase iteration speed only when your brand demands it.' : 'Comienza con la producción visual que tus campañas necesitan probar en este momento. Aumenta la velocidad de iteración únicamente cuando tu marca lo pida.'}
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
    </section>
  );
}
