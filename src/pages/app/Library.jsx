import React, { useMemo, useState } from 'react'
import { FileText, FolderOpen, Grid2x2, MoreHorizontal, PlayCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useVyraApp } from '../../contexts/VyraAppContext'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'

const tabConfig = [
  { id: 'angles', label: 'Angles', icon: FolderOpen },
  { id: 'scripts', label: 'Scripts', icon: FileText },
  { id: 'ugc', label: 'UGC Videos', icon: PlayCircle },
  { id: 'references', label: 'References', icon: Grid2x2 },
]

export default function Library() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const {
    activeBrand,
    groupedLibrary,
    activeDrafts,
    selectAngle,
    selectDraft,
    duplicateAngle,
    archiveAngle,
    duplicateDraft,
    archiveDraft,
  } = useVyraApp()
  const [activeTab, setActiveTab] = useState('angles')
  const [openGroup, setOpenGroup] = useState(null)

  const brandGroups = useMemo(
    () => groupedLibrary.filter((group) => group.angle.brandId === activeBrand.id),
    [activeBrand.id, groupedLibrary]
  )
  const brandDrafts = useMemo(
    () => activeDrafts.filter((draft) => draft.brandId === activeBrand.id),
    [activeBrand.id, activeDrafts]
  )

  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <Card className="border-white/10 bg-white/[0.03] p-8">
        <Badge variant="glow">Private creative library</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Library organized around angles and test-ready variation groups.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/56">
          Keep every angle, script, UGC execution, and reference grouped where testing decisions happen. Creator style can
          support sorting, but angle groups stay primary.
        </p>
      </Card>

      <div className="flex flex-wrap gap-3">
        {tabConfig.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-white/25 bg-white/10 text-white'
                  : 'border-white/10 bg-black/20 text-white/55 hover:border-white/20 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'angles' ? (
        <div className="grid gap-4">
          {brandGroups.map((group) => (
            <Card key={group.angle.id} className="border-white/8 bg-white/[0.03] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="violet">{group.angle.angleType}</Badge>
                    <Badge variant="glass">{group.angle.recommendedFormat}</Badge>
                    <Badge variant={group.variations.some((item) => item.testReady) ? 'success' : 'outline'}>
                      {group.variations.some((item) => item.testReady)
                        ? language === 'en'
                          ? 'Ready for testing'
                          : 'Listo para testeo'
                        : language === 'en'
                          ? 'Needs pass'
                          : 'Necesita ajuste'}
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{group.angle.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/54">{group.angle.coreIdea}</p>
                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/46">
                    <span>{group.variations.length} variations</span>
                    <span>{group.angle.tone}</span>
                    <span>{group.angle.confidence}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      selectAngle(group.angle.id)
                      setOpenGroup(group)
                    }}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/20 hover:text-white"
                  >
                    {language === 'en' ? 'Open group' : 'Abrir grupo'}
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-white/60 transition-colors hover:border-white/20 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => duplicateAngle(group.angle.id)}>
                        {language === 'en' ? 'Duplicate angle' : 'Duplicar angulo'}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => archiveAngle(group.angle.id)}>
                        {language === 'en' ? 'Archive angle' : 'Archivar angulo'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : null}

      {activeTab === 'scripts' ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {brandGroups.map((group) => (
            <Card key={`script-${group.angle.id}`} className="border-white/8 bg-white/[0.03] p-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="violet">{group.angle.angleType}</Badge>
                <Badge variant="glass">{group.angle.recommendedFormat}</Badge>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{group.angle.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/56">{group.angle.script}</p>
            </Card>
          ))}
        </div>
      ) : null}

      {activeTab === 'ugc' ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {brandDrafts.map((draft) => (
            <Card key={draft.id} className="overflow-hidden border-white/8 bg-white/[0.03]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={draft.previewImage} alt={draft.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={draft.testReady ? 'success' : 'glass'}>
                    {draft.testReady ? 'Ready for testing' : draft.status}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/35">{draft.creatorStyle}</span>
                </div>
                <div className="mt-4 text-xl font-semibold text-white">{draft.name}</div>
                <div className="mt-2 text-sm text-white/48">
                  {draft.background} · {draft.duration} · {draft.format}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      selectDraft(draft.id)
                      navigate('/app/ugc')
                    }}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/20 hover:text-white"
                  >
                    {language === 'en' ? 'Open in creator' : 'Abrir en creator'}
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-white/60 transition-colors hover:border-white/20 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => duplicateDraft(draft.id)}>
                        {language === 'en' ? 'Duplicate variation' : 'Duplicar variacion'}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => archiveDraft(draft.id)}>
                        {language === 'en' ? 'Archive variation' : 'Archivar variacion'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : null}

      {activeTab === 'references' ? (
        <div className="grid gap-4 md:grid-cols-2">
          {activeBrand.references.map((reference) => (
            <Card key={reference.id} className="overflow-hidden border-white/8 bg-white/[0.03]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={reference.image} alt={reference.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="glass">{reference.type}</Badge>
                </div>
                <div className="mt-4 text-xl font-semibold text-white">{reference.title}</div>
              </div>
            </Card>
          ))}
        </div>
      ) : null}

      {openGroup ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/65 p-4">
          <div className="w-full max-w-4xl rounded-[30px] border border-white/10 bg-[#08111E] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex gap-2">
                  <Badge variant="violet">{openGroup.angle.angleType}</Badge>
                  <Badge variant="glass">{openGroup.angle.recommendedFormat}</Badge>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-white">{openGroup.angle.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/56">{openGroup.angle.script}</p>
              </div>
              <button
                onClick={() => setOpenGroup(null)}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {openGroup.variations.map((variation) => (
                <button
                  key={variation.id}
                  onClick={() => {
                    selectDraft(variation.id)
                    navigate('/app/ugc')
                  }}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20 text-left transition-colors hover:border-white/20"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={variation.previewImage} alt={variation.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <Badge variant={variation.testReady ? 'success' : 'glass'}>
                        {variation.testReady ? 'Ready for testing' : variation.status}
                      </Badge>
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">{variation.creatorStyle}</span>
                    </div>
                    <div className="mt-3 text-lg font-semibold text-white">{variation.name}</div>
                    <div className="mt-2 text-sm text-white/50">{variation.notes}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
