import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="21" cy="21" r="21" fill="#D4AF37" opacity="0.1"/>
            <g fill="#D4AF37">
              <path d="M21 8c2 0 3.5 1 4.5 2.5.8 1.2 1 2.5.8 3.5-.2 1-1 1.8-2 2l-1.3.3.5 1.2c.3.8.2 1.5-.2 2-.5.6-1.3 1-2.3 1s-1.8-.4-2.3-1c-.4-.5-.5-1.2-.2-2l.5-1.2-1.3-.3c-1-.2-1.8-1-2-2-.2-1 0-2.3.8-3.5C17.5 9 19 8 21 8z"/>
              <path d="M14 16c.5 0 1 .2 1.3.6l1 1.3 1-1.3c.3-.4.8-.6 1.3-.6s1 .2 1.3.6c.3.4.3 1 0 1.5l-2.3 3-2.3-3c-.3-.5-.3-1.1 0-1.5.3-.4.8-.6 1.3-.6z"/>
              <rect x="18" y="24" width="6" height="1.5" rx="0.5"/>
              <path d="M21 26c-2 0-3-1.5-3-3.5s1-3.5 3-3.5 3 1.5 3 3.5-1 3.5-3 3.5z"/>
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
