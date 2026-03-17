import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050812] text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Pre-footer CTA */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t('final.title')}
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            {t('final.subtitle')}
          </p>
          <Button variant="primary" size="lg">
            {t('hero.cta.primary')}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 mb-16 text-sm">
          <div className="col-span-2 md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <div className="text-2xl font-bold tracking-tight text-white mb-4">VYRA</div>
            <p className="text-gray-500 max-w-xs">{t('hero.subtitle').split('.')[0]}.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#how-it-works" className="hover:text-vyra-violet transition-colors">{t('nav.howItWorks')}</a></li>
              <li><a href="#benefits" className="hover:text-vyra-violet transition-colors">{t('nav.benefits')}</a></li>
              <li><a href="#plans" className="hover:text-vyra-violet transition-colors">{t('nav.plans')}</a></li>
              <li><a href="#premium" className="hover:text-vyra-violet transition-colors">{t('nav.premium')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#results" className="hover:text-vyra-violet transition-colors">{t('nav.results')}</a></li>
              <li><a href="/login" className="hover:text-vyra-violet transition-colors">{t('nav.login')}</a></li>
              <li><a href="#" className="hover:text-vyra-violet transition-colors">Book Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-vyra-violet transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-vyra-violet transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-600">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Operational
          </div>
          <p>© {new Date().getFullYear()} Vyra Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
