import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Justworks Alternative: No Co-Employment, Keep Your Plans | BEG',
  description: 'Like Justworks but want to stay the employer? BEG HR outsourcing keeps your EIN and benefits plans intact. Instant estimate on screen in 90 seconds.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/justworks-alternative' },
  openGraph: {
    title: 'Justworks Alternative: No Co-Employment, Keep Your Plans | BEG',
    description: 'Like Justworks but want to stay the employer? BEG HR outsourcing keeps your EIN and benefits plans intact. Instant estimate on screen in 90 seconds.',
    url: 'https://www.beghr.com/services/hr-outsourcing/justworks-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Justworks Alternative: No Co-Employment, Keep Your Plans | BEG', description: 'Like Justworks but want to stay the employer? BEG HR outsourcing keeps your EIN and benefits plans intact. Instant estimate on screen in 90 seconds.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-justworks-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO like Justworks?',
    'No. BEG is HR outsourcing, powered by isolved. There is no co-employment and no employer-of-record change. Your company remains the sole employer, on your own EIN, with your own benefits plans.',
  ],
  [
    'Justworks publishes its pricing. Does BEG?',
    'Justworks publishes per-employee rates on its site, and credit to them for that. BEG goes a step further for your specific situation: answer six questions and a monthly estimate for your company appears on screen in about 90 seconds, confirmed exactly on a 15-minute call.',
  ],
  [
    'If transparency is not the difference, what is?',
    'Structure. Justworks delivers its flagship product through co-employment, which changes who administers your team and moves benefits onto its plans. BEG delivers HR expertise as a service, leaving your employment structure and benefits plans exactly where they are.',
  ],
  [
    'Can I keep my current benefits plans with BEG?',
    'Yes, and that is the point. Because BEG is not a co-employer, your carriers, plan designs, and broker relationship stay untouched. BEG handles the HR side: handbook, compliance, leave administration, and manager support.',
  ],
  [
    'What does leaving a PEO like Justworks involve?',
    'Exiting co-employment means re-establishing payroll tax accounts under your own company and re-placing benefits, ideally timed to your plan year. It is manageable with planning, but it is a project. Leaving BEG, by contrast, is simply ending a service.',
  ],
];

export default function JustworksAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Justworks Alternative: HR Support Without Co-Employment',
            description: 'What Justworks does well, including its published pricing, where the co-employment model pinches, and how BEG HR outsourcing, powered by isolved, compares.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/hr-outsourcing/justworks-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'Justworks Alternative', item: 'https://www.beghr.com/services/hr-outsourcing/justworks-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Alternatives"
        title="Like Justworks, but want to stay the only employer of your team?"
        description="BEG HR outsourcing, powered by isolved, delivers certified HR professionals and full compliance support while your company keeps its own EIN, benefits plans, and employment structure intact."
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
              <h2>What Justworks does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.justworks.com" target="_blank" rel="noopener noreferrer">Justworks</a> deserves real credit for doing what most of the PEO industry refuses to do: it <a href="https://www.justworks.com/pricing" target="_blank" rel="noopener noreferrer">publishes per-employee pricing on its site</a>. In a category where the standard answer is a sales call and a census request, that openness is genuinely rare, and Justworks built a loyal small-business following on it.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The product is clean, too. The platform is known for being simple and pleasant to use, and the co-employment arrangement gives small teams access to larger-group benefits plans they would struggle to source alone. For startups that want a modern interface and predictable published rates, Justworks earns its reputation.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                So the difference between Justworks and BEG is not transparency. It is structure: Justworks delivers its flagship product through co-employment, and BEG never does.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE MODEL PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where the model pinches, even with published pricing</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Transparent rates do not change the underlying structure. These are traits of co-employment itself, explained in full on our <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs. HR outsourcing</Link> guide.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Co-employment is still the product', body: 'The flagship Justworks offering is a PEO arrangement: Justworks becomes the employer of record for tax and benefits administration, and the employment relationship is legally shared.' },
                { title: 'Benefits run through their plans', body: 'The benefits value comes from enrolling your team in plans accessed through Justworks. Carriers you chose, plan designs you negotiated, and your broker relationship typically stay behind.' },
                { title: 'Your history lives in their structure', body: 'Payroll records, tax filings, and benefits enrollment all accrue inside the co-employment arrangement, which is precisely what makes exiting more than a cancellation.' },
                { title: 'Leaving means unwinding', body: 'Ending a PEO relationship means new payroll tax accounts under your own EIN and a benefits re-placement project, ideally timed to plan year boundaries.' },
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
              <h2>BEG HR outsourcing vs. Justworks</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Justworks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do, always', 'Co-employment: shared with the PEO'],
                    ['Benefits plans', 'Yours stay yours', 'Plans accessed through Justworks replace yours'],
                    ['Pricing visibility', 'Instant estimate for your company, on screen', 'Published per-employee rates on their site'],
                    ['Depth of service', 'Certified HR team, dedicated partner tier', 'Platform-first with support included'],
                    ['Platform', 'isolved', 'Justworks proprietary platform'],
                    ['Exit friction', 'Stop the service; nothing to unwind', 'Unwind co-employment and re-place benefits'],
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
              <h2>Who should stay with Justworks</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you are an early-stage team with no existing benefits infrastructure, no broker relationship worth protecting, and a genuine need for group benefits access right now, the Justworks co-employment package solves several problems at once, at rates you can read before you talk to anyone. That is a fair deal for the right company.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Stay put as well if your team is happily enrolled mid-plan-year. The sensible moment to weigh HR outsourcing against the PEO model is at renewal, when benefits can move without disruption.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>Your EIN, your plans, our HR team</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, comes in three plans. Essential is live answers from certified HR professionals. Expert adds the custom handbook, posters, new hire packets, and leave administration guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Your company stays the sole employer throughout, and the whole service runs a fraction of the $60K-$100K an in-house HR hire costs. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              At the smaller end and comparing flat-fee HR services instead? See the <Link href="/services/hr-outsourcing/bambee-alternative">Bambee alternative</Link>. Weighing premium PEOs too? See the <Link href="/services/hr-outsourcing/insperity-alternative">Insperity alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Justworks alternatives, answered</h2>
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
