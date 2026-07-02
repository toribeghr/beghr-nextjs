import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Government Contractor Payroll | Instant Quote | BEG',
  description: 'Government contractor payroll fully managed at $25–$45 PEPM. Certified payroll, Davis-Bacon prevailing wage, WH-347, and DOL audit readiness included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/government-contractor' },
  openGraph: {
    title: 'Government Contractor Payroll | Instant Quote | BEG',
    description: 'Government contractor payroll fully managed at $25–$45 PEPM. Certified payroll, Davis-Bacon prevailing wage, WH-347, and DOL audit readiness included.',
    url: 'https://www.beghr.com/services/managed-payroll/government-contractor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor Payroll | Instant Quote | BEG', description: 'Government contractor payroll fully managed at $25–$45 PEPM. Certified payroll, Davis-Bacon prevailing wage, WH-347, and DOL audit readiness included.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('government-contractor-payroll');

export default function PayrollGovernmentContractorPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Government contractor with fully managed certified payroll"
      eyebrow="Managed Payroll · Government Contractors"
      title="Certified payroll and prevailing wage compliance is not optional. We make sure you never miss a filing."
      description="Davis-Bacon Act prevailing wage requirements, certified payroll reporting on WH-347, fringe benefit tracking by trade classification, DOL audit risk, and multi-state federal project sites create a payroll compliance burden that most contractors either manage poorly or pay a consultant to handle. BEG manages all of it at $25–$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: 'Certified payroll', label: 'WH-347 reporting managed every pay period' },
        { value: 'Davis-Bacon', label: 'Prevailing wage and fringe benefit compliance included' },
        { value: 'DOL audit-ready', label: 'Records maintained to withstand DOL review' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Getting It Wrong</p>
            <h2>What does certified payroll non-compliance actually cost a government contractor?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Contract loss</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Davis-Bacon violations can result in debarment from federal contracting for up to three years</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Debarment from federal contracting programs is an existential event for a contractor whose revenue depends on government work. BEG manages Davis-Bacon compliance and certified payroll reporting so that risk is eliminated from your operations.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Back wages</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Underpaying prevailing wage rates creates back-wage liability for every hour worked on the contract</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The DOL can recover back wages for every worker underpaid on a federal contract, plus interest and penalties. On a multi-year contract with 30+ workers, the liability adds up quickly. Prevailing wage rates must match the correct trade classification - getting the classification wrong is one of the most common errors.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>WH-347 burden</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Weekly certified payroll reports (WH-347) must be accurate, complete, and filed on time - every pay period</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Certified payroll reporting is not a quarterly obligation - it is weekly. Every pay period, WH-347 forms documenting worker classifications, hours, wages, and fringe benefits must be submitted to the contracting agency. Missing or inaccurate submissions are a compliance violation.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed certified payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your active government contracts, trade classifications, prevailing wage schedules, fringe benefit structures, and multi-state project site footprint. You get a fixed monthly cost with no surprises.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure prevailing wage rates by trade classification, set up WH-347 reporting, establish fringe benefit calculations, and run your first certified payroll cycle alongside your existing process for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every certified payroll submission, every WH-347 filing, every prevailing wage rate update - fully managed by BEG. Your team reviews and approves before submission.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT BEG HANDLES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What BEG Handles</p>
            <h2>Government contractor payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Certified payroll submissions (WH-347) prepared and filed every pay period for each contract',
              'Davis-Bacon Act prevailing wage tracking by trade classification and project location',
              'McNamara-O\'Hara Service Contract Act (SCA) compliance for federal service contractors',
              'Fringe benefit calculations - health, pension, and vacation benefit credits by classification',
              'Multi-state prevailing wage compliance for contractors working federal sites across state lines',
              'DOL audit preparation: payroll records maintained to withstand wage and hour review',
              'Trade classification review to ensure workers are classified to the correct prevailing wage rate',
              'Prevailing wage schedule updates when DOL publishes revised wage determinations',
              'Subcontractor certified payroll coordination and compliance review',
              'Year-end W-2 preparation for all trade workers including fringe benefit components',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1rem', background: '#f9f9f9', borderRadius: '6px' }}>
                <span style={{ color: '#ECAC60', fontWeight: '800', fontSize: '1.1rem', lineHeight: 1, marginTop: '1px', flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: '0.93rem', color: '#333333', lineHeight: '1.55' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Side by Side</p>
            <h2>BEG Managed Payroll vs. In-House vs. Generic Software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '700' }}>Factor</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700', color: '#ECAC60' }}>BEG Managed</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House Hire</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>Generic Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['WH-347 certified payroll filing', 'Fully managed', 'Included but time-consuming', 'Add-on module required'],
                  ['Davis-Bacon prevailing wage tracking', 'Included', 'Varies by hire expertise', 'Not built in'],
                  ['Fringe benefit calculations by trade', 'Included', 'Complex manual process', 'You configure it'],
                  ['DOL audit record maintenance', 'Managed', 'Depends on process quality', 'You maintain it'],
                  ['Prevailing wage schedule updates', 'Automatic', 'Must track manually', 'Manual update'],
                  ['Multi-state federal project compliance', 'Included', 'May need outside counsel', 'You manage it'],
                  ['Monthly cost (40 workers)', '$1,000–$1,800', '$5,800–$8,300', '$600–$1,200 + risk'],
                ].map(([factor, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: '#222222' }}>{factor}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#000000', fontWeight: '600' }}>{beg}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Stakes of Non-Compliance</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A certified payroll error on a federal contract is not a clerical mistake. It is a DOL matter.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Government contractors that manage certified payroll internally - without dedicated expertise - are running one missed filing or one incorrect wage classification away from back-wage liability, penalty assessments, or debarment proceedings. BEG removes that risk at a fraction of the cost of an in-house certified payroll specialist.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to transition is before your next contract award - not after one is already in flight.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Government contractors that set up managed payroll before a new contract award can start the contract with compliant certified payroll from day one. Contractors that wait add compliance risk from the first pay period of a new engagement.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your contracts and workforce, give you a fixed monthly cost, and show you what compliant certified payroll looks like. Pricing starts at $25 PEPM.</p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Explore More</p>
            <h2>More managed payroll resources</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { title: 'Managed Payroll Overview', href: '/services/managed-payroll', desc: 'How BEG fully managed payroll works for any industry.' },
              { title: 'Home Services Payroll', href: '/services/managed-payroll/home-services', desc: 'Field crew payroll for HVAC, plumbing, electrical, and landscaping companies.' },
              { title: 'Property Management Payroll', href: '/services/managed-payroll/property-management', desc: 'Resident manager housing allowances, commission, and multi-property payroll.' },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: 'block', padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', textDecoration: 'none' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#000000', marginBottom: '0.3rem' }}>{link.title}</strong>
                <span style={{ fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from government contractors</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What is certified payroll and why is it required?</h3>
              <p>Certified payroll is a weekly report (WH-347) that federal contractors and subcontractors on Davis-Bacon covered projects must file with the contracting agency. The report documents each worker's name, trade classification, hours worked, wage rate, fringe benefits, and deductions. The report must be signed under penalty of perjury by a company officer. BEG prepares and files WH-347 every pay period for all covered contracts.</p>
            </div>
            <div className="faq-item">
              <h3>What is the Davis-Bacon Act and who does it apply to?</h3>
              <p>The Davis-Bacon Act requires contractors and subcontractors on federal construction contracts over $2,000 to pay workers the locally prevailing wages and fringe benefits for the trade classification performed on the project. Prevailing wage rates are published by DOL as wage determinations and vary by county, project type, and trade. BEG tracks the applicable wage determination for each contract and ensures workers are paid at or above the required rate.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if we get trade classifications wrong?</h3>
              <p>Misclassifying a worker to a lower-paid trade classification creates back-wage liability for the difference between what was paid and what the correct classification's prevailing wage rate required. The DOL can recover back wages for the life of the contract, plus interest. BEG reviews trade classifications against the applicable wage determination before the first pay cycle to prevent classification errors from compounding over a contract term.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for a government contractor?</h3>
              <p>Everything: payroll processing, prevailing wage calculations, WH-347 certified payroll submissions, fringe benefit tracking, multi-state compliance for project sites in multiple states, year-end W-2 preparation, and dedicated BEG support. No per-filing fees, no per-contract surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>Do we need a separate system for certified payroll?</h3>
              <p>No. BEG manages certified payroll reporting as part of the fully managed payroll service. You do not need to purchase a separate certified payroll module or system. WH-347 preparation and submission are included in the base service.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG handle the Service Contract Act as well as Davis-Bacon?</h3>
              <p>Yes. The McNamara-O'Hara Service Contract Act (SCA) applies to federal service contracts over $2,500. Like Davis-Bacon, SCA requires prevailing wages and fringe benefits for covered service employees. BEG manages SCA compliance for covered service contracts alongside Davis-Bacon construction contract payroll.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is certified payroll and why is it required?', acceptedAnswer: { '@type': 'Answer', text: 'Certified payroll is a weekly WH-347 report federal contractors must file documenting worker classifications, wages, hours, and fringe benefits. BEG prepares and files WH-347 every pay period for all covered contracts.' } },
              { '@type': 'Question', name: 'What is the Davis-Bacon Act and who does it apply to?', acceptedAnswer: { '@type': 'Answer', text: 'The Davis-Bacon Act requires contractors on federal construction contracts over $2,000 to pay prevailing wages and fringe benefits for the applicable trade classification. BEG tracks wage determinations and ensures correct rates are applied.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a government contractor?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, prevailing wage calculations, WH-347 filings, fringe benefit tracking, multi-state compliance, year-end W-2s, and dedicated support. No per-filing fees.' } },
              { '@type': 'Question', name: 'Does BEG handle the Service Contract Act as well as Davis-Bacon?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages SCA compliance for covered service contracts alongside Davis-Bacon construction contract payroll.' } },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Government Contractor', item: 'https://www.beghr.com/services/managed-payroll/government-contractor' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Government Contractor Payroll: Certified Payroll, Davis-Bacon, and WH-347 Compliance (2026)',
            excerpt: 'How federal contractors manage certified payroll reporting, prevailing wage compliance, and DOL audit readiness without a dedicated in-house certified payroll specialist.',
            href: '/blog/payroll/government-contractor',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House Hire: The Real Cost for Government Contractors',
            excerpt: 'Certified payroll expertise is expensive to hire and difficult to retain. Here is the cost and risk comparison for federal contractors.',
            href: '/blog/compare/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
