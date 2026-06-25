import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <Image
            src="/assets/beg-logo-gold.png"
            alt="Business Executive Group"
            width={42}
            height={42}
            priority
          />
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
