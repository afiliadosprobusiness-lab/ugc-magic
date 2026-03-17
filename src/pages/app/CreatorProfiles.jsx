import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MOCK_CREATORS } from '../../data/mock';
import { Star, ShieldCheck, Camera, Video, MessageSquare } from 'lucide-react';

export default function CreatorProfiles() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Creator Directory</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Validated profiles mapped to your visual constraints.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_CREATORS.map(creator => (
          <Card key={creator.id} className="border-white/5 bg-[#0B1020] overflow-hidden group hover:border-glow-cyan/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all flex flex-col shadow-2xl p-0">
            
            {/* Header / Avatar */}
            <div className="p-6 pb-0 flex gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-sm shrink-0 bg-black/40">
                <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-xl text-white leading-none">{creator.name}</h3>
                  <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs font-bold border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)] tracking-wide">
                    <ShieldCheck className="w-3 h-3" /> Validated
                  </div>
                </div>
                <div className="text-sm font-medium text-glow-cyan mb-2 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">{creator.vibe}</div>
                <div className="flex items-center gap-0.5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 py-4 flex-1">
              <div className="flex gap-4 p-3 bg-white/[0.02] rounded-xl border border-white/5 mb-4 shadow-inner">
                <div className="flex-1 text-center border-r border-white/5">
                  <div className="text-xs text-white/30 uppercase tracking-widest font-mono mb-1">Match</div>
                  <div className="text-lg font-bold text-glow-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{creator.score}%</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-white/30 uppercase tracking-widest font-mono mb-1">Speed</div>
                  <div className="text-lg font-bold text-white">&lt; 48h</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Primary Formats</div>
                  <div className="flex gap-2">
                    {creator.formats.map(fmt => (
                       <Badge key={fmt} variant="glass" className="px-2 py-0.5 font-medium bg-white/5 border-white/10 text-white/70">
                         {fmt === 'Photos' ? <Camera className="w-3 h-3 mr-1 text-white/50" /> : <Video className="w-3 h-3 mr-1 text-white/50" />}
                         {fmt}
                       </Badge>
                    ))}
                  </div>
                </div>
                <div>
                   <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 mt-4">Best For</div>
                   <p className="text-sm text-white/80 leading-relaxed font-medium">"{creator.bestFor}"</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="p-4 border-t border-white/5 bg-black/40 flex gap-3 mt-auto">
               <Button variant="outline" className="flex-1 bg-transparent border-white/10 text-white/70 font-semibold hover:bg-white/5 hover:text-white transition-all gap-2">
                 <MessageSquare className="w-4 h-4" /> Message
               </Button>
               <Button variant="primary" className="flex-1 bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-semibold border-none">
                 Assign
               </Button>
            </div>
            
          </Card>
        ))}
      </div>
    </div>
  );
}
