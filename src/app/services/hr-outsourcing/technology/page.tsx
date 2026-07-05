import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Technology HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for technology companies: multi-state remote hiring, contractor classification, and clean RIFs handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/technology' },
  openGraph: {
    title: 'Technology HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for technology companies: multi-state remote hiring, contractor classification, and clean RIFs handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/technology',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Technology HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for technology companies: multi-state remote hiring, contractor classification, and clean RIFs handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-technology');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a technology company?',
    'Certified HR professionals handle your handbook, multi-state policy updates, offer letter and confidentiality agreement templates, classification guidance for contractors, and manager coaching, sized to a growing software team instead of an enterprise.',
  ],
  [
    'Can it handle remote employees in multiple states?',
    'Yes. Each remote hire triggers that state to be tracked for policy purposes: leave laws, final pay rules, required notices. HR professionals keep your handbook and practices current in every state where you employ.',
  ],
  [
    'Does it help with developer contractor classification?',
    'Yes at the HR process level: written classification reviews, engagement documentation, and conversion guidance when a contractor looks like an employee. Final legal calls on close cases still belong with your employment counsel.',
  ],
  [
    'Is this a PEO for tech companies?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does technology HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingTechnologyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Technology', item: 'https://www.beghr.com/services/hr-outsourcing/technology' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Technology"
        title="Your team ships product. Who ships the employment paperwork?"
        description="Remote hires scattered across a dozen states, contractor developers who look a lot like employees, offer letters with IP clauses nobody has reviewed since the seed round: tech companies accumulate employment risk faster than headcount. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Technology HR Problem</p>
              <h2>Product velocity gets the standups. Employment compliance gets discovered in diligence.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before multi-state complexity',
                  sub: 'Most tech companies under a couple hundred employees never make that hire, so HR lands on a founder, an office manager, or whoever set up the payroll account.',
                },
                {
                  stat: '1 hire',
                  label: 'One remote employee in a new state changes your obligations',
                  sub: 'A single hire can pull in new state leave laws, final pay deadlines, sick time accrual, and required notices. Most teams find out after the hire, not before.',
                },
                {
                  stat: '6 factors',
                  label: 'The economic reality test for contractor classification',
                  sub: 'The DOL weighs six factors to decide whether your 1099 developer is actually an employee. Misclassification means back wages, back taxes, and penalties, discovered all at once.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, employee misclassification</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Technology HR Compliance</p>
              <h2>The employment problems specific to tech, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Remote multi-state employment without the patchwork guesswork</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every remote hire in a new state is a registration-triggering event on the payroll side and a policy-triggering event on the HR side. Paid sick leave accrual rules, state family leave programs, pay transparency requirements in job postings, final paycheck deadlines that range from next payday to same day: each state layers its own rules on top of federal law. A handbook written for one state quietly becomes noncompliant in five others. HR outsourcing tracks the states where you actually employ, keeps policies and required notices current in each one, and flags what a planned hire in a new state will change before the offer goes out.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Offer letters, IP assignment, and confidentiality that hold up later</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>For a technology company, the employment paperwork is also the asset paperwork. Offer letters that accidentally promise more than intended, invention assignment agreements missing the state-required carve-outs several states mandate, confidentiality obligations that were never actually signed: these gaps surface in fundraising diligence and acquisition due diligence, at the worst possible moment. HR outsourcing builds a consistent hiring packet, an offer letter template that says what you mean, a signature process that produces a complete file for every employee, and an audit of existing files so you know which signatures are missing before a data room asks for them.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Contractor versus employee, decided on the factors instead of the budget</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tech teams love 1099 developers: fast to engage, easy to end, no benefits load. The DOL and state agencies apply economic reality factors that do not care about any of that. A contractor who works your hours, uses your equipment, sits in your standups, and has no other clients looks like an employee to an auditor, and misclassification claims arrive with back overtime, back taxes, and penalties attached. HR outsourcing puts a written classification review behind every engagement, documents the factors that support contractor status, and guides the conversion to employee when the relationship has clearly become one.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>RIFs done right: WARN thresholds, selection documentation, and releases</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tech layoffs move fast, and speed is where the mistakes live. The federal WARN Act sets notice thresholds for larger employers, several states set lower ones, and selection criteria that skew older or land disproportionately on one group create discrimination exposure regardless of intent. Severance releases have their own rules: waivers of age discrimination claims under the ADEA require specific language, consideration periods of 21 or 45 days depending on the structure, and a revocation window. HR outsourcing builds the RIF checklist, documents the selection rationale, and makes sure the releases you pay for are actually enforceable.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Equity communication as employment documentation</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Options and RSUs are how tech companies pay, and how tech companies get sued when the paperwork does not match the promise. Offer letters that state grants are subject to board approval, plan documents that actually get delivered, vesting terms an employee acknowledged in writing, and consistent answers when someone asks what happens to unvested equity at termination: these are employment documentation problems, and they are solvable. HR outsourcing makes the employment-side records complete and consistent. What it is not: securities or tax advice, which stays with your counsel and your equity administrator.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Tech companies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'SaaS and software companies', body: 'Post-revenue teams hiring across states, where the handbook has not kept pace with the org chart since the last funding round.' },
                { title: 'Development agencies and consultancies', body: 'Blended W-2 and contractor benches, client-site work, and utilization pressure that makes classification questions constant.' },
                { title: 'Remote-first companies', body: 'Employees in ten or twenty states, one set of policies, and a growing gap between the two that nobody owns.' },
                { title: 'IT services and MSPs', body: 'On-call rotations, technician tiers with real exempt-status questions, and client confidentiality obligations flowing into employment terms.' },
                { title: 'Funded startups, seed through Series C', body: 'Headcount doubling faster than process, equity in every offer, and investor diligence that will eventually read the personnel files.' },
                { title: 'Hardware and product companies', body: 'Engineering, operations, and warehouse roles under one roof, with exempt and non-exempt lines that actually matter.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/technology">managed payroll for technology companies</Link>. Running production or fulfillment alongside the software? See <Link href="/services/hr-outsourcing/manufacturing">HR outsourcing for manufacturing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Technology HR outsourcing, answered</h2>
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
