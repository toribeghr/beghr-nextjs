import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Property Management HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for property management: on-site staff, rent credits, on-call pay, and fair housing training handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/property-management' },
  openGraph: {
    title: 'Property Management HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for property management: on-site staff, rent credits, on-call pay, and fair housing training handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/property-management',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Property Management HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for property management: on-site staff, rent credits, on-call pay, and fair housing training handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-property-management');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a property management company?',
    'Certified HR professionals handle your handbook, on-call and after-hours pay policies, fair housing training documentation, employee housing agreements, and manager coaching, sized to a portfolio operator instead of a national REIT.',
  ],
  [
    'Does it cover employee housing and rent credits?',
    'Yes at the policy level: written housing agreements, rent credits documented as compensation, and clean separation terms so a departing on-site employee is not also a surprise holdover tenant.',
  ],
  [
    'Can it handle on-call maintenance pay questions?',
    'Yes. HR professionals build written on-call, call-back, and after-hours policies that match federal and state wage rules, so emergency response time is paid correctly and documented.',
  ],
  [
    'Is this a PEO for property management companies?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does property management HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingPropertyManagementPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Property Management', item: 'https://www.beghr.com/services/hr-outsourcing/property-management' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Property Management"
        title="Your teams run the properties. Who runs the employment side?"
        description="On-site staff with rent credits that count as compensation, maintenance techs on call at 2AM, fair housing training that has to be documented, and keys to hundreds of homes in employee pockets: property management HR has failure modes most industries never see. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Property Management HR Problem</p>
              <h2>Occupancy gets the attention. Employment compliance gets the claim.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before portfolio complexity',
                  sub: 'Most management companies never reach the headcount to justify that hire, so HR lands on the regional manager or the owner, between turns, budgets, and owner calls.',
                },
                {
                  stat: '2AM',
                  label: 'When the burst pipe call comes in, the pay question comes with it',
                  sub: 'On-call maintenance blurs the line between waiting time and working time. Get it wrong across a crew and every after-hours call becomes unpaid-wage exposure with liquidated damages.',
                },
                {
                  stat: 'Free rent',
                  label: 'A rent credit is compensation, whether or not payroll treats it that way',
                  sub: 'Discounted apartments for on-site staff carry wage, tax, and overtime consequences under the FLSA. Undocumented housing arrangements are a wage audit finding waiting to be written up.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, Fair Labor Standards Act</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Property Management HR Compliance</p>
              <h2>The employment problems specific to property management, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Employee housing and rent credits treated as the compensation they are</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A free or discounted apartment for an on-site manager is compensation, and the FLSA has specific rules about when lodging can credit toward minimum wage and how its value plays into overtime calculations. Most companies handle it with a handshake and a line in the lease, which satisfies neither wage law nor the tax code. HR outsourcing puts the arrangement in writing: a housing agreement separate from the employment relationship where state law allows it, the credit documented and valued consistently, and separation terms that address what happens to the unit when employment ends, before a termination becomes an eviction case.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>On-call maintenance and after-hours pay policies that hold up</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Maintenance techs carry the emergency phone on rotation, and whether those hours are compensable depends on how restricted the employee actually is: response-time requirements, geographic limits, call frequency. Federal rules draw the line between waiting to be engaged and being engaged to wait, and several states add their own call-back and reporting-time pay requirements on top. HR outsourcing writes the on-call policy deliberately: rotation expectations, minimum call-back pay, travel to the property, and time recording for after-hours work, so the answer to what do we owe for last night exists before a tech files a claim asking it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fair housing training as an employment requirement, not a suggestion</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A fair housing complaint usually starts with something an employee said: a leasing agent steering a family, a maintenance tech commenting on a disability accommodation, an assistant manager improvising an answer about assistance animals. The company defends itself with training records or it does not defend itself at all. HR outsourcing makes fair housing training an employment obligation with teeth: required at hire and on a documented refresher cycle, acknowledged in writing, tied to job descriptions for every resident-facing role, and backed by a discipline process when someone freelances. The training itself can come from your industry provider; HR makes it enforceable and provable.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Keys, access, and screening for a workforce inside residents&apos; homes</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Property management employees hold keys and access codes to other people&apos;s homes, which makes hiring diligence and access control employment issues with negligent-hiring liability attached. Background checks for these roles have to follow the FCRA&apos;s disclosure and adverse-action steps plus a growing list of state and local fair-chance laws, and the screening policy has to be consistent, job-related, and documented. HR outsourcing builds the full trust framework: compliant screening procedures at hire, written key and access policies with sign-out accountability, immediate access revocation steps at separation, and an investigation process for the day a resident reports something missing.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Scheduling and overtime across a portfolio of properties</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A tech who covers three properties in a week still has one employer, and all of those hours aggregate for overtime no matter how the time gets billed back to owners. Travel between properties during the workday is generally compensable, floating staff pick up hours nobody is watching, and property-level budgets create quiet pressure to shave recorded time. HR outsourcing sets the rules that keep a portfolio honest: time recording across sites, travel-time treatment, scheduling policies that respect state daily-overtime and split-shift rules where they exist, and manager training so the person recruiting and scheduling a floating crew is not inventing wage law on the fly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Operators big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Multifamily management companies', body: 'On-site managers, leasing teams, and maintenance techs across a portfolio, with rent credits and on-call rotations at every property.' },
                { title: 'Single-family rental operators', body: 'Distributed field staff entering scattered homes daily, where screening, key control, and travel-time pay carry the risk.' },
                { title: 'HOA and community association managers', body: 'Community managers and maintenance staff answering to boards, with after-hours emergencies and resident-facing conduct standards.' },
                { title: 'Commercial property managers', body: 'Building engineers, day porters, and security coverage across sites, with vendor lines that blur into employment questions.' },
                { title: 'Student and senior housing operators', body: 'Seasonal turn crews, resident assistants, and populations that raise screening and conduct stakes well past a standard lease.' },
                { title: 'Growing regional portfolios', body: 'Operators adding properties across state lines, inheriting site staff from prior managers with no consistent files or policies.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/property-management">managed payroll for property management</Link>. Running skilled crews across job sites? The same model works in <Link href="/services/hr-outsourcing/construction">construction HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Property management HR outsourcing, answered</h2>
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
