import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { MOCK_KPIS, MOCK_ASSETS } from '../../data/mock';
import { FileImage, Activity, PlaySquare, CheckCircle, ArrowRight, Upload, Layers, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Hero Panel */}
      <Card className="bg-vyra-black text-white p-8 md:p-10 border-vyra-violet/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vyra-violet/20 blur-[100px] rounded-full point-events-none" />
        <div className="relative z-10 max-w-xl">
          <Badge variant="glow" className="mb-4">Workspace Active</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Build a new UGC production request
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Upload your references and select your direction. We'll structure the workflow for consistent creative output.
          </p>
          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-vyra-violet/25" onClick={() => navigate('/app/requests/new')}>
            {t('app.createRequest')} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Abstract Data Visual */}
        <div className="relative z-10 hidden lg:flex w-72 h-48 bg-slate-core/50 border border-white/10 rounded-2xl backdrop-blur-sm p-4 flex-col gap-3">
           <div className="flex gap-2">
             <div className="w-8 h-8 rounded bg-vyra-violet/20 flex items-center justify-center"><Upload className="w-4 h-4 text-vyra-violet" /></div>
             <div className="flex-1 rounded bg-white/5 border border-white/5 flex items-center px-3 text-xs font-mono text-gray-400">References OK</div>
           </div>
           <div className="flex gap-2">
             <div className="w-8 h-8 rounded bg-electric-blue/20 flex items-center justify-center"><SlidersHorizontal className="w-4 h-4 text-electric-blue" /></div>
             <div className="flex-1 rounded bg-white/5 border border-white/5 flex items-center px-3 text-xs font-mono text-gray-400">Direction Set</div>
           </div>
           <div className="mt-auto h-8 rounded bg-primary-gradient opacity-80 flex items-center justify-center text-xs font-bold tracking-widest text-white shadow-inner">
              READY TO BUILD
           </div>
        </div>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className="p-6 border-soft-gray flex items-start gap-4 hover:border-vyra-violet/30 transition-colors">
          <div className="p-3 bg-vyra-violet/10 text-vyra-violet rounded-xl">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-vyra-black">{MOCK_KPIS.activeRequests}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Active Requests</div>
          </div>
        </Card>
        
        <Card className="p-6 border-soft-gray flex items-start gap-4 hover:border-blue-500/30 transition-colors">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-vyra-black">{MOCK_KPIS.approvedConcepts}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Approved Concepts</div>
          </div>
        </Card>
        
        <Card className="p-6 border-soft-gray flex items-start gap-4 hover:border-cyan-500/30 transition-colors">
          <div className="p-3 bg-cyan-100 text-cyan-600 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-vyra-black">{MOCK_KPIS.creatorMatchRate}%</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Creator Match Rate</div>
          </div>
        </Card>

        <Card className="p-6 border-soft-gray flex items-start gap-4 hover:border-green-500/30 transition-colors">
          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <PlaySquare className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-vyra-black">{MOCK_KPIS.outputReady}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Ready This Week</div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Outputs Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-vyra-black tracking-tight flex items-center gap-2">
              <FileImage className="w-5 h-5 text-gray-400" /> Recent Outputs
            </h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/app/assets')}>View all</Button>
          </div>
          
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {MOCK_ASSETS.slice(0, 3).map(asset => (
              <Card key={asset.id} className="overflow-hidden border-soft-gray group cursor-pointer hover:shadow-lg transition-all">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <img src={asset.thumb} alt={asset.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2">
                    <Badge variant={asset.status === 'Approved' ? 'success' : 'default'} className="bg-white/90 text-vyra-black backdrop-blur-sm border-none shadow-sm">{asset.status}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-vyra-black truncate mb-1">{asset.title}</div>
                  <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                    <span>{asset.brand}</span>
                    <span className="bg-soft-gray px-1.5 py-0.5 rounded">{asset.tag}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Plan Snapshot & Workflow Preview */}
        <div className="space-y-6">
          <Card className="p-6 border-soft-gray">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold tracking-tight text-vyra-black uppercase">Current Plan</h3>
              <Badge variant="glow" className="bg-slate-core text-glow-cyan">Grow Plan</Badge>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-gray-500">Video Output limit</span>
                  <span className="text-vyra-black">8 / 10 Used</span>
                </div>
                <div className="w-full h-2 bg-soft-gray rounded-full overflow-hidden">
                  <div className="h-full bg-vyra-violet w-[80%] rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f1423] rounded-xl p-4 text-white relative overflow-hidden mb-4">
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-glow-cyan/20 blur-[30px] rounded-full" />
              <div className="flex items-center gap-2 text-xs font-mono text-glow-cyan mb-2">
                <Sparkles className="w-3 h-3" /> Immersive Storefront
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">Elevate your brand with a dedicated premium digital experience.</p>
              <Button variant="secondary" size="sm" className="w-full h-8 text-xs font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20">Ask for Details</Button>
            </div>
            
            <Button variant="ghost" className="w-full text-vyra-violet text-sm">Upgrade Plan</Button>
          </Card>
        </div>
      </div>

    </div>
  );
}
