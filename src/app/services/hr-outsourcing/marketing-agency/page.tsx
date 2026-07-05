import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Marketing Agency HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for marketing agencies: freelancer classification, commission documentation, and fast offboarding handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/marketing-agency' },
  openGraph: {
    title: 'Marketing Agency HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for marketing agencies: freelancer classification, commission documentation, and fast offboarding handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/marketing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Marketing Agency HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for marketing agencies: freelancer classification, commission documentation, and fast offboarding handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-marketing-agency');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a marketing agency?',
    'Certified HR professionals handle your handbook, freelancer classification reviews, leave and accommodation processes, commission plan documentation, and manager coaching, sized to an agency of dozens instead of a holding company.',
  ],
  [
    'Can it help with our freelancer bench?',
    'Yes. Each ongoing freelance relationship gets a written classification review against the economic reality factors, plus engagement documentation and conversion guidance when a freelancer has effectively become staff.',
  ],
  [
    'How does it handle burnout, leave, and accommodations?',
    'With process. FMLA and state leave eligibility, ADA accommodation dialogue, and documentation at every step, so a struggling account lead gets handled lawfully instead of informally.',
  ],
  [
    'Is this a PEO for agencies?',
    'No. There is no co-employment and no employer-of-record change. Your agency stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does marketing agency HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingMarketingAgencyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Marketing Agency', item: 'https://www.beghr.com/services/hr-outsourcing/marketing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Marketing Agencies"
        title="Your agency manages every client brand. Who manages the employment paperwork behind yours?"
        description="A freelancer bench that never gets classified, account teams burning out on retainer math, commission plans that live in old email threads: agencies run modern work on informal employment plumbing. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Agency HR Problem</p>
              <h2>Client work gets the war room. Employment compliance gets whatever is left.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before agency complexity',
                  sub: 'Agencies under a hundred people rarely make that hire, so HR lands on the ops lead or a partner, somewhere behind new business and the deliverables due this week.',
                },
                {
                  stat: '6 factors',
                  label: 'The economic reality test your freelance bench gets measured against',
                  sub: 'A freelancer embedded in your account teams, on your tools, with no other clients, looks like an employee to the DOL, and misclassification claims arrive with back pay attached.',
                },
                {
                  stat: 'In writing',
                  label: 'The only commission plan that survives a dispute',
                  sub: 'BD commissions promised verbally, adjusted quarterly, and reconstructed at termination are wage claims waiting to file. Several states treat earned commissions as wages with penalties for nonpayment.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, employee misclassification</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Agency HR Compliance</p>
              <h2>The employment problems specific to agencies, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Freelancer classification: the agency staffing model, audited</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The freelance bench is how agencies flex with the pipeline, and it is also the single largest classification exposure in the industry. A designer who has billed you forty hours a week for a year, attends your standups, and uses your accounts is an employee under the economic reality factors regardless of the 1099. State tests can be stricter still. HR outsourcing puts a written classification review behind every ongoing engagement, documents the independence factors that support contractor status, standardizes the engagement paperwork, and manages the conversion to employee when a freelancer has, in substance, already joined the team.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Burnout, leave, and accommodations on account teams</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Agency burnout is an operations problem until the day it becomes a legal one: an account lead discloses an anxiety condition, a strategist requests intermittent leave, a manager responds with something well-intentioned and legally wrong. FMLA eligibility, the growing layer of state paid leave programs, and the ADA interactive process each carry documentation duties and deadlines, and informal handling is what turns a health situation into a claim. HR outsourcing runs the process: eligibility determinations, correct notices on time, a documented accommodation dialogue, and manager coaching so the first conversation does not create the liability.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Portfolio, IP, and moonlighting policies that match how creatives work</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Creative employees arrive with portfolios and side clients, and leave wanting to show the work they made for you. Without written policy, everything is a negotiation: who owns concepts developed on personal time, what client work can appear in a portfolio, when freelancing on the side crosses into competing with the agency. Several states also limit how far an employer can reach into inventions created off the clock. HR outsourcing writes the policy set: IP assignment that respects state carve-outs, portfolio permissions that protect client confidentiality, and moonlighting rules that are enforceable because they are clear.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Commission and bonus documentation for business development roles</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Agency BD compensation grows by accretion: a base here, a percentage of first-year retainer there, a discretionary bonus promised in a good quarter. Then the rainmaker resigns mid-pipeline and everyone discovers the plan was never written down. Many states treat earned commissions as wages, some require signed commission agreements, and the definition of earned decides who gets paid on deals that close after departure. HR outsourcing documents the plans: written terms, clear earned-versus-paid definitions, treatment at termination, and a signature on file, so compensation disputes get resolved by the document instead of the memory.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fast hiring, fast offboarding, and client confidentiality in between</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Agencies staff to wins and unstaff to losses, and the churn cycle multiplies paperwork risk. Every fast hire needs a complete packet: offer letter, confidentiality agreement covering client information, policy acknowledgments. Every fast exit needs final pay on the state deadline, benefits notices, access revocation across client accounts, and a documented reminder of surviving confidentiality obligations, because your NDA with the client assumed your employees were bound too. HR outsourcing builds both checklists and runs them the same way every time, whether talent acquisition is sprinting or the offboarding is happening on a Friday afternoon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Agencies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Full-service marketing agencies', body: 'Account, creative, and media teams with staffing that moves as fast as the client roster.' },
                { title: 'Creative and branding studios', body: 'Portfolio-carrying designers, IP questions on every project, and freelancers woven into the production process.' },
                { title: 'Digital and performance agencies', body: 'Analysts and media buyers across states, commission-heavy growth roles, and remote hires that outpaced the handbook.' },
                { title: 'PR and communications firms', body: 'Client confidentiality obligations that flow into every employment file, and account teams under retainer pressure.' },
                { title: 'Content and social agencies', body: 'High-volume junior hiring, moonlighting creators, and offboarding cycles measured in days, not quarters.' },
                { title: 'Production and video shops', body: 'Project crews, day-rate freelancers, and classification questions on every shoot.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/marketing-agency">managed payroll for marketing agencies</Link>. Clients in hospitality? See <Link href="/services/hr-outsourcing/multi-unit-restaurant">HR outsourcing for multi-unit restaurants</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Marketing agency HR outsourcing, answered</h2>
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
