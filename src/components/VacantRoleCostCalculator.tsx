'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

export default function VacantRoleCostCalculator() {
  const [salary, setSalary] = useState(90000);
  const [weeksOpen, setWeeksOpen] = useState(6);

  const calendly = getCalendlyLink();

  const safeSalary = Math.max(0, salary || 0);
  const safeWeeks = Math.max(0, weeksOpen || 0);

  const weeklyCost = safeSalary / 52;
  const cumulativeCost = weeklyCost * safeWeeks;
  const projectedCost = weeklyCost * (safeWeeks + 4);

  return (
    <>
      {/* CALCULATOR WIDGET */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

            {/* Annual salary */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.6rem', color: '#000' }}>
                Annual salary of the open role
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
              <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.5rem', lineHeight: '1.5' }}>
                We use first-year salary as a proxy for the lost output of the empty seat.
              </p>
            </div>

            {/* Weeks open */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>
                  Weeks the role has been open
                </label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>{safeWeeks}</span>
              </div>
              <input
                type="range"
                min={0}
                max={26}
                step={1}
                value={safeWeeks}
                onChange={e => setWeeksOpen(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>0 weeks</span>
                <span>26 weeks</span>
              </div>
            </div>

            {/* Results panel */}
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                Your estimate - {safeWeeks} {safeWeeks === 1 ? 'week' : 'weeks'} open
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                {/* Weekly cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Cost per week open
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>
                    {fmt(weeklyCost)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    Lost output of the unfilled seat, every week
                  </div>
                </div>

                {/* Cumulative cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Cost so far
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1 }}>
                    {fmt(cumulativeCost)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    {safeWeeks} {safeWeeks === 1 ? 'week' : 'weeks'} the seat has stayed empty
                  </div>
                </div>

                {/* Projection */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Cost if open 4 more weeks
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#f87171', lineHeight: 1 }}>
                    {fmt(projectedCost)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    Projected total at {safeWeeks + 4} weeks open
                  </div>
                </div>
              </div>

              <p style={{ background: '#111', borderLeft: '3px solid #ECAC60', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.9rem', color: '#ddd', lineHeight: '1.6', margin: '0 0 1.5rem' }}>
                BEG fills roles in 23 to 35 days with an 86% fill rate, so speed is the saving. Every week you cut off the search is a week of this cost you never pay.
              </p>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  Fill This Role Faster - Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  This estimate uses salary as a proxy for lost output. Your BEG contact maps a realistic fill timeline for your role on the discovery call - no commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT A VACANCY REALLY COSTS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Hidden Cost</p>
            <h2>An empty seat costs more than the salary you are not paying.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }} className="reveal">
            {[
              { title: 'Lost output', items: ['Work the seat would produce', 'Projects that slip or stall', 'Revenue and deadlines at risk', 'The core cost this tool estimates'] },
              { title: 'Team strain', items: ['Coworkers absorb the extra load', 'Overtime and burnout risk', 'Slower response to customers', 'Morale dips the longer it drags'] },
              { title: 'Slower hiring drags', items: ['Months of search add up fast', 'Best candidates take other offers', 'Rushed hires raise turnover risk', 'Speed protects quality'] },
              { title: 'How BEG helps', items: ['Roles filled in 23 to 35 days', '86% fill rate', '45-day replacement guarantee', 'Permanent placement, not staffing'] },
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
