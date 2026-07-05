import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Church HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for churches: clergy classification, volunteer boundaries, and youth-safety screening handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/church' },
  openGraph: {
    title: 'Church HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for churches: clergy classification, volunteer boundaries, and youth-safety screening handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/church',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Church HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for churches: clergy classification, volunteer boundaries, and youth-safety screening handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-church');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a church?',
    'Certified HR professionals handle your handbook, clergy and lay staff classification policies, volunteer boundaries, background check procedures for youth-facing roles, leave administration, and coaching for the pastors and administrators who manage people.',
  ],
  [
    'Can a church legally prefer members of its own faith when hiring?',
    'Generally yes for religion itself: Title VII exempts religious organizations from the ban on religious preference. It does not permit preferences based on race, sex, or other protected traits.',
  ],
  [
    'Do employment laws even apply to churches?',
    'Most do. The ministerial exception shields decisions about clergy and ministerial roles, but lay staff such as bookkeepers, custodians, and many teachers keep ordinary employment protections.',
  ],
  [
    'Is this a PEO for churches?',
    'No. There is no co-employment and no employer-of-record change. Your church stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does church HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingChurchPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Church', item: 'https://www.beghr.com/services/hr-outsourcing/church' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Churches"
        title="Your staff serves a congregation. Who handles the employment side of ministry?"
        description="Clergy and lay staff live under different legal rules. Volunteers blur into employees. Youth ministries demand screening that must be documented, not assumed. Church HR is its own legal terrain, and most churches navigate it with a volunteer treasurer. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Church HR Problem</p>
              <h2>The ministry gets the attention. The employment file gets the claim.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, on a ministry budget',
                  sub: 'Most churches cannot justify that hire, so HR lands on an executive pastor, a business administrator, or a volunteer with a binder.',
                },
                {
                  stat: '2 tracks',
                  label: 'Clergy and lay staff live under different rules',
                  sub: 'The ministerial exception shields employment decisions about ministers. It does not cover the bookkeeper, the custodian, or most of the office. Misreading the line invites claims from both directions.',
                },
                {
                  stat: 'Every role',
                  label: 'Youth-facing positions need documented screening',
                  sub: 'Insurers, denominations, and juries all expect background checks for staff and volunteers around minors, with renewals and records, not a one-time check at hire.',
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
              Source: <a href="https://www.eeoc.gov/religious-discrimination" target="_blank" rel="noopener noreferrer">U.S. Equal Employment Opportunity Commission, religious discrimination guidance</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Church HR Compliance</p>
              <h2>The employment problems specific to churches, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The ministerial exception, and where it actually stops</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Supreme Court has held that religious organizations decide employment matters for their ministers free from discrimination claims, and later extended that protection to some religious school teachers based on what they do, not what they are called. That is the key: function controls, titles do not. A worship leader with real religious duties may be ministerial; a director of ministries who mostly manages facilities may not be. Churches get in trouble assuming the exception blankets the whole staff. HR outsourcing helps you document religious functions in job descriptions where they genuinely exist, and treat everyone else as the protected employees they are.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Clergy versus lay staff, classified on purpose</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Clergy classification ripples through everything: which discrimination laws reach the role, how housing allowances interact with policy, what the handbook can require, and how a separation gets handled. Lay staff, from administrative assistants to facilities teams to nursery workers, carry the full set of ordinary protections: wage and hour rules, overtime for non-exempt roles, leave laws, and anti-discrimination statutes. A church that runs one undifferentiated policy set for everyone is wrong in both directions at once. HR outsourcing builds a two-track structure: clear ministerial designations where defensible, standard compliant policies for lay staff, and documentation that shows the distinction was deliberate.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Volunteers and employees, with the line drawn in writing</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Churches run on volunteers, and true volunteers at a nonprofit are lawful. The trouble starts at the edges: the volunteer who receives a regular stipend, the nursery worker paid hourly for some shifts and volunteering others, the part-time employee who also volunteers doing the same work off the clock. Those patterns can create minimum wage and overtime liability, and they are common precisely because everyone means well. HR outsourcing draws the line in writing: volunteer role descriptions, policies separating paid work from volunteer service, stipend reviews, and guardrails that let the culture of service continue without quietly manufacturing wage claims.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Religious preference in hiring, done lawfully</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Title VII lets religious organizations prefer members of their own faith in employment, and for many roles a church can lawfully require agreement with a statement of faith. What the exemption does not do is license preferences based on race, sex, national origin, age, or disability, and state laws sometimes read the religious exemption more narrowly than federal law. The practical work is in the paperwork: applications that ask what is lawful, job postings that state religious requirements plainly and consistently, and interview practices your search teams for pastors and staff follow every time. HR outsourcing puts that recruiting discipline in place before a rejected applicant tests it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks for youth-facing roles, with a paper trail</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Youth ministry is where church HR risk is most serious, and screening is the control everyone will examine after the fact: the insurer, the denomination, and if the worst happens, a jury asking whether the church did what a careful organization would do. A defensible program covers employees and volunteers in roles with access to minors, runs checks through a compliant process including FCRA notice and adverse action steps, renews on a schedule, and documents every result. It pairs screening with written child protection policies: two-adult rules, reporting procedures, and training records. HR outsourcing builds and maintains that entire employment-side framework.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Ministries big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Single-campus churches', body: 'A dozen or so staff, a mix of clergy and lay roles, and an executive pastor doing HR between sermon prep and budget meetings.' },
                { title: 'Multi-campus churches', body: 'Staff spread across sites, campus pastors managing people without HR training, and policies that need to match at every location.' },
                { title: 'Churches with schools or preschools', body: 'Teachers whose ministerial status is genuinely unclear, licensing rules on the childcare side, and two regulatory worlds in one building.' },
                { title: 'Denominational and network offices', body: 'Regional staff, ordination-linked roles, and employment questions that arrive from every member congregation.' },
                { title: 'Camps and conference centers', body: 'Seasonal staff surges, minor employees as junior counselors, housing as compensation, and screening obligations at scale.' },
                { title: 'Faith-based nonprofits', body: 'Mission organizations and community ministries with grant-funded roles, volunteer programs, and board-governed employment policies.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/church">managed payroll for churches</Link>, including clergy pay handling. Running a senior ministry or care facility? See <Link href="/services/hr-outsourcing/senior-care">HR outsourcing for senior care</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Church HR outsourcing, answered</h2>
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
