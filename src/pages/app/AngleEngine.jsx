import React, { useMemo, useState } from 'react'
import { MoreHorizontal, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'

const copy = {
  en: {
    eyebrow: 'Structured input only',
    title: 'Generate ad angles without starting from a blank prompt.',
    subtitle:
      'Start with the actual business inputs that matter: product, offer, audience, objective, tone, and angle type.',
    formTitle: 'Angle brief',
    formSubtitle: 'Use the product reality to shape angles you can actually test.',
    generate: 'Generate angles',
    generating: 'Generating angles...',
    results: 'Generated angles',
    previewScript: 'Preview script',
    createUgc: 'Create UGC Video',
    save: 'Save',
    duplicate: 'Duplicate',
    archive: 'Archive',
    empty: 'No active angles for this brand yet.',
  },
  es: {
    eyebrow: 'Solo input estructurado',
    title: 'Genera angulos sin partir de un prompt vacio.',
    subtitle:
      'Empieza desde los inputs de negocio que si importan: producto, oferta, audiencia, objetivo, tono y tipo de angulo.',
    formTitle: 'Brief del angulo',
    formSubtitle: 'Usa la realidad del producto para crear angulos que realmente puedas testear.',
    generate: 'Generar angulos',
    generating: 'Generando angulos...',
    results: 'Angulos generados',
    previewScript: 'Ver script',
    createUgc: 'Crear video UGC',
    save: 'Guardar',
    duplicate: 'Duplicar',
    archive: 'Archivar',
    empty: 'Todavia no hay angulos activos para esta marca.',
  },
}

export default function AngleEngine() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const {
    activeBrand,
    state,
    activeAngles,
    angleTypeOptions,
    presetFormatOptions,
    toneOptions,
    generateAngles,
    createUgcFromAngle,
    saveAngle,
    duplicateAngle,
    archiveAngle,
    selectAngle,
  } = useVyraApp()
  const t = copy[language]
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedScript, setSelectedScript] = useState(null)
  const [creatingDraftId, setCreatingDraftId] = useState(null)
  const [form, setForm] = useState(() => ({
    brandId: activeBrand.id,
    productId: activeBrand.products[0].id,
    offer: activeBrand.products[0].offer,
    objective: activeBrand.products[0].objective,
    audience: activeBrand.products[0].audience,
    angleType: angleTypeOptions[0],
    tone: state.brandDefaults.tone,
    presetFormat: state.brandDefaults.presetFormat,
  }))

  const brand = state.brands.find((item) => item.id === form.brandId) || state.brands[0]
  const productOptions = brand.products
  const brandAngles = useMemo(
    () => activeAngles.filter((angle) => angle.brandId === form.brandId),
    [activeAngles, form.brandId]
  )

  const updateForm = (key, value) => {
    if (key === 'brandId') {
      const nextBrand = state.brands.find((item) => item.id === value) || state.brands[0]
      const nextProduct = nextBrand.products[0]
      setForm((current) => ({
        ...current,
        brandId: value,
        productId: nextProduct.id,
        offer: nextProduct.offer,
        objective: nextProduct.objective,
        audience: nextProduct.audience,
      }))
      return
    }

    if (key === 'productId') {
      const nextProduct = brand.products.find((item) => item.id === value) || brand.products[0]
      setForm((current) => ({
        ...current,
        productId: value,
        offer: nextProduct.offer,
        objective: nextProduct.objective,
        audience: nextProduct.audience,
      }))
      return
    }

    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleGenerate = async (event) => {
    event.preventDefault()
    setIsGenerating(true)
    await generateAngles(form)
    setIsGenerating(false)
  }

  const handleCreateUgc = async (angleId) => {
    setCreatingDraftId(angleId)
    selectAngle(angleId)
    await createUgcFromAngle(angleId)
    setCreatingDraftId(null)
    navigate('/app/ugc')
  }

  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <Card className="border-white/10 bg-white/[0.03] p-8">
        <Badge variant="glow">{t.eyebrow}</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/56">{t.subtitle}</p>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.84fr,1.16fr]">
        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="mb-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.formTitle}</div>
            <h2 className="mt-2 text-2xl font-semibold text-white">{brand.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{t.formSubtitle}</p>
          </div>

          <form className="grid gap-4" onSubmit={handleGenerate}>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Brand or product</span>
              <select
                value={form.brandId}
                onChange={(event) => updateForm('brandId', event.target.value)}
                className="h-12 rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none"
              >
                {state.brands.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#0A1322]">
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/55">Product</span>
              <select
                value={form.productId}
                onChange={(event) => updateForm('productId', event.target.value)}
                className="h-12 rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none"
              >
                {productOptions.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#0A1322]">
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/55">Offer</span>
              <Input value={form.offer} onChange={(event) => updateForm('offer', event.target.value)} />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/55">Objective</span>
              <Input value={form.objective} onChange={(event) => updateForm('objective', event.target.value)} />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/55">Audience</span>
              <textarea
                rows="3"
                value={form.audience}
                onChange={(event) => updateForm('audience', event.target.value)}
                className="min-h-[110px] rounded-[18px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2">
                <span className="text-sm text-white/55">Angle type</span>
                <select
                  value={form.angleType}
                  onChange={(event) => updateForm('angleType', event.target.value)}
                  className="h-12 rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none"
                >
                  {angleTypeOptions.map((item) => (
                    <option key={item} value={item} className="bg-[#0A1322]">
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/55">Tone</span>
                <select
                  value={form.tone}
                  onChange={(event) => updateForm('tone', event.target.value)}
                  className="h-12 rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none"
                >
                  {toneOptions.map((item) => (
                    <option key={item} value={item} className="bg-[#0A1322]">
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/55">Preset format</span>
                <select
                  value={form.presetFormat}
                  onChange={(event) => updateForm('presetFormat', event.target.value)}
                  className="h-12 rounded-[18px] border border-white/10 bg-black/20 px-4 text-sm text-white outline-none"
                >
                  {presetFormatOptions.map((item) => (
                    <option key={item} value={item} className="bg-[#0A1322]">
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <Button type="submit" variant="primary" className="mt-3 w-full" isLoading={isGenerating}>
              {!isGenerating && <Sparkles className="mr-2 h-4 w-4" />}
              {isGenerating ? t.generating : t.generate}
            </Button>
          </form>
        </Card>

        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.results}</div>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {brandAngles.length ? `${brandAngles.length} live angles for ${brand.name}` : t.empty}
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {brandAngles.map((angle) => (
              <div
                key={angle.id}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition-colors hover:border-white/20"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="violet">{angle.angleType}</Badge>
                      <Badge variant="glass">{angle.recommendedFormat}</Badge>
                      <Badge variant={angle.confidence === 'High fit' ? 'success' : 'glow'}>{angle.confidence}</Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{angle.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/54">{angle.hook}</p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-white/60 transition-colors hover:border-white/20 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => duplicateAngle(angle.id)}>{t.duplicate}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => archiveAngle(angle.id)}>{t.archive}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/35">Core idea</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/56">{angle.coreIdea}</p>
                  </div>
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/35">Use case</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/56">{angle.useCase}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleCreateUgc(angle.id)}
                    isLoading={creatingDraftId === angle.id}
                  >
                    {creatingDraftId !== angle.id && <Sparkles className="mr-2 h-4 w-4" />}
                    {t.createUgc}
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => saveAngle(angle.id)}>
                    {t.save}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      selectAngle(angle.id)
                      setSelectedScript(angle)
                    }}
                  >
                    {t.previewScript}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {selectedScript ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/65 p-4">
          <div className="w-full max-w-2xl rounded-[30px] border border-white/10 bg-[#08111E] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex gap-2">
                  <Badge variant="violet">{selectedScript.angleType}</Badge>
                  <Badge variant="glass">{selectedScript.recommendedFormat}</Badge>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{selectedScript.title}</h2>
                <p className="mt-2 text-white/52">{selectedScript.hook}</p>
              </div>
              <button
                onClick={() => setSelectedScript(null)}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-white/35">Script preview</div>
              <p className="mt-4 text-base leading-relaxed text-white/62">{selectedScript.script}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
