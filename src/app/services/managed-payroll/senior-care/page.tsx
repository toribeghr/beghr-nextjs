import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Senior Care Payroll | Instant Quote | BEG',
  description: 'Senior care payroll fully managed at $25-$45 PEPM. CNA overtime, shift differentials, CMS compliance, and high-turnover W-2s included. Scope review free.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/senior-care' },
  openGraph: {
    title: 'Senior Care Payroll | Instant Quote | BEG',
    description: 'Senior care payroll fully managed at $25-$45 PEPM. CNA overtime, shift differentials, CMS compliance, and high-turnover W-2s included. Scope review free.',
    url: 'https://www.beghr.com/services/managed-payroll/senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Senior Care Payroll | Instant Quote | BEG', description: 'Senior care payroll fully managed at $25-$45 PEPM. CNA overtime, shift differentials, CMS compliance, and high-turnover W-2s included. Scope review free.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('senior-care-payroll');

export default function PayrollSeniorCarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Senior care facility with fully managed payroll"
      eyebrow="Managed Payroll · Senior Care"
      title="Senior care facilities have the most regulated payroll environment in healthcare. We manage all of it."
      description="24/7 staffing, CNA and aide overtime, CMS compliance requirements, shift differentials for overnight and weekend staff, benefit tracking for high-turnover employees, and year-end W-2 volume make senior care payroll one of the most demanding in any industry. BEG manages all of it at $25-$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: 'CMS-aware', label: 'Payroll built around CMS staffing and compliance requirements' },
        { value: 'CNA compliance', label: 'Overtime, shift differentials, and aide pay handled' },
        { value: 'Shift differentials', label: 'Overnight, weekend, and holiday pay automated' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost a senior care facility?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>24/7 pressure</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Round-the-clock staffing means payroll never has a simple week</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Senior care operations run three shifts every day. Night differential, weekend premium, holiday pay, and on-call callback calculations must be right every cycle. One error triggers complaints from CNAs and aides whose income depends on precision.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>High turnover</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Senior care facilities average 50-100% annual CNA turnover - W-2 volume is enormous</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>High turnover means constant new hire setup, mid-year terminations, and year-end W-2 preparation for a large and changing population. An internal payroll processor spending time on W-2 volume is not available for anything else in Q4.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>CMS exposure</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>CMS staffing data is public - payroll records that do not reconcile with staffing ratios create survey risk</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>CMS publishes staffing data on Nursing Home Compare. Payroll records that show hours worked do not match staffing reports create deficiency findings during surveys. Accurate payroll is not just a financial obligation - it is a regulatory one.</div>
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
            <h2>Three steps to fully managed senior care payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your staffing classification structure (RN, LPN, CNA, aide, administrative), shift differential rates, benefit elections for high-turnover staff, and state minimum wage requirements for care workers. You get a fixed monthly cost.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure shift differential rules, CNA overtime calculations, benefit deduction tracking, and state-specific minimum wage compliance. Your first payroll cycles run alongside ours for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every shift differential calculation, every year-end W-2 for your full workforce - fully managed by BEG. Your administrator reviews and approves; we execute.' },
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
            <h2>Senior care payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Shift differential calculations for night, weekend, and holiday shifts for all care staff',
              'CNA and aide overtime under FLSA, including daily and weekly threshold calculations',
              'State-specific minimum wage compliance for care workers in states above federal floor',
              'Benefit deduction tracking for high-turnover staff: health, dental, and supplemental elections',
              'New hire payroll setup and termination processing for frequent staffing changes',
              'Year-end W-2 volume preparation for large and frequently changing care staff populations',
              'On-call and callback pay calculations for clinical staff required to remain reachable off-shift',
              'CMS-aware payroll records that support staffing ratio documentation for survey compliance',
              'Multi-location payroll for senior care groups operating multiple facilities',
              'Garnishment administration for care staff wages',
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
                  ['Shift differential automation', 'Fully managed', 'Manual configuration', 'You configure it'],
                  ['CNA overtime calculations', 'Included', 'Included', 'You verify it'],
                  ['High-turnover W-2 volume', 'Included', 'Time-consuming in Q4', 'Extra fee'],
                  ['CMS staffing record alignment', 'Managed', 'Varies by hire', 'Not built in'],
                  ['State-specific care worker minimums', 'Auto-updated', 'Must track manually', 'Manual update'],
                  ['Monthly cost (75 workers)', '$1,875-$3,375', '$5,800-$8,300', '$600-$1,400 + risk'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every shift differential error is an argument with a CNA who cannot afford to be underpaid.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Senior care staff have among the lowest margins for payroll error. When a night differential is missed or an overtime calculation is wrong, the employee notices immediately. BEG manages shift differentials, CNA overtime, and every weekly cycle with the precision care facilities need.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts - not in the middle of a survey cycle.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. Senior care facilities that start the process before Q4 arrive at year-end W-2 season with a fully managed system handling the volume. Facilities that wait do year-end manually and lose the window for another year.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your facility, give you a fixed monthly cost, and show you what transition looks like. Pricing starts at $25 PEPM.</p>
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
              { title: 'Education Payroll', href: '/services/managed-payroll/education', desc: '10-month pay spreads, sub tracking, and 403(b) administration for private schools.' },
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
            <h2>Common questions from senior care facilities</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle shift differentials for CNAs and aides?</h3>
              <p>BEG configures shift differential rates for each staff classification - night, weekend, and holiday premiums - and applies them automatically based on hours worked and shift schedule. Differential pay is included in the regular rate calculation for overtime purposes under FLSA, which is one of the most commonly mishandled aspects of care staff payroll.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle the high W-2 volume from CNA and aide turnover?</h3>
              <p>Yes. Year-end W-2 preparation for high-turnover care staff populations is fully included in BEG's managed payroll service. We track all employees who worked during the year, prepare accurate W-2s reflecting all compensation types (including shift differentials and overtime), and file on time. There are no additional W-2 fees.</p>
            </div>
            <div className="faq-item">
              <h3>What does CMS-aware payroll mean in practice?</h3>
              <p>CMS publishes staffing data from payroll records on Nursing Home Compare. Payroll hours-worked data that does not reconcile with staffing reports creates deficiency findings during CMS surveys. BEG maintains payroll records in a format that supports accurate staffing ratio documentation, so your hours-worked records align with what gets reported to CMS.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include for a senior care facility?</h3>
              <p>Everything: payroll processing, shift differential calculations, CNA overtime, state tax filing, garnishment administration, benefit deduction tracking, year-end W-2 volume, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>Do we need to switch payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is available if you want a better platform, but it is never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG manage payroll for a multi-facility senior care group?</h3>
              <p>Yes. BEG manages payroll across multiple facilities within the same organization, with separate facility-level cost reporting and consolidated billing. Multi-facility senior care groups can standardize payroll management across all locations through a single BEG engagement.</p>
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
              { '@type': 'Question', name: 'How does BEG handle shift differentials for CNAs and aides?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures shift differential rates for each staff classification and applies them automatically based on hours worked. Differential pay is included in the regular rate for overtime calculations under FLSA.' } },
              { '@type': 'Question', name: 'Can BEG handle high W-2 volume from CNA and aide turnover?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Year-end W-2 preparation for high-turnover care staff is fully included with no additional fees.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a senior care facility?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, shift differentials, CNA overtime, state tax filing, garnishment administration, benefit deduction tracking, year-end W-2 volume, and dedicated support.' } },
              { '@type': 'Question', name: 'Do we need to switch payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is available if you want a better platform but is never required.' } },
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
              { '@type': 'ListItem', position: 4, name: 'Senior Care', item: 'https://www.beghr.com/services/managed-payroll/senior-care' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Senior Care Payroll Outsourcing: CNA Overtime, Shift Differentials, and CMS Compliance (2026)',
            excerpt: 'How skilled nursing facilities and memory care communities manage CNA payroll, high-turnover W-2 volume, and CMS staffing documentation without a full-time payroll department.',
            href: '/blog/payroll/senior-care',
          },
          {
            category: 'Healthcare Payroll',
            title: 'Healthcare Payroll Outsourcing: Managing Clinical Staff Pay (2026)',
            excerpt: 'From shift differentials to per-diem compliance, how healthcare organizations are moving to fully managed payroll.',
            href: '/blog/payroll/healthcare-general/clinics-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
