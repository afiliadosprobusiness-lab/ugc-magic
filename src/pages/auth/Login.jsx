import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'

export default function Login() {
  const { language, setLanguage } = useLanguage()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    window.setTimeout(() => {
      setIsLoading(false)
      navigate('/app/overview')
    }, 1200)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050814] px-4 py-10 text-white md:px-8">
      <div className="grid w-full max-w-[1180px] gap-6 lg:grid-cols-[0.82fr,1.18fr]">
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

          <Badge variant="glow" className="mt-10">{language === 'en' ? 'Workspace access' : 'Acceso al workspace'}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            {language === 'en' ? 'Log in to keep the angle workflow moving.' : 'Inicia sesion para mantener activo el workflow de angulos.'}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/56">
            {language === 'en'
              ? 'Access the premium workspace where angles become realistic UGC variations and grouped testing outputs.'
              : 'Accede al workspace premium donde los angulos se convierten en variaciones UGC realistas y outputs agrupados para testing.'}
          </p>

          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Work email' : 'Email de trabajo'}</span>
              <Input type="email" placeholder="team@brand.com" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Password' : 'Contrasena'}</span>
              <Input type="password" placeholder="demo-password" required />
            </label>
            <Button type="submit" variant="primary" className="mt-2 w-full" isLoading={isLoading}>
              {language === 'en' ? 'Enter workspace' : 'Entrar al workspace'}
            </Button>
          </form>

          <p className="mt-6 text-sm text-white/48">
            {language === 'en' ? 'Need a workspace?' : 'Necesitas un workspace?'}{' '}
            <Link to="/register" className="font-semibold text-white">{language === 'en' ? 'Create one' : 'Crear uno'}</Link>
          </p>
        </Card>

        <Card className="border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(97,121,255,0.18),transparent_34%),rgba(255,255,255,0.03)] p-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.24em] text-white/35">Inside Vyra</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              {language === 'en' ? 'A focused workflow for ad-ready creative.' : 'Un workflow enfocado para creative listo para ads.'}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ['Angle Engine', 'Generate structured angles from offer, audience, and objective.'],
                ['UGC Creator', 'Turn the selected angle into controlled UGC variations.'],
                ['Library', 'Keep grouped outputs organized around the angle that created them.'],
                ['Testing clarity', 'Reduce guesswork by keeping variations tied to a real creative direction.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[22px] border border-white/10 bg-black/20 p-5">
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/56">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
