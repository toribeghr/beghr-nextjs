import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for engineering firms: PE licensure tracking, exempt status calls, and project staffing separations handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/engineering' },
  openGraph: {
    title: 'Engineering HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for engineering firms: PE licensure tracking, exempt status calls, and project staffing separations handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/engineering',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Engineering HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for engineering firms: PE licensure tracking, exempt status calls, and project staffing separations handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-engineering');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for an engineering firm?',
    'Certified HR professionals handle your handbook, PE licensure tracking policies, project staffing separation guidance, exempt status reviews, and manager coaching, sized to a firm of dozens of engineers instead of a national practice.',
  ],
  [
    'Can it track PE licenses and renewals?',
    'Yes at the policy and process level: verification at hire, documented renewal tracking, job descriptions tied to licensure, and sealed-work accountability records that show who was licensed to stamp what, when.',
  ],
  [
    'Does it help when a project ends and the bench is full?',
    'Yes. Project-based separations need documented selection criteria, correct final pay, and clean release agreements. HR professionals guide each one so a staffing decision does not become a discrimination claim.',
  ],
  [
    'Is this a PEO for engineering firms?',
    'No. There is no co-employment and no employer-of-record change. Your firm stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does engineering HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingEngineeringPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Engineering', item: 'https://www.beghr.com/services/hr-outsourcing/engineering' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Engineering"
        title="Your engineers seal the drawings. Who seals the personnel files?"
        description="PE renewals tracked in a spreadsheet, technicians classified exempt because everyone else is, project-end separations handled by whoever ran the project: engineering firms carry professional-license risk and employment risk in the same thin file. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Engineering HR Problem</p>
              <h2>Project delivery gets the attention. Employment compliance gets the claim.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before licensure complexity',
                  sub: 'Firms under a couple hundred employees rarely justify that hire, so HR lands on a principal or the office administrator, between proposals and project closeouts.',
                },
                {
                  stat: '1 lapse',
                  label: 'One expired PE stamping one drawing is a firm-level problem',
                  sub: 'Licensure tracking fails quietly. A lapsed license discovered after sealed work ships is a board complaint, an insurance question, and a client conversation nobody wants.',
                },
                {
                  stat: 'Job by job',
                  label: 'How exempt status actually gets decided',
                  sub: 'Licensed engineers usually meet the professional exemption. Technicians, designers, and drafters often do not, and paying them all salaried-exempt builds an overtime liability that grows every week.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/fact-sheets/17a-overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, Fact Sheet 17A on FLSA exemptions</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Engineering HR Compliance</p>
              <h2>The employment problems specific to engineering firms, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>PE licensure tracking and sealed-work accountability</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A professional engineer license is not a one-time credential. Renewal cycles, continuing education requirements, and multi-state comity registrations for firms working across state lines all run on their own clocks, and the firm is accountable for work sealed under a lapsed license. HR outsourcing builds the employment-side infrastructure: license verification at hire, documented renewal tracking with owners and deadlines, job descriptions that state licensure requirements explicitly, and personnel records that can answer who was licensed where, when, if a board or a claim ever asks. Your principals stop tracking renewals from memory between deadline weeks.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Project-based staffing and bench separations that hold up</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Engineering headcount follows the backlog. When a project ends and the bench fills up, someone decides who stays and who goes, and that decision is where discrimination claims are born. Selection criteria that were never written down, layoffs that happen to land on the oldest engineers, rehires a month later that undercut the business-necessity story: each is avoidable with process. HR outsourcing documents the selection rationale before the separation, gets final pay and benefits notices right in every affected state, and structures release agreements correctly, so a staffing decision driven by backlog reads that way on paper too.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Security clearance holders and adverse-action sensitivity</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Firms with defense, aerospace, or federal infrastructure work employ cleared engineers, and clearance status complicates ordinary HR moves. A termination, a demotion, or even a leave of absence can carry reporting implications for a cleared employee, and background check findings during hiring trigger the FCRA adverse-action sequence: pre-adverse notice, a copy of the report, time to respond, then the final notice. Skipping steps creates individual and class exposure. HR outsourcing builds the adverse-action workflow, keeps clearance-related employment records separated and access-controlled, and coaches managers on what not to improvise when a cleared employee is involved.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Public projects and prevailing-wage-adjacent obligations, from the HR side</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Firms supporting public infrastructure work inherit obligations that look like payroll problems but start as HR problems. Which employees are performing covered work on a public project, what classification they hold, and whether field technicians and inspectors are recorded accurately: those answers live in job descriptions, timekeeping policies, and classification records that HR owns. Getting them wrong turns into certified payroll disputes and contract compliance findings. HR outsourcing keeps role definitions, worksite records, and classification documentation clean so the compliance chain from the field to the certified report starts from accurate employment data instead of reconstruction.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Exempt status: engineers, yes; technicians and designers, prove it</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The FLSA professional exemption fits licensed engineers doing engineering work. It gets stretched, badly, when firms extend salaried-exempt treatment to CAD designers, field technicians, drafters, and inspectors because hourly tracking feels beneath a professional office. Those roles frequently fail the duties tests, and every unpaid overtime hour accrues as liability with a multi-year lookback. HR outsourcing reviews each role against the actual exemption tests, documents the analysis, fixes the misclassified roles with a managed transition instead of a panic, and sets up timekeeping policies that survive a Wage and Hour audit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Engineering firms big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Civil and structural firms', body: 'Multi-state comity licenses, public project obligations, and field staff whose classification actually gets audited.' },
                { title: 'MEP and consulting engineers', body: 'Project teams that form and dissolve with the backlog, and separations that need documentation, not improvisation.' },
                { title: 'Geotechnical and environmental firms', body: 'Field technicians, lab staff, and licensed professionals under one roof, with exempt lines that differ role by role.' },
                { title: 'Defense and aerospace suppliers', body: 'Cleared engineers, background check workflows, and employment records that federal customers may eventually examine.' },
                { title: 'Surveying and inspection firms', body: 'Licensed surveyors, hourly field crews, per-project staffing, and overtime math that never made it into policy.' },
                { title: 'Multi-discipline design firms', body: 'Engineers, designers, and admin staff on one salary structure that was never checked against the duties tests.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/engineering">managed payroll for engineering firms</Link>. Building alongside contractors and trades? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Engineering HR outsourcing, answered</h2>
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
