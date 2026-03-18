import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { TrendingUp, ShieldCheck } from 'lucide-react';
import { TestimonialCard } from '../ui/testimonial-cards';

export default function ProofResults() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      id: "1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: language === 'en' ? "We used to spend weeks in revisions to get the exact tone. Vyra’s structured guidelines cut revision cycles to zero." : "Solíamos pasar semanas en revisiones para lograr el tono exacto. Las directrices estructuradas de Vyra bajaron los ciclos de revisión a cero.",
      author: "Auren Skin / Creative Director"
    },
    {
      id: "1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: language === 'en' ? "Coordinating macro-jewelry content was chaotic. Vyra gives us a structural standard that every content block follows automatically." : "Coordinar contenido de macro-joyería era caótico. Vyra nos da un estándar estructural que cada bloque de contenido sigue automáticamente.",
      author: "Solis Jewelry / Brand Manager"
    },
    {
      id: "1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: language === 'en' ? "Finally, all our references, direction logic, and locked assets are in one continuous workflow instead of lost in Slack." : "Finalmente, todas nuestras referencias, lógica de dirección y assets cerrados están en un solo flujo de trabajo en lugar de perdidos en Slack.",
      author: "Lumera Beauty / Content Lead"
    }
  ];

  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <section id="results" className="py-24 bg-[#080b14] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-vyra-violet/10 blur-[150px] rounded-full point-events-none pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            {language === 'en' ? <>Less back and forth. <br /> More deployment.</> : <>Menos ida y vuelta. <br /> Más despliegue.</>}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Shuffling Cards Container */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
               {/* 
                  The negative margins logic (-ml-[100px]) are crucial for the Aceternity 
                  card stack effect to center correctly when positioned absolute.
                */}
               <div className="relative h-[450px] w-full max-w-[350px] mt-10 lg:mt-0 ml-0 md:ml-20 lg:-ml-12 overflow-visible">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            {...testimonial}
                            handleShuffle={handleShuffle}
                            position={positions[index]}
                        />
                    ))}
               </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <Card className="bg-[#0f1423]/80 backdrop-blur-sm text-white p-8 border-white/10 flex items-center justify-between shadow-xl">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-none">{language === 'en' ? 'Avg. Turnaround' : 'Turnaround Promedio'}</span>
                        <span className="text-4xl font-bold text-glow-cyan">{language === 'en' ? '48 Hours' : '48 Horas'}</span>
                    </div>
                    <TrendingUp className="w-12 h-12 text-glow-cyan opacity-20" />
                </Card>
                
                <Card className="bg-gradient-to-br from-vyra-violet/20 to-[#0f1423] text-white p-8 border-vyra-violet/30 flex items-center justify-between shadow-xl">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-none">{language === 'en' ? 'Visual Consistency' : 'Consistencia Visual'}</span>
                        <span className="text-4xl font-bold text-white">98.5%</span>
                    </div>
                    <ShieldCheck className="w-12 h-12 text-vyra-violet opacity-30" />
                </Card>
                
                <div className="mt-4 p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                    <p className="text-sm font-mono text-gray-500 leading-relaxed max-w-sm">
                      {language === 'en' ? "Vyra's operational logic guarantees your creative briefs won't mutate throughout the production pipeline." : "La lógica operativa de Vyra garantiza que tus briefs creativos no muten a lo largo de la pipeline de producción."}
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
