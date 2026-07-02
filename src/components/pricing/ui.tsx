'use client';

import { type CSSProperties, type ReactNode } from 'react';
import { G, CARD, LINE, T1, T2, T3 } from './pricing';

// Shared UI atoms for the instant-pricing forms.
// Ported from the approved dark artifacts (July 1, 2026) - do not redesign.

export function TopBar({ eyebrow, right, progress }: { eyebrow: string; right?: ReactNode; progress: number }) {
  return (
    <div style={{ padding: '14px 20px 0', flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '9px' }}>
        <span style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.07em' }}>{eyebrow}</span>
        {right !== undefined && <span style={{ fontSize: '0.66rem', color: T3 }}>{right}</span>}
      </div>
      <div style={{ height: '2px', background: LINE, borderRadius: '99px', overflow: 'hidden' }}>
        <div style={{ height: '100%', background: G, width: `${progress}%`, borderRadius: '99px', transition: 'width 0.45s ease' }} />
      </div>
    </div>
  );
}

export function Wrap({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <div style={{ padding: '20px 20px 26px', opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 0.17s ease, transform 0.17s ease' }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div style={{ fontSize: '0.66rem', color: color || G, fontWeight: 800, letterSpacing: '0.07em', marginBottom: '9px' }}>{children}</div>
  );
}

export function QTitle({ q, hint }: { q: string; hint?: string }) {
  return (
    <>
      <h2 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '4px', color: T1 }}>{q}</h2>
      {hint && <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '15px' }}>{hint}</p>}
    </>
  );
}

export function OptionCard({ selected, onClick, emoji, label, right, grid, checkbox }: {
  selected: boolean;
  onClick: () => void;
  emoji?: string;
  label: string;
  right?: ReactNode;
  grid?: boolean;
  checkbox?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%', marginBottom: grid ? 0 : '6px', background: selected ? '#130d00' : CARD,
        border: `2px solid ${selected ? G : LINE}`, borderRadius: '10px',
        padding: grid ? '10px 11px' : '11px 13px',
        color: selected ? G : '#ccc', fontSize: grid ? '0.8rem' : '0.86rem',
        cursor: 'pointer', textAlign: 'left',
        display: 'flex', alignItems: 'center', gap: '8px', fontWeight: selected ? 600 : 400, transition: 'all 0.13s',
      }}
    >
      {checkbox && (
        <span style={{ minWidth: '18px', height: '18px', borderRadius: '5px', border: `2px solid ${selected ? G : '#333'}`, background: selected ? G : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#000', flexShrink: 0 }}>{selected ? '✓' : ''}</span>
      )}
      {emoji && <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>{emoji}</span>}
      <span style={{ flex: 1, lineHeight: 1.3 }}>{label}</span>
      {right}
      {!checkbox && selected && <span style={{ fontSize: '0.75rem', flexShrink: 0 }}>✓</span>}
    </button>
  );
}

export function GoldBtn({ onClick, disabled, children, mt }: { onClick: () => void; disabled?: boolean; children: ReactNode; mt?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ width: '100%', marginTop: mt ?? '13px', background: disabled ? '#1c1c1c' : G, color: disabled ? T3 : '#000', border: 'none', borderRadius: '10px', padding: '13px', fontSize: '0.92rem', fontWeight: 800, cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
    >
      {children}
    </button>
  );
}

export function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={{ background: 'none', border: 'none', color: T3, fontSize: '0.73rem', cursor: 'pointer', marginTop: '13px', padding: 0, display: 'block' }}>
      ← Back
    </button>
  );
}

export interface Contact {
  name: string;
  company: string;
  email: string;
  phone: string;
}

export const EMPTY_CONTACT: Contact = { name: '', company: '', email: '', phone: '' };

const CONTACT_FIELDS: { k: keyof Contact; l: string; req: boolean; ph: string; t: string; ac: string }[] = [
  { k: 'name', l: 'Your Name', req: true, ph: 'Jane Smith', t: 'text', ac: 'name' },
  { k: 'company', l: 'Company Name', req: true, ph: 'Acme Corp', t: 'text', ac: 'organization' },
  { k: 'email', l: 'Work Email', req: true, ph: 'jane@acme.com', t: 'email', ac: 'email' },
  { k: 'phone', l: 'Phone (optional)', req: false, ph: '(214) 555-0100', t: 'tel', ac: 'tel' },
];

export function ContactFields({ contact, setContact }: { contact: Contact; setContact: (c: Contact) => void }) {
  return (
    <>
      {CONTACT_FIELDS.map(f => (
        <div key={f.k} style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', fontSize: '0.7rem', color: T2, fontWeight: 700, marginBottom: '4px' }}>
            {f.l}{f.req && <span style={{ color: G }}> *</span>}
          </label>
          <input
            type={f.t}
            placeholder={f.ph}
            autoComplete={f.ac}
            value={contact[f.k]}
            onChange={e => setContact({ ...contact, [f.k]: e.target.value })}
            style={{ width: '100%', background: CARD, border: `2px solid ${LINE}`, borderRadius: '10px', padding: '11px 13px', color: T1, fontSize: '0.88rem', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>
      ))}
    </>
  );
}

export function Spinner({ label }: { label: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{ width: '44px', height: '44px', margin: '0 auto 16px', border: `3px solid ${LINE}`, borderTopColor: G, borderRadius: '50%', animation: 'beg-spin 0.8s linear infinite' }} />
      <p style={{ color: T2, fontSize: '0.88rem' }}>{label}</p>
      <style>{'@keyframes beg-spin{to{transform:rotate(360deg)}}'}</style>
    </div>
  );
}

export function ResultCheck() {
  return (
    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#0a180a', border: '2px solid #4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '1.4rem' }}>✓</div>
  );
}

export const resultCalendlyBtn: CSSProperties = {
  display: 'block', background: G, color: '#000', borderRadius: '9px', padding: '12px',
  fontSize: '0.86rem', fontWeight: 800, textDecoration: 'none', textAlign: 'center', marginBottom: '6px',
};

// POST to /api/lead + fire the GA4 generate_lead event. Returns true on success.
export async function submitPricingLead(payload: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (json.success && typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'generate_lead', form_type: 'instant_pricing', service: payload.service });
    }
    return !!json.success;
  } catch {
    return false;
  }
}
