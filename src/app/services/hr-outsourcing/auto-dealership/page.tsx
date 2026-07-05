import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Auto Dealership HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for auto dealerships: FLSA exemptions, written commission plans, and minor work rules handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/auto-dealership' },
  openGraph: {
    title: 'Auto Dealership HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for auto dealerships: FLSA exemptions, written commission plans, and minor work rules handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/auto-dealership',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Auto Dealership HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for auto dealerships: FLSA exemptions, written commission plans, and minor work rules handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-auto-dealership');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a dealership?',
    'Certified HR professionals handle your handbook, commission plan documentation, FLSA exemption reviews at the policy level, minor work rules, leave administration, and manager coaching, sized to a rooftop or dealer group instead of a corporate giant.',
  ],
  [
    'Can it help with commission pay plan disputes?',
    'It helps you prevent them: written pay plans that define when commissions are earned, how chargebacks work, and what happens at termination, so disputes get answered by a document instead of a memory.',
  ],
  [
    'Can minors work in our service or detail department?',
    'Sometimes, with limits. Federal hazardous occupation rules bar workers under 18 from many service tasks, including most driving. HR professionals help you scope compliant duties for each role.',
  ],
  [
    'Is this a PEO for dealerships?',
    'No. There is no co-employment and no employer-of-record change. Your dealership stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does dealership HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingAutoDealershipPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Auto Dealership', item: 'https://www.beghr.com/services/hr-outsourcing/auto-dealership' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Auto Dealerships"
        title="Your team sells and services cars. Who handles the employment side of the store?"
        description="Pay plans that change monthly, FLSA exemptions that only hold up when documented, minors in the detail bay, and an F&I office that generates its own compliance weather: dealership HR is a specialty. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Dealership HR Problem</p>
              <h2>The showroom gets the attention. The pay plan gets the lawsuit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before dealership complexity',
                  sub: 'Single rooftops and small dealer groups rarely have the headcount to justify that hire, so HR lands on the controller or the GM, on top of everything else.',
                },
                {
                  stat: '7(i)',
                  label: 'The overtime exemption dealerships lean on hardest',
                  sub: 'The retail commission exemption only holds when the math is run over a defined period and documented. Undocumented exemptions turn into back-overtime claims for entire departments.',
                },
                {
                  stat: 'Under 18',
                  label: 'Minors in service and detail face federal task bans',
                  sub: 'Hazardous occupation orders restrict driving, lifts, and other common dealership tasks for workers under 18. One porter moving cars on public roads can be a violation.',
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
              <p className="eyebrow">Dealership HR Compliance</p>
              <h2>The employment problems specific to dealerships, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>FLSA 7(i) and the dealer exemptions, applied the way an auditor reads them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dealerships rely on two overtime exemptions, and both are conditional. The FLSA 13(b)(10) exemption covers salespeople, partsmen, and mechanics primarily engaged in selling or servicing vehicles, and duties matter more than titles. The 7(i) retail commission exemption requires that the regular rate exceed one and a half times minimum wage and that more than half of earnings come from commissions, measured over a defined representative period. BDC reps, lot porters, and detailers usually qualify for neither. HR outsourcing documents which exemption applies to whom, why, and what evidence backs it, before a wage claim asks first.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission pay plans in writing, before the dispute</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most dealership pay disputes trace to a plan announced verbally in a Saturday meeting and enforced from memory. Chargebacks, draws against commission, unwound deals, split deals, and pack all need definitions in a signed written plan that states when a commission is earned versus merely advanced, and what happens to pending deals at termination. Several states require written commission agreements outright, and courts everywhere favor the employee when terms are ambiguous. HR outsourcing turns your pay plans into documents that survive a demand letter, and builds the process for rolling out changes with fresh signatures instead of announcements.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Minors in the service lane and detail bay</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dealerships hire young workers as porters, detailers, and lot attendants, and federal child labor rules cut directly across those roles. Hazardous occupation orders bar workers under 18 from most on-the-job driving on public roads, from operating vehicle hoists and lifts, and from several tasks that feel routine in a service department. State rules layer on work permits, hour limits, and their own task restrictions. HR outsourcing scopes each under-18 role in writing, trains the managers who hand out assignments, and keeps age documentation in the file, so a well-meaning shortcut on a busy Saturday does not become a federal violation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>F&amp;I conduct standards as employment policy</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The finance office carries the highest compliance stakes in the store: payment packing, product stuffing, and deal jacket shortcuts create regulator and lender exposure that lands on the dealership. The employment side is where that risk gets managed. Written F&amp;I conduct standards, acknowledgment signatures, documented discipline applied consistently across producers regardless of their numbers, and clean investigation files are what make it possible to terminate a high-grossing F&amp;I manager for deal misconduct and have the decision hold up. HR outsourcing builds those policies and coaches your managers through enforcing them evenly, which is where most dealerships slip.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Demo vehicle policies as employment documents</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A demo car is compensation, a liability exposure, and a discipline lever all at once, which makes it an employment document, not a handshake. A written demo policy defines who qualifies, what personal use is permitted, how that use is treated for payroll and tax purposes, what insurance and license standing the driver must maintain, and how demo privileges are suspended or revoked as part of discipline. Without one, pulling a demo from an underperforming salesperson invites a constructive-change dispute, and an after-hours accident invites worse. HR outsourcing writes the policy, collects signatures at issuance, and keeps it current.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Dealerships big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Franchise new-car dealerships', body: 'Single rooftops where the controller doubles as HR, pay plans change with the market, and every department has a different wage-and-hour profile.' },
                { title: 'Independent used-car dealers', body: 'Lean sales and recon teams, commission-heavy pay, and no one on staff whose job is keeping the employment paperwork defensible.' },
                { title: 'Multi-rooftop dealer groups', body: 'Consistent policies across stores and states, one handbook framework, and HR support that scales as the group acquires.' },
                { title: 'Service and collision centers', body: 'Flat-rate technicians, apprentice pipelines, and safety-adjacent discipline that has to be documented the same way every time.' },
                { title: 'Powersports, RV, and marine dealers', body: 'Seasonal staffing swings, commissioned sales floors, and recruiting cycles that spin up fast when the season turns.' },
                { title: 'Heavy truck and equipment dealers', body: 'Technicians with certifications to track, CDL-adjacent driving policies, and parts and service teams spread across locations.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/auto-dealership">managed payroll for auto dealerships</Link>. Run a body shop or build sites too? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Dealership HR outsourcing, answered</h2>
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
