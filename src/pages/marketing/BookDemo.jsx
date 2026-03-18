import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarClock, ShieldCheck, Sparkles } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const copy = {
  en: {
    eyebrow: 'Consultative booking',
    title: 'Book a working session around your creative bottleneck.',
    subtitle:
      'Use this call when you want to see how Vyra can fit a real brand, offer, and testing workflow. Discovery CTAs stay on-site. This page is only for commercial intent.',
    back: 'Back to site',
    frameTitle: 'Booking calendar',
    placeholderTitle: 'Calendar embed is not configured yet.',
    placeholderBody:
      'Add VITE_BOOK_DEMO_URL when your scheduling link is ready. Until then, this page stays branded and ready to drop the live booking experience in place.',
    trustTitle: 'What the session covers',
    trustItems: [
      'Current creative bottlenecks across ideas, testing velocity, and UGC production.',
      'How angle generation can feed more realistic variations without restarting production.',
      'What a tighter brand workflow looks like inside Vyra.',
    ],
    fitTitle: 'Best fit for',
    fitItems: ['Ecommerce brands', 'DTC teams', 'Media buyers', 'Performance agencies'],
  },
  es: {
    eyebrow: 'Reserva consultiva',
    title: 'Agenda una sesion de trabajo sobre tu cuello de botella creativo.',
    subtitle:
      'Usa esta llamada cuando quieras ver como Vyra puede encajar en una marca, oferta y workflow de testing real. Los CTAs de descubrimiento se quedan en el sitio. Esta pagina es solo para intencion comercial.',
    back: 'Volver al sitio',
    frameTitle: 'Calendario de reserva',
    placeholderTitle: 'El embed del calendario todavia no esta configurado.',
    placeholderBody:
      'Agrega VITE_BOOK_DEMO_URL cuando tu link de agenda este listo. Mientras tanto, esta pagina queda preparada para insertar la experiencia real sin salir de Vyra.',
    trustTitle: 'Que cubre la sesion',
    trustItems: [
      'Cuellos de botella creativos actuales en ideas, velocidad de testeo y produccion UGC.',
      'Como la generacion de angulos puede alimentar mas variaciones realistas sin reiniciar produccion.',
      'Como se veria un workflow de marca mas ajustado dentro de Vyra.',
    ],
    fitTitle: 'Ideal para',
    fitItems: ['Marcas ecommerce', 'Equipos DTC', 'Media buyers', 'Agencias performance'],
  },
}

export default function BookDemo() {
  const { language } = useLanguage()
  const t = copy[language]
  const bookingUrl = import.meta.env.VITE_BOOK_DEMO_URL

  return (
    <div className="min-h-screen bg-[#050814] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 py-6 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold">V</div>
            <div className="text-lg font-semibold tracking-tight">Vyra</div>
          </div>
        </div>

        <div className="grid flex-1 gap-6 xl:grid-cols-[0.78fr,1.22fr]">
          <Card className="border-white/10 bg-white/[0.03] p-8">
            <Badge variant="glow">{t.eyebrow}</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{t.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/56">{t.subtitle}</p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3"><CalendarClock className="h-5 w-5 text-white" /><div className="text-sm font-semibold text-white">{t.trustTitle}</div></div>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/54">
                  {t.trustItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-white" /><div className="text-sm font-semibold text-white">{t.fitTitle}</div></div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.fitItems.map((item) => (
                    <Badge key={item} variant="glass">{item}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.03] p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.frameTitle}</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">Vyra booking workspace</h2>
              </div>
              <Badge variant="glass">{bookingUrl ? 'Live embed' : 'Placeholder'}</Badge>
            </div>

            {bookingUrl ? (
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                <iframe src={bookingUrl} title="Vyra booking calendar" className="min-h-[760px] w-full bg-white" />
              </div>
            ) : (
              <div className="flex min-h-[760px] flex-col items-center justify-center rounded-[28px] border border-dashed border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_40%)] px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"><Sparkles className="h-6 w-6" /></div>
                <h3 className="mt-6 text-3xl font-semibold text-white">{t.placeholderTitle}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/56">{t.placeholderBody}</p>
                <div className="mt-8">
                  <Button asChild variant="secondary">
                    <Link to="/">{t.back}</Link>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
