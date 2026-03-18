export const ANGLE_TYPE_OPTIONS = [
  'Pain Point',
  'Desire',
  'Objection',
  'Problem-Solution',
  'Comparison',
  'Routine',
  'Before-After',
  'Myth-Breaking',
  'Convenience',
]

export const PRESET_FORMAT_OPTIONS = [
  'Creator Review',
  'Product Demo',
  'Before / After',
  'Founder Story',
  'Objection Breaker',
  'Social Proof',
]

export const TONE_OPTIONS = [
  'Direct response',
  'Premium expert',
  'Warm testimonial',
  'Authority-led',
  'Conversational',
]

export const UGC_CONTROL_OPTIONS = {
  creatorStyles: ['Trusted customer', 'Clinical explainer', 'Lifestyle reviewer', 'Founder-led'],
  polishLevels: ['Raw', 'Balanced', 'Polished'],
  energyLevels: ['Measured', 'Conversational', 'High energy'],
  moods: ['Confident', 'Reassuring', 'Urgent', 'Calm'],
  backgrounds: ['Bathroom shelf', 'Kitchen counter', 'Home office', 'Soft studio'],
  durations: ['15s', '30s', '45s'],
  languages: ['English', 'Spanish'],
  formats: ['9:16', '1:1', '16:9'],
}

export const VYRA_BRANDS = [
  {
    id: 'brand-auralis',
    name: 'Auralis Skin',
    industry: 'Skincare',
    workspaceTag: 'Hero product relaunch',
    products: [
      {
        id: 'prod-auralis-serum',
        name: 'Radiance Reset Serum',
        offer: '15% off first order',
        audience: 'Women 28-42 dealing with dull skin and uneven tone',
        objective: 'Drive first purchase from paid social',
      },
      {
        id: 'prod-auralis-cream',
        name: 'Barrier Restore Cream',
        offer: 'Bundle with free cleanser mini',
        audience: 'Sensitive-skin shoppers who have tried multiple moisturizers',
        objective: 'Increase AOV with routine-focused creative',
      },
    ],
    references: [
      {
        id: 'ref-auralis-1',
        title: 'Shelf close-up reference',
        type: 'Product texture',
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'ref-auralis-2',
        title: 'Bathroom vanity scene',
        type: 'UGC background',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'brand-northstar',
    name: 'Northstar Labs',
    industry: 'Supplements',
    workspaceTag: 'Quarterly hook refresh',
    products: [
      {
        id: 'prod-northstar-focus',
        name: 'Daily Focus Gummies',
        offer: 'Buy two, get one free',
        audience: 'Busy operators and creators dealing with scattered energy',
        objective: 'Open colder audiences with problem-aware hooks',
      },
      {
        id: 'prod-northstar-sleep',
        name: 'Deep Sleep Capsules',
        offer: 'Starter kit at launch pricing',
        audience: 'Professionals who struggle to wind down after late work sessions',
        objective: 'Increase testing volume for evening routine content',
      },
    ],
    references: [
      {
        id: 'ref-northstar-1',
        title: 'Desk setup routine',
        type: 'Routine reference',
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'ref-northstar-2',
        title: 'Bottle macro',
        type: 'Product detail',
        image:
          'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'brand-cove',
    name: 'Cove Carry',
    industry: 'Ecommerce lifestyle',
    workspaceTag: 'Creative testing sprint',
    products: [
      {
        id: 'prod-cove-pack',
        name: 'Transit Weekender',
        offer: 'Free shipping this week',
        audience: 'Urban commuters who want one bag for work and travel',
        objective: 'Generate more product-demo and comparison variations',
      },
      {
        id: 'prod-cove-sling',
        name: 'Daylight Sling',
        offer: 'Second colorway included',
        audience: 'Minimalist shoppers tired of bulky everyday bags',
        objective: 'Refresh top-of-funnel hooks',
      },
    ],
    references: [
      {
        id: 'ref-cove-1',
        title: 'Airport carry shot',
        type: 'Lifestyle use case',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'ref-cove-2',
        title: 'Desk drop sequence',
        type: 'Product demo',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
]

const INITIAL_ANGLES = [
  {
    id: 'angle-001',
    brandId: 'brand-auralis',
    productId: 'prod-auralis-serum',
    title: 'Glow without restarting your routine',
    hook: 'If your serum gives glow for one day and disappears by lunch, this is the fix.',
    coreIdea:
      'Position the serum as the easiest way to improve tone consistency without adding a complicated routine.',
    tone: 'Premium expert',
    useCase: 'Cold paid social tests for first-purchase conversion',
    recommendedFormat: 'Creator Review',
    confidence: 'High fit',
    angleType: 'Pain Point',
    objective: 'Drive first purchase from paid social',
    audience: 'Women 28-42 dealing with dull skin and uneven tone',
    offer: '15% off first order',
    script:
      'Open on tired skin frustration, show one-drop texture, explain why the formula is lightweight, then close on visible glow without a 10-step routine.',
    status: 'saved',
    createdAt: '2026-03-15T10:00:00.000Z',
  },
  {
    id: 'angle-002',
    brandId: 'brand-northstar',
    productId: 'prod-northstar-focus',
    title: 'Focus that does not feel like a crash',
    hook: 'Most focus products ask you to choose between energy and calm. You do not need to.',
    coreIdea:
      'Break the false tradeoff between productivity and jitters, then frame the gummies as a smoother workday option.',
    tone: 'Authority-led',
    useCase: 'Meta hook refresh for problem-aware audiences',
    recommendedFormat: 'Objection Breaker',
    confidence: 'High fit',
    angleType: 'Myth-Breaking',
    objective: 'Open colder audiences with problem-aware hooks',
    audience: 'Busy operators and creators dealing with scattered energy',
    offer: 'Buy two, get one free',
    script:
      'Call out the crash, show the gummy during a work transition, explain steady focus, and end on an offer-led close.',
    status: 'saved',
    createdAt: '2026-03-14T09:20:00.000Z',
  },
  {
    id: 'angle-003',
    brandId: 'brand-cove',
    productId: 'prod-cove-pack',
    title: 'One bag for commute and weekend',
    hook: 'I was tired of switching bags every time my day changed after 6 PM.',
    coreIdea:
      'Show how the weekender removes friction for people moving between work, gym, and short trips.',
    tone: 'Conversational',
    useCase: 'Lifestyle and product-demo variation testing',
    recommendedFormat: 'Product Demo',
    confidence: 'Strong signal',
    angleType: 'Convenience',
    objective: 'Generate more product-demo and comparison variations',
    audience: 'Urban commuters who want one bag for work and travel',
    offer: 'Free shipping this week',
    script:
      'Start on a crowded morning commute, show quick pocket access, then cut to weekend packing and close with a convenience-focused CTA.',
    status: 'saved',
    createdAt: '2026-03-13T16:40:00.000Z',
  },
]

const INITIAL_UGC_DRAFTS = [
  {
    id: 'ugc-001',
    angleId: 'angle-001',
    brandId: 'brand-auralis',
    name: 'Glow without restarting your routine / Variant A',
    creatorStyle: 'Trusted customer',
    creatorConsistency: 94,
    polishLevel: 'Balanced',
    energy: 'Conversational',
    mood: 'Reassuring',
    background: 'Bathroom shelf',
    duration: '30s',
    language: 'English',
    ctaText: 'Shop the starter offer',
    format: '9:16',
    referenceAssetId: 'ref-auralis-2',
    status: 'Ready for testing',
    testReady: true,
    createdAt: '2026-03-15T12:00:00.000Z',
    previewImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    notes: 'Balanced delivery with offer mention at 23 seconds.',
  },
  {
    id: 'ugc-002',
    angleId: 'angle-002',
    brandId: 'brand-northstar',
    name: 'Focus that does not feel like a crash / Variant B',
    creatorStyle: 'Clinical explainer',
    creatorConsistency: 91,
    polishLevel: 'Polished',
    energy: 'Measured',
    mood: 'Confident',
    background: 'Home office',
    duration: '30s',
    language: 'English',
    ctaText: 'Claim the bundle offer',
    format: '9:16',
    referenceAssetId: 'ref-northstar-1',
    status: 'In review',
    testReady: false,
    createdAt: '2026-03-14T11:15:00.000Z',
    previewImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    notes: 'Needs a stronger first-three-second visual.',
  },
  {
    id: 'ugc-003',
    angleId: 'angle-003',
    brandId: 'brand-cove',
    name: 'One bag for commute and weekend / Variant A',
    creatorStyle: 'Lifestyle reviewer',
    creatorConsistency: 89,
    polishLevel: 'Raw',
    energy: 'High energy',
    mood: 'Confident',
    background: 'Home office',
    duration: '15s',
    language: 'English',
    ctaText: 'See the bag in action',
    format: '9:16',
    referenceAssetId: 'ref-cove-1',
    status: 'Ready for testing',
    testReady: true,
    createdAt: '2026-03-13T18:05:00.000Z',
    previewImage:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    notes: 'Strong travel-to-commute transition, CTA can be tightened.',
  },
]

export function createInitialVyraState() {
  return {
    workspaceName: 'Vyra Growth Workspace',
    activeBrandId: VYRA_BRANDS[0].id,
    selectedAngleId: INITIAL_ANGLES[0].id,
    selectedDraftId: INITIAL_UGC_DRAFTS[0].id,
    brandDefaults: {
      tone: 'Premium expert',
      presetFormat: 'Creator Review',
    },
    outputPreferences: {
      defaultFormat: '9:16',
      defaultDuration: '30s',
      ctaStyle: 'Offer-led',
    },
    languageDefaults: {
      interfaceLanguage: 'English',
      outputLanguage: 'English',
    },
    brands: VYRA_BRANDS,
    angles: INITIAL_ANGLES,
    ugcDrafts: INITIAL_UGC_DRAFTS,
  }
}
