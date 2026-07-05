import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Veterinary Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for veterinary practices: enrollment, ACA, and COBRA off the practice manager\'s desk. You keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/veterinary' },
  openGraph: {
    title: 'Veterinary Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for veterinary practices: enrollment, ACA, and COBRA off the practice manager\'s desk. You keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/veterinary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Veterinary Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for veterinary practices: enrollment, ACA, and COBRA off the practice manager\'s desk. You keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-veterinary');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a veterinary practice?',
    'Plan setup, online enrollment your team completes between appointments, eligibility tracking for part-time techs and assistants, required ACA filings where headcount triggers them, life-event changes, carrier updates, and COBRA or state continuation support.',
  ],
  [
    'We already have a broker. What is left to outsource?',
    'The administration your broker was never hired to do: enrollment mechanics, eligibility data, deduction syncing, life-event changes, carrier updates, and notice deadlines. Your broker designs and places the coverage; BEG Managed Benefits runs the machinery behind it. Most brokers welcome it.',
  ],
  [
    'Does a small practice really have ACA obligations?',
    'It depends on size. Applicable-large-employer obligations attach at 50 full-time employees including full-time equivalents, which multi-location practices and consolidating groups do reach. Below that line, eligibility tracking still matters for plan terms, and continuation rules still apply through federal COBRA or state continuation laws.',
  ],
  [
    'Can enrollment work for a team that is with patients all day?',
    'Yes. Enrollment is online and self-service: vets, techs, and front desk staff compare plans, get AI-guided recommendations, and enroll from a phone after the last appointment instead of in a huddle around the practice manager\'s monitor.',
  ],
  [
    'Is this a PEO for veterinary practices?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your practice stays the employer.',
  ],
  [
    'What does veterinary benefits administration cost?',
    'A monthly per-employee cost far below an internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsVeterinaryPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Veterinary', item: 'https://www.beghr.com/services/managed-benefits/veterinary' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Veterinary"
        title="Your broker set up great benefits. Your practice manager still runs them alone."
        description="Veterinary practices usually have the coverage question solved and the administration question ignored: enrollment, eligibility, deduction changes, and continuation notices all land on a practice manager who is also running the schedule, the inventory, and the front desk. BEG Managed Benefits, powered by isolved, takes the administration while your broker stays exactly where they are."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '3 Plans', label: 'From software to fully managed' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Veterinary Benefits Problem</p>
              <h2>A hiring market that demands real benefits, and a back office of exactly one person.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Faster',
                  label: 'Veterinary employment is projected to grow much faster than average',
                  sub: 'BLS projects employment of veterinarians and veterinary technicians to grow much faster than the average occupation this decade. Practices compete for the same techs, and the benefits package is part of every offer conversation.',
                },
                {
                  stat: '1 person',
                  label: 'The typical veterinary benefits department',
                  sub: 'The practice manager runs enrollment, answers coverage questions, fixes deduction errors, and tracks notice deadlines, in the gaps between checking in patients and ordering supplies. Nothing fails loudly until a deadline does.',
                },
                {
                  stat: '60 days',
                  label: 'Continuation election windows that apply even to small practices',
                  sub: 'Federal COBRA covers employers with 20 or more employees, and most states extend continuation rights below that through mini-COBRA laws. A covered departure opens deadlines regardless of practice size; only the rulebook changes.',
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
              Sources: <a href="https://www.bls.gov/ooh/healthcare/veterinarians.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook, veterinarians</a> and <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Veterinary benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that does not queue at the practice manager&apos;s desk</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Benefits Admin Software plan puts plan comparison and enrollment online: vets, techs, assistants, and front desk staff research options, get AI-guided recommendations that balance cost and coverage, and enroll from a phone after close. Life events run through self-service workflows, and deductions sync to payroll, which ends the cycle of a plan change scribbled on a note and fixed across three pay periods.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Eligibility tracking sized to a practice, ACA filings when you grow into them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Part-time techs, relief vets, and kennel staff mean eligibility is not a static list. The Software + ACA Compliance plan tracks hours continuously, so plan-term eligibility stays accurate now, and if your practice group grows past the applicable-large-employer line, the measurement framework and Forms 1094-C and 1095-C are already running instead of being invented in a panic the year obligations attach.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Continuation notices under whichever rulebook applies to you</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Whether your practice falls under federal COBRA or your state&apos;s continuation law, a covered departure starts a clock. The right notices go out on the right timelines, elections are tracked, and coverage end dates flow to your carriers. Which rules apply to your practice and states is scoped exactly on your discovery call, so the answer is written down before anyone resigns.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: the admin off the desk entirely</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes changes, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the quiet errors: a departed tech still on the invoice, an election that never reached the carrier, a dependent past eligibility. Your practice manager gets their hours back, and your team gets benefits that work the way the offer letter promised.</p>
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
                Benefits Admin Software puts enrollment online. Software + ACA Compliance adds eligibility tracking and required filings. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger time sink? That is <Link href="/services/managed-payroll/veterinary">managed payroll for veterinary practices</Link>; for handbooks and people questions, see <Link href="/services/hr-outsourcing/veterinary">veterinary HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Veterinary benefits administration, answered</h2>
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
