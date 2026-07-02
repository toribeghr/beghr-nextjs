// BEG Instant Pricing - constants + pure math, per the LOCKED handoff spec
// (BEG_Pricing_Forms_Cowork_Handoff.md + approved artifacts, July 1, 2026).
// No React in this file so every function is unit-testable.

export const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

// Approved dark design system (from the pixel-approved artifacts)
export const G = '#ECAC60';
export const BG = '#080808';
export const SURF = '#111111';
export const CARD = '#171717';
export const LINE = '#242424';
export const T1 = '#FFFFFF';
export const T2 = '#777777';
export const T3 = '#333333';

export const money = (n: number): string => '$' + Math.round(n).toLocaleString('en-US');

// ---------- MANAGED PAYROLL (Form 2) ----------

export const MIN_MONTHLY = 500;
export const BENEFITS_PEPM = 10;
export const MULTISTATE = 300;

export const PAYROLL_TIERS = {
  existing: { rate: 25, label: 'Your Existing Platform', short: 'Existing Platform' },
  isolved: { rate: 45, label: 'BEG isolved HCM', short: 'BEG isolved' },
} as const;

export type PayrollTierKey = keyof typeof PAYROLL_TIERS;

export const NEW_SYSTEM_PROVIDERS = ['In-house / manual', 'Nothing yet / brand new'];

export interface PayrollAnswers {
  current?: { label: string };
  feeling?: { score?: number };
  scope?: { score?: number };
  involvement?: { score?: number };
}

export function computePayrollReco(ans: PayrollAnswers): { key: PayrollTierKey; reasons: string[] } {
  let score = 0;
  score += ans.feeling?.score ?? 0;
  score += ans.scope?.score ?? 0;
  score += ans.involvement?.score ?? 0;
  if (NEW_SYSTEM_PROVIDERS.includes(ans.current?.label ?? '')) score += 3;
  const key: PayrollTierKey = score >= 3 ? 'isolved' : 'existing';
  const reasons: string[] = [];
  if (NEW_SYSTEM_PROVIDERS.includes(ans.current?.label ?? '')) reasons.push("You don't have a system worth keeping - starting fresh on ours costs nothing extra to migrate");
  if ((ans.feeling?.score ?? 0) >= 2) reasons.push("You've outgrown (or can't stand) your current system");
  if ((ans.scope?.score ?? 0) >= 2) reasons.push('You need more than payroll - HR, onboarding, and docs live on our platform');
  if ((ans.involvement?.score ?? 0) >= 2) reasons.push('Fully hands-off means a dedicated Payroll Manager, which comes with our platform');
  if (key === 'existing') {
    if ((ans.feeling?.score ?? 0) === 0) reasons.push("Your current system works - no reason to pay for a migration you don't need");
    if ((ans.scope?.score ?? 0) <= 1) reasons.push('Your needs are payroll-focused, which we run perfectly in your existing system');
    reasons.push('At $25/employee, this is the leanest way to hand off payroll');
  }
  return { key, reasons: reasons.slice(0, 3) };
}

// ---------- HCM SOFTWARE (Form 3) - 5 TIERS ----------
// Comply and Grow are Anthony's official names for the top two tiers
// (confirmed July 1, 2026; $35 / $45 PEPM, no base fee).

export const HCM_TIER_ORDER = ['pay', 'build', 'manage', 'comply', 'grow'] as const;
export type HcmTierKey = (typeof HCM_TIER_ORDER)[number];

export interface HcmTier {
  name: string;
  pkg: string;
  base: number;
  pepm: number;
  emoji: string;
  rank: number;
  tagline: string;
  modules: [string, string][];
}

export const HCM_TIERS: Record<HcmTierKey, HcmTier> = {
  pay: {
    name: 'Pay', pkg: 'HR & Pay Essentials', base: 145, pepm: 10, emoji: '💵', rank: 0,
    tagline: 'Rock-solid payroll and HR foundations',
    modules: [
      ['HR Core', 'Employee records, self-service, one system of record'],
      ['Payroll', 'Full-cycle processing, taxes, W-2s, direct deposit'],
      ['General Ledger', 'Payroll mapped straight into your accounting'],
      ['HR Compliance Track', 'Federal and state alerts before deadlines hit'],
      ['HR Services Essential', 'Expert HR guidance when questions come up'],
      ['1 Standard Integration', 'Connect one tool you already use'],
    ],
  },
  build: {
    name: 'Build', pkg: 'HR & Pay Plus', base: 155, pepm: 12, emoji: '🧱', rank: 1,
    tagline: 'Everything in Pay, plus hiring firepower',
    modules: [
      ['isolved Attract & Hire', 'Post jobs, track applicants, hire from one screen'],
      ['Hiring Services Jumpstart', 'Recruiting setup done for you, not by you'],
    ],
  },
  manage: {
    name: 'Manage', pkg: 'Workforce Essentials', base: 190, pepm: 17, emoji: '🏛️', rank: 2,
    tagline: 'The full operational people function',
    modules: [
      ['HR on Demand', 'Live HR experts on call for the hard stuff'],
      ['Onboarding & Offboarding', 'Paperless day-one and clean exits'],
      ['Time & Labor Management', 'Punches, timecards, geofencing, approvals'],
      ['Scheduling', 'Build and share shift schedules employees see live'],
      ['Expense Management', 'Snap receipts, approve, reimburse through payroll'],
      ['401(k) 360 Integration', 'Deferrals sync both ways with your provider'],
      ['isolved Perform', 'Reviews, goals and feedback that actually happen'],
    ],
  },
  comply: {
    name: 'Comply', pkg: 'Benefits, Compliance & Analytics', base: 0, pepm: 35, emoji: '📊', rank: 3,
    tagline: 'Benefits administration and people analytics, handled',
    modules: [
      ['Benefits Enrollment & Administration', 'Open enrollment and elections run inside the platform'],
      ['ACA Compliance', '1094-C and 1095-C tracking and filings, automated'],
      ['COBRA Administration', 'Notices, elections and premium billing off your plate'],
      ['Benefits Carrier Feeds', 'EDI connections push changes to carriers automatically'],
      ['Leave Management', 'FMLA and leave tracking with compliant workflows'],
      ['Predictive People Analytics', 'Flight-risk and workforce trends before they bite'],
      ['Benchmark Insights', 'Your pay and turnover vs. companies like yours'],
      ['Managed Garnishment Services', 'Court orders processed and remitted for you'],
    ],
  },
  grow: {
    name: 'Grow', pkg: 'Full Talent Suite', base: 0, pepm: 45, emoji: '👑', rank: 4,
    tagline: 'Attract, develop and keep your best people',
    modules: [
      ['Performance Management', '360 reviews, goal cascades and continuous feedback'],
      ['Learning Management System', 'Courses, certifications and career paths in-platform'],
      ['Content Library', 'Ready-made training content from day one'],
      ['Engagement Management', 'Surveys, recognition walls and pulse checks'],
      ['Compensation Management', 'Merit cycles and comp planning without spreadsheets'],
      ['Giving & Volunteering', 'Charitable programs your people rally around'],
      ['e-Verify I-9', 'Work eligibility verification built into onboarding'],
      ['Video Interviews by Wedge', 'Screen candidates on video before the first call'],
    ],
  },
};

export const HCM_PLATFORM_FEATURES: [string, string, string][] = [
  ['🤖', 'isolved Connector for Claude', 'Ask Claude AI to run the task and isolved does it. Chatbots answer questions. isolved completes the work.'],
  ['✨', 'Always-on HR Assistant', 'Employees get instant answers on pay, PTO and benefits 24/7'],
  ['📱', 'People Cloud Mobile App', 'Pay stubs, punches, time off and benefits from any phone'],
];

export interface HcmAnswers {
  hiring?: { score?: number };
  hourly?: { score?: number };
  depth?: { lvl?: number };
  benefitsAdmin?: { need?: boolean };
}

export function computeHcmReco(ans: HcmAnswers): { key: HcmTierKey; rank: number; reasons: string[]; bensNeed: boolean } {
  const hire = ans.hiring?.score ?? 0;
  const hourly = ans.hourly?.score ?? 0;
  const depthLvl = ans.depth?.lvl ?? 0;
  const bensNeed = ans.benefitsAdmin?.need === true;

  let rank = 0;
  if (hire >= 1) rank = Math.max(rank, 1);
  if (hourly >= 2 || depthLvl >= 2) rank = Math.max(rank, 2);
  if (bensNeed) rank = Math.max(rank, 3);
  if (depthLvl >= 4) rank = Math.max(rank, 4);
  const key = HCM_TIER_ORDER[rank];

  const reasons: string[] = [];
  if (rank === 4) {
    reasons.push('You want the talent layer - performance, learning and engagement only live in Grow');
    if (bensNeed) reasons.push('Benefits Enrollment, ACA and COBRA are included, giving that work a real owner');
    if (hourly >= 2) reasons.push('Time & Labor and Scheduling for your hourly teams come with it');
  } else if (rank === 3) {
    reasons.push('Benefits admin has no clear owner - Comply puts enrollment, ACA and COBRA inside the platform');
    reasons.push('Predictive analytics and benchmarks tell you what your people data is hiding');
    if (hourly >= 2) reasons.push('Time & Labor and Scheduling for your hourly teams are included');
  } else if (rank === 2) {
    if (hourly >= 2) reasons.push('You run hourly teams - Time & Labor and Scheduling start in Manage');
    if (depthLvl >= 2) reasons.push('You want onboarding, time and expenses handled, not just payroll');
    if (hire >= 1) reasons.push('Attract & Hire is included, so open roles are covered too');
    if (!reasons.length) reasons.push('Your combined needs land squarely in the operational tier');
  } else if (rank === 1) {
    reasons.push("You're hiring - Attract & Hire and Hiring Services Jumpstart earn their keep immediately");
    if (hourly === 0) reasons.push('No hourly workforce means you can skip paying for time tracking');
    reasons.push('Only $2 more per employee than Pay for a full recruiting engine');
  } else {
    reasons.push("Your needs are payroll and HR records - no reason to pay for modules you won't touch");
    reasons.push('At $10 per employee this is the leanest way onto a real HCM platform');
    if (hire === 0) reasons.push('Stable team means recruiting tools would sit idle');
  }
  return { key, rank, reasons: reasons.slice(0, 3), bensNeed };
}

export function hcmAllModules(key: HcmTierKey): [string, string][] {
  const rank = HCM_TIERS[key].rank;
  let mods: [string, string][] = [];
  for (let i = 0; i <= rank; i++) mods = [...mods, ...HCM_TIERS[HCM_TIER_ORDER[i]].modules];
  return mods;
}
