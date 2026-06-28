'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

const GOLD = '#ECAC60';

const RUNS_PER_YEAR: Record<string, number> = {
  weekly: 52,
  'bi-weekly': 26,
  'semi-monthly': 24,
  monthly: 12,
};

interface Fee {
  id: string;
  label: string;
  note: string;
  // annual cost estimators given employee count (n) and runs/year (r)
  low: (n: number, r: number) => number;
  high: (n: number, r: number) => number;
}

// Typical add-on fees billed on top of base by per-run / fee-stacking providers.
// Ranges are illustrative industry typicals, not a quote.
const FEES: Fee[] = [
  { id: 'perrun', label: 'Per-payroll-run fee', note: 'A flat charge every time you run payroll. Weekly schedules pay it 52 times a year.', low: (_n, r) => 3 * r, high: (_n, r) => 10 * r },
  { id: 'percheck', label: 'Per-employee / per-check fee', note: 'Charged per person, per run. Scales with headcount and pay frequency.', low: (n, r) => 1.5 * n * r, high: (n, r) => 4 * n * r },
  { id: 'taxfiling', label: 'Tax filing surcharge', note: 'A monthly add-on to actually file the taxes they calculate.', low: () => 12 * 10, high: () => 12 * 25 },
  { id: 'yearend', label: 'Year-end / W-2 / 1099 fee', note: 'A seasonal charge to produce the forms you are legally required to file.', low: (n) => 50 + 4 * n, high: (n) => 90 + 8 * n },
  { id: 'offcycle', label: 'Off-cycle / bonus run fee', note: 'Charged for any run outside the normal schedule, like a bonus or correction.', low: () => 25 * 4, high: () => 75 * 6 },
  { id: 'delivery', label: 'Check printing / delivery fee', note: 'Printing, stuffing, or shipping physical checks.', low: () => 12 * 8, high: () => 12 * 20 },
  { id: 'reports', label: 'Custom report fee', note: 'Charged to pull reports beyond the basic set.', low: () => 12 * 10, high: () => 12 * 30 },
  { id: 'correction', label: 'Error / correction fee', note: 'You pay to fix a mistake, sometimes even their mistake.', low: () => 25 * 3, high: () => 60 * 5 },
  { id: 'integration', label: 'Accounting / HR integration fee', note: 'Charged to connect payroll to the tools you already use.', low: () => 12 * 10, high: () => 12 * 25 },
  { id: 'newhire', label: 'New employee setup fee', note: 'A per-person charge just to add a new hire to the system.', low: (n) => 10 * Math.max(2, Math.round(n * 0.2)), high: (n) => 25 * Math.max(2, Math.round(n * 0.3)) },
  { id: 'garnish', label: 'Garnishment processing fee', note: 'A recurring per-garnishment charge to withhold and remit court orders.', low: () => 12 * 5, high: () => 12 * 12 },
  { id: 'setup', label: 'Setup / implementation fee', note: 'A one-time charge to onboard you. Often waived if you ask.', low: () => 50, high: () => 300 },
];

const dollars = (v: number) => '$' + Math.round(v).toLocaleString();

interface Result {
  pepm: number;
  annual: number;
  feeCount: number;
  addonLow: number;
  addonHigh: number;
  verdict: 'overpaying' | 'in-range' | 'opaque';
}

export default function HiddenFeeAuditor() {
  const [employees, setEmployees] = useState('');
  const [frequency, setFrequency] = useState('bi-weekly');
  const [bill, setBill] = useState('');
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<Result | null>(null);

  const calendly = getCalendlyLink();

  function toggle(id: string) {
    setChecked((c) => ({ ...c, [id]: !c[id] }));
  }

  const n = parseInt(employees, 10);
  const b = parseFloat(bill);
  const canRun = n > 0 && b > 0;

  function handleAudit() {
    if (!canRun) return;
    const r = RUNS_PER_YEAR[frequency] || 26;
    const pepm = b / n;
    const annual = b * 12;
    let addonLow = 0;
    let addonHigh = 0;
    let feeCount = 0;
    for (const fee of FEES) {
      if (checked[fee.id]) {
        feeCount += 1;
        addonLow += fee.low(n, r);
        addonHigh += fee.high(n, r);
      }
    }
    let verdict: Result['verdict'] = 'in-range';
    if (pepm > 45) verdict = 'overpaying';
    else if (feeCount >= 4) verdict = 'opaque';
    setResult({ pepm, annual, feeCount, addonLow, addonHigh, verdict });
  }

  function handleClear() {
    setEmployees('');
    setBill('');
    setChecked({});
    setResult(null);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', border: '2px solid #ddd', borderRadius: '8px',
    padding: '0.7rem 0.85rem', fontSize: '0.95rem', fontFamily: 'inherit', color: '#000', background: '#fff',
  };
  const labelStyle: React.CSSProperties = { fontWeight: 700, fontSize: '0.9rem', display: 'block', marginBottom: '0.4rem', color: '#000' };

  const verdictColor = result
    ? result.verdict === 'overpaying' ? '#ef4444' : result.verdict === 'opaque' ? GOLD : '#4ade80'
    : GOLD;
  const verdictLabel = result
    ? result.verdict === 'overpaying' ? 'Likely overpaying' : result.verdict === 'opaque' ? 'Hard to tell -- and that is the problem' : 'In the typical range'
    : '';

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
            <div>
              <label style={labelStyle} htmlFor="emp">Number of employees</label>
              <input id="emp" type="number" min="1" inputMode="numeric" value={employees} onChange={(e) => setEmployees(e.target.value)} placeholder="e.g. 45" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="freq">Pay frequency</label>
              <select id="freq" value={frequency} onChange={(e) => setFrequency(e.target.value)} style={inputStyle}>
                <option value="weekly">Weekly (52/yr)</option>
                <option value="bi-weekly">Bi-weekly (26/yr)</option>
                <option value="semi-monthly">Semi-monthly (24/yr)</option>
                <option value="monthly">Monthly (12/yr)</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="bill">Current payroll bill / month</label>
              <input id="bill" type="number" min="0" inputMode="decimal" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="e.g. 1200" style={inputStyle} />
            </div>
          </div>

          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#000', marginBottom: '0.75rem' }}>
            Which of these add-on fees are you charged? (Check all that apply)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem', marginBottom: '1.75rem' }}>
            {FEES.map((fee) => (
              <label key={fee.id} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', background: checked[fee.id] ? '#fff7ec' : '#fff', border: `1px solid ${checked[fee.id] ? GOLD : '#e5e5e5'}`, borderRadius: '8px', padding: '0.7rem 0.85rem', cursor: 'pointer', fontSize: '0.88rem', color: '#333' }}>
                <input type="checkbox" checked={!!checked[fee.id]} onChange={() => toggle(fee.id)} style={{ marginTop: '2px', flexShrink: 0, accentColor: GOLD }} />
                <span>{fee.label}</span>
              </label>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <button type="button" onClick={handleAudit} disabled={!canRun} className="btn btn--gold" style={{ fontSize: '0.97rem', padding: '0.8rem 2rem', opacity: canRun ? 1 : 0.5, cursor: canRun ? 'pointer' : 'not-allowed' }}>
              Audit my payroll cost
            </button>
            {(employees || bill || result) && (
              <button type="button" onClick={handleClear} style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>Clear</button>
            )}
            {!canRun && (employees || bill) && (
              <span style={{ fontSize: '0.82rem', color: '#999' }}>Enter employees and your monthly bill to run the audit.</span>
            )}
          </div>

          {result && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '2rem' }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1.25rem' }}>
                Your payroll cost audit
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '3.25rem', fontWeight: 900, color: verdictColor, lineHeight: 1 }}>
                    {dollars(result.pepm)}<span style={{ fontSize: '1.05rem', color: '#666', fontWeight: 700 }}> PEPM</span>
                  </div>
                  <div style={{ display: 'inline-block', marginTop: '0.75rem', background: verdictColor, color: '#000', fontWeight: 800, fontSize: '0.82rem', padding: '0.3rem 0.85rem', borderRadius: '6px' }}>
                    {verdictLabel}
                  </div>
                </div>
                <div>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                    Your effective cost is <strong style={{ color: '#fff' }}>{dollars(result.pepm)} per employee per month</strong> ({dollars(result.annual)}/year). Fully managed, all-inclusive payroll runs <strong style={{ color: '#fff' }}>$25 to $45 PEPM</strong> with no add-ons.
                  </p>
                </div>
              </div>

              {result.feeCount > 0 && (
                <div style={{ background: '#111', borderLeft: `3px solid ${GOLD}`, borderRadius: '6px', padding: '1rem 1.15rem', marginBottom: '1.5rem' }}>
                  <p style={{ margin: '0 0 0.5rem', fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
                    You carry {result.feeCount} of {FEES.length} common add-on fees.
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#bbb', lineHeight: '1.6' }}>
                    Estimated <strong style={{ color: GOLD }}>{dollars(result.addonLow)} to {dollars(result.addonHigh)} per year</strong> in add-on charges, on top of your base. Every one of these is included at no extra charge in a true flat all-inclusive service. (Estimate based on typical market rates, not a quote.)
                  </p>
                </div>
              )}

              {result.feeCount === 0 && (
                <p style={{ fontSize: '0.88rem', color: '#bbb', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  You did not flag any add-on fees, which is good. Still worth confirming in writing: many providers fold these into vague line items. Use the checklist below before you sign or renew.
                </p>
              )}

              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', margin: '0 0 0.6rem' }}>Get this in writing before you sign or renew:</p>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#bbb', fontSize: '0.84rem', lineHeight: '1.7' }}>
                  <li>One all-in PEPM rate, with the list of what is included vs. optional.</li>
                  <li>No per-run or per-check fees (these multiply with weekly payroll).</li>
                  <li>Year-end W-2 and 1099 production included, not a seasonal surcharge.</li>
                  <li>Off-cycle and correction runs included at no extra charge.</li>
                  <li>No setup fee, or a written waiver of it.</li>
                </ul>
              </div>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}>
                  Get an exact flat all-in quote -- Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  BEG Managed Payroll is flat $25 to $45 PEPM, all-inclusive. No per-run fees, no year-end surcharge, no add-on menu.
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
          Nothing you enter leaves your browser. Estimates use typical market rates and are not a quote or financial advice.
        </p>
      </div>
    </section>
  );
}
