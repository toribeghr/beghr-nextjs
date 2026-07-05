import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Architecture HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for architecture firms: AXP supervision records, exempt status tests, and project layoffs handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/architecture' },
  openGraph: {
    title: 'Architecture HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for architecture firms: AXP supervision records, exempt status tests, and project layoffs handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/architecture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Architecture HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for architecture firms: AXP supervision records, exempt status tests, and project layoffs handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-architecture');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for an architecture firm?',
    'Certified HR professionals handle your handbook, licensure and AXP documentation policies, exempt status reviews for junior staff, project layoff guidance, and manager coaching, sized to a studio instead of a global practice.',
  ],
  [
    'Are salaried junior designers automatically exempt from overtime?',
    'No. Exempt status depends on duties and salary tests, not job titles or studio culture. Many junior design roles fail the tests, and unpaid overtime accrues as liability until someone checks.',
  ],
  [
    'Can it help with unpaid internships?',
    'Yes. The primary beneficiary test decides whether an intern can be unpaid, and most production work in a studio does not qualify. HR professionals structure internships that hold up.',
  ],
  [
    'Is this a PEO for architecture firms?',
    'No. There is no co-employment and no employer-of-record change. Your firm stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does architecture HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingArchitecturePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Architecture', item: 'https://www.beghr.com/services/hr-outsourcing/architecture' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Architecture"
        title="Your studio designs the buildings. Who designs the employment files?"
        description="Junior staff salaried-exempt because that is how studios have always run, AXP supervision hours nobody documents, layoffs that follow the project calendar: architecture firms inherit an employment model that predates the rules now applied to it. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Architecture HR Problem</p>
              <h2>Design culture gets the studio. Employment law gets the last word.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before studio complexity',
                  sub: 'Most firms under a hundred people never make that hire, so HR lands on a principal or the studio manager, in the gaps between deadlines and charrettes.',
                },
                {
                  stat: 'Duties test',
                  label: 'What decides exempt status, not the word designer',
                  sub: 'Studio overtime culture assumes salaried means exempt. For unlicensed junior staff doing production work under supervision, the duties tests often say otherwise, and the liability compounds deadline by deadline.',
                },
                {
                  stat: '7 factors',
                  label: 'The primary beneficiary test for unpaid interns',
                  sub: 'An unpaid intern doing billable production work is usually an unpaid employee. The test looks at who benefits, and a studio deadline is not an educational experience.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, Fact Sheet 71 on internship programs</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Architecture HR Compliance</p>
              <h2>The employment problems specific to architecture firms, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Licensure and AXP supervision documentation that actually exists</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture licensure runs through documented experience: candidates log AXP hours under the supervision of licensed architects, and the firm carries its own obligations for license verification, renewal tracking, and continuing education. When supervision relationships live in memory instead of records, the firm cannot show who supervised what, and a licensure dispute or board inquiry becomes archaeology. HR outsourcing builds the employment-side structure: license verification at hire, renewal tracking with named owners, job descriptions that distinguish licensed from unlicensed roles, and supervision assignments documented in the personnel file rather than reconstructed from old project directories.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Studio overtime culture versus the actual exemption tests</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The all-nighter before a submission is studio folklore. It is also, for many junior employees, unpaid overtime accruing as liability. The FLSA professional exemption requires specific duties and a salary threshold, and unlicensed junior staff producing drawings under close direction frequently fail the duties test no matter what the offer letter says. State rules can be stricter still. HR outsourcing reviews every role against the real tests, documents the analysis for the roles that are exempt, converts the ones that are not with a managed communication plan, and writes timekeeping policies that fit how a studio actually works.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Project-based layoffs and rehires without the whiplash</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture staffing tracks the development cycle, and firms shrink and regrow with it. The legal risk concentrates in the transitions: layoff selections with no documented criteria, severance offered inconsistently across similar roles, and rehires weeks later that contradict the stated reason for the cut. Final pay deadlines and continuation-of-coverage notices vary by state and are easy to miss in a compressed week. HR outsourcing brings process to the cycle: written selection rationale, correct notices and final pay in each state, consistent release agreements, and rehire documentation that keeps the story straight from separation to return.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Internships that are education, not free production labor</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture has a long tradition of student interns, and wage law has a short list of conditions under which they can be unpaid. The primary beneficiary test asks who gains more from the arrangement, and an intern producing sheets for a billable deadline looks like an employee under every factor that matters. For a for-profit firm the safe answer is usually to pay, and to document the educational structure either way. HR outsourcing designs the internship program: paid or academically integrated, with written learning objectives, defined supervision, and offer paperwork that does not promise employment it does not mean.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state practice and the remote studio</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Firms now design for sites in one state, with staff living in three others, under a license held through reciprocity in a fourth. Each employee state brings its own leave laws, sick time accrual, pay transparency rules, and final pay deadlines, while professional registration questions follow the projects. A handbook written for the office lease address covers a shrinking share of the actual workforce. HR outsourcing tracks the states where people really work, keeps policies and required notices current in each, and flags what a remote hire or a new state registration will change before it happens rather than after.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Architecture firms big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Boutique design studios', body: 'A principal, a dozen designers, and an employment model inherited from studio culture rather than written policy.' },
                { title: 'Full-service architecture firms', body: 'Licensed architects, junior designers, and admin staff on salary structures that were never checked against the duties tests.' },
                { title: 'Architecture and interiors practices', body: 'Mixed licensure tracks, NCIDQ and AXP candidates, and supervision documentation that should live in personnel files.' },
                { title: 'Firms with academic pipelines', body: 'Summer interns and co-op students whose programs need structure before wage law supplies it retroactively.' },
                { title: 'Remote and distributed studios', body: 'Designers across several states, one handbook, and a compliance gap that widens with every out-of-state hire.' },
                { title: 'Growing multi-office practices', body: 'A second or third location, new state obligations, and project layoff cycles that now cross office lines.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/architecture">managed payroll for architecture firms</Link>. Working alongside the builders? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Architecture HR outsourcing, answered</h2>
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
