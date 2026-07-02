import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Guides & Downloads | Free Resources | BEG',
  description: 'Free managed payroll guides including the year-end payroll checklist, buyer\'s guide, compliance checklist, and new hire checklist.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides',
  },
  openGraph: {
    title: 'Payroll Guides & Downloads | Free Resources | BEG',
    description: 'Free managed payroll guides including the year-end payroll checklist, buyer\'s guide, compliance checklist, and new hire checklist.',
    url: 'https://www.beghr.com/resources/guides',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Guides & Downloads | Free Resources | BEG',
    description: 'Free managed payroll guides including the year-end payroll checklist, buyer\'s guide, compliance checklist, and new hire checklist.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};


const guides = [
  {
    tag: 'Year-End',
    title: 'Year-End Payroll Checklist 2026',
    desc: 'A complete year-end payroll checklist for employers: W-2 production deadlines, 941 annual reconciliation, FUTA tax check, ACA 1094/1095 reporting, state W-2 and 1099 filing deadlines, benefit election changes, and new year rate updates. Available as a downloadable PDF.',
    what: ['W-2 production and IRS electronic filing', '941 annual reconciliation vs. W-3 totals', 'FUTA tax liability check and Form 940', 'ACA 1094/1095-C reporting deadlines', 'State W-2 and 1099 filing by state', 'Benefit election changes and rate updates for the new year'],
    href: '/resources/guides/year-end-payroll-checklist',
  },
  {
    tag: 'Buyer\'s Guide',
    title: `Managed Payroll Buyer\'s Guide 2026`,
    desc: 'Before you hire a managed payroll provider, know what to ask. This guide covers what managed payroll actually is, how pricing models work, what questions to ask providers, red flags to avoid, and a vendor comparison scorecard you can use in your evaluation.',
    what: ['What managed payroll is and what it covers', 'PEPM vs. flat fee vs. per-run pricing models', 'Questions to ask every provider before signing', 'Red flags: hidden fees, support quality, compliance coverage', 'Vendor comparison scorecard with weighted criteria', 'Implementation timeline expectations by provider type'],
    href: '/resources/guides/managed-payroll-buyers-guide',
  },
  {
    tag: 'Compliance',
    title: 'Payroll Compliance Checklist',
    desc: 'A quarterly and annual payroll compliance checklist for HR and finance teams. Covers 941 deposit deadlines, SUTA rate updates, new hire reporting, W-2 and 1099 production, and state-specific filing requirements that commonly get missed.',
    what: ['Federal 941 monthly and semiweekly deposit schedule', 'SUTA rate notice updates (states notify annually)', 'New hire reporting within 20 days of start', 'Quarterly 941 filing deadlines', 'Annual W-2, 1099-NEC, and 940 deadlines', 'ACA reporting thresholds and deadlines'],
    href: '/resources/guides/year-end-payroll-checklist',
  },
  {
    tag: 'New Hire',
    title: 'New Hire Payroll Checklist',
    desc: 'Everything payroll and HR need to do when a new employee starts: federal and state tax forms, direct deposit setup, garnishment intake, benefit deductions, and new hire reporting. A step-by-step list for every new hire, every time.',
    what: ['W-4 and state withholding form completion', 'I-9 employment eligibility verification', 'Direct deposit authorization and prenote', 'State new hire report within 20 days', 'Benefit enrollment and deduction setup', 'Garnishment order intake and calculation setup'],
    href: '/resources/guides/managed-payroll-buyers-guide',
  },
  {
    tag: 'Industry',
    title: 'Restaurant Payroll Guide',
    desc: 'How restaurant payroll really works: tipped minimum wage, the FICA tip credit, tip pooling rules, and multi-location runs handled without the weekly scramble.',
    what: ['Tip credit and tipped minimum wage', 'FICA tip credit on employer taxes', 'Tip pooling and reporting rules', 'Multi-location consolidated payroll'],
    href: '/resources/guides/restaurant-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Construction Payroll Guide',
    desc: 'Certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe tracking, and job costing, all handled as part of fully managed payroll.',
    what: ['Certified payroll and WH-347 filing', 'Davis-Bacon prevailing wage rates', 'Multi-state crew compliance', 'Union fringe and job-cost allocation'],
    href: '/resources/guides/construction-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Healthcare Payroll Guide',
    desc: 'Shift differentials, 24/7 coverage, on-call pay, and high turnover make healthcare payroll complex. Here is how managed payroll keeps it accurate.',
    what: ['Shift differential calculations', 'On-call and 24/7 coverage pay', 'High-turnover onboarding at scale', 'Clinical role classifications'],
    href: '/resources/guides/healthcare-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Nonprofit Payroll Guide',
    desc: 'Grant-funded payroll allocation, 403(b) administration, and worker classification for nonprofits, managed so your team can focus on the mission.',
    what: ['Grant-funded payroll allocation', '403(b) plan administration', 'Clergy and housing allowance handling', 'Volunteer vs. employee classification'],
    href: '/resources/guides/nonprofit-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Staffing Agency Payroll Guide',
    desc: 'Weekly payroll, W-2 and 1099 splits, client-billable reporting, and high-volume onboarding across states, run for you at $25-$45 PEPM.',
    what: ['Weekly payroll at volume', 'W-2 and 1099 worker splits', 'Client-billable reporting', 'Multi-state temp compliance'],
    href: '/resources/guides/staffing-agency-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Manufacturing Payroll Guide',
    desc: 'Shift work, the overtime regular-rate calculation, union contracts, piece-rate pay, and multi-plant payroll handled accurately and on time.',
    what: ['Shift-work and differential pay', 'Overtime regular-rate calculation', 'Union contract compliance', 'Piece-rate and multi-plant payroll'],
    href: '/resources/guides/manufacturing-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Cannabis Payroll Guide',
    desc: 'Cannabis payroll under 280E constraints, cash-heavy operations, and heavy compliance scrutiny, run fully managed so nothing gets missed.',
    what: ['280E tax constraints', 'Cash-operation payroll handling', 'High compliance scrutiny', 'Seed-to-sale staff classifications'],
    href: '/resources/guides/cannabis-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Home Services Payroll Guide',
    desc: 'Field crews for HVAC, plumbing, and electrical: tool reimbursements, multi-state licensing, prevailing wage on some jobs, and dispatch overtime.',
    what: ['Field crew payroll and job costing', 'Tool and expense reimbursements', 'Multi-state license tracking', 'Dispatch and overtime rules'],
    href: '/resources/guides/home-services-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Senior Care Payroll Guide',
    desc: 'Around-the-clock shifts, shift differentials, high turnover, and CNA compliance across memory care and skilled nursing, handled for you.',
    what: ['24/7 shift scheduling pay', 'Shift differential calculations', 'High-turnover onboarding', 'CNA and clinical compliance'],
    href: '/resources/guides/senior-care-payroll-guide',
  },
  {
    tag: 'Industry',
    title: 'Trucking Payroll Guide',
    desc: 'Per-mile vs. hourly pay, multi-state apportionment, per diem, and owner-operator classification, managed so payroll keeps the fleet moving.',
    what: ['Per-mile and hourly pay models', 'Multi-state apportionment', 'Per diem handling', 'Owner-operator vs. employee'],
    href: '/resources/guides/trucking-payroll-guide',
  },
];

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Guides</p>
            <h1>Payroll guides and downloads, free from BEG</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              Practical guides for HR and finance teams running payroll. Every guide below is free. Download the checklist, use the scorecard, or book a call if you want BEG to run payroll for you.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {guides.map(({ tag, title, desc, what, href }) => (
              <div key={href + title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }} className="reveal">
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>{tag}</span>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>{title}</h2>
                  <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>{desc}</p>
                  <strong style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>What&apos;s inside:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 1rem' }}>
                    {what.map((item) => (
                      <li key={item} style={{ fontSize: '0.85rem', color: '#444444', display: 'flex', gap: '0.4rem', alignItems: 'flex-start', lineHeight: '1.45' }}>
                        <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flexShrink: 0, paddingTop: '0.25rem' }}>
                  <Link href={href} className="btn btn--gold" style={{ whiteSpace: 'nowrap', fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}>
                    Download Free Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow">Skip the Guides</p>
          <h2>Rather talk to a payroll specialist? Book a free 15-minute call.</h2>
          <p style={{ color: '#555555', lineHeight: '1.7', margin: '1rem 0 2rem' }}>
            BEG runs <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll</Link> for employers at $25-$45 PEPM, all-inclusive. Discovery call is free and no commitment is required.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
      </section>
    </>
  );
}
