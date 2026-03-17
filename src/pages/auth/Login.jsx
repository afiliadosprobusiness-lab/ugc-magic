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
    <div className="min-h-screen bg-ice-white flex flex-col md:flex-row relative">
      {/* Background glow behind card */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-vyra-violet/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Left side: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-12 relative z-10">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-16">
            <Link to="/" className="text-xl tracking-tight font-bold text-vyra-black">
              VYRA
            </Link>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-vyra-violet transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          <Card className="p-8 border-soft-gray bg-white/80 backdrop-blur-xl shadow-xl">
            <h1 className="text-2xl font-bold tracking-tight text-vyra-black mb-2">
              {t('login.title')}
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Sign in to manage your structured workflow.
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-vyra-black">{t('login.email')}</label>
                <Input type="email" placeholder="name@brand.com" required />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-vyra-black">{t('login.password')}</label>
                  <a href="#" className="text-xs text-vyra-violet hover:underline">Forgot?</a>
                </div>
                <Input type="password" placeholder="••••••••" required />
              </div>

              <Button type="submit" variant="primary" className="w-full mt-2" isLoading={isLoading}>
                {t('login.submit')}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              New to Vyra?{' '}
              <Link to="/register" className="text-vyra-black font-semibold hover:underline">
                {t('login.register')}
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Right side: Visual */}
      <div className="hidden md:flex flex-1 bg-vyra-black text-white relative items-center justify-center p-12 overflow-hidden border-l border-slate-core">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1222] to-vyra-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        
        <div className="relative z-10 max-w-md">
          <div className="bg-slate-core/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl mb-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <div className="font-mono text-xs uppercase tracking-widest text-gray-400">System Status</div>
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium">
              Structured workflows <ArrowRight className="w-4 h-4 text-glow-cyan" />
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium">
              Better consistency <ArrowRight className="w-4 h-4 text-glow-cyan" />
            </div>
            <div className="flex items-center justify-between text-white/90 font-medium">
              Faster output <ArrowRight className="w-4 h-4 text-glow-cyan" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('hero.title')}
          </h2>
        </div>
      </div>
    </div>
  );
}
