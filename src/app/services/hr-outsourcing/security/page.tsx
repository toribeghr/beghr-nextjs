import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Security Company HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for security companies: guard license tracking, post orders, background rechecks, and overtime handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/security' },
  openGraph: {
    title: 'Security Company HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for security companies: guard license tracking, post orders, background rechecks, and overtime handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/security',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Security Company HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for security companies: guard license tracking, post orders, background rechecks, and overtime handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-security');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a security company?',
    'Certified HR professionals handle your handbook, guard license and endorsement tracking policies, background recheck procedures, post order acknowledgments, and manager coaching, sized to a regional guard company instead of a national contractor.',
  ],
  [
    'Can it track guard cards and armed endorsements?',
    'Yes at the policy and process level: verification at hire, documented renewal tracking with advance notice, and job descriptions that make an active license and endorsement a condition of the post.',
  ],
  [
    'Does it cover use-of-force policy documentation?',
    'Yes at the employment layer: signed policy acknowledgments, training records tied to each guard, and a documented post-incident process. Your operations team still owns the tactical content.',
  ],
  [
    'Is this a PEO for security companies?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does security company HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingSecurityPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Security', item: 'https://www.beghr.com/services/hr-outsourcing/security' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Security"
        title="Your guards hold the posts. Who holds the employment files?"
        description="Guard licenses and armed endorsements on state clocks, post orders that only bind if they are acknowledged, background rechecks nobody schedules, and overtime scattered across client sites: security company HR is where contracts and liability meet. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Security Company HR Problem</p>
              <h2>The posts get covered. The employment records get discovered in litigation.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before security complexity',
                  sub: 'Guard companies run on thin contract margins, so HR lands on the operations manager, between scheduling, client calls, and the next post inspection.',
                },
                {
                  stat: '1 lapse',
                  label: 'One expired guard card on one post is a licensing incident',
                  sub: 'State regulators license the company and the individual. An unlicensed guard standing post exposes both, and the client contract usually makes it a breach as well.',
                },
                {
                  stat: 'Every site',
                  label: 'Hours across client posts aggregate for overtime',
                  sub: 'A guard covering three sites in a week has one employer and one overtime calculation, no matter how the hours bill to clients. Site-by-site timekeeping hides the total.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, overtime pay</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Security HR Compliance</p>
              <h2>The employment problems specific to security companies, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Guard licensing and armed endorsements tracked like the liability they are</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Nearly every state licenses security officers, and armed posts add a second layer: firearms endorsements, qualification shoots on fixed cycles, and training-hour requirements that vary by state. A guard whose card lapsed last month is an unlicensed guard on your client&apos;s property, which regulators, the client contract, and any plaintiff&apos;s attorney will each treat as your company&apos;s failure. HR outsourcing builds the employment machinery: license and endorsement verification at hire, a documented renewal tracking policy with advance notice, job descriptions that make an active credential a condition of the post, and a personnel file that proves the company managed it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Post orders as enforceable employment policy</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Post orders are where client requirements become employee obligations, and they only carry weight in a discipline case or lawsuit if the guard demonstrably received, understood, and acknowledged them. A guard fired for leaving a post can beat the termination if no signed acknowledgment exists; a company sued after an incident will be asked to produce exactly that paper. HR outsourcing treats post orders as employment documents: an acknowledgment process for every assignment and every revision, records tied to the individual personnel file, and a discipline framework that connects post order violations to consistent, documented consequences instead of manager improvisation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks at hire, and rechecks nobody remembers to run</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security hiring lives on background checks: state licensing boards require them, client contracts layer on their own standards, and negligent-hiring liability sits behind every post. The FCRA&apos;s disclosure and adverse-action steps apply to every check, state fair-chance laws restrict how findings are used, and many client contracts and state rules expect periodic rechecks that companies quietly stop running after year one. HR outsourcing builds the whole cycle as written procedure: compliant screening at hire, a recheck calendar with an owner, documentation of what was reviewed and decided, and a consistent standard so screening decisions do not vary guard by guard.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Overtime across multiple client posts and sites</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Guard scheduling is a constant shuffle: open posts, call-offs, doubles, and guards floated between client sites. Wage law does not care how the hours bill; all hours for one employer aggregate into one workweek, overtime is owed past forty regardless of which client absorbed the shift, and differing site pay rates require a blended regular-rate calculation most schedulers have never heard of. Travel between sites during a shift is generally compensable too. HR outsourcing sets the policies that keep the math honest: unified timekeeping across posts, written call-off and double-shift rules, and scheduler training so recruiting a guard to cover a post does not create a wage claim.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Use-of-force acknowledgment and the post-incident process</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>After a use-of-force incident, the first documents requested are employment documents: the policy, the guard&apos;s signed acknowledgment, the training record, and what the company did next. A strong policy without a signature is close to no policy at all. HR outsourcing owns the employment layer: acknowledgment at hire and at every policy revision, training completion tracked per guard, a written post-incident procedure covering the report, any administrative leave, drug and alcohol testing where policy and state law allow, and the investigation file. Operations decides what the use-of-force standard says; HR makes sure the company can prove every guard was bound by it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Security companies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Contract guard companies', body: 'Unarmed and armed posts across client sites, with license tracking, post orders, and overtime aggregation as daily exposure.' },
                { title: 'Armed and executive protection firms', body: 'Firearms endorsements, qualification cycles, and use-of-force documentation where one missing signature changes a lawsuit.' },
                { title: 'Event security providers', body: 'Surge staffing, temporary guards who still need licenses and acknowledgments, and pay rules that shift by venue and state.' },
                { title: 'Mobile patrol and alarm response', body: 'Lone drivers across territories, compensable drive time between stops, and post-incident procedures that run at 3AM.' },
                { title: 'Campus, healthcare, and facility security', body: 'Dedicated site teams under client-mandated screening and training standards that must live in your personnel files, not theirs.' },
                { title: 'Growing regional operators', body: 'Companies winning contracts across state lines, where each new state means a new licensing board and a new set of employment rules.' },
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
              Multi-site payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/security">managed payroll for security companies</Link>. Shift-based workforces are familiar ground: see <Link href="/services/hr-outsourcing/manufacturing">manufacturing HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Security company HR outsourcing, answered</h2>
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
