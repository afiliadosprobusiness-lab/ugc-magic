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
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Billing & Plans</h1>
          <p className="text-sm text-gray-500">Manage your subscription and usage limits.</p>
        </div>
      </div>

      {/* Snapshot */}
      <div className="grid md:grid-cols-3 gap-6">
         <Card className="p-6 border-soft-gray col-span-2 flex flex-col justify-center">
            <h3 className="font-semibold text-vyra-black mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-vyra-violet" /> Current Cycle Usage
            </h3>
            <div className="flex justify-between items-end mb-4 mt-6">
              <div>
                <div className="text-3xl font-bold text-vyra-black tracking-tight leading-none mb-1">8 <span className="text-lg text-gray-400 font-medium">/ 10</span></div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Videos Exported</div>
              </div>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none shadow-sm pb-1">Approaching limit</Badge>
            </div>
            
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-blue-400 via-vyra-violet to-orange-400 w-[80%] rounded-full shadow-inner" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Your limit resets on Nov 1st.</p>
         </Card>

         <Card className="p-6 border-vyra-violet/30 bg-[#0f1423] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-glow-cyan/20 blur-[50px] rounded-full pointer-events-none" />
            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <Badge variant="glow" className="bg-vyra-black/80 backdrop-blur-sm border-white/10 px-2 py-0 border">Premium Feature</Badge>
                <Store className="w-5 h-5 text-glow-cyan opacity-80" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10">Immersive Storefront</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">Elevate your brand perception with a dedicated premium digital experience.</p>
            </div>
            <Button variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white font-semibold shadow-lg shadow-glow-cyan/5 border">
              Learn More
            </Button>
         </Card>
      </div>

      {/* Plan Cards */}
      <div>
        <h2 className="text-xl font-bold text-vyra-black mb-6 mt-8">Available Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`flex flex-col p-8 transition-transform 
                ${plan.isActive ? 'border-vyra-violet shadow-[0_0_30px_rgba(124,58,237,0.1)] ring-1 ring-vyra-violet/50 relative overflow-hidden bg-white' : 'border-soft-gray hover:border-gray-400 bg-white'}`}
            >
              {plan.isActive && (
                <div className="absolute top-0 right-0 py-1 px-8 bg-vyra-violet text-white text-[10px] font-bold uppercase tracking-widest rotate-45 translate-x-8 translate-y-3 shadow-md">
                  Current
                </div>
              )}
              
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-vyra-black">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-soft-gray">
                {plan.videos} per month
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isActive ? 'text-vyra-violet' : 'text-gray-400'}`} />
                    <span className="text-gray-600 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isActive ? 'secondary' : 'primary'} 
                className={`w-full font-semibold ${plan.isActive ? 'border border-soft-gray bg-ice-white text-gray-500 pointer-events-none' : 'shadow-md shadow-vyra-violet/20'}`}
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
