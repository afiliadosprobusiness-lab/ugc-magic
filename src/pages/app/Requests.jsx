import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MOCK_REQUESTS } from '../../data/mock';
import { Search, Plus, Archive, Filter, ChevronRight, Play } from 'lucide-react';
import { Input } from '../../components/ui/Input';

export default function Requests() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Draft', 'In Review', 'Approved', 'In Production', 'Delivered'];
  
  const filteredRequests = activeTab === 'All' 
    ? MOCK_REQUESTS 
    : MOCK_REQUESTS.filter(r => r.status === activeTab);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Draft': return <Badge variant="glass" className="text-white/50">Draft / Matching</Badge>;
      case 'In Review': return <Badge variant="violet" className="px-2 py-0.5">In Review</Badge>;
      case 'Approved': return <Badge variant="success">Approved</Badge>;
      case 'In Production': return <Badge variant="glow" className="px-2 py-0.5">In Production</Badge>;
      case 'Delivered': return <Badge variant="glow" className="bg-glow-cyan/20 text-glow-cyan border-glow-cyan/50">Delivered</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Production Requests</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Manage and track your structured UGC workflows.</p>
        </div>
        
        <Button variant="primary" className="bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-semibold" onClick={() => navigate('/app/requests/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Create Request
        </Button>
      </div>

      <Card className="border-white/5 bg-[#0B1020] overflow-hidden shadow-2xl">
        {/* Filters Panel */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-4 bg-black/20">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide flex-1">
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
          
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <Input type="text" placeholder="Search requests..." className="h-9 pl-9 text-sm bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-glow-cyan/50" />
            </div>
            <Button variant="outline" size="sm" className="h-9 whitespace-nowrap hidden sm:flex border-white/10 text-white hover:bg-white/5">
              <Filter className="w-4 h-4 mr-2 text-white/50" /> Filter
            </Button>
          </div>
        </div>

        {/* Hybrid Table / List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs uppercase tracking-widest font-mono text-white/30 bg-black/40">
                <th className="p-4 pl-6 font-medium">Request Detail</th>
                <th className="p-4 font-medium hidden md:table-cell">Brand & Tags</th>
                <th className="p-4 font-medium hidden lg:table-cell">Assigned Profile</th>
                <th className="p-4 font-medium">Status / Progress</th>
                <th className="p-4 pr-6 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#0B1020]">
              {filteredRequests.map(req => (
                <tr key={req.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => navigate(`/app/requests/${req.id}`)}>
                  <td className="p-4 pl-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-base">{req.name}</span>
                      <div className="flex items-center gap-2 text-xs text-white/40 font-mono mt-1">
                        <span>{req.id}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Archive className="w-3 h-3 text-white/20"/> {req.referenceCount || 0} Refs</span>
                        <span>•</span>
                        <span>Due {req.dueDate || 'TBD'}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex flex-col gap-2">
                       <span className="font-semibold text-white/80">{req.brand?.name || req.brand || 'Unknown'}</span>
                       <div className="flex flex-wrap gap-1">
                         {(req.directionTags || []).map(tag => (
                           <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 border border-white/10 rounded text-white/50 bg-white/5">{tag}</span>
                         ))}
                       </div>
                    </div>
                  </td>
                  
                  <td className="p-4 hidden lg:table-cell">
                    <div className="flex items-center gap-3">
                      {req.creator ? (
                        <>
                          <img src={req.creator.avatar} alt="Creator" className="w-8 h-8 rounded-full border border-white/10" />
                          <span className="font-medium text-white/80">{req.creator.name}</span>
                        </>
                      ) : (
                        <>
                          <div className="w-8 h-8 rounded-full border border-dashed border-white/20 flex items-center justify-center text-xs text-white/20">?</div>
                          <span className="font-medium text-white/30 italic">Matching...</span>
                        </>
                      )}
                    </div>
                  </td>
                  
                  <td className="p-4 align-top pt-5">
                    <div className="flex flex-col gap-3">
                      <div>{getStatusBadge(req.status)}</div>
                      {req.status !== 'Draft' && req.status !== 'Delivered' && (
                        <div className="w-full max-w-[120px] h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                           <div className="h-full bg-gradient-to-r from-glow-cyan to-electric-blue rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(34,211,238,0.3)]" style={{ width: `${req.progress || 0}%` }} />
                        </div>
                      )}
                    </div>
                  </td>
                  
                  <td className="p-4 pr-6 text-right align-middle">
                    <Button variant="ghost" size="icon" className="transition-all opacity-50 group-hover:opacity-100 group-hover:bg-white/10">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredRequests.length === 0 && (
            <div className="p-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-white/20" />
              </div>
              <p className="font-medium text-white/50 mb-2">No active outputs in this view</p>
              <p className="text-sm text-white/30 font-mono">Create a new production request to see it here.</p>
            </div>
          )}
        </div>
      </Card>

    </div>
  );
}
