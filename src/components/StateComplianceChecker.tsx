'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

type StateData = {
  name: string;
  minWage: string;
  paidLeave: string;
  incomeTax: string;
  payday: string;
  newHire: string;
};

const STATES: StateData[] = [
  { name: 'Alabama', minWage: 'Federal $7.25 (no state minimum)', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, 2% to 5%', payday: 'No general state frequency law', newHire: '7 days (stricter than federal 20)' },
  { name: 'Alaska', minWage: '$11.91', paidLeave: 'Paid sick leave starts July 2025 (voter measure)', incomeTax: 'None', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Arizona', minWage: '$14.70', paidLeave: 'Paid sick leave required; no state family leave', incomeTax: 'Flat 2.5%', payday: 'At least semi-monthly, two paydays max 16 days apart', newHire: '20 days (federal default)' },
  { name: 'Arkansas', minWage: '$11.00', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, up to about 3.9%', payday: 'Semi-monthly for most employers', newHire: '20 days (federal default)' },
  { name: 'California', minWage: '$16.50', paidLeave: 'Paid sick leave required; state PFL via SDI', incomeTax: 'Progressive, 1% to 13.3%', payday: 'At least semi-monthly, on designated paydays', newHire: '20 days (federal default)' },
  { name: 'Colorado', minWage: '$14.81', paidLeave: 'Paid sick leave required; FAMLI paid family leave active', incomeTax: 'Flat 4.4%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Connecticut', minWage: '$16.35', paidLeave: 'Paid sick leave required; CT Paid Leave active', incomeTax: 'Progressive, 2% to 6.99%', payday: 'Weekly unless waiver granted', newHire: '20 days (federal default)' },
  { name: 'Delaware', minWage: '$15.00', paidLeave: 'Paid family leave contributions begin; benefits 2026', incomeTax: 'Progressive, up to 6.6%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Florida', minWage: '$14.00 (rises to $15 Sept 2026)', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'None', payday: 'No general state frequency law', newHire: '20 days (federal default)' },
  { name: 'Georgia', minWage: 'Federal $7.25 applies to covered employers', paidLeave: 'No broad state mandate; limited kin-care use law', incomeTax: 'Flat 5.39%', payday: 'Semi-monthly for certain employers', newHire: '10 days (stricter than federal 20)' },
  { name: 'Hawaii', minWage: '$14.00', paidLeave: 'No paid sick mandate; TDI provides wage replacement', incomeTax: 'Progressive, 1.4% to 11%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Idaho', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 5.695%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Illinois', minWage: '$15.00', paidLeave: 'Paid Leave for All Workers Act in effect (any reason)', incomeTax: 'Flat 4.95%', payday: 'Semi-monthly for most workers', newHire: '20 days (federal default)' },
  { name: 'Indiana', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 3.0%', payday: 'At least semi-monthly when requested', newHire: '20 days (federal default)' },
  { name: 'Iowa', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 3.8%', payday: 'At least monthly, consistent intervals', newHire: '15 days (stricter than federal 20)' },
  { name: 'Kansas', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, about 5.2% to 5.58%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Kentucky', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 4.0%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Louisiana', minWage: 'Federal $7.25 (no state minimum)', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 3.0%', payday: 'Semi-monthly for certain industries', newHire: '20 days (federal default)' },
  { name: 'Maine', minWage: '$14.65', paidLeave: 'Earned paid leave (any reason); PFML benefits 2026', incomeTax: 'Progressive, 5.8% to 7.15%', payday: 'At least every 16 days', newHire: '7 days (stricter than federal 20)' },
  { name: 'Maryland', minWage: '$15.00', paidLeave: 'Paid sick leave required; FAMLI benefits 2026', incomeTax: 'Progressive, 2% to 5.75% plus local', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Massachusetts', minWage: '$15.00', paidLeave: 'Earned sick time required; PFML active', incomeTax: 'Flat 5% plus 4% surtax over $1M', payday: 'Weekly or bi-weekly for most', newHire: '14 days (stricter than federal 20)' },
  { name: 'Michigan', minWage: '$12.48', paidLeave: 'Earned Sick Time Act in effect', incomeTax: 'Flat 4.25%', payday: 'Frequency varies by schedule, at least monthly', newHire: '20 days (federal default)' },
  { name: 'Minnesota', minWage: '$11.13', paidLeave: 'Earned sick and safe time required; PFML benefits 2026', incomeTax: 'Progressive, 5.35% to 9.85%', payday: 'At least every 31 days', newHire: '20 days (federal default)' },
  { name: 'Mississippi', minWage: 'Federal $7.25 (no state minimum)', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 4.4%', payday: 'Semi-monthly for certain large employers', newHire: '20 days (federal default)' },
  { name: 'Missouri', minWage: '$13.75', paidLeave: 'Paid sick leave required as of 2025', incomeTax: 'Progressive, up to about 4.7%', payday: 'Semi-monthly for certain employers', newHire: '20 days (federal default)' },
  { name: 'Montana', minWage: '$10.55', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, up to 5.9%', payday: 'No fixed statutory frequency for most', newHire: '20 days (federal default)' },
  { name: 'Nebraska', minWage: '$13.50', paidLeave: 'Paid sick leave required as of October 2025', incomeTax: 'Progressive, up to about 5.2%', payday: 'On designated regular paydays', newHire: '20 days (federal default)' },
  { name: 'Nevada', minWage: '$12.00', paidLeave: 'Paid leave (any reason) for employers with 50-plus staff', incomeTax: 'None', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'New Hampshire', minWage: 'Federal $7.25', paidLeave: 'No mandate; voluntary state paid family leave program', incomeTax: 'None on wages (interest and dividends repealed)', payday: 'Weekly or bi-weekly', newHire: '20 days (federal default)' },
  { name: 'New Jersey', minWage: '$15.92', paidLeave: 'Earned sick leave required; state PFL active', incomeTax: 'Progressive, 1.4% to 10.75%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'New Mexico', minWage: '$12.00', paidLeave: 'Healthy Workplaces Act paid sick leave required', incomeTax: 'Progressive, 1.7% to 5.9%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'New York', minWage: '$15.50 (NYC and downstate $16.50)', paidLeave: 'Paid sick leave required; NY PFL active', incomeTax: 'Progressive, 4% to 10.9%', payday: 'Manual workers weekly; others semi-monthly', newHire: '20 days (federal default)' },
  { name: 'North Carolina', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 4.25%', payday: 'On regular paydays, frequency set by employer', newHire: '20 days (federal default)' },
  { name: 'North Dakota', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, low rates up to about 2.5%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Ohio', minWage: '$10.70', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, up to about 3.5%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Oklahoma', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, up to 4.75%', payday: 'At least semi-monthly for most', newHire: '20 days (federal default)' },
  { name: 'Oregon', minWage: '$15.05 (standard, varies by region)', paidLeave: 'Paid sick time required; Paid Leave Oregon active', incomeTax: 'Progressive, 4.75% to 9.9%', payday: 'At least every 35 days', newHire: '20 days (federal default)' },
  { name: 'Pennsylvania', minWage: 'Federal $7.25', paidLeave: 'No statewide mandate (some city ordinances)', incomeTax: 'Flat 3.07%', payday: 'On regular designated paydays', newHire: '20 days (federal default)' },
  { name: 'Rhode Island', minWage: '$15.00', paidLeave: 'Paid sick and safe leave required; TCI family leave', incomeTax: 'Progressive, 3.75% to 5.99%', payday: 'Weekly for most employers', newHire: '14 days (stricter than federal 20)' },
  { name: 'South Carolina', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, up to about 6.2%', payday: 'On regular paydays, terms disclosed at hire', newHire: '20 days (federal default)' },
  { name: 'South Dakota', minWage: '$11.50', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'None', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Tennessee', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'None', payday: 'Semi-monthly for certain employers', newHire: '20 days (federal default)' },
  { name: 'Texas', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'None', payday: 'Exempt staff monthly; others at least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Utah', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Flat 4.55%', payday: 'At least semi-monthly', newHire: '20 days (federal default)' },
  { name: 'Vermont', minWage: '$14.42', paidLeave: 'Earned sick time required; no state PFL mandate', incomeTax: 'Progressive, 3.35% to 8.75%', payday: 'Weekly unless employer elects bi-weekly with notice', newHire: '10 days (stricter than federal 20)' },
  { name: 'Virginia', minWage: '$12.41', paidLeave: 'Limited paid sick mandate for certain health workers', incomeTax: 'Progressive, 2% to 5.75%', payday: 'Hourly weekly or bi-weekly; salaried at least monthly', newHire: '20 days (federal default)' },
  { name: 'Washington', minWage: '$16.66', paidLeave: 'Paid sick leave required; WA Paid Family Leave active', incomeTax: 'None on wages', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'West Virginia', minWage: '$8.75', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, about 2.2% to 4.8%', payday: 'At least every two weeks', newHire: '14 days (stricter than federal 20)' },
  { name: 'Wisconsin', minWage: 'Federal $7.25', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'Progressive, 3.5% to 7.65%', payday: 'At least monthly', newHire: '20 days (federal default)' },
  { name: 'Wyoming', minWage: 'Federal $7.25 (state listed $5.15, federal applies)', paidLeave: 'No state paid sick or family leave mandate', incomeTax: 'None', payday: 'On regular designated paydays', newHire: '20 days (federal default)' },
];

export default function StateComplianceChecker() {
  const [selected, setSelected] = useState('');

  const calendly = getCalendlyLink();
  const data = STATES.find(s => s.name === selected);

  const rows: { label: string; value: string }[] = data
    ? [
        { label: '2026 minimum wage', value: data.minWage },
        { label: 'Paid sick / family leave', value: data.paidLeave },
        { label: 'State income tax', value: data.incomeTax },
        { label: 'Payday frequency requirement', value: data.payday },
        { label: 'New hire reporting deadline', value: data.newHire },
      ]
    : [];

  return (
    <>
      {/* CHECKER WIDGET */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

            {/* State selector */}
            <div style={{ marginBottom: data ? '2rem' : 0 }}>
              <label htmlFor="state-select" style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.6rem', color: '#000' }}>
                Select a state
              </label>
              <select
                id="state-select"
                value={selected}
                onChange={e => setSelected(e.target.value)}
                style={{ width: '100%', border: '2px solid #ddd', borderRadius: '8px', background: '#fff', fontSize: '1.1rem', fontWeight: '700', color: '#000', padding: '0.9rem 1rem', cursor: 'pointer' }}
              >
                <option value="">Choose a state to see 2026 requirements</option>
                {STATES.map(s => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              {!data && (
                <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.5rem', lineHeight: '1.5' }}>
                  Pick a state to see minimum wage, leave mandates, income tax, payday rules, and new hire reporting at a glance.
                </p>
              )}
            </div>

            {/* Results card */}
            {data && (
              <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
                <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                  {data.name} -- 2026 payroll snapshot
                </p>

                <div style={{ display: 'grid', gap: '1px', background: '#222', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.75rem' }}>
                  {rows.map(({ label, value }) => (
                    <div key={label} style={{ background: '#000', padding: '1rem 1.1rem' }}>
                      <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                        {label}
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff', lineHeight: 1.4 }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ background: '#111', borderLeft: '3px solid #ECAC60', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.85rem', color: '#ddd', lineHeight: '1.6', margin: 0 }}>
                  General information for 2026, not legal advice. Verify current requirements with your state labor agency.
                </p>
              </div>
            )}
          </div>

          {/* Standing disclaimer below the tool */}
          <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
            General information for 2026, not legal advice. Rates and rules change. Verify current requirements with your state labor agency before running payroll.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: '#000', borderRadius: '12px', padding: '2.5rem', color: '#fff', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Multi-State Payroll</p>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Multi-state payroll is where mistakes happen</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
              Every state runs its own rules on wages, leave, tax, and registration. BEG handles multi-state compliance, filings, and state registrations as part of fully managed payroll at $25-$45 PEPM. You stay in your current system, and we run the work for you.
            </p>
            <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem', display: 'inline-block' }}>
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
