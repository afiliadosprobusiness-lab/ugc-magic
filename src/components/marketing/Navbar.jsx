import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Dock } from '../ui/dock-two';
import { 
  Home, 
  Sparkles, 
  Layers, 
  CreditCard, 
  Crown, 
  TrendingUp, 
  Globe, 
  User, 
  Calendar 
} from 'lucide-react';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { icon: Home, label: "Home", onClick: () => navigate('/') },
    { icon: Sparkles, label: t('nav.benefits', {defaultValue: "Benefits"}), onClick: () => window.location.hash = '#benefits' },
    { icon: Layers, label: t('nav.howItWorks', {defaultValue: "How it works"}), onClick: () => window.location.hash = '#how-it-works' },
    { icon: CreditCard, label: t('nav.plans', {defaultValue: "Plans"}), onClick: () => window.location.hash = '#plans' },
    { icon: Crown, label: t('nav.premium', {defaultValue: "Premium"}), onClick: () => window.location.hash = '#premium' },
    { icon: TrendingUp, label: t('nav.results', {defaultValue: "Results"}), onClick: () => window.location.hash = '#results' },
    { icon: Globe, label: language.toUpperCase(), onClick: toggleLanguage },
    { icon: User, label: t('nav.login', {defaultValue: "Login"}), onClick: () => navigate('/login') },
  ];

  return <Dock items={navItems} />;
}
