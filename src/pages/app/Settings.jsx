import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { Save, User, Building, Bell, Globe } from 'lucide-react';

export default function Settings() {
  const { t, language, setLanguage } = useLanguage();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = ['Profile', 'Workspace', 'Notifications'];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Settings</h1>
          <p className="text-sm text-white/50 font-mono tracking-wide">Manage your profile, team, and workspace preferences.</p>
        </div>
        
        <Button variant="primary" onClick={handleSave} isLoading={isSaving} className="bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-semibold border-none">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <Card className="border-white/5 bg-[#0B1020] overflow-hidden shadow-2xl p-0">
        {/* Nav Tabs */}
        <div className="bg-black/20 border-b border-white/5 flex overflow-x-auto scrollbar-hide">
           {tabs.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-4 text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                 activeTab === tab 
                   ? 'border-glow-cyan text-glow-cyan bg-glow-cyan/5 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' 
                   : 'border-transparent text-white/40 hover:text-white hover:bg-white/5'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        <div className="p-8">
          
          {/* PROFILE */}
          {activeTab === 'Profile' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                <div className="w-24 h-24 rounded-full bg-black/40 border border-white/10 relative overflow-hidden group cursor-pointer shadow-sm shrink-0">
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" alt="Avatar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                     <span className="text-white text-xs font-semibold">Change</span>
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">Jane Doe</h3>
                  <p className="text-sm text-white/50 mb-3 font-mono">jane@brand.com</p>
                  <Button variant="outline" size="sm" className="h-8 text-xs font-semibold border-white/10 text-white/70 hover:bg-white/5 hover:text-white transition-all bg-transparent">Update Avatar</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 flex items-center gap-2"><User className="w-4 h-4 text-white/40" /> Full Name</label>
                  <Input type="text" defaultValue="Jane Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-glow-cyan/50 font-medium h-10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 flex items-center gap-2">Email Address</label>
                  <Input type="email" defaultValue="jane@brand.com" className="bg-white/[0.02] border-white/5 text-white/30 font-medium cursor-not-allowed h-10" disabled />
                </div>
              </div>

               <div className="space-y-2 max-w-md pt-4">
                  <label className="text-sm font-semibold text-white/70 flex items-center gap-2"><Globe className="w-4 h-4 text-white/40" /> Interface Language</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => setLanguage('en')}
                      className={`p-3 rounded-lg border text-center cursor-pointer transition-colors font-medium text-sm ${language === 'en' ? 'border-glow-cyan bg-glow-cyan/10 text-glow-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white bg-white/[0.02]'}`}
                    >
                      English
                    </div>
                    <div 
                      onClick={() => setLanguage('es')}
                      className={`p-3 rounded-lg border text-center cursor-pointer transition-colors font-medium text-sm ${language === 'es' ? 'border-glow-cyan bg-glow-cyan/10 text-glow-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white bg-white/[0.02]'}`}
                    >
                      Español
                    </div>
                  </div>
                </div>
            </div>
          )}

          {/* WORKSPACE */}
          {activeTab === 'Workspace' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Brand Profile</h3>
                <p className="text-sm text-white/50 mb-6">These details shape how we match direction and creators for your brand.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70 flex items-center gap-2"><Building className="w-4 h-4 text-white/40" /> Brand Name</label>
                    <Input type="text" defaultValue="Acme Skincare" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-glow-cyan/50 font-medium h-10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70 flex items-center gap-2">Industry</label>
                    <select className="flex h-10 w-full rounded-md border border-white/10 bg-[#0B1020] px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glow-cyan/50 text-white cursor-pointer hover:bg-white/5 transition-colors">
                      <option value="beauty" className="bg-[#0B1020]">Beauty & Skincare</option>
                      <option value="jewelry" className="bg-[#0B1020]">Jewelry</option>
                      <option value="fashion" className="bg-[#0B1020]">Fashion & Accessories</option>
                      <option value="luxury" className="bg-[#0B1020]">Luxury Product</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8">
                 <h3 className="text-lg font-bold text-white mb-1">Default Fallbacks</h3>
                 <p className="text-sm text-white/50 mb-6 font-mono tracking-wide">Your standard requirements applied to new requests if left empty.</p>
                 
                 <div className="bg-black/20 border border-white/5 rounded-xl p-6 space-y-4 shadow-inner">
                   <div className="flex justify-between items-center pb-4 border-b border-white/5">
                     <div>
                       <div className="font-semibold text-white text-sm">Target Resolution</div>
                       <div className="text-xs text-white/40 font-mono mt-1">Default aspect ratio for video outputs.</div>
                     </div>
                     <Badge variant="glass" className="bg-white/5 border-white/10 text-white/70 font-mono text-[10px] tracking-widest px-2">9:16 VERTICAL</Badge>
                   </div>
                   <div className="flex justify-between items-center pt-2">
                     <div>
                       <div className="font-semibold text-white text-sm">Delivery Mode</div>
                       <div className="text-xs text-white/40 font-mono mt-1">Speed vs specific creator demands.</div>
                     </div>
                     <Badge variant="glass" className="bg-white/5 border-white/10 text-white/70 font-mono text-[10px] tracking-widest px-2">STANDARD TURNAROUND</Badge>
                   </div>
                 </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === 'Notifications' && (
            <div className="space-y-8 animate-in fade-in max-w-2xl text-sm">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between p-4 border border-white/10 bg-white/[0.02] rounded-xl hover:border-glow-cyan/30 hover:bg-glow-cyan/5 transition-all cursor-pointer shadow-sm">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2"><Bell className="w-4 h-4 text-glow-cyan drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" /> Request Approvals</h4>
                    <p className="text-white/40 mt-1 font-mono text-xs">Get notified when variations are ready for review.</p>
                  </div>
                  <div className="w-10 h-6 bg-glow-cyan rounded-full relative shadow-[0_0_10px_rgba(34,211,238,0.3)] shrink-0">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-[#0B1020] rounded-full shadow-sm" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-white/10 bg-white/[0.02] rounded-xl hover:border-glow-cyan/30 hover:bg-glow-cyan/5 transition-all cursor-pointer shadow-sm">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2"><Bell className="w-4 h-4 text-glow-cyan drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" /> Production Updates</h4>
                    <p className="text-white/40 mt-1 font-mono text-xs">Status changes from creator matching to output delivery.</p>
                  </div>
                  <div className="w-10 h-6 bg-glow-cyan rounded-full relative shadow-[0_0_10px_rgba(34,211,238,0.3)] shrink-0">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-[#0B1020] rounded-full shadow-sm" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-white/5 bg-black/40 rounded-xl hover:border-white/20 transition-all cursor-pointer">
                  <div>
                    <h4 className="font-bold text-white/50 flex items-center gap-2"><Bell className="w-4 h-4 text-white/30" /> Marketing & Ops</h4>
                    <p className="text-white/30 mt-1 font-mono text-xs">Updates on platform changes or feature builds.</p>
                  </div>
                  <div className="w-10 h-6 bg-white/10 rounded-full relative border border-white/5 shrink-0">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white/50 rounded-full shadow-sm" />
                  </div>
                </div>
              </div>

               <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10 mt-8 w-full border border-red-500/20 bg-red-500/5 transition-all outline-none ring-0">
                 Sign Out Everywhere
               </Button>
            </div>
          )}

        </div>
      </Card>

    </div>
  );
}
