import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ModernPricingPage } from '../ui/animated-glassy-pricing';

export default function Pricing() {
  const { t } = useLanguage();

  const myPricingPlans = [
    { 
      planName: t('pricing.p1.title', { defaultValue: "Starter" }), 
      description: t('pricing.p1.desc', { defaultValue: "Lanza tu primer set creativo" }), 
      price: "3 UGC videos", 
      features: [
        "Structured request workflow", 
        "Basic creative direction", 
        "Fast turnaround"
      ], 
      buttonText: t('pricing.cta', { defaultValue: "Comenzar" }), 
      buttonVariant: 'secondary'
    },
    { 
      planName: t('pricing.p2.title', { defaultValue: "Grow" }), 
      description: t('pricing.p2.desc', { defaultValue: "Construye tu motor semanal de contenido" }), 
      price: "10 UGC videos", 
      features: [
        "Structured creative direction", 
        "Better variation workflow", 
        "Designed for weekly output", 
        "Priority matching"
      ], 
      buttonText: t('pricing.cta', { defaultValue: "Comenzar" }), 
      isPopular: true, 
      buttonVariant: 'primary' 
    },
    { 
      planName: t('pricing.p3.title', { defaultValue: "Scale" }), 
      description: t('pricing.p3.desc', { defaultValue: "Escala tu producción visual" }), 
      price: "30 UGC videos", 
      features: [
        "Built for campaign volume", 
        "Stronger consistency logic", 
        "Better support for testing", 
        "Dedicated account lead"
      ], 
      buttonText: t('pricing.cta', { defaultValue: "Comenzar" }), 
      buttonVariant: 'secondary' 
    },
    { 
      planName: t('pricing.p4.title', { defaultValue: "Custom System" }), 
      description: t('pricing.p4.desc', { defaultValue: "¿Necesitas un flujo de producción a medida?" }), 
      price: "Tailored volume", 
      features: [
        "Tailored setup", 
        "Stronger consistency", 
        "Recurring production structure", 
        "Workflow implementation"
      ], 
      buttonText: t('pricing.cta.contact', { defaultValue: "Hablar con nosotros" }), 
      buttonVariant: 'secondary' 
    },
  ];

  const titleComponent = (
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
      {t('pricing.title', { defaultValue: "Planes simples para producción UGC estructurada" })}
    </h2>
  );

  return (
    <section id="plans">
      <ModernPricingPage
        title={titleComponent}
        subtitle={t('pricing.subtitle', { defaultValue: "Elige el nivel de output que tu marca necesita hoy. Escala a un sistema a medida cuando necesites más estructura, consistencia y escala." })}
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
    </section>
  );
}
