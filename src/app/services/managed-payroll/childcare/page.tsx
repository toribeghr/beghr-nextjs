import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Childcare Payroll | Instant Quote | BEG',
  description: 'Childcare payroll fully managed at $25-45 PEPM. High-turnover staff, substitute tracking, and state subsidy compliance included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/childcare' },
  openGraph: {
    title: 'Childcare Payroll | Instant Quote | BEG',
    description: 'Childcare payroll fully managed at $25-45 PEPM. High-turnover staff, substitute tracking, and state subsidy compliance included.',
    url: 'https://www.beghr.com/services/managed-payroll/childcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Childcare Payroll | Instant Quote | BEG', description: 'Childcare payroll fully managed at $25-45 PEPM. High-turnover staff, substitute tracking, and state subsidy compliance included.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-childcare');

export default function PayrollChildcarePage() {
  return (
    <ServicePage
      heroVideoId="TfNQmc_7pl4"
      imageSrc="/assets/hero-images/childcare.svg"
      imageAlt="Childcare center with fully managed payroll"
      eyebrow="Managed Payroll · Childcare & Daycare Centers"
      title="Managed Payroll for Childcare Centers and Daycares"
      description="High turnover, substitute staff, and state subsidy compliance -- fully managed. Childcare centers face some of the highest staff turnover rates of any industry, with constant new hire onboarding, substitute teacher tracking, FLSA complexity, and state childcare subsidy employment requirements. We manage all of it at $25-$45 per employee per month -- so you focus on the children, not the payroll."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including state subsidy compliance' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Childcare Payroll Reality</p>
            <h2>Three payroll problems that hit childcare operators harder than almost any other industry.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>40-50%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual staff turnover rate at the average childcare center</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Every termination and every new hire means termination paperwork, final pay compliance, new hire setup, I-9 verification, and benefits eligibility determination. Running this administratively in-house while maintaining teacher-to-child ratios is where childcare operator bandwidth collapses.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Substitute risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Substitute and on-call teachers create W-2 vs. 1099 classification risk</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Many childcare centers pay substitutes as 1099 contractors, but IRS and most state labor agencies treat them as W-2 employees when the center controls their schedule, work location, and methods. Misclassification triggers back employment taxes and penalties for every substitute you have paid as a contractor.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>State subsidies</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Child care subsidy programs create employment reporting requirements tied to funding</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>State CCAP programs, Child Care Development Fund grants, and Head Start funding often require payroll documentation demonstrating compliance with wage requirements, staff qualifications, and hours worked. Your payroll records directly affect your subsidy eligibility at renewal.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What We Manage</p>
            <h2>Every staff category in your center, handled correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Lead and assistant teachers', body: 'Full-time and part-time salaried and hourly staff with PTO accrual, benefits eligibility tracking, and FLSA overtime calculations. ACA compliance reporting for centers with 50+ full-time equivalent employees.' },
              { title: 'Substitute and on-call teachers', body: 'W-2 payroll for on-call and substitute staff who meet the IRS employee classification standard. We flag your substitute arrangements that carry contractor risk before they become an audit issue.' },
              { title: 'Director and administrative staff', body: 'Exempt salary employees with proper FLSA exemption documentation. We ensure your center director and administrative staff are classified correctly under the executive, administrative, or professional exemptions.' },
              { title: 'High-turnover new hire processing', body: 'New hire paperwork, I-9 verification, state new hire reporting, direct deposit setup, and benefits enrollment -- managed by BEG every time you bring someone on. No backlog, no missed filings.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.5rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed childcare payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your full-time and part-time staff roster, substitute arrangements, state subsidy programs, and reporting requirements. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We review substitute classifications, configure FLSA exemption documentation, set up state subsidy payroll reporting, and handle new hire processing workflows. No migration required -- we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every new hire, every termination, every state filing, and every subsidy reporting requirement -- fully managed by BEG. Your team approves, we execute.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#ffffff', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer childcare operators</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We do not have time to switch payroll platforms while managing a center."',
                body: 'We do not require you to change platforms. BEG operates as your managed payroll team inside your current system. If you want to move to iSolved for better HR and payroll capabilities, we can manage that transition -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Payroll services charge extra for high-turnover new hire processing and year-end W-2s."',
                body: 'The $25-$45 PEPM rate covers everything: payroll processing, new hire setup, state filings, year-end W-2s, compliance updates, and BEG support. High-turnover processing is included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a ticket queue.',
                objection: 'Common objection: "We call our payroll company and get a different person every time who does not know our center."',
                body: 'Your BEG payroll specialist is your ongoing point of contact. When a teacher gives two days notice, when you hire a substitute mid-cycle, or when your state sends a subsidy compliance request -- one message to your BEG contact handles it. No explaining your center from scratch on every call.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION TIMELINE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Getting Started</p>
            <h2>From scope review to live childcare payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your full-time and part-time staff, substitute arrangements, and state subsidy requirements -- and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, staff roster and substitute classification arrangements reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Substitute classification review, FLSA exemption documentation, and subsidy payroll reporting configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed childcare pay run -- BEG executes, your team approves. New hire processing hands off to BEG on day one.' },
            ].map(({ day, title, body }) => (
              <div key={day} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ECAC60', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{day}</div>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month of substitute misclassification is a month of compounding back-tax exposure.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A childcare center with 10 substitutes paid as 1099 contractors for three years carries significant reclassification exposure if the IRS or state audits the arrangement. Fully managed payroll at $25-$45 PEPM on a 20-person center costs under $11,000 per year -- including proper classification review that eliminates the risk.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix payroll is before your next state subsidy renewal.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. If your state subsidy renewal is coming up, or if turnover is high enough that payroll is consuming director time every cycle, the scope review costs you nothing and the fixed monthly price gives you certainty going forward.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your staff structure, substitute arrangements, and subsidy requirements -- and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from childcare and daycare operators</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle high-volume new hire and termination processing?</h3>
              <p>Yes. New hire paperwork, I-9 verification, state new hire reporting, direct deposit setup, and termination processing are all included in the flat monthly rate. High-turnover centers are exactly what this model is designed for.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle substitute and on-call teacher payroll?</h3>
              <p>We review your substitute arrangements and classify them correctly under IRS and state criteria. If your substitutes qualify as W-2 employees, we process them as W-2. If you have arrangements that genuinely qualify as independent contractor relationships, we process 1099-NEC and maintain the documentation. We flag classification risk before it becomes an audit problem.</p>
            </div>
            <div className="faq-item">
              <h3>What state childcare subsidy compliance support is included?</h3>
              <p>We maintain payroll records in the format most state subsidy programs require for compliance documentation. If your state CCAP or similar program requests payroll records during a compliance review or renewal, we prepare the required documentation as part of the managed service.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, new hire and termination processing, state tax filings, year-end W-2s, compliance updates, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>Are childcare workers entitled to overtime pay?</h3>
              <p>Yes. Childcare teachers, aides, and support staff are entitled to FLSA minimum wage and overtime unless they meet a specific exemption. Most classroom staff do not qualify for any FLSA exemption and must be paid overtime at 1.5x their regular rate after 40 hours in a workweek. Directors and administrators may qualify for the executive or administrative exemption if they meet the salary threshold and duties tests.</p>
            </div>
            <div className="faq-item">
              <h3>What documentation does a state childcare subsidy audit typically request?</h3>
              <p>State CCAP, Head Start, and Child Care Development Fund auditors typically request payroll records showing staff names, job titles, hours worked, hourly rates, and total wages paid during the audit period. We maintain payroll records in the standard format state agencies expect -- so when an auditor makes a documentation request, you can produce accurate records immediately rather than scrambling to reconstruct them.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed payroll for a childcare center?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We review your substitute classifications, configure FLSA exemption documentation, and set up your payroll in your existing system. High-turnover centers often see the most immediate relief -- new hire processing and termination handling that used to consume hours each week hands off to BEG on day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/childcare/childcare-payroll-overtime" style={{ color: '#ECAC60' }}>Childcare Payroll and Overtime: Which Staff Are Exempt and Which Are Not</Link></li>
            <li><Link href="/blog/payroll/childcare/childcare-subsidy-payroll" style={{ color: '#ECAC60' }}>Childcare Subsidy and Payroll: Managing Mixed-Funding Compliance</Link></li>
            <li><Link href="/blog/payroll/childcare/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Childcare Centers</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Can you handle high-volume new hire and termination processing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. New hire setup, termination processing, and all associated filings are included in the flat monthly rate.' } },
              { '@type': 'Question', name: 'How do you handle substitute and on-call teacher payroll?', acceptedAnswer: { '@type': 'Answer', text: 'We review substitute arrangements, classify them correctly as W-2 or 1099, and flag classification risk before it becomes an audit problem.' } },
              { '@type': 'Question', name: 'What state childcare subsidy compliance support is included?', acceptedAnswer: { '@type': 'Answer', text: 'We maintain payroll records in the format state subsidy programs require, and prepare documentation for compliance reviews and renewals.' } },
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, new hire and termination handling, state filings, year-end W-2s, and BEG support.' } },
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Childcare & Daycare Centers', item: 'https://www.beghr.com/services/managed-payroll/childcare' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Childcare Center Payroll and FLSA Overtime: What Operators Need to Know',
            excerpt: 'Split shifts, part-time ratios, and overtime for childcare workers. The FLSA rules most small centers get wrong and what it costs them.',
            href: '/blog/payroll/childcare/childcare-payroll-overtime',
          },
          {
            category: 'Payroll compliance',
            title: 'Childcare Subsidy and Payroll: Managing Mixed-Funding Compliance',
            excerpt: 'Child Care Assistance Program, CCAP, and state vouchers all have different tracking requirements. How to keep payroll clean across funding sources.',
            href: '/blog/payroll/childcare/childcare-subsidy-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Childcare Centers',
            excerpt: 'What childcare directors actually spend managing payroll in-house vs. what outsourcing costs per employee per month.',
            href: '/blog/payroll/childcare/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
