/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from 'react'
import {
  ANGLE_TYPE_OPTIONS,
  PRESET_FORMAT_OPTIONS,
  TONE_OPTIONS,
  UGC_CONTROL_OPTIONS,
  createInitialVyraState,
} from '../data/mock'

const VyraAppContext = createContext(null)

const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms))

let sequence = 500

function nextId(prefix) {
  sequence += 1
  return `${prefix}-${sequence}`
}

function formatUseCase(objective, presetFormat) {
  return `${objective} using ${presetFormat.toLowerCase()} creative`
}

function createHook(angleType, productName, offer, audience, variant) {
  const templates = {
    'Pain Point': `If ${audience.toLowerCase()} still feel stuck, ${productName} gives them a faster next step.`,
    Desire: `What if ${productName} made the result people want feel easier to reach this week?`,
    Objection: `The biggest objection to ${productName} is usually price or doubt. ${variant} answers it directly.`,
    'Problem-Solution': `${productName} turns a daily frustration into a quick win without restarting everything.`,
    Comparison: `${productName} is what happens when you stop settling for the usual tradeoffs.`,
    Routine: `This is the part of the routine that makes the rest of the day feel easier.`,
    'Before-After': `The before is friction. The after is a smoother result with ${productName}.`,
    'Myth-Breaking': `The myth around ${productName} is costing buyers time. ${variant} breaks it cleanly.`,
    Convenience: `${productName} saves time, steps, and guesswork the moment it enters the routine.`,
  }

  return templates[angleType] || `${productName} paired with ${offer.toLowerCase()} gives you a sharper creative test.`
}

function createCoreIdea(angleType, productName, objective, tone) {
  return `${angleType} angle for ${productName} built to support ${objective.toLowerCase()} with a ${tone.toLowerCase()} delivery.`
}

function createScript(productName, hook, presetFormat, tone) {
  return `${hook} Open with the tension, show ${productName} in use, explain the payoff in plain language, and close with a ${tone.toLowerCase()} ${presetFormat.toLowerCase()} CTA.`
}

function createGeneratedAngle({ form, productName, variantIndex }) {
  const variantLetter = ['A', 'B', 'C'][variantIndex]
  const hook = createHook(form.angleType, productName, form.offer, form.audience, `variation ${variantLetter}`)

  return {
    id: nextId('angle'),
    brandId: form.brandId,
    productId: form.productId,
    title: `${form.angleType} / ${productName} / ${variantLetter}`,
    hook,
    coreIdea: createCoreIdea(form.angleType, productName, form.objective, form.tone),
    tone: form.tone,
    useCase: formatUseCase(form.objective, form.presetFormat),
    recommendedFormat: form.presetFormat,
    confidence: variantIndex === 0 ? 'High fit' : variantIndex === 1 ? 'Strong signal' : 'Worth testing',
    angleType: form.angleType,
    objective: form.objective,
    audience: form.audience,
    offer: form.offer,
    script: createScript(productName, hook, form.presetFormat, form.tone),
    status: 'saved',
    createdAt: new Date().toISOString(),
  }
}

function createDraftFromAngle(angle, brandId, overrides = {}) {
  return {
    id: nextId('ugc'),
    angleId: angle.id,
    brandId,
    name: `${angle.title} / Variant ${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`,
    creatorStyle: overrides.creatorStyle || 'Trusted customer',
    creatorConsistency: overrides.creatorConsistency || 92,
    polishLevel: overrides.polishLevel || 'Balanced',
    energy: overrides.energy || 'Conversational',
    mood: overrides.mood || 'Confident',
    background: overrides.background || 'Bathroom shelf',
    duration: overrides.duration || '30s',
    language: overrides.language || 'English',
    ctaText: overrides.ctaText || 'Launch this variation',
    format: overrides.format || '9:16',
    referenceAssetId: overrides.referenceAssetId || null,
    status: overrides.status || 'Ready for testing',
    testReady: overrides.testReady ?? true,
    createdAt: new Date().toISOString(),
    previewImage:
      overrides.previewImage ||
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    notes: overrides.notes || 'Built from the selected angle with consistent CTA framing.',
  }
}

export function VyraAppProvider({ children }) {
  const [state, setState] = useState(() => createInitialVyraState())
  const [toasts, setToasts] = useState([])

  const pushToast = (title, description, variant = 'glass') => {
    const id = nextId('toast')
    setToasts((current) => [...current, { id, title, description, variant }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 3200)
  }

  const setActiveBrand = (brandId) => {
    setState((current) => ({
      ...current,
      activeBrandId: brandId,
    }))
  }

  const selectAngle = (angleId) => {
    setState((current) => {
      const firstDraftForAngle = current.ugcDrafts.find(
        (draft) => draft.angleId === angleId && draft.status !== 'archived'
      )

      return {
        ...current,
        selectedAngleId: angleId,
        selectedDraftId: firstDraftForAngle ? firstDraftForAngle.id : current.selectedDraftId,
      }
    })
  }

  const selectDraft = (draftId) => {
    setState((current) => {
      const selectedDraft = current.ugcDrafts.find((draft) => draft.id === draftId)
      return {
        ...current,
        selectedDraftId: draftId,
        selectedAngleId: selectedDraft ? selectedDraft.angleId : current.selectedAngleId,
      }
    })
  }

  const generateAngles = async (form) => {
    const activeBrand = state.brands.find((brand) => brand.id === form.brandId) || state.brands[0]
    const product =
      activeBrand.products.find((item) => item.id === form.productId) || activeBrand.products[0]

    await delay(1100)

    const createdAngles = [0, 1, 2].map((variantIndex) =>
      createGeneratedAngle({
        form,
        productName: product.name,
        variantIndex,
      })
    )

    setState((current) => ({
      ...current,
      activeBrandId: form.brandId,
      selectedAngleId: createdAngles[0].id,
      angles: [...createdAngles, ...current.angles],
    }))

    pushToast('Angles generated', `${createdAngles.length} fresh directions are ready for review.`)
    return createdAngles
  }

  const saveAngle = (angleId) => {
    setState((current) => ({
      ...current,
      angles: current.angles.map((angle) =>
        angle.id === angleId ? { ...angle, status: 'saved' } : angle
      ),
    }))
    pushToast('Angle saved', 'The angle is now pinned for future variations.')
  }

  const duplicateAngle = (angleId) => {
    let duplicatedAngle = null
    setState((current) => {
      const source = current.angles.find((angle) => angle.id === angleId)
      if (!source) {
        return current
      }

      duplicatedAngle = {
        ...source,
        id: nextId('angle'),
        title: `${source.title} / Copy`,
        status: 'saved',
        createdAt: new Date().toISOString(),
      }

      return {
        ...current,
        selectedAngleId: duplicatedAngle.id,
        angles: [duplicatedAngle, ...current.angles],
      }
    })

    if (duplicatedAngle) {
      pushToast('Angle duplicated', 'A new variation starting point is ready.')
    }
  }

  const archiveAngle = (angleId) => {
    setState((current) => {
      const nextVisibleAngle = current.angles.find(
        (angle) => angle.id !== angleId && angle.status !== 'archived'
      )

      return {
        ...current,
        selectedAngleId:
          current.selectedAngleId === angleId && nextVisibleAngle
            ? nextVisibleAngle.id
            : current.selectedAngleId,
        angles: current.angles.map((angle) =>
          angle.id === angleId ? { ...angle, status: 'archived' } : angle
        ),
      }
    })
    pushToast('Angle archived', 'It was removed from active testing views.', 'violet')
  }

  const createUgcFromAngle = async (angleId, overrides = {}) => {
    const angle = state.angles.find((item) => item.id === angleId)
    if (!angle) {
      return null
    }

    await delay(900)

    const draft = createDraftFromAngle(angle, angle.brandId, overrides)
    setState((current) => ({
      ...current,
      selectedAngleId: angleId,
      selectedDraftId: draft.id,
      ugcDrafts: [draft, ...current.ugcDrafts],
    }))

    pushToast('UGC draft created', 'The selected angle now has a production-ready variation.')
    return draft
  }

  const updateDraft = (draftId, patch) => {
    setState((current) => ({
      ...current,
      ugcDrafts: current.ugcDrafts.map((draft) =>
        draft.id === draftId ? { ...draft, ...patch } : draft
      ),
    }))
  }

  const duplicateDraft = (draftId) => {
    let duplicatedDraft = null
    setState((current) => {
      const source = current.ugcDrafts.find((draft) => draft.id === draftId)
      if (!source) {
        return current
      }

      duplicatedDraft = {
        ...source,
        id: nextId('ugc'),
        name: `${source.name} / Copy`,
        createdAt: new Date().toISOString(),
        status: 'Drafting',
        testReady: false,
      }

      return {
        ...current,
        selectedDraftId: duplicatedDraft.id,
        selectedAngleId: duplicatedDraft.angleId,
        ugcDrafts: [duplicatedDraft, ...current.ugcDrafts],
      }
    })

    if (duplicatedDraft) {
      pushToast('Variation duplicated', 'A new draft was added to the testing stack.')
    }
  }

  const archiveDraft = (draftId) => {
    setState((current) => ({
      ...current,
      ugcDrafts: current.ugcDrafts.map((draft) =>
        draft.id === draftId ? { ...draft, status: 'archived', testReady: false } : draft
      ),
    }))
    pushToast('Variation archived', 'It was removed from active testing groups.', 'violet')
  }

  const saveSettings = (patch) => {
    setState((current) => ({
      ...current,
      ...patch,
    }))
    pushToast('Settings updated', 'Workspace defaults were refreshed.')
  }

  const activeBrand = useMemo(
    () => state.brands.find((brand) => brand.id === state.activeBrandId) || state.brands[0],
    [state.activeBrandId, state.brands]
  )

  const activeAngles = useMemo(
    () => state.angles.filter((angle) => angle.status !== 'archived'),
    [state.angles]
  )

  const activeDrafts = useMemo(
    () => state.ugcDrafts.filter((draft) => draft.status !== 'archived'),
    [state.ugcDrafts]
  )

  const selectedAngle = useMemo(
    () => activeAngles.find((angle) => angle.id === state.selectedAngleId) || activeAngles[0] || null,
    [activeAngles, state.selectedAngleId]
  )

  const draftsForSelectedAngle = useMemo(
    () =>
      selectedAngle
        ? activeDrafts.filter((draft) => draft.angleId === selectedAngle.id)
        : [],
    [activeDrafts, selectedAngle]
  )

  const selectedDraft = useMemo(
    () =>
      activeDrafts.find((draft) => draft.id === state.selectedDraftId) ||
      draftsForSelectedAngle[0] ||
      null,
    [activeDrafts, draftsForSelectedAngle, state.selectedDraftId]
  )

  const readyForTesting = useMemo(
    () => activeDrafts.filter((draft) => draft.testReady),
    [activeDrafts]
  )

  const groupedLibrary = useMemo(
    () =>
      activeAngles.map((angle) => ({
        angle,
        variations: activeDrafts.filter((draft) => draft.angleId === angle.id),
      })),
    [activeAngles, activeDrafts]
  )

  const metrics = useMemo(
    () => ({
      anglesGenerated: activeAngles.length,
      ugcDrafts: activeDrafts.length,
      activeProducts: state.brands.reduce((count, brand) => count + brand.products.length, 0),
      readyForTesting: readyForTesting.length,
      savedCreativeDirections: activeAngles.filter((angle) => angle.status === 'saved').length,
    }),
    [activeAngles, activeDrafts, readyForTesting.length, state.brands]
  )

  const value = {
    state,
    toasts,
    metrics,
    activeBrand,
    activeAngles,
    activeDrafts,
    groupedLibrary,
    readyForTesting,
    selectedAngle,
    selectedDraft,
    draftsForSelectedAngle,
    angleTypeOptions: ANGLE_TYPE_OPTIONS,
    presetFormatOptions: PRESET_FORMAT_OPTIONS,
    toneOptions: TONE_OPTIONS,
    ugcControlOptions: UGC_CONTROL_OPTIONS,
    setActiveBrand,
    selectAngle,
    selectDraft,
    generateAngles,
    saveAngle,
    duplicateAngle,
    archiveAngle,
    createUgcFromAngle,
    updateDraft,
    duplicateDraft,
    archiveDraft,
    saveSettings,
    pushToast,
  }

  return <VyraAppContext.Provider value={value}>{children}</VyraAppContext.Provider>
}

export function useVyraApp() {
  const context = useContext(VyraAppContext)
  if (!context) {
    throw new Error('useVyraApp must be used within VyraAppProvider')
  }

  return context
}
