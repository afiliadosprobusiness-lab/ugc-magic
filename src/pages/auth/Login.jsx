import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Globe, ArrowRight } from 'lucide-react';

export default function Login() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Fake authentication delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-vyra-black flex flex-col md:flex-row relative overflow-hidden">
      {/* Background glow behind card */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Left side: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-12 relative z-10">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-16">
            <Link to="/" className="text-xl tracking-tight font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-glow-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,184,255,0.3)]">
                <span className="font-bold text-vyra-black text-xl">V</span>
              </div>
              VYRA
            </Link>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
              {t('hero.title').split(' ').slice(0, 5).join(' ')}...
            </h1>
            <p className="text-sm text-white/50">
              {t('nav.login')} to manage your structured workflow.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">{t('auth.email')}</label>
              <Input type="email" placeholder="name@brand.com" required />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-white/70">{t('auth.password')}</label>
                <a href="#" className="text-xs text-glow-cyan hover:underline">Forgot?</a>
              </div>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="remember" className="rounded bg-slate-core border-white/10 text-glow-cyan focus:ring-glow-cyan" />
              <label htmlFor="remember" className="text-sm text-white/50">Remember me</label>
            </div>

            <Button type="submit" variant="primary" className="w-full mt-4" isLoading={isLoading}>
              {t('nav.login')}
            </Button>
          </form>

          <div className="mt-8 text-sm text-white/40">
            {language === 'en' ? 'New to Vyra?' : '¿Nuevo en Vyra?'}{' '}
            <Link to="/register" className="text-white font-semibold hover:text-glow-cyan hover:underline transition-colors">
              {t('auth.register')}
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Visual */}
      <div className="hidden md:flex flex-1 bg-slate-core/30 text-white relative items-center justify-center p-12 overflow-hidden border-l border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] to-slate-core opacity-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        
        <div className="relative z-10 max-w-md">
          <div className="glass-panel p-8 rounded-3xl mb-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-2 h-2 rounded-full bg-glow-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" />
              <div className="font-mono text-xs uppercase tracking-widest text-white/50">System Status</div>
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium group cursor-default">
              Structured workflows <ArrowRight className="w-4 h-4 text-glow-cyan opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium group cursor-default">
              Better consistency <ArrowRight className="w-4 h-4 text-glow-cyan opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium group cursor-default">
              Faster output <ArrowRight className="w-4 h-4 text-glow-cyan opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
          
          <p className="text-lg text-white/60 font-medium leading-relaxed max-w-sm">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
}
