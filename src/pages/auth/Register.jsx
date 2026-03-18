import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'

export default function Register() {
  const { language, setLanguage } = useLanguage()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    window.setTimeout(() => {
      setIsLoading(false)
      navigate('/app/overview')
    }, 1400)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050814] px-4 py-10 text-white md:px-8">
      <div className="grid w-full max-w-[1180px] gap-6 lg:grid-cols-[1.02fr,0.98fr]">
        <Card className="border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(97,121,255,0.18),transparent_34%),rgba(255,255,255,0.03)] p-8">
          <div className="text-xs uppercase tracking-[0.24em] text-white/35">Why teams sign up</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            {language === 'en'
              ? 'Create a workspace built around angle generation and realistic UGC.'
              : 'Crea un workspace construido alrededor de angulos y UGC realista.'}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/56">
            {language === 'en'
              ? 'Vyra is not a prompt playground. It is a tighter creative system for teams that need more ideas, more variations, and faster testing.'
              : 'Vyra no es un playground de prompts. Es un sistema creativo mas ajustado para equipos que necesitan mas ideas, mas variaciones y testeo mas rapido.'}
          </p>
        </Card>

        <Card className="border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold">V</div>
              <div className="text-lg font-semibold tracking-tight">Vyra</div>
            </Link>
            <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
              {language.toUpperCase()}
            </button>
          </div>

          <Badge variant="glow" className="mt-10">{language === 'en' ? 'Create workspace' : 'Crear workspace'}</Badge>
          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Full name' : 'Nombre completo'}</span>
              <Input placeholder="Jane Doe" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Work email' : 'Email de trabajo'}</span>
              <Input type="email" placeholder="team@brand.com" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Workspace name' : 'Nombre del workspace'}</span>
              <Input placeholder="Vyra Growth Workspace" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Brand vertical' : 'Vertical de marca'}</span>
              <select className="h-12 rounded-[16px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none">
                <option className="bg-[#0A1322]">Skincare</option>
                <option className="bg-[#0A1322]">Supplements</option>
                <option className="bg-[#0A1322]">Ecommerce lifestyle</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Password' : 'Contrasena'}</span>
              <Input type="password" placeholder="demo-password" required />
            </label>
            <Button type="submit" variant="primary" className="mt-2 w-full" isLoading={isLoading}>
              {language === 'en' ? 'Launch workspace' : 'Lanzar workspace'}
            </Button>
          </form>

          <p className="mt-6 text-sm text-white/48">
            {language === 'en' ? 'Already have access?' : 'Ya tienes acceso?'}{' '}
            <Link to="/login" className="font-semibold text-white">{language === 'en' ? 'Log in' : 'Inicia sesion'}</Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
