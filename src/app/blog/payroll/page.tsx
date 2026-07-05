import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll & HR Compliance | BEG Blog',
  description: 'Tax law changes, payroll regulations, and compliance tips for businesses nationwide.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll' },
  openGraph: {
    title: 'Payroll & HR Compliance | BEG Blog',
    description: 'Tax law changes, payroll regulations, and compliance tips for businesses nationwide.',
    url: 'https://www.beghr.com/blog/payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll & HR Compliance | BEG Blog', description: 'Tax law changes, payroll regulations, and compliance tips for businesses nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const industryPosts = [
  {
    title: 'Managed Payroll vs. Hiring In-House for Trucking Companies',
    description: 'Driver classification, per diem structuring, and multi-state DOT compliance. What a fully managed payroll service costs vs. a qualified in-house hire for fleets of 10-200 drivers.',
    slug: '/blog/payroll/trucking/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Veterinary Practices',
    description: 'DVM salaries, technician shift differentials, ACA FTE tracking, and multi-location expansion. Real cost comparison for practices with 10-100 staff.',
    slug: '/blog/payroll/veterinary/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Auto Dealerships',
    description: 'Draw-plus-commission reconciliation, F&I chargebacks, and flat-rate minimum wage floors. Full cost comparison for dealerships with 20-200 employees.',
    slug: '/blog/payroll/auto-dealership/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Cannabis Businesses',
    description: '280E-aware payroll structure, banking constraint setup, and state licensing compliance. What managed payroll costs for dispensaries, cultivators, and processors.',
    slug: '/blog/payroll/cannabis/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Childcare Centers',
    description: 'FLSA overtime for aides, state subsidy audit documentation, and high-turnover onboarding. Real numbers for centers with 10-80 staff.',
    slug: '/blog/payroll/childcare/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Home Health Agencies',
    description: 'Inter-client travel time compensation, EVV data reconciliation, and multi-state operations. Full cost comparison for agencies with 15-150 staff.',
    slug: '/blog/payroll/home-health/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Churches',
    description: 'Minister housing allowance, dual tax status, Form 4361 Social Security opt-out, and FICA for non-ministerial staff. Full comparison for church payroll.',
    slug: '/blog/payroll/church/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Marketing Agencies',
    description: 'Multi-state remote teams, S-corp owner salary processing, and contractor classification risk. Real cost comparison for agencies with 10-80 employees.',
    slug: '/blog/payroll/marketing-agency/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Fitness Studios and Gyms',
    description: 'Trainer W-2 vs. 1099 classification, per-class pay minimum wage floors, and ACA FTE tracking. Full cost comparison for studios with 10-80 staff.',
    slug: '/blog/payroll/fitness/managed-payroll-vs-in-house',
  },
  {
    title: 'Managed Payroll vs. Hiring In-House for Franchise Owners',
    description: 'Multi-location cost centers, state minimum wage auto-updates, employee transfers, and multi-brand management. Full comparison for franchise operators.',
    slug: '/blog/payroll/franchise/managed-payroll-vs-in-house',
  },
];

const informationalPosts = [
  {
    title: 'Truck Driver Payroll Taxes: What Carriers Must Withhold and Report',
    description: 'Core employer taxes, multi-state interstate obligations, and W-2 vs. owner-operator classification for trucking companies.',
    slug: '/blog/payroll/trucking/truck-driver-payroll-taxes',
  },
  {
    title: 'Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup',
    description: 'Accountable plan requirements, FICA savings calculation, and the most common setup mistakes that cost fleets thousands per year.',
    slug: '/blog/payroll/trucking/per-diem-pay-truck-drivers',
  },
  {
    title: 'Veterinary Staff Overtime Rules: Which Roles Are Exempt and Which Are Not',
    description: 'FLSA exemption table by role, regular rate calculation with bonuses, and the most common overtime compliance failures in vet practices.',
    slug: '/blog/payroll/veterinary/veterinary-staff-overtime-rules',
  },
  {
    title: 'DVM Compensation and Payroll: Base Salary, Production %, and Bonuses',
    description: 'How to process base salary plus production percentage structures, supplemental wage taxation for bonuses, and owner DVM reasonable salary.',
    slug: '/blog/payroll/veterinary/dvm-compensation-payroll',
  },
  {
    title: 'Auto Dealer Commission Payroll: Draw-Against, Chargebacks, and Flat-Rate',
    description: 'Draw-against-commission processing, F&I chargeback handling, and flat-rate technician minimum wage floor compliance.',
    slug: '/blog/payroll/auto-dealership/dealer-commission-payroll',
  },
  {
    title: 'Dealership Overtime and Minimum Wage: FLSA Rules for F&I, Service Advisors, and Technicians',
    description: 'Which dealership roles are exempt, what the Navarro decision changed for service advisors, and how flat-rate techs can fall below minimum wage.',
    slug: '/blog/payroll/auto-dealership/dealership-overtime-minimum-wage',
  },
  {
    title: 'Cannabis Payroll and 280E: How to Code Payroll Costs to Minimize Tax Impact',
    description: 'Which roles qualify as COGS under 280E, how to allocate payroll costs, and what documentation is required to defend your positions.',
    slug: '/blog/payroll/cannabis/cannabis-payroll-280e',
  },
  {
    title: 'Cannabis Payroll Without a Bank: How Dispensaries Pay Employees',
    description: 'Four banking options for cannabis operators, cash payroll requirements, and full payroll tax obligations regardless of banking status.',
    slug: '/blog/payroll/cannabis/cannabis-payroll-banking',
  },
  {
    title: 'Childcare Payroll and Overtime: Which Staff Are Exempt and Which Are Not',
    description: 'FLSA overtime exemption table by role, variable scheduling overtime exposure, and high-turnover onboarding compliance.',
    slug: '/blog/payroll/childcare/childcare-payroll-overtime',
  },
  {
    title: 'Childcare Subsidy and Payroll: Managing Mixed-Funding Compliance',
    description: 'How to track and document staff cost allocation across CCDF, Head Start, state pre-K, and private-pay funding in a way that survives an audit.',
    slug: '/blog/payroll/childcare/childcare-subsidy-payroll',
  },
  {
    title: 'Home Health Travel Time: When Must Agencies Pay Between Client Visits?',
    description: 'FLSA travel time compensability table, three tracking methods, and DOL enforcement context for home health agencies.',
    slug: '/blog/payroll/home-health/home-health-travel-time',
  },
  {
    title: 'EVV and Payroll Reconciliation: Resolving the Five Most Common Discrepancy Types',
    description: 'Missed clock-outs, GPS flags, extended visits, travel gaps, and substitute aides -- a step-by-step reconciliation workflow for home health agencies.',
    slug: '/blog/payroll/home-health/evv-payroll-reconciliation',
  },
  {
    title: 'Minister Housing Allowance and Payroll: Setup, Limits, and Reporting',
    description: 'Designation-before-payment requirement, payroll system configuration, and W-2 Box 1 exclusion for dual-status ministers.',
    slug: '/blog/payroll/church/minister-housing-allowance-payroll',
  },
  {
    title: 'Church Payroll and FICA: Which Employees Are Exempt and Which Are Not',
    description: 'FICA status by role, the dual-status minister explained, Form 4361 opt-out, and the optional Section 3121(w) church election.',
    slug: '/blog/payroll/church/church-employee-fica-payroll',
  },
  {
    title: 'Multi-State Payroll for Remote Marketing Agency Teams',
    description: 'State registration requirements, high-payroll-tax states to watch, and the contractor misclassification risk that multiplies multi-state exposure.',
    slug: '/blog/payroll/marketing-agency/marketing-agency-remote-payroll',
  },
  {
    title: 'S-Corp Owner Salary in Payroll: What Marketing Agency Owners Need to Know',
    description: 'Reasonable compensation requirements, how distributions work alongside salary, and the IRS audit exposure for S-corps that skip the payroll step.',
    slug: '/blog/payroll/marketing-agency/scorp-owner-salary-payroll',
  },
  {
    title: 'Fitness Trainer W-2 vs. 1099: IRS Classification Rules for Studios and Gyms',
    description: 'Behavioral control factors, who is almost certainly an employee, ABC test states, and the cost of misclassification.',
    slug: '/blog/payroll/fitness/fitness-trainer-w2-vs-1099',
  },
  {
    title: 'Per-Class Pay and Minimum Wage: Payroll Compliance for Fitness Studios',
    description: 'How to calculate the minimum wage floor for per-class instructors, what counts as compensable time, and a worked example.',
    slug: '/blog/payroll/fitness/per-class-pay-minimum-wage',
  },
  {
    title: 'Multi-Location Payroll for Franchise Owners: How to Manage Across Locations',
    description: 'Legal entity structure, cost center tracking, employee transfers between locations, and new-state registration when expanding.',
    slug: '/blog/payroll/franchise/franchise-multi-location-payroll',
  },
  {
    title: 'Franchise Minimum Wage Compliance: How to Stay Current Across Multiple Locations',
    description: 'State and city minimum wage layers, which states have automatic increases, and how to build a system that catches every effective date.',
    slug: '/blog/payroll/franchise/franchise-minimum-wage-compliance',
  },
];

const posts = [
  {
    title: 'Law Firm Payroll Outsourcing: Cost vs. Hiring a Paralegal or HR Manager',
    description: 'Compare law firm payroll outsourcing costs vs. hiring in-house. Save $60K-$100K+ annually. Real numbers on compliance, time savings, and ROI.',
    slug: '/blog/payroll/professional-services/law-firm-payroll-outsourcing',
  },
  {
    title: 'Payroll Outsourcing for Medical Practices: Cost vs. Hiring HR Coordinator',
    description: 'Medical practice payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Real numbers on compliance, time savings, and ROI.',
    slug: '/blog/payroll/healthcare/medical-practices',
  },
  {
    title: 'Restaurant Payroll Outsourcing: Cost vs. Hiring In-House Manager',
    description: 'Restaurant payroll outsourcing vs. hiring payroll manager. Save $60K-$90K annually. Handle tipped employees, tax compliance, scheduling integration.',
    slug: '/blog/payroll/hospitality/restaurant',
  },
  {
    title: 'Accounting Firm Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Accounting firm payroll outsourcing vs. hiring in-house. Save $65K-$100K+ annually. Streamline compliance, reduce errors, focus on client work.',
    slug: '/blog/payroll/professional-services/accounting',
  },
  {
    title: 'Dental Office Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Dental office payroll outsourcing vs. hiring in-house. Save $65K+ annually. Manage hygienist tips, compliance, scheduling easily.',
    slug: '/blog/payroll/healthcare/dental',
  },
  {
    title: 'SaaS Payroll Outsourcing: Cost vs. Hiring Payroll Ops Manager',
    description: 'SaaS company payroll outsourcing vs. hiring in-house. Save $70K-$110K annually. Scale payroll without growing headcount.',
    slug: '/blog/payroll/technology/saas-payroll-outsourcing',
  },
  {
    title: 'Manufacturing Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Manufacturing payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Handle shift work, overtime, and compliance easily.',
    slug: '/blog/payroll/manufacturing/outsourcing-payroll',
  },
  {
    title: 'Retail Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Retail payroll outsourcing vs. hiring in-house. Save $60K-$90K annually. Handle seasonal staffing and compliance easily.',
    slug: '/blog/payroll/retail/staffing-payroll',
  },
  {
    title: 'Nonprofit Payroll Outsourcing: Cost vs. Hiring HR Staff',
    description: 'Nonprofit payroll outsourcing vs. hiring in-house. Save $55K-$85K annually. Simplify tax-exempt compliance.',
    slug: '/blog/payroll/nonprofits/charity-payroll',
  },
  {
    title: 'Construction Payroll Outsourcing: Cost vs. Hiring Payroll Manager',
    description: 'Construction payroll outsourcing vs. hiring in-house. Save $70K-$105K annually. Handle 1099 contractors, prevailing wage, and multi-project tracking.',
    slug: '/blog/payroll/construction/contractors-payroll',
  },
  {
    title: 'Real Estate Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Real estate company payroll outsourcing vs. hiring in-house. Save $62K-$95K annually. Simplify multi-property, multi-state payroll.',
    slug: '/blog/payroll/real-estate/property-management',
  },
  {
    title: 'Healthcare Clinic Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Healthcare clinic payroll outsourcing vs. hiring in-house. Save $68K-$102K annually. Handle HIPAA compliance and multi-location payroll.',
    slug: '/blog/payroll/healthcare-general/clinics-payroll',
  },
  {
    title: 'Financial Services Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Financial services payroll outsourcing vs. hiring in-house. Save $72K-$108K annually. Handle compliance, commissions, and regulatory requirements.',
    slug: '/blog/payroll/financial-services/wealth-firms',
  },
  {
    title: 'E-Commerce Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'E-commerce and DTC payroll outsourcing vs. hiring in-house. Save $60K-$90K annually. Handle seasonal staffing, remote teams, and growth.',
    slug: '/blog/payroll/ecommerce/online-stores',
  },
  {
    title: 'Hotel & Hospitality Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Hotel and hospitality payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Handle tipped employees, scheduling, and high turnover.',
    slug: '/blog/payroll/hospitality-general/hotels-resorts',
  },
  {
    title: 'Staffing Agency Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Staffing and recruitment payroll outsourcing vs. hiring in-house. Save $68K-$102K annually. Handle 1099 contractors, W-2 temps, and compliance.',
    slug: '/blog/payroll/professional-services-staffing/recruiting',
  },
];

export default function BlogPayrollPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll &amp; HR Compliance</p>
              <h1>Payroll &amp; HR Compliance</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Tax law changes, payroll regulations, compliance tips, and best practices for businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Industry Cost Comparisons</h2>
            <p>Managed payroll vs. hiring in-house, by industry. Real numbers for your specific business type.</p>
          </div>
          <div className="cards">
            {industryPosts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Industry Compliance Guides</h2>
            <p>Overtime rules, tax obligations, and compliance how-tos for specific industries.</p>
          </div>
          <div className="cards">
            {informationalPosts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Minimum Wage and Payroll Calendars</h2>
            <p>State-by-state 2026 minimum wage rates and full pay-date calendars for 2026 and 2027.</p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>
                <Link href="/blog/payroll/minimum-wage">State Minimum Wage 2026: Rates by State</Link>
              </h3>
              <p>Current 2026 minimum wage, scheduled increases, and overtime rules for all 50 states.</p>
              <Link href="/blog/payroll/minimum-wage" className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                Browse States
              </Link>
            </article>
            <article className="card reveal">
              <h3>
                <Link href="/blog/payroll/calendars">Payroll Calendars: 2026, 2027, and Schedules</Link>
              </h3>
              <p>Biweekly and semimonthly pay dates, weekly schedules, and 2026 payroll tax deadlines.</p>
              <Link href="/blog/payroll/calendars" className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                View Calendars
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>More Payroll Resources</h2>
          </div>
          <div className="cards">
            {posts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Browse Payroll Guides by Topic</h2>
            <p>Every payroll topic and industry collection in one place.</p>
          </div>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: '900px', margin: '1.5rem auto 0' }}>
            {[
              ['Minimum Wage 2026', '/blog/payroll/minimum-wage'],
              ['Payroll Calendars', '/blog/payroll/calendars'],
              ['Cost and Pricing', '/blog/payroll/cost'],
              ['Compliance', '/blog/payroll/compliance'],
              ['How-To Guides', '/blog/payroll/how-to'],
              ['Guides', '/blog/payroll/guides'],
              ['By Company Size', '/blog/payroll/company-size'],
              ['Compare Providers', '/blog/payroll/compare'],
              ['Common Problems', '/blog/payroll/problems'],
              ['Manufacturing', '/blog/payroll/manufacturing'],
              ['Security', '/blog/payroll/security'],
              ['Salon and Spa', '/blog/payroll/salon-spa'],
              ['Churches', '/blog/payroll/church'],
              ['Healthcare', '/blog/payroll/healthcare-general'],
              ['Hospitality', '/blog/payroll/hospitality-general'],
              ['Professional Services', '/blog/payroll/professional-services-staffing'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.45rem 1rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="head center reveal" style={{ marginTop: '2.5rem' }}>
            <h2>More Industry Payroll Guides</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: '900px', margin: '1.5rem auto 0' }}>
            {[
              ['Taproom and Brewery Tip Credit', '/blog/payroll/brewery/taproom-tip-credit-payroll'],
              ['Teacher and School Payroll', '/blog/payroll/education/teacher-payroll-compliance'],
              ['Law Firm Payroll Outsourcing', '/blog/payroll/law-firms/payroll-outsourcing-for-law-firms'],
              ['Resident Manager Housing Allowance', '/blog/payroll/property-management/resident-manager-housing-allowance-payroll'],
              ['Spa Payroll Compliance', '/blog/payroll/salon-spa/spa-payroll-compliance'],
              ['Security Guard SCA Payroll', '/blog/payroll/security/service-contract-act-security-payroll'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'inline-block', background: '#fff', border: '1px solid #e5e5e5', color: '#000', padding: '0.45rem 1rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
            ],
          }),
        }}
      />
    </>
  );
}
