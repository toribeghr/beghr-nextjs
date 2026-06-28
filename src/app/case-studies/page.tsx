import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Payroll Case Studies | BEG',
  description: 'Real results from companies that handed payroll to BEG. See how restaurants, contractors, healthcare practices, nonprofits, and franchises eliminated payroll overhead.',
  alternates: { canonical: 'https://beghr.com/case-studies' },
  openGraph: {
    title: 'Managed Payroll Case Studies | BEG',
    description: 'Real results from companies that handed payroll to BEG. See how restaurants, contractors, healthcare practices, nonprofits, and franchises eliminated payroll overhead.',
    url: 'https://beghr.com/case-studies',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll Case Studies | BEG', description: 'Real results from companies that handed payroll to BEG. See how restaurants, contractors, healthcare practices, nonprofits, and franchises eliminated payroll overhead.', images: ['https://beghr.com/assets/og-image.png'] },
};

const placementCaseStudies = [
  {
    slug: 'placement-legal',
    industry: 'Legal Placement',
    title: 'How a Law Firm Filled an Open Associate Role in 26 Days',
    result: 'BEG filled an open associate attorney seat in 26 days at roughly 50% less than contingency, backed by a 45-day replacement guarantee.',
    role: 'Associate Attorney',
    days: 26,
  },
  {
    slug: 'placement-accounting',
    industry: 'Accounting / CPA Placement',
    title: 'How a CPA Firm Filled a Senior Accountant Role Before Busy Season',
    result: 'BEG filled a senior accountant seat in 24 days at roughly 50% less than contingency, in place before tax season.',
    role: 'Senior Accountant',
    days: 24,
  },
  {
    slug: 'placement-healthcare',
    industry: 'Healthcare Placement',
    title: 'How a Clinic Filled a Hard-to-Fill Nurse Practitioner Role in 29 Days',
    result: 'BEG filled a nurse practitioner seat in 29 days at roughly 50% less than contingency, relieving a patient scheduling backlog.',
    role: 'Nurse Practitioner',
    days: 29,
  },
  {
    slug: 'placement-technology',
    industry: 'Technology Placement',
    title: 'How a SaaS Company Filled a Senior Engineer Role in 31 Days',
    result: 'BEG filled a senior software engineer seat in 31 days at roughly 50% less than contingency, getting the roadmap moving again.',
    role: 'Senior Software Engineer',
    days: 31,
  },
  {
    slug: 'placement-sales',
    industry: 'Sales Placement',
    title: 'How a B2B Company Filled an Account Executive Role in 23 Days',
    result: 'BEG filled a quota-carrying account executive seat in 23 days at roughly 50% less than contingency, covering the open territory.',
    role: 'Account Executive',
    days: 23,
  },
];

const caseStudies = [
  {
    slug: 'restaurant',
    industry: 'Restaurant / Food Service',
    title: 'How a Multi-Location Restaurant Group Eliminated Payroll Admin',
    result: 'Payroll admin dropped from 12 hours/week to zero. Tip compliance cleaned up. Zero payroll errors in 18 months.',
    employees: 85,
    locations: 4,
  },
  {
    slug: 'construction',
    industry: 'Construction / Federal Contracting',
    title: 'How a Regional Contractor Passed a DOL Audit After Switching to BEG',
    result: 'Passed DOL compliance review with no violations. Certified payroll submitted on schedule for 3 concurrent federal projects.',
    employees: 60,
    locations: 4,
  },
  {
    slug: 'healthcare',
    industry: 'Healthcare / Medical Practice',
    title: 'How a Healthcare Practice Cut Payroll Processing Time to Zero',
    result: 'Zero payroll errors in 24 months. Practice manager reclaimed 8 hours/week. Shift differential errors eliminated.',
    employees: 45,
    locations: 1,
  },
  {
    slug: 'nonprofit',
    industry: 'Nonprofit / 501(c)(3)',
    title: 'How a 501(c)(3) Eliminated Payroll Risk on Grant-Funded Programs',
    result: 'Single audit passed without payroll findings for the first time in 3 years. Finance director reclaimed 15 hours/month.',
    employees: 38,
    locations: 1,
  },
  {
    slug: 'franchise',
    industry: 'Franchise / Multi-Unit Operations',
    title: 'How a Multi-Location Franchise Owner Scaled Payroll Across 6 Units',
    result: 'Payroll time dropped from 20+ hours/month to zero. Scalable to 15+ units with no additional payroll burden.',
    employees: 110,
    locations: 6,
  },
];

export default function CaseStudiesPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Studies</p>
              <h1>What happens when companies stop running payroll themselves</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Five industries. One outcome: payroll off the team's plate, compliance handled, and zero hours spent each pay cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderLeft: '4px solid #ECAC60',
                borderRadius: '8px',
                padding: '2rem',
              }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ECAC60', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.5rem' }}>
                  {cs.industry}
                </p>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: '1.3' }}>
                  {cs.title}
                </h2>
                <p style={{ color: '#444', lineHeight: '1.65', margin: '0 0 1.25rem', fontSize: '0.97rem' }}>
                  {cs.result}
                </p>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.88rem', color: '#666', marginBottom: '1.5rem' }}>
                  <span><strong>{cs.employees}</strong> employees</span>
                  <span><strong>{cs.locations}</strong> {cs.locations === 1 ? 'location' : 'locations'}</span>
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  style={{
                    display: 'inline-block',
                    background: '#000',
                    color: '#ECAC60',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  Read the full story
                </Link>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '3.5rem 0 0.5rem' }}>
            Permanent placement case studies
          </h2>
          <p style={{ color: '#444', lineHeight: '1.65', margin: '0 0 2rem', fontSize: '0.97rem' }}>
            How BEG fills open roles in 23 to 35 days at roughly 50% less than contingency. Representative outcomes from BEG&apos;s milestone-based placement model, delivered through its isolved Job Placement Services partnership.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {placementCaseStudies.map((cs, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderLeft: '4px solid #ECAC60',
                borderRadius: '8px',
                padding: '2rem',
              }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ECAC60', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.5rem' }}>
                  {cs.industry}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: '1.3' }}>
                  {cs.title}
                </h3>
                <p style={{ color: '#444', lineHeight: '1.65', margin: '0 0 1.25rem', fontSize: '0.97rem' }}>
                  {cs.result}
                </p>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.88rem', color: '#666', marginBottom: '1.5rem' }}>
                  <span><strong>{cs.role}</strong></span>
                  <span><strong>{cs.days}</strong> days to fill</span>
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  style={{
                    display: 'inline-block',
                    background: '#000',
                    color: '#ECAC60',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  Read the full story
                </Link>
              </div>
            ))}
          </div>

          <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
            <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Ready to hand payroll off?</h2>
            <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>
              15-minute call. We scope your payroll, give you a fixed monthly rate at $25 to $45 per employee, and tell you what transition looks like.
            </p>
            <a
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free 15-Minute Call
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://beghr.com/case-studies' },
        ],
      }) }} />
    </article>
  );
}
