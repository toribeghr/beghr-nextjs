import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Breweries | Instant Estimate | BEG',
  description: 'Benefits administration for breweries: taproom variable-hour ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/brewery' },
  openGraph: {
    title: 'Benefits Admin for Breweries | Instant Estimate | BEG',
    description: 'Benefits administration for breweries: taproom variable-hour ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/brewery',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Breweries | Instant Estimate | BEG', description: 'Benefits administration for breweries: taproom variable-hour ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-brewery');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a brewery?',
    'Plan setup, enrollment for production and taproom staff, life-event changes, carrier updates, payroll deduction sync, variable-hour ACA eligibility tracking, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Our taproom staff hours swing constantly. How does ACA eligibility work?',
    'Through the IRS lookback measurement method: hours are averaged over a measurement period to determine full-time status for a following stability period. The system tracks it continuously, so eligibility decisions are documented instead of guessed.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, eligibility data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Is this a PEO for breweries?',
    'No. There is no co-employment and no employer-of-record change. The brewery stays the employer and your plans stay your plans. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a brewery?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsBreweryPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Breweries', item: 'https://www.beghr.com/services/managed-benefits/brewery' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Breweries"
        title="One company, two workforces: brewers on salary, taproom staff on swing shifts."
        description="The production side is steady headcount. The taproom side is variable hours, seasonal patios, and turnover, which is exactly the workforce ACA eligibility rules were written to catch. BEG Managed Benefits, powered by isolved, administers both sides in one system while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '2 workforces', label: 'Production and taproom, one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Brewery Benefits Problem</p>
              <h2>The taproom that funds the brewery also breaks its benefits math.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '130 hours',
                  label: 'One month at this level makes an employee ACA full-time',
                  sub: 'A beertender picking up extra shifts through festival season can cross the IRS full-time line without anyone planning it. Untracked, that is an offer of coverage owed and undocumented.',
                },
                {
                  stat: 'Lookback',
                  label: 'The IRS method variable-hour taprooms are supposed to use',
                  sub: 'Measurement periods, stability periods, and administrative periods: workable rules, but only if hours flow into a system that actually applies them.',
                },
                {
                  stat: '50 FTE',
                  label: 'Part-timers count toward the ACA reporting line',
                  sub: 'Full-time equivalents include aggregated part-time hours. A brewery with 30 full-time staff and a deep part-time taproom bench can be an applicable large employer and not know it.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/identifying-full-time-employees" target="_blank" rel="noopener noreferrer">IRS, identifying full-time employees under the ACA</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Breweries</p>
              <h2>The benefits problems specific to breweries, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour tracking for the taproom bench</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Beertenders, kitchen staff, and event crews work schedules that swing with the season, the weather, and the release calendar. The Software + ACA Compliance plan applies the lookback measurement method continuously: hours accumulate, measurement periods close, full-time determinations get made and documented, and offers of coverage go out when the rules say they must. The alternative is a January spreadsheet exercise that reconstructs a year of schedules from the POS.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Two classes of employee, one clean benefits structure</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most breweries offer benefits to salaried production and management staff first, then wrestle with where taproom staff fit as the company grows. Eligibility classes, waiting periods, and hour thresholds all have to be applied consistently, because inconsistent administration is what turns a friendly workplace into a discrimination claim. Plans, classes, and rules live in one system where they get applied the same way every time.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Turnover events without the notice roulette</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Hospitality-side turnover means enrolled employees leave regularly, and each departure triggers coverage end dates, continuation obligations, and deduction stops. Processed in one system, the chain runs automatically; continuation support is scoped to your company size and states on the discovery call, since state continuation rules reach below the federal 20-employee line.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Growth mode: taproom two, the barrelhouse, the pizza kitchen</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Successful breweries sprawl: a second taproom, a restaurant concept, a distribution arm, sometimes each in its own LLC. Common ownership can combine those entities for ACA counting, and every new location adds staff whose hours belong in the same eligibility math. One system holds the whole picture, so growth changes the numbers without breaking the process.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that fits a brewery&apos;s actual staff</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Nobody in a brewhouse or behind a bar is sitting through a benefits meeting. Self-service enrollment with AI-guided plan recommendations lets staff compare plans and enroll from a phone between shifts, and on the Fully Managed plan a dedicated Managed Benefits Specialist runs open enrollment start to finish while a Benefits Auditing Analyst keeps carrier records matching reality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Beverage makers with real teams and no benefits desk</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Production breweries with taprooms', body: 'Salaried brewers plus a variable-hour front of house: the classic two-workforce eligibility problem.' },
                { title: 'Brewpubs', body: 'Full kitchens and bar staff with restaurant-grade turnover attached to a brewery-grade payroll.' },
                { title: 'Multi-location taproom groups', body: 'Two or three rooms, shared staff picking up shifts across locations, hours that have to be combined.' },
                { title: 'Cideries and meaderies', body: 'Orchard-season rhythms and tasting rooms with the same variable-hour tracking problem at smaller scale.' },
                { title: 'Distilleries and tasting rooms', body: 'Production staff, tour guides, and cocktail programs on one benefits program.' },
                { title: 'Craft beverage groups', body: 'Brands and entities under common ownership, where the ACA counts everyone together even if the LLCs do not.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds the variable-hour tracking and Forms 1094-C and 1095-C a taproom workforce demands. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Tip credits and shift payroll the bigger mess? BEG&apos;s core service is <Link href="/services/managed-payroll/brewery">managed payroll for breweries</Link>. People policies and manager questions? See <Link href="/services/hr-outsourcing/brewery">HR outsourcing for breweries</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for breweries, answered</h2>
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
