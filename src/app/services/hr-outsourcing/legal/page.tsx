import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Law Firm HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for law firms: paralegal overtime classification, confidentiality policies, and bar and CLE tracking handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/legal' },
  openGraph: {
    title: 'Law Firm HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for law firms: paralegal overtime classification, confidentiality policies, and bar and CLE tracking handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/legal',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for law firms: paralegal overtime classification, confidentiality policies, and bar and CLE tracking handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-legal');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a law firm?',
    'Certified HR professionals handle your handbook, staff classification review, bar admission and CLE tracking policies, confidentiality and conflicts-adjacent employment documents, and manager coaching, sized to a firm instead of a big-law HR department.',
  ],
  [
    'Are our paralegals really entitled to overtime?',
    'Usually, yes. DOL guidance treats most paralegals as non-exempt because the role generally does not require an advanced specialized degree. Salaried does not mean exempt; hours need tracking and overtime needs paying.',
  ],
  [
    'Can it help with lateral hires and conflicts screening?',
    'Yes at the process level: onboarding workflows that sequence conflicts checks before start dates, documented ethical screens, and confidentiality acknowledgments, coordinated with whoever runs conflicts at your firm.',
  ],
  [
    'Is this a PEO for law firms?',
    'No. There is no co-employment and no employer-of-record change. Your firm stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does law firm HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingLegalPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/hr-outsourcing/legal' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Law Firms"
        title="Your firm gives employment advice. It still needs some of its own."
        description="Paralegals misclassified as exempt, confidentiality obligations that never made it into an employment document, bar and CLE renewals tracked from memory, and partner status questions nobody wants to raise: law firm HR is the cobbler&#39;s children problem. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Law Firm HR Problem</p>
              <h2>Client matters get the diligence. The firm&apos;s own employment files get Friday afternoon.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before law firm complexity',
                  sub: 'Firms under a few hundred employees rarely have the volume to justify that hire, so HR lands on the office administrator or a partner, on top of billable expectations.',
                },
                {
                  stat: 'Non-exempt',
                  label: 'What most paralegals are, no matter how they are paid',
                  sub: 'DOL guidance treats paralegals as generally non-exempt. A salaried paralegal working litigation-deadline hours without overtime pay is a wage claim accruing interest.',
                },
                {
                  stat: '2x a year',
                  label: 'How often lateral moves cluster, bringing conflicts questions with them',
                  sub: 'Every lateral hire arrives with a work history that has to be screened before day one. When onboarding and conflicts run on separate tracks, the gap between them is the risk.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/fact-sheets/17d-overtime-professional" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Fact Sheet 17D, professional exemption</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Law Firm HR Compliance</p>
              <h2>The employment problems specific to law firms, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Attorneys are exempt. Your paralegals almost certainly are not.</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Licensed attorneys practicing law fall under a professional exemption with no salary threshold at all. Paralegals are the opposite case: DOL guidance says the role generally does not qualify as a learned profession because it does not require an advanced specialized degree, however skilled the person. That means hour tracking, overtime at time and a half, and meal and rest rules in the states that have them, even for salaried paralegals. Legal secretaries, billing staff, and most administrators land the same way. HR outsourcing classifies every seat correctly, documents the analysis, and sets up timekeeping that survives a trial-week crunch.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Confidentiality and conflicts, translated into employment documents</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Professional conduct rules bind the lawyers; employment documents are how those duties reach everyone else. Paralegals, assistants, IT staff, and bookkeepers all touch privileged material, and their obligations exist only if written, signed, and enforced: confidentiality agreements at hire, policies on client information handling, social media rules written for people who know case names, and discipline provisions that make a breach an employment event, not just an ethics headache for the supervising attorney. HR outsourcing drafts that layer, keeps acknowledgments current, and makes sure a staff departure triggers the same information-protection steps a lawyer departure would.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Bar admissions and CLE, tracked like the license risk they are</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every attorney carries at least one bar admission with annual dues, CLE cycles, and good-standing status, and multi-state practices multiply the calendars. An attorney who quietly slips out of good standing has been practicing without authorization, which is a malpractice-coverage question and a client-notification question at once. Firms rarely check after hire; they assume. HR outsourcing builds admission and CLE tracking as an employment process: verification at hire, renewal policies with lead time, periodic good-standing confirmation for every admitted jurisdiction, and job descriptions that make active licensure an explicit condition of the role, documented in the personnel file.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Partner or employee: the status question firms avoid until it litigates</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A true equity partner who shares profits, votes, and control is generally not an employee under discrimination statutes. A non-equity income partner with a title, a salary, and no real say frequently is, and courts look at function over label. The difference decides who can sue the firm for discrimination, who counts toward statutory thresholds, and what process a departure requires. Firms that hand out partner titles as retention currency are stacking up unexamined risk. HR outsourcing helps document what each tier actually is: compensation structure, governance rights, and agreements that match reality, so status questions get answered on paper before a dispute answers them in court.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Lateral onboarding where conflicts screening is part of the workflow</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Lateral recruiting is how firms grow, and every lateral arrives carrying prior-client baggage that has to be screened before the first assignment. The failure mode is procedural: recruiting sets a start date, conflicts finds an issue in week two, and now an ethical screen is being built around someone already inside the wall. HR outsourcing sequences onboarding so the conflicts check is a gate, not an afterthought: offer contingencies drafted correctly, screening acknowledgments signed on day one, documented ethical screens where needed, and file notes that show the firm handled it properly if a disqualification motion ever asks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Firms big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Litigation boutiques', body: 'Deadline-driven overtime for staff, trial-week scheduling, and confidentiality stakes at their highest.' },
                { title: 'Transactional and corporate firms', body: 'Paralegal-heavy deal teams, closing crunches, and classification questions across every support role.' },
                { title: 'Plaintiff and personal injury firms', body: 'Large case staff, intake teams, and contingency-driven growth that hires faster than policies keep up.' },
                { title: 'Immigration, family, and consumer practices', body: 'High-volume client contact staff, emotional casework, and manager coaching that prevents burnout from becoming turnover.' },
                { title: 'Multi-office regional firms', body: 'Offices in different states, one handbook that fits none of them, and lateral movement between them.' },
                { title: 'Growing firms adding their first administrators', body: 'The stage where a firm administrator inherits HR by default and needs professionals behind them.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/legal">managed payroll for law firms</Link>. Construction clients on the roster? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Law firm HR outsourcing, answered</h2>
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
