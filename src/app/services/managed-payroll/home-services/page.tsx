import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home Services Payroll | Instant Quote | BEG',
  description: 'Home services payroll fully managed at $25-$45 PEPM. Field tech pay, tool reimbursements, overtime, and multi-state compliance included. Scope review free.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/home-services' },
  openGraph: {
    title: 'Home Services Payroll | Instant Quote | BEG',
    description: 'Home services payroll fully managed at $25-$45 PEPM. Field tech pay, tool reimbursements, overtime, and multi-state compliance included. Scope review free.',
    url: 'https://www.beghr.com/services/managed-payroll/home-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services Payroll | Instant Quote | BEG', description: 'Home services payroll fully managed at $25-$45 PEPM. Field tech pay, tool reimbursements, overtime, and multi-state compliance included. Scope review free.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('home-services-payroll');

export default function PayrollHomeServicesPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Home services company with fully managed payroll"
      eyebrow="Managed Payroll · Home Services"
      title="Field crew payroll for home services companies is harder than it looks. We make it simple."
      description="Flat-rate vs. hourly technician pay, tool reimbursements, mileage, overtime on large jobs, and multi-state licensing compliance create payroll complexity that generic software was not built to handle. BEG manages all of it for HVAC, plumbing, electrical, and landscaping companies at $25-$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: 'Field crew payroll', label: 'Flat-rate and hourly tech pay handled correctly' },
        { value: 'Job-cost tracking', label: 'Tool reimbursements and mileage included' },
        { value: 'All 50 states', label: 'Multi-state licensing compliance covered' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost a home services company?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Flat-rate risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Flat-rate technician pay that produces below-minimum hourly earnings creates immediate FLSA exposure</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Home services companies using flat-rate pay structures must ensure technician earnings meet minimum wage requirements for all hours worked. When a job takes longer than the flat rate accounts for, the employer owes the difference. Many run payroll without ever calculating this.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Reimbursement errors</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Tool and mileage reimbursements that are not tracked correctly create taxable income disputes and IRS issues</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Tool and mileage reimbursements paid under an accountable plan are not taxable income. Reimbursements not meeting the accountable plan rules must be included in wages. Many home services companies pay these incorrectly for years before a tax issue surfaces.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$70K+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one in-house payroll and HR ops hire for a 25-person field crew operation</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25-$45 PEPM replaces that headcount and removes the risk of a single person holding all institutional knowledge about your technician pay structures and reimbursement records.</div>
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
            <h2>Three steps to fully managed payroll for your field crew</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your technician pay structure (flat-rate, hourly, or blended), reimbursement types (tools, mileage, uniforms), overtime triggers, and state footprint. You get a fixed monthly cost with no surprises.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure flat-rate minimum wage true-up rules, accountable plan reimbursement tracking, multi-state registrations for technicians working across state lines, and overtime calculations for long-job weeks.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every reimbursement, every overtime calculation - fully managed by BEG. Your office manager approves; we handle the rest.' },
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
            <h2>Home services payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Flat-rate technician pay with FLSA minimum wage true-up when job hours exceed the flat rate',
              'Hourly field tech pay with overtime calculations for long-job weeks',
              'Tool reimbursements managed under IRS accountable plan rules to avoid taxable income issues',
              'Mileage reimbursement tracking at IRS standard rate or company rate with proper documentation',
              'Multi-state tax compliance for technicians working across state lines',
              'Service agreement commission or bonus payroll for HVAC maintenance plan sales',
              'Subcontractor 1099 preparation for any independent contractor relationships',
              'Seasonal staffing ramp-up and reduction processing for landscaping and HVAC peak seasons',
              'Garnishment administration for field technician wages',
              'Year-end W-2 preparation for all technicians including multiple pay type components',
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
                  ['Flat-rate minimum wage true-up', 'Automatic', 'Manual calculation', 'Not built in'],
                  ['Tool reimbursement tax treatment', 'Managed correctly', 'Varies by hire', 'You configure it'],
                  ['Multi-state tech compliance', 'Included', 'May need CPA', 'You manage it'],
                  ['Overtime on long-job weeks', 'Calculated correctly', 'Included', 'You verify it'],
                  ['Seasonal ramp-up handling', 'Included', 'Stressful for one person', 'You do it'],
                  ['Monthly cost (25 workers)', '$625-$1,125', '$5,800-$8,300', '$300-$700 + risk'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>While your dispatcher and office manager run payroll, they are not dispatching or managing.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Home services companies grow by dispatching more calls - not by running flat-rate true-up calculations. Fully managed payroll at $25-$45 PEPM frees your office staff to focus on the work that generates revenue, while BEG handles every pay cycle, reimbursement, and filing.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Start before your next busy season - not in the middle of it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. HVAC and plumbing companies that try to change payroll providers during summer peak or winter emergency season create risk. Start the process in the off-season and arrive at your busy season with a fully managed system in place.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your crew, give you a fixed monthly cost, and show you what transition looks like. Pricing starts at $25 PEPM.</p>
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
              { title: 'Agriculture Payroll', href: '/services/managed-payroll/agriculture', desc: 'H-2A workers, piece-rate pay, and seasonal crew compliance for farm operations.' },
              { title: 'Government Contractor Payroll', href: '/services/managed-payroll/government-contractor', desc: 'Certified payroll, Davis-Bacon, and prevailing wage for federal contractors.' },
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
            <h2>Common questions from home services companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle flat-rate technician pay?</h3>
              <p>BEG calculates the effective hourly rate for each flat-rate job by dividing the flat-rate pay by hours worked. When a job takes longer than the flat rate covers and produces an effective rate below minimum wage, BEG automatically calculates and adds the minimum wage make-up amount so you stay compliant with FLSA. This true-up is one of the most commonly missed payroll obligations for home services companies.</p>
            </div>
            <div className="faq-item">
              <h3>Are tool and mileage reimbursements taxable for our technicians?</h3>
              <p>Tool and mileage reimbursements paid under an IRS accountable plan - with a business purpose requirement, adequate accounting, and excess returned - are not included in taxable wages. Reimbursements that do not meet the accountable plan rules must be treated as taxable wages. BEG manages reimbursements under the correct framework to keep them non-taxable and avoids the common mistake of paying them informally without proper documentation.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle payroll for technicians working in multiple states?</h3>
              <p>Yes. BEG manages state tax registration, withholding, and filing for technicians working across state lines. We cover all 50 states. As your service territory grows, we handle new state registrations without you needing to track the requirements for each state separately.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include for a home services company?</h3>
              <p>Everything: payroll processing, flat-rate true-up calculations, reimbursement management, multi-state tax filing, overtime calculations, garnishment administration, year-end W-2 preparation, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30-60 days from scope review to first fully managed payroll run. We run your first cycles alongside your existing process for verification so there is no disruption to technician payments during transition.</p>
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
              { '@type': 'Question', name: 'How does BEG handle flat-rate technician pay?', acceptedAnswer: { '@type': 'Answer', text: 'BEG calculates the effective hourly rate for each flat-rate job and automatically adds the minimum wage make-up amount when the effective rate falls below minimum wage, keeping you compliant with FLSA.' } },
              { '@type': 'Question', name: 'Are tool and mileage reimbursements taxable for technicians?', acceptedAnswer: { '@type': 'Answer', text: 'Reimbursements paid under an IRS accountable plan are not taxable. BEG manages reimbursements under the correct framework to keep them non-taxable and properly documented.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a home services company?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, flat-rate true-up calculations, reimbursement management, multi-state tax filing, overtime, garnishment, year-end W-2s, and dedicated support.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first fully managed payroll run, with parallel processing for verification.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Home Services', item: 'https://www.beghr.com/services/managed-payroll/home-services' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Home Services Payroll Outsourcing: Field Tech Pay and Reimbursement Compliance (2026)',
            excerpt: 'How HVAC, plumbing, electrical, and landscaping companies manage flat-rate tech pay, tool reimbursements, and multi-state compliance without an in-house payroll specialist.',
            href: '/blog/payroll/home-services',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. Gusto: Which Is Right for Your Home Services Company?',
            excerpt: 'Gusto makes you run payroll yourself. BEG managed payroll removes it entirely. Here is the real comparison for field crew operations.',
            href: '/blog/compare/managed-payroll-vs-gusto',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
