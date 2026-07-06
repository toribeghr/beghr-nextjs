'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

const RATES: { value: number; label: string }[] = [
  { value: 0.2, label: '20%' },
  { value: 0.225, label: '22.5%' },
  { value: 0.25, label: '25%' },
];

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

export default function RecruitingFeeCalculator() {
  const [salary, setSalary] = useState(90000);
  const [rate, setRate] = useState(0.225);
  const [hires, setHires] = useState(1);

  const calendly = getCalendlyLink();

  const safeSalary = Math.max(0, salary || 0);
  const safeHires = Math.max(1, hires || 1);

  const contingencyFee = safeSalary * rate;
  const begCost = contingencyFee * 0.5;
  const savingsPerHire = contingencyFee - begCost;

  const totalContingency = contingencyFee * safeHires;
  const totalBeg = begCost * safeHires;
  const totalSavings = savingsPerHire * safeHires;

  return (
    <>
      {/* CALCULATOR WIDGET */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

            {/* Annual salary */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.6rem', color: '#000' }}>
                Annual salary of the role
              </label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '0 1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#888' }}>$</span>
                <input
                  type="number"
                  min={0}
                  step={1000}
                  value={salary}
                  onChange={e => setSalary(Number(e.target.value))}
                  style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '1.4rem', fontWeight: '800', color: '#000', padding: '0.85rem 0.5rem' }}
                />
              </div>
            </div>

            {/* Contingency rate */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.85rem', color: '#000' }}>
                Typical contingency recruiter rate
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {RATES.map(r => {
                  const selected = rate === r.value;
                  return (
                    <label
                      key={r.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        background: selected ? '#000' : '#fff',
                        color: selected ? '#fff' : '#000',
                        border: `2px solid ${selected ? '#ECAC60' : '#ddd'}`,
                        borderRadius: '8px',
                        padding: '0.9rem 1rem',
                        cursor: 'pointer',
                        fontWeight: '700',
                        transition: 'background 0.12s, border-color 0.12s',
                      }}
                    >
                      <input
                        type="radio"
                        name="rate"
                        checked={selected}
                        onChange={() => setRate(r.value)}
                        style={{ accentColor: '#ECAC60' }}
                      />
                      {r.label}
                    </label>
                  );
                })}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.5rem', lineHeight: '1.5' }}>
                Contingency search firms commonly charge 20% to 25% of first-year salary per placement.
              </p>
            </div>

            {/* Hires per year */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>
                  Hires per year <span style={{ fontWeight: '400', color: '#888', fontSize: '0.85rem' }}>(optional)</span>
                </label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>{safeHires}</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={safeHires}
                onChange={e => setHires(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>1 hire</span>
                <span>25 hires</span>
              </div>
            </div>

            {/* Results panel */}
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                Your estimate {safeHires > 1 ? `- ${safeHires} hires per year` : '- per hire'}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                {/* Contingency cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Contingency recruiter cost
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>
                    {fmt(totalContingency)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    {RATES.find(r => r.value === rate)?.label} of first-year salary{safeHires > 1 ? `, ${safeHires} hires` : ''}
                  </div>
                </div>

                {/* BEG cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    BEG milestone placement cost
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1 }}>
                    {fmt(totalBeg)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    Milestone-based, roughly 50% less than contingency
                  </div>
                </div>

                {/* Savings */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Your estimated savings
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4ade80', lineHeight: 1 }}>
                    {fmt(totalSavings)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    {safeHires > 1 ? 'Across all hires this year' : 'On this single placement'}
                  </div>
                </div>
              </div>

              <p style={{ background: '#111', borderLeft: '3px solid #ECAC60', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.9rem', color: '#ddd', lineHeight: '1.6', margin: '0 0 1.5rem' }}>
                That is roughly 50% less than contingency, and BEG fills roles in 23 to 35 days with an 86% fill rate and a 45-day replacement guarantee.
              </p>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  See Your Exact Placement Cost - Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  This calculator uses standard contingency rates for comparison. Your BEG contact confirms the exact milestone fee for your role on the discovery call - no commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MILESTONE PRICING */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why It Costs Less</p>
            <h2>Permanent placement at roughly 50% less than contingency.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }} className="reveal">
            {[
              { title: 'Milestone-based fees', items: ['You pay across defined milestones', 'Not a single large contingency invoice', 'Roughly 50% less than contingency', 'Predictable, transparent cost'] },
              { title: 'Permanent placements', items: ['Direct-hire, permanent roles', 'Not temporary or contract staffing', 'Candidates join your payroll', '45-day replacement guarantee'] },
              { title: 'Fast time to fill', items: ['Roles filled in 23 to 35 days', '86% fill rate', 'Less time with the seat empty', 'Speed that protects your output'] },
              { title: 'Backed by isolved', items: ['Authorized reseller of isolved Job Placement', 'Proven placement methodology', 'Dedicated BEG contact', 'Support through onboarding'] },
            ].map(({ title, items }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.85rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ fontSize: '0.86rem', color: '#444', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', borderBottom: '1px solid #f2f2f2' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
