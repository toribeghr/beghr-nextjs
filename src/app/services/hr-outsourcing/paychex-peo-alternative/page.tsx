import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Paychex PEO Alternative: Keep Payroll, Skip the PEO | BEG',
  description: 'Looking past Paychex PEO? BEG pairs certified HR expertise with no co-employment. Keep your own benefits plans. Instant estimate in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/paychex-peo-alternative' },
  openGraph: {
    title: 'Paychex PEO Alternative: Keep Payroll, Skip the PEO | BEG',
    description: 'Looking past Paychex PEO? BEG pairs certified HR expertise with no co-employment. Keep your own benefits plans. Instant estimate in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/paychex-peo-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Paychex PEO Alternative: Keep Payroll, Skip the PEO | BEG', description: 'Looking past Paychex PEO? BEG pairs certified HR expertise with no co-employment. Keep your own benefits plans. Instant estimate in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-paychex-peo-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO like Paychex PEO?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company remains the sole employer, on your own EIN, with your own benefits plans.',
  ],
  [
    'Can I get payroll and HR together without a PEO?',
    'Yes. BEG offers HR outsourcing and fully managed payroll as separate services you can combine, both powered by isolved. You get the bundled convenience without either service requiring co-employment.',
  ],
  [
    'How does BEG pricing compare to Paychex PEO pricing?',
    'Paychex PEO pricing is quote-gated, so a sales process comes first. BEG shows a monthly estimate on screen after six questions, in about 90 seconds, then confirms exact pricing on a 15-minute call. We never quote a competitor dollar figure; theirs comes from them.',
  ],
  [
    'What is the difference between Paychex payroll and Paychex PEO?',
    'Paychex sells payroll software and services without co-employment, and separately sells a PEO product where co-employment is the structure. If you are being pitched the PEO, the employer-of-record change is part of the deal, so it is worth being clear which product is on the table.',
  ],
  [
    'What happens to my benefits if I leave a PEO?',
    'PEO master plans belong to the PEO, so exiting means placing benefits under your own company again, ideally timed to your plan year with your broker involved. With BEG that unwinding never comes up, because your plans were never replaced.',
  ],
];

export default function PaychexPeoAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Paychex PEO Alternative: Payroll and HR Without Co-Employment',
            description: 'What Paychex PEO does well, where the bundled co-employment model pinches, and how BEG HR outsourcing, powered by isolved, compares.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/paychex-peo-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'Paychex PEO Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/paychex-peo-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Want payroll and HR handled together, without co-employing your team?"
        description="BEG pairs HR outsourcing with fully managed payroll, both powered by isolved, while your company stays the only employer. The bundle exists; the co-employment requirement does not."
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
              <h2>What Paychex PEO does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.paychex.com/peo" target="_blank" rel="noopener noreferrer">Paychex PEO</a> combines two things Paychex is legitimately good at: mature payroll processing infrastructure and small-business HR administration, delivered through a co-employment arrangement. For an owner who wants payroll, HR support, benefits access, and workers compensation from one vendor, the bundle is the sales pitch, and it is a coherent one.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Paychex has decades of payroll operations behind it and a large service footprint, so the mechanical parts of the offering, the pay runs, the tax filings, the benefits administration, sit on proven rails. As with other large PEOs, the co-employment structure also brings access to bigger-group benefits plans than many small companies could source independently.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The question the bundle quietly answers for you, though, is a structural one: to get payroll and HR from Paychex in this package, your company enters co-employment. That deserves its own decision, not a default.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where the bundled PEO model pinches</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                These are characteristics of co-employment itself, common to every PEO. The full mechanics are on our <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> guide.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'The PEO becomes employer of record', body: 'Co-employment means your people are administered under the PEO structure for tax and benefits purposes. The convenience of the bundle is purchased with a shared employment relationship.' },
                { title: 'Benefits shift to their plans', body: 'The benefits access runs through PEO master plans. Your existing carriers, plan designs, and broker relationship typically do not make the trip.' },
                { title: 'The bundle deepens over time', body: 'When payroll, HR, benefits, and workers compensation all live inside one co-employment arrangement, every year makes the arrangement harder to leave, whatever the service quality.' },
                { title: 'Pricing is quote-gated', body: 'Paychex PEO pricing follows a census-based sales process rather than a published rate. No number appears before the conversation does.' },
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
              <h2>BEG HR outsourcing vs. Paychex PEO</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Paychex PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'Co-employment: shared with the PEO'],
                    ['Benefits plans', 'Yours stay yours', 'Their master plans replace yours'],
                    ['Pricing visibility', 'Instant estimate on screen', 'Quote-gated'],
                    ['Payroll', 'Optional managed payroll, separate service', 'Bundled inside the co-employment'],
                    ['Depth of service', 'Certified HR team, three plan tiers', 'Full PEO bundle'],
                    ['Platform', 'isolved', 'Paychex Flex'],
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
              <h2>Who should stay with Paychex PEO</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you deliberately chose co-employment because you want one vendor administering employment end to end, and the benefits access is doing real recruiting work for you, Paychex PEO is a reasonable place to be. The same logic applies if your workers compensation situation is materially better inside the PEO arrangement than you could obtain on your own.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                And as with any PEO, if your team is mid-plan-year on its benefits, plan the comparison around renewal instead of disrupting coverage mid-stream.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>The bundle, unbundled: HR and payroll without co-employment</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, comes in three plans: Essential for live HR answers on demand, Expert for the done-for-you handbook, posters, new hire packets, and leave administration guidance, and Elite for a dedicated HR Business Partner with proactive compliance alerts. Pair it with <Link href="/services/managed-payroll">fully managed payroll</Link> if you want the one-vendor convenience, and you still stay the sole employer. The whole stack costs a fraction of the $60K-$100K an in-house HR hire runs. Start at the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Shopping the wider PEO market? See the <Link href="/services/hr-outsourcing/trinet-alternative">TriNet alternative</Link> and the <Link href="/services/hr-outsourcing/justworks-alternative">Justworks alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Paychex PEO alternatives, answered</h2>
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
