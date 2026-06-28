'use client';

import { useState } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const SIZES = ['Under 50', '50 to 250', '250 to 500', '500 plus'];

const SYSTEMS: { label: string; compareHref?: string; compareLabel?: string }[] = [
  { label: 'None or manual / spreadsheets' },
  { label: 'Gusto', compareHref: '/services/hcm-software/isolved-vs-gusto', compareLabel: 'iSolved vs Gusto' },
  { label: 'ADP', compareHref: '/services/hcm-software/switch-from-adp-to-isolved', compareLabel: 'Switch from ADP to iSolved' },
  { label: 'Paychex', compareHref: '/services/hcm-software/isolved-vs-paychex', compareLabel: 'iSolved vs Paychex' },
  { label: 'Rippling', compareHref: '/services/hcm-software/isolved-vs-rippling', compareLabel: 'iSolved vs Rippling' },
  { label: 'Paylocity', compareHref: '/services/hcm-software/isolved-vs-paylocity', compareLabel: 'iSolved vs Paylocity' },
  { label: 'Paycom', compareHref: '/services/hcm-software/isolved-vs-paycom', compareLabel: 'iSolved vs Paycom' },
  { label: 'BambooHR', compareHref: '/services/hcm-software/isolved-vs-bamboohr', compareLabel: 'iSolved vs BambooHR' },
  { label: 'QuickBooks Payroll', compareHref: '/services/hcm-software/switch-from-quickbooks-to-isolved', compareLabel: 'Switch from QuickBooks to iSolved' },
  { label: 'Workday or UKG', compareHref: '/services/hcm-software/isolved-vs-workday', compareLabel: 'iSolved vs Workday' },
  { label: 'Other' },
];

const PRIORITIES = [
  'Consolidate onto one platform',
  'Cut manual work with AI',
  'Get managed support, not a ticket queue',
  'Improve compliance accuracy',
  'Control cost',
];

const INDUSTRIES: { label: string; href?: string }[] = [
  { label: 'Manufacturing', href: '/services/hcm-software/manufacturing' },
  { label: 'Construction', href: '/services/hcm-software/construction' },
  { label: 'Restaurants', href: '/services/hcm-software/restaurants' },
  { label: 'Retail', href: '/services/hcm-software/retail' },
  { label: 'Healthcare', href: '/services/hcm-software/healthcare' },
  { label: 'Nonprofit', href: '/services/hcm-software/nonprofit' },
  { label: 'Professional services', href: '/services/hcm-software/professional-services' },
  { label: 'Staffing agency', href: '/services/hcm-software/staffing-agency' },
  { label: 'Transportation', href: '/services/hcm-software/transportation' },
  { label: 'Legal', href: '/services/hcm-software/legal' },
  { label: 'Finance', href: '/services/hcm-software/finance' },
  { label: 'Technology', href: '/services/hcm-software/technology' },
  { label: 'Other' },
];

const PRIORITY_LINE: Record<string, string> = {
  'Consolidate onto one platform': 'Because consolidation is your priority, the biggest win is moving payroll, HR, time, and benefits onto one connected system so nothing has to be reconciled by hand.',
  'Cut manual work with AI': 'Because cutting manual work is your priority, the Connector for Claude matters most for you. It completes real HR tasks through conversation instead of you clicking through screens.',
  'Get managed support, not a ticket queue': 'Because support is your priority, the BEG model fits. BEG implements, configures, and supports the platform for you, so you are never alone in a general ticket queue.',
  'Improve compliance accuracy': 'Because compliance accuracy is your priority, a single connected platform with automated tax and filing handling removes the manual gaps where most errors begin.',
  'Control cost': 'Because cost control is your priority, BEG will run a side-by-side comparison so you can see the all-in numbers for your size before you decide anything.',
};

function sizeLine(size: string) {
  switch (size) {
    case 'Under 50': return 'At your size, the goal is a platform that is simple to run today but has room to grow, with BEG handling the heavy lifting so a lean team is not stretched.';
    case '50 to 250': return 'At your size, you are likely outgrowing point tools and patchwork systems. This is the sweet spot for one connected platform that BEG runs for you.';
    case '250 to 500': return 'At your size, HR is strategic and the cost of disconnected systems is real. A single platform plus task-completing AI removes meaningful admin load.';
    default: return 'At your scale, the platform is infrastructure. Consolidation, automation, and a partner who owns implementation and support all become high-stakes decisions.';
  }
}

export default function HCMPlatformFinder() {
  const [size, setSize] = useState<string | null>(null);
  const [systemIdx, setSystemIdx] = useState<number | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [industryIdx, setIndustryIdx] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const ready = size !== null && systemIdx !== null && priority !== null && industryIdx !== null;
  const system = systemIdx !== null ? SYSTEMS[systemIdx] : null;
  const industry = industryIdx !== null ? INDUSTRIES[industryIdx] : null;

  const block = (label: string, opts: string[], value: string | null, set: (v: string) => void) => (
    <div style={{ marginBottom: '1.75rem' }}>
      <p style={{ fontWeight: '700', fontSize: '0.98rem', color: '#000', marginBottom: '0.75rem' }}>{label}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {opts.map((o) => {
          const sel = value === o;
          return (
            <button key={o} type="button" onClick={() => set(o)}
              style={{
                background: sel ? '#000' : '#fff', color: sel ? '#fff' : '#000',
                border: `2px solid ${sel ? '#ECAC60' : '#ddd'}`, borderRadius: '8px',
                padding: '0.55rem 1rem', cursor: 'pointer', fontSize: '0.88rem',
              }}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          {block('How big is your team?', SIZES, size, setSize)}

          <div style={{ marginBottom: '1.75rem' }}>
            <p style={{ fontWeight: '700', fontSize: '0.98rem', color: '#000', marginBottom: '0.75rem' }}>What do you use for payroll and HR today?</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SYSTEMS.map((s, i) => {
                const sel = systemIdx === i;
                return (
                  <button key={s.label} type="button" onClick={() => setSystemIdx(i)}
                    style={{ background: sel ? '#000' : '#fff', color: sel ? '#fff' : '#000', border: `2px solid ${sel ? '#ECAC60' : '#ddd'}`, borderRadius: '8px', padding: '0.55rem 1rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {block('What matters most right now?', PRIORITIES, priority, setPriority)}

          <div style={{ marginBottom: '1.75rem' }}>
            <p style={{ fontWeight: '700', fontSize: '0.98rem', color: '#000', marginBottom: '0.75rem' }}>What industry are you in?</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {INDUSTRIES.map((s, i) => {
                const sel = industryIdx === i;
                return (
                  <button key={s.label} type="button" onClick={() => setIndustryIdx(i)}
                    style={{ background: sel ? '#000' : '#fff', color: sel ? '#fff' : '#000', border: `2px solid ${sel ? '#ECAC60' : '#ddd'}`, borderRadius: '8px', padding: '0.55rem 1rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {!done ? (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button type="button" onClick={() => setDone(true)} disabled={!ready} className="btn btn--gold"
                style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', border: 'none', cursor: ready ? 'pointer' : 'not-allowed', opacity: ready ? 1 : 0.5 }}>
                {ready ? 'See My Recommendation' : 'Answer all 4 questions'}
              </button>
            </div>
          ) : (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '1rem' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1rem' }}>
                Your recommendation
              </p>
              <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#ECAC60', marginBottom: '1rem' }}>
                iSolved, implemented and managed by BEG
              </div>
              <p style={{ color: '#ccc', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '0.85rem' }}>{size ? sizeLine(size) : ''}</p>
              <p style={{ color: '#ccc', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{priority ? PRIORITY_LINE[priority] : ''}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {system && system.compareHref && (
                  <Link href={system.compareHref} style={{ color: '#ECAC60', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #333', borderRadius: '8px', padding: '0.5rem 0.9rem' }}>
                    {system.compareLabel} &rarr;
                  </Link>
                )}
                {industry && industry.href && (
                  <Link href={industry.href} style={{ color: '#ECAC60', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #333', borderRadius: '8px', padding: '0.5rem 0.9rem' }}>
                    iSolved for {industry.label} &rarr;
                  </Link>
                )}
                <Link href="/services/hcm-software/roi-calculator" style={{ color: '#ECAC60', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #333', borderRadius: '8px', padding: '0.5rem 0.9rem' }}>
                  Estimate your ROI &rarr;
                </Link>
              </div>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '0.95rem', padding: '0.85rem 2.1rem', display: 'inline-block' }}>
                  Talk It Through, Book a 15-Min Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.74rem', marginTop: '0.8rem', marginBottom: 0 }}>
                  BEG will confirm the right configuration for your size, industry, and current system. No commitment.
                </p>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button type="button" onClick={() => { setDone(false); setSize(null); setSystemIdx(null); setPriority(null); setIndustryIdx(null); }}
                  style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.8rem', textDecoration: 'underline', cursor: 'pointer' }}>
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
