import React, { useMemo, useState } from 'react'
import { RefreshCw, SplitSquareVertical, Video } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const copy = {
  en: {
    title: 'Turn the selected angle into realistic UGC variations.',
    subtitle:
      'The angle leads the workflow. Creator style, polish, mood, and scene only shape execution around that core idea.',
    noAngle: 'Select or generate an angle first to start a UGC workflow.',
    goToAngles: 'Go to Angle Engine',
    controls: 'Execution controls',
    script: 'Script preview',
    selectedAngle: 'Selected angle',
    generateVariation: 'Generate variation',
    generating: 'Generating variation...',
    markReady: 'Mark ready for testing',
    comparison: 'Side by side comparison',
  },
  es: {
    title: 'Convierte el angulo seleccionado en variaciones UGC realistas.',
    subtitle:
      'El angulo lidera el flujo. El estilo del creator, el polish, el mood y la escena solo ajustan la ejecucion alrededor de esa idea.',
    noAngle: 'Selecciona o genera un angulo primero para iniciar el flujo UGC.',
    goToAngles: 'Ir al motor de angulos',
    controls: 'Controles de ejecucion',
    script: 'Preview del script',
    selectedAngle: 'Angulo seleccionado',
    generateVariation: 'Generar variacion',
    generating: 'Generando variacion...',
    markReady: 'Marcar listo para testeo',
    comparison: 'Comparacion lado a lado',
  },
}

function ControlField({ label, value, onChange, options }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/55">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-[16px] border border-white/10 bg-black/20 px-3 text-sm text-white outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0A1322]">
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function UgcCreator() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const {
    selectedAngle,
    selectedDraft,
    draftsForSelectedAngle,
    activeBrand,
    ugcControlOptions,
    createUgcFromAngle,
    updateDraft,
    selectDraft,
  } = useVyraApp()
  const t = copy[language]
  const [isGenerating, setIsGenerating] = useState(false)

  const comparisonDraft = useMemo(() => {
    if (!draftsForSelectedAngle.length) {
      return null
    }

    return draftsForSelectedAngle.find((draft) => draft.id !== selectedDraft?.id) || selectedDraft
  }, [draftsForSelectedAngle, selectedDraft])

  if (!selectedAngle) {
    return (
      <div className="flex w-full flex-col gap-6 py-10">
        <Card className="border-white/10 bg-white/[0.03] p-8 text-center">
          <h1 className="text-3xl font-semibold text-white">{t.noAngle}</h1>
          <div className="mt-6">
            <Button variant="primary" onClick={() => navigate('/app/angles')}>
              {t.goToAngles}
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  const currentDraft = selectedDraft || draftsForSelectedAngle[0]
  const referenceAsset = activeBrand.references.find((item) => item.id === currentDraft?.referenceAssetId)

  const handleGenerateVariation = async () => {
    setIsGenerating(true)
    await createUgcFromAngle(selectedAngle.id, {
      creatorStyle: currentDraft?.creatorStyle,
      polishLevel: currentDraft?.polishLevel,
      energy: currentDraft?.energy,
      mood: currentDraft?.mood,
      background: currentDraft?.background,
      duration: currentDraft?.duration,
      language: currentDraft?.language,
      ctaText: currentDraft?.ctaText,
      format: currentDraft?.format,
      referenceAssetId: currentDraft?.referenceAssetId,
      status: 'Drafting',
      testReady: false,
      notes: 'New variation created from the same angle with adjusted execution controls.',
    })
    setIsGenerating(false)
  }

  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <Card className="border-white/10 bg-white/[0.03] p-8">
        <Badge variant="glow">{t.selectedAngle}</Badge>
        <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{t.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/56">{t.subtitle}</p>
          </div>
          <div className="min-w-[300px] rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant="violet">{selectedAngle.angleType}</Badge>
              <Badge variant="glass">{selectedAngle.recommendedFormat}</Badge>
              <Badge variant={currentDraft?.testReady ? 'success' : 'glow'}>
                {currentDraft?.testReady ? 'Ready for testing' : currentDraft?.status || 'Drafting'}
              </Badge>
            </div>
            <div className="mt-4 text-2xl font-semibold text-white">{selectedAngle.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{selectedAngle.hook}</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.16fr,0.84fr]">
        <div className="grid gap-6">
          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.script}</div>
                <h2 className="mt-2 text-3xl font-semibold text-white">{selectedAngle.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-white/58">{selectedAngle.script}</p>
              </div>
              <div className="min-w-[240px] rounded-[24px] border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/35">Angle output</div>
                <div className="mt-3 text-sm text-white/55">
                  {selectedAngle.useCase}
                  <br />
                  {selectedAngle.confidence}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="primary" size="sm" onClick={handleGenerateVariation} isLoading={isGenerating}>
                    {!isGenerating && <RefreshCw className="mr-2 h-4 w-4" />}
                    {isGenerating ? t.generating : t.generateVariation}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">Variation selector</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {draftsForSelectedAngle.length} live executions from one angle.
                </h2>
              </div>
              <Video className="h-5 w-5 text-white/35" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {draftsForSelectedAngle.map((draft) => (
                <button
                  key={draft.id}
                  onClick={() => selectDraft(draft.id)}
                  className={`rounded-[18px] border px-4 py-3 text-left transition-colors ${
                    draft.id === currentDraft?.id
                      ? 'border-white/30 bg-white/10'
                      : 'border-white/10 bg-black/20 hover:border-white/20'
                  }`}
                >
                  <div className="text-sm font-semibold text-white">{draft.name}</div>
                  <div className="mt-1 text-sm text-white/48">
                    {draft.creatorStyle} · {draft.polishLevel} · {draft.duration}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {currentDraft ? (
            <Card className="border-white/8 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.comparison}</div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Execution consistency across variants.</h2>
                </div>
                <SplitSquareVertical className="h-5 w-5 text-white/35" />
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {[currentDraft, comparisonDraft].filter(Boolean).map((draft, index) => (
                  <div key={`${draft.id}-${index}`} className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={draft.previewImage} alt={draft.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant={draft.testReady ? 'success' : 'glass'}>
                          {draft.testReady ? 'Ready for testing' : draft.status}
                        </Badge>
                        <span className="text-xs uppercase tracking-[0.18em] text-white/35">{draft.format}</span>
                      </div>
                      <div className="mt-3 text-lg font-semibold text-white">{draft.name}</div>
                      <div className="mt-2 text-sm text-white/55">
                        {draft.creatorStyle} · {draft.background} · {draft.mood}
                      </div>
                      <div className="mt-3 text-sm text-white/46">{draft.notes}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}
        </div>

        <div className="grid gap-6">
          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/35">{t.controls}</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">Execution settings</h2>
              </div>
              <Badge variant="glass">{currentDraft?.creatorConsistency || 0}% consistency</Badge>
            </div>

            {currentDraft ? (
              <div className="mt-5 grid gap-4">
                <ControlField
                  label="Creator style"
                  value={currentDraft.creatorStyle}
                  onChange={(value) => updateDraft(currentDraft.id, { creatorStyle: value })}
                  options={ugcControlOptions.creatorStyles}
                />
                <ControlField
                  label="Raw vs polished"
                  value={currentDraft.polishLevel}
                  onChange={(value) => updateDraft(currentDraft.id, { polishLevel: value })}
                  options={ugcControlOptions.polishLevels}
                />
                <ControlField
                  label="Speaking energy"
                  value={currentDraft.energy}
                  onChange={(value) => updateDraft(currentDraft.id, { energy: value })}
                  options={ugcControlOptions.energyLevels}
                />
                <ControlField
                  label="Mood"
                  value={currentDraft.mood}
                  onChange={(value) => updateDraft(currentDraft.id, { mood: value })}
                  options={ugcControlOptions.moods}
                />
                <ControlField
                  label="Background / scene"
                  value={currentDraft.background}
                  onChange={(value) => updateDraft(currentDraft.id, { background: value })}
                  options={ugcControlOptions.backgrounds}
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <ControlField
                    label="Duration"
                    value={currentDraft.duration}
                    onChange={(value) => updateDraft(currentDraft.id, { duration: value })}
                    options={ugcControlOptions.durations}
                  />
                  <ControlField
                    label="Language"
                    value={currentDraft.language}
                    onChange={(value) => updateDraft(currentDraft.id, { language: value })}
                    options={ugcControlOptions.languages}
                  />
                  <ControlField
                    label="Format"
                    value={currentDraft.format}
                    onChange={(value) => updateDraft(currentDraft.id, { format: value })}
                    options={ugcControlOptions.formats}
                  />
                </div>

                <label className="grid gap-2">
                  <span className="text-sm text-white/55">CTA overlay</span>
                  <input
                    value={currentDraft.ctaText}
                    onChange={(event) => updateDraft(currentDraft.id, { ctaText: event.target.value })}
                    className="h-11 rounded-[16px] border border-white/10 bg-black/20 px-3 text-sm text-white outline-none"
                  />
                </label>

                <Button
                  variant="secondary"
                  className="mt-2"
                  onClick={() => updateDraft(currentDraft.id, { testReady: true, status: 'Ready for testing' })}
                >
                  {t.markReady}
                </Button>
              </div>
            ) : (
              <div className="mt-5 rounded-[24px] border border-dashed border-white/10 bg-black/20 p-6 text-sm text-white/45">
                {t.noAngle}
              </div>
            )}
          </Card>

          <Card className="border-white/8 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">Reference asset</div>
            {referenceAsset ? (
              <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={referenceAsset.image} alt={referenceAsset.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-lg font-semibold text-white">{referenceAsset.title}</div>
                  <div className="mt-2 text-sm text-white/48">{referenceAsset.type}</div>
                </div>
              </div>
            ) : (
              <div className="mt-4 rounded-[24px] border border-dashed border-white/10 bg-black/20 p-6 text-sm text-white/45">
                Attach a reference asset from the Library to shape framing and scene decisions.
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
