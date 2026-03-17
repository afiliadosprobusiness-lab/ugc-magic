export const MOCK_BRANDS = [
  "Auren Skin",
  "Solis Jewelry",
  "Lumera Beauty",
  "Vale Atelier",
  "North House",
  "Vanta Studio"
];

export const MOCK_CREATORS = [
  { id: 1, name: "Mia", vibe: "Clean Luxury", score: 98, formats: ["Reels", "TikTok"], bestFor: "Product Focus", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 2, name: "Lena", vibe: "Editorial Minimal", score: 95, formats: ["Photos", "Reels"], bestFor: "Sensory Details", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 3, name: "Ava", vibe: "Beauty UGC", score: 92, formats: ["TikTok", "Shorts"], bestFor: "Social Proof", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 4, name: "Clara", vibe: "Warm Lifestyle", score: 90, formats: ["Photos", "Carousels"], bestFor: "Brand Story", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 5, name: "Sofia", vibe: "Clean Luxury", score: 88, formats: ["Reels"], bestFor: "ASMR Unboxing", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 6, name: "Elise", vibe: "Editorial Minimal", score: 85, formats: ["Photos"], bestFor: "Macro Shots", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200" },
];

export const MOCK_DIRECTION_TAGS = [
  "Clean Luxury",
  "Beauty UGC",
  "Editorial Minimal",
  "Warm Lifestyle",
  "Product Focus",
  "Social Proof"
];

export const MOCK_REQUESTS = [
  { id: "REQ-01", name: "Summer Launch", brand: "Auren Skin", refCount: 4, tags: ["Clean Luxury", "Product Focus"], creator: "Mia", due: "Oct 12", status: "In Production", progress: 65 },
  { id: "REQ-02", name: "Holiday Glow Set", brand: "Lumera Beauty", refCount: 6, tags: ["Beauty UGC", "Social Proof"], creator: "Ava", due: "Oct 14", status: "In Review", progress: 90 },
  { id: "REQ-03", name: "Gold Collection", brand: "Solis Jewelry", refCount: 2, tags: ["Editorial Minimal"], creator: "Lena", due: "Oct 18", status: "Approved", progress: 20 },
  { id: "REQ-04", name: "Everyday Carry", brand: "Vanta Studio", refCount: 3, tags: ["Warm Lifestyle"], creator: "Clara", due: "Oct 20", status: "Draft", progress: 5 },
  { id: "REQ-05", name: "Silk Robes", brand: "North House", refCount: 5, tags: ["Clean Luxury", "Social Proof"], creator: "Sofia", due: "Oct 22", status: "Delivered", progress: 100 },
];

export const MOCK_KPIS = {
  activeRequests: 12,
  approvedConcepts: 48,
  creatorMatchRate: 94,
  outputReady: 15
};

export const MOCK_ASSETS = [
  { id: "A-01", thumb: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300", title: "Serum Texture", brand: "Auren Skin", tag: "Concept", status: "Approved", date: "Oct 05" },
  { id: "A-02", thumb: "https://images.unsplash.com/photo-1608248593842-8d765b217dc3?auto=format&fit=crop&q=80&w=400&h=300", title: "Necklace Macro", brand: "Solis Jewelry", tag: "Frame", status: "In Review", date: "Oct 06" },
  { id: "A-03", thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400&h=300", title: "Lipstick Swipe", brand: "Lumera Beauty", tag: "Motion", status: "Delivered", date: "Oct 07" },
  { id: "A-04", thumb: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400&h=300", title: "Studio Light Setup", brand: "Vale Atelier", tag: "Video", status: "Delivered", date: "Oct 08" },
  { id: "A-05", thumb: "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&q=80&w=400&h=300", title: "Lounge Wear", brand: "North House", tag: "Concept", status: "Approved", date: "Oct 09" },
  { id: "A-06", thumb: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400&h=300", title: "Watch Detail", brand: "Vanta Studio", tag: "Frame", status: "In Review", date: "Oct 10" },
];
