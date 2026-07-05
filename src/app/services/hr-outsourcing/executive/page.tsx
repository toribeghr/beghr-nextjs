import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for executive teams: employment agreements, severance releases, and confidentiality frameworks handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/executive' },
  openGraph: {
    title: 'Executive HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for executive teams: employment agreements, severance releases, and confidentiality frameworks handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/executive',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Executive HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for executive teams: employment agreements, severance releases, and confidentiality frameworks handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-executive');

const FAQS: [string, string][] = [
  [
    'What does executive HR outsourcing include?',
    'Certified HR professionals handle executive employment agreement processes, severance and release mechanics, confidentiality and non-solicit frameworks, officer-level investigation support, and documentation discipline, sized to a leadership team instead of a public-company legal department.',
  ],
  [
    'Does it replace employment counsel for executive matters?',
    'No. It builds and runs the HR process around executive employment: documentation, timelines, and consistency. High-stakes agreement drafting and litigation strategy stay with your employment counsel.',
  ],
  [
    'What are the 21-day and 45-day severance rules?',
    'Under the ADEA, a valid age claim waiver requires 21 days to consider an individual release, 45 days with disclosure data in group programs, plus a 7-day revocation window.',
  ],
  [
    'Is this a PEO for executive teams?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your leadership team. Powered by isolved.',
  ],
  [
    'What does executive HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingExecutivePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Executive', item: 'https://www.beghr.com/services/hr-outsourcing/executive' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Executive Employment"
        title="Executive hires get negotiated hard. Executive paperwork gets improvised."
        description="Employment agreements assembled from old templates, severance releases signed without the ADEA clock, non-solicits written for a state that no longer enforces them: the most expensive employees usually have the weakest files. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Executive HR Problem</p>
              <h2>The comp package gets a board deck. The employment file gets a folder on someone&apos;s desktop.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, who still would not own executive files',
                  sub: 'Even companies with an HR generalist route executive matters around HR, which is exactly how officer-level paperwork ends up inconsistent, incomplete, or missing.',
                },
                {
                  stat: '21/45 days',
                  label: 'ADEA consideration periods that make a release enforceable',
                  sub: 'A severance release signed by an executive over 40 without the required consideration period and revocation window may not waive the age claim you paid to settle.',
                },
                {
                  stat: 'State by state',
                  label: 'How restrictive covenant enforceability actually varies',
                  sub: 'Non-competes and non-solicits that hold in one state are void or penalized in another, and executives are exactly the employees who move states.',
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
              Source: <a href="https://www.eeoc.gov/statutes/age-discrimination-employment-act-1967" target="_blank" rel="noopener noreferrer">EEOC, Age Discrimination in Employment Act of 1967</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Executive HR Compliance</p>
              <h2>The employment problems specific to executive roles, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Executive employment agreements, and what actually belongs in them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An executive employment agreement is a different document from an offer letter, and treating it like a long offer letter is how disputes start. Term and renewal mechanics, duties and reporting lines, base and bonus structure with clear earned definitions, severance triggers, the difference between termination for cause and without cause, good reason resignation provisions, and treatment of confidential information: each omitted clause becomes a negotiation at the worst possible time, exit. HR outsourcing builds the process around these agreements, a consistent framework across the leadership team, complete signature files, and a documented record of what was promised to whom, with counsel drafting where the stakes demand it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Severance and releases: the 21-day and 45-day rules are not optional</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Severance buys a release, and a defective release buys nothing. For any departing executive age 40 or over, the ADEA as amended by the Older Workers Benefit Protection Act sets the requirements: a knowing and voluntary waiver, written advice to consult an attorney, 21 days to consider an individual agreement or 45 days in a group program with disclosure of the ages and titles affected, and 7 days to revoke after signing. Miss a requirement and the age claim survives the payment. HR outsourcing runs the checklist on every separation, tracks the clocks, prepares the group disclosures, and keeps release practices consistent so one generous exception does not become everyone&apos;s precedent.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Deferred compensation communication as HR documentation</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Executive pay reaches past the paycheck: bonus deferrals, phantom equity, retention awards, supplemental retirement promises. The HR failure mode is not the plan design, it is the paper trail around it: award letters that never went out, vesting terms described one way in a board resolution and another way in an email, beneficiary designations nobody collected, and no signed acknowledgment that the executive received the plan document. When the payout moment arrives, the dispute is about what was communicated. HR outsourcing owns that documentation layer: consistent award communications, acknowledgment tracking, and a complete file per executive. Plan design and tax treatment stay with your counsel and advisors; this is not tax advice.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Confidentiality and non-solicit frameworks, state by state</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restrictive covenants are where boilerplate goes to die. A handful of states refuse to enforce non-competes almost entirely, others impose compensation thresholds, notice requirements, or garden leave conditions, and non-solicits face their own patchwork. An agreement written for headquarters may be unenforceable for the executive who relocated two years ago, and some states penalize employers just for asking. HR outsourcing maintains the framework: which covenants apply in which states, tiered agreements matched to role and jurisdiction, confidentiality obligations that carry weight everywhere even where non-competes do not, and renewal of signatures when an executive changes state or role, with counsel on the close calls.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Board-adjacent HR: officer terminations and internal investigations</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When the person in question sits on the leadership team, ordinary HR machinery jams. A complaint against an officer cannot be investigated by someone who reports to that officer; a termination decision may require board action under the bylaws before anyone says a word; and the documentation, or its absence, will be exhibit one in whatever follows. Executives also generate the investigations with the highest stakes: harassment, expense fraud, conflicts of interest. HR outsourcing provides the independent process: intake that bypasses the conflicted chain, documented investigation steps, coordination with the board and counsel, and separation mechanics executed cleanly once the decision is made.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Leadership teams big enough to have HR risk, too lean for a general counsel&apos;s office</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Founder-led companies adding executives', body: 'First outside hires at the VP and C level, negotiated hard, papered fast, and filed nowhere in particular.' },
                { title: 'Private equity portfolio companies', body: 'New leadership installed post-close, retention packages, and severance obligations that need consistent, defensible mechanics.' },
                { title: 'Family businesses professionalizing', body: 'Non-family executives joining a family org chart, with agreements that have to say what the handshake used to.' },
                { title: 'Companies in leadership transition', body: 'A retiring founder, an incoming CEO, and a set of separations and agreements where every clock matters.' },
                { title: 'Boards without an HR function', body: 'Officer-level complaints and investigations that cannot be run by anyone inside the reporting chain.' },
                { title: 'Growing companies with thin HR', body: 'A capable HR generalist who handles the workforce, while executive employment runs on direct hire negotiations and memory.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/executive">managed payroll for executive teams</Link>. Leading a care organization? See <Link href="/services/hr-outsourcing/senior-care">HR outsourcing for senior care</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Executive HR outsourcing, answered</h2>
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
