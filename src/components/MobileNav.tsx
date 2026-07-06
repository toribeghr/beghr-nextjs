'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';
import './MobileNav.css';

/**
 * Mobile nav drawer. Design constraints this satisfies:
 * - Markup is present in initial HTML, not injected on open. Toggling is a
 *   single class swap, so there is no client-side render cost when the
 *   drawer opens.
 * - Panel motion uses `transform: translateX`, which is GPU-composited.
 * - One accordion level for sub-items. No mega-menu crammed into a slider.
 * - Body scroll is locked while open so the page behind the drawer doesn't
 *   scroll with it.
 * - Icons are inline SVG, not an icon font or a JS icon library.
 *
 * NAV_GROUPS mirrors the desktop nav in Header.tsx (Services / Resources /
 * Network / About). Keep the two in sync.
 */

type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[] };

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Services',
    links: [
      { label: 'Managed Payroll', href: '/services/managed-payroll' },
      { label: 'Job Placement', href: '/services/job-placement' },
      { label: 'HCM Software', href: '/services/hcm-software' },
      { label: 'HR Outsourcing', href: '/services/hr-outsourcing' },
      { label: 'Managed Benefits', href: '/services/managed-benefits' },
      { label: 'Applicant Tracking', href: '/services/applicant-tracking-system' },
      { label: 'Payroll Pricing', href: '/services/managed-payroll/pricing' },
      { label: 'Cost Calculator', href: '/services/managed-payroll/cost-calculator' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'All Articles', href: '/blog' },
      { label: 'Compare Alternatives', href: '/blog/compare' },
      { label: 'Legal Hiring Guides', href: '/blog/legal-hiring' },
      { label: 'Payroll by Industry', href: '/blog/payroll' },
      { label: 'HCM Technology', href: '/blog/hcm-software' },
    ],
  },
  {
    label: 'Network',
    links: [
      { label: 'Membership', href: '/network/membership' },
      { label: 'Sponsorship', href: '/network/sponsorship' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    label: 'About',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Board of Directors', href: '/board-of-directors' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export default function MobileNav({ onSearchClick }: { onSearchClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="beg-nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="beg-mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          {open ? (
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Scrim: click to close. Present in DOM always, visibility via class. */}
      <div
        className={`beg-nav-scrim ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="beg-mobile-nav-panel"
        ref={panelRef}
        className={`beg-nav-panel ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="beg-nav-search-trigger"
          onClick={() => {
            setOpen(false);
            onSearchClick?.();
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Search 3,000+ pages
        </button>

        <ul className="beg-nav-groups">
          {NAV_GROUPS.map((group) => {
            const isExpanded = expandedGroup === group.label;
            return (
              <li key={group.label} className="beg-nav-group">
                <button
                  type="button"
                  className="beg-nav-group-trigger"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedGroup(isExpanded ? null : group.label)}
                >
                  {group.label}
                  <svg
                    className={`beg-nav-chevron ${isExpanded ? 'is-open' : ''}`}
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul
                  className="beg-nav-sublist"
                  style={{ maxHeight: isExpanded ? `${group.links.length * 44}px` : '0px' }}
                >
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="beg-nav-cta" onClick={() => setOpen(false)}>
          <PricingCta service="chooser" subline={false} label="Get Instant Pricing" />
        </div>
      </nav>
    </>
  );
}
