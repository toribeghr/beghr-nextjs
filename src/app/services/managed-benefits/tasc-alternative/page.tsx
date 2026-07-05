import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'TASC Alternative | Instant Benefits Estimate | BEG',
  description: 'BEG Managed Benefits, powered by isolved: a TASC alternative with enrollment run for you, an instant on-screen estimate, and payroll on the same platform.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/tasc-alternative' },
  openGraph: {
    title: 'TASC Alternative | Instant Benefits Estimate | BEG',
    description: 'BEG Managed Benefits, powered by isolved: a TASC alternative with enrollment run for you, an instant on-screen estimate, and payroll on the same platform.',
    url: 'https://www.beghr.com/services/managed-benefits/tasc-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'TASC Alternative | Instant Benefits Estimate | BEG', description: 'BEG Managed Benefits, powered by isolved: a TASC alternative with enrollment run for you, an instant on-screen estimate, and payroll on the same platform.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-tasc-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO?',
    'No. BEG Managed Benefits, powered by isolved, administers the benefit plans you and your broker already chose. There is no co-employment and your company stays the employer. TASC is not a PEO either; it is a third-party administrator. The comparison is about what sits at the center of each service.',
  ],
  [
    'How is BEG different from TASC?',
    'TASC is a third-party administrator whose center of gravity is benefit accounts: FSA, HSA, HRA, lifestyle, commuter, and dozens more on its Universal Benefit Account, plus COBRA and compliance services. BEG Managed Benefits, powered by isolved, centers on running your core benefits administration: enrollment, life events, carrier data, ACA compliance, with a dedicated team on the top plan and payroll on the same platform.',
  ],
  [
    'Does TASC publish pricing?',
    'TASC routes prospective clients to a request-a-proposal form, so pricing is quote-gated. BEG shows a monthly estimate for your company on screen in about 90 seconds, then confirms exact pricing on a 15-minute call.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you, negotiating renewals, and placing coverage. BEG Managed Benefits handles the administration behind those plans. Brokers usually welcome having the operational load owned by someone accountable for it.',
  ],
  [
    'What platform does BEG Managed Benefits run on?',
    'The service is powered by isolved, the HCM platform behind thousands of American employers. Benefits and payroll live on the same data, so deductions, eligibility, and ACA hours tracking stay in sync instead of drifting across systems.',
  ],
];

export default function TascAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'TASC Alternative: When You Need the Administration Run, Not Just Accounts Managed',
            description: 'What TASC does well as a third-party administrator, where the account-centered model leaves work on your desk, and how BEG Managed Benefits, powered by isolved, compares.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/managed-benefits/tasc-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'TASC Alternative', item: 'https://www.beghr.com/services/managed-benefits/tasc-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Alternatives"
        title="Comparing TASC, but what you really need is the administration off your desk?"
        description="TASC is an account powerhouse. BEG Managed Benefits, powered by isolved, is a done-for-you administration service: enrollment, life events, carrier data, and ACA compliance run by a dedicated team, with a real monthly estimate on screen before anyone calls you."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* WHAT THEY DO WELL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Credit Where Due</p>
              <h2>What TASC does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.tasconline.com/about-tasc/" target="_blank" rel="noopener noreferrer">TASC</a> describes itself as the nation&apos;s largest privately held third-party benefits administrator, with more than 50 years of history and 80,000-plus clients. Its signature product, the <a href="https://www.tasconline.com/products" target="_blank" rel="noopener noreferrer">Universal Benefit Account</a>, puts over 50 benefit account types, FSA, HSA, HRA, ICHRA, lifestyle, commuter, education, and more, on one portal, one mobile app, and one card. Its <a href="https://www.tasconline.com/continuation/" target="_blank" rel="noopener noreferrer">COBRA and continuation administration</a> and <a href="https://www.tasconline.com/compliance/" target="_blank" rel="noopener noreferrer">compliance services</a> covering ERISA, ACA reporting, FMLA, HIPAA, and non-discrimination testing are genuinely deep.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If your benefits strategy leans on rich reimbursement accounts, an employer that wants to offer pet care accounts next to an HSA next to a student loan benefit, TASC&apos;s one-card universe is a real differentiator, and its 50-year compliance pedigree is earned.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The comparison with BEG is about center of gravity: accounts and continuation on one side, the day-to-day running of your core benefits administration on the other.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE FIT PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where an account-centered TPA leaves work on your desk</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                None of this is a knock on TASC. A TPA built around benefit accounts is excellent at benefit accounts; these are the jobs that model was never meant to own.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Accounts are the center of gravity', body: 'TASC’s universe revolves around reimbursement and continuation accounts. Running your core medical, dental, and vision administration, enrollment, life events, carrier updates, is a different job, and at most SMBs that job still lands on one internal desk.' },
                { title: 'Open enrollment is still your project', body: 'Account platforms light up after elections are made. The messy part, chasing employees through enrollment, fixing data, syncing deductions to payroll, is the part that eats your Q4, and it needs an owner, not another portal.' },
                { title: 'Pricing is proposal-gated', body: 'TASC’s path to pricing runs through a request-a-proposal form. That is standard for the TPA category, but it means you cannot compare costs without entering a sales process.' },
                { title: 'Two systems, one payroll problem', body: 'Benefit elections have to land in payroll as correct deductions every cycle. When accounts, administration, and payroll live in separate systems, reconciliation becomes a monthly ritual that quietly consumes hours.' },
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
              <h2>BEG Managed Benefits vs. TASC</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TASC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Center of gravity', 'Core benefits administration, run for you', 'Benefit accounts: FSA, HSA, HRA, lifestyle, and more'],
                    ['Who does the admin work', 'Dedicated specialist and auditing analyst on the top plan', 'TASC administers accounts; core enrollment often stays with your team'],
                    ['Pricing visibility', 'Instant on-screen estimate, no demo gate', 'Request-a-proposal form'],
                    ['Your broker', 'Stays; we administer the plans they place', 'Works through distributors, including brokers'],
                    ['ACA reporting', 'Tracked and produced on the ACA plan', 'Offered as an ACA employer reporting service'],
                    ['COBRA', 'Support scoped exactly on your discovery call', 'A core TASC continuation strength'],
                    ['Payroll connection', 'Same platform as BEG managed payroll', 'Payroll Plus, a separate TASC offering'],
                    ['Getting started', '15-minute call after your estimate', 'Proposal, then implementation'],
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
              <h2>When TASC is the right choice</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If reimbursement accounts are the heart of your benefits strategy, a broad lifestyle and fringe account program, ICHRA administration, an AgriPlan or BizPlan arrangement for a farm or small family business, or heavy COBRA and state continuation volume, TASC is one of the strongest specialists in the country, and its Universal Benefit Account genuinely simplifies a many-account program down to one card and one portal. An employer whose internal team happily runs core enrollment and just needs the accounts administered expertly should shortlist TASC without hesitation.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The time to look at BEG is when the accounts are not the problem, the administration is: when enrollment season, carrier updates, and ACA filings all route through one overloaded desk and what you need is a team that owns that work.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>The administration itself, done for you</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, comes in three plans: benefits admin software your team drives, software plus ACA compliance with Forms 1094-C and 1095-C produced for you, and Fully Managed, where a dedicated Managed Benefits Specialist runs enrollment and changes while a Benefits Auditing Analyst checks your data for costly errors. Your broker stays, your plans stay, and payroll can run on the same platform so deductions stop breaking. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Weighing the enterprise administrators too? See the <Link href="/services/managed-benefits/wex-alternative">WEX benefits alternative</Link> and the <Link href="/services/managed-benefits/businessolver-alternative">Businessolver alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>TASC alternatives, answered</h2>
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
        {/* AUTHORITY SOURCES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center', lineHeight: 1.7, margin: 0 }}>
              Compliance references: <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a> and <a href="https://www.irs.gov/affordable-care-act/employers/information-reporting-by-applicable-large-employers" target="_blank" rel="noopener noreferrer">IRS ACA employer information reporting</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
