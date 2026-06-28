'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

type Category = 'Federal' | 'State' | 'Year-End';

interface Deadline {
  date: string;
  month: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  category: Category;
  task: string;
  appliesTo: string;
  note: string;
}

const DEADLINES: Deadline[] = [
  // JANUARY
  {
    date: 'Jan 15, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Monthly federal tax deposit (December liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit withheld income tax, Social Security, and Medicare for December by the 15th of the following month.',
  },
  {
    date: 'Jan 31, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Form 941 (Q4 2025)',
    appliesTo: 'All employers who file quarterly',
    note: 'Report Q4 2025 wages and withholding on the employer\'s quarterly federal tax return.',
  },
  {
    date: 'Jan 31, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Form 940 FUTA (2025)',
    appliesTo: 'Employers subject to federal unemployment tax',
    note: 'File the annual FUTA return; if all deposits were made on time the deadline extends to Feb 10.',
  },
  {
    date: 'Jan 31, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'Year-End',
    task: 'W-2 to employees and SSA',
    appliesTo: 'All employers with W-2 employees',
    note: 'Furnish W-2s to employees and file copies with the Social Security Administration by this date.',
  },
  {
    date: 'Jan 31, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'Year-End',
    task: '1099-NEC to recipients and IRS',
    appliesTo: 'Businesses that paid contractors $600 or more',
    note: 'Send 1099-NEC to each contractor and file with the IRS for nonemployee compensation paid in 2025.',
  },
  {
    date: 'Jan 31, 2026',
    month: 'January',
    quarter: 'Q1',
    category: 'State',
    task: 'Q4 2025 state UI / SUTA return',
    appliesTo: 'Employers in states with quarterly unemployment filing',
    note: 'File the fourth-quarter state unemployment wage report and pay any SUTA balance due.',
  },
  // FEBRUARY
  {
    date: 'Feb 17, 2026',
    month: 'February',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Monthly federal tax deposit (January liability)',
    appliesTo: 'Monthly depositors',
    note: 'The normal 15th deposit shifts to Feb 17 because of the weekend and the Presidents Day holiday.',
  },
  {
    date: 'Feb 28, 2026',
    month: 'February',
    quarter: 'Q1',
    category: 'Federal',
    task: 'ACA 1094-C / 1095-C paper filing',
    appliesTo: 'Applicable large employers filing on paper',
    note: 'Paper filers of ACA forms must submit to the IRS by this date; e-filers get until March 31.',
  },
  // MARCH
  {
    date: 'Mar 16, 2026',
    month: 'March',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Monthly federal tax deposit (February liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit February withholding and payroll taxes by the 15th, adjusted to Mar 16 for the weekend.',
  },
  {
    date: 'Mar 31, 2026',
    month: 'March',
    quarter: 'Q1',
    category: 'Federal',
    task: 'ACA 1094-C / 1095-C e-filing',
    appliesTo: 'Applicable large employers filing electronically',
    note: 'Employers filing 10 or more returns must e-file ACA information returns by this date.',
  },
  // APRIL
  {
    date: 'Apr 15, 2026',
    month: 'April',
    quarter: 'Q2',
    category: 'Federal',
    task: 'Monthly federal tax deposit (March liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit March withholding and payroll taxes by the 15th of the following month.',
  },
  {
    date: 'Apr 30, 2026',
    month: 'April',
    quarter: 'Q2',
    category: 'Federal',
    task: 'Form 941 (Q1 2026)',
    appliesTo: 'All employers who file quarterly',
    note: 'Report first-quarter wages and withholding on the employer\'s quarterly federal tax return.',
  },
  {
    date: 'Apr 30, 2026',
    month: 'April',
    quarter: 'Q2',
    category: 'State',
    task: 'Q1 2026 state UI / SUTA return',
    appliesTo: 'Employers in states with quarterly unemployment filing',
    note: 'File the first-quarter state unemployment wage report and pay any SUTA balance due.',
  },
  // MAY
  {
    date: 'May 15, 2026',
    month: 'May',
    quarter: 'Q2',
    category: 'Federal',
    task: 'Monthly federal tax deposit (April liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit April withholding and payroll taxes by the 15th of the following month.',
  },
  // JUNE
  {
    date: 'Jun 15, 2026',
    month: 'June',
    quarter: 'Q2',
    category: 'Federal',
    task: 'Monthly federal tax deposit (May liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit May withholding and payroll taxes by the 15th of the following month.',
  },
  // JULY
  {
    date: 'Jul 15, 2026',
    month: 'July',
    quarter: 'Q3',
    category: 'Federal',
    task: 'Monthly federal tax deposit (June liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit June withholding and payroll taxes by the 15th of the following month.',
  },
  {
    date: 'Jul 31, 2026',
    month: 'July',
    quarter: 'Q3',
    category: 'Federal',
    task: 'Form 941 (Q2 2026)',
    appliesTo: 'All employers who file quarterly',
    note: 'Report second-quarter wages and withholding on the employer\'s quarterly federal tax return.',
  },
  {
    date: 'Jul 31, 2026',
    month: 'July',
    quarter: 'Q3',
    category: 'State',
    task: 'Q2 2026 state UI / SUTA return',
    appliesTo: 'Employers in states with quarterly unemployment filing',
    note: 'File the second-quarter state unemployment wage report and pay any SUTA balance due.',
  },
  // AUGUST
  {
    date: 'Aug 17, 2026',
    month: 'August',
    quarter: 'Q3',
    category: 'Federal',
    task: 'Monthly federal tax deposit (July liability)',
    appliesTo: 'Monthly depositors',
    note: 'The normal 15th deposit shifts to Aug 17 because the 15th falls on a weekend.',
  },
  // SEPTEMBER
  {
    date: 'Sep 15, 2026',
    month: 'September',
    quarter: 'Q3',
    category: 'Federal',
    task: 'Monthly federal tax deposit (August liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit August withholding and payroll taxes by the 15th of the following month.',
  },
  // OCTOBER
  {
    date: 'Oct 15, 2026',
    month: 'October',
    quarter: 'Q4',
    category: 'Federal',
    task: 'Monthly federal tax deposit (September liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit September withholding and payroll taxes by the 15th of the following month.',
  },
  {
    date: 'Oct 31, 2026',
    month: 'October',
    quarter: 'Q4',
    category: 'Federal',
    task: 'Form 941 (Q3 2026)',
    appliesTo: 'All employers who file quarterly',
    note: 'Report third-quarter wages and withholding on the employer\'s quarterly federal tax return.',
  },
  {
    date: 'Oct 31, 2026',
    month: 'October',
    quarter: 'Q4',
    category: 'State',
    task: 'Q3 2026 state UI / SUTA return',
    appliesTo: 'Employers in states with quarterly unemployment filing',
    note: 'File the third-quarter state unemployment wage report and pay any SUTA balance due.',
  },
  // NOVEMBER
  {
    date: 'Nov 16, 2026',
    month: 'November',
    quarter: 'Q4',
    category: 'Federal',
    task: 'Monthly federal tax deposit (October liability)',
    appliesTo: 'Monthly depositors',
    note: 'The normal 15th deposit shifts to Nov 16 because the 15th falls on a weekend.',
  },
  // DECEMBER
  {
    date: 'Dec 15, 2026',
    month: 'December',
    quarter: 'Q4',
    category: 'Federal',
    task: 'Monthly federal tax deposit (November liability)',
    appliesTo: 'Monthly depositors',
    note: 'Deposit November withholding and payroll taxes by the 15th of the following month.',
  },
  {
    date: 'Dec 31, 2026',
    month: 'December',
    quarter: 'Q4',
    category: 'Year-End',
    task: 'Final 2026 payroll run and bonus cutoff',
    appliesTo: 'All employers closing out the year',
    note: 'Process the last payroll, apply year-end bonuses and fringe benefits, and confirm W-2 data is accurate before close.',
  },
  // JANUARY 2027 (year-end rollover)
  {
    date: 'Jan 31, 2027',
    month: 'January 2027',
    quarter: 'Q1',
    category: 'Federal',
    task: 'Form 941 (Q4 2026)',
    appliesTo: 'All employers who file quarterly',
    note: 'Report fourth-quarter 2026 wages and withholding on the employer\'s quarterly federal tax return.',
  },
  {
    date: 'Jan 31, 2027',
    month: 'January 2027',
    quarter: 'Q1',
    category: 'Year-End',
    task: 'W-2 and 1099-NEC for 2026',
    appliesTo: 'All employers with employees or contractors',
    note: 'Furnish 2026 W-2s and 1099-NECs and file copies with the SSA and IRS by this date.',
  },
];

const CATEGORY_FILTERS: Array<'All' | Category> = ['All', 'Federal', 'State', 'Year-End'];
const QUARTER_FILTERS = ['All', 'Q1', 'Q2', 'Q3', 'Q4'] as const;

function categoryColor(category: Category): string {
  if (category === 'Federal') return '#ECAC60';
  if (category === 'State') return '#5b9bd5';
  return '#7aa874';
}

export default function PayrollTaxCalendar() {
  const [category, setCategory] = useState<'All' | Category>('All');
  const [quarter, setQuarter] = useState<(typeof QUARTER_FILTERS)[number]>('All');

  const calendly = getCalendlyLink();

  const filtered = DEADLINES.filter(d => {
    const catMatch = category === 'All' || d.category === category;
    const qMatch = quarter === 'All' || d.quarter === quarter;
    return catMatch && qMatch;
  });

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>

          {/* DISCLAIMER */}
          <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginBottom: '1.75rem', lineHeight: '1.5' }}>
            General information for 2026. Verify current dates with the IRS and your state agency.
          </p>

          {/* FILTERS */}
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '1.5rem 1.75rem', border: '1px solid #e5e5e5', marginBottom: '2rem' }}>
            {/* Category */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontWeight: '700', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#000', marginBottom: '0.6rem', marginTop: 0 }}>
                Filter by category
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {CATEGORY_FILTERS.map(c => {
                  const active = category === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      style={{
                        cursor: 'pointer',
                        border: active ? '2px solid #ECAC60' : '2px solid #ddd',
                        background: active ? '#ECAC60' : '#fff',
                        color: active ? '#000' : '#444',
                        fontWeight: active ? '800' : '600',
                        fontSize: '0.85rem',
                        padding: '0.5rem 1.1rem',
                        borderRadius: '999px',
                      }}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quarter */}
            <div>
              <p style={{ fontWeight: '700', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#000', marginBottom: '0.6rem', marginTop: 0 }}>
                Filter by quarter
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {QUARTER_FILTERS.map(q => {
                  const active = quarter === q;
                  return (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuarter(q)}
                      style={{
                        cursor: 'pointer',
                        border: active ? '2px solid #000' : '2px solid #ddd',
                        background: active ? '#000' : '#fff',
                        color: active ? '#fff' : '#444',
                        fontWeight: active ? '800' : '600',
                        fontSize: '0.85rem',
                        padding: '0.5rem 1.1rem',
                        borderRadius: '999px',
                      }}
                    >
                      {q}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RESULT COUNT */}
          <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '1.25rem' }}>
            Showing {filtered.length} {filtered.length === 1 ? 'deadline' : 'deadlines'}
            {category !== 'All' ? ' in ' + category : ''}
            {quarter !== 'All' ? ' for ' + quarter : ''}.
          </p>

          {/* DEPOSIT SCHEDULE NOTE */}
          <p style={{ background: '#fff', borderLeft: '3px solid #ECAC60', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.85rem', color: '#555', lineHeight: '1.6', margin: '0 0 2rem', border: '1px solid #eee', borderLeftWidth: '3px' }}>
            Deposit schedule note: monthly depositors deposit by the 15th of the following month. Semiweekly depositors follow a separate rule -- taxes for Wednesday, Thursday, or Friday paydays are due the following Wednesday, and taxes for Saturday through Tuesday paydays are due the following Friday. Your deposit schedule is set each year by your lookback period.
          </p>

          {/* CARDS */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888', padding: '2rem 0' }}>
              No deadlines match that combination. Try a different filter.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {filtered.map((d, i) => (
                <div
                  key={d.task + d.date + i}
                  style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '1.4rem', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: '900', color: '#000' }}>{d.date}</span>
                    <span style={{ fontSize: '0.62rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#000', background: categoryColor(d.category), padding: '0.25rem 0.6rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                      {d.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem', lineHeight: '1.35' }}>
                    {d.task}
                  </h3>
                  <p style={{ fontSize: '0.74rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ECAC60', margin: '0 0 0.6rem' }}>
                    {d.appliesTo}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.6', margin: 0 }}>
                    {d.note}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CALENDLY CTA */}
      <section className="section" style={{ background: '#000', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '660px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Hand It Off</p>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Never miss a deadline again.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG tracks and files every one of these dates as part of fully managed payroll at $25 to $45 per employee per month. Form 941, FUTA, W-2s, 1099s, ACA, state UI returns, and on-time deposits are all handled for you, so nothing slips through.
          </p>
          <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
