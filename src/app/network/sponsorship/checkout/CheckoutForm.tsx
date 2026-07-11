'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const TIERS = {
  bronze: { key: 'bronze', label: 'Bronze Sponsor', price: 500, image: '/assets/sponsorship/bronze-tier.png' },
  silver: { key: 'silver', label: 'Silver Sponsor', price: 1000, image: '/assets/sponsorship/silver-tier.png' },
  gold: { key: 'gold', label: 'Gold Sponsor', price: 1500, image: '/assets/sponsorship/gold-tier.png' },
  platinum: { key: 'platinum', label: 'Platinum Sponsor', price: 3000, image: '/assets/sponsorship/platinum-tier.png' },
} as const;

type TierKey = keyof typeof TIERS;

export default function CheckoutForm() {
  const params = useSearchParams();
  const requested = (params.get('tier') || 'bronze').toLowerCase();
  const initialTier: TierKey = requested in TIERS ? (requested as TierKey) : 'bronze';

  const [tierKey, setTierKey] = useState<TierKey>(initialTier);
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  const tier = TIERS[tierKey];
  const total = tier.price * quantity;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/sponsorship-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tierKey, quantity, fullName, companyName, email, phone }),
      });
      const json = await res.json();
      setStatus(json.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: '620px', textAlign: 'center' }}>
          <p className="eyebrow">Order Received</p>
          <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Thanks — your {tier.label} order is in.</h1>
          <p style={{ color: 'var(--slate)', lineHeight: 1.7, marginBottom: '24px' }}>
            We&apos;ve recorded your order for {quantity} x {tier.label} (${total.toLocaleString()} total).
            Bank transfer instructions were shown on the previous step — a BEG team member will confirm
            your sponsorship by email once payment is received. Questions in the meantime? Reach us at{' '}
            <a href="mailto:sales@beghr.com" style={{ color: 'var(--gold-deep)' }}>sales@beghr.com</a>.
          </p>
          <Link href="/network/sponsorship" className="btn btn--gold">Back to Sponsorship</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '960px' }}>
        <p className="eyebrow">Network &middot; Sponsorship &middot; Checkout</p>
        <h1 style={{ fontSize: '2rem', marginBottom: '32px' }}>Complete your sponsorship order</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '40px' }}>
          {/* LEFT: form */}
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Tier</h2>
            <select
              value={tierKey}
              onChange={(e) => setTierKey(e.target.value as TierKey)}
              style={{ width: '100%', padding: '12px', border: '1px solid var(--line)', borderRadius: '8px', marginBottom: '24px', fontSize: '0.95rem' }}
            >
              {Object.values(TIERS).map((t) => (
                <option key={t.key} value={t.key}>
                  {t.label} — ${t.price.toLocaleString()}
                </option>
              ))}
            </select>

            <h2 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Contact</h2>
            <div style={{ display: 'grid', gap: '14px', marginBottom: '24px' }}>
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <input
                required
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
              />
            </div>

            <h2 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Payment</h2>
            <div
              style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderLeft: '4px solid var(--gold)',
                borderRadius: '8px',
                padding: '1.1rem 1.25rem',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: '#333',
                marginBottom: '24px',
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: '8px' }}>Bank Transfer Instructions</p>
              <p style={{ marginBottom: '10px' }}>
                Complete payment via bank transfer within 5 business days to secure your sponsorship.
                Your tier is confirmed once payment is received and matched to your order.
              </p>
              <p style={{ margin: '2px 0' }}><strong>Bank Name:</strong> [Anthony — add real bank name before launch]</p>
              <p style={{ margin: '2px 0' }}><strong>Account Name:</strong> [Anthony — add real account name before launch]</p>
              <p style={{ margin: '2px 0' }}><strong>Account Number:</strong> [Anthony — add real account number before launch]</p>
              <p style={{ margin: '2px 0' }}><strong>Routing Number (ABA):</strong> [Anthony — add real routing number before launch]</p>
              <p style={{ margin: '10px 0 0' }}><strong>Reference/Memo:</strong> Use your company name as the transfer reference.</p>
            </div>

            {status === 'error' && (
              <p style={{ color: '#b91c1c', marginBottom: '16px', fontSize: '0.9rem' }}>
                Something went wrong submitting your order. Please try again, or email sales@beghr.com directly.
              </p>
            )}

            <button type="submit" disabled={status === 'submitting'} className="btn btn--gold" style={{ width: '100%' }}>
              {status === 'submitting' ? 'Placing order…' : 'Place Order'}
            </button>
          </form>

          {/* RIGHT: order summary */}
          <div>
            <div style={{ background: 'var(--bg-soft)', borderRadius: '12px', padding: '24px', position: 'sticky', top: '24px' }}>
              <h2 style={{ fontSize: '1.05rem', marginBottom: '16px' }}>Order Summary</h2>
              <div style={{ display: 'flex', gap: '14px', marginBottom: '18px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tier.image}
                  alt={`${tier.label} package`}
                  style={{ width: '72px', height: '72px', objectFit: 'contain', background: '#fff', borderRadius: '8px', flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontWeight: 700 }}>{tier.label}</p>
                  <p style={{ color: 'var(--slate)', fontSize: '0.9rem' }}>${tier.price.toLocaleString()} each</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--slate)' }}>Quantity</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={qtyBtnStyle}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    style={qtyBtnStyle}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--slate)', textAlign: 'center' }}>
              Prefer to talk first?{' '}
              <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-deep)' }}>
                Book a 15-minute call
              </a>{' '}
              instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--line)',
  borderRadius: '8px',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
};

const qtyBtnStyle: React.CSSProperties = {
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  border: '1px solid var(--line)',
  background: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: 1,
};
