import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Gusto Benefits vs Employee Navigator: Key Differences | BEG';
const DESC = 'Gusto benefits administration vs Employee Navigator refereed honestly: payroll-attached benefits vs the broker-distributed standalone. Which fits?';
const URL = 'https://www.beghr.com/services/managed-benefits/gusto-benefits-vs-employee-navigator';

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

const CALENDLY = getCalendlyLink('managed-benefits-gusto-benefits-vs-employee-navigator');

const FAQS: [string, string][] = [
  [
    'Can I use Gusto benefits administration without Gusto payroll?',
    'No. Gusto benefits administration exists inside the Gusto payroll platform; it is a feature of the payroll product, not a standalone system. If you do not run payroll on Gusto, its benefits administration is not on your menu.',
  ],
  [
    'Does Gusto replace my insurance broker?',
    'It can, but it does not have to. Gusto operates a licensed brokerage, and its published position is that benefits administration is included when Gusto acts as your broker, with you paying premiums. Its broker integration keeps your existing broker, at a published 6 dollars per eligible employee per month on the Plus plan and included on Premium.',
  ],
  [
    'Is Employee Navigator something my company can buy directly?',
    'In practice, no. Employee Navigator publishes plans for brokers: agencies license the platform and run client sites on it. Employers get Employee Navigator through a broker who uses it, which is exactly why it protects the broker relationship.',
  ],
  [
    'Which is cheaper, Gusto benefits or Employee Navigator?',
    'They are hard to compare on price because the money flows differently. Gusto publishes payroll plan pricing plus benefits add-ons like broker integration fees. Employee Navigator dollar costs are quote-gated to brokers and typically absorbed into broker compensation, so it can feel free to the employer without being free.',
  ],
  [
    'Where does BEG fit in a Gusto vs Employee Navigator decision?',
    'Both leave the administration work with your team or your broker. BEG Managed Benefits, powered by isolved, is the done-for-you option: a dedicated team runs enrollment, changes, carrier updates, and ACA forms while you keep your broker and your plans, whatever payroll you run.',
  ],
];

export default function GustoBenefitsVsEmployeeNavigatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Gusto Benefits vs Employee Navigator: Key Differences',
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
              { '@type': 'ListItem', position: 3, name: 'Gusto Benefits vs Employee Navigator', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title="Gusto benefits or Employee Navigator: attached to payroll, or attached to your broker?"
        description="Gusto benefits administration lives inside Gusto payroll and only works if you run payroll there. Employee Navigator is a standalone benefits platform distributed through insurance brokers. Different anchors, different trade-offs."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'BEG works alongside your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: GUSTO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Gusto benefits: a feature of the payroll you already run</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/product/benefits" target="_blank" rel="noopener noreferrer">Gusto benefits</a> is benefits administration for companies that already run Gusto payroll, and that anchoring is the whole design. Deductions, enrollment, onboarding, and tax reporting live in one system because benefits never leave the payroll platform. Gusto operates a licensed brokerage: choose <a href="https://gusto.com/product/benefits/health" target="_blank" rel="noopener noreferrer">health plans through Gusto</a> and its published position is that the administration is included, with you paying the premiums.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Already have a broker you trust? Gusto&apos;s <a href="https://gusto.com/product/benefits/broker-integration" target="_blank" rel="noopener noreferrer">broker integration</a> connects your existing plans and broker to the platform, published at 6 dollars per eligible employee per month on the Plus plan and included with Premium. Its <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">pricing page</a> also publishes add-ons such as FSA administration at 4 dollars per participant monthly with a 20 dollar minimum, and COBRA administration at 30 dollars per month. Published numbers are genuinely rare in this category; Gusto deserves credit for them. The catch is the tether: leave Gusto payroll and the benefits administration goes with it.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: EMPLOYEE NAVIGATOR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Employee Navigator: the broker-distributed standalone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.employeenavigator.com/" target="_blank" rel="noopener noreferrer">Employee Navigator</a> anchors to the broker instead of the payroll. Insurance agencies license the platform and run client benefits sites on it; by its own count the network spans 195,000+ employers, 7,000+ brokers, and 600+ integration partners. Your broker builds the plans, manages open enrollment setup, and handles the carrier connections, while the platform covers <a href="https://www.employeenavigator.com/benefits-administration/" target="_blank" rel="noopener noreferrer">enrollment</a>, onboarding, <a href="https://www.employeenavigator.com/aca-reporting/" target="_blank" rel="noopener noreferrer">ACA reporting</a>, and payroll connections through its <a href="https://www.employeenavigator.com/modern-integrations/" target="_blank" rel="noopener noreferrer">integration marketplace</a>.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Because it is payroll-agnostic, Employee Navigator works whether you run ADP, Paychex, Paylocity, or something else, and it survives a payroll switch. Its <a href="https://www.employeenavigator.com/pricing/" target="_blank" rel="noopener noreferrer">pricing page</a> lists four broker tiers behind contact-sales, with one printed number: a 45 cent per employee per month fee for 834 EDI feeds on middle tiers. Employers rarely see any of this directly; the cost typically rides inside the broker relationship.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Gusto benefits vs Employee Navigator, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Employee Navigator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Anchor', 'Your payroll: exists inside Gusto payroll only', 'Your broker: agencies license and run it'],
                    ['Who it is for', 'Gusto payroll customers, mostly small businesses', 'Employers of brokers who license the platform'],
                    ['Broker relationship', 'Gusto can be your broker, or integrate yours for a published fee', 'Built around your broker; the broker is the operator'],
                    ['Payroll dependency', 'Total: leave Gusto payroll, lose the ben admin', 'None: payroll-agnostic, connects via 600+ integrations'],
                    ['ACA reporting', 'Handled within the platform for its plans', 'ACA module with 1094/1095 reporting'],
                    ['Pricing visibility', 'Published: plan prices and add-on fees on its site', 'Broker tiers published, dollar amounts gated, EDI fee printed'],
                    ['Plan sophistication', 'Small-group focus through the Gusto brokerage or integration', 'Handles the broader small and mid-size group market'],
                    ['If you switch payroll', 'Benefits administration must be rebuilt elsewhere', 'Platform stays; only the payroll feed changes'],
                  ].map(([factor, gusto, en], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published pages: <a href="https://gusto.com/product/benefits" target="_blank" rel="noopener noreferrer">Gusto benefits</a>, <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">Gusto pricing</a>, and <a href="https://www.employeenavigator.com/pricing/" target="_blank" rel="noopener noreferrer">Employee Navigator pricing</a>.
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>1. The anchor decides your switching costs</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Gusto ties benefits to payroll; Employee Navigator ties benefits to your broker. Outgrow Gusto payroll and your benefits administration moves with it. Fall out with your broker and your Employee Navigator site is theirs, not yours. Neither dependency is wrong, but you should choose it deliberately, because it is the thing that will hurt later.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>2. The broker question is really the buying question</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Gusto is happiest when it is also your broker: the administration is included and the experience is seamless. Keep your own broker and you pay a published integration fee for the privilege. Employee Navigator starts from the opposite premise: the broker you already trust runs the system for you. If your broker relationship is an asset, Employee Navigator respects it structurally, and so does BEG.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>3. Transparency vs invisibility on price</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Gusto publishes real numbers, from plan pricing to add-on fees, which makes budgeting straightforward. Employee Navigator costs are mostly invisible to the employer, folded into broker economics. Invisible is not the same as free: it means you cannot compare it. If you like knowing what things cost, that difference alone may decide this comparison.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>4. Both still leave the work with somebody</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Gusto gives your team self-serve software; Employee Navigator gives your broker a platform to run. In both cases, open enrollment questions, life-event chasing, carrier discrepancies, and data cleanup still land on a human on your side of the table. If that human is you, the comparison you actually need is software vs done-for-you administration.
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
                  title: 'You run Gusto payroll and want simple, published pricing',
                  body: 'Lean Gusto. Benefits inside the payroll you already use, with published fees and no second vendor, is a clean setup for a small team, especially if you are comfortable with Gusto as your broker or the integration fee for keeping yours.',
                },
                {
                  title: 'Your broker is your benefits brain and payroll is elsewhere',
                  body: 'Lean Employee Navigator. It is built for exactly that arrangement: your broker operates the platform, your payroll connects through an integration, and a payroll switch later does not blow up benefits.',
                },
                {
                  title: 'The admin work itself is the problem, whoever holds the software',
                  body: 'Then pick neither as the fix. Self-serve software and broker-run software both leave enrollment chasing and compliance on someone at your company. Compare done-for-you administration before you re-platform.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing Employee Navigator against its direct-sale rival? See <Link href="/services/managed-benefits/employee-navigator-vs-plansource">Employee Navigator vs PlanSource</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Pick your anchor: payroll, broker, or neither.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                This one is honestly clean: Gusto benefits if you run Gusto payroll and want everything in one published-price platform; Employee Navigator if your broker is the center of your benefits world and you want software that outlives any payroll decision. Both are good at what they anchor to.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you want software your team runs, pick from these. If you want the administration off your desk without a co-employment contract or losing your broker, that is <Link href="/services/managed-benefits">BEG Managed Benefits</Link>, powered by isolved: a dedicated team runs enrollment, changes, carrier updates, and ACA forms behind the plans you and your broker already chose, on a platform that is not tethered to whose payroll you run. Your estimate is on screen in about 90 seconds.
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
              <h2>Gusto benefits vs Employee Navigator, answered</h2>
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
