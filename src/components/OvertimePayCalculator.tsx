'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';
import { STATE_LAWS } from '@/lib/payrollLaws';

const GOLD = '#ECAC60';

// States with daily/extra overtime rules beyond the federal 40-hour week.
const DAILY_OT: Record<string, string> = {
  CA: 'Daily overtime applies: 1.5x after 8 hours in a day, 2x after 12 hours, plus premium on the 7th consecutive workday. Your weekly result below can understate what is actually owed.',
  AK: 'Daily overtime applies: 1.5x after 8 hours in a day for most employers.',
  CO: 'Daily overtime applies: 1.5x after 12 hours in a day, plus a 12-consecutive-hour rule.',
  NV: 'Daily overtime may apply: 1.5x after 8 hours in a day for employees earning less than 1.5x the state minimum wage.',
  OR: 'Manufacturing and some industries have additional daily and weekly overtime rules.',
};

type Mode = 'single' | 'blended';

interface Result {
  otHours: number;
  regularRate: number;
  otPremium: number;
  straightPay: number;
  totalDue: number;
  underpayment: number;
  hasBonus: boolean;
  dailyOtNote: string | null;
  stateName: string | null;
}

function money(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

export default function OvertimePayCalculator() {
  const [mode, setMode] = useState<Mode>('single');
  const [stateAbbr, setStateAbbr] = useState('');
  // single
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  // blended
  const [hours1, setHours1] = useState('');
  const [rate1, setRate1] = useState('');
  const [hours2, setHours2] = useState('');
  const [rate2, setRate2] = useState('');
  // shared
  const [bonus, setBonus] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const calendly = getCalendlyLink();

  const num = (s: string) => {
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  };

  const canRun =
    mode === 'single'
      ? num(hours) > 0 && num(rate) > 0
      : num(hours1) > 0 && num(rate1) > 0;

  function handleRun() {
    let totalHours: number;
    let straightPayNoBonus: number;

    if (mode === 'single') {
      totalHours = num(hours);
      straightPayNoBonus = totalHours * num(rate);
    } else {
      totalHours = num(hours1) + num(hours2);
      straightPayNoBonus = num(hours1) * num(rate1) + num(hours2) * num(rate2);
    }

    const bonusAmt = num(bonus);
    const otHours = Math.max(0, totalHours - 40);

    // FLSA regular rate = all straight-time pay (including nondiscretionary
    // bonus) divided by all hours worked.
    const regularRate = totalHours > 0 ? (straightPayNoBonus + bonusAmt) / totalHours : 0;
    const otPremium = 0.5 * regularRate * otHours;
    const straightPay = straightPayNoBonus + bonusAmt;
    const totalDue = straightPay + otPremium;

    // Common mistake: leaving the bonus out of the regular rate.
    const naiveRate = totalHours > 0 ? straightPayNoBonus / totalHours : 0;
    const naivePremium = 0.5 * naiveRate * otHours;
    const underpayment = otPremium - naivePremium;

    const stateName = stateAbbr ? STATE_LAWS.find((s) => s.abbr === stateAbbr)?.name ?? null : null;

    setResult({
      otHours,
      regularRate,
      otPremium,
      straightPay,
      totalDue,
      underpayment,
      hasBonus: bonusAmt > 0,
      dailyOtNote: stateAbbr ? DAILY_OT[stateAbbr] ?? null : null,
      stateName,
    });
  }

  function handleReset() {
    setHours(''); setRate(''); setHours1(''); setRate1(''); setHours2(''); setRate2('');
    setBonus(''); setStateAbbr(''); setResult(null);
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
            <button type="button" style={tabStyle(mode === 'single')} onClick={() => { setMode('single'); setResult(null); }}>One pay rate</button>
            <button type="button" style={tabStyle(mode === 'blended')} onClick={() => { setMode('blended'); setResult(null); }}>Two pay rates (blended)</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {mode === 'single' ? (
              <>
                <div>
                  <label style={labelStyle} htmlFor="ot-hours">Hours worked this workweek</label>
                  <input id="ot-hours" type="number" min="0" inputMode="decimal" placeholder="48" value={hours} onChange={(e) => setHours(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="ot-rate">Hourly pay rate ($)</label>
                  <input id="ot-rate" type="number" min="0" inputMode="decimal" placeholder="25" value={rate} onChange={(e) => setRate(e.target.value)} style={inputStyle} />
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div>
                    <label style={labelStyle} htmlFor="ot-h1">Rate 1 hrs</label>
                    <input id="ot-h1" type="number" min="0" inputMode="decimal" placeholder="30" value={hours1} onChange={(e) => setHours1(e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="ot-r1">Rate 1 ($)</label>
                    <input id="ot-r1" type="number" min="0" inputMode="decimal" placeholder="25" value={rate1} onChange={(e) => setRate1(e.target.value)} style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div>
                    <label style={labelStyle} htmlFor="ot-h2">Rate 2 hrs</label>
                    <input id="ot-h2" type="number" min="0" inputMode="decimal" placeholder="18" value={hours2} onChange={(e) => setHours2(e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="ot-r2">Rate 2 ($)</label>
                    <input id="ot-r2" type="number" min="0" inputMode="decimal" placeholder="18" value={rate2} onChange={(e) => setRate2(e.target.value)} style={inputStyle} />
                  </div>
                </div>
              </>
            )}

            <div>
              <label style={labelStyle} htmlFor="ot-bonus">Nondiscretionary bonus / commission this week <span style={{ fontWeight: 400, color: '#888' }}>($, optional)</span></label>
              <input id="ot-bonus" type="number" min="0" inputMode="decimal" placeholder="200" value={bonus} onChange={(e) => setBonus(e.target.value)} style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle} htmlFor="ot-state">Work state <span style={{ fontWeight: 400, color: '#888' }}>(optional)</span></label>
              <select id="ot-state" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)} style={inputStyle}>
                <option value="">Select a state…</option>
                {STATE_LAWS.map((s) => (
                  <option key={s.abbr} value={s.abbr}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <button type="button" onClick={handleRun} disabled={!canRun} className="btn btn--gold"
              style={{ fontSize: '0.97rem', padding: '0.8rem 2rem', opacity: canRun ? 1 : 0.5, cursor: canRun ? 'pointer' : 'not-allowed' }}>
              Calculate overtime
            </button>
            {(result || hours || hours1) && (
              <button type="button" onClick={handleReset}
                style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
                Reset
              </button>
            )}
            {!canRun && <span style={{ fontSize: '0.82rem', color: '#999' }}>Enter hours and at least one pay rate.</span>}
          </div>

          {result && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '2rem' }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1.25rem' }}>
                Overtime owed this workweek{result.stateName ? ` · ${result.stateName}` : ''}
              </p>

              {result.otHours === 0 ? (
                <p style={{ color: '#ddd', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                  No federal overtime is due — the hours entered are 40 or fewer in the workweek. If this person worked long single days, check the daily-overtime note below for your state.
                </p>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>Regular rate (FLSA)</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff' }}>{money(result.regularRate)}<span style={{ fontSize: '0.9rem', color: '#777' }}>/hr</span></div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>Overtime hours</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff' }}>{result.otHours}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.25rem' }}>OT premium owed</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: GOLD }}>{money(result.otPremium)}</div>
                    </div>
                  </div>

                  <div style={{ background: '#111', borderRadius: '8px', padding: '1.1rem 1.25rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ccc', marginBottom: '0.4rem' }}>
                      <span>Straight-time pay (all hours + bonus)</span><strong style={{ color: '#fff' }}>{money(result.straightPay)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ccc', marginBottom: '0.4rem' }}>
                      <span>+ Overtime premium (half-time × OT hours)</span><strong style={{ color: '#fff' }}>{money(result.otPremium)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff', borderTop: '1px solid #333', paddingTop: '0.5rem' }}>
                      <span>Total gross due this week</span><strong style={{ color: GOLD }}>{money(result.totalDue)}</strong>
                    </div>
                  </div>

                  {result.hasBonus && result.underpayment > 0.005 && (
                    <div style={{ background: '#1a1207', border: `1px solid ${GOLD}`, borderRadius: '8px', padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: GOLD, marginBottom: '0.35rem' }}>The mistake most employers make</div>
                      <p style={{ fontSize: '0.85rem', color: '#ddd', lineHeight: 1.6, margin: 0 }}>
                        That bonus has to be folded into the regular rate before overtime is calculated. Leaving it out underpays this one paycheck by <strong style={{ color: '#fff' }}>{money(result.underpayment)}</strong>. Multiply that across your team and pay periods and it becomes real back-pay and penalty exposure.
                      </p>
                    </div>
                  )}
                </>
              )}

              {result.dailyOtNote && (
                <div style={{ background: '#111', borderLeft: `3px solid ${GOLD}`, borderRadius: '6px', padding: '0.9rem 1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{result.stateName} also has daily overtime</div>
                  <p style={{ fontSize: '0.82rem', color: '#bbb', lineHeight: 1.55, margin: 0 }}>{result.dailyOtNote}</p>
                </div>
              )}

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}>
                  Get overtime calculated right, every run — Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: 1.5 }}>
                  BEG managed payroll handles regular-rate, blended-rate, and bonus overtime automatically. General information reviewed June 2026, not legal advice.
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
          Nothing you enter leaves your browser. This tool covers the federal 40-hour workweek rule plus state daily-overtime flags; it does not replace a full wage-and-hour review.
        </p>
      </div>
    </section>
  );
}
