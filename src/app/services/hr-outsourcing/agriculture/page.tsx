import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Agriculture HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for agriculture: H-2A obligations, MSPA disclosures, piece-rate records, and heat rules handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/agriculture' },
  openGraph: {
    title: 'Agriculture HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for agriculture: H-2A obligations, MSPA disclosures, piece-rate records, and heat rules handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Agriculture HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for agriculture: H-2A obligations, MSPA disclosures, piece-rate records, and heat rules handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-agriculture');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a farm or ag operation?',
    'Certified HR professionals handle your handbook, H-2A and MSPA employment documentation, piece-rate pay policies, minor work rules, heat illness prevention policies, and supervisor coaching, sized to a working operation instead of a corporate grower.',
  ],
  [
    'Does it help with H-2A employment obligations?',
    'Yes on the HR side: work contracts, required disclosures, housing-related employment records, and the three-fourths guarantee documented properly. Your agent or attorney still handles the visa filings.',
  ],
  [
    'Can it handle piece-rate pay documentation?',
    'Yes. HR professionals put piece rates in writing, document the minimum-wage floor check for every worker every pay period, and cover rest-break pay where states require it.',
  ],
  [
    'Is this a PEO for agricultural employers?',
    'No. There is no co-employment and no employer-of-record change. Your operation stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does agriculture HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingAgriculturePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Agriculture', item: 'https://www.beghr.com/services/hr-outsourcing/agriculture' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Agriculture"
        title="Your crews bring in the crop. Who keeps the employment records the auditors want?"
        description="H-2A contracts and disclosures, MSPA paperwork for field workers, piece rates that still owe a minimum-wage floor, minors under rules that differ from every other industry, and heat illness prevention laws spreading state by state: agricultural HR is regulated from more directions than almost any workforce. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Agriculture HR Problem</p>
              <h2>The harvest gets the attention. The paperwork gets the WHD investigation.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before agricultural complexity',
                  sub: 'Most operations run lean year-round to survive the season, so HR lands on the owner or bookkeeper, between planting, equipment, and buyers.',
                },
                {
                  stat: '3/4',
                  label: 'The H-2A guarantee: offer work for three-fourths of the contract period',
                  sub: 'H-2A obligations do not end at the visa. Contracts, wage rates, housing, and the three-fourths guarantee are audited employment promises with debarment on the line.',
                },
                {
                  stat: 'Every period',
                  label: 'Piece-rate earnings must clear the wage floor each pay period',
                  sub: 'Piece rates are legal; piece-rate records that cannot show hours worked and an effective hourly rate are how ag employers lose wage investigations.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/agriculture/h2a" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, H-2A program</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Agriculture HR Compliance</p>
              <h2>The employment problems specific to agriculture, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>H-2A obligations from the HR side, kept audit-ready</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Getting workers approved is the visa side; keeping the promises is the employment side, and that is where investigations land. The job order is a binding work contract: the offered wage rate, the three-fourths work guarantee, housing that passes inspection, meal arrangements, and reimbursements owed on schedule. Corresponding U.S. workers in the same jobs are owed the same terms, which many employers miss entirely. HR outsourcing keeps the employment file coherent: contracts and disclosures issued and acknowledged, hours-offered records that can prove the guarantee was met, and housing and reimbursement documentation organized before the Wage and Hour Division asks, not after.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>MSPA disclosures and recordkeeping for field workers</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Migrant and Seasonal Agricultural Worker Protection Act is the baseline law of the field workforce, and it is mostly a paperwork statute: written disclosure of wages and working conditions at recruitment, in a language the worker understands, itemized wage statements every pay period, payroll records kept for three years, and posted worker rights. Using a farm labor contractor does not transfer the risk, since growers are routinely held jointly responsible for the contractor&apos;s violations. HR outsourcing systematizes it: compliant disclosure documents, wage statement contents checked against the statute, retention schedules, and a vetting-and-documentation routine for every labor contractor you rely on.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Minors in agriculture, under rules unlike any other industry</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Agriculture has its own federal child labor framework: younger teens can do nonhazardous farm work outside school hours with parental consent thresholds that shift by age, sixteen is the line for hazardous agricultural occupations rather than eighteen, and the family-farm exemption is far narrower than most operators assume once the kid on the crew is not your kid. State rules layer on top, and several states have been tightening enforcement. HR outsourcing keeps the operation on the right side: age verification at hire, documented parental consent where required, task lists that keep minors out of hazardous-occupation work, and hour limits tracked during school periods.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Piece-rate pay with a documented minimum-wage floor</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Piece rates reward speed, but the law reads them as wages with a floor underneath: each worker&apos;s piece earnings divided by hours worked must clear the applicable minimum wage every pay period, which means hours must be recorded even when pay is per bin. Several states go further, requiring separate paid rest breaks and nonproductive time compensated at an hourly rate on top of the piece rate. The record is the defense; without hours, the investigator&apos;s reconstruction wins. HR outsourcing writes the piece-rate plan down, pairs it with timekeeping that survives scrutiny, and documents the floor check so every pay period closes with proof.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Heat illness prevention, state by state and season by season</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A growing list of states, California, Washington, Oregon, Colorado, Maryland, and Minnesota among them, now mandate heat illness prevention programs for outdoor work: shade, water, acclimatization for new workers, rest schedules at trigger temperatures, training, and a written plan. Federal OSHA has moved toward a national standard while enforcing heat hazards under the general duty clause in the meantime. For a farm, the exposure peaks exactly when attention is scarcest, at harvest. HR outsourcing builds the written program, the training records, and the supervisor checklists, and keeps them current as new states join the list, so recruiting seasonal crews includes handing them a real plan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Operations big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Row crop and produce growers', body: 'Seasonal field crews, piece-rate harvests, and MSPA paperwork that has to exist in the right language before day one.' },
                { title: 'H-2A employers', body: 'Operations whose season depends on the program, where contract, housing, and guarantee records decide the audit.' },
                { title: 'Orchards and vineyards', body: 'Harvest-window labor spikes, ladders and equipment around minors, and heat rules that bind during the busiest weeks.' },
                { title: 'Dairies and livestock operations', body: 'Year-round employees, on-site housing arrangements, and around-the-clock chores that raise real wage-and-hour questions.' },
                { title: 'Nurseries and greenhouses', body: 'A mix of seasonal and permanent staff, piece and hourly pay side by side, and chemical-handling training that needs documentation.' },
                { title: 'Packers and processors', body: 'Post-harvest facilities where ag exemptions fade, overtime rules apply in full, and the workforce doubles for the season.' },
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
              Seasonal payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/agriculture">managed payroll for agriculture</Link>. Production workforces with piece and shift pay are familiar ground: see <Link href="/services/hr-outsourcing/manufacturing">manufacturing HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Agriculture HR outsourcing, answered</h2>
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
