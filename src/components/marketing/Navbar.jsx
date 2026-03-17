import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Globe, User, Sparkles, Layers, CreditCard, Crown, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t('nav.benefits', {defaultValue: "Benefits"}), href: '#benefits', icon: Sparkles },
    { name: t('nav.howItWorks', {defaultValue: "How it works"}), href: '#how-it-works', icon: Layers },
    { name: t('nav.plans', {defaultValue: "Plans"}), href: '#plans', icon: CreditCard },
    { name: t('nav.premium', {defaultValue: "Premium"}), href: '#premium', icon: Crown },
    { name: t('nav.results', {defaultValue: "Results"}), href: '#results', icon: TrendingUp },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-[#0B1020]/80 backdrop-blur-md border-white/10 shadow-lg py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer relative z-50"
            onClick={() => handleNavClick('/')}
          >
            <div className="w-8 h-8 rounded-lg bg-glow-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,184,255,0.5)]">
              <span className="font-bold text-vyra-black text-xl">V</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              VYRA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white hover:text-glow-cyan transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase font-medium">{language}</span>
            </button>
            
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            
            <Button 
              className="bg-glow-cyan text-vyra-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,184,255,0.3)] hover:shadow-[0_0_20px_rgba(0,184,255,0.5)]"
              onClick={() => handleNavClick('#plans')}
            >
              Empezar Ahora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0B1020]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                  >
                    <Icon size={20} className="text-glow-cyan" />
                    {link.name}
                  </button>
                );
              })}
              
              <div className="h-px bg-white/10 my-4" />
              
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-white/70 font-medium">Idioma</span>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-white"
                >
                  <Globe size={16} />
                  <span className="uppercase font-medium">{language}</span>
                </button>
              </div>

              <div className="flex flex-col gap-3 pt-4 px-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center border-white/20 text-white hover:bg-white/10 h-12"
                  onClick={() => navigate('/login')}
                >
                  <User size={18} className="mr-2" />
                  Log In
                </Button>
                <Button 
                  className="w-full justify-center bg-glow-cyan text-vyra-black hover:bg-cyan-400 h-12 shadow-[0_0_15px_rgba(0,184,255,0.2)]"
                  onClick={() => handleNavClick('#plans')}
                >
                  Empezar Ahora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
