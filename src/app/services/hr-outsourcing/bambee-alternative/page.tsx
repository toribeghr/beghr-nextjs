import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Bambee Alternative: Deeper HR Outsourcing for SMBs | BEG',
  description: 'Outgrowing Bambee? BEG adds a certified HR team, custom handbook program, and full leave administration. Instant estimate on screen in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/bambee-alternative' },
  openGraph: {
    title: 'Bambee Alternative: Deeper HR Outsourcing for SMBs | BEG',
    description: 'Outgrowing Bambee? BEG adds a certified HR team, custom handbook program, and full leave administration. Instant estimate on screen in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/bambee-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Bambee Alternative: Deeper HR Outsourcing for SMBs | BEG', description: 'Outgrowing Bambee? BEG adds a certified HR team, custom handbook program, and full leave administration. Instant estimate on screen in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-bambee-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company remains the sole employer, on your own EIN, with your own benefits plans. Bambee is not a PEO either; the difference between us is depth, not structure.',
  ],
  [
    'How is BEG different from Bambee?',
    'Bambee pairs a small business with an HR manager at a published flat fee, which works well at the small end. BEG puts a certified HR team behind you: custom handbook program, PayScale salary benchmarking, full leave administration guidance, and a dedicated HR Business Partner tier, all on the isolved platform.',
  ],
  [
    'Bambee publishes its prices. Does BEG?',
    'Bambee publishes plan pricing on its site, and that suits its audience. BEG shows you a number for your specific company instead: answer six questions and a monthly estimate appears on screen in about 90 seconds, confirmed exactly on a 15-minute call.',
  ],
  [
    'When does a company outgrow a flat-fee HR service?',
    'Common signals: your first multi-state hire, your first FMLA-qualifying leave, a manager problem that needs coaching rather than a policy document, or a compensation question that needs market data. Each of those pulls on depth that a lightweight service is not built to carry.',
  ],
  [
    'What platform does BEG HR outsourcing run on?',
    'The service is powered by isolved, the HCM platform behind thousands of American employers, which means the HR expertise sits on enterprise-grade payroll, HR, and compliance infrastructure rather than a standalone app.',
  ],
];

export default function BambeeAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Bambee Alternative: When You Need More HR Depth Than a Flat-Fee Plan',
            description: 'What Bambee does well for very small businesses, where the flat-fee model runs out of depth, and how BEG HR outsourcing, powered by isolved, compares.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/bambee-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'Bambee Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/bambee-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Outgrowing Bambee, or just need more HR depth than a flat plan?"
        description="BEG HR outsourcing, powered by isolved, upgrades a single HR manager to a certified HR team: custom handbook program, salary benchmarking, full leave administration, and a dedicated HR Business Partner tier."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* WHAT THEY DO WELL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Credit Where Due</p>
              <h2>What Bambee does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.bambee.com" target="_blank" rel="noopener noreferrer">Bambee</a> made real HR help accessible to businesses that previously had none at all. Its model pairs a very small company with a dedicated HR manager, backed by policy templates and its HR Autopilot workflows, at flat monthly plans it <a href="https://www.bambee.com/pricing" target="_blank" rel="noopener noreferrer">publishes on its site</a>. For a five-person shop whose HR strategy was previously a folder of downloaded forms, that is a meaningful upgrade at an accessible price.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Bambee is not a PEO, so there is no co-employment involved, and its published pricing means owners know the cost before anyone calls them. Both of those are things we respect. At the small end of the market, Bambee is a legitimate and useful product.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The comparison with BEG is not about structure or honesty. It is about how much HR weight the service can carry as your headcount, state footprint, and management layer grow.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where a flat-fee HR service runs out of depth</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                None of this is a knock on Bambee. A service priced for very small businesses is scoped for very small businesses; these are the places growing companies feel that scope.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'One HR manager, many clients', body: 'A lightweight service assigns one HR manager across a book of clients. As your questions shift from policy templates to live employee relations problems, you need a bench, not a single point of contact.' },
                { title: 'Templates meet their limits', body: 'Template-driven policies cover the basics well. Multi-state handbooks, industry-specific policies, and leave programs that layer state rules on FMLA need custom work maintained over time.' },
                { title: 'Compensation questions need data', body: 'Pay decisions at 30 or 50 employees need market benchmarks, not instinct. Salary benchmarking is a data product, and it is usually beyond the scope of an entry-level HR plan.' },
                { title: 'Leave administration gets real', body: 'Your first FMLA-qualifying leave, layered with a state paid leave program and an ADA accommodation question, is a process with deadlines and documentation, and it needs experienced hands end to end.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>BEG HR outsourcing vs. Bambee</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Bambee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'You do; Bambee is not a PEO either'],
                    ['Depth of service', 'Certified HR team plus HR Business Partner tier', 'Dedicated HR manager on a flat plan'],
                    ['Handbook', 'Custom program, maintained as laws change', 'Template-driven policies'],
                    ['Compensation data', 'PayScale salary benchmarking included', 'Not the focus of the plans'],
                    ['Leave administration', 'Guided end to end on upper plans', 'Lighter-touch guidance'],
                    ['Platform', 'isolved, enterprise-grade HCM', 'Bambee app'],
                    ['Pricing visibility', 'Instant estimate for your company, on screen', 'Published plan pricing on their site'],
                    ['Exit friction', 'Stop the service', 'Stop the service'],
                  ].map(([factor, beg, them], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHO SHOULD STAY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Honest Answer</p>
              <h2>Who should stay with Bambee</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you have a handful of employees in one state, no managers to coach, straightforward policies, and a budget where every dollar is contested, Bambee&apos;s published flat fee gets you real HR coverage where you might otherwise have none. That is exactly the job it was built for, and switching to a deeper service before you need the depth is spending money early.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The time to look at BEG is when the questions change: a second state, a first serious leave case, a manager who needs coaching, or a compensation decision that needs market data behind it.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>The next weight class of HR support</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, comes in three plans. Essential is live answers from certified HR professionals. Expert adds the custom handbook program, posters, new hire packets, PayScale salary benchmarks, and leave administration guidance. Elite adds a dedicated HR Business Partner with monthly check-ins and proactive compliance alerts. All of it costs a fraction of the $60K-$100K an in-house HR hire runs, with no co-employment at any tier. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Comparing PEOs too? Start with the <Link href="/services/hr-outsourcing/justworks-alternative">Justworks alternative</Link>, or read the full <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> breakdown.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Bambee alternatives, answered</h2>
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
