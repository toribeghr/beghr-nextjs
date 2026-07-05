import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Salon & Spa HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for salons and spas: booth renter classification, license tracking, and tip policies handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/salon-spa' },
  openGraph: {
    title: 'Salon & Spa HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for salons and spas: booth renter classification, license tracking, and tip policies handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/salon-spa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Salon & Spa HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for salons and spas: booth renter classification, license tracking, and tip policies handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-salon-spa');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a salon or spa?',
    'Certified HR professionals handle your handbook, cosmetology license tracking policies, tip and service-charge documentation, commission pay policies, and manager coaching, sized to an independent salon or spa instead of a national chain.',
  ],
  [
    'Can it help with the booth renter vs employee question?',
    'Yes at the HR level: documenting how each role actually operates, keeping employee practices consistent with employee status, and flagging arrangements that look like misclassification so you can involve counsel early.',
  ],
  [
    'Does it cover tip pooling and service charges?',
    'Yes. HR professionals put your tip pool, tip credit, and service-charge practices into written policies that match federal and state rules, acknowledged by every worker they affect.',
  ],
  [
    'Is this a PEO for salons and spas?',
    'No. There is no co-employment and no employer-of-record change. Your salon stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does salon and spa HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingSalonSpaPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Salon & Spa', item: 'https://www.beghr.com/services/hr-outsourcing/salon-spa' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Salon & Spa"
        title="Your stylists build the clientele. Who keeps the employment side clean?"
        description="Booth renters who look like employees, tip pools that have to follow federal rules, commission pay that still owes overtime, and license renewals nobody tracks until the state inspector asks: salon and spa HR fails in industry-specific ways. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Salon &amp; Spa HR Problem</p>
              <h2>The book of clients gets the attention. The classification question gets the audit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before salon complexity',
                  sub: 'Almost no independent salon or spa can justify that hire, so HR lands on the owner, between the front desk, the color order, and the schedule.',
                },
                {
                  stat: 'Renter or employee',
                  label: 'The classification question that defines the industry',
                  sub: 'A booth renter who works your hours, follows your policies, and rings through your system looks like an employee to an auditor, with back wages and payroll taxes on the line.',
                },
                {
                  stat: '100%',
                  label: 'How much of a tip pool must go to eligible workers',
                  sub: 'Federal law bars owners and managers from keeping any portion of employee tips. An informal tip pool that includes the wrong people creates liability on every ticket.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/tips" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, tipped employees</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Salon &amp; Spa HR Compliance</p>
              <h2>The employment problems specific to salons and spas, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Booth renter vs employee, answered by facts instead of habit</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>No industry lives closer to the independent-contractor line than this one. A true booth renter sets her own hours, books her own clients, and takes her own payments; a renter who follows your schedule, uses your front desk, and attends your mandatory meetings looks like an employee to the DOL and the state, with back wages, overtime, and payroll taxes riding on the answer. HR outsourcing keeps your side of the line clean: documenting how each chair actually operates, keeping employee policies from bleeding onto renters, and flagging arrangements that drift toward misclassification early enough for counsel to fix them cheaply.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Cosmetology and esthetics license tracking on a real system</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every stylist, esthetician, nail tech, and massage therapist works under a state license with its own renewal cycle and continuing education requirements, and state boards inspect salons, not just individuals. An expired license discovered during an inspection is a citation for the license holder and the establishment both. HR outsourcing builds the employment process around licensure: verification before the first client, job descriptions that make an active license a condition of the role, a documented renewal tracking policy with advance notice, and a personnel file that proves the salon checked. The owner stops finding out about lapses from the inspector.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tip pooling and service charges, written down and legal</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal law is blunt: employers, owners, and managers cannot keep any portion of employee tips, tip pools have eligibility rules that shift depending on whether a tip credit is taken, and a growing number of states ban tip credits entirely. Service charges and automatic gratuities are different animals again, treated as wages rather than tips, with their own overtime consequences. Most salons run all of this on verbal custom. HR outsourcing converts custom into written policy: who is in the pool, how it splits, how service charges flow through pay, and a signed acknowledgment from every worker the policy touches.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission pay that still gets the overtime math right</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Commission-on-services is the industry&apos;s standard pay plan, and it does not switch off wage law. Commissioned stylists still need at least minimum wage for every hour worked, including time spent on cleaning, training, and empty chairs, and overtime for a commissioned employee is calculated on a regular rate that includes the commissions. Retail commissions, product charges, and backbar deductions each carry state-specific limits. HR outsourcing documents the plan properly: written commission agreements, a policy for slow weeks that guarantees the wage floor, and pay practices your bookkeeper can actually follow, so payday stops being a legal improvisation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Client lists and non-solicits when a stylist walks</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a stylist leaves for the salon down the street, the fight is over the book: who owns the client list, what she can take, and whom she can message on the way out. The answer depends on documents signed at hire, and enforceability varies sharply by state, with several states restricting non-competes and non-solicits for lower-wage workers specifically. HR outsourcing manages the employment layer: confidentiality and client-data policies in the handbook, appropriate acknowledgments in every file, social media and booking-app rules written before the departure, and exit procedures that restate obligations in writing. Recruiting her replacement goes better when the last exit was clean.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Salons and spas big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Full-service hair salons', body: 'Commission and hourly stylists side by side, a tip pool at the front desk, and an owner who is also the de facto HR department.' },
                { title: 'Day spas and med spas', body: 'Estheticians, massage therapists, and nurses under different license boards, with treatment-room conduct policies that carry real weight.' },
                { title: 'Nail salons', body: 'High-turnover teams, piece-style service pay that still owes minimum wage and overtime, and state boards that inspect without warning.' },
                { title: 'Barbershops', body: 'Chair rental and employment models mixed in one shop, where keeping the two clean is the whole compliance game.' },
                { title: 'Massage and wellness studios', body: 'Licensed therapists, membership-model service charges, and client-boundary policies that need documentation, not assumption.' },
                { title: 'Multi-location salon groups', body: 'Two to ten locations with different managers and inconsistent pay practices, one misclassification pattern away from a group-wide audit.' },
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
              Tips and commissions making payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/salon-spa">managed payroll for salons and spas</Link>. Tipped teams across locations? See <Link href="/services/hr-outsourcing/multi-unit-restaurant">multi-unit restaurant HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Salon and spa HR outsourcing, answered</h2>
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
