import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Financial Services HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for financial services: registration tracking, clawback documentation, and clean separations handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/finance' },
  openGraph: {
    title: 'Financial Services HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for financial services: registration tracking, clawback documentation, and clean separations handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/finance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Financial Services HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for financial services: registration tracking, clawback documentation, and clean separations handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-finance');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a financial services firm?',
    'Certified HR professionals handle your handbook, license and registration tracking policies, commission and clawback documentation, confidentiality and personal-trading policies, and separation procedures, sized to a firm instead of a wirehouse HR department.',
  ],
  [
    'Can it track state insurance licenses and securities registrations?',
    'Yes at the policy and process level: verification at hire, renewal and continuing education tracking procedures, and job descriptions tied to required licenses, coordinated with your compliance function.',
  ],
  [
    'Does it help with commission disputes and clawbacks?',
    'It builds the paperwork that prevents them: written compensation plans with chargeback terms, signed acknowledgments, and state-compliant deduction practices, so a clawback is a contract term instead of an argument.',
  ],
  [
    'Is this a PEO for financial firms?',
    'No. There is no co-employment and no employer-of-record change. Your firm stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does financial services HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingFinancePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Finance', item: 'https://www.beghr.com/services/hr-outsourcing/finance' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Financial Services"
        title="Your producers are licensed and regulated. Your HR should keep up."
        description="Registrations and insurance licenses on renewal clocks, commission plans with clawback terms nobody signed, personal-trading policies, and separations where the book of business walks out the door: financial services HR carries regulatory weight. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Financial Services HR Problem</p>
              <h2>Production gets managed daily. Employment compliance gets discovered at separation.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before regulatory complexity',
                  sub: 'Firms under a few hundred employees rarely have the volume to justify that hire, so HR lands on the operations manager or a principal, on top of their supervisory duties.',
                },
                {
                  stat: 'Per state',
                  label: 'How insurance licenses and registrations multiply',
                  sub: 'Every producer selling across state lines carries a stack of licenses with separate renewal dates and continuing education requirements. One lapse means unlicensed business, and the firm owns the finding.',
                },
                {
                  stat: 'At exit',
                  label: 'When commission, clawback, and non-solicit gaps all surface at once',
                  sub: 'A departing advisor triggers every undocumented promise simultaneously: trailing commissions, chargebacks, client contact rules. The separation is when thin paperwork gets expensive.',
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
              Source: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Financial Services HR Compliance</p>
              <h2>The employment problems specific to financial services, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>License and registration tracking, including the U4 and U5 as employment actions</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A producing workforce is a portfolio of credentials: state insurance licenses with per-state renewal dates and CE hours, securities registrations maintained through the firm, and for registered representatives a Form U4 that must be amended when life events happen and a Form U5 filed at termination. Those filings are employment actions with career consequences, and careless U5 language generates defamation and expungement fights. HR outsourcing builds the tracking process, verification at hire, renewal calendars with lead time, and separation procedures that coordinate the employment file with the regulatory filing, so compliance and HR stop discovering each other&apos;s surprises.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission plans and clawbacks that are documents, not understandings</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Advanced commissions, chargebacks on lapsed policies, bonus recapture when production targets slide: clawbacks are standard in financial services and legally fragile everywhere. State wage laws restrict what can be deducted from earned wages, and the difference between an enforceable chargeback and an illegal deduction is usually whether a signed plan document defined when a commission was earned in the first place. HR outsourcing puts every variable pay plan in writing: earning definitions, chargeback terms, payment timing, and treatment at separation, acknowledged by signature, so the firm recovers what the plan says instead of litigating what somebody remembers.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Confidentiality, personal trading, and outside activities as employment policy</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Financial firms run on information that employees could misuse: client financial data, transaction flow, and in some shops material nonpublic information. The compliance manual may impose personal-trading preclearance, outside business activity disclosure, and gift limits, but those rules only carry employment consequences when they also live in employment documents with signed acknowledgments and a stated disciplinary path. HR outsourcing builds that bridge: confidentiality agreements at hire, annual policy attestations, and handbook language that makes a code-of-ethics violation a documented employment matter, so enforcement is consistent and defensible rather than personality-driven.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks with a regulatory layer on top of the FCRA</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Screening in financial services is two-layered. The regulatory layer disqualifies certain histories outright: statutory disqualification concepts for securities roles, state insurance license standards, and fingerprinting requirements in parts of the industry. The employment layer still applies in full: FCRA disclosure and authorization forms, pre-adverse and adverse action letters with waiting periods, and state ban-the-box and conviction-use limits. Firms that treat the regulatory check as permission to skip the FCRA choreography create clean regulatory files and dirty employment claims. HR outsourcing writes one screening procedure that satisfies both layers for every role and every state you hire in.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Non-solicits and the book-of-business fight, prepared before the resignation</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a producer leaves, the dispute is rarely about the desk; it is about the clients. Whether the firm keeps the book depends on documents signed years earlier: non-solicitation agreements drafted for the right state, confidentiality terms covering client lists, and compensation plans that address trailing revenue. State law on restrictive covenants varies widely and keeps shifting, so an agreement recycled from a decade-old template may be worth nothing. HR outsourcing keeps the agreements current by state, builds a separation checklist that executes cleanly in the first 48 hours, and documents the exit so the firm&apos;s position is evidence, not indignation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Financial firms big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent insurance agencies', body: 'Producers licensed across states, commission-heavy pay plans, and CE tracking nobody owns.' },
                { title: 'Wealth management and advisory firms', body: 'Registered staff, personal-trading policies, and client relationships that need protecting at separation.' },
                { title: 'Mortgage lenders and brokerages', body: 'Loan originator licensing, commission structures tied to volume, and hiring that swings with rates.' },
                { title: 'Community banks and credit unions', body: 'Branch staff, bond and background requirements, and employment policies under examiner expectations.' },
                { title: 'Fintech and lending startups', body: 'Recruiting licensed talent fast while building the employment infrastructure regulators will eventually ask about.' },
                { title: 'Family offices and boutique firms', body: 'Small headcount, high confidentiality stakes, and no margin for an improvised termination.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/finance">managed payroll for financial services</Link>. Clients in manufacturing? See <Link href="/services/hr-outsourcing/manufacturing">HR outsourcing for manufacturing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Financial services HR outsourcing, answered</h2>
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
