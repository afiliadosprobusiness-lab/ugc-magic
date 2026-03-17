import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Globe, Layers } from 'lucide-react';

export default function Register() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Fake workspace creation delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-vyra-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow behind card */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vyra-violet/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-between items-center mb-8">
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

        <Card className="p-8 border-white/10 bg-slate-core/30 backdrop-blur-xl shadow-2xl mb-6">
          <div className="text-center mb-8">
            <Badge variant="glow" className="mb-4">Workspace Setup</Badge>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {t('auth.startWorkspace')}
            </h1>
            <p className="text-sm text-white/50 mt-2">
              Join visual brands shipping structured UGC.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Full Name</label>
              <Input type="text" placeholder="Jane Doe" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">{t('auth.email')}</label>
              <Input type="email" placeholder="jane@brand.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Brand Name</label>
              <Input type="text" placeholder="Acme Skincare" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Brand Category</label>
              <select className="flex h-12 w-full rounded-[16px] border border-white/10 bg-slate-core/50 px-4 py-2 text-sm text-white shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glow-cyan focus-visible:border-glow-cyan/50 hover:border-white/20 transition-all duration-300">
                <option value="" className="bg-slate-core">Select industry</option>
                <option value="beauty" className="bg-slate-core">Beauty & Skincare</option>
                <option value="jewelry" className="bg-slate-core">Jewelry</option>
                <option value="fashion" className="bg-slate-core">Fashion & Accessories</option>
                <option value="luxury" className="bg-slate-core">Luxury Product</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">{t('auth.password')}</label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="terms" required className="mt-1 rounded bg-slate-core border-white/10 text-glow-cyan focus:ring-glow-cyan" />
              <label htmlFor="terms" className="text-xs text-white/50 leading-relaxed">
                I agree to the Terms of Service and Privacy Policy. I understand this is a mock setup.
              </label>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2" isLoading={isLoading}>
                {!isLoading && <Layers className="w-4 h-4" />}
                {t('auth.register')}
              </Button>
            </div>
          </form>
        </Card>

        <div className="text-center text-sm text-white/40">
          Already have an account?{' '}
          <Link to="/login" className="text-white font-semibold hover:text-glow-cyan hover:underline transition-colors">
            {t('nav.login')} here
          </Link>
        </div>
      </div>
    </div>
  );
}
