import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import RadialOrbitalTimeline from '../ui/radial-orbital-timeline';
import { Upload, SlidersHorizontal, Layers, CheckCircle2, Workflow, Zap } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const timelineData = [
    {
      id: 1,
      title: t('flow.step1.title', { defaultValue: "Upload References" }),
      date: "STEP 01",
      content: t('flow.step1.desc', { defaultValue: "Upload visuals and extract the tone." }),
      category: "Initialization",
      icon: Upload,
      relatedIds: [2],
      status: "completed",
      energy: 100,
    },
    {
      id: 2,
      title: t('flow.step2.title', { defaultValue: "Direction & Consistency" }),
      date: "STEP 02",
      content: t('flow.step2.desc', { defaultValue: "Set the brand guidelines for predictable output." }),
      category: "Parameters",
      icon: SlidersHorizontal,
      relatedIds: [1, 3],
      status: "in-progress",
      energy: 85,
    },
    {
      id: 3,
      title: t('flow.step3.title', { defaultValue: "Generate Output" }),
      date: "STEP 03",
      content: t('flow.step3.desc', { defaultValue: "Review, approve, and scale variations." }),
      category: "Generation",
      icon: Layers,
      relatedIds: [2],
      status: "pending",
      energy: 30,
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full h-screen bg-[#06080F] border-t border-white/5 overflow-hidden flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0B1020] to-transparent pointer-events-none opacity-50"></div>
      
      <div className="absolute z-10 top-20 w-full text-center px-6 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
          {t('flow.title', { defaultValue: "How Vyra structures creative production" })}
        </h2>
        <p className="text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase">
          Interactive Orbital Pipeline
        </p>
      </div>

      <div className="relative z-20 w-full h-[80vh] min-h-[600px] -mt-10">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>

      {/* Helper text */}
      <div className="absolute z-10 bottom-10 w-full text-center px-6 pointer-events-none opacity-40">
        <p className="text-white text-xs tracking-widest uppercase font-mono flex items-center justify-center gap-2">
           <Zap size={14} className="text-glow-cyan" /> Click nodes to expand pipeline details
        </p>
      </div>

    </section>
  );
}
