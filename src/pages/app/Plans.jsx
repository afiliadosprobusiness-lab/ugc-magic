import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { CheckCircle2, Store, CreditCard, Clock } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Starter',
      videos: "3 UGC Videos",
      features: ["Structured request workflow", "Basic creative direction", "Fast turnaround"],
      isActive: false
    },
    {
      name: 'Grow',
      videos: "10 UGC Videos",
      features: ["Structured creative direction", "Better variation workflow", "Designed for weekly output", "Priority matching"],
      isActive: true
    },
    {
      name: 'Scale',
      videos: "30 UGC Videos",
      features: ["Built for campaign volume", "Stronger consistency logic", "Better support for testing", "Dedicated account lead"],
      isActive: false
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 max-w-6xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Billing & Plans</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Manage your subscription and usage limits.</p>
        </div>
      </div>

      {/* Snapshot */}
      <div className="grid md:grid-cols-3 gap-6">
         <Card className="p-6 border-white/5 col-span-2 flex flex-col justify-center bg-[#0B1020] shadow-2xl">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-glow-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" /> Current Cycle Usage
            </h3>
            <div className="flex justify-between items-end mb-4 mt-6">
              <div>
                <div className="text-3xl font-bold text-white tracking-tight leading-none mb-1">8 <span className="text-lg text-white/30 font-medium">/ 10</span></div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-wider font-mono">Videos Exported</div>
              </div>
              <Badge className="bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] pb-1">Approaching limit</Badge>
            </div>
            
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-4 border border-white/10">
              <div className="h-full bg-gradient-to-r from-electric-blue via-glow-cyan to-orange-400 w-[80%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
            </div>
            <p className="text-sm text-white/40 font-medium">Your limit resets on Nov 1st.</p>
         </Card>

         <Card className="p-6 border-vyra-violet/30 bg-[#060913] text-white flex flex-col justify-between shadow-[0_0_40px_rgba(124,58,237,0.1)] relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-vyra-violet opacity-30 blur-[60px] rounded-full pointer-events-none" />
            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <Badge variant="glow" className="bg-[#0B1020]/90 backdrop-blur-sm border-vyra-violet/30 text-vyra-violet px-2 py-0 border">Premium Feature</Badge>
                <Store className="w-5 h-5 text-vyra-violet drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10 text-white">Immersive Storefront</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6 relative z-10">Elevate your brand perception with a dedicated premium digital experience.</p>
            </div>
            <Button variant="secondary" className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white font-semibold shadow-lg shadow-vyra-violet/10 border transition-all">
              Learn More
            </Button>
         </Card>
      </div>

      {/* Plan Cards */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 mt-8">Available Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`flex flex-col p-8 transition-transform 
                ${plan.isActive ? 'border-glow-cyan shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-glow-cyan/50 relative overflow-hidden bg-glow-cyan/[0.02]' : 'border-white/5 hover:border-white/20 bg-[#0B1020]'}`}
            >
              {plan.isActive && (
                <div className="absolute top-0 right-0 py-1 px-8 bg-glow-cyan text-[#0B1020] text-[10px] font-bold uppercase tracking-widest rotate-45 translate-x-8 translate-y-3 shadow-md">
                  Current
                </div>
              )}
              
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">
                {plan.name}
              </h3>
              <p className="text-sm text-white/40 mb-6 pb-6 border-b border-white/5 font-mono tracking-wide">
                {plan.videos} per month
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isActive ? 'text-glow-cyan drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'text-white/30'}`} />
                    <span className="text-white/70 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isActive ? 'secondary' : 'primary'} 
                className={`w-full font-semibold border-none transition-all ${plan.isActive ? 'bg-white/5 text-white/50 pointer-events-none' : 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}
              >
                {plan.isActive ? 'Active Plan' : 'Upgrade'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
