import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Property Management Payroll | Resident Managers. Commission. | BEG',
  description: 'Property management payroll fully managed at $25–$45 PEPM. Housing allowances, leasing agent commission, maintenance overtime, and multi-property reporting included.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/property-management' },
  openGraph: {
    title: 'Property Management Payroll | Resident Managers. Commission. | BEG',
    description: 'Property management payroll fully managed at $25–$45 PEPM. Housing allowances, leasing agent commission, maintenance overtime, and multi-property reporting included.',
    url: 'https://beghr.com/services/managed-payroll/property-management',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Property Management Payroll | Resident Managers. Commission. | BEG', description: 'Property management payroll fully managed at $25–$45 PEPM. Housing allowances, leasing agent commission, maintenance overtime, and multi-property reporting included.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('property-management-payroll');

export default function PayrollPropertyManagementPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Property management company with fully managed payroll"
      eyebrow="Managed Payroll · Property Management"
      title="Property management payroll has layers most payroll vendors can not handle. We can."
      description="Resident manager housing allowances that affect taxable wage calculations, leasing agent commission structures, maintenance staff overtime, multi-property payroll consolidation, and 1099 vs. W-2 classification for contractor relationships create payroll complexity that generic platforms were not built for. BEG manages all of it at $25–$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Commission payroll', label: 'Leasing agent commission structures handled correctly' },
        { value: 'Housing allowances', label: 'Taxable and non-taxable treatment managed accurately' },
        { value: 'Multi-property ready', label: 'Consolidated reporting across all properties' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost a property management company?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Housing allowance risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Resident manager housing allowances that are not handled correctly create taxable income errors and IRS issues</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Resident manager housing provided as a condition of employment and for the employer's convenience may be excludable from taxable income under IRC Section 119. The conditions for exclusion are strict - when they are not met, the housing value must be included in the employee's W-2. Many property management companies get this wrong for years before a payroll audit surfaces the issue.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Commission complexity</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Leasing agent commission splits with charge-backs for early move-outs require payroll reconciliation every cycle</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Leasing agents earn commissions on signed leases, but commissions are often clawed back if a resident moves out before a minimum occupancy period. Managing commission accruals, earned dates, charge-back tracking, and net commission payroll requires a process most generic platforms do not support cleanly.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-property chaos</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Payroll that does not separate by property makes cost reporting and owner distributions nearly impossible to reconcile</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Property management companies operating multiple properties need labor costs tracked at the property level for owner reporting and NOI calculations. Consolidated payroll that does not separate by property creates reconciliation work every month that falls to the accounting team.</div>
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
            <h2>Three steps to fully managed property management payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your property portfolio, employee types (resident managers, leasing agents, maintenance), housing allowance arrangements, commission structures, and contractor vs. employee classification for maintenance relationships.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure housing allowance tax treatment under IRC 119, commission accrual and charge-back tracking, property-level cost center allocation, and maintenance overtime calculations. First cycles run alongside your existing process.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every commission reconciliation, every property-level payroll report - fully managed by BEG. Your accounting team gets clean cost data without running payroll themselves.' },
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
            <h2>Property management payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Resident manager housing allowances with correct IRC Section 119 taxable vs. non-taxable treatment',
              'Leasing agent commission payroll with accrual, earned-date tracking, and charge-back reconciliation',
              'Maintenance staff overtime calculations under FLSA including on-call and emergency response pay',
              'Multi-property cost center allocation so each property gets accurate labor expense reporting',
              '1099 vs. W-2 classification review for maintenance contractors and cleaning vendors',
              'On-site employee benefit deduction tracking including any employer-provided housing adjustments',
              'Seasonal leasing staff payroll during peak leasing months with correct ACA measurement tracking',
              'Property manager bonus structures and annual incentive payroll processing',
              'Year-end W-2 and 1099-NEC preparation for all employees and classified contractors',
              'Garnishment administration for leasing and maintenance staff wages',
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
                  ['Housing allowance IRC 119 treatment', 'Managed correctly', 'Varies by hire', 'You configure it'],
                  ['Commission with charge-back tracking', 'Included', 'Complex manual process', 'Not built in'],
                  ['Property-level cost center reporting', 'Included', 'Requires careful setup', 'You build it'],
                  ['Maintenance overtime calculations', 'Included', 'Included', 'You verify it'],
                  ['1099 classification review', 'Included', 'Varies by expertise', 'Not included'],
                  ['Year-end W-2 and 1099 volume', 'Included', 'Included', 'Extra fee'],
                  ['Monthly cost (35 employees)', '$875–$1,575', '$5,800–$8,300', '$400–$900 + risk'],
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
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Hidden Risk</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A housing allowance handled incorrectly for three years becomes three years of W-2 corrections and IRS letters.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Property management companies that get resident manager housing allowances wrong rarely discover the error until a payroll audit or an IRS notice arrives. By then, the back-tax liability and correction process is significantly more expensive than getting it right from the start. BEG manages housing allowance tax treatment correctly - from the first payroll cycle.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The right time to fix payroll is before leasing season peaks - not during your busiest month.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Property management companies that transition during slow leasing months arrive at peak season with a fully managed system handling commission payroll, maintenance overtime, and property-level reporting automatically.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your properties and workforce, give you a fixed monthly cost, and show you what clean payroll looks like. Pricing starts at $25 PEPM.</p>
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
              { title: 'Brewery Payroll', href: '/services/managed-payroll/brewery', desc: 'Taproom tip credit, production staff overtime, and sales rep commission payroll for craft producers.' },
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
            <h2>Common questions from property management companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle resident manager housing allowances?</h3>
              <p>BEG manages resident manager housing under IRC Section 119. Housing provided on the employer's premises, as a condition of employment, and for the employer's convenience qualifies for exclusion from the employee's taxable income. When these conditions are not fully met, the housing value must be included in wages. BEG evaluates the housing arrangement at setup and applies the correct treatment from the first payroll cycle - not after an IRS notice.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle leasing agent commission payroll with charge-backs?</h3>
              <p>Yes. BEG manages commission payroll with earned dates, minimum occupancy charge-back windows, and net commission calculations after adjustments. When a resident vacates before the minimum occupancy period ends, the charge-back is applied to the leasing agent's next commission payroll correctly - including recalculation of any overtime impacts from the original commission period.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG separate payroll by property for cost reporting?</h3>
              <p>Yes. BEG configures payroll with property-level cost centers so each property's labor expense is tracked and reportable separately. Multi-property management companies can reconcile labor costs at the property level for owner reporting and NOI calculations without needing to manually allocate payroll from a consolidated run after each cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for a property management company?</h3>
              <p>Everything: payroll processing, housing allowance tax treatment, commission payroll with charge-back tracking, maintenance overtime, property-level cost reporting, 1099 classification review, year-end W-2 and 1099-NEC preparation, and dedicated BEG support. No per-run fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How do we handle maintenance staff who are sometimes classified as contractors?</h3>
              <p>BEG reviews each maintenance relationship against IRS and DOL classification criteria to determine whether the arrangement should be W-2 or 1099. For staff who qualify as employees, BEG manages their payroll within the main employee payroll. For independent contractors who meet the classification standard, BEG tracks payments and prepares year-end 1099-NEC forms. We do not make the classification decision for you, but we ensure the correct payroll treatment is applied based on the arrangement as classified.</p>
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
              { '@type': 'Question', name: 'How does BEG handle resident manager housing allowances?', acceptedAnswer: { '@type': 'Answer', text: 'BEG manages housing allowances under IRC Section 119, applying the correct taxable or non-taxable treatment from the first payroll cycle based on whether the conditions for exclusion are met.' } },
              { '@type': 'Question', name: 'Can BEG handle leasing agent commission payroll with charge-backs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages commission payroll with earned dates, charge-back windows, and net commission calculations including overtime recalculation when adjustments occur.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a property management company?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, housing allowance treatment, commission tracking, maintenance overtime, property cost reporting, 1099 review, year-end W-2 and 1099-NEC prep, and dedicated support.' } },
              { '@type': 'Question', name: 'Can BEG separate payroll by property for cost reporting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG configures property-level cost centers so each property has accurate, separately reportable labor expense for owner reporting and NOI calculations.' } },
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
              { '@type': 'ListItem', position: 4, name: 'Property Management', item: 'https://beghr.com/services/managed-payroll/property-management' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Property Management Payroll Outsourcing: Housing Allowances, Commission, and Multi-Property Reporting (2026)',
            excerpt: 'How property management companies manage resident manager housing allowances, leasing agent commission payroll, and property-level cost reporting without a full-time payroll department.',
            href: '/blog/payroll/property-management',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. ADP for Property Management Companies',
            excerpt: 'ADP makes you run payroll yourself. BEG managed payroll removes it entirely. Here is the comparison for property management operations.',
            href: '/blog/compare/managed-payroll-vs-adp',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Property Management payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Property Management employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
