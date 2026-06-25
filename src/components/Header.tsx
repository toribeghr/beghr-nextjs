import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <img src="/assets/beg-header-image.png" alt="Business Executive Group" className="logo-mark" style={{ width: 42, height: 42, flexShrink: 0 }} />
          <span>Business Executive Group</span>
        </Link>

        <nav className="nav-links" id="navLinks">
          <details className="nav-dd">
            <summary>Services</summary>
            <div className="nav-panel">

              <span className="nav-panel-label">Managed Payroll</span>
              <Link href="/services/managed-payroll" className="nav-panel-hub">Overview</Link>
              <Link href="/services/managed-payroll/legal">Law Firms</Link>
              <Link href="/services/managed-payroll/healthcare">Healthcare</Link>
              <Link href="/services/managed-payroll/finance">Finance &amp; Accounting</Link>
              <Link href="/services/managed-payroll/technology">IT &amp; Technology</Link>
              <Link href="/services/managed-payroll/engineering">Engineering</Link>
              <Link href="/services/managed-payroll/trades">Skilled Trades &amp; Mfg</Link>
              <Link href="/services/managed-payroll/executive">Executive &amp; Leadership</Link>

              <span className="nav-panel-label">HCM Software</span>
              <Link href="/services/hcm-software" className="nav-panel-hub">Overview</Link>
              <Link href="/services/hcm-software/legal">Law Firms</Link>
              <Link href="/services/hcm-software/healthcare">Healthcare</Link>
              <Link href="/services/hcm-software/finance">Finance &amp; Accounting</Link>
              <Link href="/services/hcm-software/technology">IT &amp; Technology</Link>
              <Link href="/services/hcm-software/engineering">Engineering</Link>
              <Link href="/services/hcm-software/trades">Skilled Trades &amp; Mfg</Link>
              <Link href="/services/hcm-software/executive">Executive &amp; Leadership</Link>

              <span className="nav-panel-label">Job Placement</span>
              <Link href="/services/job-placement" className="nav-panel-hub">Overview</Link>
              <Link href="/services/job-placement/legal">Legal &amp; Attorney</Link>
              <Link href="/services/job-placement/healthcare">Healthcare &amp; Nursing</Link>
              <Link href="/services/job-placement/finance">Finance &amp; Accounting</Link>
              <Link href="/services/job-placement/technology">IT &amp; Technology</Link>
              <Link href="/services/job-placement/engineering">Engineering</Link>
              <Link href="/services/job-placement/trades">Skilled Trades &amp; Mfg</Link>
              <Link href="/services/job-placement/executive">Executive &amp; Director+</Link>

            </div>
          </details>

          <details className="nav-dd">
            <summary>Network</summary>
            <div className="nav-panel">
              <Link href="/network/membership" className="nav-panel-hub">Membership</Link>
              <Link href="/network/sponsorship">Sponsorship</Link>
            </div>
          </details>

          <details className="nav-dd">
            <summary>About Us</summary>
            <div className="nav-panel">
              <Link href="/about" className="nav-panel-hub">About / Board of Directors</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </details>

          <Link href="/blog">Blog</Link>

          <a
            className="btn btn--gold"
            href="https://calendly.com/tori-beghr?id=1"
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
