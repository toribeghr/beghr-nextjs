import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Agriculture Payroll | Farm & H-2A Workers. Managed. | BEG',
  description: 'Agriculture payroll fully managed at $25–$45 PEPM. H-2A workers, piece-rate, seasonal crews, and DOL compliance included. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/agriculture' },
  openGraph: {
    title: 'Agriculture Payroll | Farm & H-2A Workers. Managed. | BEG',
    description: 'Agriculture payroll fully managed at $25–$45 PEPM. H-2A workers, piece-rate, seasonal crews, and DOL compliance included. Request a free scope review.',
    url: 'https://beghr.com/services/managed-payroll/agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Agriculture Payroll | Farm & H-2A Workers. Managed. | BEG', description: 'Agriculture payroll fully managed at $25–$45 PEPM. H-2A workers, piece-rate, seasonal crews, and DOL compliance included. Request a free scope review.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('agriculture-payroll');

export default function PayrollAgriculturePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Agricultural operation with fully managed payroll"
      eyebrow="Managed Payroll · Agriculture"
      title="Farm and agricultural payroll is the most complex in America. We handle it."
      description="H-2A visa workers, seasonal mass hire and termination events, piece-rate pay calculations, multi-state harvest crews, housing deductions, and MSPA compliance make agricultural payroll a category most payroll vendors cannot serve correctly. BEG manages all of it at $25–$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'H-2A compliant', label: 'Housing deductions, transport reimbursements, DOL filings' },
        { value: 'Seasonal spikes', label: 'Mass hire and termination events handled' },
        { value: 'All 50 states', label: 'Multi-state harvest crew compliance covered' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does agricultural payroll actually cost when it goes wrong?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>H-2A risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>H-2A program violations can result in debarment from the program for up to three years</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>H-2A payroll requires housing deductions calculated within DOL limits, transportation reimbursements, and adverse effect wage rates that change annually. One miscalculation puts your program eligibility at risk.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Piece-rate errors</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Piece-rate calculations that fall below minimum wage trigger immediate DOL exposure</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Under FLSA, piece-rate workers must earn at least the applicable minimum wage for all hours worked. When harvest slows and piece rates produce below-minimum earnings, the employer must make up the difference. Many operations miscalculate this.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Seasonal spikes</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Mass onboarding and termination events break payroll systems that are not built for agriculture</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Agricultural operations can go from 20 to 200 workers in two weeks during harvest and back to a skeleton crew in days. Generic payroll software is not built for this volume fluctuation. BEG is.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed agricultural payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your workforce structure: H-2A workers, domestic seasonal staff, year-round employees, pay method (hourly vs. piece-rate), housing and transport arrangements, and state footprint. You get a fixed monthly cost.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure H-2A housing deduction limits, adverse effect wage rates, piece-rate minimum wage true-up calculations, and multi-state registrations. Your first payroll cycle runs alongside ours for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every DOL filing, every seasonal mass hire or termination event - fully managed by BEG. When adverse effect wage rates change annually, we update automatically.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT BEG HANDLES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What BEG Handles</p>
            <h2>Agricultural payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'H-2A worker payroll including housing deductions within DOL limits',
              'Transportation reimbursement calculations for inbound and outbound H-2A travel',
              'Adverse effect wage rate (AEWR) tracking and annual updates by state',
              'Piece-rate pay calculations with FLSA minimum wage true-up when piece earnings fall short',
              'Seasonal mass hire payroll setup: rapid onboarding of large crews mid-season',
              'Multi-state harvest crew compliance: tax registration and withholding across state lines',
              'MSPA (Migrant and Seasonal Agricultural Worker Protection Act) record-keeping support',
              'Year-end W-2 preparation for large seasonal worker populations',
              'Housing deduction documentation to support DOL and IRS compliance',
              'Overtime calculations for domestic agricultural workers not exempt under FLSA',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1rem', background: '#f9f9f9', borderRadius: '6px' }}>
                <span style={{ color: '#ECAC60', fontWeight: '800', fontSize: '1.1rem', lineHeight: 1, marginTop: '1px', flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: '0.93rem', color: '#333333', lineHeight: '1.55' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Side by Side</p>
            <h2>BEG Managed Payroll vs. In-House vs. Generic Software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '700' }}>Factor</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700', color: '#ECAC60' }}>BEG Managed</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House Hire</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>Generic Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['H-2A compliance', 'Fully managed', 'Varies by hire', 'Not supported'],
                  ['Piece-rate minimum wage true-up', 'Automatic', 'Manual calculation', 'Not built in'],
                  ['Seasonal mass hire handling', 'Included', 'Stressful for one person', 'You configure it'],
                  ['AEWR annual updates', 'Automatic', 'Must track manually', 'You update it'],
                  ['Multi-state harvest crew filing', 'Included', 'May need CPA', 'You manage it'],
                  ['Year-end W-2 for seasonal workers', 'Included', 'Included', 'Extra fee'],
                  ['Monthly cost (50 workers)', '$1,250–$2,250', '$5,800–$8,300', '$400–$900 + risk'],
                ].map(([factor, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: '#222222' }}>{factor}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#000000', fontWeight: '600' }}>{beg}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Cost of H-2A Errors</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>One H-2A violation can cost you the program. Managed payroll eliminates that risk.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>H-2A debarment means losing access to the visa program for up to three years. For operations that depend on guest workers during harvest, that is not a recoverable event. BEG manages H-2A payroll compliance - housing deductions, AEWR rates, transportation reimbursements - so your program stays clean.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Seasonal Timing Matters</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The time to set up managed payroll is before your next harvest ramp - not during it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Agricultural operations that try to change payroll providers mid-season cause payment delays for workers and compliance gaps. Start the process in the off-season and arrive at harvest with a fully managed system in place.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your operation, give you a fixed monthly cost, and show you what transition looks like. Pricing starts at $25 PEPM.</p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Explore More</p>
            <h2>More managed payroll resources</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { title: 'Managed Payroll Overview', href: '/services/managed-payroll', desc: 'How BEG fully managed payroll works for any industry.' },
              { title: 'Home Services Payroll', href: '/services/managed-payroll/home-services', desc: 'Field crew payroll for HVAC, plumbing, electrical, and landscaping companies.' },
              { title: 'Healthcare Payroll', href: '/services/managed-payroll/healthcare', desc: 'Shift differentials, clinical overtime, and compliance for healthcare organizations.' },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: 'block', padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', textDecoration: 'none' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#000000', marginBottom: '0.3rem' }}>{link.title}</strong>
                <span style={{ fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from agricultural operations</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can BEG handle H-2A worker payroll?</h3>
              <p>Yes. BEG manages H-2A worker payroll including housing deductions within DOL limits, transportation reimbursements, adverse effect wage rate (AEWR) application, and year-end W-2 preparation for visa workers. We track AEWR updates annually by state so your rates stay current automatically.</p>
            </div>
            <div className="faq-item">
              <h3>How does piece-rate payroll work under FLSA?</h3>
              <p>Under FLSA, piece-rate workers must earn at least the applicable minimum wage for all hours worked in a workweek. When a worker's total piece-rate earnings divided by total hours worked falls below minimum wage, the employer must make up the difference. BEG calculates this true-up automatically every pay period so you never have a minimum wage shortfall.</p>
            </div>
            <div className="faq-item">
              <h3>Can you handle seasonal mass hire events?</h3>
              <p>Yes. BEG is built for agricultural operations that add large crews rapidly at harvest and reduce headcount just as quickly. We handle mass onboarding, multi-state registrations for harvest crew members, and mass termination processing without disrupting the operation.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for an agricultural operation?</h3>
              <p>Everything: payroll processing, H-2A compliance, piece-rate calculations, multi-state tax filing, year-end W-2 preparation for all workers, and dedicated BEG support. No per-run fees, no year-end surcharges, no add-on fees for seasonal headcount spikes.</p>
            </div>
            <div className="faq-item">
              <h3>What is the MSPA and does BEG handle it?</h3>
              <p>MSPA is the Migrant and Seasonal Agricultural Worker Protection Act. It establishes disclosure, record-keeping, and wage payment requirements for agricultural employers. BEG manages payroll records and documentation consistent with MSPA obligations for covered agricultural operations.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Can BEG handle H-2A worker payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages H-2A worker payroll including housing deductions within DOL limits, transportation reimbursements, adverse effect wage rate application, and year-end W-2 preparation for visa workers.' } },
              { '@type': 'Question', name: 'How does piece-rate payroll work under FLSA?', acceptedAnswer: { '@type': 'Answer', text: 'Piece-rate workers must earn at least minimum wage for all hours worked. BEG calculates the minimum wage true-up automatically every pay period.' } },
              { '@type': 'Question', name: 'Can you handle seasonal mass hire events?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG handles mass onboarding, multi-state registrations for harvest crew members, and mass termination processing without disrupting the operation.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for an agricultural operation?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, H-2A compliance, piece-rate calculations, multi-state tax filing, year-end W-2 preparation, and dedicated BEG support. No per-run fees or surcharges.' } },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Agriculture', item: 'https://beghr.com/services/managed-payroll/agriculture' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Agricultural Payroll Outsourcing: H-2A Workers and Piece-Rate Compliance (2026)',
            excerpt: 'How farm operations manage H-2A payroll, piece-rate minimum wage requirements, and multi-state harvest crew compliance without a dedicated in-house specialist.',
            href: '/blog/payroll/agriculture',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House Hire: The Real Cost for Agricultural Operations',
            excerpt: 'The fully loaded cost of an in-house agricultural payroll specialist vs. fully managed payroll at $25–$45 PEPM.',
            href: '/blog/compare/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Agriculture payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Agriculture employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
