import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Manufacturing HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for manufacturers: shift-floor policies, safety-adjacent discipline, temp-to-hire paperwork, and leave handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/manufacturing' },
  openGraph: {
    title: 'Manufacturing HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for manufacturers: shift-floor policies, safety-adjacent discipline, temp-to-hire paperwork, and leave handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/manufacturing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Manufacturing HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for manufacturers: shift-floor policies, safety-adjacent discipline, temp-to-hire paperwork, and leave handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-manufacturing');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a manufacturer?',
    'Certified HR professionals build your handbook and floor policies, compliant hiring paperwork including temp-to-hire conversions, attendance and discipline systems, and guide leave, accommodations, and terminations.',
  ],
  [
    'Does it replace our safety manager?',
    'No. EHS owns machine guarding, lockout tagout, and OSHA programs. HR outsourcing owns the employment layer: post-incident discipline, training documentation as employment records, and drug testing policies that respect retaliation rules.',
  ],
  [
    'Can it handle attendance point systems?',
    'Yes. Points systems fail legally when they penalize protected absences. HR professionals build the system with FMLA, ADA, and state sick leave carve-outs written in, and coach supervisors on applying it.',
  ],
  [
    'Is this a PEO for manufacturers?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your plant leadership. Powered by isolved.',
  ],
  [
    'What does manufacturing HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingManufacturingPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Manufacturing', item: 'https://www.beghr.com/services/hr-outsourcing/manufacturing' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Manufacturing"
        title="The floor runs three shifts. HR runs on whoever has a minute."
        description="Attendance systems that collide with leave laws, discipline that has to survive both a union steward and a jury, temp-to-hire paperwork, and supervisors promoted for output, not employment judgment. BEG HR outsourcing, powered by isolved, gives manufacturers certified HR professionals for a fraction of an in-house hire."
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
              <p className="eyebrow">The Manufacturing HR Problem</p>
              <h2>Production gets measured hourly. HR gets discovered in depositions.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager for a mid-size plant',
                  sub: 'Under a few hundred employees, that hire loses to equipment and headcount on every budget. So the plant manager and payroll clerk split HR between them.',
                },
                {
                  stat: 'Points',
                  label: 'Attendance systems are the top manufacturing legal trap',
                  sub: 'A no-fault points system that counts an FMLA absence, an ADA accommodation, or state-protected sick time is a lawsuit generator with a paper trail attached.',
                },
                {
                  stat: '3 shifts',
                  label: 'Supervisors making employment calls at 2 AM',
                  sub: 'Second and third shift run without office support. Every shift lead is making discipline and safety calls that bind the company.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noopener noreferrer">US Department of Labor, FMLA</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Manufacturing HR Compliance</p>
              <h2>The employment problems specific to manufacturers, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Attendance points that do not count protected absences</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>No-fault attendance systems fit production scheduling, and they are where manufacturers get sued. FMLA-covered absences cannot accrue points. Neither can ADA accommodation absences, workers compensation medical visits, or sick time protected by a growing list of state and city laws. The system fails at the margins: the supervisor who does not recognize an FMLA-qualifying event, the tracker that auto-assigns points, the termination at point twelve that included two protected absences. HR outsourcing builds the carve-outs into the written system, trains the people applying it, and reviews terminations before they happen instead of defending them after.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Discipline and documentation that survive scrutiny</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plant discipline has to hold up in more venues than most: unemployment hearings, EEOC charges, union grievances where a CBA applies, and OSHA retaliation complaints when discipline follows an injury report. The pattern that wins is boring: written standards, progressive steps applied the same way across shifts, and documentation created at the time, not reconstructed later. HR outsourcing writes the disciplinary framework, coaches supervisors on the conversations, and keeps the documentation standard consistent across first, second, and third shift, which is exactly where consistency usually dies.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Temp-to-hire pipelines without the joint-employer surprise</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most plants staff through agencies and convert the keepers. The employment-law reality: joint-employer doctrines can make the plant responsible for agency workers&apos; treatment long before conversion, and the conversion itself is a full hiring event with I-9, new hire reporting, benefits eligibility clocks, and orientation requirements. HR outsourcing sets the written rules of engagement with your staffing agencies, the conduct standards applied to everyone on your floor, and a conversion packet that makes temp-to-hire a process instead of a pile of assumptions.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Safety-adjacent employment policies: testing, incidents, return to work</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>EHS owns the safety program; HR owns the employment consequences. Post-incident drug testing has to be structured so it does not deter injury reporting under OSHA&apos;s retaliation rules. Discipline after an incident has to distinguish violating a rule from reporting an injury. Return to work after a comp claim runs through light-duty offers, ADA interactive process obligations, and fitness-for-duty documentation. Each intersection is a place where a good safety culture and a bad employment process can produce a very expensive outcome. HR outsourcing writes those policies and walks your team through the live cases.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Handbooks for a bilingual, multi-shift floor</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A manufacturing handbook has to cover what office templates skip: shift schedules and rotation expectations, overtime assignment rules, PPE and dress standards as employment policy, mobile phone rules on the floor, lockout-adjacent conduct rules, and inclement weather and shutdown pay practices. And it has to be readable by the workforce you actually employ; if a substantial share of the floor works primarily in Spanish, the handbook and key acknowledgments should too. The Expert plan builds it custom, keeps it current across your states, and maintains the posters at every facility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Manufacturers with real headcount and no HR bench</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Precision and job shops', body: 'Machinists and skilled trades where every hire is hard-won and every termination needs a clean file.' },
                { title: 'Food and beverage processors', body: 'Sanitation shifts, temperature environments, and workforce rules layered under FDA and USDA operations.' },
                { title: 'Plastics, packaging, and converting', body: 'Continuous operations, rotating shifts, and attendance systems under real legal pressure.' },
                { title: 'Metal fabrication and welding', body: 'Certification-tracked welders, hot work environments, and post-incident processes that must be right.' },
                { title: 'Electronics and assembly', body: 'Temp-heavy staffing models, conversion pipelines, and multi-line supervisors making HR calls.' },
                { title: 'Multi-plant operators', body: 'Two or more facilities, sometimes across state lines, needing one employment standard everywhere.' },
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
              Shift differentials and union payroll the bigger problem? That is <Link href="/services/managed-payroll/manufacturing">managed payroll for manufacturing</Link>. Also in this silo: <Link href="/services/hr-outsourcing/construction">construction HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Manufacturing HR outsourcing, answered</h2>
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
