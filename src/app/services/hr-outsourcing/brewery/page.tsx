import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Brewery HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for breweries: taproom tip pooling, alcohol server rules, and production floor policies handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/brewery' },
  openGraph: {
    title: 'Brewery HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for breweries: taproom tip pooling, alcohol server rules, and production floor policies handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/brewery',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Brewery HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for breweries: taproom tip pooling, alcohol server rules, and production floor policies handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-brewery');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a brewery?',
    'Certified HR professionals handle your handbook, tip pooling policies, alcohol service rules, production floor discipline documentation, seasonal onboarding, and manager coaching, built for an operation that is both a manufacturer and a hospitality venue.',
  ],
  [
    'Does it cover both the production floor and the taproom?',
    'Yes. Production staff and taproom staff live under different wage-and-hour rules, and the policies reflect that: one handbook, two clearly separated rule sets, no borrowed restaurant template.',
  ],
  [
    'Can minors work in our taproom or kitchen?',
    'Often in kitchen and busing roles, rarely in service. State alcohol server minimum ages and federal child labor rules both apply. HR professionals map compliant duties for each role and state.',
  ],
  [
    'Is this a PEO for breweries?',
    'No. There is no co-employment and no employer-of-record change. Your brewery stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does brewery HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingBreweryPage() {
  return (
    <>
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
              { '@type': 'ListItem', position: 3, name: 'Brewery', item: 'https://www.beghr.com/services/hr-outsourcing/brewery' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Breweries"
        title="You run a manufacturer and a bar under one roof. Your HR rules know the difference. Do your policies?"
        description="Production staff live under manufacturing wage and safety rules. Twenty feet away, taproom staff live under tipped-employee rules. Add seasonal event crews and minor employees, and brewery HR gets complicated fast. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Brewery HR Problem</p>
              <h2>The beer gets the attention. The tip pool gets the lawsuit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before brewery complexity',
                  sub: 'Most breweries run lean enough that HR lands on the taproom manager or the owner, who is also brewing, distributing, and booking the food trucks.',
                },
                {
                  stat: '2 rulebooks',
                  label: 'Manufacturing rules and tipped-service rules, one payroll',
                  sub: 'A cellar hand and a beertender sit on the same org chart under different overtime, tip, and safety rules. Policies borrowed from a restaurant template cover half the building.',
                },
                {
                  stat: '1 manager',
                  label: 'One supervisor in the tip pool can taint the whole pool',
                  sub: 'Federal law bars managers and owners from keeping employee tips. A shift lead who pours and takes a pool share is one of the most common brewery wage claims.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.dol.gov/agencies/whd/youthrules" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, YouthRules, young worker protections</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Brewery HR Compliance</p>
              <h2>The employment problems specific to breweries, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Two workforces under one roof, with two sets of rules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A brewery with a taproom is a manufacturer and a hospitality venue sharing a wall, and the employment rules do not blend. Production roles carry manufacturing overtime math, safety training obligations, and no tips. Taproom roles carry tip credits where state law allows them, tip pooling rules, and alcohol service requirements. Employees who cross over, a cellar hand covering a busy Saturday shift behind the bar, create the hardest questions: what rate applies, what happens to the tip credit, and how the hours get recorded. HR outsourcing writes policies that treat the two sides distinctly and gives managers clear rules for crossover shifts.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tip pooling in the taproom, done to the current rules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal tip rules changed meaningfully in recent years, and many taprooms still run pools designed under the old ones. Managers, supervisors, and owners can never keep employee tips, full stop, and who counts as a manager turns on duties, not titles. Pools can include back-of-house staff only when no tip credit is taken, and state law often narrows the options further. A written tip pooling policy that names who participates, how shares are calculated, and how tips flow through payroll is the difference between a defensible practice and a collective action. HR outsourcing builds that policy for your states and keeps it current.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Alcohol server rules and minor employees</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every state sets its own minimum age for serving and pouring alcohol, its own server training and permit requirements, and its own rules about minors working where alcohol is consumed. Layer federal child labor law on top and a seventeen-year-old dishwasher is often fine while the same teenager running food to the bar rail may not be. Breweries that hire young kitchen and busing staff need role definitions in writing, age documentation in the file, and managers trained on what each role can and cannot do. HR outsourcing maps those rules to your state, documents them, and updates them when the law moves.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Seasonal and event staffing without the wage traps</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Festival season, anniversary parties, and beer releases mean surge staffing: temporary hires, borrowed production staff pouring at events, and the perennial brewery temptation of unpaid volunteers who pour for a t-shirt and a tab. For-profit businesses generally cannot accept volunteer labor, and enforcement actions against breweries over festival volunteers are well documented. HR outsourcing gives you a compliant surge model: rapid onboarding paperwork, clear temporary-employee classifications, event pay policies including tips at off-site pours, and recruiting support built into the process, so scaling up for a festival weekend does not create a wage claim that outlasts the season.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Safety-adjacent discipline on the production floor</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Brewery production carries real hazards: CO2 in confined spaces, caustic chemicals in the CIP loop, forklifts in tight quarters, and pressurized tanks. Safety programs address the hazards; HR addresses the people. Discipline for safety violations has to be documented and applied consistently, or the one termination you truly need will look arbitrary. Injury reporting policies must avoid anything that reads as retaliation against an employee who reports. And post-incident drug testing needs a written policy that fits both federal guidance and state law. HR outsourcing builds the documentation layer that lets your safety culture survive contact with an unemployment hearing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Breweries big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Production breweries with taprooms', body: 'The classic two-rulebook problem: cellar and packaging staff on one side, beertenders and tip pools on the other, one owner in the middle.' },
                { title: 'Brewpubs', body: 'Full kitchens, tipped servers, minor employees in kitchen roles, and a brewing operation that still needs manufacturing-grade policies.' },
                { title: 'Multi-location taproom groups', body: 'Consistent handbooks and tip policies across locations, sometimes across state lines where tip credit rules diverge sharply.' },
                { title: 'Cideries, distilleries, and wineries', body: 'Same structure, different liquid: production floor plus tasting room, seasonal surges, and state alcohol rules that shape who can pour.' },
                { title: 'Contract and alternating proprietorships', body: 'Lean teams sharing facilities, where classification questions and safety documentation get murky without written policies.' },
                { title: 'Fast-growing regional breweries', body: 'Headcount that doubled since the last handbook update, new states in distribution, and hiring that outran the paperwork.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/brewery">managed payroll for breweries</Link>. Running a full restaurant group too? See <Link href="/services/hr-outsourcing/multi-unit-restaurant">HR outsourcing for multi-unit restaurants</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Brewery HR outsourcing, answered</h2>
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
