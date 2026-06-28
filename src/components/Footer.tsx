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
            <Link href="/contact" className="footer-map-link" title="Get directions, opens contact page">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.0!2d-96.8252!3d33.0198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21b2a7f0adbd%3A0x4b5e76e94d6cb05!2s7700%20Windrose%20Ave%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1700000000000"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
              />
              <div className="footer-map-overlay">
                <span className="footer-map-badge">View Map →</span>
              </div>
            </Link>
          </div>

          {/* Managed Payroll */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Managed Payroll</h5>
            <Link href="/services/managed-payroll" className="footer-link footer-link--overview">Overview</Link>
            <Link href="/services/managed-payroll/pricing" className="footer-link">Pricing</Link>
            <Link href="/services/managed-payroll/cost-calculator" className="footer-link">Cost Calculator</Link>
            <Link href="/services/managed-payroll/legal" className="footer-link">Law Firms</Link>
            <Link href="/services/managed-payroll/healthcare" className="footer-link">Healthcare</Link>
            <Link href="/services/managed-payroll/finance" className="footer-link">Finance &amp; Accounting</Link>
            <Link href="/services/managed-payroll/technology" className="footer-link">IT &amp; Technology</Link>
            <Link href="/services/managed-payroll/engineering" className="footer-link">Engineering</Link>
            <Link href="/services/managed-payroll/trades" className="footer-link">Skilled Trades &amp; Mfg</Link>
            <Link href="/services/managed-payroll/executive" className="footer-link">Executive &amp; Leadership</Link>
            <Link href="/services/managed-payroll/auto-dealership" className="footer-link">Auto Dealerships</Link>
            <Link href="/services/managed-payroll/cannabis" className="footer-link">Cannabis Businesses</Link>
            <Link href="/services/managed-payroll/childcare" className="footer-link">Childcare Centers</Link>
            <Link href="/services/managed-payroll/church" className="footer-link">Churches &amp; Nonprofits</Link>
            <Link href="/services/managed-payroll/fitness" className="footer-link">Fitness &amp; Gyms</Link>
            <Link href="/services/managed-payroll/franchise" className="footer-link">Franchise Operations</Link>
            <Link href="/services/managed-payroll/home-health" className="footer-link">Home Health Agencies</Link>
            <Link href="/services/managed-payroll/marketing-agency" className="footer-link">Marketing Agencies</Link>
            <Link href="/services/managed-payroll/trucking" className="footer-link">Trucking &amp; Fleets</Link>
            <Link href="/services/managed-payroll/veterinary" className="footer-link">Veterinary Practices</Link>
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
            <Link href="/services/hcm-software/manufacturing" className="footer-link">Manufacturing</Link>
            <Link href="/services/hcm-software/construction" className="footer-link">Construction</Link>
            <Link href="/services/hcm-software/restaurants" className="footer-link">Restaurants</Link>
            <Link href="/services/hcm-software/retail" className="footer-link">Retail</Link>
            <Link href="/services/hcm-software/nonprofit" className="footer-link">Nonprofit</Link>
            <Link href="/services/hcm-software/professional-services" className="footer-link">Professional Services</Link>
            <Link href="/services/hcm-software/staffing-agency" className="footer-link">Staffing Agencies</Link>
            <Link href="/services/hcm-software/transportation" className="footer-link">Transportation</Link>
            <Link href="/services/hcm-software/auto-dealership" className="footer-link">Auto Dealerships</Link>
            <Link href="/services/hcm-software/senior-care" className="footer-link">Senior Care</Link>
            <Link href="/services/hcm-software/home-health" className="footer-link">Home Health</Link>
            <Link href="/services/hcm-software/childcare" className="footer-link">Childcare</Link>
            <Link href="/services/hcm-software/property-management" className="footer-link">Property Management</Link>
            <Link href="/services/hcm-software/franchise" className="footer-link">Franchise</Link>
            <Link href="/services/hcm-software/fitness" className="footer-link">Fitness and Gyms</Link>
            <Link href="/services/hcm-software/salon-spa" className="footer-link">Salon and Spa</Link>
            <Link href="/services/hcm-software/cannabis" className="footer-link">Cannabis</Link>
            <Link href="/services/hcm-software/government-contractor" className="footer-link">Government Contractors</Link>
            <Link href="/services/hcm-software/education" className="footer-link">Education</Link>
            <Link href="/services/hcm-software/ai-connector" className="footer-link">Connector for Claude</Link>
            <Link href="/services/hcm-software/roi-calculator" className="footer-link">ROI Calculator</Link>
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
            <Link href="/services/job-placement/accounting-cpa" className="footer-link">Accounting &amp; CPA</Link>
            <Link href="/services/job-placement/sales" className="footer-link">Sales</Link>
            <Link href="/services/job-placement/cybersecurity" className="footer-link">Cybersecurity</Link>
            <Link href="/services/job-placement/insurance" className="footer-link">Insurance</Link>
            <Link href="/services/job-placement/hr" className="footer-link">Human Resources</Link>
            <Link href="/services/job-placement/construction-management" className="footer-link">Construction Mgmt</Link>
            <Link href="/services/job-placement/supply-chain" className="footer-link">Supply Chain</Link>
            <Link href="/services/job-placement/marketing" className="footer-link">Marketing</Link>
            <Link href="/services/job-placement/banking" className="footer-link">Banking</Link>
            <Link href="/services/job-placement/biotech" className="footer-link">Biotech &amp; Life Sciences</Link>
            <Link href="/services/job-placement/manufacturing" className="footer-link">Manufacturing</Link>
            <Link href="/services/job-placement/dental" className="footer-link">Dental</Link>
            <Link href="/services/job-placement/nonprofit" className="footer-link">Nonprofit</Link>
            <Link href="/services/job-placement/real-estate" className="footer-link">Real Estate</Link>
            <Link href="/services/job-placement/energy" className="footer-link">Energy</Link>
            <Link href="/services/job-placement/architecture" className="footer-link">Architecture</Link>
            <Link href="/services/job-placement/hospitality" className="footer-link">Hospitality</Link>
            <Link href="/services/job-placement/veterinary" className="footer-link">Veterinary</Link>
            <Link href="/services/job-placement/government" className="footer-link">Government Contracting</Link>
          </div>

          {/* Partners */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Partners</h5>
            <Link href="/partners" className="footer-link footer-link--overview">Partner Program</Link>
            <Link href="/partners/cpa" className="footer-link">CPAs &amp; Accounting Firms</Link>
            <Link href="/partners/broker" className="footer-link">Insurance &amp; Benefits Brokers</Link>
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
