'use client';

import { useState } from 'react';

/**
 * BEG payroll-branded lead-capture form. Free backend via Web3Forms.
 * Submissions are emailed to tori.wint@beghr.com, tagged by the asset (toolName).
 * Brand each instance to the asset it gates by passing toolName / toolDescription / assetLabel.
 *
 * "Delivered via email": leads see the asset on-screen instantly AND, once the Web3Forms
 * autoresponder is enabled on the account (one-time dashboard setting), receive a branded
 * auto-reply with the asset link + a book-a-call nudge.
 *
 * Usage:
 *   <PayrollLeadCaptureForm
 *     toolName="Restaurant Payroll Guide"
 *     toolDescription="Tip credits, the FICA tip credit, tip pooling, and multi-location runs -- the full guide."
 *     assetUrl="/resources/guides/restaurant-payroll-guide"
 *     assetLabel="Email me the guide"
 *   />
 */

const WEB3FORMS_KEY = 'a5dc3398-f88a-4944-bafe-54bd85211f81'; // leads -> tori.wint@beghr.com
const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';
const GOLD = '#ECAC60';

interface Props {
  toolName: string;
  toolDescription: string;
  assetUrl?: string;
  assetLabel?: string;
  calendlyLink?: string;
}

export default function PayrollLeadCaptureForm({
  toolName,
  toolDescription,
  assetUrl,
  assetLabel = 'Email it to me',
  calendlyLink = CALENDLY,
}: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: `New payroll lead: ${toolName}`,
      from_name: 'BEG Website',
      tool: toolName,
      asset_url: assetUrl || '',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      botcheck: (form.elements.namedItem('botcheck') as HTMLInputElement).value,
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.7rem 0.85rem', border: '1px solid #ccc', borderRadius: '6px',
    fontSize: '0.95rem', marginBottom: '0.75rem', boxSizing: 'border-box',
  };

  if (status === 'done') {
    return (
      <div style={{ background: '#FBF3E8', border: `1px solid ${GOLD}`, borderRadius: '10px', padding: '2rem', textAlign: 'center', maxWidth: '460px', width: '100%', boxSizing: 'border-box' }}>
        <p style={{ fontWeight: 800, fontSize: '1.15rem', color: '#000', margin: '0 0 0.5rem' }}>Check your inbox.</p>
        <p style={{ color: '#444', margin: '0 0 1.25rem' }}>
          Your {toolName} is on its way to your email. Want to skip the reading and just hand payroll off? Book a 15-minute call.
        </p>
        {assetUrl && (
          <a href={assetUrl} className="btn btn--gold" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>Open it now</a>
        )}
        <div>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600, fontSize: '0.92rem' }}>
            Book a 15-minute discovery call
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: `4px solid ${GOLD}`, borderRadius: '10px', padding: '1.75rem', maxWidth: '460px', width: '100%', boxSizing: 'border-box' }}>
      <p style={{ display: 'inline-block', background: GOLD, color: '#000', fontWeight: 700, fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.05em', margin: '0 0 0.75rem' }}>
        WANT THIS EMAILED TO YOU?
      </p>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000', margin: '0 0 0.4rem' }}>{toolName}</h3>
      <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.55, margin: '0 0 1.25rem' }}>{toolDescription}</p>

      <form onSubmit={handleSubmit}>
        <input style={inputStyle} type="text" name="name" placeholder="Full name" required autoComplete="name" />
        <input style={inputStyle} type="email" name="email" placeholder="Work email" required autoComplete="email" />
        <input style={inputStyle} type="text" name="company" placeholder="Company" autoComplete="organization" />
        {/* honeypot anti-spam field, hidden from people */}
        <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />

        <button type="submit" className="btn btn--gold" disabled={status === 'sending'} style={{ width: '100%', fontSize: '1rem', padding: '0.8rem', marginTop: '0.25rem', opacity: status === 'sending' ? 0.7 : 1 }}>
          {status === 'sending' ? 'Sending...' : assetLabel}
        </button>

        {status === 'error' && (
          <p style={{ color: '#b00000', fontSize: '0.88rem', marginTop: '0.75rem' }}>
            Something went wrong. Please email anthony@beghr.com and we will send it over.
          </p>
        )}
        <p style={{ color: '#999', fontSize: '0.78rem', marginTop: '0.85rem', lineHeight: 1.4 }}>
          We will only use your details to send what you requested and follow up about your payroll. No spam.
        </p>
      </form>
    </div>
  );
}
