import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ModernPricingPage } from '../ui/animated-glassy-pricing';

export default function Pricing() {
  const { language } = useLanguage();

  const myPricingPlans = [
    { 
      planName: language === 'en' ? 'Starter' : 'Starter', 
      description: language === 'en' ? 'Launch your first creative batch' : 'Lanza tu primer set creativo', 
      price: language === 'en' ? '3 UGC Videos' : '3 Videos UGC', 
      features: language === 'en' ? [
        "Structured request workflow", 
        "Basic creative direction", 
        "Fast turnaround"
      ] : [
        "Workflow de input estructurado", 
        "Dirección creativa base", 
        "Turnaround veloz"
      ], 
      buttonText: language === 'en' ? 'Get Started' : 'Comenzar', 
      buttonVariant: 'secondary'
    },
    { 
      planName: language === 'en' ? 'Grow' : 'Grow', 
      description: language === 'en' ? 'Build your weekly content engine' : 'Construye tu motor semanal de contenido', 
      price: language === 'en' ? '10 UGC Videos' : '10 Videos UGC', 
      features: language === 'en' ? [
        "Structured creative direction", 
        "Predictable variation workflow", 
        "Designed for weekly output", 
        "Priority creator matching"
      ] : [
        "Dirección creativa estructurada", 
        "Workflow de variaciones predecible", 
        "Diseñado para output semanal", 
        "Matching prioritario de creadores"
      ], 
      buttonText: language === 'en' ? 'Deploy Now' : 'Desplegar Ahora', 
      isPopular: true, 
      buttonVariant: 'primary' 
    },
    { 
      planName: language === 'en' ? 'Scale' : 'Scale', 
      description: language === 'en' ? 'Scale your visual production pipeline' : 'Escala tu pipeline de producción visual', 
      price: language === 'en' ? '30+ UGC Videos' : '30+ Videos UGC', 
      features: language === 'en' ? [
        "Built for campaign volume", 
        "Strict visual consistency logic", 
        "A/B testing ready assets", 
        "Dedicated account lead"
      ] : [
        "Construido para volumen de campaña", 
        "Lógica estricta de consistencia visual", 
        "Assets listos para testing A/B", 
        "Lead de cuenta dedicado"
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
      {language === 'en' ? 'Simple plans for structured UGC production.' : 'Planes simples para producción UGC estructurada.'}
    </h2>
  );

  return (
    <section id="plans">
      <ModernPricingPage
        title={titleComponent}
        subtitle={language === 'en' ? 'Choose the output level your brand needs today. Scale up to a tailored system when you need more volume, consistency, and structure.' : 'Elige el nivel de output que tu marca necesita hoy. Escala a un sistema a medida cuando necesites más estructura, consistencia y volumen.'}
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
    </section>
  );
}
