'use client';

import { useState } from 'react';

// Leave-law lookup. Data flags mirror src/lib/hrStateData.json (paid sick + state PFML).
// Deliberately shows NO dollar figures and NO invented accrual rates: it reports whether
// a statewide mandate exists and points employers to the primary source for exact rules.

type Sick = 'yes' | 'no' | 'verify';

type StateRow = { slug: string; name: string; sick: Sick; pfml: boolean };

const STATES: StateRow[] = [
  { slug: 'alabama', name: 'Alabama', sick: 'no', pfml: false },
  { slug: 'alaska', name: 'Alaska', sick: 'yes', pfml: false },
  { slug: 'arizona', name: 'Arizona', sick: 'yes', pfml: false },
  { slug: 'arkansas', name: 'Arkansas', sick: 'no', pfml: false },
  { slug: 'california', name: 'California', sick: 'yes', pfml: true },
  { slug: 'colorado', name: 'Colorado', sick: 'yes', pfml: true },
  { slug: 'connecticut', name: 'Connecticut', sick: 'yes', pfml: true },
  { slug: 'delaware', name: 'Delaware', sick: 'no', pfml: true },
  { slug: 'florida', name: 'Florida', sick: 'no', pfml: false },
  { slug: 'georgia', name: 'Georgia', sick: 'no', pfml: false },
  { slug: 'hawaii', name: 'Hawaii', sick: 'no', pfml: false },
  { slug: 'idaho', name: 'Idaho', sick: 'no', pfml: false },
  { slug: 'illinois', name: 'Illinois', sick: 'yes', pfml: false },
  { slug: 'indiana', name: 'Indiana', sick: 'no', pfml: false },
  { slug: 'iowa', name: 'Iowa', sick: 'no', pfml: false },
  { slug: 'kansas', name: 'Kansas', sick: 'no', pfml: false },
  { slug: 'kentucky', name: 'Kentucky', sick: 'no', pfml: false },
  { slug: 'louisiana', name: 'Louisiana', sick: 'no', pfml: false },
  { slug: 'maine', name: 'Maine', sick: 'yes', pfml: true },
  { slug: 'maryland', name: 'Maryland', sick: 'yes', pfml: true },
  { slug: 'massachusetts', name: 'Massachusetts', sick: 'yes', pfml: true },
  { slug: 'michigan', name: 'Michigan', sick: 'yes', pfml: false },
  { slug: 'minnesota', name: 'Minnesota', sick: 'yes', pfml: true },
  { slug: 'mississippi', name: 'Mississippi', sick: 'no', pfml: false },
  { slug: 'missouri', name: 'Missouri', sick: 'verify', pfml: false },
  { slug: 'montana', name: 'Montana', sick: 'no', pfml: false },
  { slug: 'nebraska', name: 'Nebraska', sick: 'yes', pfml: false },
  { slug: 'nevada', name: 'Nevada', sick: 'yes', pfml: false },
  { slug: 'new-hampshire', name: 'New Hampshire', sick: 'no', pfml: false },
  { slug: 'new-jersey', name: 'New Jersey', sick: 'yes', pfml: true },
  { slug: 'new-mexico', name: 'New Mexico', sick: 'yes', pfml: false },
  { slug: 'new-york', name: 'New York', sick: 'yes', pfml: true },
  { slug: 'north-carolina', name: 'North Carolina', sick: 'no', pfml: false },
  { slug: 'north-dakota', name: 'North Dakota', sick: 'no', pfml: false },
  { slug: 'ohio', name: 'Ohio', sick: 'no', pfml: false },
  { slug: 'oklahoma', name: 'Oklahoma', sick: 'no', pfml: false },
  { slug: 'oregon', name: 'Oregon', sick: 'yes', pfml: true },
  { slug: 'pennsylvania', name: 'Pennsylvania', sick: 'no', pfml: false },
  { slug: 'rhode-island', name: 'Rhode Island', sick: 'yes', pfml: true },
  { slug: 'south-carolina', name: 'South Carolina', sick: 'no', pfml: false },
  { slug: 'south-dakota', name: 'South Dakota', sick: 'no', pfml: false },
  { slug: 'tennessee', name: 'Tennessee', sick: 'no', pfml: false },
  { slug: 'texas', name: 'Texas', sick: 'no', pfml: false },
  { slug: 'utah', name: 'Utah', sick: 'no', pfml: false },
  { slug: 'vermont', name: 'Vermont', sick: 'yes', pfml: false },
  { slug: 'virginia', name: 'Virginia', sick: 'no', pfml: false },
  { slug: 'washington', name: 'Washington', sick: 'yes', pfml: true },
  { slug: 'west-virginia', name: 'West Virginia', sick: 'no', pfml: false },
  { slug: 'wisconsin', name: 'Wisconsin', sick: 'no', pfml: false },
  { slug: 'wyoming', name: 'Wyoming', sick: 'no', pfml: false },
];

const DOL_CONTACTS = 'https://www.dol.gov/agencies/whd/state/contacts';

function sickValue(sick: Sick): string {
  if (sick === 'yes') return 'Required statewide';
  if (sick === 'verify') return 'Recently changed, verify current status';
  return 'No statewide mandate today';
}

function sickNote(sick: Sick, name: string): string {
  if (sick === 'yes') {
    return `${name} employers need a written paid sick leave policy that spells out how time accrues, carries over, and can be used. The exact rate and caps are set by the state rule, so confirm the current figures with the state labor office before you publish your handbook.`;
  }
  if (sick === 'verify') {
    return `${name} paid sick leave rules changed recently and the current status should be confirmed with the state labor office before you rely on any specific figure. This is exactly the kind of moving target HR outsourcing tracks for you.`;
  }
  return `${name} has no statewide paid sick leave mandate today. Local ordinances and employees working in other states can still create obligations, so policies should be built for where your people actually work, not just where your office sits.`;
}

function pfmlValue(pfml: boolean): string {
  return pfml ? 'Yes, state program' : 'No state program today';
}

function pfmlNote(pfml: boolean, name: string): string {
  if (pfml) {
    return `${name} runs a state paid family and medical leave program that is separate from paid sick leave. Contribution and benefit details, plus current effective dates, should be confirmed with the state program before you set up deductions.`;
  }
  return `${name} has no state paid family and medical leave program today. Federal FMLA can still apply based on your headcount, and multi-state employees may be covered by another state's program.`;
}

export default function LeaveLawLookup() {
  const [selected, setSelected] = useState('');
  const data = STATES.find(s => s.slug === selected);

  const rows: { label: string; value: string }[] = data
    ? [
        { label: 'Statewide paid sick leave', value: sickValue(data.sick) },
        { label: 'State paid family and medical leave', value: pfmlValue(data.pfml) },
        { label: 'Federal baseline', value: 'FMLA job-protected leave can apply based on headcount and tenure' },
      ]
    : [];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          <div style={{ marginBottom: data ? '2rem' : 0 }}>
            <label htmlFor="leave-state-select" style={{ fontWeight: 700, fontSize: '1rem', display: 'block', marginBottom: '0.6rem', color: '#000' }}>
              Select a state
            </label>
            <select
              id="leave-state-select"
              value={selected}
              onChange={e => setSelected(e.target.value)}
              style={{ width: '100%', border: '2px solid #ddd', borderRadius: '8px', background: '#fff', fontSize: '1.1rem', fontWeight: 700, color: '#000', padding: '0.9rem 1rem', cursor: 'pointer' }}
            >
              <option value="">Choose a state to see its leave rules</option>
              {STATES.map(s => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
            {!data && (
              <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.5rem', lineHeight: 1.5 }}>
                See whether the state mandates paid sick leave and whether it runs a state paid family and medical leave program, plus what a compliant handbook policy needs.
              </p>
            )}
          </div>

          {data && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: '#ECAC60', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                {data.name} leave snapshot for 2026
              </p>

              <div style={{ display: 'grid', gap: '1px', background: '#222', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.75rem' }}>
                {rows.map(({ label, value }) => (
                  <div key={label} style={{ background: '#000', padding: '1rem 1.1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.92rem', color: '#ddd', lineHeight: 1.7, marginTop: 0, marginBottom: '1rem' }}>
                {sickNote(data.sick, data.name)}
              </p>
              <p style={{ fontSize: '0.92rem', color: '#ddd', lineHeight: 1.7, margin: 0 }}>
                {pfmlNote(data.pfml, data.name)}
              </p>

              <p style={{ background: '#111', borderLeft: '3px solid #ECAC60', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.85rem', color: '#ddd', lineHeight: 1.6, margin: '1.5rem 0 0' }}>
                General information for 2026, not legal advice. Rules change often. Confirm the current requirement with your{' '}
                <a href={DOL_CONTACTS} target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: 700 }}>state labor office</a>{' '}before you set policy.
              </p>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '1rem', lineHeight: 1.6, textAlign: 'center' }}>
          General information for 2026, not legal advice. Paid leave law changes frequently and local ordinances can add rules on top of the state.{' '}
          <a href={DOL_CONTACTS} target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: 600 }}>Find your state labor office</a>.
        </p>
      </div>
    </section>
  );
}
