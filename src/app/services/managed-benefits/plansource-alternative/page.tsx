import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'PlanSource Alternative | Instant Benefits Estimate | BEG',
  description: 'BEG Managed Benefits, powered by isolved: a PlanSource alternative that does the admin work for you. Your broker stays. Instant on-screen estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/plansource-alternative' },
  openGraph: {
    title: 'PlanSource Alternative | Instant Benefits Estimate | BEG',
    description: 'BEG Managed Benefits, powered by isolved: a PlanSource alternative that does the admin work for you. Your broker stays. Instant on-screen estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/plansource-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'PlanSource Alternative | Instant Benefits Estimate | BEG', description: 'BEG Managed Benefits, powered by isolved: a PlanSource alternative that does the admin work for you. Your broker stays. Instant on-screen estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-plansource-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG replacing our broker or PlanSource?',
    'Not your broker, ever. Your broker keeps advising you, negotiating renewals, and placing coverage regardless of which administration system sits behind the plans. What BEG Managed Benefits, powered by isolved, changes is who carries the administrative work: a dedicated team runs it instead of your HR person running it inside software.',
  ],
  [
    'How is BEG different from PlanSource?',
    'PlanSource is a benefits administration platform that blends its software with human guidance, reaching many employers through brokers and reseller partners. BEG Managed Benefits is a done-for-you service for small and mid-sized employers: on the Fully Managed plan, a dedicated Managed Benefits Specialist runs enrollment, life events, and carrier updates, and a Benefits Auditing Analyst checks your data, with payroll available on the same platform.',
  ],
  [
    'Does PlanSource publish pricing?',
    'No. PlanSource routes prospective clients to a request-a-demo conversation, and many employers receive it through a broker or reseller who packages it with their own services. BEG shows employers a monthly estimate on screen in about 90 seconds, then confirms exact pricing on a 15-minute call.',
  ],
  [
    'We like the PlanSource platform. Is this an either-or decision?',
    'The real decision is about who does the work, not which logo is on the software. If your team runs benefits comfortably in the platform your broker or reseller provides, keep that setup. If the hours are the problem, a managed service moves the work itself, and that is the comparison worth pricing.',
  ],
  [
    'What platform does BEG Managed Benefits run on?',
    'The service is powered by isolved, the HCM platform behind thousands of American employers. Benefits and payroll live on the same data, so deductions, eligibility, and ACA hours tracking stay in sync instead of drifting across systems.',
  ],
];

export default function PlansourceAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'PlanSource Alternative: When the Platform Is Fine but the Work Still Needs Doing',
            description: 'What PlanSource does well as a benefits administration platform, how the broker and reseller channel works, and how BEG Managed Benefits, powered by isolved, moves the administrative work itself while your broker stays.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/managed-benefits/plansource-alternative',
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'PlanSource Alternative', item: 'https://www.beghr.com/services/managed-benefits/plansource-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Alternatives"
        title="PlanSource organizes the benefits work. Someone still has to do it."
        description="PlanSource builds a capable platform, often delivered through the broker you already trust. BEG Managed Benefits, powered by isolved, is the other model: a dedicated team does the administration for you, your broker stays, and your monthly estimate is on screen in about 90 seconds."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'Your broker stays, always' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* WHAT THEY DO WELL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Credit Where Due</p>
              <h2>What PlanSource does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://plansource.com/" target="_blank" rel="noopener noreferrer">PlanSource</a> positions itself as a complete benefits administration partner, blending its <a href="https://plansource.com/platform-services/" target="_blank" rel="noopener noreferrer">platform and services</a> with what it calls steady human guidance. It serves HR and benefits leaders directly, maintains carrier partnerships for cleaner data connections, and reaches a large share of its market through <a href="https://plansource.com/reseller-partners/" target="_blank" rel="noopener noreferrer">reseller partners</a>, including brokers who package the platform with their own client service.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                That channel is a strength, not a caveat. A broker or reseller who brings you PlanSource is bringing you established enrollment technology with carrier connections behind it, and the company&apos;s stated emphasis on service and employee experience is the right emphasis for this category.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The comparison with BEG is about where the day-to-day administrative work lands. However capable the platform, a platform organizes work. The question for a small HR team is who performs it.
              </p>
            </div>
          </div>
        </section>

        {/* THE REAL QUESTION */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Question</p>
              <h2>Where the work lands when you buy a platform</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                None of this is a flaw in PlanSource. It is the nature of the software model, whichever vendor builds the software.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Day-to-day ownership usually stays with you', body: 'How much support you get depends on the package your reseller or contract builds. In most configurations, the daily work, enrollments, life events, data fixes, deduction syncs, still belongs to your team inside the tool.' },
                { title: 'Configurability has a weight', body: 'PlanSource is built to be configured for mid-sized and large employers with varied plan designs. That flexibility is valuable at scale and simply overhead for a company with two medical plans and forty employees.' },
                { title: 'The demo comes before the number', body: 'There is no published pricing; the path runs through a request-a-demo conversation, often mediated by the reseller. That is a normal channel motion, but it slows a small employer trying to compare real costs before enrollment season.' },
                { title: 'Payroll is still a second system', body: 'Elections have to become correct payroll deductions every cycle. When benefits software and payroll live in different systems, the reconciliation gap between them is where errors, and hours, accumulate.' },
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
              <h2>BEG Managed Benefits vs. PlanSource</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PlanSource</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['What it is', 'A managed service on the isolved platform', 'A benefits administration platform with services'],
                    ['Who does the admin work', 'A dedicated team on the Fully Managed plan', 'Typically your team in the platform; service scope varies by package'],
                    ['Your broker', 'Stays; we work alongside them', 'Stays; often the reseller providing the platform'],
                    ['Built for', 'SMBs, roughly 25 to 500 employees', 'Mid-sized and larger employers, plus channel partners'],
                    ['ACA reporting', 'Tracked and produced for you', 'Platform capabilities your team or package operates'],
                    ['Pricing visibility', 'Instant on-screen estimate for employers', 'Request-a-demo; no published pricing'],
                    ['Payroll connection', 'Same platform as BEG managed payroll', 'Integrations to your payroll vendor'],
                    ['Getting started', '15-minute call after your estimate', 'Demo and scoping, often through your reseller'],
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
              <h2>When PlanSource is the right choice</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you are a mid-sized or larger employer with an internal owner for benefits administration, a broker or reseller you trust who packages PlanSource with real support, and plan designs that benefit from a deeply configurable platform, PlanSource is a solid, mainstream choice. Its carrier partnerships mean cleaner data flowing to and from your plans, and receiving the platform through a reseller who knows your account can be genuinely convenient. In that setup, the work has an owner, the tool is proven, and there is nothing broken for BEG to fix.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The time to look at BEG is when there is no internal owner to hand the platform to: when benefits administration is a side duty crushing your HR person, and what you need is the work performed, not better organized.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>The work performed, not just organized</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, comes in three plans: benefits admin software your team drives, software plus ACA compliance with Forms 1094-C and 1095-C produced for you, and Fully Managed, where a dedicated Managed Benefits Specialist runs enrollment and changes while a Benefits Auditing Analyst checks your data for costly errors. Your broker keeps advising and placing coverage exactly as before, and payroll can run on the same platform so deductions stop breaking. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Weighing the rest of the field? See the <Link href="/services/managed-benefits/employee-navigator-alternative">Employee Navigator alternative</Link> and the <Link href="/services/managed-benefits/businessolver-alternative">Businessolver alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>PlanSource alternatives, answered</h2>
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
