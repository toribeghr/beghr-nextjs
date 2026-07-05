import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Insurance Agency HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for insurance agencies: producer license tracking, commission agreements, and non-solicit terms handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/insurance-agency' },
  openGraph: {
    title: 'Insurance Agency HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for insurance agencies: producer license tracking, commission agreements, and non-solicit terms handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/insurance-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Insurance Agency HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for insurance agencies: producer license tracking, commission agreements, and non-solicit terms handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-insurance-agency');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for an insurance agency?',
    'Certified HR professionals handle your handbook, producer license and appointment tracking policies, commission and chargeback documentation, non-solicit acknowledgments, and manager coaching, sized to an independent agency instead of a national carrier.',
  ],
  [
    'Can it handle producer licensing and carrier appointments?',
    'Yes at the policy and process level: verification at hire, documented renewal and CE tracking procedures, and job descriptions that require active licensure, built by HR professionals who know licensed-professional employment.',
  ],
  [
    'Does it cover commission agreements and chargebacks?',
    'It covers the employment documentation: written commission plans, chargeback and draw terms acknowledged in writing, and final-pay procedures at separation. Your counsel still owns contract enforcement.',
  ],
  [
    'Is this a PEO for insurance agencies?',
    'No. There is no co-employment and no employer-of-record change. Your agency stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does insurance agency HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingInsuranceAgencyPage() {
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Insurance Agency', item: 'https://www.beghr.com/services/hr-outsourcing/insurance-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Insurance Agency"
        title="Your producers sell policies. Who keeps the licenses, commissions, and contracts clean?"
        description="Producer license renewals, carrier appointment tracking, commission agreements that hold up in a chargeback dispute, and non-solicit terms that get tested the day a producer resigns: insurance agency HR is contract-heavy and deadline-driven. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Insurance Agency HR Problem</p>
              <h2>Production gets the attention. Employment paperwork gets the dispute.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before agency complexity',
                  sub: 'Most independent agencies never have the headcount to justify that hire, so HR lands on the principal or operations lead, between renewals and carrier audits.',
                },
                {
                  stat: 'Per state',
                  label: 'How producer licenses and appointments are tracked',
                  sub: 'A producer writing in twelve states carries twelve renewal cycles plus continuing education deadlines. One lapse means unlicensed sales activity a regulator or carrier can act on.',
                },
                {
                  stat: 'At departure',
                  label: 'When the book-of-business fight starts, the paperwork you have is all you get',
                  sub: 'Commission chargebacks, non-solicit terms, client-list ownership: agencies discover the gaps in producer agreements at the exact moment those gaps can no longer be fixed.',
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
              Source: <a href="https://content.naic.org/cipr-topics/producer-licensing" target="_blank" rel="noopener noreferrer">National Association of Insurance Commissioners, producer licensing</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Insurance Agency HR Compliance</p>
              <h2>The employment problems specific to insurance agencies, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Producer license and appointment tracking that does not live in one person&apos;s head</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every producer carries a stack of state licenses, lines of authority, continuing education deadlines, and carrier appointments, each on its own clock. Let one lapse and the agency has a producer binding business without authority, which is a regulatory problem and a carrier-contract problem at the same time. HR outsourcing builds the employment side of the tracking process: license verification at hire, job descriptions that state active licensure as a condition of the role, a documented renewal and CE policy, and a personnel file that shows the agency checked. The office manager stops running renewals from a spreadsheet nobody else can read.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission agreements and chargebacks, in writing before the dispute</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most commission fights trace back to terms that were explained verbally and never documented: how draws recover, when a chargeback hits, what happens to trailing commissions after separation, whether renewals follow the producer or the agency. State wage laws treat earned commissions as wages, so an undocumented plan becomes a wage claim with penalties attached. HR outsourcing gets the employment documentation right: written commission plans acknowledged at hire and at every change, chargeback and draw terms in plain language, and final-pay procedures that follow the rules of the state where the producer sits. Your counsel drafts contracts; HR makes sure the employment records match them.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Non-solicit and book-of-business terms decided before the resignation</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a producer leaves, the value at stake is the book. Whether the agency keeps it depends on documents signed years earlier: non-solicit acknowledgments, confidentiality terms covering client lists and expiration data, and clarity about who owns the relationship. Enforceability varies sharply by state, and several states now restrict restrictive covenants outright, so a template pulled from the internet may be worthless where your producers actually work. HR outsourcing manages the employment layer: making sure the right acknowledgments exist in every file, refreshed when roles change, with exit procedures that remind the departing producer of obligations in writing on the way out.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Conduct policies that protect your E&amp;O position</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Errors and omissions exposure is usually discussed as an insurance question, but the underlying conduct is an employment question. Misrepresentation on applications, backdating, signing for clients, handling premium funds loosely: each needs a written policy, documented training, and consistent discipline when it happens. An agency that tolerated sloppy conduct for years has a harder story to tell a carrier or regulator when something finally breaks. HR outsourcing builds conduct standards into the handbook, documents acknowledgment by every licensed employee, and coaches managers through the discipline process so corrective action is consistent, dated, and in the file before anyone asks for it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Remote producers across state lines</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Recruiting licensed producers is a national talent acquisition exercise now, and every remote hire drags the agency into a new employment jurisdiction: that state&apos;s wage payment rules, final-pay deadlines, leave laws, required notices, and handbook supplements. An agency headquartered in one state with producers in six is a six-state employer whether it planned to be or not. HR outsourcing keeps the multi-state picture current: which rules apply to whom, what the handbook must say state by state, and what changes when the next remote hire signs. Growth by direct hire stops meaning compliance by accident.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Agencies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent P&C agencies', body: 'Producers, CSRs, and account managers with license tracking, commission plans, and no one formally owning the employment files.' },
                { title: 'Life and health agencies', body: 'Carrier appointments across multiple states, chargeback-heavy compensation, and producers who work far from the home office.' },
                { title: 'Employee benefits brokerages', body: 'Licensed benefits counselors, renewal-season crunch staffing, and client data confidentiality that has to be an employment policy, not a hope.' },
                { title: 'MGAs and wholesale brokers', body: 'Underwriters and brokers in multiple states, program-specific conduct standards, and E&O exposure that runs through employee behavior.' },
                { title: 'Multi-office agency groups', body: 'Two to ten offices with different local practices, one handbook that fits none of them, and inconsistent discipline across locations.' },
                { title: 'Growing and acquiring agencies', body: 'Roll-ups inheriting producers with legacy agreements, mismatched commission plans, and personnel files in three formats.' },
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
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Commission payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/insurance-agency">managed payroll for insurance agencies</Link>. Licensed-professional HR is home turf for BEG: see the same model at work in <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Insurance agency HR outsourcing, answered</h2>
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
