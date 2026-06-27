import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Business Executive Group home">
          <img src="/assets/beg-header-image.png" alt="Business Executive Group" className="logo-mark" style={{ flexShrink: 0 }} />
          <span>Business Executive Group</span>
        </Link>

        <nav className="nav-links" id="navLinks">
          <details className="nav-dd">
            <summary>Services</summary>
            <div className="nav-panel">
              <Link href="/services/managed-payroll" className="nav-panel-label nav-panel-hub">Managed Payroll</Link>
              <Link href="/services/hcm-software" className="nav-panel-label nav-panel-hub">HCM Software</Link>
              <Link href="/services/job-placement" className="nav-panel-label nav-panel-hub">Job Placement</Link>
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
