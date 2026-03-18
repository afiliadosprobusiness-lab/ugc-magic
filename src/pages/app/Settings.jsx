import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'

export default function Settings() {
  const { language } = useLanguage()
  const { state, saveSettings } = useVyraApp()
  const [form, setForm] = useState({
    workspaceName: state.workspaceName,
    brandDefaults: state.brandDefaults,
    outputPreferences: state.outputPreferences,
    languageDefaults: state.languageDefaults,
  })

  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <Card className="border-white/10 bg-white/[0.03] p-8">
        <Badge variant="glow">{language === 'en' ? 'Essential settings' : 'Configuracion esencial'}</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {language === 'en' ? 'Keep the workspace defaults aligned.' : 'Mantiene alineados los defaults del workspace.'}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/56">
          {language === 'en'
            ? 'Only the essentials live here: workspace naming, brand defaults, output preferences, and language defaults.'
            : 'Solo vive lo esencial: nombre del workspace, defaults de marca, preferencias de output y defaults de idioma.'}
        </p>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-white/35">
            {language === 'en' ? 'Workspace name' : 'Nombre del workspace'}
          </div>
          <div className="mt-5 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-white/55">{language === 'en' ? 'Name' : 'Nombre'}</span>
              <Input
                value={form.workspaceName}
                onChange={(event) => setForm((current) => ({ ...current, workspaceName: event.target.value }))}
              />
            </label>
          </div>
        </Card>

        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-white/35">
            {language === 'en' ? 'Brand defaults' : 'Defaults de marca'}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Tone</span>
              <Input
                value={form.brandDefaults.tone}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    brandDefaults: { ...current.brandDefaults, tone: event.target.value },
                  }))
                }
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Preset format</span>
              <Input
                value={form.brandDefaults.presetFormat}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    brandDefaults: { ...current.brandDefaults, presetFormat: event.target.value },
                  }))
                }
              />
            </label>
          </div>
        </Card>

        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-white/35">
            {language === 'en' ? 'Output preferences' : 'Preferencias de output'}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Default format</span>
              <Input
                value={form.outputPreferences.defaultFormat}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    outputPreferences: { ...current.outputPreferences, defaultFormat: event.target.value },
                  }))
                }
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Default duration</span>
              <Input
                value={form.outputPreferences.defaultDuration}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    outputPreferences: { ...current.outputPreferences, defaultDuration: event.target.value },
                  }))
                }
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">CTA style</span>
              <Input
                value={form.outputPreferences.ctaStyle}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    outputPreferences: { ...current.outputPreferences, ctaStyle: event.target.value },
                  }))
                }
              />
            </label>
          </div>
        </Card>

        <Card className="border-white/8 bg-white/[0.03] p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-white/35">
            {language === 'en' ? 'Language defaults' : 'Defaults de idioma'}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Interface language</span>
              <Input
                value={form.languageDefaults.interfaceLanguage}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    languageDefaults: { ...current.languageDefaults, interfaceLanguage: event.target.value },
                  }))
                }
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/55">Output language</span>
              <Input
                value={form.languageDefaults.outputLanguage}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    languageDefaults: { ...current.languageDefaults, outputLanguage: event.target.value },
                  }))
                }
              />
            </label>
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button variant="primary" onClick={() => saveSettings(form)}>
          {language === 'en' ? 'Save settings' : 'Guardar configuracion'}
        </Button>
      </div>
    </div>
  )
}
