import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'TriNet Alternative: Industry HR Without Co-Employment | BEG',
  description: 'Considering TriNet? Get industry-aware HR outsourcing with no co-employment. Keep your benefits plans and your EIN. Instant estimate in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/trinet-alternative' },
  openGraph: {
    title: 'TriNet Alternative: Industry HR Without Co-Employment | BEG',
    description: 'Considering TriNet? Get industry-aware HR outsourcing with no co-employment. Keep your benefits plans and your EIN. Instant estimate in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/trinet-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'TriNet Alternative: Industry HR Without Co-Employment | BEG', description: 'Considering TriNet? Get industry-aware HR outsourcing with no co-employment. Keep your benefits plans and your EIN. Instant estimate in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-trinet-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO like TriNet?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company remains the sole employer, on your own EIN, with your own benefits plans.',
  ],
  [
    'Does BEG understand my industry the way TriNet claims to?',
    'BEG maintains dedicated HR outsourcing pages and playbooks for dozens of industries, from healthcare to construction to nonprofits, and the HR professionals behind the service work industry-specific compliance daily. Industry fluency does not require co-employment.',
  ],
  [
    'How does BEG pricing compare to TriNet pricing?',
    'TriNet pricing is quote-gated, so a sales process comes first. BEG shows a monthly estimate on screen after six questions, in about 90 seconds, then confirms exact pricing on a 15-minute call. We never quote a competitor dollar figure; theirs comes from them.',
  ],
  [
    'What happens to my benefits if I leave TriNet?',
    'PEO master plans belong to the PEO, so exiting means re-placing benefits under your own company. That is a real project and worth planning with your broker. Once you are on BEG, the problem never recurs, because your plans were never replaced in the first place.',
  ],
  [
    'What does BEG HR outsourcing include?',
    'Certified HR professionals on call, a custom handbook built and maintained as laws change, posters, new hire packets, leave administration guidance, and on the Elite plan a dedicated HR Business Partner with proactive compliance alerts. All powered by isolved, covering all 50 states.',
  ],
];

export default function TrinetAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'TriNet Alternative: Industry-Aware HR Without Co-Employment',
            description: 'What TriNet does well, where the vertical PEO model pinches, and how BEG HR outsourcing, powered by isolved, compares for growing companies.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/trinet-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'TriNet Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/trinet-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Drawn to TriNet's industry expertise, but not the PEO model?"
        description="BEG HR outsourcing, powered by isolved, brings industry-aware certified HR professionals to your company while you stay the only employer of your team. No co-employment, no employer-of-record change."
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
              <h2>What TriNet does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.trinet.com" target="_blank" rel="noopener noreferrer">TriNet</a> built its reputation by organizing the PEO model around industry verticals. Rather than one generic offering, it packages co-employment with vertical context for sectors like technology, life sciences, financial services, and nonprofits, so a venture-backed software company and a clinical-stage biotech are not handed the same playbook.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                That vertical framing is genuinely useful. Industry shapes HR risk: equity compensation questions in tech, grant-funded headcount in nonprofits, licensing in financial services. TriNet also brings the standard large-PEO advantages, including access to big-group benefits plans and bundled payroll and workers compensation administration under one arrangement.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The part worth separating is this: the industry expertise is the service, and the co-employment is the delivery mechanism. You can want the first without wanting the second.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where the vertical PEO model pinches</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                These are features of how every PEO works, TriNet included, not accusations. The mechanics are laid out in full on our <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> guide.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Co-employment comes standard', body: 'TriNet becomes the employer of record for tax and benefits administration. The industry expertise you are buying arrives wrapped in a shared employment relationship.' },
                { title: 'Your benefits plans get replaced', body: 'The big-group benefits access runs through the PEO master plans. Existing carriers, plan designs, and the broker who knows your history typically stay behind.' },
                { title: 'Quote-gated pricing', body: 'TriNet pricing follows a census-based sales process. There is no number on the website; the proposal comes after the conversations.' },
                { title: 'Exiting is a project', body: 'Leaving any PEO means re-establishing tax accounts, re-placing benefits, and untangling an integrated employment stack, which is why PEO relationships tend to persist by inertia.' },
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
              <h2>BEG HR outsourcing vs. TriNet</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TriNet</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'Co-employment: shared with the PEO'],
                    ['Benefits plans', 'Yours stay yours', 'Their master plans replace yours'],
                    ['Pricing visibility', 'Instant estimate on screen', 'Quote-gated'],
                    ['Industry fit', 'Industry playbooks, no employment change', 'Vertical packaging built on co-employment'],
                    ['Depth of service', 'Certified HR team, three plan tiers', 'Full PEO bundle'],
                    ['Platform', 'isolved', 'TriNet proprietary stack'],
                    ['Exit friction', 'Stop the service; nothing to unwind', 'Unwind co-employment and replace benefits'],
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
              <h2>Who should stay with TriNet</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you are a venture-backed company whose recruiting genuinely depends on big-company benefits, and your investors or board expect the simplicity of one employment vendor, a vertical PEO like TriNet is a defensible choice. The co-employment trade is real, but so is the benefits leverage for talent-competitive sectors.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Likewise, if your team is mid-plan-year on TriNet benefits, ride out the year and run the comparison at renewal rather than forcing a mid-stream disruption.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>Industry-aware HR, powered by isolved</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing comes in three plans. Essential is live answers from certified HR professionals. Expert adds the custom handbook, posters, new hire packets, and leave administration guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Industry context is built in: see the dedicated <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link> page for one example of how deep the vertical playbooks go. All of it costs a fraction of the $60K-$100K an in-house HR hire runs. Start at the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Comparing the whole PEO field? See the <Link href="/services/hr-outsourcing/adp-totalsource-alternative">ADP TotalSource alternative</Link> and the <Link href="/services/hr-outsourcing/paychex-peo-alternative">Paychex PEO alternative</Link>.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center', margin: 0 }}>
              PEO certification status is verifiable through the{' '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS Certified Professional Employer Organization program</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>TriNet alternatives, answered</h2>
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
