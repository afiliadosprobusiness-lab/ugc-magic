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
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Creative Direction</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Manage structure presets and visual constraints.</p>
        </div>
        
        <Button variant="primary" className="bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-semibold">
          <Save className="w-4 h-4 mr-2" />
          Save Logic
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Presets Column */}
        <div className="lg:col-span-2 space-y-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="border-white/5 bg-[#0B1020] overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-white/5 bg-black/20 flex items-center gap-2">
                <div className="text-glow-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{cat.icon}</div>
                <h3 className="font-bold text-white">{cat.title}</h3>
              </div>
              <div className="p-6">
                 <div className="flex flex-wrap gap-3">
                   {MOCK_DIRECTION_TAGS.map(tag => (
                     <div key={tag} className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-sm font-medium text-white/70 cursor-pointer hover:border-glow-cyan/50 hover:bg-glow-cyan/5 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                       {tag}
                     </div>
                   ))}
                   <div className="px-4 py-2 rounded-lg border border-dashed border-white/20 text-sm font-medium text-white/40 cursor-pointer hover:border-white/40 hover:text-white transition-all flex items-center bg-black/20">
                     + Add Custom
                   </div>
                 </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Suggestion / Simulation Panel */}
        <div className="lg:sticky top-24 space-y-6">
          <Card className="p-6 bg-vyra-violet/5 border-vyra-violet/20 text-white shadow-[0_0_30px_rgba(124,58,237,0.1)] relative overflow-hidden backdrop-blur-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-vyra-violet opacity-20 blur-[50px] rounded-full pointer-events-none" />
             
             <div className="flex items-center gap-2 text-glow-cyan font-mono text-xs uppercase tracking-widest mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
               <Sparkles className="w-4 h-4" /> Recommended Logic
             </div>
             
             <h4 className="text-xl font-bold tracking-tight mb-2">High-Converting Baseline</h4>
             <p className="text-sm text-white/60 leading-relaxed mb-6">
               Based on your recent beauty output, this combination yields the highest retention rate.
             </p>

             <div className="space-y-3 mb-8 bg-black/40 border border-white/10 rounded-xl p-4 shadow-inner">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-white/40 font-mono">Visual Tone</span>
                 <Badge variant="glow" className="bg-[#0B1020] text-glow-cyan border-glow-cyan/30 py-0.5 px-2 text-[10px] tracking-widest">Clean Luxury</Badge>
               </div>
               <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                 <span className="text-white/40 font-mono">Shot Feel</span>
                 <Badge variant="glow" className="bg-[#0B1020] text-glow-cyan border-glow-cyan/30 py-0.5 px-2 text-[10px] tracking-widest">Product Focus</Badge>
               </div>
               <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                 <span className="text-white/40 font-mono">Campaign Angle</span>
                 <Badge variant="glow" className="bg-[#0B1020] text-glow-cyan border-glow-cyan/30 py-0.5 px-2 text-[10px] tracking-widest">Social Proof</Badge>
               </div>
             </div>
             
             <Button variant="primary" className="w-full bg-glow-cyan text-[#0B1020] border-none hover:bg-glow-cyan/90 shadow-[0_0_20px_rgba(34,211,238,0.3)] font-bold tracking-wide">
               Apply Recommendation
             </Button>
          </Card>

          <Card className="p-6 border-white/5 bg-[#0B1020] flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <span className="font-bold text-2xl tracking-tighter">94%</span>
              </div>
              <h4 className="font-bold text-white mb-2">Consistency Score</h4>
              <p className="text-xs text-white/50 leading-relaxed max-w-[200px]">Your current presets ensure a highly unified brand aesthetic across all generated variations.</p>
          </Card>
        </div>

      </div>
    </div>
  );
}
