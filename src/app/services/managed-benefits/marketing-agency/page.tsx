import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Marketing Agency Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for marketing agencies: who counts for ACA when freelancers mix with W-2 staff, enrollment handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/marketing-agency' },
  openGraph: {
    title: 'Marketing Agency Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for marketing agencies: who counts for ACA when freelancers mix with W-2 staff, enrollment handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/marketing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Marketing Agency Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for marketing agencies: who counts for ACA when freelancers mix with W-2 staff, enrollment handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-marketing-agency');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a marketing agency?',
    'Plan setup, online enrollment for your W-2 team, ACA counting that keeps freelancers off the roster, Forms 1094-C and 1095-C where required, life-event changes, carrier updates, and COBRA support when staff move on.',
  ],
  [
    'Do freelancers count toward our ACA employee counts?',
    'Properly classified independent contractors do not count toward applicable-large-employer status or offers of coverage. Common-law W-2 employees do, including part-timers, who aggregate into full-time equivalents. The risk is a long-running freelancer who works like staff; misclassification flips your ACA math retroactively.',
  ],
  [
    'How do part-time employees affect the 50-employee ACA threshold?',
    'IRS rules convert part-time hours into full-time equivalents when determining applicable-large-employer status. An agency with 35 full-timers and a bench of part-time staff can be an ALE without ever employing 50 actual full-time people.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for agencies?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your agency stays the employer.',
  ],
  [
    'What does marketing agency benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsMarketingAgencyPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Marketing Agencies', item: 'https://www.beghr.com/services/managed-benefits/marketing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Marketing Agencies"
        title="Half your roster is freelance. The other half wants real benefits. ACA counts them differently."
        description="Agencies scale with freelancers and contractors around a W-2 core, which makes the basic benefits question surprisingly hard: who counts, who gets offered coverage, and who stays off the roster entirely. BEG Managed Benefits, powered by isolved, keeps the lines clean and the enrollment handled while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'W-2 + 1099', label: 'Who counts for ACA, tracked correctly' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Agency Benefits Problem</p>
              <h2>A blended workforce where the counting rules are the whole game.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'W-2 only',
                  label: 'Who counts for ACA: common-law employees, not your freelance bench',
                  sub: 'Under IRS rules, applicable-large-employer status is computed from common-law employees. Properly classified freelancers stay out of the math; a freelancer who works like staff may not, and reclassification rewrites your counts retroactively.',
                },
                {
                  stat: '50 FTEs',
                  label: 'The threshold part-timers quietly aggregate toward',
                  sub: 'Part-time employees convert into full-time equivalents for the ALE test. Agencies flexing between full-time, part-time, and project staff can cross 50 FTEs without ever seeing 50 faces at the all-hands.',
                },
                {
                  stat: 'Nobody',
                  label: 'Who owns benefits admin at a typical agency',
                  sub: 'Enrollment, carrier changes, and notices land on a studio manager or the founder between client deadlines. Deadline-driven compliance work run as a side task is how notices get missed.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Agency benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment your creative team will actually complete</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Benefits Admin Software plan puts plan comparison and enrollment online: your strategists, designers, and account leads research options, get AI-guided recommendations that balance cost and coverage, and enroll themselves without a single all-staff reminder email chain. Life events run through self-service workflows, and deductions sync to payroll so a mid-year change never becomes a payroll ticket.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA counting with the freelance line kept clean</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan tracks your common-law employee population: full-timers offered coverage on schedule, part-timers aggregated into full-time equivalents for the ALE test, and hours data maintained continuously so threshold questions have answers before filing season asks. Freelancers and contractors stay off the benefits roster, where properly classified ones belong. When obligations attach, Forms 1094-C and 1095-C are produced for you.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>COBRA handled through agency churn</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Agency talent moves: to clients, to other shops, to freelancing. Every covered departure opens notice obligations on federal deadlines, and losing an account can mean several at once. Election notices go out on the required timelines, windows are tracked, and coverage end dates flow to carriers. State continuation rules for smaller agencies are scoped exactly on your discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: an ops function without the overhead hire</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes changes, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the quiet leaks: departed staff still on the invoice, elections that never reached the carrier, dependents past eligibility. Agencies sell billable hours; benefits administration should not consume them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment online. Software + ACA Compliance adds blended-workforce counting and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Contractor payments and payroll the bigger fire? That is <Link href="/services/managed-payroll/marketing-agency">managed payroll for marketing agencies</Link>; for classification policies and handbooks, see <Link href="/services/hr-outsourcing/marketing-agency">marketing agency HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Marketing agency benefits administration, answered</h2>
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
