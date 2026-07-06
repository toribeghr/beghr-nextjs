import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for executive teams: rich plans, class-based eligibility, and imputed income handled discreetly. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/executive' },
  openGraph: {
    title: 'Executive Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for executive teams: rich plans, class-based eligibility, and imputed income handled discreetly. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/executive',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Executive Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for executive teams: rich plans, class-based eligibility, and imputed income handled discreetly. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-executive');

const FAQS: [string, string][] = [
  [
    'What does benefits administration for executive teams include?',
    'Class-based plan setup, enrollment for executive and staff tiers, life-event changes, carrier updates, imputed income coordination with payroll, and ACA reporting, all run in one system with restricted access to sensitive records.',
  ],
  [
    'Do we have to leave our broker or advisor?',
    'No. Your broker keeps designing and placing the executive plans. BEG Managed Benefits handles the administration behind them: eligibility classes, enrollment, data, and compliance filings.',
  ],
  [
    'How is executive plan data kept discreet?',
    'Compensation-linked benefit elections sit behind role-based access in one system instead of spreadsheets on a shared drive, so only the people who should see executive coverage details can.',
  ],
  [
    'Can you administer different benefit classes for executives and staff?',
    'Yes. Class-based eligibility is set up in the system so each tier gets the right plans, contributions, and waiting periods automatically, and the distinctions are documented rather than tribal knowledge.',
  ],
  [
    'What about group-term life over $50,000?',
    'Coverage above $50,000 of employer-provided group-term life creates imputed income under IRS rules. Administration keeps those amounts calculated and synced with payroll so W-2s come out right.',
  ],
  [
    'Is this a PEO?',
    'No. There is no co-employment and your plans stay your plans. BEG Managed Benefits, powered by isolved, administers the coverage you and your broker already chose. You stay the employer.',
  ],
  [
    'How is the group-term life imputed income actually calculated?',
    'The IRS publishes a uniform premium table by age band that determines the taxable value of coverage above $50,000. That value becomes imputed income, added to wages and run through payroll each period so W-2 and paystub figures stay correct all year instead of getting corrected in a year-end scramble.',
  ],
  [
    'What if an executive is enrolled in a spouse or dependent life rider too?',
    'Spouse and dependent group-term life above the de minimis threshold can also generate imputed income under IRS rules, separate from the executive\'s own coverage. Administration tracks each rider on its own record so the payroll sync reflects the household picture, not just the primary policy.',
  ],
  [
    'Who at the company can see executive benefit elections?',
    'Access is role-based. HR and payroll see what they need to process elections and deductions; broader visibility is restricted, so executive coverage details are not sitting in a shared enrollment spreadsheet everyone in the building can open.',
  ],
];

export default function ManagedBenefitsExecutivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Executive', item: 'https://www.beghr.com/services/managed-benefits/executive' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Executive Teams"
        title="Rich plans deserve better than spreadsheet administration."
        description="Executive benefits carry the highest stakes per record in the company: class-based eligibility, imputed income on generous coverage, and elections nobody outside a small circle should see. BEG Managed Benefits, powered by isolved, administers it correctly and discreetly, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Class-based', label: 'Executive and staff tiers, one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Executive Benefits Problem</p>
              <h2>The richer the plan, the more expensive the administrative mistake.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$50,000',
                  label: 'The group-term life threshold where imputed income starts',
                  sub: 'Employer-provided group-term life above $50,000 creates taxable income under IRS rules. Executive plans blow past that line by design, and the imputed income has to hit payroll and the W-2 correctly every year.',
                },
                {
                  stat: '2 tiers+',
                  label: 'Benefit classes that must stay cleanly separated',
                  sub: 'Executive medical, buy-up disability, and richer employer contributions only work if class-based eligibility is enforced in the system. A staff hire dropped into the executive class is a costly, awkward unwind.',
                },
                {
                  stat: '1 audience',
                  label: 'The people who see every administrative error: your leadership',
                  sub: 'A missed dependent, a wrong deduction, or a botched carrier update on a staff plan is a support ticket. On an executive plan it is a credibility problem, discovered by the person who signs off on vendors.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.irs.gov/government-entities/federal-state-local-governments/group-term-life-insurance" target="_blank" rel="noopener noreferrer">IRS, group-term life insurance rules</a>.
            </p>
          </div>
        </section>

        {/* PAIN TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Group-Term Life Over $50,000</p>
              <h2>What imputed income actually touches</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #000000' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Coverage detail</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>What the IRS requires</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>What administration keeps current</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Coverage above $50,000', 'Excess value becomes imputed income under IRC Section 79', 'Uniform premium table applied per executive, every period'],
                    ['Payroll sync', 'Imputed income must hit wages, not just the year-end W-2', 'Deduction and wage sync run each pay cycle, not once a year'],
                    ['Spouse or dependent riders', 'Coverage over the de minimis limit can also generate imputed income', 'Tracked as its own record alongside the executive policy'],
                    ['W-2 reporting', 'Imputed income reported in wages and Social Security and Medicare wages', 'Figures reconcile because payroll and benefits share one data set'],
                  ].map(([detail, requires, keeps]) => (
                    <tr key={detail} style={{ borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>{detail}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: '#555555' }}>{requires}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: '#555555' }}>{keeps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SCENARIO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Common Scenario</p>
              <h2>The W-2 correction nobody wants to explain to the CFO</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
              <p>An executive carries $300,000 of employer-paid group-term life, well above the $50,000 threshold where imputed income kicks in. The imputed income was never synced to payroll during the year, so it shows up as a lump correction in December, right as the executive is reviewing year-end compensation. Now HR is explaining a W-2 adjustment to someone who did not expect one, on a plan the company designed to be a benefit, not a headache.</p>
              <p style={{ marginTop: '1rem' }}>With imputed income calculated and synced to payroll every pay period, the number on the December paystub already matches what lands on the W-2. No surprise, no year-end conversation.</p>
            </div>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Executive benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: class-based plans in one discreet system</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Executive medical, buy-up life and disability, and staff plans are configured as separate benefit classes with their own eligibility rules, contributions, and waiting periods. Executives enroll themselves online without a printed election form circulating through the office, elections sit behind role-based access, and deductions, including imputed income on coverage above the IRS group-term life threshold, sync to payroll automatically.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: reporting that reflects your classes correctly</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>ACA reporting does not care how senior someone is, and offers of coverage across executive and staff tiers all land on Forms 1094-C and 1095-C. This plan tracks eligibility across the whole workforce, produces the forms, and watches the deadlines, so a company that got the executive plans right does not stumble on the filing that covers everyone else.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated specialist your leadership never has to chase</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs enrollment, executive life events, and carrier updates, and a Benefits Auditing Analyst checks the data for the errors that embarrass vendors: wrong contribution splits, missed dependents, stale carrier records. Open enrollment for both tiers is handled start to finish, and your executives get administration that matches the quality of the plans your broker designed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Executive payroll carrying the same stakes? BEG&apos;s core service is <Link href="/services/managed-payroll/executive">managed payroll for executive teams</Link>, and the people questions live in <Link href="/services/hr-outsourcing/executive">executive HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Executive benefits administration, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
