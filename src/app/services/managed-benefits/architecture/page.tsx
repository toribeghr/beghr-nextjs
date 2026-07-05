import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Architects | Instant Estimate | BEG',
  description: 'Benefits administration for architecture firms: enrollment, ACA compliance, and carrier updates off the principal\'s desk. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/architecture' },
  openGraph: {
    title: 'Benefits Admin for Architects | Instant Estimate | BEG',
    description: 'Benefits administration for architecture firms: enrollment, ACA compliance, and carrier updates off the principal\'s desk. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/architecture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Architects | Instant Estimate | BEG', description: 'Benefits administration for architecture firms: enrollment, ACA compliance, and carrier updates off the principal\'s desk. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-architecture');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an architecture firm?',
    'Plan setup, open enrollment, new hire and life-event changes, carrier updates, payroll deduction sync, and ACA eligibility tracking with Forms 1094-C and 1095-C, handled in one system instead of a principal\'s evenings.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising the firm and negotiating renewals. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, data, and compliance filings. Brokers usually welcome the help.',
  ],
  [
    'We have remote designers in several states. Does that change anything?',
    'It changes the administration, not the service. One system tracks eligibility and enrollment for every employee wherever they sit, and continuation rules are scoped to the states that apply on your discovery call. Coverage is national.',
  ],
  [
    'Is this a PEO for architecture firms?',
    'No. There is no co-employment and no employer-of-record change. The firm stays the employer, your plans stay your plans, and your broker relationship stays intact. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a design firm?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsArchitecturePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Architecture', item: 'https://www.beghr.com/services/managed-benefits/architecture' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Architecture"
        title="You went to school to design buildings, not to reconcile carrier invoices."
        description="In most studios, benefits administration belongs to a principal or the office manager, wedged between deadlines and client calls. BEG Managed Benefits, powered by isolved, takes enrollment, changes, and ACA compliance off the firm's plate while your broker keeps doing what brokers do."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '1 system', label: 'Enrollment, changes, and ACA in one place' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Architecture Firm Benefits Problem</p>
              <h2>Owner-led firms carry a benefits program on nobody&apos;s actual job description.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '20 employees',
                  label: 'Where federal COBRA obligations begin',
                  sub: 'Growing studios cross the 20-employee line without noticing, and every departure after that carries federal notice obligations with deadlines. Below it, state continuation rules apply instead.',
                },
                {
                  stat: '1 principal',
                  label: 'The usual owner of enrollment, renewals, and carrier fixes',
                  sub: 'Billable design leadership time goes to chasing enrollment confirmations and correcting deduction errors, because nobody else at the firm owns benefits.',
                },
                {
                  stat: 'Every fall',
                  label: 'Renewal season lands on top of project deadlines',
                  sub: 'Broker meetings, plan comparisons, employee questions, and election deadlines arrive on their own schedule, not the project schedule.',
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
              Source: <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Architecture Firms</p>
              <h2>The benefits problems specific to design firms, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The broker relationship stays. The busywork behind it leaves.</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most firm owners like their broker and worry that fixing the admin problem means blowing up that relationship. It does not. Your broker keeps advising, quoting, and placing coverage at renewal. What moves to BEG is everything after the placement: building the plans in the system, running enrollment, processing changes, feeding carriers clean data, and syncing deductions to payroll. The principal stops being the middle layer between employees, the broker, and three carrier portals.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Growth that quietly changes your compliance obligations</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A studio that wins two big commissions and hires eight people can cross the 20-employee federal COBRA line and start marching toward the 50 full-time-equivalent ACA reporting line in the same year. Each threshold changes what a departure or a missed offer of coverage costs. Benefits administration that tracks headcount, hours, and eligibility continuously means those lines get crossed knowingly, with the notices and filings that each one requires.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A distributed workforce on one benefits program</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture went remote-friendly early: designers in three states, a BIM specialist in a fourth, project architects who relocate mid-project. Every state adds its own continuation and notice wrinkles. One system administers the same benefits program for everyone, wherever they sit, with the state-by-state details scoped on your discovery call instead of discovered during a dispute.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Recruiting against bigger firms with a small-firm budget</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The talent a growing studio wants is also being recruited by national firms whose benefits enrollment is polished and self-serve. Self-service enrollment with AI-guided plan recommendations gives a 25-person studio the same first-week benefits experience as a 2,500-person firm, without hiring anyone to run it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Data an auditor, or a partner meeting, can trust</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Benefits cost is one of the largest line items after salaries, and most firms cannot answer basic questions about it without an afternoon of spreadsheet archaeology. Real-time reporting shows enrollment, cost, and utilization on demand, and on the Fully Managed plan a Benefits Auditing Analyst checks elections against carrier bills so the firm stops paying for coverage nobody has.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Design firms big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Architecture studios', body: 'Principal-led practices where benefits administration competes with billable design leadership for the same hours.' },
                { title: 'Multi-office firms', body: 'Two or three offices, one benefits program, and carrier updates that have to land correctly everywhere.' },
                { title: 'Landscape architecture practices', body: 'Seasonal project rhythms, field staff, and part-timers whose hours drift near the ACA full-time line.' },
                { title: 'Interior design firms', body: 'Lean studios with high-touch clients, where the office manager is also the benefits department.' },
                { title: 'Architecture-engineering firms', body: 'Licensed professionals across disciplines and states, with the eligibility bookkeeping that mix creates.' },
                { title: 'Design-build practices', body: 'Office design staff plus field project teams, two work patterns on one benefits program.' },
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
              Payroll eating the other half of the admin week? BEG&apos;s core service is <Link href="/services/managed-payroll/architecture">managed payroll for architecture firms</Link>. Handbook and HR questions? See <Link href="/services/hr-outsourcing/architecture">HR outsourcing for architecture firms</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for architecture firms, answered</h2>
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
