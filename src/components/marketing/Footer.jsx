import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#050812] text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Pre-footer CTA */}
        <div className="text-center mb-24 max-w-2xl mx-auto hidden">
          {/* Hidden entirely. FinalCTA does the heavy lifting. */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 mb-16 text-sm">
          <div className="col-span-2 md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <div className="text-2xl font-bold tracking-tight text-white mb-4">VYRA</div>
            <p className="text-gray-500 max-w-xs text-xs md:text-sm">{language === 'en' ? 'The Creative Operating System for Visual Brands.' : 'El Sistema Operativo Creativo para Marcas Visual-First.'}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{language === 'en' ? 'Platform' : 'Plataforma'}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#how-it-works" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'Operating System' : 'Sistema Operativo'}</a></li>
              <li><a href="#benefits" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'System Benefits' : 'Beneficios de Sistema'}</a></li>
              <li><a href="#plans" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'Plans' : 'Planes'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{language === 'en' ? 'Company' : 'Compañía'}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#results" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'Success Stories' : 'Casos de Éxito'}</a></li>
              <li><a href="/login" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'Enter Studio' : 'Ingresar al Studio'}</a></li>
              <li><a href="#" className="hover:text-vyra-violet transition-colors">{language === 'en' ? 'Book Demo' : 'Agendar Demo'}</a></li>
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
            <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
            {language === 'en' ? 'System Operational' : 'Sistema Operativo Activo'}
          </div>
          <p>© {new Date().getFullYear()} Vyra Studio. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
}
