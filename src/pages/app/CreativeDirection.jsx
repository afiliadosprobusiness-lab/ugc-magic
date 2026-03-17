import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MOCK_DIRECTION_TAGS } from '../../data/mock';
import { Sparkles, Save, Palette, Maximize, Play, Target } from 'lucide-react';

export default function CreativeDirection() {
  const categories = [
    { title: "Visual Tone", icon: <Palette className="w-4 h-4" /> },
    { title: "Shot Feel", icon: <Maximize className="w-4 h-4" /> },
    { title: "Motion Style", icon: <Play className="w-4 h-4" /> },
    { title: "Campaign Angle", icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Creative Direction</h1>
          <p className="text-sm text-gray-500">Manage structure presets and visual constraints.</p>
        </div>
        
        <Button variant="primary" className="shadow-vyra-violet/20 bg-vyra-black hover:bg-slate-core">
          <Save className="w-4 h-4 mr-2" />
          Save Logic
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Presets Column */}
        <div className="lg:col-span-2 space-y-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="border-soft-gray overflow-hidden">
              <div className="p-4 border-b border-soft-gray bg-gray-50 flex items-center gap-2">
                <div className="text-vyra-violet">{cat.icon}</div>
                <h3 className="font-bold text-vyra-black">{cat.title}</h3>
              </div>
              <div className="p-6">
                 <div className="flex flex-wrap gap-3">
                   {MOCK_DIRECTION_TAGS.map(tag => (
                     <div key={tag} className="px-4 py-2 rounded-lg border border-soft-gray text-sm font-medium text-gray-600 cursor-pointer hover:border-vyra-violet hover:text-vyra-violet transition-colors">
                       {tag}
                     </div>
                   ))}
                   <div className="px-4 py-2 rounded-lg border border-dashed border-gray-300 text-sm font-medium text-gray-400 cursor-pointer hover:bg-gray-50 hover:text-vyra-black transition-colors flex items-center">
                     + Add Custom
                   </div>
                 </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Suggestion / Simulation Panel */}
        <div className="lg:sticky top-24 space-y-6">
          <Card className="p-6 bg-[#0a0f1d] border-vyra-violet/20 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gradient opacity-20 blur-[40px] rounded-full point-events-none" />
             
             <div className="flex items-center gap-2 text-glow-cyan font-mono text-xs uppercase tracking-widest mb-6">
               <Sparkles className="w-4 h-4" /> Recommended Logic
             </div>
             
             <h4 className="text-xl font-bold tracking-tight mb-2">High-Converting Baseline</h4>
             <p className="text-sm text-gray-400 leading-relaxed mb-6">
               Based on your recent beauty output, this combination yields the highest retention rate.
             </p>

             <div className="space-y-3 mb-8 bg-white/5 border border-white/10 rounded-xl p-4">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-400">Visual Tone</span>
                 <Badge variant="glow" className="bg-vyra-black/50 py-0 text-[10px]">Clean Luxury</Badge>
               </div>
               <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                 <span className="text-gray-400">Shot Feel</span>
                 <Badge variant="glow" className="bg-vyra-black/50 py-0 text-[10px]">Product Focus</Badge>
               </div>
               <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                 <span className="text-gray-400">Campaign Angle</span>
                 <Badge variant="glow" className="bg-vyra-black/50 py-0 text-[10px]">Social Proof</Badge>
               </div>
             </div>
             
             <Button variant="primary" className="w-full text-sm font-semibold shadow-lg shadow-vyra-violet/20">
               Apply Recommendation
             </Button>
          </Card>

          <Card className="p-6 border-white/40 bg-white/40 backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <span className="font-bold text-xl tracking-tighter">94%</span>
              </div>
              <h4 className="font-bold text-vyra-black mb-1">Consistency Score</h4>
              <p className="text-xs text-gray-500">Your current presets ensure a highly unified brand aesthetic across all generated variations.</p>
          </Card>
        </div>

      </div>
    </div>
  );
}
