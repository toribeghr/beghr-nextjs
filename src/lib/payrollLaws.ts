// BEG payroll-law reference data for the Final Paycheck Calculator.
// Last reviewed: June 2026. This is general information, not legal advice.
// Final-pay timing and PTO-payout treatment change; always verify against the
// current statute or with employment counsel before acting.

export type TimingBasis =
  | 'immediate'
  | 'calendarDays'
  | 'businessDays'
  | 'hours'
  | 'nextPayday';

export interface Timing {
  /** Authoritative, human-readable rule shown to the user. */
  text: string;
  basis: TimingBasis;
  /** Number of days / business days / hours, when basis needs it. */
  value?: number;
  /**
   * When set, the deadline is the computed date compared against the next
   * regular payday: 'first' = whichever comes first, 'last' = whichever is later.
   */
  vsNextPayday?: 'first' | 'last';
}

export type PtoRule = 'earned_wages' | 'policy';

export interface StateLaw {
  abbr: string;
  name: string;
  discharge: Timing;
  quit: Timing;
  pto: PtoRule;
  /** True where use-it-or-lose-it forfeiture of accrued PTO is prohibited. */
  noForfeiture?: boolean;
  ptoNote: string;
}

const NEXT_PAYDAY = (text = 'By the next regular payday.'): Timing => ({
  text,
  basis: 'nextPayday',
});

// Concise, authoritative PTO notes reused across states.
const PTO_EARNED =
  'This state treats accrued, unused PTO as earned wages, so it generally must be paid out at separation.';
const PTO_POLICY =
  'No state law forces a payout. Accrued PTO must be paid out only if your written policy or agreement provides for it, so your policy language controls.';
const PTO_NO_FORFEIT =
  'This state treats accrued PTO as earned wages and prohibits use-it-or-lose-it forfeiture, so unused PTO generally must be paid out at separation.';

export const STATE_LAWS: StateLaw[] = [
  {
    abbr: 'AL', name: 'Alabama',
    discharge: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    quit: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'AK', name: 'Alaska',
    discharge: { text: 'Within 3 working days after the termination.', basis: 'businessDays', value: 3 },
    quit: NEXT_PAYDAY('Next regular payday that is at least 3 days after the employee gives notice.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'AZ', name: 'Arizona',
    discharge: { text: 'Within 7 working days or by the next payday, whichever is sooner.', basis: 'businessDays', value: 7, vsNextPayday: 'first' },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'AR', name: 'Arkansas',
    discharge: { text: 'Within 7 days of discharge upon the employee’s request.', basis: 'calendarDays', value: 7 },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'CA', name: 'California',
    discharge: { text: 'Immediately, at the time of termination.', basis: 'immediate' },
    quit: { text: 'Within 72 hours, or immediately if the employee gave at least 72 hours’ notice.', basis: 'hours', value: 72 },
    pto: 'earned_wages', noForfeiture: true, ptoNote: PTO_NO_FORFEIT,
  },
  {
    abbr: 'CO', name: 'Colorado',
    discharge: { text: 'Immediately. Within 24 hours if the payroll unit is off-site.', basis: 'immediate' },
    quit: NEXT_PAYDAY(),
    pto: 'earned_wages', noForfeiture: true, ptoNote: PTO_NO_FORFEIT,
  },
  {
    abbr: 'CT', name: 'Connecticut',
    discharge: { text: 'By the next business day after discharge.', basis: 'businessDays', value: 1 },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'DE', name: 'Delaware',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'DC', name: 'District of Columbia',
    discharge: { text: 'By the next working day after discharge.', basis: 'businessDays', value: 1 },
    quit: { text: 'Next payday or within 7 days, whichever is sooner.', basis: 'calendarDays', value: 7, vsNextPayday: 'first' },
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'FL', name: 'Florida',
    discharge: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    quit: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'GA', name: 'Georgia',
    discharge: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    quit: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'HI', name: 'Hawaii',
    discharge: { text: 'Immediately, or by the next business day if conditions prevent immediate payment.', basis: 'businessDays', value: 1 },
    quit: NEXT_PAYDAY('Next regular payday; immediately if the employee gave one pay period’s notice.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'ID', name: 'Idaho',
    discharge: { text: 'Next payday or within 10 days (excluding weekends/holidays), whichever is sooner. Within 48 hours upon written request.', basis: 'calendarDays', value: 10, vsNextPayday: 'first' },
    quit: { text: 'Next payday or within 10 days, whichever is sooner.', basis: 'calendarDays', value: 10, vsNextPayday: 'first' },
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'IL', name: 'Illinois',
    discharge: NEXT_PAYDAY('By the next regular payday (as soon as practicable).'),
    quit: NEXT_PAYDAY('By the next regular payday (as soon as practicable).'),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'IN', name: 'Indiana',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'IA', name: 'Iowa',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'KS', name: 'Kansas',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'KY', name: 'Kentucky',
    discharge: { text: 'Next payday or within 14 days, whichever is later.', basis: 'calendarDays', value: 14, vsNextPayday: 'last' },
    quit: { text: 'Next payday or within 14 days, whichever is later.', basis: 'calendarDays', value: 14, vsNextPayday: 'last' },
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'LA', name: 'Louisiana',
    discharge: { text: 'Next payday or within 15 days, whichever is sooner.', basis: 'calendarDays', value: 15, vsNextPayday: 'first' },
    quit: { text: 'Next payday or within 15 days, whichever is sooner.', basis: 'calendarDays', value: 15, vsNextPayday: 'first' },
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'ME', name: 'Maine',
    discharge: NEXT_PAYDAY('By the next regular payday or within a reasonable time on demand.'),
    quit: NEXT_PAYDAY('By the next regular payday or within a reasonable time on demand.'),
    pto: 'earned_wages', ptoNote: 'Employers with 11+ employees must pay out accrued, unused vacation as earned wages at separation.',
  },
  {
    abbr: 'MD', name: 'Maryland',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'earned_wages', ptoNote: 'Accrued vacation must be paid out at separation unless a written policy that the employee saw clearly states otherwise.',
  },
  {
    abbr: 'MA', name: 'Massachusetts',
    discharge: { text: 'On the day of discharge.', basis: 'immediate' },
    quit: NEXT_PAYDAY('Next regular payday, or the first Saturday after if there is no scheduled payday.'),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'MI', name: 'Michigan',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'MN', name: 'Minnesota',
    discharge: { text: 'Within 24 hours of the employee’s demand for wages.', basis: 'hours', value: 24 },
    quit: NEXT_PAYDAY('Next payday; if that payday is within 5 days of the last day, payment may extend to the following payday (not over 20 days).'),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'MS', name: 'Mississippi',
    discharge: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    quit: NEXT_PAYDAY('No specific final-pay statute. Pay all wages by the next regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'MO', name: 'Missouri',
    discharge: { text: 'On the day of discharge, upon the employee’s request.', basis: 'immediate' },
    quit: NEXT_PAYDAY('No specific statute for voluntary quits. Pay by the next regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'MT', name: 'Montana',
    discharge: { text: 'Immediately. Within 4 hours or by end of business day if you have no written policy extending the time (up to the next payday or 15 days).', basis: 'immediate' },
    quit: { text: 'Next payday or within 15 days, whichever is sooner.', basis: 'calendarDays', value: 15, vsNextPayday: 'first' },
    pto: 'earned_wages', noForfeiture: true, ptoNote: PTO_NO_FORFEIT,
  },
  {
    abbr: 'NE', name: 'Nebraska',
    discharge: { text: 'Next payday or within 2 weeks, whichever is sooner.', basis: 'calendarDays', value: 14, vsNextPayday: 'first' },
    quit: { text: 'Next payday or within 2 weeks, whichever is sooner.', basis: 'calendarDays', value: 14, vsNextPayday: 'first' },
    pto: 'earned_wages', noForfeiture: true, ptoNote: PTO_NO_FORFEIT,
  },
  {
    abbr: 'NV', name: 'Nevada',
    discharge: { text: 'Immediately, but no later than 3 days after discharge.', basis: 'calendarDays', value: 3 },
    quit: { text: 'Next payday or within 7 days, whichever is sooner.', basis: 'calendarDays', value: 7, vsNextPayday: 'first' },
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'NH', name: 'New Hampshire',
    discharge: { text: 'Within 72 hours of discharge.', basis: 'hours', value: 72 },
    quit: NEXT_PAYDAY('Next regular payday; within 72 hours if the employee gave one pay period’s notice.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'NJ', name: 'New Jersey',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'NM', name: 'New Mexico',
    discharge: { text: 'Within 5 days of discharge (task/commission wages within 10 days).', basis: 'calendarDays', value: 5 },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'NY', name: 'New York',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: 'Accrued vacation must be paid out unless your written policy explicitly states that unused time is forfeited at separation.',
  },
  {
    abbr: 'NC', name: 'North Carolina',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: 'Accrued vacation must be paid out unless a written, communicated policy clearly states it is forfeited.',
  },
  {
    abbr: 'ND', name: 'North Dakota',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'OH', name: 'Ohio',
    discharge: NEXT_PAYDAY('By the next regular payday or within 15 days, whichever is earlier.'),
    quit: NEXT_PAYDAY('By the next regular payday or within 15 days, whichever is earlier.'),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'OK', name: 'Oklahoma',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'OR', name: 'Oregon',
    discharge: { text: 'By the end of the next business day after discharge.', basis: 'businessDays', value: 1 },
    quit: { text: 'Immediately if 48 hours’ notice was given; otherwise next payday or within 5 business days, whichever is sooner.', basis: 'businessDays', value: 5, vsNextPayday: 'first' },
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'PA', name: 'Pennsylvania',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'RI', name: 'Rhode Island',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'earned_wages', ptoNote: 'After one year of service, accrued vacation is treated as wages and must be paid out at separation.',
  },
  {
    abbr: 'SC', name: 'South Carolina',
    discharge: NEXT_PAYDAY('Within 48 hours of separation or by the next regular payday, not to exceed 30 days.'),
    quit: NEXT_PAYDAY('Within 48 hours of separation or by the next regular payday, not to exceed 30 days.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'SD', name: 'South Dakota',
    discharge: NEXT_PAYDAY('Next payday, or until the employee returns any employer property.'),
    quit: NEXT_PAYDAY('Next payday, or until the employee returns any employer property.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'TN', name: 'Tennessee',
    discharge: { text: 'Next payday or within 21 days, whichever is later (employers with 5+ employees).', basis: 'calendarDays', value: 21, vsNextPayday: 'last' },
    quit: { text: 'Next payday or within 21 days, whichever is later (employers with 5+ employees).', basis: 'calendarDays', value: 21, vsNextPayday: 'last' },
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'TX', name: 'Texas',
    discharge: { text: 'Within 6 calendar days of discharge.', basis: 'calendarDays', value: 6 },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'UT', name: 'Utah',
    discharge: { text: 'Within 24 hours of discharge.', basis: 'hours', value: 24 },
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'VT', name: 'Vermont',
    discharge: { text: 'Within 72 hours of discharge.', basis: 'hours', value: 72 },
    quit: NEXT_PAYDAY('Next regular payday, or the next Friday if there is no regular payday.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'VA', name: 'Virginia',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'WA', name: 'Washington',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'WV', name: 'West Virginia',
    discharge: NEXT_PAYDAY('By the next regular payday.'),
    quit: NEXT_PAYDAY('By the next regular payday.'),
    pto: 'earned_wages', ptoNote: PTO_EARNED,
  },
  {
    abbr: 'WI', name: 'Wisconsin',
    discharge: NEXT_PAYDAY('Next regular payday, or within one month at the latest.'),
    quit: NEXT_PAYDAY('Next regular payday, or within one month at the latest.'),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
  {
    abbr: 'WY', name: 'Wyoming',
    discharge: NEXT_PAYDAY(),
    quit: NEXT_PAYDAY(),
    pto: 'policy', ptoNote: PTO_POLICY,
  },
];

export function getStateLaw(abbr: string): StateLaw | undefined {
  return STATE_LAWS.find((s) => s.abbr === abbr);
}

/** Add N calendar days to a date. */
function addCalendarDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

/** Add N business days (skipping Sat/Sun) to a date. */
function addBusinessDays(d: Date, n: number): Date {
  const r = new Date(d);
  let added = 0;
  while (added < n) {
    r.setDate(r.getDate() + 1);
    const day = r.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return r;
}

export interface DeadlineResult {
  /** Concrete estimated deadline date, or null when it is purely "next payday". */
  date: Date | null;
  /** Whether the rule depends on the next regular payday. */
  usesPayday: boolean;
  ruleText: string;
}

/**
 * Compute an estimated final-pay deadline from a timing rule.
 * lastDay = employee's last day worked. nextPayday = next regular payday (optional).
 */
export function computeDeadline(timing: Timing, lastDay: Date, nextPayday?: Date | null): DeadlineResult {
  const ruleText = timing.text;
  let computed: Date | null = null;

  switch (timing.basis) {
    case 'immediate':
      computed = new Date(lastDay);
      break;
    case 'calendarDays':
      computed = addCalendarDays(lastDay, timing.value ?? 0);
      break;
    case 'businessDays':
      computed = addBusinessDays(lastDay, timing.value ?? 0);
      break;
    case 'hours':
      // Convert hours to whole days for date math (24h -> 1 day, 72h -> 3 days).
      computed = addCalendarDays(lastDay, Math.ceil((timing.value ?? 0) / 24));
      break;
    case 'nextPayday':
      return { date: nextPayday ?? null, usesPayday: true, ruleText };
  }

  if (timing.vsNextPayday && nextPayday) {
    if (timing.vsNextPayday === 'first') {
      computed = computed && computed < nextPayday ? computed : nextPayday;
    } else {
      computed = computed && computed > nextPayday ? computed : nextPayday;
    }
    return { date: computed, usesPayday: true, ruleText };
  }

  return { date: computed, usesPayday: !!timing.vsNextPayday, ruleText };
}
