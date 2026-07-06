import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Government Contractor Benefits | Instant Estimate | BEG',
  description: 'Benefits administration for government contractors: SCA fringe obligations reconciled with real benefits spend, ACA handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/government-contractor' },
  openGraph: {
    title: 'Government Contractor Benefits | Instant Estimate | BEG',
    description: 'Benefits administration for government contractors: SCA fringe obligations reconciled with real benefits spend, ACA handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/government-contractor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor Benefits | Instant Estimate | BEG', description: 'Benefits administration for government contractors: SCA fringe obligations reconciled with real benefits spend, ACA handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-government-contractor');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a government contractor?',
    'Plan setup, enrollment, life-event changes, eligibility tracking by contract population, deduction sync with payroll, benefits cost data organized for fringe reconciliation, and ACA reporting, all in one system.',
  ],
  [
    'How do SCA fringe benefits relate to our health plan?',
    'On covered service contracts, the wage determination sets a fringe benefit obligation alongside wages. Bona fide benefits like health coverage can satisfy it, so your actual benefits spend has to be documented per employee.',
  ],
  [
    'Can you help us show benefits spend for a DOL or agency audit?',
    'Administration keeps elections, employer contributions, and deductions in one reconciled system per employee, which is exactly the record set a fringe-compliance review asks you to produce.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps designing plans and placing coverage, including plans structured around fringe obligations. BEG Managed Benefits handles the administration and the data behind them.',
  ],
  [
    'Does this cover ACA reporting for a mixed contract workforce?',
    'Yes. The Software + ACA Compliance plan tracks eligibility across contract and corporate populations, including variable-hour employees, and produces Forms 1094-C and 1095-C on schedule.',
  ],
  [
    'Is this a PEO for government contractors?',
    'No. There is no co-employment, which matters when your name is on the contract. BEG Managed Benefits, powered by isolved, administers the plans you already chose. You stay the employer.',
  ],
  [
    'What records do we need if DOL requests a compliance review?',
    'Per-employee eligibility, elections, employer contributions, and deductions, reconciled and exportable, covering the period under review. Administration keeps that data current as a byproduct of running enrollment, not as a special project assembled after the request arrives.',
  ],
  [
    'How do you handle a workforce that shifts between covered and non-covered contracts?',
    'Employees moving between SCA-covered task orders and commercial or non-covered work need eligibility and fringe treatment tracked per assignment. The system reflects each employee\'s current contract population so benefits and hours data follow the actual work, not a static job title.',
  ],
  [
    'What happens to benefits during a contract recompete or transition?',
    'Incumbent capture means enrollment, eligibility, and carrier records for the incoming workforce have to be live on day one of the new contract, sometimes with days of notice. A dedicated Managed Benefits Specialist on the Fully Managed plan runs that transition instead of the contracts team assembling it manually.',
  ],
];

export default function ManagedBenefitsGovernmentContractorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Government Contractor', item: 'https://www.beghr.com/services/managed-benefits/government-contractor' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Government Contractors"
        title="Your fringe obligation is a dollar figure. Your benefits spend better reconcile with it."
        description="Service Contract Act and Davis-Bacon work turns benefits into contract compliance: wage determinations set fringe dollars, bona fide benefits satisfy them, and auditors expect the two to match per employee. BEG Managed Benefits, powered by isolved, keeps the administration and the data audit-ready, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Audit-ready', label: 'Benefits spend documented per employee' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Government Contractor Benefits Problem</p>
              <h2>On covered contracts, benefits are not a perk. They are a payable.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$2,500+',
                  label: 'The SCA contract threshold where fringe obligations attach',
                  sub: 'The Service Contract Act requires contractors on covered prime contracts over $2,500 to pay prevailing wages and fringe benefits per DOL wage determinations. The fringe piece is a dollar obligation, not a suggestion.',
                },
                {
                  stat: 'Per hour',
                  label: 'Fringe accrues by the hour and must be satisfied by the dollar',
                  sub: 'The health and welfare fringe rate in a wage determination is a per-hour figure, updated by DOL. Meeting it with bona fide benefits means knowing what each employee actually receives, every pay period.',
                },
                {
                  stat: '2 ledgers',
                  label: 'Benefits records and contract compliance records, usually apart',
                  sub: 'The broker file says what coverage costs. The contract file says what fringe is owed. When DOL or a contracting officer asks whether they reconcile, someone builds that answer by hand under deadline.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/government-contracts/service-contracts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, McNamara-O&apos;Hara Service Contract Act</a>.
            </p>
          </div>
        </section>

        {/* PAIN TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">SCA Fringe, Reconciled</p>
              <h2>What auditors ask for, and what has to be ready</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #000000' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Compliance question</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>What it requires</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>What administration produces</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Does the fringe rate get satisfied?', 'Bona fide benefits per employee documented against the wage determination', 'Elections and employer contributions recorded per employee, per contract'],
                    ['Are records audit-ready?', 'Per-employee cost data a contracting officer or DOL reviewer can trace', 'One reconciled export instead of carrier statements and spreadsheets'],
                    ['Is the ACA overlay covered too?', 'Eligibility tracked regardless of SCA status', 'Forms 1094-C and 1095-C produced from the same underlying data'],
                    ['What happens at recompete?', 'Incumbent workforce enrollment ready on day one of the new contract', 'A dedicated specialist runs the enrollment transition'],
                  ].map(([q, requires, produces]) => (
                    <tr key={q} style={{ borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>{q}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: '#555555' }}>{requires}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: '#555555' }}>{produces}</td>
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
              <h2>The recompete that adds 80 people on day one</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
              <p>A contractor wins a recompete and inherits 80 incumbent employees who transfer on the contract start date, with benefits expected to be active immediately under the wage determination. Enrollment records from the outgoing contractor are incomplete, hours histories are inconsistent, and the fringe rate has to be satisfied from day one, not phased in. Without a system built for this, the contracts team ends up building eligibility records by hand under a hard deadline.</p>
              <p style={{ marginTop: '1rem' }}>With a dedicated Managed Benefits Specialist running the transition, incoming employees enroll online against the correct wage determination, and per-employee fringe documentation exists from the first day of the contract rather than getting reconstructed after an audit request.</p>
            </div>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Contractor benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: per-employee benefits data you can actually produce</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans are set up in one system, employees on contract and corporate populations enroll themselves online, and every election, employer contribution, and deduction is recorded per employee and synced to payroll. When your contracts team or CPA reconciles fringe obligations against bona fide benefits, they start from a clean export instead of a shoebox of carrier statements.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: the federal overlay on top of the contract overlay</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>SCA compliance does not exempt you from the ACA. Eligibility is tracked across your workforce, including variable-hour and task-order-driven staff whose schedules follow the contract, and Forms 1094-C and 1095-C are produced on schedule. Winning a recompete with 80 incumbent employees on day one is exactly when eligibility tracking cannot be a spreadsheet.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: contract transitions without benefits chaos</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment, processes the hiring surges and wind-downs that contract awards create, and keeps carrier records current through every transition. A Benefits Auditing Analyst checks the data for the mismatches that become findings: coverage that lapsed mid-contract, contributions that drifted from elections, and departed employees still generating carrier charges.</p>
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
              Certified payroll and prevailing wage the bigger burden? BEG&apos;s core service is <Link href="/services/managed-payroll/government-contractor">managed payroll for government contractors</Link>, and the employment-policy side lives in <Link href="/services/hr-outsourcing/government-contractor">government contractor HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Government contractor benefits administration, answered</h2>
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
