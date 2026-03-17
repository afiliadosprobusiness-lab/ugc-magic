import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Search, Bell, Globe, Plus, ChevronDown } from 'lucide-react';

export default function Topbar() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-soft-gray bg-white flex items-center justify-between px-6 sticky top-0 z-40">
      
      {/* Search & Workspace */}
      <div className="flex items-center gap-6 flex-1">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-soft-gray cursor-pointer hover:border-gray-400 transition-colors">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-500" />
          <span className="text-sm font-medium">Acme Skincare</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="relative w-full max-w-sm hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Search assets, requests..." 
            className="pl-9 bg-ice-white border-transparent focus-visible:bg-white" 
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="hidden md:flex items-center gap-1.5 text-sm text-gray-500 hover:text-vyra-violet transition-colors px-2 py-1 rounded-md"
        >
          <Globe className="w-4 h-4" />
          <span className="uppercase font-medium">{language}</span>
        </button>
        
        <button className="relative p-2 text-gray-500 hover:text-vyra-black hover:bg-soft-gray rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-vyra-violet rounded-full border border-white" />
        </button>
        
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 ml-2 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        
        <div className="w-px h-6 bg-soft-gray mx-2" />
        
        <Button 
          variant="primary" 
          size="sm" 
          className="gap-2 shadow-vyra-violet/20"
          onClick={() => navigate('/app/requests/new')}
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline-block">{t('app.createRequest')}</span>
        </Button>
      </div>

    </header>
  );
}
