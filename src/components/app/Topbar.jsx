import React from 'react';
import { Search, Bell, Globe, Plus } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '../blocks/sidebar';

export default function Topbar() {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 bg-ice-white/80 backdrop-blur-md border-b border-soft-gray/50 h-16 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-soft-gray p-2 rounded-md transition-colors" />
        
        {/* Workspace selector mock */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-white px-3 py-1.5 rounded-lg border border-transparent hover:border-soft-gray transition-all">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-vyra-violet to-electric-blue flex flex-col items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <span className="font-medium text-sm text-vyra-black">Auren Skin</span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
        {/* Search */}
        <div className="relative hidden md:block max-w-sm w-full mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder={t('app.search')} 
            className="w-full pl-9 h-9 rounded-full bg-white border-soft-gray focus-visible:ring-electric-blue focus-visible:border-electric-blue text-vyra-black placeholder:text-gray-400"
          />
        </div>

        {/* Global actions */}
        <button className="relative p-2 text-gray-500 hover:text-vyra-black hover:bg-white rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-vyra-violet ring-2 ring-ice-white"></span>
        </button>

        <button 
          onClick={toggleLanguage}
          className="p-2 text-gray-500 hover:text-vyra-black hover:bg-white rounded-full transition-colors flex items-center gap-1"
          title="Toggle Language"
        >
          <Globe className="h-5 w-5" />
          <span className="text-xs font-bold uppercase hidden sm:inline-block">{language}</span>
        </button>

        {/* User dropdown mock */}
        <div className="h-8 w-8 rounded-full bg-slate-core text-white flex items-center justify-center font-bold text-sm cursor-pointer ring-2 ring-white ml-1">
          K
        </div>

        {/* Main CTA */}
        <Button 
          variant="primary" 
          size="sm" 
          className="ml-2 hidden sm:flex"
          onClick={() => navigate('/app/requests/new')}
        >
          <Plus className="h-4 w-4 mr-1" />
          {t('nav.createRequest')}
        </Button>
      </div>
    </header>
  );
}
