import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          {/* Contact */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Contact Us</h5>
            <div className="footer-contact-info">
              <strong>Business Executive Group</strong>
              7700 Windrose Ave<br />
              Plano, TX 75024<br />
              <a href="tel:4694121204">469-412-1204</a><br />
              <a href="mailto:sales@beghr.com">sales@beghr.com</a>
            </div>
          </div>

          {/* Managed Payroll */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Managed Payroll</h5>
            <Link href="/services/managed-payroll" className="footer-link footer-link--overview">Overview</Link>
            <Link href="/services/managed-payroll/legal" className="footer-link">Law Firms</Link>
            <Link href="/services/managed-payroll/healthcare" className="footer-link">Healthcare</Link>
            <Link href="/services/managed-payroll/finance" className="footer-link">Finance &amp; Accounting</Link>
            <Link href="/services/managed-payroll/technology" className="footer-link">IT &amp; Technology</Link>
            <Link href="/services/managed-payroll/engineering" className="footer-link">Engineering</Link>
            <Link href="/services/managed-payroll/trades" className="footer-link">Skilled Trades &amp; Mfg</Link>
            <Link href="/services/managed-payroll/executive" className="footer-link">Executive &amp; Leadership</Link>
          </div>

          {/* HCM Software */}
          <div className="footer-col">
            <h5 className="footer-col-heading">HCM Software</h5>
            <Link href="/services/hcm-software" className="footer-link footer-link--overview">Overview</Link>
            <Link href="/services/hcm-software/legal" className="footer-link">Law Firms</Link>
            <Link href="/services/hcm-software/healthcare" className="footer-link">Healthcare</Link>
            <Link href="/services/hcm-software/finance" className="footer-link">Finance &amp; Accounting</Link>
            <Link href="/services/hcm-software/technology" className="footer-link">IT &amp; Technology</Link>
            <Link href="/services/hcm-software/engineering" className="footer-link">Engineering</Link>
            <Link href="/services/hcm-software/trades" className="footer-link">Skilled Trades &amp; Mfg</Link>
            <Link href="/services/hcm-software/executive" className="footer-link">Executive &amp; Leadership</Link>
          </div>

          {/* Job Placement */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Job Placement</h5>
            <Link href="/services/job-placement" className="footer-link footer-link--overview">Overview</Link>
            <Link href="/services/job-placement/legal" className="footer-link">Legal &amp; Attorney</Link>
            <Link href="/services/job-placement/healthcare" className="footer-link">Healthcare &amp; Nursing</Link>
            <Link href="/services/job-placement/finance" className="footer-link">Finance &amp; Accounting</Link>
            <Link href="/services/job-placement/technology" className="footer-link">IT &amp; Technology</Link>
            <Link href="/services/job-placement/engineering" className="footer-link">Engineering</Link>
            <Link href="/services/job-placement/trades" className="footer-link">Skilled Trades &amp; Mfg</Link>
            <Link href="/services/job-placement/executive" className="footer-link">Executive &amp; Director+</Link>
          </div>

        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 Business Executive Group. All rights reserved.</span>
          <span>Serving businesses nationwide &middot; Plano, TX &middot; 469-412-1204</span>
        </div>

      </div>
    </footer>
  );
}
