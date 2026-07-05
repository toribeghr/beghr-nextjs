import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Construction | Instant Estimate | BEG',
  description: 'Benefits administration for construction: layoff COBRA volume, multi-LLC ACA counting, and enrollment handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/construction' },
  openGraph: {
    title: 'Benefits Admin for Construction | Instant Estimate | BEG',
    description: 'Benefits administration for construction: layoff COBRA volume, multi-LLC ACA counting, and enrollment handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Construction | Instant Estimate | BEG', description: 'Benefits administration for construction: layoff COBRA volume, multi-LLC ACA counting, and enrollment handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-construction');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a construction company?',
    'Plan setup, enrollment for office and field staff, life-event changes, carrier updates, payroll deduction sync, ACA eligibility tracking through layoffs and rehires, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'How do end-of-project layoffs affect benefits?',
    'Every enrolled employee separated at closeout is a qualifying event: coverage end dates, continuation notices on federal deadlines, and deduction stops. Project-shaped employment generates these in waves, which is why manual tracking fails.',
  ],
  [
    'We run several LLCs. Which one counts for ACA purposes?',
    'Potentially all of them together. IRS rules combine companies under common ownership when determining applicable large employer status, so the 50 full-time-equivalent test runs across the group, not entity by entity.',
  ],
  [
    'Is this a PEO for contractors?',
    'No. There is no co-employment and no employer-of-record change, which means your workers compensation program and EMR stay yours. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a contractor?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsConstructionPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Construction', item: 'https://www.beghr.com/services/managed-benefits/construction' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Construction"
        title="Crews staff up and wind down by project. Benefits deadlines do not flex with the schedule."
        description="Every closeout layoff is a wave of COBRA events, every spring rehire reopens eligibility questions, and the LLC-per-project structure scrambles the ACA math. BEG Managed Benefits, powered by isolved, runs the administration through the whole cycle while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Every entity', label: 'Multi-LLC rosters counted correctly' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Construction Benefits Problem</p>
              <h2>Project-shaped employment generates benefits events in waves, not trickles.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '1 group',
                  label: 'How the IRS may count your separate LLCs',
                  sub: 'Companies under common ownership are combined when determining applicable large employer status. Five 15-person entities can equal one 75-person ACA employer with reporting obligations.',
                },
                {
                  stat: 'Per layoff',
                  label: 'Each enrolled separation starts a federal notice clock',
                  sub: 'Coverage end dates, continuation election notices, and deduction stops, multiplied by however many crew members the closeout releases at once.',
                },
                {
                  stat: '13 weeks',
                  label: 'The break-in-service line for returning workers',
                  sub: 'IRS rehire rules decide whether a returning crew member is a new hire with a fresh waiting period or a continuing employee owed immediate coverage. Guessing wrong creates exposure both ways.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/determining-if-an-employer-is-an-applicable-large-employer" target="_blank" rel="noopener noreferrer">IRS, determining if an employer is an applicable large employer</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Construction</p>
              <h2>The benefits problems specific to contractors, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Layoff waves processed as fast as the job winds down</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a project closes and twelve enrolled crew members separate the same Friday, twelve continuation clocks start together. Handled in one system, each separation triggers its coverage end date, the required notices on their federal deadlines, and payroll deduction stops that actually stop. On the Fully Managed plan, a dedicated Managed Benefits Specialist processes the whole wave, and the rehire wave that follows when the next job breaks ground.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-entity structures counted the way the IRS counts them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Contractors run entity sprawl for liability reasons: an operating company, an equipment LLC, project-specific joint ventures, sometimes a separate service arm. IRS aggregation rules can pull commonly owned entities into one applicable large employer, which means eligibility tracking, offers of coverage, and 1094-C and 1095-C filings have to run across the combined roster. One system holds the whole group so nothing falls between entities.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Rehire rules applied instead of improvised</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Construction rehires the same good hands season after season. The IRS break-in-service rules draw a specific line: a returning worker may be a continuing employee entitled to coverage without a new waiting period, or a true new hire, depending on the gap. Tracking service history in one system means every rehire gets the right answer with a record behind it, instead of whatever the office remembered that week.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Field-friendly enrollment</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Crews do not attend benefits meetings in a conference room. Self-service enrollment with AI-guided plan recommendations works from a phone in the truck, in English or Spanish preferences the workforce actually has, and waiting-period tracking makes sure offers land on schedule during a hiring burst.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits data that holds up next to certified payroll</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Contractors already live with documentation discipline on the payroll side. Benefits deserves the same: enrollments reconciled against carrier bills, eligibility determinations documented, filings produced from live data. On the Fully Managed plan a Benefits Auditing Analyst runs those checks continuously, so the carrier invoice stops carrying ghosts from three closeouts ago.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Contractors with real crews and no benefits department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'General contractors', body: 'Office staff plus field crews across active jobs, with separations and rehires tracking the project calendar.' },
                { title: 'Specialty trade contractors', body: 'Electrical, mechanical, plumbing, concrete: steady cores plus surge hiring, often across several entities.' },
                { title: 'Heavy civil and sitework', body: 'Seasonal weather windows that compress hiring and layoffs into predictable, paperwork-heavy waves.' },
                { title: 'Roofing and exteriors', body: 'Seasonal staffing swings and turnover that generate continuation events in volume.' },
                { title: 'Home builders', body: 'Project-based crews, warranty techs, and design staff under one benefits program.' },
                { title: 'Multi-entity contractor groups', body: 'Operating companies, equipment LLCs, and JVs that the IRS may treat as one employer.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds multi-entity eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst who absorb the layoff and rehire waves. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Certified payroll and prevailing wage the bigger problem? BEG&apos;s core service is <Link href="/services/managed-payroll/construction">managed payroll for construction</Link>. Classification and policy questions? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for construction, answered</h2>
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
