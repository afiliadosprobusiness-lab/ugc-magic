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
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Asset Library</h1>
          <p className="text-sm text-gray-500">Your structured creative database.</p>
        </div>
        
        <Button variant="secondary" className="bg-white">
          <Download className="w-4 h-4 mr-2" />
          Export Batch
        </Button>
      </div>

      {/* Toolbar */}
      <Card className="p-4 border-soft-gray flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/50 backdrop-blur-sm sticky top-16 z-30">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full md:w-auto">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-slate-core text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-200 hover:text-vyra-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search by brand or tag..." className="h-9 pl-9 text-sm" />
          </div>
          <Button variant="outline" size="icon" className="h-9 w-9 shrink-0">
            <Filter className="w-4 h-4 text-gray-500" />
          </Button>
        </div>
      </Card>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAssets.map(asset => (
          <Card key={asset.id} className="overflow-hidden border-soft-gray group cursor-pointer hover:shadow-xl hover:border-vyra-violet/30 transition-all">
            <div className="relative aspect-square sm:aspect-video bg-gray-100 overflow-hidden">
              <img src={asset.thumb} alt={asset.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-vyra-black/80 via-vyra-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                 <div className="flex justify-between items-start">
                   <Badge variant="glow" className="bg-vyra-black/50 backdrop-blur-md text-xs py-0.5">{asset.tag}</Badge>
                   <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                     <Download className="w-4 h-4" />
                   </button>
                 </div>
              </div>
            </div>
            
            <div className="p-4 bg-white relative">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-semibold text-vyra-black truncate flex-1">{asset.title}</h3>
                <button className="text-gray-400 hover:text-vyra-black transition-colors shrink-0">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">{asset.brand}</span>
                <span className="text-gray-400 text-xs font-mono">{asset.date}</span>
              </div>
            </div>
          </Card>
        ))}
        
        {filteredAssets.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-soft-gray flex items-center justify-center mb-4">
              <FileImage className="w-8 h-8 text-gray-400" />
            </div>
            <p className="font-medium text-gray-600 mb-1">No assets match your criteria</p>
            <p className="text-sm">Try changing the tab or clearing the search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
