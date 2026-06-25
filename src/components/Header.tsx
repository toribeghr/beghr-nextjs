import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <svg width="42" height="42" viewBox="0 0 200 280" className="logo-mark" style={{ flexShrink: 0 }}>
            <g fill="#D4AF37">
              <path d="M50 80 Q30 60 20 80 Q15 100 35 110 M150 80 Q170 60 180 80 Q185 100 165 110"/>
              <ellipse cx="100" cy="100" rx="45" ry="55"/>
              <ellipse cx="100" cy="130" rx="30" ry="35" fill="#F5A623"/>
              <circle cx="85" cy="85" r="6" fill="#0A0E27"/>
              <circle cx="115" cy="85" r="6" fill="#0A0E27"/>
              <path d="M95 115 L100 125 L105 115 Z" fill="#0A0E27"/>
            </g>
            <g fill="none" stroke="#7A8A9E" strokeWidth="8" strokeLinecap="round">
              <line x1="40" y1="160" x2="140" y2="160"/>
              <circle cx="55" cy="160" r="12"/>
              <line x1="120" y1="150" x2="120" y2="170"/>
              <line x1="135" y1="150" x2="135" y2="170"/>
            </g>
          </svg>
          <span>Business Executive Group</span>
        </Link>

        <nav className="nav-links" id="navLinks">
          <details className="nav-dd">
            <summary>Managed Payroll</summary>
            <div className="nav-panel">
              <Link href="/services/managed-payroll" className="nav-panel-hub">Managed Payroll Overview</Link>
              <Link href="/services/payroll-legal">Law Firms</Link>
              <Link href="/services/payroll-healthcare">Healthcare</Link>
              <Link href="/services/payroll-finance">Finance & Accounting</Link>
              <Link href="/services/payroll-technology">IT & Technology</Link>
              <Link href="/services/payroll-engineering">Engineering</Link>
              <Link href="/services/payroll-trades">Skilled Trades & Mfg</Link>
              <Link href="/services/payroll-executive">Executive & Leadership</Link>
            </div>
          </details>

          <details className="nav-dd">
            <summary>HCM Software</summary>
            <div className="nav-panel">
              <Link href="/services/hcm-software" className="nav-panel-hub">HCM Software Overview</Link>
              <Link href="/services/hcm-legal">Law Firms</Link>
              <Link href="/services/hcm-healthcare">Healthcare</Link>
              <Link href="/services/hcm-finance">Finance & Accounting</Link>
              <Link href="/services/hcm-technology">IT & Technology</Link>
              <Link href="/services/hcm-engineering">Engineering</Link>
              <Link href="/services/hcm-trades">Skilled Trades & Mfg</Link>
              <Link href="/services/hcm-executive">Executive & Leadership</Link>
            </div>
          </details>

          <details className="nav-dd">
            <summary>Job Placement</summary>
            <div className="nav-panel">
              <Link href="/services/job-placement" className="nav-panel-hub">Job Placement Overview</Link>
              <Link href="/services/placement-legal">Legal & Attorney</Link>
              <Link href="/services/placement-healthcare">Healthcare & Nursing</Link>
              <Link href="/services/placement-finance">Finance & Accounting</Link>
              <Link href="/services/placement-technology">IT & Technology</Link>
              <Link href="/services/placement-engineering">Engineering</Link>
              <Link href="/services/placement-trades">Skilled Trades & Mfg</Link>
              <Link href="/services/placement-executive">Executive & Director+</Link>
            </div>
          </details>

          <Link href="/#network">Network</Link>

          <a
            className="btn btn--gold"
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </nav>

        <button className="nav-toggle" id="navToggle" aria-label="Open menu">&#9776;</button>
      </div>
    </header>
  );
}
