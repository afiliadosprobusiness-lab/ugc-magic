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
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Creator Directory</h1>
          <p className="text-sm text-gray-500">Validated profiles mapped to your visual constraints.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_CREATORS.map(creator => (
          <Card key={creator.id} className="border-soft-gray overflow-hidden group hover:border-vyra-violet/30 hover:shadow-xl transition-all flex flex-col">
            
            {/* Header / Avatar */}
            <div className="p-6 pb-0 flex gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-soft-gray shadow-sm shrink-0">
                <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-xl text-vyra-black leading-none">{creator.name}</h3>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-bold border border-green-100">
                    <ShieldCheck className="w-3 h-3" /> Validated
                  </div>
                </div>
                <div className="text-sm font-medium text-vyra-violet mb-2">{creator.vibe}</div>
                <div className="flex items-center gap-0.5 text-amber-400">
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
              <div className="flex gap-4 p-3 bg-ice-white rounded-xl border border-soft-gray mb-4">
                <div className="flex-1 text-center border-r border-soft-gray">
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Match</div>
                  <div className="text-lg font-bold text-electric-blue">{creator.score}%</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Speed</div>
                  <div className="text-lg font-bold text-vyra-black">&lt; 48h</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Primary Formats</div>
                  <div className="flex gap-2">
                    {creator.formats.map(fmt => (
                       <Badge key={fmt} variant="secondary" className="px-2 font-medium bg-gray-100 text-gray-600">
                         {fmt === 'Photos' ? <Camera className="w-3 h-3 mr-1" /> : <Video className="w-3 h-3 mr-1" />}
                         {fmt}
                       </Badge>
                    ))}
                  </div>
                </div>
                <div>
                   <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4">Best For</div>
                   <p className="text-sm text-gray-700 leading-relaxed font-medium">"{creator.bestFor}"</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="p-4 border-t border-soft-gray bg-gray-50 flex gap-3">
               <Button variant="secondary" className="flex-1 bg-white border-soft-gray text-gray-600 font-semibold shadow-sm hover:border-gray-400 gap-2">
                 <MessageSquare className="w-4 h-4" /> Message
               </Button>
               <Button variant="primary" className="flex-1 font-semibold shadow-vyra-violet/20 hover:opacity-90">
                 Assign
               </Button>
            </div>
            
          </Card>
        ))}
      </div>
    </div>
  );
}
