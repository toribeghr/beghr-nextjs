import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'WEX Benefits Alternative | Instant Estimate | BEG',
  description: 'BEG Managed Benefits, powered by isolved: a WEX benefits alternative with a dedicated team at SMB scale, instant on-screen estimate, and no demo gate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/wex-alternative' },
  openGraph: {
    title: 'WEX Benefits Alternative | Instant Estimate | BEG',
    description: 'BEG Managed Benefits, powered by isolved: a WEX benefits alternative with a dedicated team at SMB scale, instant on-screen estimate, and no demo gate.',
    url: 'https://www.beghr.com/services/managed-benefits/wex-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'WEX Benefits Alternative | Instant Estimate | BEG', description: 'BEG Managed Benefits, powered by isolved: a WEX benefits alternative with a dedicated team at SMB scale, instant on-screen estimate, and no demo gate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-wex-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG a PEO?',
    'No. BEG Managed Benefits, powered by isolved, administers the benefit plans you and your broker already chose. There is no co-employment, your company stays the employer, and your coverage stays yours. WEX is not a PEO either; the comparison is about scale and buying experience, not structure.',
  ],
  [
    'How is BEG different from WEX benefits administration?',
    'WEX is a global commerce platform whose benefits arm serves employers up to the Fortune 1000, plus health plans and third-party administrators. BEG Managed Benefits, powered by isolved, is a managed service scoped for small and mid-sized employers: a dedicated specialist and auditing analyst on the top plan, enrollment run for you, and payroll on the same platform.',
  ],
  [
    'Does WEX publish pricing for benefits administration?',
    'Not for the employer service. The WEX benefits administration page routes to a request-a-proposal form, so pricing arrives after a sales process. BEG shows a monthly estimate for your company on screen in about 90 seconds, then confirms exact pricing on a 15-minute call.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you, negotiating renewals, and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, life events, carrier data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'What platform does BEG Managed Benefits run on?',
    'The service is powered by isolved, the HCM platform behind thousands of American employers. Benefits and payroll live on the same data, so deductions, eligibility, and ACA hours tracking stop drifting apart across systems.',
  ],
];

export default function WexAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'WEX Benefits Alternative: A Dedicated Administration Team at SMB Scale',
            description: 'What WEX does well in benefits administration, where its enterprise scale pinches for smaller employers, and how BEG Managed Benefits, powered by isolved, compares.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/managed-benefits/wex-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'WEX Alternative', item: 'https://www.beghr.com/services/managed-benefits/wex-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Alternatives"
        title="Considering WEX for benefits administration, but not built for a proposal cycle?"
        description="BEG Managed Benefits, powered by isolved, gives small and mid-sized employers what the enterprise players reserve for big accounts: a dedicated administration team, enrollment run for you, and a real monthly estimate on screen before anyone calls you."
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
              <h2>What WEX does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.wexinc.com/products/employee-benefits/benefits-administration/" target="_blank" rel="noopener noreferrer">WEX benefits administration</a> is a serious operation. WEX is a publicly traded global commerce platform spanning fuel cards, business payments, and employee benefits, and its benefits arm cites Fortune 1000 companies on its platform and a large share of the HSA market running on its technology. The product line is broad: benefits administration, <a href="https://www.wexinc.com/products/employee-benefits/benefit-accounts/" target="_blank" rel="noopener noreferrer">HSA, FSA, and other benefit accounts</a>, <a href="https://www.wexinc.com/products/employee-benefits/compliance-and-cobra-services/" target="_blank" rel="noopener noreferrer">COBRA and direct bill</a>, and ACA administration.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                WEX also works with brokers and consultants rather than around them, and its implementation methodology, from requirements gathering through build and test, is exactly what a complex employer with tens of thousands of participants should demand.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The comparison with BEG is not about whether WEX is good at benefits administration. It is about who the machine was sized for, and what the buying experience feels like when you have 60 employees instead of 6,000.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE THE FIT PINCHES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trade-Off</p>
              <h2>Where enterprise-scale administration pinches for smaller employers</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                None of this is a knock on WEX. A platform built for the Fortune 1000 is optimized for the Fortune 1000; these are the places a 25-to-500-employee company feels that optimization.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Benefits is one line of a very large business', body: 'WEX spans fleet cards, corporate payments, and benefits. That diversification is strength for shareholders, but a 60-person company is a small account inside a very large machine, and small accounts rarely set the roadmap.' },
                { title: 'The sales motion is a proposal cycle', body: 'The path to WEX benefits pricing runs through a request-a-proposal form with organization-size brackets that climb to 10,000-plus employees. That motion fits enterprise procurement, not an office manager who needs a number this week.' },
                { title: 'Pricing is quote-gated', body: 'WEX does not publish employer pricing for benefits administration on its site. You learn the cost after the sales process, which makes comparison shopping slow exactly when open enrollment deadlines make it urgent.' },
                { title: 'Account technology is not the same as admin done', body: 'WEX is best known for consumer-directed accounts: HSA, FSA, COBRA billing. Powerful tech, but the daily enrollment work, life events, carrier updates, and data corrections at an SMB still need named people who own it end to end.' },
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
              <h2>BEG Managed Benefits vs. WEX</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>WEX</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Built for', 'SMBs, roughly 25 to 500 employees', 'Employers up to Fortune 1000, plus health plans and TPAs'],
                    ['Who does the admin work', 'Dedicated specialist and auditing analyst on the top plan', 'WEX service team, scoped in your proposal'],
                    ['Pricing visibility', 'Instant on-screen estimate, no demo gate', 'Request-a-proposal form'],
                    ['Your broker', 'Stays; we administer the plans they place', 'Works with brokers and consultants too'],
                    ['Your benefit plans', 'Stay yours', 'Stay yours'],
                    ['ACA reporting', 'Tracked and produced on the ACA plan', 'Offered as ACA administration'],
                    ['Payroll connection', 'Same platform as BEG managed payroll', 'Integrations and EDI feeds to your payroll vendor'],
                    ['Getting started', '15-minute call after your estimate', 'Proposal, then an implementation project'],
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
              <h2>When WEX is the right choice</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you have thousands of employees, a complex consumer-directed account program, union or Taft-Hartley plans, or you are a health plan, financial institution, or TPA that needs a white-label benefits platform, WEX is built for exactly that job and does it at a scale few can match. An employer with dedicated benefits staff and an RFP process will get real value from WEX&apos;s implementation discipline and account technology, and switching away from that for a leaner service would be solving a problem you do not have.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The time to look at BEG is when you are the whole benefits department: when enrollment season, ACA forms, and carrier updates land on one desk, and what you need is a team that runs it, priced and scoped for a company your size, with a number you can see today.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>Enterprise-grade administration, sized and priced for SMBs</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, comes in three plans: benefits admin software your team drives, software plus ACA compliance with Forms 1094-C and 1095-C produced for you, and Fully Managed, where a dedicated Managed Benefits Specialist runs enrollment and changes while a Benefits Auditing Analyst checks your data for costly errors. Your broker stays, your plans stay, and payroll can run on the same platform so deductions stop breaking. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Comparing other administrators too? See the <Link href="/services/managed-benefits/tasc-alternative">TASC alternative</Link> and the <Link href="/services/managed-benefits/bswift-alternative">bswift alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>WEX alternatives, answered</h2>
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
