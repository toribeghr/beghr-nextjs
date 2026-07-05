import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'ADP TotalSource Alternative: HR Help, No Co-Employment | BEG',
  description: 'Weighing ADP TotalSource? BEG delivers certified HR expertise with no co-employment. You stay the employer. Instant estimate in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/adp-totalsource-alternative' },
  openGraph: {
    title: 'ADP TotalSource Alternative: HR Help, No Co-Employment | BEG',
    description: 'Weighing ADP TotalSource? BEG delivers certified HR expertise with no co-employment. You stay the employer. Instant estimate in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/adp-totalsource-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'ADP TotalSource Alternative: HR Help, No Co-Employment | BEG', description: 'Weighing ADP TotalSource? BEG delivers certified HR expertise with no co-employment. You stay the employer. Instant estimate in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-adp-totalsource-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO like ADP TotalSource?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company remains the sole employer, on your own EIN, with your own benefits plans.',
  ],
  [
    'What is the practical difference between a PEO and HR outsourcing?',
    'A PEO becomes a co-employer of your workforce and typically moves your team onto its benefits plans. HR outsourcing gives you certified HR professionals, a handbook, and compliance support while your legal employment structure stays exactly as it is. The full breakdown is on our PEO vs. HR outsourcing page.',
  ],
  [
    'Can BEG match the compliance depth of a large PEO?',
    'For the HR side, yes: certified HR professionals, a custom handbook maintained as laws change, leave administration, and proactive compliance alerts on the top plan, covering all 50 states. What BEG does not do is take over employment of your staff, because it does not need to.',
  ],
  [
    'How does BEG pricing compare to ADP TotalSource pricing?',
    'TotalSource pricing is quote-gated, so a sales conversation comes first. BEG shows you a monthly estimate on screen after six questions, in about 90 seconds, and confirms exact pricing on a 15-minute call. We never quote competitor prices; theirs come from them.',
  ],
  [
    'What happens to my benefits if I leave a PEO for BEG?',
    'Nothing has to happen, and that is the point. Because BEG is not a co-employer, your benefits plans, carriers, and broker relationships stay yours. If you are currently on PEO master plans, plan the transition timing with your broker before you exit.',
  ],
];

export default function AdpTotalsourceAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ADP TotalSource Alternative: HR Outsourcing Without Co-Employment',
            description: 'What ADP TotalSource does well, where the co-employment model pinches, and how BEG HR outsourcing, powered by isolved, compares for growing companies.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/adp-totalsource-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'ADP TotalSource Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/adp-totalsource-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Want what ADP TotalSource does, without becoming a co-employer?"
        description="BEG HR outsourcing, powered by isolved, gives you certified HR professionals, a custom handbook, and full compliance support while your company stays the sole employer. No co-employment, ever."
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
              <h2>What ADP TotalSource does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/products/adp-totalsource.aspx" target="_blank" rel="noopener noreferrer">ADP TotalSource</a> is one of the largest professional employer organizations in the country and an IRS-certified PEO. It sits on top of ADP&apos;s payroll infrastructure, which is about as battle-tested as payroll infrastructure gets, and it wraps HR support, benefits access, and workers compensation into a single co-employment arrangement.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                For companies that specifically want to hand over employer-side administration, TotalSource is a serious, credible option. The CPEO certification matters: it means the IRS holds TotalSource solely liable for the federal employment taxes it collects, which removes a real risk that exists with uncertified PEOs. The benefits access is real too, since a large PEO can offer plan options a 40-person company would struggle to source alone.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                None of that is in dispute. The question worth asking before you sign is a different one: do you actually want the co-employment structure that all of it is built on?
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where the co-employment model pinches</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                These are characteristics of the PEO model itself, not knocks on ADP. Every PEO works this way; it is the structure you are agreeing to. The full picture is on our <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> guide.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'You become a co-employer', body: 'In a PEO arrangement, the PEO becomes the employer of record for tax and benefits purposes. Your people are reported under its structure, and the employment relationship is legally shared.' },
                { title: 'Their benefits plans replace yours', body: 'The bundled benefits value comes from moving your team onto the PEO master plans. Carrier relationships, plan designs, and broker arrangements you have built typically do not come with you.' },
                { title: 'Exit friction is built in', body: 'Leaving a PEO means unwinding co-employment: new tax accounts, new benefits placement, mid-year W-2 considerations, and a transition project on top of running the business.' },
                { title: 'Pricing sits behind a quote', body: 'TotalSource pricing is quote-gated. You talk to sales, share your census, and wait for a proposal. That is normal for large PEOs; it just means you cannot see a number before the conversation.' },
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
              <h2>BEG HR outsourcing vs. ADP TotalSource</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP TotalSource</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'Co-employment: shared with the PEO'],
                    ['Benefits plans', 'Yours stay yours', 'Their master plans replace yours'],
                    ['Pricing visibility', 'Instant estimate on screen', 'Quote-gated'],
                    ['Depth of service', 'Certified HR team, three plan tiers', 'Deep, bundled into the PEO relationship'],
                    ['Platform', 'isolved', 'ADP proprietary stack'],
                    ['Scope', 'HR support; payroll optional and separate', 'HR, payroll, and benefits bundled together'],
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
              <h2>Who should stay with ADP TotalSource</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If your top priority is benefits leverage and you genuinely want to stop being the employer of record for administrative purposes, a certified PEO is the right tool, and TotalSource is one of the strongest versions of that tool. Companies with thin back offices that want one vendor legally on the hook for employment tax remittance get real value from the CPEO structure.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Stay put, too, if you are mid-plan-year on PEO benefits your team loves and a disruption would cost you more in goodwill than the model costs you in flexibility. The time to reconsider is at renewal, with your broker in the room.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>The expertise without the co-employment contract</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, puts certified HR professionals behind your company in three plans. Essential is live HR answers on demand. Expert adds the done-for-you assets: custom handbook, posters, new hire packets, and leave administration guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. All of it for a fraction of the $60K-$100K an in-house HR hire runs, and none of it requires changing who employs your team. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Comparing more than one PEO? See how BEG stacks up against <Link href="/services/hr-outsourcing/insperity-alternative">Insperity</Link> and <Link href="/services/hr-outsourcing/trinet-alternative">TriNet</Link> as well.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>ADP TotalSource alternatives, answered</h2>
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
