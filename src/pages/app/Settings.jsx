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
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-1">Settings</h1>
          <p className="text-sm text-gray-500">Manage your profile, team, and workspace preferences.</p>
        </div>
        
        <Button variant="primary" onClick={handleSave} isLoading={isSaving} className="shadow-lg shadow-vyra-violet/20">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <Card className="border-soft-gray overflow-hidden">
        {/* Nav Tabs */}
        <div className="bg-gray-50 border-b border-soft-gray flex overflow-x-auto scrollbar-hide">
           {tabs.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-4 text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                 activeTab === tab 
                   ? 'border-vyra-violet text-vyra-violet bg-vyra-violet/5' 
                   : 'border-transparent text-gray-500 hover:text-vyra-black hover:bg-gray-100'
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
              <div className="flex items-center gap-6 pb-8 border-b border-soft-gray">
                <div className="w-24 h-24 rounded-full bg-slate-200 border border-slate-300 relative overflow-hidden group cursor-pointer shadow-sm">
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" alt="Avatar" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white text-xs font-semibold">Change</span>
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Jane Doe</h3>
                  <p className="text-sm text-gray-500 mb-3">jane@brand.com</p>
                  <Button variant="secondary" size="sm" className="h-8 text-xs font-semibold bg-white border-soft-gray shadow-sm">Update Avatar</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-vyra-black flex items-center gap-2"><User className="w-4 h-4" /> Full Name</label>
                  <Input type="text" defaultValue="Jane Doe" className="bg-ice-white font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-vyra-black flex items-center gap-2">Email Address</label>
                  <Input type="email" defaultValue="jane@brand.com" className="bg-ice-white font-medium text-gray-500" disabled />
                </div>
              </div>

               <div className="space-y-2 max-w-md pt-4">
                  <label className="text-sm font-semibold text-vyra-black flex items-center gap-2"><Globe className="w-4 h-4" /> Interface Language</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => setLanguage('en')}
                      className={`p-3 rounded-lg border text-center cursor-pointer transition-colors font-medium text-sm ${language === 'en' ? 'border-vyra-violet bg-vyra-violet/5 text-vyra-violet shadow-sm' : 'border-soft-gray text-gray-600 hover:border-gray-400'}`}
                    >
                      English
                    </div>
                    <div 
                      onClick={() => setLanguage('es')}
                      className={`p-3 rounded-lg border text-center cursor-pointer transition-colors font-medium text-sm ${language === 'es' ? 'border-vyra-violet bg-vyra-violet/5 text-vyra-violet shadow-sm' : 'border-soft-gray text-gray-600 hover:border-gray-400'}`}
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
                <h3 className="text-lg font-bold text-vyra-black mb-1">Brand Profile</h3>
                <p className="text-sm text-gray-500 mb-6">These details shape how we match direction and creators for your brand.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-vyra-black flex items-center gap-2"><Building className="w-4 h-4" /> Brand Name</label>
                    <Input type="text" defaultValue="Acme Skincare" className="bg-ice-white font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-vyra-black flex items-center gap-2">Industry</label>
                    <select className="flex h-10 w-full rounded-md border border-soft-gray bg-ice-white px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vyra-violet">
                      <option value="beauty" selected>Beauty & Skincare</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="fashion">Fashion & Accessories</option>
                      <option value="luxury">Luxury Product</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t border-soft-gray pt-8">
                 <h3 className="text-lg font-bold text-vyra-black mb-1">Default Fallbacks</h3>
                 <p className="text-sm text-gray-500 mb-6">Your standard requirements applied to new requests if left empty.</p>
                 
                 <div className="bg-gray-50 border border-soft-gray rounded-xl p-6 space-y-4">
                   <div className="flex justify-between items-center pb-4 border-b border-soft-gray">
                     <div>
                       <div className="font-semibold text-vyra-black text-sm">Target Resolution</div>
                       <div className="text-xs text-gray-500">Default aspect ratio for video outputs.</div>
                     </div>
                     <Badge variant="outline" className="bg-white">9:16 Vertical</Badge>
                   </div>
                   <div className="flex justify-between items-center pt-2">
                     <div>
                       <div className="font-semibold text-vyra-black text-sm">Delivery Mode</div>
                       <div className="text-xs text-gray-500">Speed vs specific creator demands.</div>
                     </div>
                     <Badge variant="outline" className="bg-white">Standard Turnaround</Badge>
                   </div>
                 </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === 'Notifications' && (
            <div className="space-y-8 animate-in fade-in max-w-2xl text-sm">
              <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-bold text-vyra-black flex items-center gap-2"><Bell className="w-4 h-4 text-electric-blue" /> Request Approvals</h4>
                  <p className="text-gray-500 mt-1">Get notified when variations are ready for review.</p>
                </div>
                <div className="w-10 h-6 bg-vyra-violet rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-bold text-vyra-black flex items-center gap-2"><Bell className="w-4 h-4 text-electric-blue" /> Production Updates</h4>
                  <p className="text-gray-500 mt-1">Status changes from creator matching to output delivery.</p>
                </div>
                <div className="w-10 h-6 bg-vyra-violet rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-bold text-vyra-black flex items-center gap-2"><Bell className="w-4 h-4 text-gray-400" /> Marketing & Ops</h4>
                  <p className="text-gray-500 mt-1">Updates on platform changes or feature builds.</p>
                </div>
                <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer border border-gray-300">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

               <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-8 w-full border border-red-200 bg-red-50/50">
                 Sign Out Everywhere
               </Button>
            </div>
          )}

        </div>
      </Card>

    </div>
  );
}
