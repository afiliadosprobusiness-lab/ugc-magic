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
      case 'Draft': return <Badge variant="secondary" className="text-gray-500">Draft</Badge>;
      case 'In Review': return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">In Review</Badge>;
      case 'Approved': return <Badge variant="success">Approved</Badge>;
      case 'In Production': return <Badge className="bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20">Production</Badge>;
      case 'Delivered': return <Badge variant="glow">Delivered</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Production Requests</h1>
          <p className="text-sm text-gray-500">Manage and track your structured UGC workflows.</p>
        </div>
        
        <Button variant="primary" className="shadow-lg shadow-vyra-violet/20" onClick={() => navigate('/app/requests/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Create Request
        </Button>
      </div>

      <Card className="border-soft-gray overflow-hidden">
        {/* Filters Panel */}
        <div className="p-4 border-b border-soft-gray flex items-center justify-between flex-wrap gap-4 bg-gray-50/50">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide flex-1">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-vyra-black text-white shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-200 hover:text-vyra-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input type="text" placeholder="Search requests..." className="h-9 pl-9 text-sm" />
            </div>
            <Button variant="outline" size="sm" className="h-9 whitespace-nowrap hidden sm:flex">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
        </div>

        {/* Hybrid Table / List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-white border-b border-soft-gray text-xs uppercase tracking-wider font-semibold text-gray-500">
                <th className="p-4 pl-6 font-medium">Request Detail</th>
                <th className="p-4 font-medium hidden md:table-cell">Brand & Tags</th>
                <th className="p-4 font-medium hidden lg:table-cell">Assigned Profile</th>
                <th className="p-4 font-medium">Status / Progress</th>
                <th className="p-4 pr-6 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-gray bg-white">
              {filteredRequests.map(req => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-vyra-black text-base">{req.name}</span>
                      <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mt-1">
                        <span>{req.id}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Archive className="w-3 h-3"/> {req.refCount} Refs</span>
                        <span>•</span>
                        <span>Due {req.due}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex flex-col gap-2">
                       <span className="font-semibold text-gray-700">{req.brand}</span>
                       <div className="flex flex-wrap gap-1">
                         {req.tags.map(tag => (
                           <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-soft-gray rounded text-gray-600">{tag}</span>
                         ))}
                       </div>
                    </div>
                  </td>
                  
                  <td className="p-4 hidden lg:table-cell">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xs font-bold text-gray-500">{req.creator.charAt(0)}</div>
                      <span className="font-medium text-gray-700">{req.creator}</span>
                    </div>
                  </td>
                  
                  <td className="p-4 align-top pt-5">
                    <div className="flex flex-col gap-3">
                      <div>{getStatusBadge(req.status)}</div>
                      {req.status !== 'Draft' && req.status !== 'Delivered' && (
                        <div className="w-full max-w-[120px] h-1.5 bg-soft-gray rounded-full overflow-hidden">
                           <div className="h-full bg-vyra-violet rounded-full transition-all duration-1000" style={{ width: `${req.progress}%` }} />
                        </div>
                      )}
                    </div>
                  </td>
                  
                  <td className="p-4 pr-6 text-right align-middle">
                    <Button variant="ghost" size="icon" className="group-hover:bg-white group-hover:shadow-sm">
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-vyra-violet" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredRequests.length === 0 && (
            <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center">
              <Play className="w-12 h-12 text-gray-300 mb-4" />
              <p className="font-medium text-gray-600 mb-2">No requests found</p>
              <p className="text-sm">Try adjusting your filters or create a new request.</p>
            </div>
          )}
        </div>
      </Card>

    </div>
  );
}
