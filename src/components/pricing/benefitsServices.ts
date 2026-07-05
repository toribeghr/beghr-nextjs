// BEG MANAGED BENEFITS (powered by isolved) - ESTIMATE MATH.
// LOCKED RULE (July 5, 2026): no hard isolved numbers are ever displayed.
// True CPQ prices live in this file ONLY to derive rounded estimate ranges;
// the raw number never renders. The binding quote comes on the discovery call.
// Rounding rule for this silo (benefits totals run smaller than payroll):
// $25 steps for totals >= $500/mo, $10 steps below. 85% floor / 115% ceiling.
// No React in this file so every function is unit-testable.

export const BEN_TIER_ORDER = ['software', 'compliance', 'managed'] as const;
export type BenTierKey = (typeof BEN_TIER_ORDER)[number];

export interface BenTier {
  key: BenTierKey;
  name: string;
  rank: number;
  tag: string;
  features: string[];
}

export const BEN_TIERS: Record<BenTierKey, BenTier> = {
  software: {
    key: 'software', name: 'Benefits Admin Software', rank: 0,
    tag: 'Enrollment, self-served',
    features: [
      'Benefit plans set up and managed in one system',
      'Employees research, compare and enroll themselves online',
      'AI-guided plan recommendations balance cost and coverage',
      'Life events and changes handled with self-service workflows',
      'Deductions sync with payroll, real-time reporting built in',
    ],
  },
  compliance: {
    key: 'compliance', name: 'Software + ACA Compliance', rank: 1,
    tag: 'Enrollment plus ACA handled',
    features: [
      'Everything in Benefits Admin Software',
      'ACA compliance tracking across your workforce',
      'Forms 1094-C and 1095-C produced for you',
      'Variable-hour employee tracking for ACA eligibility',
    ],
  },
  managed: {
    key: 'managed', name: 'Fully Managed', rank: 2,
    tag: 'A dedicated team runs it',
    features: [
      'Everything in Software + ACA Compliance',
      'Dedicated Managed Benefits Specialist runs enrollment and changes',
      'Benefits Auditing Analyst checks your data for costly errors',
      'Open enrollment handled start to finish',
      'Carrier updates flow without your team chasing them',
    ],
  },
};

// Internal CPQ PEPM tables (PRIVATE, never rendered raw).
type PepmBand = { max: number; pepm: number };
const SOFTWARE_BANDS: PepmBand[] = [ // 9026
  { max: 99, pepm: 5.0 }, { max: 249, pepm: 4.85 }, { max: 499, pepm: 4.7 },
  { max: 999, pepm: 4.55 }, { max: 1499, pepm: 4.4 }, { max: 2499, pepm: 4.25 },
  { max: Infinity, pepm: 4.1 },
];
const COMPLIANCE_BANDS: PepmBand[] = [ // 9106
  { max: 49, pepm: 6.0 }, { max: 99, pepm: 5.75 }, { max: 149, pepm: 5.25 },
  { max: 199, pepm: 4.75 }, { max: 299, pepm: 4.5 }, { max: 499, pepm: 4.25 },
  { max: Infinity, pepm: 4.0 },
];
const MANAGED_BANDS: PepmBand[] = [ // 7934
  { max: 249, pepm: 17 }, { max: 499, pepm: 15 }, { max: 999, pepm: 12 },
  { max: 1499, pepm: 9 }, { max: 1999, pepm: 7 }, { max: 2499, pepm: 6 },
  { max: 2998, pepm: 5 }, { max: Infinity, pepm: 4.5 },
];
const CARRIER_FEED_BANDS: PepmBand[] = [ // 7773 (one-time setup per feed quoted on the call, never shown)
  { max: 99, pepm: 1.0 }, { max: 249, pepm: 0.92 }, { max: 499, pepm: 0.84 },
  { max: 999, pepm: 0.76 }, { max: 1499, pepm: 0.68 }, { max: 2499, pepm: 0.6 },
  { max: Infinity, pepm: 0.52 },
];

const TIER_BANDS: Record<BenTierKey, PepmBand[]> = {
  software: SOFTWARE_BANDS,
  compliance: COMPLIANCE_BANDS,
  managed: MANAGED_BANDS,
};

function bandPepm(bands: PepmBand[], emp: number): number {
  const band = bands.find(b => emp <= b.max) ?? bands[bands.length - 1];
  return band.pepm;
}

// Rounded estimate range. The raw CPQ number is never one of the endpoints.
export interface EstRange { low: number; high: number }
function roundRange(t: number): EstRange {
  const step = t >= 500 ? 25 : 10;
  return {
    low: Math.floor((t * 0.85) / step) * step,
    high: Math.ceil((t * 1.15) / step) * step,
  };
}

export function benEstimate(tier: BenTierKey, emp: number): EstRange {
  return roundRange(emp * bandPepm(TIER_BANDS[tier], emp));
}

export function carrierFeedEstimate(emp: number): EstRange {
  return roundRange(emp * bandPepm(CARRIER_FEED_BANDS, emp));
}

export const rangeText = (r: EstRange): string =>
  '$' + r.low.toLocaleString('en-US') + ' to $' + r.high.toLocaleString('en-US');

// Need picker: each need maps to the minimum tier that covers it.
// COBRA is flag-only (id 'cobra'): platform bundles cover it and scope is
// confirmed on the call; it never drives the tier estimate.
export interface BenNeed { id: string; name: string; desc: string; emoji: string; rank: number; flagOnly?: boolean }
export const BEN_NEEDS: BenNeed[] = [
  { id: 'enroll', name: 'Online enrollment for employees', desc: 'Employees compare plans and enroll without chasing HR', emoji: '🖱️', rank: 0 },
  { id: 'plans', name: 'Plans set up and maintained', desc: 'Benefit plans built in one system, synced with payroll', emoji: '🗂️', rank: 0 },
  { id: 'events', name: 'Life events without paperwork', desc: 'New baby, marriage, qualifying events handled in-system', emoji: '👶', rank: 0 },
  { id: 'aca', name: 'ACA tracking and 1095-C filing', desc: 'Eligibility tracked, forms produced, deadlines met', emoji: '🧾', rank: 1 },
  { id: 'varhour', name: 'Variable-hour employee tracking', desc: 'ACA eligibility watched across changing schedules', emoji: '⏱️', rank: 1 },
  { id: 'runit', name: 'A team that runs it for us', desc: 'Dedicated specialist owns enrollment, changes and carriers', emoji: '🤝', rank: 2 },
  { id: 'oe', name: 'Open enrollment fully handled', desc: 'The whole season run start to finish, not just software', emoji: '📅', rank: 2 },
  { id: 'audit', name: 'Benefits data audited for errors', desc: 'An analyst catches billing and eligibility mistakes', emoji: '🔍', rank: 2 },
  { id: 'cobra', name: 'COBRA and continuation notices', desc: 'Continuation compliance, scoped exactly on your call', emoji: '📨', rank: 0, flagOnly: true },
];

export function benRecoFromNeeds(needIds: string[]): { key: BenTierKey; rank: number } {
  const rank = BEN_NEEDS
    .filter(n => needIds.includes(n.id) && !n.flagOnly)
    .reduce((r, n) => Math.max(r, n.rank), 0);
  return { key: BEN_TIER_ORDER[rank], rank };
}
