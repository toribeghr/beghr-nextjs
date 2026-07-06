import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'WEX vs TASC: Which Benefits Administrator Fits? | BEG';
const DESC = 'WEX vs TASC refereed honestly: the Fortune 1000 platform vs the privately held TPA with one universal account. How to pick for HSA, FSA, and COBRA.';
const URL = 'https://www.beghr.com/services/managed-benefits/wex-vs-tasc';

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

const CALENDLY = getCalendlyLink('managed-benefits-wex-vs-tasc');

const FAQS: [string, string][] = [
  [
    'What do WEX and TASC actually administer?',
    'Both run tax-advantaged benefit accounts and continuation coverage: HSAs, FSAs, HRAs, commuter accounts, lifestyle accounts, and COBRA. WEX adds a large white-label business where TPAs and health plans resell its platform; TASC folds 50+ account types into its Universal Benefit Account.',
  ],
  [
    'Is WEX or TASC bigger?',
    'Different kinds of big. WEX is a publicly traded company whose benefits platform, by its own claim, is used by 90 percent of Fortune 1000 companies, often through partners. TASC describes itself as the nation’s largest privately held third-party benefits administrator, selling under its own brand.',
  ],
  [
    'Which costs more, WEX or TASC?',
    'Neither publishes standard employer pricing, so it is quote-gated on both sides. Account administration is usually priced per participant per month with setup and renewal fees, and COBRA is often priced separately. The only honest comparison is two quotes on the same census and account mix.',
  ],
  [
    'Do WEX and TASC handle COBRA administration?',
    'Yes, both publish COBRA offerings. WEX runs COBRA inside the same platform as its benefit accounts and points to automation for notice and deadline compliance. TASC bundles COBRA with retiree and direct billing continuation services alongside its Universal Benefit Account.',
  ],
  [
    'Where does BEG fit in a WEX vs TASC decision?',
    'WEX and TASC administer benefit accounts and COBRA. BEG Managed Benefits, powered by isolved, covers the layer around them: enrollment, eligibility, life events, carrier updates, and ACA reporting, run by a dedicated team while you keep your broker and your plans. Many companies need both layers handled.',
  ],
  [
    'What account types do WEX and TASC each cover?',
    'Both administer HSA, FSA (health care and dependent care), HRA, and commuter accounts, plus COBRA and continuation billing. TASC extends further into lifestyle-style benefits under its Universal Benefit Account umbrella, such as wellness and education reimbursement; WEX covers a comparable range through its own configurable account and lifestyle-account offerings.',
  ],
  [
    'How long does switching between WEX and TASC take?',
    'Account-administration migrations in this space generally run 60 to 90 days from signed agreement to go-live, aligned to a plan year so account balances and elections carry over cleanly. HSA funds are owned by the employee and move trustee-to-trustee regardless of which administrator you choose next.',
  ],
  [
    'Does either WEX or TASC run open enrollment or ACA reporting?',
    'No. Both are account and COBRA administrators, not enrollment platforms. Eligibility management, life-event processing, carrier data feeds, and ACA Forms 1094-C/1095-C production are a separate layer that both vendors expect the employer, a broker platform, or a managed service to handle.',
  ],
  [
    'Which is the better fit for a company already using Employee Navigator or a similar enrollment platform?',
    'Either can work, since both connect to common payroll and enrollment platforms; the deciding factor is usually account breadth and employee experience preference, one universal card from TASC versus WEX’s configurable multi-account platform, not enrollment compatibility. Confirm the specific integration with your enrollment vendor before signing either.',
  ],
];

export default function WexVsTascPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'WEX vs TASC: Which Benefits Administrator Fits?',
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
              { '@type': 'ListItem', position: 3, name: 'WEX vs TASC', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title="WEX or TASC: the platform giant or the universal account?"
        description="Both administer HSAs, FSAs, HRAs, and COBRA. WEX is the publicly traded platform that powers much of the industry, often behind other brands. TASC is the privately held TPA that folds 50+ benefits into one account, one card, one app."
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
              <h2>WEX: the benefits platform behind much of the industry</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.wexinc.com/products/employee-benefits/" target="_blank" rel="noopener noreferrer">WEX</a> is a publicly traded payments and benefits company whose employee benefits arm administers <a href="https://www.wexinc.com/products/employee-benefits/benefit-accounts/" target="_blank" rel="noopener noreferrer">HSAs, FSAs, HRAs, commuter accounts, and lifestyle accounts</a>, plus <a href="https://www.wexinc.com/products/employee-benefits/compliance-and-cobra-services/cobra/" target="_blank" rel="noopener noreferrer">COBRA administration</a> in the same system. WEX says its platform is used by 90 percent of Fortune 1000 companies and connects to 350+ payroll and HRIS partners and 225+ insurance carriers, which tells you the scale it operates at.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The part most buyers miss: much of that reach comes from WEX operating behind other brands. It publishes a <a href="https://www.wexinc.com/products/employee-benefits/white-label-benefits-platform/" target="_blank" rel="noopener noreferrer">white-label platform</a> that TPAs and health plans resell, so your local TPA may already be running WEX under its own logo. Buying WEX direct gets you the platform owner; buying through a partner gets you the same engine with a different service wrapper. Employer pricing is quote-gated either way.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: TASC */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>TASC: one universal account for 50+ benefits</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.tasconline.com/" target="_blank" rel="noopener noreferrer">TASC</a>, Total Administrative Services Corporation, describes itself as the nation&apos;s largest privately held third-party benefits administrator. Its signature idea is the Universal Benefit Account: <a href="https://www.tasconline.com/products/" target="_blank" rel="noopener noreferrer">50+ account types</a>, from HSA, FSA, HRA, and dependent care through lifestyle benefits like wellness, education, and pet care, all running on one portal, one mobile app, and one card. For employees, that consolidation is the pitch: one login instead of a wallet of vendor cards.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                TASC also runs COBRA, retiree, and direct billing continuation administration, sold in pre-set bundles with its accounts, and it distributes heavily through brokers and advisors, which keeps it friendly to the relationship you already have. It publishes reference material like <a href="https://www.tasconline.com/resources/benefit-limits/" target="_blank" rel="noopener noreferrer">annual benefit limits</a> openly, but employer pricing follows the industry pattern: proposal first, numbers after.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>WEX vs TASC, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>WEX</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TASC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Company profile', 'Publicly traded payments and benefits company', 'Privately held TPA, benefits is the whole business'],
                    ['Core offer', 'Configurable benefit accounts platform plus COBRA', 'Universal Benefit Account: 50+ benefits on one card and app'],
                    ['Account breadth', 'HSA, FSA, HRA, commuter, lifestyle accounts', 'HSA, FSA, HRA, dependent care, transit, plus lifestyle accounts'],
                    ['COBRA and continuation', 'COBRA in the same platform as benefit accounts', 'COBRA, retiree, and direct billing continuation bundles'],
                    ['How it reaches you', 'Direct, or white-labeled through TPAs and health plans', 'Direct and through brokers and advisors, own brand'],
                    ['Integrations', '350+ payroll and HRIS partners, 225+ carriers, per WEX', 'Payroll and enrollment platform connections, including Employee Navigator'],
                    ['Pricing visibility', 'Quote-gated', 'Quote-gated'],
                    ['Feel', 'Enterprise platform, configure to fit', 'Consolidator, one account to rule the benefits sprawl'],
                  ].map(([factor, wex, tasc], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{wex}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{tasc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published pages: <a href="https://www.wexinc.com/products/employee-benefits/" target="_blank" rel="noopener noreferrer">WEX employee benefits</a> and <a href="https://www.tasconline.com/products/" target="_blank" rel="noopener noreferrer">TASC products</a>.
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Analysis</p>
              <h2>Where the difference actually shows up</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>1. Platform engine vs packaged product</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                WEX built an engine and lets the market wrap it: buy direct, or get it through a TPA or health plan that white-labels it. TASC built a finished product, the Universal Benefit Account, and sells it under one brand. If you value knowing exactly whose platform and whose service team you are getting, TASC is simpler to reason about; if you value the engine that already talks to your payroll and carriers, WEX has the wider pipes.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>2. Employee experience: one card or configured accounts</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                TASC&apos;s one portal, one app, one card design is aimed squarely at the employee who cannot remember which card pays for daycare and which pays for the gym. WEX offers a configurable platform with its own card and app, tuned per employer. For a straightforward FSA plus HSA setup, both feel similar; the more account types you stack, the more TASC&apos;s consolidation argument bites.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>3. COBRA is a compliance product, not a feature</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Both vendors treat COBRA seriously, and they should: notice failures carry statutory penalties that accrue per day, per beneficiary, per the <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">Department of Labor</a>. WEX runs COBRA inside the same platform as accounts; TASC bundles it with retiree and direct billing continuation. Whichever you pick, get the notice workflow and audit trail demonstrated, not described.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>4. Neither runs your enrollment</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                The easy mistake in this comparison is scope. WEX and TASC administer benefit accounts and continuation coverage. Open enrollment, eligibility, life events, carrier feeds for your medical and dental plans, and ACA reporting live in a different layer, one that both vendors expect your ben admin platform or your team to handle. Budget for that layer before you compare card programs.
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
                  title: 'You are larger, integration-heavy, or already near WEX',
                  body: 'Lean WEX. If your payroll, HRIS, or health plan already connects to its platform, or your TPA runs it under the hood, the integration work is largely done. Ask any TPA you evaluate whose platform they actually run.',
                },
                {
                  title: 'You offer many account types and want one experience',
                  body: 'Lean TASC. The Universal Benefit Account was built for the employer stacking FSA, HSA, commuter, wellness, and lifestyle benefits who wants employees carrying one card and one login instead of five.',
                },
                {
                  title: 'Your real pain is enrollment season, not benefit cards',
                  body: 'Then this is the wrong comparison to start with. Accounts administration assumes enrollment, eligibility, and ACA are already handled. Fix the administration layer first, then bolt on the account administrator that fits it.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing WEX against the HSA specialist instead? See <Link href="/services/managed-benefits/wex-vs-healthequity">WEX vs HealthEquity</Link>. Evaluating enrollment platforms? Start with <Link href="/services/managed-benefits/employee-navigator-vs-plansource">Employee Navigator vs PlanSource</Link>.
            </p>
          </div>
        </section>

        {/* MIGRATION NOTE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What To Expect</p>
              <h2>Switching account administrators: what actually happens</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Moving benefit-account administration from WEX to TASC, or the reverse, is typically a 60-to-90-day project timed to your plan year: new cards get issued, existing HSA balances transfer trustee-to-trustee since the funds belong to the employee, and COBRA continuation rights carry over because they are a federal employer obligation, not a vendor feature. Get the data-export format, balance-transfer timeline, and card-reissue plan in writing from whichever vendor you are leaving and joining.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '1rem' }}>
                Neither vendor migration touches your enrollment platform or your ACA reporting process. If those are still manual, plan that fix separately, ideally before the account migration, so the new administrator receives clean eligibility data from day one instead of inheriting the same gaps.
              </p>
            </div>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Pick your account administrator second. Fix the admin layer first.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                WEX and TASC are both strong choices for benefit accounts and COBRA: WEX if you want the industry&apos;s platform engine and its integration reach, TASC if you want one consolidated account experience from a single-brand TPA. Get both quotes on the same census and read the per-participant fees, setup charges, and COBRA line items side by side.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you want software your team runs, pick from these. If you want the administration off your desk without a co-employment contract or losing your broker, that is <Link href="/services/managed-benefits">BEG Managed Benefits</Link>, powered by isolved: a dedicated team on your enrollment, eligibility, carrier updates, and ACA forms, working alongside your broker and whichever account administrator you choose. Your estimate is on screen in about 90 seconds.
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
              <h2>WEX vs TASC, answered</h2>
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
      </ServicePage>
    </>
  );
}
