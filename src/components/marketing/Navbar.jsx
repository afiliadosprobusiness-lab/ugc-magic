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
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-full max-w-5xl",
          scrolled 
            ? "bg-white/80 backdrop-blur-md border border-white/20 custom-shadow" 
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-8">
          <Link to="/" className={cn("text-xl tracking-tight font-bold transition-colors", scrolled ? "text-vyra-black" : "text-white")}>
            VYRA
          </Link>
          <div className={cn("hidden md:flex items-center gap-6 text-sm font-medium transition-colors", scrolled ? "text-vyra-black/80" : "text-white/80")}>
            <a href="#benefits" className="hover:text-vyra-violet transition-colors">{t('nav.benefits')}</a>
            <a href="#how-it-works" className="hover:text-vyra-violet transition-colors">{t('nav.howItWorks')}</a>
            <a href="#plans" className="hover:text-vyra-violet transition-colors">{t('nav.plans')}</a>
            <a href="#premium" className="hover:text-vyra-violet transition-colors">{t('nav.premium')}</a>
            <a href="#results" className="hover:text-vyra-violet transition-colors">{t('nav.results')}</a>
          </div>
        </div>

        <div className={cn("flex items-center gap-4 transition-colors", scrolled ? "text-vyra-black/80" : "text-white/80")}>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium hover:text-vyra-violet transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>
          
          <Link to="/login" className="hidden md:block text-sm font-medium hover:text-vyra-violet transition-colors">
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
