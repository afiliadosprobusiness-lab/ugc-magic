import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none flex justify-center">
      <nav 
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-2xl md:rounded-full transition-all duration-300 w-full max-w-5xl",
          scrolled 
            ? "bg-[#0B1020]/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50" 
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl tracking-tight font-bold text-white transition-colors">
            VYRA
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70 transition-colors">
            <a href="#benefits" className="hover:text-white transition-colors">{t('nav.benefits')}</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">{t('nav.howItWorks')}</a>
            <a href="#plans" className="hover:text-white transition-colors">{t('nav.plans')}</a>
            <a href="#premium" className="hover:text-white transition-colors">{t('nav.premium')}</a>
            <a href="#results" className="hover:text-white transition-colors">{t('nav.results')}</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/80 transition-colors">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>
          
          <Link to="/login" className="hidden md:block text-sm font-medium hover:text-white transition-colors">
            {t('nav.login')}
          </Link>
          
          <Button variant="primary" size="sm" className="hidden md:inline-flex">
            {t('nav.bookDemo')}
          </Button>
        </div>
      </nav>
    </div>
  );
}
