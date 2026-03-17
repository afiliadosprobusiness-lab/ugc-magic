import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { MOCK_REQUESTS } from '../../data/mock';
import { FileImage, Activity, PlaySquare, ArrowRight, Upload, Layers, SlidersHorizontal, Sparkles, Box, Target, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Define local mock assets for the thumbnail grid
  const MOCK_ASSETS = [
    { id: 'ast-1', title: 'Summer Hook 01', thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300' },
    { id: 'ast-2', title: 'Minimalist B-Roll', thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300' },
    { id: 'ast-3', title: 'Editorial Splash', thumb: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=300' },
    { id: 'ast-4', title: 'Product Macro', thumb: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Top: 4 KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <Card className="p-6 border-white/5 bg-[#0B1020] flex items-start gap-4 hover:border-vyra-violet/30 transition-colors group shadow-lg">
          <div className="p-3 bg-vyra-violet/10 text-vyra-violet rounded-xl group-hover:bg-vyra-violet/20 transition-colors">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-white">{MOCK_METRICS.activeRequests || 12}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mt-1">Active Requests</div>
          </div>
        </Card>
        
        <Card className="p-6 border-white/5 bg-[#0B1020] flex items-start gap-4 hover:border-glow-cyan/30 transition-colors group shadow-lg">
          <div className="p-3 bg-glow-cyan/10 text-glow-cyan rounded-xl group-hover:bg-glow-cyan/20 transition-colors">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-white">{MOCK_METRICS.outputReadyThisWeek || 8}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mt-1">Month's Deliveries</div>
          </div>
        </Card>
        
        <Card className="p-6 border-white/5 bg-[#0B1020] flex items-start gap-4 hover:border-electric-blue/30 transition-colors group shadow-lg">
          <div className="p-3 bg-electric-blue/10 text-electric-blue rounded-xl group-hover:bg-electric-blue/20 transition-colors">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-white">{MOCK_METRICS.creatorMatchRate || 94}%</div>
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mt-1">Consistency Score</div>
          </div>
        </Card>

        <Card className="p-6 border-white/5 bg-[#0B1020] flex items-start gap-4 hover:border-green-500/30 transition-colors group shadow-lg">
          <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:bg-green-500/20 transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-white">45</div>
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mt-1">Assets Used</div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* 2. Middle Left: Active Productions */}
        <Card className="border-white/5 bg-[#0B1020] flex flex-col shadow-xl">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4 text-glow-cyan" /> Active Productions
            </h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/app/requests')} className="text-white/60 hover:text-white">
              View All
            </Button>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            {MOCK_REQUESTS.slice(0, 3).map((req) => (
              <div key={req.id} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer" onClick={() => navigate(`/app/requests/${req.id}`)}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-vyra-violet/10 border border-vyra-violet/20 flex items-center justify-center text-vyra-violet text-xs font-mono">
                    {req.id.split('-')[1]}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{req.name}</h4>
                    <span className="text-xs text-white/40">{req.brand?.name} • {req.directionTags[0]}</span>
                  </div>
                </div>
                {/* Custom Status Pill mapping */}
                <Badge 
                  variant={req.status === 'In Production' ? 'glow' : req.status === 'In Review' ? 'violet' : req.status === 'Draft' ? 'glass' : 'default'} 
                  className="text-[10px] uppercase font-mono px-2 py-0.5"
                >
                  {req.status === 'In Production' ? 'Editing' : req.status === 'Draft' ? 'Matching' : req.status === 'In Review' ? 'Review' : 'Delivered'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* 3. Middle Right: Recent Deliveries */}
        <Card className="border-white/5 bg-[#0B1020] flex flex-col shadow-xl">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
              <FileImage className="w-4 h-4 text-electric-blue" /> Recent Deliveries
            </h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/app/assets')} className="text-white/60 hover:text-white">
              Visual Vault
            </Button>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {MOCK_ASSETS.map(asset => (
              <div key={asset.id} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => navigate('/app/assets')}>
                <img src={asset.thumb} alt={asset.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="text-white text-xs font-medium truncate drop-shadow-md pr-2">{asset.title}</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-glow-cyan/50 transition-colors shrink-0">
                    <PlaySquare className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>

      {/* 4. Bottom: Current Plan Snapshot */}
      <Card className="border-white/5 bg-gradient-to-br from-[#0B1020] to-[#0A0D18] p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 w-full space-y-4">
            <div className="flex items-end justify-between mb-2">
              <div>
                <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-1">Current Cycle</h3>
                <div className="text-2xl font-bold text-white flex items-center gap-3">
                  Scale Plan <Badge variant="glow" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 h-6">Active</Badge>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">22</span>
                <span className="text-white/50 text-sm"> / 30 Videos Used</span>
              </div>
            </div>
            
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-glow-cyan to-electric-blue w-[73%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            </div>
            
            <p className="text-xs font-mono text-white/40">Cycle resets in 8 days</p>
          </div>

          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4 border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
            <Button variant="secondary" className="bg-white/5 border-white/10 hover:bg-white/10 text-white shadow-none" onClick={() => navigate('/app/plans')}>
              Manage Plan
            </Button>
            <Button variant="primary" onClick={() => navigate('/app/requests/new')} className="shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] bg-gradient-to-r from-glow-cyan to-vyra-violet border-none text-white">
               New Production
            </Button>
          </div>

        </div>
      </Card>

    </div>
  );
}
