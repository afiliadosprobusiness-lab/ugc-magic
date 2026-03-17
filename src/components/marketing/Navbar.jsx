import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { NavBar } from '../ui/tubelight-navbar';
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
    { icon: Home, name: "Home", onClick: () => navigate('/') },
    { icon: Sparkles, name: t('nav.benefits', {defaultValue: "Benefits"}), onClick: () => { window.location.hash = '#benefits' } },
    { icon: Layers, name: t('nav.howItWorks', {defaultValue: "How it works"}), onClick: () => { window.location.hash = '#how-it-works' } },
    { icon: CreditCard, name: t('nav.plans', {defaultValue: "Plans"}), onClick: () => { window.location.hash = '#plans' } },
    { icon: Crown, name: t('nav.premium', {defaultValue: "Premium"}), onClick: () => { window.location.hash = '#premium' } },
    { icon: TrendingUp, name: t('nav.results', {defaultValue: "Results"}), onClick: () => { window.location.hash = '#results' } },
    { icon: Globe, name: language.toUpperCase(), onClick: toggleLanguage },
    { icon: User, name: t('nav.login', {defaultValue: "Login"}), onClick: () => navigate('/login') },
  ];

  return <NavBar items={navItems} />;
}
