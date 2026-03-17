import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { MOCK_ASSETS } from '../../data/mock';
import { Search, Filter, Download, MoreHorizontal, FileImage } from 'lucide-react';

export default function Assets() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Concepts', 'Frames', 'Motion', 'Videos'];

  const filteredAssets = activeTab === 'All'
    ? MOCK_ASSETS
    : MOCK_ASSETS.filter(a => a.tag === activeTab || a.tag + 's' === activeTab);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Asset Library</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Your structured creative database.</p>
        </div>
        
        <Button variant="primary" className="bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-semibold">
          <Download className="w-4 h-4 mr-2" />
          Export Batch
        </Button>
      </div>

      {/* Toolbar */}
      <Card className="p-4 border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-black/20 backdrop-blur-md sticky top-16 z-30 shadow-2xl">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full md:w-auto">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-electric-blue/20 text-white border border-electric-blue/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                  : 'bg-transparent text-white/40 border border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <Input type="text" placeholder="Search by brand or tag..." className="h-9 pl-9 text-sm bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-glow-cyan/50" />
          </div>
          <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 border-white/10 text-white hover:bg-white/5">
            <Filter className="w-4 h-4 text-white/50" />
          </Button>
        </div>
      </Card>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAssets.map(asset => (
          <Card key={asset.id} className="overflow-hidden border-white/5 bg-[#0B1020] group cursor-pointer hover:shadow-xl hover:shadow-vyra-violet/10 hover:border-vyra-violet/30 transition-all p-0">
            <div className="relative aspect-square sm:aspect-video bg-black/40 overflow-hidden">
              <img src={asset.thumb} alt={asset.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                 <div className="flex justify-between items-start">
                   <Badge variant="glow" className="bg-[#0B1020]/50 backdrop-blur-md text-xs py-0.5 border-white/10 text-white px-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan mr-1.5 inline-block"></span>
                     {asset.tag}
                   </Badge>
                   <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-glow-cyan hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                     <Download className="w-4 h-4" />
                   </button>
                 </div>
              </div>
            </div>
            
            <div className="p-4 bg-[#0B1020] relative border-t border-white/5">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-semibold text-white truncate flex-1">{asset.title}</h3>
                <button className="text-white/30 hover:text-white transition-colors shrink-0">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50 font-medium">{asset.brand}</span>
                <span className="text-white/30 text-[10px] uppercase font-mono tracking-wider">{asset.date}</span>
              </div>
            </div>
          </Card>
        ))}
        
        {filteredAssets.length === 0 && (
          <div className="col-span-full py-20 text-center text-white/50 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <FileImage className="w-8 h-8 text-white/20" />
            </div>
            <p className="font-medium text-white mb-1">No output matches your criteria</p>
            <p className="text-sm font-mono text-white/30 tracking-wide">Try changing the tab or clearing the search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
