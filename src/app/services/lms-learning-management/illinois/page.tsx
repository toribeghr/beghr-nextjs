import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Illinois Employee Training Compliance | LMS by BEG',
  description: 'Employee training and harassment-prevention compliance for Illinois employers. isolved Learn & Grow, configured by BEG: assign, track, and prove training. ',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/illinois' },
  openGraph: { title: 'Illinois Employee Training Compliance | LMS by BEG', description: 'Assign, track, and prove employee training for Illinois employers with isolved Learn & Grow, configured by BEG.', url: 'https://www.beghr.com/services/lms-learning-management/illinois', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Illinois Employee Training Compliance | LMS by BEG', description: 'Assign, track, and prove employee training for Illinois employers with isolved Learn & Grow.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-illinois');

const FAQS: [string, string][] = [
  ['Does Illinois require sexual harassment training?', 'All employers with employees working in Illinois must provide annual interactive sexual-harassment-prevention training to every employee, using the state model program or an equivalent that meets Illinois Human Rights Act minimum standards; restaurants and bars face additional supplemental training rules.'],
  ['How do we prove training compliance in Illinois?', 'isolved Learn & Grow assigns required courses by role, tracks completion and renewal dates, and produces an audit-ready record on demand, so proving compliance is a report you pull, not a scramble.'],
  ['Can we upload our own training content?', 'Yes. Alongside the isolved course library, you can upload your own videos, documents, and quizzes, so state-specific and company-specific training lives in one system.'],
  ['What does it cost?', 'isolved Learn & Grow is priced per employee per month on your isolved HCM platform, with volume pricing. Answer a few questions and get an instant estimate on screen in about 90 seconds.'],
  ['Do you serve employers in Illinois?', 'Yes. BEG configures and supports isolved Learn & Grow for Illinois employers, delivered remotely, and for teams across all 50 states.'],
];

export default function LmsStateIllinoisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Article', headline:'Illinois requires harassment-prevention training. Track it and prove it in one system.', description:'Employee training compliance for Illinois employers with isolved Learn & Grow.', author:{ '@type':'Organization', name:'Business Executive Group', url:'https://www.beghr.com' }, publisher:{ '@type':'Organization', name:'Business Executive Group' }, datePublished:'2026-07-06', mainEntityOfPage:'https://www.beghr.com/services/lms-learning-management/illinois' }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ { '@type':'ListItem', position:1, name:'Home', item:'https://www.beghr.com' }, { '@type':'ListItem', position:2, name:'Learning Management System', item:'https://www.beghr.com/services/lms-learning-management' }, { '@type':'ListItem', position:3, name:'Illinois', item:'https://www.beghr.com/services/lms-learning-management/illinois' } ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <ServicePage
        showHeroImage={false}
        eyebrow="Learning Management · Illinois"
        title="Illinois requires harassment-prevention training. Track it and prove it in one system."
        description="Illinois mandates sexual-harassment-prevention training, and a sign-in sheet is not proof. isolved Learn & Grow, configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you an audit-ready record on demand, for Illinois teams and all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" />}
        heroStats={[
          { value: 'Required', label: 'Harassment-prevention training in Illinois' },
          { value: 'Tracked', label: 'Completions and renewals, automatically' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* STATE REQUIREMENTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Illinois Training Requirements</p>
              <h2>Where employee-training compliance stands in Illinois</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '34%', verticalAlign: 'top' }}>Sexual-harassment-prevention training</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', color: '#444444' }}>Required statewide</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '34%', verticalAlign: 'top' }}>What the law says</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', color: '#444444' }}>All employers with employees working in Illinois must provide annual interactive sexual-harassment-prevention training to every employee, using the state model program or an equivalent that meets Illinois Human Rights Act minimum standards; restaurants and bars face additional supplemental training rules. (Illinois Workplace Transparency Act, 775 ILCS 5/2-109)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '34%', verticalAlign: 'top' }}>Also worth knowing</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', color: '#444444' }}>Chicago separately requires 1 hour of annual harassment-prevention training for all employees plus 2 hours for supervisors, and 1 hour of bystander-intervention training, each year.</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '34%', verticalAlign: 'top' }}>Federal baseline</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', color: '#444444' }}>OSHA safety training and EEOC anti-harassment guidance apply to employers in every state.</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1rem', textAlign: 'center' }}>Sources: <a href="https://dhr.illinois.gov/training/state-of-illinois-sexual-harassment-prevention-training-model.html" target="_blank" rel="noopener noreferrer">Illinois harassment-training guidance</a>, <a href="https://www.chicago.gov/city/en/depts/cchr/supp_info/sexual-harassment.html" target="_blank" rel="noopener noreferrer">Illinois safety training</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.</p>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#999999', marginTop: '0.5rem', textAlign: 'center' }}>This is general information, not legal advice. Confirm current requirements for your workforce.</p>
          </div>
        </section>

        {/* WHAT THIS SOLVES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How isolved Learn &amp; Grow Handles It</p>
              <h2>Assign, track, and prove Illinois training in one system</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                { title: 'Assign the right courses automatically', body: 'Required training, including harassment-prevention and safety, is assigned by role with due dates and reminders, so nothing depends on a manager remembering.' },
                { title: 'Track completions and renewals', body: 'Completion, pass rates, and renewal dates are tracked in one dashboard, and reminders go out before anything lapses.' },
                { title: 'Prove compliance on demand', body: 'An audit, insurer, or client request becomes a report you pull, not a scramble through binders and inboxes.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>See your isolved Learn &amp; Grow price before you talk to anyone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" label="Get Instant Pricing" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Employee training in Illinois, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/lms-learning-management" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
