import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Employee Navigator vs PlanSource: The Real Difference | BEG';
const DESC = 'Employee Navigator vs PlanSource refereed honestly: broker-distributed ben admin vs direct platform with a services arm. Which fits your team?';
const URL = 'https://www.beghr.com/services/managed-benefits/employee-navigator-vs-plansource';

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

const CALENDLY = getCalendlyLink('managed-benefits-employee-navigator-vs-plansource');

const FAQS: [string, string][] = [
  [
    'Can employers buy Employee Navigator directly?',
    'Not in practice. Employee Navigator publishes its plans for brokers, not employers: an agency licenses the platform and builds client sites on it. If your broker uses Employee Navigator, you get it through them; if not, you would typically change brokers to get it.',
  ],
  [
    'Does PlanSource work with insurance brokers too?',
    'Yes. PlanSource sells directly to HR teams and also distributes through reseller partners and carriers. The difference is emphasis: Employee Navigator exists for the broker channel, while PlanSource runs a direct sales motion alongside its partner channel.',
  ],
  [
    'Which costs more, Employee Navigator or PlanSource?',
    'There is no published answer. Employee Navigator lists four broker plan tiers but gates the dollar amounts behind sales, publishing only a per-employee EDI fee on some tiers. PlanSource is demo-gated entirely. For an employer, Employee Navigator cost is usually wrapped into the broker relationship.',
  ],
  [
    'Can either vendor run open enrollment for us?',
    'PlanSource is the stronger fit for that: it publishes a services layer where its team takes on enrollment and administration tasks. With Employee Navigator, the platform is the product, and the hands-on work sits with your broker and your own HR team.',
  ],
  [
    'Where does BEG fit in an Employee Navigator vs PlanSource decision?',
    'BEG Managed Benefits, powered by isolved, is the option where a dedicated team runs the administration: enrollment, changes, carrier updates, and ACA forms, while you keep your broker and your plans. If neither having your broker run software nor buying an enterprise platform fits, that is the third path.',
  ],
];

export default function EmployeeNavigatorVsPlansourcePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Employee Navigator vs PlanSource: The Real Difference',
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
              { '@type': 'ListItem', position: 3, name: 'Employee Navigator vs PlanSource', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title="Employee Navigator or PlanSource: broker channel or direct platform?"
        description="Both are serious benefits administration platforms. Employee Navigator is built for and sold through insurance brokers; PlanSource sells to HR teams directly and adds an outsourced services arm. The distribution model is the real difference."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'BEG works alongside your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: EMPLOYEE NAVIGATOR */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Employee Navigator: the platform your broker brings you</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.employeenavigator.com/" target="_blank" rel="noopener noreferrer">Employee Navigator</a> is the dominant benefits administration platform of the broker channel: by its own count it connects 195,000+ employers, 7,000+ brokers, and 600+ integration partners. The model matters more than the feature list. Employers do not buy Employee Navigator; insurance agencies license it and stand up sites for their clients. Your broker builds your plans, runs your renewal, and manages the system, which is exactly why brokers like it and why BEG respects it: it strengthens the broker relationship rather than threatening it.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Functionally it covers <a href="https://www.employeenavigator.com/benefits-administration/" target="_blank" rel="noopener noreferrer">online enrollment</a>, new hire onboarding, <a href="https://www.employeenavigator.com/aca-reporting/" target="_blank" rel="noopener noreferrer">ACA reporting</a>, and light HR tools, with carrier and payroll connections through its <a href="https://www.employeenavigator.com/modern-integrations/" target="_blank" rel="noopener noreferrer">600+ integrations</a>. Its <a href="https://www.employeenavigator.com/pricing/" target="_blank" rel="noopener noreferrer">published pricing page</a> lists four broker tiers, Enhanced through Platinum, all behind a contact-sales gate; the one number printed is a $0.45 per employee per month fee for 834 EDI carrier feeds on the middle tiers, waived on Platinum. For the employer, cost usually arrives folded into the broker relationship.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: PLANSOURCE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>PlanSource: the direct platform with a services arm</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://plansource.com/" target="_blank" rel="noopener noreferrer">PlanSource</a> sells benefits administration the other way around: directly to HR and benefits leaders, with reseller partners and carriers as an additional channel. Its published positioning is smart technology paired with human guidance, covering the full benefits lifecycle from plan setup and enrollment through eligibility, life events, and ongoing administration, plus ACA and COBRA compliance tooling.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The bigger structural difference is the <a href="https://plansource.com/platform-services/" target="_blank" rel="noopener noreferrer">services layer</a>: PlanSource publishes an outsourced administration offering where its own team takes on benefits tasks, not just the software to do them yourself. That pulls it toward mid-market and enterprise buyers who want a vendor relationship with an accountable services team attached. Pricing is fully demo-gated: no tiers, no published numbers, a <a href="https://plansource.com/contact/" target="_blank" rel="noopener noreferrer">request-a-demo form</a> as the front door.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Employee Navigator vs PlanSource, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Employee Navigator</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PlanSource</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who buys it', 'Insurance brokers license it, employers get it through their broker', 'Employers buy direct; resellers and carriers are a second channel'],
                    ['Typical buyer', 'Small and mid-size groups whose broker runs the platform', 'Mid-market and enterprise HR teams'],
                    ['Core scope', 'Enrollment, onboarding, ACA reporting, light HR tools', 'Full benefits lifecycle plus compliance tooling'],
                    ['Who does the admin work', 'Your broker and your HR team, in the platform', 'Your team, or the PlanSource services team if you buy services'],
                    ['Outsourced services', 'Not the product; support partners exist in its marketplace', 'Published services arm that takes on administration tasks'],
                    ['Integrations', '600+ carrier, payroll, and TPA integrations', 'HRIS, payroll, and carrier connections'],
                    ['Pricing visibility', 'Broker tiers published, dollar amounts gated; $0.45 PEPM EDI fee is printed', 'Fully demo-gated, no published numbers'],
                    ['Your broker relationship', 'Central: the broker is the operator', 'Optional: brokers can be involved but the vendor relationship is direct'],
                  ].map(([factor, en, ps], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{en}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{ps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published pages: <a href="https://www.employeenavigator.com/pricing/" target="_blank" rel="noopener noreferrer">Employee Navigator pricing</a> and <a href="https://plansource.com/platform-services/" target="_blank" rel="noopener noreferrer">PlanSource platform and services</a>.
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>1. Distribution decides your experience</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                With Employee Navigator, your day-to-day experience depends heavily on your broker: how well they build plans, how fast they fix enrollment issues, how much of the platform they actually use. A great broker on Employee Navigator is a great setup. With PlanSource, the vendor is accountable to you directly, which means a real contract, a real implementation, and a real sales cycle.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>2. Software vs software-plus-services</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Employee Navigator is a platform; the labor stays with your broker and your HR team. PlanSource publishes a services offering where its team performs administration work. If your real problem is hours of benefits labor rather than missing software, that distinction matters more than any feature comparison.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>3. Company size pulls in opposite directions</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Employee Navigator dominates the small and mid-size group market because broker agencies can serve hundreds of clients on one license. PlanSource leans mid-market and enterprise, where a direct vendor relationship, deeper configuration, and a services team justify the procurement effort. A 30-person company evaluating PlanSource, or a 3,000-person company running on a broker-managed Employee Navigator site, is usually mismatched.
              </p>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '1.75rem' }}>4. Pricing transparency is thin on both sides</h3>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Employee Navigator at least publishes its tier structure and one EDI fee; the rest is contact-sales, and for employers the cost is typically absorbed into broker compensation, which makes it feel free without being free. PlanSource publishes nothing. In both cases, budget for a conversation before you see a number.
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
                  title: 'You trust your broker and want them running the system',
                  body: 'Lean Employee Navigator. It is built precisely for that arrangement, your broker likely already licenses it, and the platform strengthens the relationship you already value. Ask your broker which tier they run and what they handle for you.',
                },
                {
                  title: 'You are mid-market and want a direct vendor with services',
                  body: 'Lean PlanSource. A direct contract, a full-lifecycle platform, and a published services arm fit a benefits team that wants one accountable vendor. Expect a demo-gated sales cycle and price it against the admin hours you get back.',
                },
                {
                  title: 'You want the admin done for you without an enterprise sales cycle',
                  body: 'Then the platform question is the wrong question. Both options still leave a system for someone to run. If the goal is taking enrollment, changes, and ACA work off your desk while keeping your broker, compare done-for-you administration instead.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing Employee Navigator against a payroll-attached option? See <Link href="/services/managed-benefits/gusto-benefits-vs-employee-navigator">Gusto benefits vs Employee Navigator</Link>. Sizing up the enterprise tier instead? Read <Link href="/services/managed-benefits/bswift-vs-businessolver">bswift vs Businessolver</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both are software someone still has to run.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Employee Navigator and PlanSource are both credible, and the honest tiebreaker is distribution: if your broker is your operator, Employee Navigator; if you want a direct mid-market vendor with a services arm, PlanSource. Neither choice is wrong, and BEG works happily alongside brokers running either one.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you want software your team runs, pick from these. If you want the administration off your desk without a co-employment contract or losing your broker, that is <Link href="/services/managed-benefits">BEG Managed Benefits</Link>, powered by isolved: a dedicated team runs enrollment, changes, carrier updates, and ACA forms behind the plans you and your broker already chose, and your estimate is on screen in about 90 seconds.
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
              <h2>Employee Navigator vs PlanSource, answered</h2>
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
