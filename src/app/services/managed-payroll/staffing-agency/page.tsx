import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Staffing Agency Payroll | Weekly Runs. Zero Burden. | BEG',
  description: 'Staffing agency payroll fully managed at $25–$45 PEPM. Weekly cycles, W-2 compliance, multi-state temp worker filings included. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/staffing-agency' },
  openGraph: {
    title: 'Staffing Agency Payroll | Weekly Runs. Zero Burden. | BEG',
    description: 'Staffing agency payroll fully managed at $25–$45 PEPM. Weekly cycles, W-2 compliance, multi-state temp worker filings included. Request a free scope review.',
    url: 'https://beghr.com/services/managed-payroll/staffing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Staffing Agency Payroll | Weekly Runs. Zero Burden. | BEG', description: 'Staffing agency payroll fully managed at $25–$45 PEPM. Weekly cycles, W-2 compliance, multi-state temp worker filings included. Request a free scope review.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('staffing-agency-payroll');

export default function PayrollStaffingAgencyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Staffing agency with fully managed payroll"
      eyebrow="Managed Payroll · Staffing Agencies"
      title="Staffing agency payroll never stops - and neither should you."
      description="Weekly payroll cycles, W-2 vs. 1099 classification risk, multi-state compliance for placed workers, and client billing reconciliation make staffing agency payroll one of the most demanding in any sector. BEG manages all of it at $25–$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Weekly cycles', label: 'Managed on time, every time' },
        { value: 'All 50 states', label: 'Multi-state compliance for placed workers' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost your staffing agency?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Weekly pressure</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Temp workers expect to be paid every week - missing a cycle destroys placements</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Staffing agencies running payroll weekly face constant pressure. One missed cycle and a placed worker walks. BEG handles every weekly run so your ops team stays focused on placements, not payroll fire drills.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>W-2 vs. 1099</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Worker misclassification is the IRS audit trigger staffing agencies fear most</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Misclassifying a placed worker as a 1099 contractor when they should be a W-2 employee exposes your agency to back taxes, penalties, and client liability. BEG manages classification correctly from day one.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$70K+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of a dedicated in-house payroll specialist who understands staffing agency complexity</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25–$45 PEPM replaces that headcount while removing the single-person-dependency risk that leaves you exposed when they leave or take a sick day.</div>
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
            <h2>Three steps to fully managed payroll for your agency</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your current payroll cadence, placed worker roster, pay structures (hourly, overtime, piece-rate), and multi-state footprint. You get a fixed monthly cost with no surprises.' },
              { num: '02', title: 'Setup and first run', body: 'We configure payroll for your weekly cycle, set up W-2 processing for placed workers, map client billing codes, and run your first cycles alongside your existing process for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every weekly run, garnishment, multi-state filing, and year-end W-2 - fully managed by BEG. Your team approves; we execute.' },
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
            <h2>Staffing agency payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Weekly W-2 payroll processing for all placed workers',
              'Worker classification review - W-2 vs. 1099 for each engagement type',
              'Multi-state tax registration and filing for workers placed across state lines',
              'Garnishment administration for placed worker wages',
              'Client billing code mapping so payroll and invoicing reconcile without manual work',
              'Overtime calculations under FLSA for weekly-paid temp workers',
              'Year-end W-2 volume filing for high-turnover placed worker populations',
              'Year-end 1099-NEC preparation for any properly classified independent contractor relationships',
              'New hire reporting for placed workers in all states where required',
              'ACA tracking for temp workers approaching full-time measurement thresholds',
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
            <h2>BEG Managed Payroll vs. In-House vs. Software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '700' }}>Factor</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700', color: '#ECAC60' }}>BEG Managed</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House Hire</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>Payroll Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly cost (50 workers)', '$1,250–$2,250', '$5,800–$8,300', '$500–$1,200 + errors'],
                  ['Weekly cycle management', 'Fully managed', 'Depends on one person', 'You run it'],
                  ['Multi-state temp worker filing', 'Included', 'May need outside help', 'You configure it'],
                  ['W-2 vs. 1099 classification guidance', 'Included', 'Varies by hire', 'Not included'],
                  ['Year-end W-2 volume filing', 'Included', 'Included', 'Extra fee'],
                  ['Garnishment administration', 'Included', 'Included', 'You manage it'],
                  ['Single point of failure risk', 'None', 'High', 'None'],
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
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week your team runs payroll manually is a week they are not filling roles.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Staffing agencies grow by placing workers - not by managing weekly payroll runs, chasing multi-state registrations, and preparing year-end W-2 volumes. Fully managed payroll at $25–$45 PEPM frees your ops team to focus on what generates revenue.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Transitions take 30–60 days. The right time to start is before your next busy hiring season.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Staffing agencies that miss the transition window before a seasonal ramp typically delay another quarter. The cost savings you defer do not come back.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like. Pricing starts at $25 PEPM.</p>
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
              { title: 'Healthcare Payroll', href: '/services/managed-payroll/healthcare', desc: 'Shift differentials, clinical overtime, and compliance for healthcare organizations.' },
              { title: 'Technology & SaaS Payroll', href: '/services/managed-payroll/tech-saas', desc: 'Equity, remote-first compliance, and contractor payroll for tech companies.' },
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
            <h2>Common questions from staffing agencies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Do you handle weekly payroll cycles for temp workers?</h3>
              <p>Yes. Weekly payroll is BEG's standard for staffing agency clients. We process every weekly run, handle exceptions, and ensure placed workers are paid accurately and on time. Your ops team approves; we execute.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle W-2 vs. 1099 classification for placed workers?</h3>
              <p>BEG reviews each engagement type and ensures placed workers are classified correctly under IRS and FLSA standards. Misclassification is one of the most common staffing agency audit triggers - we manage classification from day one so you are not exposed.</p>
            </div>
            <div className="faq-item">
              <h3>Our placed workers are in multiple states. Can you handle that?</h3>
              <p>Yes. BEG manages state tax registration, withholding, and filing for workers placed across state lines. We cover all 50 states. You do not need to manage separate state registrations or tax accounts as your placement footprint grows.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for a staffing agency?</h3>
              <p>Everything: weekly payroll processing, multi-state tax filing, garnishment administration, new hire reporting, ACA tracking, year-end W-2 preparation, and dedicated BEG support. No per-run fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30–60 days from scope review to first fully managed weekly run. We shadow your existing process during setup, so there is no disruption to worker payments during transition.</p>
            </div>
            <div className="faq-item">
              <h3>Do we need to switch payroll platforms?</h3>
              <p>No. BEG operates inside your existing system. If you want to migrate to a better platform, we can manage that too - but it is never a requirement to get started with fully managed payroll.</p>
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
              { '@type': 'Question', name: 'Do you handle weekly payroll cycles for temp workers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Weekly payroll is BEG standard for staffing agency clients. We process every weekly run and ensure placed workers are paid accurately and on time.' } },
              { '@type': 'Question', name: 'How does BEG handle W-2 vs. 1099 classification for placed workers?', acceptedAnswer: { '@type': 'Answer', text: 'BEG reviews each engagement type and ensures placed workers are classified correctly under IRS and FLSA standards from day one.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: weekly payroll processing, multi-state tax filing, garnishment administration, new hire reporting, ACA tracking, year-end W-2 preparation, and dedicated BEG support. No per-run fees.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first fully managed weekly run. We shadow your existing process during setup.' } },
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
              { '@type': 'ListItem', position: 4, name: 'Staffing Agency', item: 'https://beghr.com/services/managed-payroll/staffing-agency' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Staffing Agency Payroll Outsourcing: Weekly Cycles and Multi-State Compliance (2026)',
            excerpt: 'How staffing agencies manage weekly temp worker payroll, W-2 classification risk, and multi-state compliance without a dedicated in-house payroll team.',
            href: '/blog/payroll/staffing-agency',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. Payroll Software: Which Is Right for Your Staffing Agency?',
            excerpt: 'Payroll software makes you do the work. Managed payroll removes it entirely. Here is the real cost and risk comparison for staffing agencies.',
            href: '/blog/compare/managed-payroll-vs-payroll-software',
          },
        ]}
      />
    </ServicePage>
  );
}
