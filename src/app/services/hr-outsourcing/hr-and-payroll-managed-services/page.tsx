import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'HR and Payroll Outsourcing Services | Instant Pricing | BEG';
const DESC = 'HR and payroll managed services from one provider: managed payroll (not a PEO) plus HR outsourcing, combined or separate. See which fits and get instant pricing.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/hr-and-payroll-managed-services';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-payroll-managed-services');

const FAQS: [string, string][] = [
  [
    'Are managed payroll and HR outsourcing the same service?',
    'No. Managed payroll is BEG running your payroll operations inside your existing system: every cycle, filing, and W-2. HR outsourcing is a separate service where certified HR professionals handle handbooks, compliance, and leave. You can buy either alone or both together.',
  ],
  [
    'Is BEG a PEO?',
    'No, on both sides. Managed payroll does not take on co-employment liability; you remain the sole employer of record. HR outsourcing is support and advisory, not a co-employment takeover. Neither BEG service becomes your legal employer the way a PEO does.',
  ],
  [
    'What does "hr and payroll managed services" actually mean at BEG?',
    'It means you can combine two distinct BEG offers into one relationship: managed payroll handling the pay cycle, and HR outsourcing handling compliance, handbooks, and leave, each priced and scoped separately, both run through one point of contact if you want.',
  ],
  [
    'Do I have to buy both, or can I pick one?',
    'You can buy either service alone. Many clients start with managed payroll and add HR outsourcing later, or the reverse. Neither is a bundle requirement.',
  ],
  [
    'How is this priced?',
    'Managed payroll runs $25-$45 per employee per month, all-inclusive. HR outsourcing has three plans with an instant on-screen estimate. If you want both, you get separate numbers for each, combined into one clear monthly total.',
  ],
  [
    'Do I have to switch payroll systems to add HR outsourcing, or vice versa?',
    'No. Managed payroll works inside your existing payroll system. HR outsourcing runs independently of what payroll platform you use. Adding one does not require migrating the other.',
  ],
];

export default function HrAndPayrollManagedServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'HR and Payroll Managed Services',
            description: DESC,
            serviceType: 'HR and Payroll Outsourcing',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: 'United States',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
            url: URL,
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 3, name: 'HR and Payroll Managed Services', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Combined With Managed Payroll"
        title="Looking for HR and payroll managed services? Here is exactly what BEG offers, and how the two fit together."
        description="BEG runs two separate services that a lot of buyers search for as one thing: managed payroll (BEG runs your payroll operations, not a PEO, no co-employment) and HR outsourcing (certified HR pros for compliance, handbooks, and leave). Buy either alone, or combine them under one point of contact."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="chooser" />}
        heroStats={[
          { value: '$25-$45', label: 'Managed payroll PEPM, all-inclusive' },
          { value: '3 Plans', label: 'HR outsourcing, instant estimate' },
          { value: 'Not a PEO', label: 'Either service, no co-employment takeover' },
        ]}
      >
        {/* TL;DR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
              <p style={{ margin: 0, fontSize: '0.97rem', color: '#333333', lineHeight: '1.7' }}>
                <strong>Bottom line:</strong> "HR and payroll managed services" usually means two different jobs bundled by a vendor into one pitch. BEG keeps them as two clear, separately priced services: managed payroll runs your pay cycle inside your existing system, and HR outsourcing runs your compliance, handbooks, and leave administration. Buy one or both. Neither is a PEO, so you never hand over co-employment.
              </p>
            </div>
          </div>
        </section>

        {/* THE TWO OFFERS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Two Services, Not One Blurred Offer</p>
              <h2>What is the difference between BEG managed payroll and BEG HR outsourcing?</h2>
              <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
                Managed payroll is BEG operating your existing payroll system for you. HR outsourcing is a separate team of certified HR professionals handling compliance work. They solve different problems and are priced independently.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }} className="reveal">
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem' }}>
                <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Managed Payroll</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>BEG runs your pay cycle. You stay the employer.</h3>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Every pay cycle, tax filing, and W-2 handled inside your existing payroll system, at $25-$45 per employee per month, all-inclusive. This is not a PEO. BEG never becomes a co-employer, never takes on your employment liability, and never touches your benefits structure.
                </p>
                <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: 700, fontSize: '0.93rem' }}>See managed payroll and pricing &rarr;</Link>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem' }}>
                <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>HR Outsourcing</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Certified HR pros handle compliance. You keep control.</h3>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Handbooks, labor law posters, leave guidance, salary benchmarking, and live HR pro access, powered by isolved. Three plans, instant on-screen estimate. Also not a PEO: you make every hiring, firing, and policy decision, BEG advises and builds the documents.
                </p>
                <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60', fontWeight: 700, fontSize: '0.93rem' }}>See HR outsourcing and pricing &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH ONE FITS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which One Do You Actually Need?</p>
              <h2>You searched an "hr and payroll" term. Which BEG service fits your problem?</h2>
              <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
                Match your actual pain point, running payroll or handling HR compliance, to the right BEG service below. Most buyers searching a combined term have one problem more urgent than the other.
              </p>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '1.5rem' }}>
              {[
                {
                  title: 'Payroll eats your week, but HR compliance is under control',
                  body: 'You need managed payroll: BEG takes over the pay cycle, filings, and W-2s at $25-$45 PEPM, inside your existing system.',
                  href: '/services/managed-payroll',
                  cta: 'Go to managed payroll',
                },
                {
                  title: 'Payroll is fine, but handbooks, compliance, and leave land on your desk',
                  body: 'You need HR outsourcing: certified HR pros build your handbook, monitor law changes, and answer questions, for a fraction of an in-house HR hire.',
                  href: '/services/hr-outsourcing',
                  cta: 'Go to HR outsourcing',
                },
                {
                  title: 'Both payroll and HR compliance are unmanaged',
                  body: 'Combine both services under one BEG relationship. Each is scoped and priced independently, and you get one point of contact across both.',
                  href: '#full-comparison',
                  cta: 'See both, compared below',
                },
              ].map(({ title, body, href, cta }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', flex: 1 }}>{body}</p>
                  <Link href={href} style={{ color: '#ECAC60', fontWeight: 700, fontSize: '0.88rem' }}>{cta} &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL COMPARISON TABLE */}
        <section className="section section--soft" id="full-comparison">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Full Comparison</p>
              <h2>Managed payroll vs. HR outsourcing vs. a PEO, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Payroll</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>A PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['What it solves', 'Running your pay cycle', 'HR compliance, handbooks, leave', 'Both, plus benefits and liability transfer'],
                    ['Who employs your staff', 'You do', 'You do', 'Co-employment: the PEO does'],
                    ['Cost shape', '$25-$45 PEPM, all-inclusive', '3 plans, instant estimate', 'Percent of payroll or high PEPM, quote-gated'],
                    ['Migration required', 'No, works in your system', 'No, independent of payroll platform', 'Often yes, onto the PEO master system'],
                    ['Benefits plans', 'Not applicable', 'Yours stay yours', 'Replaced by PEO master plans'],
                    ['Leaving', 'Stop the service', 'Stop the service', 'Painful unwind of co-employment'],
                  ].map(([factor, payroll, hro, peo], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{payroll}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{hro}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Neither BEG service uses co-employment. Read more on <Link href="/services/hr-outsourcing/what-is-co-employment">what co-employment actually means</Link> or see the direct <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing breakdown</Link>.
            </p>
          </div>
        </section>

        {/* COMBINED CLOSE */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="beg-grid-2 reveal">
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>Start With the Bigger Fire</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>You do not need to solve both at once.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                  Most clients start with whichever problem is costing them more time right now, payroll or HR compliance, get that scoped and running, then add the second service when it makes sense. Nothing forces a bundled decision on day one.
                </p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>One Contact, Two Services</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>If you want both, they still run as two clear engagements.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                  Combining managed payroll and HR outsourcing gets you one BEG relationship and one point of contact, but each service keeps its own scope, its own pricing, and its own accountability. Nothing gets blurred into a single opaque number.
                </p>
              </div>
            </div>
            <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <PricingCta service="chooser" subline={false} />
              <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>Pick managed payroll, HR outsourcing, or both. See your number in about 90 seconds.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '780px' }}>
            <div className="head center reveal">
              <p className="eyebrow">FAQ</p>
              <h2>HR and payroll managed services, answered</h2>
            </div>
            <div className="faq reveal">
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
              Want the platform itself instead of a managed service?{' '}
              <Link href="/services/hcm-software" style={{ color: '#ECAC60', fontWeight: '600' }}>
                See isolved HCM software
              </Link>
              , or go back to{' '}
              <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60', fontWeight: '600' }}>
                HR outsourcing
              </Link>
              {' '}or{' '}
              <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
                managed payroll
              </Link>
              .
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
