import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Franchise HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for franchises: joint-employer exposure, multi-unit policy consistency, and manager coaching handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/franchise' },
  openGraph: {
    title: 'Franchise HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for franchises: joint-employer exposure, multi-unit policy consistency, and manager coaching handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/franchise',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Franchise HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for franchises: joint-employer exposure, multi-unit policy consistency, and manager coaching handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-franchise');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a franchise operation?',
    'Certified HR professionals handle your handbook, per-location policy consistency, leave administration, unit manager coaching, and compliance guidance across every state you operate in, sized to a franchise group instead of a corporate HR department.',
  ],
  [
    'Does HR outsourcing reduce joint-employer risk?',
    'It helps you document that employment decisions sit with you, the franchisee: clean policies, job descriptions, and disciplinary records in your name. No provider can eliminate joint-employer exposure, but documentation is the first defense.',
  ],
  [
    'Can it keep policies consistent across locations in different states?',
    'Yes. One core handbook with state-specific supplements, so every location runs the same playbook while wage, leave, and posting rules match each state. The Elite plan adds proactive alerts when laws change.',
  ],
  [
    'Is this a PEO for franchises?',
    'No. There is no co-employment and no employer-of-record change. Your franchise entity stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does franchise HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingFranchisePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Franchise', item: 'https://www.beghr.com/services/hr-outsourcing/franchise' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Franchise"
        title="You bought a proven system. Employment compliance was not in the manual."
        description="Joint-employer exposure, policies that drift between units, acquired locations still running on the old owner's paperwork: franchise HR carries risk the operations manual never mentions. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Franchise HR Problem</p>
              <h2>The brand gives you operations. Employment compliance stays on you.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before multi-unit complexity',
                  sub: 'Franchise groups under a few hundred employees rarely have the volume to justify that hire, so HR lands on the operating partner or a district manager, on top of running the units.',
                },
                {
                  stat: '2 tests',
                  label: 'NLRB and DOL each run their own joint-employer analysis',
                  sub: 'The standards have shifted repeatedly, and both agencies look at who actually controls hiring, firing, discipline, and pay. Your documentation decides how that question gets answered.',
                },
                {
                  stat: 'Every unit',
                  label: 'One manager handling discipline differently sets a precedent',
                  sub: 'A termination handled one way in one location and another way across town is the fact pattern discrimination claims are built on. Consistency across units is an HR process, not a hope.',
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
              Source: <a href="https://www.ftc.gov/legal-library/browse/rules/franchise-rule" target="_blank" rel="noopener noreferrer">Federal Trade Commission, Franchise Rule</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Franchise HR Compliance</p>
              <h2>The employment problems specific to franchising, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Keeping brand standards and employment control on separate pages</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The franchisor controls the brand: menus, uniforms, store layout, operating hours. The joint-employer question turns on something different: who actually controls the terms and conditions of employment. When a franchisee runs on policies pulled from franchisor templates, uses the brand&apos;s job descriptions verbatim, and disciplines according to corporate scripts, the line blurs, and a plaintiff&apos;s lawyer will argue the franchisor and franchisee are joint employers. HR outsourcing builds employment infrastructure in your name: your handbook, your job descriptions, your disciplinary process, documented as your decisions. That separation protects you and keeps your franchisor relationship clean.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>One playbook across every unit, with state law layered correctly</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Multi-unit operators accumulate policy drift: the first location&apos;s handbook came with the FDD packet, the third location&apos;s manager wrote her own PTO rules, the fifth location is in a state with paid sick leave and predictive scheduling ordinances nobody read. HR outsourcing consolidates that into one core handbook with state-specific supplements, so every unit runs the same playbook while wage rules, leave laws, and posting requirements match each location&apos;s state. The Expert plan builds it custom and keeps it current; Elite adds proactive alerts when a legislature in one of your states changes the rules.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Converting acquired locations without inheriting old problems</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Growth by acquisition means inheriting another operator&apos;s employment habits: undocumented pay promises, misclassified assistant managers, personnel files that are half a manila folder, and employees who were told things you never agreed to. A conversion needs an HR process: fresh offer letters and handbook acknowledgments, a pay-practice review before the first payroll you run, I-9 verification decisions for the acquired workforce, and rebuilt personnel files. HR outsourcing runs that conversion checklist so day one under your ownership starts a clean record instead of quietly adopting every liability the seller created.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Joint-employer tests are moving targets. Your records should not be.</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The NLRB&apos;s joint-employer standard has swung between direct-control and indirect-control formulations through rulemaking and litigation for a decade, and the DOL applies its own economic-reality factors under the FLSA. You cannot control which test a future agency or court applies. You can control what your records show: that you made the hiring decisions, set the schedules, ran the discipline, and granted the raises. HR outsourcing keeps that evidence trail current as a byproduct of doing HR properly, so whichever version of the test arrives, your file answers it the same way.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Manager coaching at every location, not just the flagship</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Unit managers make employment decisions every day: who gets hired, who gets written up, who gets cut from the schedule. Most were promoted for running a great shift, not for knowing wage law, and one improvised termination can cost more than a year of HR support. With live HR professional access from 8AM to 8PM ET on weekdays, every unit manager has someone to call before acting, not after. That turns your riskiest layer of management into a coached one, and it makes recruiting and promoting from within safer, because new managers inherit a process instead of guesswork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Franchise operators big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'QSR and fast-casual franchisees', body: 'High turnover, minor labor rules, and tip and wage complexity multiplied across every unit on the schedule.' },
                { title: 'Fitness, salon, and spa franchisees', body: 'Commission and hourly hybrid pay, certification requirements, and front-desk turnover with no HR owner.' },
                { title: 'Home-services franchise operators', body: 'Techs in the field across territories, vehicle and safety policies, and hiring that never stops.' },
                { title: 'Multi-brand franchise groups', body: 'Different franchisor systems, one employment entity, and policies that need to hold up across all of it.' },
                { title: 'Emerging franchisors', body: 'Corporate-owned locations plus a duty to keep brand standards from becoming employment control over franchisee staff.' },
                { title: 'Franchisees mid-acquisition', body: 'Operators absorbing new units who need conversion paperwork, pay-practice review, and clean files from day one.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/franchise">managed payroll for franchises</Link>. Running restaurant units? See <Link href="/services/hr-outsourcing/multi-unit-restaurant">HR outsourcing for multi-unit restaurants</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Franchise HR outsourcing, answered</h2>
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
