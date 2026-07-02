'use client';

import { useEffect, useState } from 'react';

const GOLD = '#ECAC60';

/**
 * Lightweight cookie-consent banner wired to Google Consent Mode v2. Tracking defaults to
 * DENIED (set in layout.tsx) and is only granted after the visitor accepts here. The choice
 * is stored in the beg_consent cookie for one year. No Meta or LinkedIn pixels are loaded;
 * only Google Analytics (via GTM) runs, and only under granted consent.
 */
export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (document.cookie.indexOf('beg_consent=') === -1) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  function choose(granted: boolean) {
    try {
      document.cookie =
        'beg_consent=' + (granted ? 'granted' : 'denied') + ';path=/;max-age=31536000;SameSite=Lax';
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: Record<string, unknown>[];
      };
      const state = granted ? 'granted' : 'denied';
      if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', {
          ad_storage: state,
          ad_user_data: state,
          ad_personalization: state,
          analytics_storage: state,
        });
      }
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: granted ? 'consent_granted' : 'consent_denied' });
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
        background: '#000', color: '#fff', borderTop: `2px solid ${GOLD}`,
        padding: '16px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        gap: '12px', justifyContent: 'center', fontSize: '0.9rem', lineHeight: 1.5,
      }}
    >
      <span style={{ maxWidth: '680px' }}>
        We use cookies for analytics (including Google) to improve your
        experience and measure our marketing. See our{' '}
        <a href="/privacy-policy" style={{ color: GOLD, textDecoration: 'underline' }}>Privacy Policy</a>.
      </span>
      <span style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => choose(false)}
          style={{ background: 'transparent', color: '#fff', border: '1px solid #777', borderRadius: '6px', padding: '8px 16px', cursor: 'pointer', fontWeight: 600 }}
        >
          Decline
        </button>
        <button
          onClick={() => choose(true)}
          style={{ background: GOLD, color: '#000', border: 'none', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', fontWeight: 700 }}
        >
          Accept
        </button>
      </span>
    </div>
  );
}
