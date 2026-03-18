import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Boxes, CheckCircle2, Layers3, Sparkles, Video } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const copy = {
  en: {
    eyebrow: 'Angles first. UGC second.',
    title: 'Keep the creative bottleneck moving.',
    subtitle:
      'Vyra turns your current offer, audience, and objective into more angles, more UGC variations, and more outputs ready for testing.',
    metricLabels: ['Angles Generated', 'UGC Drafts', 'Active Products', 'Ready for Testing'],
    quickActions: 'Quick actions',
    savedDirections: 'Saved creative directions',
    recentVariations: 'Recent variations',
    ready: 'Ready for testing',
    openLibrary: 'Open Library',
    openAngles: 'Generate angles',
    openUgc: 'Create UGC',
  },
  es: {
    eyebrow: 'Angulos primero. UGC despues.',
    title: 'Mantiene en movimiento el cuello de botella creativo.',
    subtitle:
      'Vyra convierte tu oferta, audiencia y objetivo actual en mas angulos, mas variaciones UGC y mas outputs listos para testeo.',
    metricLabels: ['Angulos generados', 'Drafts UGC', 'Productos activos', 'Listos para testeo'],
    quickActions: 'Acciones rapidas',
    savedDirections: 'Direcciones creativas guardadas',
    recentVariations: 'Variaciones recientes',
    ready: 'Listo para testeo',
    openLibrary: 'Abrir libreria',
    openAngles: 'Generar angulos',
    openUgc: 'Crear UGC',
  },
}

export default function Overview() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const { activeBrand, metrics, groupedLibrary, readyForTesting, activeDrafts, selectAngle, selectDraft } =
    useVyraApp()
  const t = copy[language]
  const recentVariations = activeDrafts.slice(0, 3)
  const topDirectionGroups = groupedLibrary.slice(0, 3)
  const metricValues = [
    metrics.anglesGenerated,
    metrics.ugcDrafts,
    metrics.activeProducts,
    metrics.readyForTesting,
  ]

  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <Card className="overflow-hidden border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(97,121,255,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="glow" className="mb-4">
              {t.eyebrow}
            </Badge>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/58">{t.subtitle}</p>
          </div>

          <div className="grid min-w-[280px] gap-3 rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">{activeBrand.name}</div>
            <div className="text-2xl font-semibold text-white">{activeBrand.workspaceTag}</div>
            <p className="text-sm leading-relaxed text-white/50">
              {activeBrand.products[0].name} is the current driver for angle generation and UGC testing.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button variant="primary" size="sm" onClick={() => navigate('/app/angles')}>
                <Sparkles className="mr-2 h-4 w-4" />
                {t.openAngles}
              </Button>
              <Button variant="secondary" size="sm" onClick={() => navigate('/app/ugc')}>
                <Video className="mr-2 h-4 w-4" />
                {t.openUgc}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metricValues.map((value, index) => (
          <Card key={t.metricLabels[index]} className="border-white/8 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.metricLabels[index]}</div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</div>
            <div className="mt-2 text-sm text-white/45">
              {index === 0 && 'Structured directions ready to move into UGC.'}
              {index === 1 && 'Drafts carrying the angle into visible variation.'}
              {index === 2 && 'Products active across the current testing workspace.'}
              {index === 3 && 'Outputs grouped and ready for campaign testing.'}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.savedDirections}</div>
              <h2 className="mt-2 text-2xl font-semibold text-white">Grouped by angle, ready to expand.</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/app/library')}>
              {t.openLibrary}
            </Button>
          </div>

          <div className="grid gap-4">
            {topDirectionGroups.map(({ angle, variations }) => (
              <button
                key={angle.id}
                onClick={() => {
                  selectAngle(angle.id)
                  navigate('/app/library')
                }}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-left transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="violet">{angle.angleType}</Badge>
                  <Badge variant="glass">{angle.recommendedFormat}</Badge>
                  <Badge variant={variations.some((item) => item.testReady) ? 'success' : 'outline'}>
                    {variations.some((item) => item.testReady) ? t.ready : 'In progress'}
                  </Badge>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{angle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/52">{angle.coreIdea}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-white/35" />
                </div>
                <div className="mt-5 flex flex-wrap gap-6 text-sm text-white/48">
                  <span>{variations.length} variations</span>
                  <span>{angle.confidence}</span>
                  <span>{angle.tone}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <div className="grid gap-6">
          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.quickActions}</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">Move from angle to output.</h2>
              </div>
            </div>

            <div className="grid gap-3">
              <button
                onClick={() => navigate('/app/angles')}
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/20 px-4 py-4 text-left transition-colors hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">Generate fresh selling angles</div>
                    <div className="text-sm text-white/48">Start from product, offer, audience, objective, tone.</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/35" />
              </button>

              <button
                onClick={() => navigate('/app/ugc')}
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/20 px-4 py-4 text-left transition-colors hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">Turn an angle into UGC</div>
                    <div className="text-sm text-white/48">Control style, polish, pace, scene, duration, and CTA.</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/35" />
              </button>

              <button
                onClick={() => navigate('/app/library')}
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/20 px-4 py-4 text-left transition-colors hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">Review grouped variations</div>
                    <div className="text-sm text-white/48">See what is ready to launch and what still needs refinement.</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/35" />
              </button>
            </div>
          </Card>

          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.ready}</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">Launch-ready stack</h2>
              </div>
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>

            <div className="mt-5 grid gap-3">
              {readyForTesting.slice(0, 2).map((draft) => (
                <button
                  key={draft.id}
                  onClick={() => {
                    selectDraft(draft.id)
                    navigate('/app/ugc')
                  }}
                  className="rounded-[22px] border border-emerald-400/15 bg-emerald-400/6 p-4 text-left transition-colors hover:border-emerald-400/25"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="success">{t.ready}</Badge>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">{draft.format}</span>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">{draft.name}</div>
                  <div className="mt-2 text-sm text-white/50">
                    {draft.creatorStyle} · {draft.duration} · {draft.language}
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Card className="border-white/8 bg-white/[0.03] p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.recentVariations}</div>
            <h2 className="mt-2 text-2xl font-semibold text-white">Latest variations moving through production.</h2>
          </div>
          <Boxes className="h-5 w-5 text-white/40" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {recentVariations.map((draft) => (
            <button
              key={draft.id}
              onClick={() => {
                selectDraft(draft.id)
                navigate('/app/ugc')
              }}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20 text-left transition-colors hover:border-white/20"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={draft.previewImage} alt={draft.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Badge variant={draft.testReady ? 'success' : 'glass'}>
                    {draft.testReady ? t.ready : draft.status}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/35">{draft.creatorStyle}</span>
                </div>
                <div className="mt-3 text-lg font-semibold text-white">{draft.name}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/50">{draft.notes}</div>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
