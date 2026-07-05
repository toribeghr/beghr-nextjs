import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cannabis HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for cannabis operators: badge and permit tracking, state background check rules, and compliant hiring at speed. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/cannabis' },
  openGraph: {
    title: 'Cannabis HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for cannabis operators: badge and permit tracking, state background check rules, and compliant hiring at speed. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for cannabis operators: badge and permit tracking, state background check rules, and compliant hiring at speed. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-cannabis');

const FAQS: [string, string][] = [
  [
    'Does BEG actually work with cannabis businesses?',
    'Yes. HR outsourcing serves licensed cannabis operators: dispensaries, cultivators, processors, and vertically integrated companies. Certified HR professionals handle the employment side while you run the licensed operation.',
  ],
  [
    'Can it track state-mandated employee badges and work permits?',
    'Yes at the policy and process level: verification at hire, renewal tracking procedures, and job descriptions tied to badge status, so nobody touches product on a lapsed credential.',
  ],
  [
    'How does hiring work when cannabis is federally illegal?',
    'Employment law still applies in full. Every hire needs an I-9, wage and hour rules govern pay, and state licensing adds background check and badge requirements on top. The process just needs an owner.',
  ],
  [
    'Is this a PEO for cannabis companies?',
    'No. There is no co-employment and no employer-of-record change. Your licensed entity stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does cannabis HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingCannabisPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Cannabis', item: 'https://www.beghr.com/services/hr-outsourcing/cannabis' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Cannabis"
        title="Your license depends on compliance. HR should not be the weak point."
        description="Agent badges that expire, background check rules written into licensing regulations, and hiring paperwork for an industry the federal government still calls illegal: cannabis HR is its own discipline. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Cannabis HR Problem</p>
              <h2>The license gets the lawyers. The workforce gets whoever has a spare hour.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before cannabis complexity',
                  sub: 'Operators under a few hundred employees rarely have the volume to justify that hire, so HR lands on the compliance officer or the GM, on top of keeping the license alive.',
                },
                {
                  stat: '1 badge',
                  label: 'One lapsed agent badge can pull an employee off the floor',
                  sub: 'Most licensing states require a valid employee badge or work permit before anyone touches product. Tracking issue dates, renewals, and terminations reported to the state is an HR process that needs an owner.',
                },
                {
                  stat: '280E',
                  label: 'Admin overhead costs more after tax in this industry',
                  sub: 'Because Section 280E limits ordinary deductions for cannabis businesses, dollars spent on administrative overhead hit harder than in other industries. Lean, well-run HR is worth more here. Ask your tax advisor about your specifics.',
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
              Source: <a href="https://www.cann-ra.org/" target="_blank" rel="noopener noreferrer">Cannabis Regulators Association, member jurisdictions</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Cannabis HR Compliance</p>
              <h2>The employment problems specific to cannabis, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Badge and permit tracking, treated like the credential compliance it is</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most licensing states require every employee who handles product, or in some states every employee at all, to hold a state-issued agent badge or occupational permit, with fees, renewal cycles, and rules about reporting terminations back to the regulator. A budtender working on a lapsed badge is a licensing violation on your record, not theirs. HR outsourcing builds badge management as a real process: verification before the first shift, renewal tracking policies with lead time, job descriptions that state badge requirements, and offboarding steps that include the state notification. Your compliance officer stops running it from a whiteboard.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Hiring in a federally illegal industry, done completely by the book</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal illegality does not exempt you from a single federal employment law. Every hire still requires a Form I-9 with documents examined on time, wage and hour rules still govern overtime, and anti-discrimination statutes apply in full. Meanwhile banking friction complicates the operational side of employment: direct deposit relationships, benefit carrier appetites, and vendors that decline the industry. HR outsourcing keeps the employment paperwork airtight precisely because the rest of the environment is unforgiving, so a routine I-9 audit or wage claim never becomes the thread that unravels a licensed operation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks written into your license, layered on federal rules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Cannabis states write background check requirements directly into licensing regulations: disqualifying offenses for owners and sometimes for employees, fingerprinting in some jurisdictions, and lookback periods that vary state by state. On top of that sit the general rules every employer faces: FCRA disclosure and adverse action steps, ban-the-box laws, and state limits on using conviction records. Getting it wrong in either direction hurts: hire a disqualified person and the regulator has a finding; reject someone unlawfully and you have a claim. HR outsourcing turns the two rulebooks into one written screening procedure per state you operate in.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A drug and impairment policy that holds up inside a cannabis company</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Yes, cannabis companies need drug policies, and writing one is harder here than anywhere else. You cannot be impaired running a trimming machine or driving a delivery route, yet a growing list of states protects lawful off-duty cannabis use, and THC testing does not measure current impairment. The workable policy focuses on observable impairment at work, defines safety-sensitive roles, covers alcohol and other substances without irony, and trains supervisors on reasonable suspicion documentation. HR outsourcing drafts it for your states and coaches managers through the awkward first conversations, so the policy is enforced consistently instead of ignored.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Rapid-growth hiring paperwork that keeps pace with the license map</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Cannabis operators grow in bursts: a new retail license means twenty hires in six weeks, a harvest season means temporary trimmers, an adjacent-state expansion means a workforce under a whole new rulebook. Each burst is a pile of offer letters, I-9s, badge applications, tax forms, and handbook acknowledgments, and shortcuts taken during a sprint surface later as audit findings. HR outsourcing standardizes the new hire packet, sequences badge and background steps so start dates hold, and gives your managers a recruiting-to-onboarding checklist that works the same at store one and store nine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Licensed operators big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Dispensaries and retail chains', body: 'Badge tracking, cash-handling policies, and high-turnover front-of-house teams across one store or ten.' },
                { title: 'Cultivation operations', body: 'Seasonal trimming crews, agricultural wage rules, and safety policies for grow environments.' },
                { title: 'Processors and manufacturers', body: 'Extraction and kitchen safety policies, shift scheduling, and equipment training documentation.' },
                { title: 'Vertically integrated operators', body: 'Retail, cultivation, and processing under one entity, each with different roles, pay structures, and badge rules.' },
                { title: 'Delivery and distribution operations', body: 'Driver policies, vehicle and manifest procedures, and hiring standards for road-facing roles.' },
                { title: 'Multi-state operators scaling up', body: 'A new state means a new licensing rulebook and a new employment rulebook. Both need to land in the handbook.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/cannabis">managed payroll for cannabis</Link>. Running production floors too? See <Link href="/services/hr-outsourcing/manufacturing">HR outsourcing for manufacturing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Cannabis HR outsourcing, answered</h2>
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
