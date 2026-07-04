'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

const GOLD = '#ECAC60';

// Federal payroll-tax constants (2026). Social Security wage base applies to
// the 6.2% employer portion; Medicare 1.45% applies to all wages; FUTA 0.6%
// applies to the first $7,000 after the standard state credit.
const SS_WAGE_BASE = 176100;
const SS_RATE = 0.062;
const MEDICARE_RATE = 0.0145;
const FUTA_RATE = 0.006;
const FUTA_WAGE_BASE = 7000;

interface Line {
  label: string;
  amount: number;
  hint?: string;
}

interface Result {
  base: number;
  lines: Line[];
  loaded: number;
  multiplier: number;
  trueHourly: number;
}

function money(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function TrueCostCalculator() {
  const [basis, setBasis] = useState<'salary' | 'hourly'>('salary');
  const [salary, setSalary] = useState('');
  const [hourly, setHourly] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');

  const [health, setHealth] = useState('8400');
  const [retirementPct, setRetirementPct] = useState('3');
  const [workersCompPct, setWorkersCompPct] = useState('1.0');
  const [overhead, setOverhead] = useState('3000');
  const [sutaRate, setSutaRate] = useState('2.7');
  const [sutaWageBase, setSutaWageBase] = useState('15000');

  const [result, setResult] = useState<Result | null>(null);

  const calendly = getCalendlyLink();
  const num = (s: string) => { const n = parseFloat(s); return isNaN(n) ? 0 : n; };

  const base =
    basis === 'salary'
      ? num(salary)
      : num(hourly) * num(hoursPerWeek) * 52;

  const canRun = base > 0;

  function handleRun() {
    const ss = SS_RATE * Math.min(base, SS_WAGE_BASE);
    const medicare = MEDICARE_RATE * base;
    const futa = FUTA_RATE * Math.min(base, FUTA_WAGE_BASE);
    const suta = (num(sutaRate) / 100) * Math.min(base, num(sutaWageBase));
    const wc = (num(workersCompPct) / 100) * base;
    const retire = (num(retirementPct) / 100) * base;
    const healthAmt = num(health);
    const overheadAmt = num(overhead);

    const lines: Line[] = [
      { label: 'Base wages', amount: base },
      { label: 'Social Security (6.2%)', amount: ss, hint: 'Employer match, up to the annual wage base' },
      { label: 'Medicare (1.45%)', amount: medicare, hint: 'Employer match on all wages' },
      { label: 'Federal unemployment (FUTA)', amount: futa, hint: '0.6% of the first $7,000' },
      { label: 'State unemployment (SUTA)', amount: suta, hint: `${num(sutaRate)}% of first ${money(num(sutaWageBase))} (varies by state and experience)` },
      { label: "Workers' compensation", amount: wc, hint: `${num(workersCompPct)}% of payroll (varies by class code)` },
      { label: 'Health & benefits', amount: healthAmt, hint: 'Employer share you entered' },
      { label: 'Retirement match', amount: retire, hint: `${num(retirementPct)}% of pay` },
      { label: 'Overhead (equipment, software, space, training)', amount: overheadAmt },
    ];

    const loaded = lines.reduce((sum, l) => sum + l.amount, 0);
    const multiplier = base > 0 ? loaded / base : 0;
    const annualHours = basis === 'hourly' ? num(hoursPerWeek) * 52 : 2080;
    const trueHourly = annualHours > 0 ? loaded / annualHours : 0;

    setResult({ base, lines, loaded, multiplier, trueHourly });
  }

  function handleReset() {
    setSalary(''); setHourly(''); setHoursPerWeek('40');
    setHealth('8400'); setRetirementPct('3'); setWorkersCompPct('1.0'); setOverhead('3000');
    setSutaRate('2.7'); setSutaWageBase('15000'); setResult(null);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', border: '2px solid #ddd', borderRadius: '8px',
    padding: '0.7rem 0.85rem', fontSize: '0.95rem', fontFamily: 'inherit', color: '#000', background: '#fff',
  };
  const labelStyle: React.CSSProperties = {
    fontWeight: 700, fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem', color: '#000',
  };
  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, padding: '0.6rem 0.5rem', border: `2px solid ${active ? GOLD : '#ddd'}`,
    background: active ? GOLD : '#fff', color: '#000', fontWeight: 700, fontSize: '0.85rem',
    borderRadius: '8px', cursor: 'pointer',
  });

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <button type="button" style={tabStyle(basis === 'salary')} onClick={() => { setBasis('salary'); setResult(null); }}>Salaried</button>
            <button type="button" style={tabStyle(basis === 'hourly')} onClick={() => { setBasis('hourly'); setResult(null); }}>Hourly</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {basis === 'salary' ? (
              <div>
                <label style={labelStyle} htmlFor="tc-salary">Annual base salary ($)</label>
                <input id="tc-salary" type="number" min="0" inputMode="decimal" placeholder="65000" value={salary} onChange={(e) => setSalary(e.target.value)} style={inputStyle} />
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="tc-hourly">Hourly rate ($)</label>
                  <input id="tc-hourly" type="number" min="0" inputMode="decimal" placeholder="25" value={hourly} onChange={(e) => setHourly(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="tc-hpw">Hours / week</label>
                  <input id="tc-hpw" type="number" min="0" inputMode="decimal" placeholder="40" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} style={inputStyle} />
                </div>
              </div>
            )}

            <div>
              <label style={labelStyle} htmlFor="tc-health">Employer health & benefits ($/yr)</label>
              <input id="tc-health" type="number" min="0" inputMode="decimal" value={health} onChange={(e) => setHealth(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="tc-retire">Retirement match (%)</label>
              <input id="tc-retire" type="number" min="0" inputMode="decimal" value={retirementPct} onChange={(e) => setRetirementPct(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="tc-wc">Workers’ comp (% of payroll)</label>
              <input id="tc-wc" type="number" min="0" inputMode="decimal" value={workersCompPct} onChange={(e) => setWorkersCompPct(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="tc-overhead">Overhead ($/yr)</label>
              <input id="tc-overhead" type="number" min="0" inputMode="decimal" value={overhead} onChange={(e) => setOverhead(e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div>
                <label style={labelStyle} htmlFor="tc-suta">SUTA rate (%)</label>
                <input id="tc-suta" type="number" min="0" inputMode="decimal" value={sutaRate} onChange={(e) => setSutaRate(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="tc-sutabase">SUTA wage base ($)</label>
                <input id="tc-sutabase" type="number" min="0" inputMode="decimal" value={sutaWageBase} onChange={(e) => setSutaWageBase(e.target.value)} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <button type="button" onClick={handleRun} disabled={!canRun} className="btn btn--gold"
              style={{ fontSize: '0.97rem', padding: '0.8rem 2rem', opacity: canRun ? 1 : 0.5, cursor: canRun ? 'pointer' : 'not-allowed' }}>
              Show the true cost
            </button>
            {(result || salary || hourly) && (
              <button type="button" onClick={handleReset}
                style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
                Reset
              </button>
            )}
            {!canRun && <span style={{ fontSize: '0.82rem', color: '#999' }}>Enter a salary or hourly rate.</span>}
          </div>

          {result && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '2rem' }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1.25rem' }}>
                What this employee actually costs you
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>Fully loaded / year</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: GOLD, lineHeight: 1 }}>{money(result.loaded)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>True hourly cost</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{result.trueHourly.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>Cost multiplier</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{result.multiplier.toFixed(2)}×</div>
                </div>
              </div>

              <div style={{ background: '#111', borderRadius: '8px', padding: '1.1rem 1.25rem', marginBottom: '1.25rem' }}>
                {result.lines.map((l, i) => (
                  <div key={l.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', fontSize: '0.88rem', color: i === 0 ? '#fff' : '#ccc', padding: '0.3rem 0', borderBottom: i === 0 ? '1px solid #333' : 'none' }}>
                    <span>
                      {l.label}
                      {l.hint && <span style={{ display: 'block', fontSize: '0.72rem', color: '#777' }}>{l.hint}</span>}
                    </span>
                    <strong style={{ color: i === 0 ? '#fff' : '#ddd', whiteSpace: 'nowrap' }}>{money(l.amount)}</strong>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff', borderTop: '1px solid #333', paddingTop: '0.6rem', marginTop: '0.3rem' }}>
                  <span>Total annual cost</span><strong style={{ color: GOLD }}>{money(result.loaded)}</strong>
                </div>
              </div>

              <p style={{ color: '#ddd', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                That is roughly <strong style={{ color: GOLD }}>{Math.round((result.multiplier - 1) * 100)}%</strong> on top of base pay before a single hour of admin to actually run this person’s payroll, taxes, and benefits each cycle.
              </p>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}>
                  See how BEG lowers your cost per employee: Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: 1.5 }}>
                  Estimates use 2026 federal rates and the assumptions you entered. SUTA and workers’ comp vary by state, class code, and experience. General information, not tax advice.
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
          Nothing you enter leaves your browser. Adjust the benefit, tax, and overhead assumptions to match your business.
        </p>
      </div>
    </section>
  );
}
