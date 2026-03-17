import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { TrendingUp, ShieldCheck } from 'lucide-react';
import { TestimonialCard } from '../ui/testimonial-cards';

export default function ProofResults() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: "1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: t('results.t1.quote', { defaultValue: "We used to spend weeks going back and forth with creators to get the exact tone we wanted. Vyra’s structured direction templates cut our revision cycles to zero." }),
      author: t('results.t1.author', { defaultValue: "Auren Skin / Creative Director" })
    },
    {
      id: "1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: t('results.t2.quote', { defaultValue: "Consistent macro shots of jewelry are insanely hard to scale. Vyra lets us set a structural standard that every asset follows automatically." }),
      author: t('results.t2.author', { defaultValue: "Solis Jewelry / Brand Manager" })
    },
    {
      id: "1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: t('results.t3.quote', { defaultValue: "We finally have all our references, direction logic, and approved assets in one continuous workflow instead of scattered across Slack." }),
      author: t('results.t3.author', { defaultValue: "Lumera Beauty / Content Lead" })
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
            {t('results.title')}
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
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-none">Average Turnaround</span>
                        <span className="text-4xl font-bold text-glow-cyan">48 Hours</span>
                    </div>
                    <TrendingUp className="w-12 h-12 text-glow-cyan opacity-20" />
                </Card>
                
                <Card className="bg-gradient-to-br from-vyra-violet/20 to-[#0f1423] text-white p-8 border-vyra-violet/30 flex items-center justify-between shadow-xl">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-none">Brand Consistency</span>
                        <span className="text-4xl font-bold text-white">98.5%</span>
                    </div>
                    <ShieldCheck className="w-12 h-12 text-vyra-violet opacity-30" />
                </Card>
                
                <div className="mt-4 p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                    <p className="text-sm font-mono text-gray-500 leading-relaxed max-w-sm">
                      Vyra's operating logic guarantees your creative briefs won't get diluted during the production pipeline.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
