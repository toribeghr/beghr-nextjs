import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <svg width="42" height="56" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" className="logo-mark" style={{ flexShrink: 0 }}>
            <circle cx="50" cy="50" r="35" fill="#D4AF37"/>
            <circle cx="25" cy="35" r="12" fill="#D4AF37"/>
            <circle cx="75" cy="35" r="12" fill="#D4AF37"/>
            <circle cx="40" cy="45" r="4" fill="#0A0E27"/>
            <circle cx="60" cy="45" r="4" fill="#0A0E27"/>
            <polygon points="50,60 45,68 55,68" fill="#0A0E27"/>
            <g stroke="#7A8A9E" strokeWidth="3" fill="none" strokeLinecap="round">
              <line x1="20" y1="85" x2="80" y2="85"/>
              <circle cx="30" cy="85" r="6"/>
              <line x1="65" y1="78" x2="65" y2="92"/>
              <line x1="78" y1="78" x2="78" y2="92"/>
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
            Book a Discovery Call
          </a>
        </nav>

        <button className="nav-toggle" id="navToggle" aria-label="Open menu">&#9776;</button>
      </div>
    </header>
  );
}
