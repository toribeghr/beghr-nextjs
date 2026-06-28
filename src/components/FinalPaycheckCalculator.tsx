'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';
import { STATE_LAWS, getStateLaw, computeDeadline } from '@/lib/payrollLaws';

const GOLD = '#ECAC60';

type TermType = 'discharge' | 'quit';

interface Result {
  stateName: string;
  termType: TermType;
  ruleText: string;
  deadlineLabel: string;
  usesPayday: boolean;
  ptoEarned: boolean;
  ptoNote: string;
  noForfeiture: boolean;
  ptoPayout: number | null;
  finalWages: number | null;
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
}

function fmtMoney(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

export default function FinalPaycheckCalculator() {
  const [stateAbbr, setStateAbbr] = useState('');
  const [termType, setTermType] = useState<TermType>('discharge');
  const [lastDay, setLastDay] = useState('');
  const [nextPayday, setNextPayday] = useState('');
  const [finalWages, setFinalWages] = useState('');
  const [ptoHours, setPtoHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const calendly = getCalendlyLink();
  const canRun = stateAbbr !== '' && lastDay !== '';

  function handleRun() {
    const law = getStateLaw(stateAbbr);
    if (!law || !lastDay) return;

    // Parse dates as local (avoid UTC shift from the date input).
    const [ly, lm, ld] = lastDay.split('-').map(Number);
    const last = new Date(ly, lm - 1, ld);
    let payday: Date | null = null;
    if (nextPayday) {
      const [py, pm, pd] = nextPayday.split('-').map(Number);
      payday = new Date(py, pm - 1, pd);
    }

    const timing = termType === 'discharge' ? law.discharge : law.quit;
    const dl = computeDeadline(timing, last, payday);

    let deadlineLabel: string;
    if (dl.date) {
      deadlineLabel = fmtDate(dl.date);
    } else if (dl.usesPayday) {
      deadlineLabel = 'Your next regular payday (enter it above for an exact date)';
    } else {
      deadlineLabel = 'See the rule below';
    }

    const hrs = parseFloat(ptoHours);
    const rate = parseFloat(hourlyRate);
    const ptoPayout = !isNaN(hrs) && !isNaN(rate) && hrs > 0 && rate > 0 ? hrs * rate : null;
    const wages = finalWages ? parseFloat(finalWages) : null;

    setResult({
      stateName: law.name,
      termType,
      ruleText: dl.ruleText,
      deadlineLabel,
      usesPayday: dl.usesPayday,
      ptoEarned: law.pto === 'earned_wages',
      ptoNote: law.ptoNote,
      noForfeiture: !!law.noForfeiture,
      ptoPayout,
      finalWages: wages,
    });
  }

  function handleReset() {
    setStateAbbr(''); setTermType('discharge'); setLastDay(''); setNextPayday('');
    setFinalWages(''); setPtoHours(''); setHourlyRate(''); setResult(null);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', border: '2px solid #ddd', borderRadius: '8px',
    padding: '0.7rem 0.85rem', fontSize: '0.95rem', fontFamily: 'inherit', color: '#000', background: '#fff',
  };
  const labelStyle: React.CSSProperties = {
    fontWeight: 700, fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem', color: '#000',
  };

  const totalOwed =
    result && (result.finalWages != null || result.ptoPayout != null)
      ? (result.finalWages ?? 0) + (result.ptoPayout ?? 0)
      : null;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle} htmlFor="fpc-state">Employee’s work state</label>
              <select id="fpc-state" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)} style={inputStyle}>
                <option value="">Select a state…</option>
                {STATE_LAWS.map((s) => (
                  <option key={s.abbr} value={s.abbr}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle} htmlFor="fpc-term">How did they leave?</label>
              <select id="fpc-term" value={termType} onChange={(e) => setTermType(e.target.value as TermType)} style={inputStyle}>
                <option value="discharge">Fired / laid off (involuntary)</option>
                <option value="quit">Quit / resigned (voluntary)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle} htmlFor="fpc-last">Last day worked</label>
              <input id="fpc-last" type="date" value={lastDay} onChange={(e) => setLastDay(e.target.value)} style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle} htmlFor="fpc-payday">Next regular payday <span style={{ fontWeight: 400, color: '#888' }}>(optional)</span></label>
              <input id="fpc-payday" type="date" value={nextPayday} onChange={(e) => setNextPayday(e.target.value)} style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle} htmlFor="fpc-wages">Final wages owed <span style={{ fontWeight: 400, color: '#888' }}>(optional, $)</span></label>
              <input id="fpc-wages" type="number" min="0" inputMode="decimal" placeholder="e.g. 2400" value={finalWages} onChange={(e) => setFinalWages(e.target.value)} style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div>
                <label style={labelStyle} htmlFor="fpc-pto">Unused PTO hrs</label>
                <input id="fpc-pto" type="number" min="0" inputMode="decimal" placeholder="40" value={ptoHours} onChange={(e) => setPtoHours(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="fpc-rate">Hourly rate $</label>
                <input id="fpc-rate" type="number" min="0" inputMode="decimal" placeholder="30" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <button type="button" onClick={handleRun} disabled={!canRun} className="btn btn--gold"
              style={{ fontSize: '0.97rem', padding: '0.8rem 2rem', opacity: canRun ? 1 : 0.5, cursor: canRun ? 'pointer' : 'not-allowed' }}>
              Calculate the deadline
            </button>
            {(result || stateAbbr) && (
              <button type="button" onClick={handleReset}
                style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
                Reset
              </button>
            )}
            {!canRun && <span style={{ fontSize: '0.82rem', color: '#999' }}>Pick a state and last day worked.</span>}
          </div>

          {result && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '2rem' }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1rem' }}>
                {result.stateName} · {result.termType === 'discharge' ? 'Involuntary termination' : 'Voluntary resignation'}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.35rem' }}>Final paycheck is due by</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 900, color: GOLD, lineHeight: 1.2 }}>{result.deadlineLabel}</div>
                <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '0.6rem', marginBottom: 0 }}>
                  <strong style={{ color: '#fff' }}>Rule:</strong> {result.ruleText}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#111', borderLeft: `3px solid ${result.ptoEarned ? '#4ade80' : GOLD}`, borderRadius: '6px', padding: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    Unused PTO: {result.ptoEarned ? 'Likely must be paid out' : 'Depends on your policy'}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#bbb', lineHeight: 1.55, margin: 0 }}>{result.ptoNote}</p>
                  {result.noForfeiture && (
                    <p style={{ fontSize: '0.78rem', color: GOLD, marginTop: '0.5rem', marginBottom: 0 }}>
                      Use-it-or-lose-it forfeiture is prohibited in this state.
                    </p>
                  )}
                </div>

                <div style={{ background: '#111', borderLeft: '3px solid #f97316', borderRadius: '6px', padding: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>What’s at stake if you miss it</div>
                  <p style={{ fontSize: '0.82rem', color: '#bbb', lineHeight: 1.55, margin: 0 }}>
                    Late final pay can trigger waiting-time penalties, daily wage penalties, and employee claims. Several states stack a full day of wages for each day late.
                  </p>
                </div>
              </div>

              {(result.ptoPayout != null || totalOwed != null) && (
                <div style={{ marginTop: '1.25rem', background: '#111', borderRadius: '8px', padding: '1.1rem 1.25rem' }}>
                  {result.ptoPayout != null && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ccc', marginBottom: totalOwed != null ? '0.4rem' : 0 }}>
                      <span>Estimated PTO payout</span><strong style={{ color: '#fff' }}>{fmtMoney(result.ptoPayout)}</strong>
                    </div>
                  )}
                  {totalOwed != null && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff', borderTop: '1px solid #333', paddingTop: '0.5rem' }}>
                      <span>Estimated total final check</span><strong style={{ color: GOLD }}>{fmtMoney(totalOwed)}</strong>
                    </div>
                  )}
                </div>
              )}

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', marginTop: '1.5rem', textAlign: 'center' }}>
                <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}>
                  Never miss a final-pay deadline again — Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: 1.5 }}>
                  BEG managed payroll tracks every separation deadline for you. This tool is general information reviewed June 2026, not legal advice — verify against the current statute or with counsel.
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
          Nothing you enter leaves your browser. PTO payout rules depend on your written policy and the employee’s work state, not your headquarters.
        </p>
      </div>
    </section>
  );
}
