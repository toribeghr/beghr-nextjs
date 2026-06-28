'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navGroups = [
  {
    label: 'Services',
    items: [
      { href: '/services/managed-payroll',                  label: 'Managed Payroll',    hub: true  },
      { href: '/services/job-placement',                    label: 'Job Placement',      hub: true  },
      { href: '/services/hcm-software',                     label: 'HCM Software',       hub: true  },
      { href: '/services/managed-payroll/pricing',          label: 'Payroll Pricing',    hub: false },
      { href: '/services/managed-payroll/cost-calculator',  label: 'Cost Calculator',    hub: false },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/blog',                label: 'All Articles',         hub: true  },
      { href: '/blog/compare',        label: 'Compare Alternatives', hub: false },
      { href: '/blog/legal-hiring',   label: 'Legal Hiring Guides',  hub: false },
      { href: '/blog/payroll',        label: 'Payroll by Industry',  hub: false },
      { href: '/blog/hcm-technology', label: 'HCM Technology',       hub: false },
    ],
  },
  {
    label: 'Network',
    items: [
      { href: '/network/membership',  label: 'Membership',  hub: true  },
      { href: '/network/sponsorship', label: 'Sponsorship', hub: false },
      { href: '/partners',            label: 'Partners',    hub: false },
    ],
  },
  {
    label: 'About',
    items: [
      { href: '/about',                label: 'About Us',            hub: true  },
      { href: '/board-of-directors',   label: 'Board of Directors',  hub: false },
      { href: '/contact',              label: 'Contact Us',          hub: false },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup,  setOpenGroup]  = useState<number | null>(null);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, []);

  // Auto-close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) closeAll(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [closeAll]);

  const toggleGroup = (i: number) =>
    setOpenGroup(prev => (prev === i ? null : i));

  return (
    <header className="site-header">
      <div className="container nav">

        <Link href="/" className="brand" aria-label="Business Executive Group home" onClick={closeAll}>
          <img
            src="/assets/beg-header-image.png"
            alt="Business Executive Group"
            className="logo-mark"
            style={{ flexShrink: 0 }}
          />
          <span>Business Executive Group</span>
        </Link>

        <nav
          className={`nav-links${mobileOpen ? ' open' : ''}`}
          id="navLinks"
          aria-label="Main navigation"
        >
          {navGroups.map((group, i) => (
            <div
              key={group.label}
              className={`nav-dd${openGroup === i ? ' open' : ''}`}
            >
              {/* Desktop: hover via CSS. Mobile: click toggles .open class */}
              <button
                className="nav-dd-trigger"
                aria-haspopup="true"
                aria-expanded={openGroup === i}
                onClick={() => toggleGroup(i)}
              >
                {group.label}
                <span className="nav-dd-arrow" aria-hidden="true" />
              </button>

              <div className="nav-panel" role="menu">
                {group.items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={item.hub ? 'nav-panel-hub' : ''}
                    role="menuitem"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <a
            className="btn btn--gold"
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
          >
            Book a Discovery Call
          </a>
        </nav>

        {/* Hamburger — 3-line → X animation via CSS */}
        <button
          className={`nav-toggle${mobileOpen ? ' is-open' : ''}`}
          id="navToggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => { setMobileOpen(v => !v); setOpenGroup(null); }}
        >
          <span /><span /><span />
        </button>

      </div>
    </header>
  );
}
