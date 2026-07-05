import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Vensure Alternative: HR Outsourcing, No Co-Employment | BEG',
  description: 'Comparing Vensure alternatives? Get HR outsourcing without co-employment or bundled benefits. Keep your EIN. Instant estimate in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/vensure-alternative' },
  openGraph: {
    title: 'Vensure Alternative: HR Outsourcing, No Co-Employment | BEG',
    description: 'Comparing Vensure alternatives? Get HR outsourcing without co-employment or bundled benefits. Keep your EIN. Instant estimate in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/vensure-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Vensure Alternative: HR Outsourcing, No Co-Employment | BEG', description: 'Comparing Vensure alternatives? Get HR outsourcing without co-employment or bundled benefits. Keep your EIN. Instant estimate in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-vensure-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO like Vensure?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company stays the sole employer, on your own EIN, with your own benefits plans.',
  ],
  [
    'What is Vensure, exactly?',
    'Vensure operates as a large PEO holding group, running co-employment through a family of PEO brands under one ownership structure. Whichever brand a client lands in, the underlying model is the same: shared employment and bundled master-plan benefits.',
  ],
  [
    'Can I get HR support without joining a PEO group like Vensure?',
    'That is exactly what HR outsourcing is. BEG puts certified HR professionals, a custom handbook program, leave administration, and on the top plan a dedicated HR Business Partner behind your company, while your legal employment structure stays untouched.',
  ],
  [
    'How does BEG pricing compare to Vensure pricing?',
    'Vensure pricing is quote-gated, so a sales conversation comes first. BEG shows a monthly estimate on screen after six questions, in about 90 seconds, then confirms exact pricing on a 15-minute call. We never quote a competitor dollar figure; theirs comes from them.',
  ],
  [
    'What happens to benefits when leaving a PEO group like Vensure?',
    'Because the PEO master plans belong to the PEO brand you were placed with, exiting means placing benefits on your own again. With BEG that problem never recurs: your plans, carriers, and broker stay yours from day one, so there is nothing to unwind later.',
  ],
];

export default function VensureAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Vensure Alternative: HR Outsourcing Without the PEO Contract',
            description: 'What the Vensure PEO group does well, where its co-employment model pinches, and how BEG HR outsourcing, powered by isolved, compares for growing companies.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/vensure-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'Vensure Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/vensure-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Considering Vensure, but not ready for a PEO group?"
        description="BEG HR outsourcing, powered by isolved, delivers certified HR professionals, a custom handbook, and a dedicated HR Business Partner tier while your company stays the only employer of your team."
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
              <h2>What Vensure does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.vensure.com" target="_blank" rel="noopener noreferrer">Vensure</a> has grown into one of the largest PEO holding groups in the country, operating co-employment through a portfolio of PEO brands under one ownership umbrella. That scale gives it real purchasing leverage for master-plan benefits and back-office infrastructure that a standalone PEO would struggle to match.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                For a company that wants the co-employment structure, bundled benefits, and workers compensation folded into a single vendor relationship, a Vensure-affiliated PEO is a well-resourced version of that model, backed by group scale most independents cannot replicate.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The honest question is not whether the Vensure group runs a capable PEO operation. It is whether what it does, co-employment through one of its brands, is the structure your company actually needs to get great HR.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where the PEO group model pinches</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                These are traits of the co-employment model, not criticisms of Vensure specifically. Our <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> guide walks through the mechanics in full.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'The employment relationship is shared', body: 'A PEO becomes the employer of record for tax and benefits purposes. Your people are administered under its structure, and that legal sharing is the foundation of everything else in the bundle.' },
                { title: 'Benefits move to their plans', body: 'The bundled benefits access runs through the PEO master plans of whichever affiliated brand you land in. Your existing carriers, plan designs, and broker relationships generally do not survive the transition in.' },
                { title: 'A group of brands, one underlying model', body: 'Because Vensure operates through many PEO brands, the client-facing name can differ from account to account while the co-employment mechanics underneath stay the same.' },
                { title: 'Pricing is quote-gated', body: 'PEO pricing arrives after a sales process built around your census and risk profile. That is standard across the industry; it also means no number before the meeting.' },
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
              <h2>BEG HR outsourcing vs. Vensure</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Vensure</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'Co-employment: shared with the PEO'],
                    ['Benefits plans', 'Yours stay yours', 'Their master plans replace yours'],
                    ['Pricing visibility', 'Instant estimate on screen', 'Quote-gated'],
                    ['Structure', 'One direct HR outsourcing relationship', 'PEO group operating through many affiliated brands'],
                    ['Platform', 'isolved', 'Varies by affiliated PEO brand'],
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
              <h2>Who should stay with Vensure</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If bundled benefits access through group scale is the deciding factor for recruiting in your market, and your team is already happily enrolled in the plans of your Vensure-affiliated PEO, the co-employment trade may be worth it to you. Companies that consciously want a co-employer, with the shared employment administration that entails, are that market, and the group serves it at scale.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                It also makes sense to stay through your current plan year rather than disrupt benefits mid-stream. Revisit the model at renewal, when a clean comparison is possible.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>Real HR depth, no employment wrapper</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, comes in three plans. Essential is live answers from certified HR professionals. Expert adds the done-for-you compliance assets: custom handbook, posters, new hire packets, and leave administration guidance, plus support for talent acquisition and direct hire needs as you grow. Elite adds a dedicated HR Business Partner with monthly check-ins and proactive compliance alerts. All for a fraction of the $60K-$100K an in-house HR hire costs. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Also weighing the other big PEOs? See the <Link href="/services/hr-outsourcing/insperity-alternative">Insperity alternative</Link> and the <Link href="/services/hr-outsourcing/paychex-peo-alternative">Paychex PEO alternative</Link>.
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
              <h2>Vensure alternatives, answered</h2>
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
