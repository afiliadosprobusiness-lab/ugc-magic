// Centralized mock data for Vyra SaaS Experience

export const MOCK_BRANDS = [
  { id: 'b1', name: 'Auren Skin', industry: 'Beauty & Skincare' },
  { id: 'b2', name: 'Solis Jewelry', industry: 'Jewelry' },
  { id: 'b3', name: 'Vale Atelier', industry: 'Fashion & Accessories' },
  { id: 'b4', name: 'Lumera Beauty', industry: 'Beauty & Skincare' },
  { id: 'b5', name: 'North House', industry: 'Luxury Products' },
  { id: 'b6', name: 'Vanta Studio', industry: 'Fashion & Accessories' },
];

export const MOCK_CREATORS = [
  { id: 'c1', name: 'Mia', avatar: 'https://i.pravatar.cc/150?u=mia', vibe: 'Clean Luxury', score: 98, formats: ['Unboxing', 'Tutorial'] },
  { id: 'c2', name: 'Lena', avatar: 'https://i.pravatar.cc/150?u=lena', vibe: 'Editorial Minimal', score: 95, formats: ['B-Roll', 'Lifestyle'] },
  { id: 'c3', name: 'Ava', avatar: 'https://i.pravatar.cc/150?u=ava', vibe: 'Warm Lifestyle', score: 92, formats: ['Vlog', 'Review'] },
  { id: 'c4', name: 'Clara', avatar: 'https://i.pravatar.cc/150?u=clara', vibe: 'Product Focus', score: 96, formats: ['Macro', 'Showcase'] },
  { id: 'c5', name: 'Sofia', avatar: 'https://i.pravatar.cc/150?u=sofia', vibe: 'Beauty UGC', score: 94, formats: ['GRWM', 'Tutorial'] },
  { id: 'c6', name: 'Elise', avatar: 'https://i.pravatar.cc/150?u=elise', vibe: 'Social Proof', score: 91, formats: ['Testimonial', 'Review'] },
];

export const DIRECTION_TAGS = [
  'Clean Luxury',
  'Beauty UGC',
  'Editorial Minimal',
  'Warm Lifestyle',
  'Product Focus',
  'Social Proof'
];

export const MOCK_REQUESTS = [
  {
    id: 'req-001',
    name: 'Summer Glow Serum Launch',
    brand: MOCK_BRANDS[0],
    referenceCount: 3,
    directionTags: ['Clean Luxury', 'Product Focus'],
    creator: MOCK_CREATORS[1],
    dueDate: '2026-03-20',
    status: 'In Production',
    progress: 75
  },
  {
    id: 'req-002',
    name: 'Minimalist Ring Collection',
    brand: MOCK_BRANDS[1],
    referenceCount: 5,
    directionTags: ['Editorial Minimal'],
    creator: MOCK_CREATORS[3],
    dueDate: '2026-03-25',
    status: 'In Review',
    progress: 90
  },
  {
    id: 'req-003',
    name: 'Hydrating Night Cream UGC',
    brand: MOCK_BRANDS[3],
    referenceCount: 2,
    directionTags: ['Beauty UGC', 'Social Proof'],
    creator: MOCK_CREATORS[4],
    dueDate: '2026-03-28',
    status: 'Draft',
    progress: 15
  },
  {
    id: 'req-004',
    name: 'Fall Runway Showcase',
    brand: MOCK_BRANDS[5],
    referenceCount: 8,
    directionTags: ['Clean Luxury', 'Warm Lifestyle'],
    creator: MOCK_CREATORS[0],
    dueDate: '2026-03-18',
    status: 'Delivered',
    progress: 100
  }
];

export const MOCK_METRICS = {
  activeRequests: 12,
  approvedConcepts: 45,
  creatorMatchRate: 94,
  outputReadyThisWeek: 8
};
