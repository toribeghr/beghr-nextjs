import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Engineers | Instant Estimate | BEG',
  description: 'Benefits administration for engineering firms: bench-time eligibility, multi-state staff, and enrollment handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/engineering' },
  openGraph: {
    title: 'Benefits Admin for Engineers | Instant Estimate | BEG',
    description: 'Benefits administration for engineering firms: bench-time eligibility, multi-state staff, and enrollment handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/engineering',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Engineers | Instant Estimate | BEG', description: 'Benefits administration for engineering firms: bench-time eligibility, multi-state staff, and enrollment handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-engineering');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an engineering firm?',
    'Plan setup, open enrollment, new hire and life-event changes, carrier updates, payroll deduction sync, and ACA eligibility tracking with Forms 1094-C and 1095-C, handled in one system instead of a principal\'s margin hours.',
  ],
  [
    'Does bench time between projects affect benefits eligibility?',
    'Under the IRS lookback method, an employee determined full-time keeps that status for the entire stability period even if hours dip between projects. The system tracks the periods so status changes happen by rule, not by guess.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising the firm and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, eligibility data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Is this a PEO for engineering firms?',
    'No. There is no co-employment and no employer-of-record change, which matters for firms holding professional licenses and government contracts. The firm stays the employer. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for an engineering firm?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsEngineeringPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Engineering', item: 'https://www.beghr.com/services/managed-benefits/engineering' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Engineering"
        title="Your firm engineers everything precisely. Except, probably, its own benefits data."
        description="Project benches, multi-state field offices, licensed professionals the firm cannot afford to lose over a botched claim: engineering firms carry real benefits complexity on a principal's spare hours. BEG Managed Benefits, powered by isolved, runs the administration while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '1 system', label: 'Every office and field team together' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Engineering Firm Benefits Problem</p>
              <h2>Project-driven staffing creates eligibility questions office workforces never see.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Stability period',
                  label: 'Full-time status locks in even when the bench is slow',
                  sub: 'Under IRS lookback rules, an employee measured full-time keeps that status for the whole stability period. Cutting coverage because project hours dipped is a compliance mistake, not a savings.',
                },
                {
                  stat: 'Multi-state',
                  label: 'Field offices and site teams scatter the roster',
                  sub: 'A firm headquartered in one state with inspectors and resident engineers in four others carries continuation and notice variations for each, on one benefits program.',
                },
                {
                  stat: '1 principal',
                  label: 'The usual owner of renewals, enrollment, and carrier fixes',
                  sub: 'Benefits administration lands on a principal or firm administrator whose billable time is worth multiples of what the task deserves.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/identifying-full-time-employees" target="_blank" rel="noopener noreferrer">IRS, identifying full-time employees under the ACA</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Engineering Firms</p>
              <h2>The benefits problems specific to engineering firms, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Bench time and project cycles, handled by rule</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Engineering staffing breathes with the backlog: field techs run heavy hours during construction season, then sit closer to forty or below between projects. The lookback measurement method exists for exactly this pattern, and the Software + ACA Compliance plan runs it continuously: measurement periods tracked, stability periods honored, eligibility decisions documented. Nobody loses coverage because a project demobilized, and nobody gets missed because one never staffed up.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>One benefits program across every office and site trailer</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Growth for an engineering firm usually means geography: a second office to chase municipal work, resident engineers embedded at project sites, remote analysts hired wherever the talent lives. Each state adds continuation and notice wrinkles. One system administers the same program for everyone, with state-specific details scoped on your discovery call rather than discovered in a dispute.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits that help win the PE recruiting war</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Licensed engineers get recruited constantly, and the national firms courting them run polished, self-serve enrollment. Self-service enrollment with AI-guided plan recommendations gives a 40-person firm the same first-week experience, and benefits questions get answered by the system instead of waiting on whoever administers the plan between deliverables.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Clean records for firms that live on contracts and audits</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Firms doing public and infrastructure work already maintain audit-grade project records. Benefits data rarely gets the same treatment, and it shows at renewal, during due diligence for a merger, or when an agency overhead audit asks about fringe costs. On the Fully Managed plan a Benefits Auditing Analyst reconciles enrollment against carrier bills continuously, and real-time reporting answers cost questions in minutes.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Growth thresholds crossed with eyes open</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A firm that wins two on-call contracts and acquires a survey practice can cross the 50 full-time-equivalent ACA line in a single year, and commonly owned sister entities count together. Continuous tracking means the firm knows where it stands each month, and Forms 1094-C and 1095-C are produced from live data when the obligation arrives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Engineering firms big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Civil and structural firms', body: 'Office engineers plus field inspection staff whose hours track construction season, not the calendar.' },
                { title: 'MEP consulting firms', body: 'Project-deadline culture where benefits admin loses to deliverables every single week.' },
                { title: 'Geotechnical and environmental firms', body: 'Field crews, lab staff, and drillers with genuinely variable hours worth tracking properly.' },
                { title: 'Surveying and mapping companies', body: 'Crews across counties and states on one benefits program.' },
                { title: 'Multi-office regional firms', body: 'Two to five offices, one program, and carrier updates that must land correctly everywhere.' },
                { title: 'Engineering-architecture firms', body: 'Mixed-discipline professionals and the consistent eligibility rules a merged practice needs.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds project-cycle eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Multi-state payroll the bigger drain? BEG&apos;s core service is <Link href="/services/managed-payroll/engineering">managed payroll for engineering firms</Link>. Handbooks and HR questions? See <Link href="/services/hr-outsourcing/engineering">HR outsourcing for engineering firms</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for engineering firms, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
