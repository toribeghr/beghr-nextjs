import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Administration for CPAs | Instant Estimate | BEG',
  description: 'Benefits administration for accounting and CPA firms: enrollment, ACA forms, and carrier updates handled. You keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/accounting-cpa' },
  openGraph: {
    title: 'Benefits Administration for CPAs | Instant Estimate | BEG',
    description: 'Benefits administration for accounting and CPA firms: enrollment, ACA forms, and carrier updates handled. You keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/accounting-cpa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration for CPAs | Instant Estimate | BEG', description: 'Benefits administration for accounting and CPA firms: enrollment, ACA forms, and carrier updates handled. You keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-accounting-cpa');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an accounting firm?',
    'Plan setup, open enrollment, new hire and life-event changes, carrier updates, payroll deduction sync, and ACA eligibility tracking with Forms 1094-C and 1095-C, handled in one system instead of a partner’s spare time.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising the firm and placing coverage at renewal. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Our open enrollment lands during extension season. Can you run it?',
    'Yes. On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, so nobody at the firm is chasing enrollment confirmations while October 15 filings are due.',
  ],
  [
    'Is this a PEO for CPA firms?',
    'No. There is no co-employment and no employer-of-record change. The firm stays the employer, your plans stay your plans, and your broker relationship stays intact. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a CPA firm?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsAccountingCpaPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Accounting & CPA Firms', item: 'https://www.beghr.com/services/managed-benefits/accounting-cpa' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Accounting & CPA Firms"
        title="Your firm keeps clients compliant. Who is running the firm's own benefits?"
        description="Open enrollment lands in extension season, ACA forms land in peak tax season, and the partner who signed the broker agreement has zero admin hours to give. BEG Managed Benefits, powered by isolved, takes benefits administration off the firm's desk while your broker keeps doing what brokers do."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '0 hours', label: 'Of partner time benefits should take' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The CPA Firm Benefits Problem</p>
              <h2>The firm that files compliance forms for clients rarely has anyone filing its own.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Oct 15',
                  label: 'Extension deadline, right when open enrollment prep begins',
                  sub: 'Fall renewals and enrollment planning collide with the extension crunch. The partner or office manager running benefits does it in the worst weeks of the year to do anything else.',
                },
                {
                  stat: '50 FTE',
                  label: 'The IRS applicable large employer line',
                  sub: 'At 50 full-time equivalent employees, ACA employer reporting becomes mandatory: eligibility tracking, offers of coverage documented, Forms 1094-C and 1095-C filed. Growing firms cross it quietly.',
                },
                {
                  stat: 'Unbilled',
                  label: 'Every hour a partner spends in a carrier portal',
                  sub: 'A firm sells expertise by the hour. Hours spent chasing enrollment confirmations, fixing deduction errors, and re-keying carrier updates are hours the firm cannot invoice.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Accounting Firms</p>
              <h2>The benefits problems specific to CPA firms, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Open enrollment that ignores the firm&apos;s calendar</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most calendar-year plans renew January 1, which puts enrollment meetings, plan comparisons, and election deadlines in November and December: exactly when the firm is closing out extension work and gearing up for year-end planning. Then the ACA reporting cycle delivers Form 1095-C furnishing and filing deadlines in the opening months of tax season. On the Fully Managed plan, a dedicated Managed Benefits Specialist runs the whole enrollment cycle and the reporting behind it, so the firm&apos;s busiest months stop doubling as benefits season.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Partner-heavy firms with zero admin bandwidth</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In a firm of ten to seventy-five people, benefits administration usually belongs to a managing partner, a firm administrator, or the person who happened to set up the plan years ago. They juggle the broker relationship, carrier portals, enrollment questions, and deduction changes on top of a real job. BEG Managed Benefits moves that operational load into one system with a team behind it: employees enroll themselves with AI-guided recommendations, changes flow to carriers, and deductions sync to payroll without anyone re-keying.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Seasonal staff and the eligibility questions they raise</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tax season interns, per-diem preparers, and part-time bookkeepers create the classic ACA question: who actually crossed the full-time line, and when did an offer of coverage become required? The Software + ACA Compliance plan tracks hours and eligibility across the whole roster, including seasonal and variable-hour staff, and produces Forms 1094-C and 1095-C from the same data, so the firm&apos;s own filings get the rigor it applies to client work.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A benefits paper trail that would survive your own review</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPAs know what a clean workpaper looks like. Benefits data rarely meets that standard: enrollment records in one inbox, carrier confirmations in another, deduction schedules in a spreadsheet nobody reconciles. On the Fully Managed plan a Benefits Auditing Analyst checks the data for errors the way the firm would check a client&apos;s: enrollments against carrier records, deductions against elections, eligibility against hours.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Competing for talent against firms with bigger benefits desks</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Recruiting seniors and managers means competing with regional and national firms whose enrollment experience is polished and self-serve. A modern enrollment experience, where a new hire compares plans and enrolls online in minutes, is table stakes for the candidates a growing firm wants, and it comes standard on every plan tier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Firms big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'CPA firms', body: 'Multi-partner firms where the firm administrator is also the benefits department, enrollment desk, and carrier liaison.' },
                { title: 'Tax practices', body: 'Seasonal preparer staffing, intern classes every spring, and the ACA hours-tracking questions that come with both.' },
                { title: 'Bookkeeping and CAS practices', body: 'Distributed, often part-time teams where eligibility status changes as client load shifts.' },
                { title: 'Audit and advisory boutiques', body: 'Salaried professionals who expect a polished enrollment experience and benefits answers on demand.' },
                { title: 'Fractional CFO firms', body: 'Small W-2 cores plus contractors, where getting who-is-eligible right matters more than headcount suggests.' },
                { title: 'Multi-office regional firms', body: 'Offices in several states, one benefits program, and carrier updates that have to land everywhere at once.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger time sink? BEG&apos;s core service is <Link href="/services/managed-payroll/accounting-cpa">managed payroll for accounting firms</Link>. Handbook and HR questions? See <Link href="/services/hr-outsourcing/accounting-cpa">HR outsourcing for accounting firms</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for accounting firms, answered</h2>
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
