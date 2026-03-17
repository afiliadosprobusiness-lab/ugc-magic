import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExpandableTabs } from '../ui/expandable-tabs';
import { 
  Home, 
  Sparkles, 
  Layers, 
  CreditCard, 
  Crown, 
  TrendingUp, 
  Globe, 
  User 
} from 'lucide-react';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { icon: Home, title: "Home", onClick: () => navigate('/') },
    { type: "separator" },
    { icon: Sparkles, title: t('nav.benefits', {defaultValue: "Benefits"}), onClick: () => { window.location.hash = '#benefits' } },
    { icon: Layers, title: t('nav.howItWorks', {defaultValue: "How it works"}), onClick: () => { window.location.hash = '#how-it-works' } },
    { icon: CreditCard, title: t('nav.plans', {defaultValue: "Plans"}), onClick: () => { window.location.hash = '#plans' } },
    { type: "separator" },
    { icon: Crown, title: t('nav.premium', {defaultValue: "Premium"}), onClick: () => { window.location.hash = '#premium' } },
    { icon: TrendingUp, title: t('nav.results', {defaultValue: "Results"}), onClick: () => { window.location.hash = '#results' } },
    { type: "separator" },
    { icon: Globe, title: language.toUpperCase(), onClick: toggleLanguage },
    { icon: User, title: t('nav.login', {defaultValue: "Login"}), onClick: () => navigate('/login') },
  ];

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:px-4 w-full">
      <div className="pointer-events-auto max-w-[100vw] overflow-x-auto no-scrollbar">
        <ExpandableTabs tabs={navItems} />
      </div>
    </div>
  );
}
