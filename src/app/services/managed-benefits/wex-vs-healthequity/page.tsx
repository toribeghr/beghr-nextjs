import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'WEX vs HealthEquity: Platform or HSA Custodian? | BEG';
const DESC = 'WEX vs HealthEquity refereed honestly: a broad benefits admin platform vs an HSA-first custodian. The asymmetry is the answer. Here is how to pick.';
const URL = 'https://www.beghr.com/services/managed-benefits/wex-vs-healthequity';

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

const CALENDLY = getCalendlyLink('managed-benefits-wex-vs-healthequity');

const FAQS: [string, string][] = [
  [
    'Are WEX and HealthEquity actually direct competitors?',
    'Only partially, and that is the point. Both administer HSAs, FSAs, HRAs, commuter benefits, and COBRA, so they collide in RFPs. But HealthEquity is built around the HSA as custodian of member accounts, while WEX is built around a benefits platform it also white-labels to TPAs and health plans.',
  ],
  [
    'What does it mean that HealthEquity is HSA-custodian-centric?',
    'HealthEquity holds and services the HSA itself: the member relationship, the account, the investment options, and the education around building health savings. Everything else it offers, FSA, HRA, COBRA, and commuter administration, sits around that custodial core.',
  ],
  [
    'Which costs more, WEX or HealthEquity?',
    'Employer pricing is quote-gated at both. HSA economics also include member-side details worth reading closely, such as monthly account fees, investment thresholds, and interest treatment, which each publishes in account disclosures rather than on marketing pages. Compare total cost, not just the employer invoice.',
  ],
  [
    'Can my TPA already be running WEX under its own brand?',
    'Yes. WEX publishes a white-label platform that TPAs and health plans resell under their own names. If you are comparing a local TPA against HealthEquity, ask whose technology the TPA actually runs; the answer is sometimes WEX.',
  ],
  [
    'Where does BEG fit in a WEX vs HealthEquity decision?',
    'Both vendors administer accounts and COBRA; neither runs your open enrollment, eligibility, life events, or ACA reporting. BEG Managed Benefits, powered by isolved, is the layer that takes that administration off your desk with a dedicated team, while you keep your broker, your plans, and whichever account custodian you choose.',
  ],
];

export default function WexVsHealthequityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'WEX vs HealthEquity: Platform or HSA Custodian?',
            description: DESC,
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: URL,
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
              { '@type': 'ListItem', position: 3, name: 'WEX vs HealthEquity', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title="WEX or HealthEquity: this is not a symmetrical fight"
        description="HealthEquity is an HSA-first custodian that added the rest of the account stack. WEX is a benefits administration platform that includes HSAs. They overlap in every RFP, but they are different animals, and the asymmetry is exactly what should drive your pick."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'BEG works alongside your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: WEX */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>WEX: the broad benefits administration platform</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.wexinc.com/products/employee-benefits/" target="_blank" rel="noopener noreferrer">WEX</a> approaches benefits from the platform side. Its employee benefits business administers <a href="https://www.wexinc.com/products/employee-benefits/benefit-accounts/" target="_blank" rel="noopener noreferrer">HSAs, FSAs, HRAs, commuter accounts, and lifestyle accounts</a> alongside <a href="https://www.wexinc.com/products/employee-benefits/compliance-and-cobra-services/cobra/" target="_blank" rel="noopener noreferrer">COBRA administration</a>, all in one configurable system. WEX says the platform is used by 90 percent of Fortune 1000 companies and connects to 350+ payroll and HRIS partners and 225+ carriers.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Crucially, WEX is also an arms dealer: its <a href="https://www.wexinc.com/products/employee-benefits/white-label-benefits-platform/" target="_blank" rel="noopener noreferrer">white-label platform</a> powers TPAs and health plans that resell it under their own brands. The HSA is one product on the shelf, not the organizing principle. For an employer, that means WEX competes on breadth: every account type, COBRA, analytics, and integrations in one buy, with employer pricing quote-gated.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: HEALTHEQUITY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>HealthEquity: the HSA is the center of gravity</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.healthequity.com/" target="_blank" rel="noopener noreferrer">HealthEquity</a> built its business on the health savings account. It is the custodian: it holds the member&apos;s HSA, services the account, runs the investment options, and owns the education around <a href="https://www.healthequity.com/hsa" target="_blank" rel="noopener noreferrer">building long-term health savings</a>. Its <a href="https://www.healthequity.com/employers" target="_blank" rel="noopener noreferrer">employer offering</a> extends outward from that core to FSAs, HRAs, commuter and lifestyle accounts, COBRA administration, and direct billing.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The consequence of HSA-centricity is depth where it matters for savers: account experience, investing, and member support are the product, not features. The trade is that HealthEquity is not trying to be your everything-platform; it publishes an <a href="https://www.healthequity.com/account-comparison" target="_blank" rel="noopener noreferrer">account comparison</a> that frames its world in terms of HSA, FSA, and HRA choices rather than platform architecture. Employer pricing is quote-gated, and member-side account terms live in disclosures worth reading before you sign.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>WEX vs HealthEquity, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>WEX</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>HealthEquity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Center of gravity', 'Benefits administration platform', 'HSA custodianship and the member relationship'],
                    ['HSA', 'One account type on a broad platform', 'The core product, with investing and member education'],
                    ['Other accounts', 'FSA, HRA, commuter, lifestyle in the same system', 'FSA, HRA, commuter, lifestyle built around the HSA core'],
                    ['COBRA and continuation', 'COBRA in the same platform as accounts', 'COBRA and direct billing administration offered'],
                    ['Distribution', 'Direct plus white-label through TPAs and health plans', 'Direct to employers, plus health plan and partner channels'],
                    ['Best-known strength', 'Breadth, configurability, and integration reach', 'HSA depth and long-term saver experience'],
                    ['Pricing visibility', 'Quote-gated for employers', 'Quote-gated for employers; member terms in disclosures'],
                    ['Watch for', 'Which brand actually services you if bought via a partner', 'Whether non-HSA administration gets the same attention as the HSA'],
                  ].map(([factor, wex, he], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{wex}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{he}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published pages: <a href="https://www.wexinc.com/products/employee-benefits/" target="_blank" rel="noopener noreferrer">WEX employee benefits</a> and <a href="https://www.healthequity.com/employers" target="_blank" rel="noopener noreferrer">HealthEquity for employers</a>.
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Analysis</p>
              <h2>The asymmetry, taken seriously</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>1. Decide what the HSA is to your company</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                If you run a high-deductible health plan strategy where the HSA is the retention story, the custodian question dominates: investment options, member experience, and education move real employee outcomes, and that is HealthEquity&apos;s home turf. If the HSA is one benefit among many, platform breadth matters more than custodial depth, which points to WEX.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>2. Breadth buys fewer vendors; depth buys better accounts</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                WEX&apos;s pitch is consolidation: accounts, COBRA, analytics, and integrations in one system, one invoice, one support relationship. HealthEquity&apos;s pitch is that the account your employees actually keep for decades deserves a specialist. Both are true, which is why the right answer depends on how many account types you offer and how much your people actually save.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>3. Member-side economics deserve the fine print</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                HSA value is not only the employer fee. Interest rates on cash, investment thresholds and fees, and monthly account charges land on members, and they differ by custodian and plan design. Both vendors publish these in account agreements and disclosures rather than marketing pages, so pull the actual fee schedules for your quoted configuration before comparing totals.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>4. Neither answer fixes your enrollment problem</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Accounts and COBRA are downstream of the administration layer: eligibility, open enrollment, life events, carrier feeds, and ACA reporting decide whether the right people end up in the right accounts at all. If that layer is spreadsheets and memory today, choosing between WEX and HealthEquity optimizes the second story of a house with no first floor.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO DECIDE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How to Actually Decide</p>
              <h2>Three buyer situations, three honest answers</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              {[
                {
                  title: 'HDHP plus HSA is your core benefits strategy',
                  body: 'Lean HealthEquity. When the HSA carries your benefits story, custodial depth, investing, and member education are the product. Read the member fee schedule alongside the employer quote.',
                },
                {
                  title: 'You want every account and COBRA under one roof',
                  body: 'Lean WEX. Breadth, configurability, and integration reach are its published strengths, and consolidating accounts plus COBRA with one vendor cuts vendor management overhead. Confirm who services you if you buy through a partner.',
                },
                {
                  title: 'Your enrollment and ACA layer is still duct tape',
                  body: 'Fix that first. Accounts administration assumes clean eligibility data flowing in. Get the administration layer owned and reliable, then pick the custodian; the RFPs will go faster and the feeds will actually work.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing WEX against the other account TPA? See <Link href="/services/managed-benefits/wex-vs-tasc">WEX vs TASC</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Match the vendor to your center of gravity, not theirs.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The asymmetry is the answer: HealthEquity when the HSA is your strategy, WEX when platform breadth and consolidation are. Both are credible on the overlap, so let your plan design pick the winner, and read member-side fee schedules with the same care as the employer quote.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you want software your team runs, pick from these. If you want the administration off your desk without a co-employment contract or losing your broker, that is <Link href="/services/managed-benefits">BEG Managed Benefits</Link>, powered by isolved: a dedicated team on enrollment, eligibility, carrier updates, and ACA forms, feeding clean data to whichever custodian you choose, with an instant on-screen estimate in about 90 seconds.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="managed-benefits" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>WEX vs HealthEquity, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
