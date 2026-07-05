import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Skilled Trades HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for the trades: apprenticeship records, safety discipline, travel-time pay, and tool policies handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/trades' },
  openGraph: {
    title: 'Skilled Trades HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for the trades: apprenticeship records, safety discipline, travel-time pay, and tool policies handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/trades',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Skilled Trades HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for the trades: apprenticeship records, safety discipline, travel-time pay, and tool policies handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-trades');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a trades contractor?',
    'Certified HR professionals handle your handbook, apprenticeship and license tracking policies, safety discipline documentation, travel-time and tool policies, and manager coaching, sized to a working contractor instead of a national builder.',
  ],
  [
    'Can it handle apprenticeship program records?',
    'Yes at the employment layer: registration paperwork, ratio documentation, wage progression records, and related-instruction tracking kept audit-ready, whether your program is registered with the state or the federal Office of Apprenticeship.',
  ],
  [
    'Does it work for union shops?',
    'Yes. HR professionals keep handbook policies aligned with your CBA, document discipline so it survives grievances, and keep union and open-shop practices straight if you run both.',
  ],
  [
    'Is this a PEO for trades contractors?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your crews. Powered by isolved.',
  ],
  [
    'What does trades HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingTradesPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Skilled Trades', item: 'https://www.beghr.com/services/hr-outsourcing/trades' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Skilled Trades"
        title="Your crews do the work. Who does the employment paperwork?"
        description="Apprenticeship records the state can audit, journeyman licenses on renewal clocks, safety discipline that has to survive a grievance, and travel-time pay questions on every multi-site week: trades HR is paperwork-heavy in ways an office-job handbook never covers. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Trades HR Problem</p>
              <h2>The jobs get finished. The employment records get subpoenaed.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before trades complexity',
                  sub: 'Most shops under a hundred employees cannot justify that hire, so HR lands on the owner or office manager, between bids, material orders, and payroll Friday.',
                },
                {
                  stat: 'Ratios',
                  label: 'Apprentice-to-journeyman ratios are checked, not assumed',
                  sub: 'Registered apprenticeship programs carry ratio, wage progression, and instruction requirements. Sloppy records can cost the program its registration and the shop its pipeline.',
                },
                {
                  stat: 'Drive time',
                  label: 'The shop-to-site question that follows every multi-site week',
                  sub: 'Whether the drive counts as paid time depends on facts most schedulers never write down. Get it wrong across a crew and every week compounds the wage exposure.',
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
              Source: <a href="https://www.dol.gov/general/topic/workhours/traveltime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, travel time and work hours</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Trades HR Compliance</p>
              <h2>The employment problems specific to the trades, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Apprenticeship records and journeyman licenses on a system, not a clipboard</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A registered apprenticeship program is a records obligation as much as a training pipeline: registration agreements for every apprentice, wage progression tied to hours, related-instruction tracking, and apprentice-to-journeyman ratios that inspectors actually check. Meanwhile the journeymen and masters carry state and local licenses with their own renewal cycles, and an expired license on a permit job is a stop-work problem. HR outsourcing builds the employment layer for both: apprentice files that survive a state or federal audit, license verification at hire, documented renewal tracking, and job descriptions that tie the credential to the work. The pipeline you spent years building stops depending on one binder.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Union and open-shop policies kept straight, especially when you run both</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A collective bargaining agreement rewrites big pieces of the employment relationship: discipline procedures, seniority, dispatch, grievance steps, and pay rules that a generic handbook contradicts at the company&apos;s peril. Shops that run union and open-shop crews side by side, or double-breasted entities, need policies that respect the CBA where it governs and standard employment law where it does not, without managers mixing the two on the fly. HR outsourcing keeps the lines clean: handbooks written around the CBA instead of against it, supervisor training on which rules apply to which crew, and documentation habits that hold up in front of an arbitrator as well as an agency.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Safety discipline that survives a grievance</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every shop says safety is non-negotiable; far fewer can produce the record that proves it. When a fall-protection violation ends in a suspension and the suspension ends in a grievance or retaliation claim, the case turns on the paper: a written rule, documented training, progressive discipline applied the same way to the foreman&apos;s friend and everyone else, all dated before the incident. Inconsistency is the killer, since an arbitrator or agency will surface every time the same violation drew a shrug. HR outsourcing builds the discipline system: clear written safety rules in the handbook, a progressive framework, and manager coaching so enforcement is consistent enough to defend.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-site crews and the travel-time pay question</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Trades wage claims are usually about the edges of the day: the stop at the shop to load material, the drive from the shop to the site, the run between two jobs after lunch, the trip to the supply house. Federal rules make travel between job sites during the workday compensable and treat the morning shop stop as the start of work once loading begins, and several states go further. Multiply an unpaid half hour by a crew and two years and the number gets serious. HR outsourcing writes the travel-time policy deliberately, matches timekeeping to it, and trains the people who schedule crews so the practice matches the paper.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tool, vehicle, and deduction policies in writing</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Trucks, fuel cards, company tools, and personal tools on company jobs generate constant small disputes that turn into legal ones at separation: the tech who quits with the van at his house, the missing tool inventory, the damage deduction that drops a final check below minimum wage. Many states sharply restrict what can be deducted from pay, and personal use of a company vehicle has tax consequences payroll needs to know about. HR outsourcing puts the whole area in writing: vehicle and tool agreements signed at issue, return procedures at separation, and deduction rules that follow state law, so recruiting the next tech is not financed by fighting the last one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Shops big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Electrical contractors', body: 'Licensed journeymen and apprentices on permit jobs, where ratio math and license renewals are enforcement targets, not formalities.' },
                { title: 'Plumbing and mechanical shops', body: 'Service techs in customer homes and new-construction crews on sites, two different risk profiles under one roof.' },
                { title: 'HVAC companies', body: 'Seasonal surges, on-call rotations, EPA certifications, and take-home vans that raise pay and policy questions daily.' },
                { title: 'Roofing and exterior contractors', body: 'Weather-driven scheduling, subcontractor lines that blur into misclassification risk, and safety discipline with real stakes.' },
                { title: 'Welding and fabrication shops', body: 'Certification-dependent work, shop and field crews on different rules, and hot-work safety policies that need signatures.' },
                { title: 'Multi-trade and specialty contractors', body: 'Crews crossing state and municipal license lines, union and open-shop mixes, and one office manager holding it together.' },
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
              Certified payroll and job costing the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/trades">managed payroll for the trades</Link>. Running bigger site crews? See <Link href="/services/hr-outsourcing/construction">construction HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Trades HR outsourcing, answered</h2>
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
