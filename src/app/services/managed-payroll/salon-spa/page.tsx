import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Salon & Spa Payroll | Booth Rental. Commission. Tips. Managed. | BEG',
  description: 'Salon and spa payroll fully managed at $25–$45 PEPM. Booth rental classification, commission splits, tip reporting, and compliance included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/salon-spa' },
  openGraph: {
    title: 'Salon & Spa Payroll | Booth Rental. Commission. Tips. Managed. | BEG',
    description: 'Salon and spa payroll fully managed at $25–$45 PEPM. Booth rental classification, commission splits, tip reporting, and compliance included.',
    url: 'https://www.beghr.com/services/managed-payroll/salon-spa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon & Spa Payroll | Booth Rental. Commission. Tips. Managed. | BEG',
    description: 'Salon and spa payroll fully managed at $25–$45 PEPM. Booth rental classification, commission splits, tip reporting, and compliance included.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('salon-spa-payroll');

export default function PayrollSalonSpaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Salon and spa business with fully managed payroll"
      eyebrow="Managed Payroll · Salon & Spa"
      title="Salon and spa payroll is more complex than your booking software can handle."
      description="Booth renters, W-2 stylists, commission splits, tip reporting, and state cosmetology wage rules all live in the same building. BEG manages all of it at $25–$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Booth rental', label: 'W-2 vs. 1099 classification managed' },
        { value: 'Tip credit', label: 'Reporting and compliance handled' },
        { value: 'Commission', label: 'Split payroll processed correctly' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house salon and spa payroll actually cost your business?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>IRS risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Booth renter misclassification is one of the most audited issues in the beauty industry</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The IRS and state labor agencies actively audit salons for booth renter vs. employee misclassification. Getting it wrong means back taxes, penalties, and interest on every affected stylist.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Tip errors</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Tip underreporting and tip credit miscalculation are two separate compliance problems</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Tip credit rules require the employer to ensure tipped employees still reach minimum wage. Tip reporting errors generate IRS notices and potential back wages. Most booking software does not handle either correctly in payroll.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Fully-loaded annual cost of one in-house payroll administrator</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A fully managed BEG service at $25–$45 PEPM on a 20-person team costs $6,000–$10,800 per year. A payroll admin handling the same complexity costs four to six times more and still makes classification errors.</div>
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
            <h2>Three steps to fully managed salon and spa payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your current worker roster: booth renters, commissioned stylists, hourly employees, and tip earners. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Classification and setup', body: 'We configure your payroll to handle the correct worker type for each person, commission split structures, tip credit rules, and state cosmetology wage requirements. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every tip reconciliation, every quarterly filing, and every year-end W-2. Fully managed by BEG. Your front desk touches nothing.' },
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
            <h2>Everything salon and spa payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Booth renter vs. W-2 employee classification</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The IRS uses a multi-factor test to determine whether a salon or spa worker is an independent contractor (booth renter) or an employee. The test looks at behavioral control, financial control, and the type of relationship. A booth renter who is told which hours to work, required to attend staff meetings, or restricted from working at other salons is likely a misclassified employee. BEG reviews each worker arrangement and configures payroll to reflect the correct classification, reducing your exposure to worker reclassification assessments, back payroll taxes, and penalties from state labor agencies that frequently audit beauty industry employers.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission split payroll for stylists and estheticians</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Commission-based compensation for employed stylists and estheticians requires payroll to calculate the commission amount from service revenue, apply the correct split percentage, and reconcile the result against minimum wage for each pay period. If a commission employee earns less than minimum wage in any workweek based on commission alone, the employer must make up the difference as a draw or advance. BEG manages commission calculations, draw reconciliation, and the minimum wage floor check every pay cycle so you are never in violation at the end of a slow week.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tip reporting and tip credit compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tip credit rules allow employers in states that permit it to pay tipped employees a cash wage below the standard minimum wage, as long as tips bring total hourly compensation up to or above minimum wage. If tips are insufficient in any workweek, the employer must pay the difference. The IRS also requires employers to report employee tips as income and pay FICA taxes on the reported tip amount. BEG manages tip credit calculations, ensures the minimum wage floor is met each pay period, and handles tip reporting to keep your filings accurate and your FICA obligations met.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>State cosmetology minimum wage rules</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Several states have established minimum wage rates for cosmetology workers that differ from the general minimum wage, and tipped minimum wage floors vary significantly by state. Multi-location salon and spa businesses operating across state lines face a patchwork of wage rules that must be applied correctly at each location. BEG monitors state wage law changes and applies the correct minimum wage floor for each state where you have employed workers.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>High-turnover W-2 volume management</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The beauty industry has among the highest employee turnover rates of any sector. Managing a roster of W-2 stylists and estheticians who start and stop throughout the year means onboarding new hires into payroll quickly, processing terminations cleanly, and producing year-end W-2s for the full roster of current and former employees. BEG manages new hire setup, mid-year terminations, and W-2 production so your year-end process does not become a research project through old records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Comparison</p>
            <h2>BEG vs. in-house vs. software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontWeight: '700' }}>Capability</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>BEG Managed</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>Software Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Booth renter classification review', '✓', 'Depends on expertise', '✗'],
                  ['Commission split payroll', '✓', 'Manual calculation risk', 'Partial'],
                  ['Tip credit compliance', '✓', 'Compliance risk', 'Partial'],
                  ['State cosmetology wage rules', '✓', 'Requires research', '✗'],
                  ['High-turnover W-2 management', '✓', 'Staff-time heavy', 'Self-service'],
                  ['Year-end W-2 production', '✓', '✓', 'Self-service'],
                  ['No migration required', '✓', 'N/A', 'Migration often required'],
                  ['Fixed all-inclusive monthly cost', '✓', '✗', '✗'],
                ].map(([feature, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#2a7a2a', fontWeight: '700' }}>{beg}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every misclassified booth renter is a liability that compounds over time.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>IRS worker classification audits in the beauty industry look back multiple years. Back payroll taxes, interest, and penalties on a misclassified roster of booth renters can easily exceed what you would have paid for proper management from day one. The cost of getting it right is a fraction of the cost of getting it wrong.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to clean up your payroll structure is before an audit triggers it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions with BEG take 30–60 days. We scope your current setup, identify classification and compliance gaps, and move you to a clean, managed structure before the problem becomes a notice. Every cycle you wait is another cycle of exposure.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about salon and spa payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG determine whether a booth renter should be classified as an employee?</h3>
              <p>BEG reviews the actual working arrangement against the IRS common-law test and applicable state tests, which look at behavioral control, financial control, and the type of relationship. If the salon controls how the stylist performs their work, sets their hours, or restricts them from working elsewhere, the worker is likely an employee regardless of what the rental agreement says. We identify those situations and help you restructure before an audit does it for you.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement. If your current system cannot handle commission splits or tip credit calculations correctly, we can recommend a better platform and manage the transition, but only if you want that.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for salon and spa businesses?</h3>
              <p>Everything: payroll processing, commission calculations, tip credit compliance, federal and state tax filing, year-end W-2 production, and dedicated BEG support. No per-run fees, no year-end surcharges, no module upsells. One flat rate covers all complexity.</p>
            </div>
            <div className="faq-item">
              <h3>How are commissioned stylists handled if they have a slow week and do not hit minimum wage?</h3>
              <p>BEG checks the commission earnings against the minimum wage floor for every workweek. If a stylist earns less than minimum wage based on commissions alone, we flag it and process the required wage supplement automatically. This keeps you in compliance with FLSA minimum wage requirements and avoids back-wage claims.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle payroll for salons with locations in multiple states?</h3>
              <p>Yes. BEG manages state-by-state payroll tax registration, remittance, and compliance across all states where you have employed workers. We apply the correct minimum wage, tipped minimum wage, and cosmetology wage rules for each location so nothing falls through the cracks as you expand.</p>
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
              { '@type': 'Question', name: 'How does BEG determine whether a booth renter should be classified as an employee?', acceptedAnswer: { '@type': 'Answer', text: 'BEG reviews the actual working arrangement against the IRS common-law test and applicable state tests, which look at behavioral control, financial control, and the type of relationship. Workers who are controlled by the salon in how they perform their work are likely employees regardless of what a rental agreement says.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system to work with BEG?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, commission calculations, tip credit compliance, tax filing, year-end W-2 production, and dedicated BEG support. No add-on fees.' } },
              { '@type': 'Question', name: 'How are commissioned stylists handled if they do not hit minimum wage?', acceptedAnswer: { '@type': 'Answer', text: 'BEG checks commission earnings against the minimum wage floor every workweek and processes the required wage supplement automatically if needed.' } },
              { '@type': 'Question', name: 'Can BEG handle payroll for salons in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages state-by-state payroll tax registration, remittance, and compliance across all states where you have employed workers.' } },
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Salon & Spa', item: 'https://www.beghr.com/services/managed-payroll/salon-spa' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'Booth Renter vs. W-2 Employee: IRS Classification Rules for Salons (2026)',
            excerpt: 'How the IRS determines whether a booth renter is actually a misclassified employee, and what salon owners need to do to stay compliant.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Tip Credit Compliance for Salons and Spas: What Payroll Must Get Right',
            excerpt: 'The tip credit rules that most salon payroll setups get wrong, and how fully managed payroll keeps you in compliance every pay cycle.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House: Cost Comparison for Salon Owners (2026)',
            excerpt: 'What salon and spa owners actually spend on in-house payroll administration versus a fully managed service at $25–$45 PEPM.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Salon and Spa payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Salon and Spa employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
