import React from 'react'
import { Globe, Sparkles, Video } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Button } from '../ui/Button'
import { SidebarTrigger } from '../blocks/sidebar'

const pageMeta = {
  '/app/overview': {
    title: { en: 'Creative workflow overview', es: 'Resumen del flujo creativo' },
    description: {
      en: 'Track angle output, active drafts, and what is ready for testing next.',
      es: 'Sigue angulos, drafts activos y lo que esta listo para testear.',
    },
  },
  '/app/angles': {
    title: { en: 'Angle Engine', es: 'Motor de angulos' },
    description: {
      en: 'Generate structured selling angles from offer, audience, and objective.',
      es: 'Genera angulos estructurados desde oferta, audiencia y objetivo.',
    },
  },
  '/app/ugc': {
    title: { en: 'UGC Creator', es: 'Creador UGC' },
    description: {
      en: 'Turn a selected angle into controlled, campaign-ready UGC variations.',
      es: 'Convierte un angulo seleccionado en variaciones UGC listas para campana.',
    },
  },
  '/app/library': {
    title: { en: 'Library', es: 'Libreria' },
    description: {
      en: 'Organize angle groups, scripts, and test-ready outputs in one place.',
      es: 'Organiza grupos por angulo, scripts y outputs listos para testeo.',
    },
  },
  '/app/settings': {
    title: { en: 'Settings', es: 'Configuracion' },
    description: {
      en: 'Keep workspace and output defaults aligned across every variation.',
      es: 'Mantiene los defaults del workspace y outputs alineados.',
    },
  },
}

export default function Topbar() {
  const { language, setLanguage } = useLanguage()
  const { activeBrand, state, setActiveBrand, selectedAngle } = useVyraApp()
  const navigate = useNavigate()
  const location = useLocation()
  const currentPage = pageMeta[location.pathname] || pageMeta['/app/overview']

  return (
    <header className="sticky top-0 z-40 flex min-h-20 items-center justify-between border-b border-white/5 bg-[#050914]/88 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10" />

        <div className="min-w-0">
          <div className="text-sm font-semibold text-white md:text-base">
            {currentPage.title[language]}
          </div>
          <p className="hidden truncate text-sm text-white/45 md:block">
            {currentPage.description[language]}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
          <span className="text-xs uppercase tracking-[0.2em] text-white/35">
            {language === 'en' ? 'Brand' : 'Marca'}
          </span>
          <select
            value={activeBrand.id}
            onChange={(event) => setActiveBrand(event.target.value)}
            className="bg-transparent text-sm font-medium text-white outline-none"
          >
            {state.brands.map((brand) => (
              <option key={brand.id} value={brand.id} className="bg-[#07101D]">
                {brand.name}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          title="Toggle language"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden uppercase sm:inline">{language}</span>
        </button>

        <Button
          variant="secondary"
          size="sm"
          className="hidden sm:inline-flex"
          onClick={() => navigate('/app/angles')}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {language === 'en' ? 'Generate angles' : 'Generar angulos'}
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(selectedAngle ? '/app/ugc' : '/app/angles')}
        >
          <Video className="mr-2 h-4 w-4" />
          {language === 'en' ? 'Create UGC' : 'Crear UGC'}
        </Button>
      </div>
    </header>
  )
}
