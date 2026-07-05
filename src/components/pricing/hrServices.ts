// BEG HR OUTSOURCING (isolved HR Services referral) - ESTIMATE MATH.
// LOCKED RULE (July 5, 2026): no hard isolved numbers are ever displayed.
// True CPQ prices live in this file ONLY to derive rounded estimate ranges;
// the raw number never renders. The binding quote comes from isolved on the call.
// No React in this file so every function is unit-testable.

export const HR_TIER_ORDER = ['essential', 'expert', 'elite'] as const;
export type HrTierKey = (typeof HR_TIER_ORDER)[number];

export interface HrTier {
  key: HrTierKey;
  name: string;
  rank: number;
  tag: string;
  features: string[];
}

export const HR_TIERS: Record<HrTierKey, HrTier> = {
  essential: {
    key: 'essential', name: 'Essential', rank: 0,
    tag: 'Answers on demand',
    features: [
      'Live phone and email access to HR professionals (8AM-8PM ET weekdays)',
      'Handbook builder, policy and form libraries, job description library',
      'Federal and state employment law library with minimum wage map',
      'FMLA and state leave guidelines, hiring and termination checklists',
    ],
  },
  expert: {
    key: 'expert', name: 'Expert', rank: 1,
    tag: 'Done-for-you compliance',
    features: [
      'Everything in Essential',
      'Custom employee handbook built and updated for you (2 states)',
      'Labor law posters with updates, state new hire packets',
      'HR Gap Review, custom job descriptions, PayScale salary benchmarks',
      'In-depth guidance through every leave of absence',
    ],
  },
  elite: {
    key: 'elite', name: 'Elite', rank: 2,
    tag: 'Your dedicated HR partner',
    features: [
      'Everything in Expert',
      'Dedicated HR Business Partner as your single point of contact',
      'Full HR assessment with written recommendations',
      'Monthly check-ins and bi-annual strategic reviews',
      'Proactive alerts when law changes hit your business',
      'Performance coaching for up to 3 managers, 2 HR projects per year',
    ],
  },
};

// Internal CPQ tables (PRIVATE, never rendered raw).
// Over-50 PEPM by band; under-50 flat monthly blocks.
type Band = { max: number; pepm: [number, number, number] }; // [essential, expert, elite]
const PEPM_BANDS: Band[] = [
  { max: 100, pepm: [8.0, 15.0, 30.0] },
  { max: 150, pepm: [7.75, 14.0, 25.0] },
  { max: 200, pepm: [7.5, 13.0, 20.0] },
  { max: 250, pepm: [7.25, 12.0, 18.0] },
  { max: 300, pepm: [7.0, 11.0, 17.0] },
  { max: 350, pepm: [6.75, 10.0, 16.0] },
  { max: 400, pepm: [6.5, 9.0, 15.0] },
  { max: 450, pepm: [6.25, 8.0, 14.0] },
  { max: 500, pepm: [6.0, 7.5, 13.0] },
  { max: 600, pepm: [4.0, 7.0, 12.5] },
  { max: 700, pepm: [3.75, 6.5, 12.0] },
  { max: 800, pepm: [3.5, 6.0, 11.5] },
  { max: 1000, pepm: [3.25, 5.0, 10.5] },
  { max: 2000, pepm: [3.15, 4.5, 8.0] },
  { max: 2999, pepm: [3.05, 4.25, 6.0] },
  { max: Infinity, pepm: [3.0, 4.0, 5.5] },
];
// Under-50 flat monthly: [1-25, 26-50]
const FLAT_UNDER_50: Record<HrTierKey, [number, number]> = {
  essential: [230, 460],
  expert: [375, 750],
  elite: [862.5, 1725],
};
// Managed Benefits add-on PEPM (internal)
const BENEFITS_PEPM_BANDS: { max: number; pepm: number }[] = [
  { max: 249, pepm: 17 }, { max: 499, pepm: 15 }, { max: 999, pepm: 12 },
  { max: 1499, pepm: 9 }, { max: 1999, pepm: 7 }, { max: Infinity, pepm: 6 },
];

function truePrice(tier: HrTierKey, emp: number): number {
  if (emp <= 50) {
    const [small, large] = FLAT_UNDER_50[tier];
    return emp <= 25 ? small : large;
  }
  const band = PEPM_BANDS.find(b => emp <= b.max) ?? PEPM_BANDS[PEPM_BANDS.length - 1];
  return emp * band.pepm[HR_TIERS[tier].rank];
}

// Rounded estimate range. The raw CPQ number is never one of the endpoints:
// low = 85% rounded down to $25, high = 115% rounded up to $25.
export interface EstRange { low: number; high: number }
export function hrEstimate(tier: HrTierKey, emp: number): EstRange {
  const t = truePrice(tier, emp);
  return {
    low: Math.floor((t * 0.85) / 25) * 25,
    high: Math.ceil((t * 1.15) / 25) * 25,
  };
}

export function hrBenefitsEstimate(emp: number): EstRange {
  const band = BENEFITS_PEPM_BANDS.find(b => emp <= b.max) ?? BENEFITS_PEPM_BANDS[BENEFITS_PEPM_BANDS.length - 1];
  const t = emp * band.pepm;
  return {
    low: Math.floor((t * 0.85) / 25) * 25,
    high: Math.ceil((t * 1.15) / 25) * 25,
  };
}

export const rangeText = (r: EstRange): string =>
  '$' + r.low.toLocaleString('en-US') + ' to $' + r.high.toLocaleString('en-US');

// Need picker: each need maps to the minimum tier that covers it.
export interface HrNeed { id: string; name: string; desc: string; emoji: string; rank: number }
export const HR_NEEDS: HrNeed[] = [
  { id: 'answers', name: 'Fast answers from an HR pro', desc: 'Phone and email access for tricky employee questions', emoji: '📞', rank: 0 },
  { id: 'library', name: 'Policies, forms and law library', desc: 'Self-service templates plus federal and state law lookups', emoji: '📚', rank: 0 },
  { id: 'handbook', name: 'Employee handbook built for us', desc: 'Custom handbook written, updated and kept compliant', emoji: '📘', rank: 1 },
  { id: 'posters', name: 'Posters and new hire packets', desc: 'Labor law posters and state-specific hiring paperwork', emoji: '📋', rank: 1 },
  { id: 'comp', name: 'Job descriptions and pay benchmarks', desc: 'Compliant job descriptions plus market salary reports', emoji: '💰', rank: 1 },
  { id: 'leave', name: 'Leave of absence guidance', desc: 'FMLA and state leave handled correctly, start to finish', emoji: '🌴', rank: 1 },
  { id: 'partner', name: 'A dedicated HR partner', desc: 'One named HR pro who knows your business, monthly check-ins', emoji: '🤝', rank: 2 },
  { id: 'alerts', name: 'Proactive compliance alerts', desc: 'Law changes monitored, you get told when action is needed', emoji: '🚨', rank: 2 },
  { id: 'coaching', name: 'Manager coaching and strategy', desc: 'Performance management coaching plus strategic HR reviews', emoji: '🧭', rank: 2 },
];

export function hrRecoFromNeeds(needIds: string[]): { key: HrTierKey; rank: number } {
  const rank = HR_NEEDS.filter(n => needIds.includes(n.id)).reduce((r, n) => Math.max(r, n.rank), 0);
  return { key: HR_TIER_ORDER[rank], rank };
}
