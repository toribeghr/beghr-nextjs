'use client';

import { useState } from 'react';
import Link from 'next/link';

type Method = 'inhouse' | 'software' | 'peo' | 'manual';

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const METHODS: { value: Method; label: string; sub: string }[] = [
  { value: 'inhouse', label: 'In-house payroll manager', sub: 'Full-time salaried employee' },
  { value: 'software', label: 'Self-service software', sub: 'Gusto, Rippling, ADP Run, QuickBooks' },
  { value: 'peo', label: 'PEO', sub: 'ADP TotalSource, TriNet, Justworks, etc.' },
  { value: 'manual', label: 'Accountant or manual', sub: 'Bookkeeper, CPA, or spreadsheets' },
];

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

function getBEGCost(count: number) {
  return { low: count * 25, high: count * 45 };
}

function getCurrentCost(count: number, method: Method): { low: number; high: number; note: string } {
  switch (method) {
    case 'inhouse': {
      const ftes = count > 100 ? 2 : count > 50 ? 1.5 : 1;
      const annualBase = ftes * 80000 * 1.3; // $80K avg salary + 30% benefits/overhead
      const mo = annualBase / 12;
      return {
        low: Math.round(mo * 0.85),
        high: Math.round(mo * 1.15),
        note: `${ftes === 1 ? '1 FTE' : ftes + ' FTEs'} at $80K avg + 30% benefits & overhead`,
      };
    }
    case 'software': {
      const platform = 45 + 55 * count;
      const timeCost = 4 * 2 * 75; // 4 hrs × 2 cycles/mo × $75/hr opportunity cost
      return {
        low: platform,
        high: platform + timeCost,
        note: 'Platform fees + team time at $75/hr opportunity cost (4 hrs per cycle)',
      };
    }
    case 'peo': {
      const base = 160 * count;
      return {
        low: Math.round(base * 0.85),
        high: Math.round(base * 1.25),
        note: 'PEO per-employee admin fees, varies widely by provider and headcount',
      };
    }
    case 'manual': {
      const acct = 175 + 14 * count;
      const timeCost = 6 * 2 * 65; // 6 hrs × 2 cycles × $65/hr
      return {
        low: acct,
        high: acct + timeCost,
        note: 'Accountant/bookkeeper fees + internal team time at $65/hr',
      };
    }
  }
}

export default function PayrollCalculator() {
  const [count, setCount] = useState(25);
  const [method, setMethod] = useState<Method>('inhouse');

  const current = getCurrentCost(count, method);
  const beg = getBEGCost(count);

  // Conservative: current low minus BEG high
  const savingsLow = Math.max(0, current.low - beg.high);
  // Optimistic: current high minus BEG low
  const savingsHigh = Math.max(0, current.high - beg.low);
  const annualLow = savingsLow * 12;
  const annualHigh = savingsHigh * 12;
  const hasSavings = savingsHigh > 0;

  return (
    <>
      {/* CALCULATOR WIDGET */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

            {/* Employee count */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>
                  Number of employees
                </label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>
                  {count}
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={250}
                step={5}
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>5 employees</span>
                <span>250 employees</span>
              </div>
            </div>

            {/* Current method */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.85rem', color: '#000' }}>
                How do you currently handle payroll?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.75rem' }}>
                {METHODS.map(m => {
                  const selected = method === m.value;
                  return (
                    <label
                      key={m.value}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.7rem',
                        background: selected ? '#000' : '#fff',
                        color: selected ? '#fff' : '#000',
                        border: `2px solid ${selected ? '#ECAC60' : '#ddd'}`,
                        borderRadius: '8px',
                        padding: '0.9rem 1rem',
                        cursor: 'pointer',
                        transition: 'background 0.12s, border-color 0.12s',
                      }}
                    >
                      <input
                        type="radio"
                        name="method"
                        value={m.value}
                        checked={selected}
                        onChange={() => setMethod(m.value)}
                        style={{ marginTop: '3px', accentColor: '#ECAC60', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '0.88rem', lineHeight: '1.3' }}>{m.label}</div>
                        <div style={{ fontSize: '0.76rem', opacity: 0.65, marginTop: '0.2rem', lineHeight: '1.3' }}>{m.sub}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Results panel */}
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                Your estimate: {count} employees
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                {/* Current cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Current cost / month
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>
                    {fmt(current.low)}
                    <span style={{ fontSize: '1rem', fontWeight: '600', color: '#888' }}> – {fmt(current.high)}</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    {current.note}
                  </div>
                </div>

                {/* BEG cost */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    BEG managed payroll / month
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1 }}>
                    {fmt(beg.low)}
                    <span style={{ fontSize: '1rem', fontWeight: '600', color: '#b8893a' }}> – {fmt(beg.high)}</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    $25–$45 per employee, all-inclusive
                  </div>
                </div>

                {/* Annual savings */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Estimated annual savings
                  </div>
                  {hasSavings ? (
                    <>
                      <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4ade80', lineHeight: 1 }}>
                        {fmt(annualLow)}
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: '#2d9e58' }}> – {fmt(annualHigh)}</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                        Per year vs. your current method
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#888', lineHeight: 1 }}>
                        Comparable
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                        Get a custom quote: the full-service difference matters
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  Get Your Exact Quote: Book a 15-Min Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  This calculator uses industry averages. Your BEG contact gives you an exact monthly cost on your discovery call, no commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What Is Included</p>
            <h2>Everything in the BEG monthly rate. Nothing billed separately.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }} className="reveal">
            {[
              { title: 'Payroll processing', items: ['Every pay cycle, every employee', 'Gross-to-net calculations', 'Direct deposit and pay stubs', 'Off-cycle and bonus runs'] },
              { title: 'Tax filings', items: ['Federal and state withholding', 'Quarterly 941 and 940 filings', 'SUTA in all active states', 'New state registrations included'] },
              { title: 'Year-end', items: ['W-2 preparation and filing', 'W-2 delivery to employees', 'Year-end reconciliation', 'W-2c corrections if needed'] },
              { title: 'Support', items: ['Dedicated BEG contact', 'Employee paycheck questions', 'IRS and state notice handling', 'Garnishment processing'] },
            ].map(({ title, items }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.85rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ fontSize: '0.86rem', color: '#444', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', borderBottom: '1px solid #f2f2f2' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TWO TIERS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Pricing Tiers</p>
            <h2>Two rates. One decision. No migration required either way.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }} className="reveal">
            <div style={{ border: '2px solid #e5e5e5', borderRadius: '10px', padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>$25</div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>per employee / month</div>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>We work in your existing system</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.65', margin: '0 0 1rem' }}>
                BEG operates as your managed payroll team inside your current system: ADP, Gusto, Rippling, QuickBooks Payroll, or other. No migration, no disruption. You keep your existing platform. We run it for you.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#888' }}>Best for: companies happy with their current platform who just want the work off their plate.</div>
            </div>
            <div style={{ border: '2px solid #ECAC60', borderRadius: '10px', padding: '2rem', background: '#fffdf7' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>$45</div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>per employee / month</div>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>We move you to iSolved</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.65', margin: '0 0 1rem' }}>
                BEG migrates your payroll to isolved, a purpose-built HCM platform with automated compliance updates, employee self-service, and a full suite of HR tools beyond payroll. Onboarding takes 3–5 business days.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#888' }}>Best for: companies ready to upgrade their payroll platform and get access to full HCM tools.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
