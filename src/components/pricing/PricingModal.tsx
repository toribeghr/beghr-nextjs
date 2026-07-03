'use client';

import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { BG, CARD, LINE, T2 } from './pricing';

// Approved bottom-sheet modal, ported from the locked artifacts (July 1, 2026).
// Dark sheet (#080808), 480px max, drag handle, x close, Escape closes,
// backdrop blur, body scroll locked. Do not redesign.

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function PricingModal({ open, onClose, children }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  // Portal to <body>: ancestors with backdrop-filter/transform (e.g. the sticky
  // header) create a containing block that hijacks position:fixed and pushes
  // the sheet out of the viewport. Rendering at body level escapes all of them.
  return createPortal(
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', animation: 'beg-fade 0.2s ease' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Get instant pricing"
        style={{ width: '100%', maxWidth: '480px', maxHeight: '92vh', background: BG, border: `1px solid ${LINE}`, borderRadius: '20px 20px 0 0', display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'beg-slide 0.28s cubic-bezier(0.16,1,0.3,1)', boxShadow: '0 -8px 40px rgba(0,0,0,0.6)', color: '#fff', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 2px', position: 'relative', flexShrink: 0 }}>
          <div style={{ width: '36px', height: '4px', background: '#333', borderRadius: '99px' }} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{ position: 'absolute', right: '14px', top: '8px', background: CARD, border: `1px solid ${LINE}`, borderRadius: '50%', width: '28px', height: '28px', color: T2, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, padding: 0 }}
          >
            ×
          </button>
        </div>
        {children}
        <style>{'@keyframes beg-fade{from{opacity:0}to{opacity:1}} @keyframes beg-slide{from{transform:translateY(100%)}to{transform:translateY(0)}}'}</style>
      </div>
    </div>,
    document.body
  );
}
