import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Government Contractor HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for government contractors: E-Verify, SCA fringe administration, and OFCCP obligations handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/government-contractor' },
  openGraph: {
    title: 'Government Contractor HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for government contractors: E-Verify, SCA fringe administration, and OFCCP obligations handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/government-contractor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for government contractors: E-Verify, SCA fringe administration, and OFCCP obligations handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-government-contractor');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a government contractor?',
    'Certified HR professionals handle your handbook, E-Verify procedures, SCA fringe documentation from the HR side, drug-free workplace policies, clearance-related employment policies, and the recordkeeping discipline federal contracts assume you already have.',
  ],
  [
    'Does it cover OFCCP and affirmative action obligations?',
    'It covers the employment infrastructure: self-identification invitations, applicant tracking discipline, dispositioning records, and policy language. Formal AAP statistical plans are typically built with a specialist BEG coordinates with.',
  ],
  [
    'How does E-Verify work under a federal contract?',
    'Contracts with the FAR E-Verify clause require enrollment, verification of new hires within three business days, and verification of existing employees assigned to the contract. HR professionals build that into written procedure.',
  ],
  [
    'Is this a PEO for government contractors?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer, which also keeps your contract compliance obligations clean. Powered by isolved.',
  ],
  [
    'What does government contractor HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingGovernmentContractorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Government Contractor', item: 'https://www.beghr.com/services/hr-outsourcing/government-contractor' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Government Contractors"
        title="You won the contract. Now the contract audits your HR."
        description="E-Verify clauses, SCA fringe obligations, OFCCP thresholds that arrive with a signature, drug-free workplace requirements, and clearance suspensions that become employment decisions overnight: federal contracts convert HR into a compliance function. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Government Contractor HR Problem</p>
              <h2>The proposal gets the attention. The HR file gets the audit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before federal complexity',
                  sub: 'Small and mid-size contractors rarely staff dedicated HR, so compliance clauses land on the contracts manager or the CFO, next to everything else the award brought.',
                },
                {
                  stat: '3 days',
                  label: 'The E-Verify window for new hires under the FAR clause',
                  sub: 'Covered contractors must create E-Verify cases within three business days of a start date, and verify existing staff assigned to the contract. Missed windows are documented findings.',
                },
                {
                  stat: '50+',
                  label: 'Employees, plus a threshold contract, triggers OFCCP programs',
                  sub: 'Cross the headcount and contract-value thresholds and written affirmative action programs, self-identification, and applicant recordkeeping all become mandatory.',
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
              Source: <a href="https://www.dol.gov/agencies/ofccp" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Office of Federal Contract Compliance Programs</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Government Contractor HR Compliance</p>
              <h2>The employment problems specific to federal contracting, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>E-Verify as a FAR requirement, not an option</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Once the E-Verify clause appears in your contract, the program stops being voluntary. Covered contractors must enroll within thirty days of award, create cases for new hires within three business days of the start date, and verify existing employees assigned directly to the contract. Tentative nonconfirmations trigger a strict process of notice, referral, and waiting periods during which the employee keeps working. The failure modes are procedural: cases opened late, TNCs handled by instinct, no record of who was verified against which contract. HR outsourcing writes the procedure, assigns ownership, and keeps the documentation an auditor expects to find.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>SCA health-and-welfare fringe, run from the HR side</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Service Contract Act contracts obligate you to a health-and-welfare fringe benefit for covered service employees, payable in benefits, in cash, or a mix, and the choice creates HR work either way. Benefits mean eligibility tracking, enrollment documentation, and proof of the value delivered per hour. Cash means clean payroll coding that keeps fringe distinct from wages. Either way you need employees mapped to the right wage determination classifications, conformance requests when a role does not fit, and records that reconcile hours against obligations. HR outsourcing builds that administrative layer and coordinates with payroll so DOL inquiries meet documents, not shrugs.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>OFCCP and affirmative action obligations at the thresholds</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal contracts arrive with equal opportunity clauses, and at defined employee-count and contract-value thresholds, contractors take on written affirmative action program obligations covering individuals with disabilities and protected veterans, along with self-identification invitations at application and post-offer, outreach documentation, and applicant tracking that records how every candidate was dispositioned. This is where talent acquisition practice and compliance fuse: a recruiting process that cannot show who applied and why they were not selected fails an audit regardless of intent. HR outsourcing builds the hiring records discipline, the policy language, and the annual rhythms, coordinating with AAP specialists where formal statistical plans are required.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Drug-free workplace requirements with proof behind them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Drug-Free Workplace Act requires covered contractors to publish a policy statement, establish an awareness program, notify employees that compliance is a condition of employment, and act within days when an employee reports a workplace drug conviction, including notifying the contracting agency. Agencies and primes increasingly ask for evidence, not assurances: the signed policy acknowledgments, the awareness program materials, the procedure for conviction reporting. Layer state marijuana laws on top and blanket testing policies written a decade ago start creating their own liability. HR outsourcing drafts the compliant policy for your states, documents distribution, and keeps the program inspection-ready.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Security clearance suspensions as employment events</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When an employee loses access to a facility or a clearance gets suspended, the government decides the access question, but every downstream move is an employment decision the contractor owns: paid or unpaid status, reassignment to uncleared work if any exists, leave interactions, benefits continuation, and eventually separation if eligibility does not return. Handled ad hoc, these cases generate discrimination and wage claims, because two employees in the same posture got different treatment. HR outsourcing writes the policy in advance: status options, timelines, communication templates, and documentation standards, so a clearance event follows a process instead of a panic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Contractors big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Professional services contractors', body: 'Consulting, engineering, and program support firms whose first big award brought FAR clauses their handbook never anticipated.' },
                { title: 'IT and cybersecurity contractors', body: 'Cleared and uncleared staff on the same roster, clearance events as employment events, and remote work policies under federal scrutiny.' },
                { title: 'Facilities and base support contractors', body: 'SCA service employees, wage determinations by classification, and fringe administration across sites and option years.' },
                { title: 'Security and staffing services', body: 'High-volume hiring against contract start dates, E-Verify at speed, and licensing plus screening obligations per state.' },
                { title: 'Defense subcontractors', body: 'Flow-down clauses from primes, audit requests that arrive with short deadlines, and compliance representations someone has to be able to back up.' },
                { title: 'GSA schedule and SBIR companies', body: 'Small businesses whose growth into federal work outpaced their employment infrastructure, one award at a time.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/government-contractor">managed payroll for government contractors</Link>, built for SCA and certified payroll demands. Bidding Davis-Bacon work? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Government contractor HR outsourcing, answered</h2>
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
