import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Veterinary Payroll | Instant Quote | BEG',
  description: 'Veterinary payroll fully managed at $25-45 PEPM. Production associate pay, relief vet 1099 compliance, and mixed staff handling included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/veterinary' },
  openGraph: {
    title: 'Veterinary Payroll | Instant Quote | BEG',
    description: 'Veterinary payroll fully managed at $25-45 PEPM. Production associate pay, relief vet 1099 compliance, and mixed staff handling included.',
    url: 'https://www.beghr.com/services/managed-payroll/veterinary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Veterinary Payroll | Instant Quote | BEG', description: 'Veterinary payroll fully managed at $25-45 PEPM. Production associate pay, relief vet 1099 compliance, and mixed staff handling included.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-veterinary');

export default function PayrollVeterinaryPage() {
  return (
    <ServicePage
      heroVideoId="s1GN-ZOZyQE"
      imageSrc="/assets/hero-images/veterinary.svg"
      imageAlt="Veterinary practice with fully managed payroll"
      eyebrow="Managed Payroll · Veterinary Practices"
      title="Managed Payroll for Veterinary Practices"
      description="Production-based associate pay, relief vet 1099s, and technician overtime -- all in one managed payroll. Veterinary practices run one of the most complex mixed compensation environments in healthcare, with a growing relief vet market, hourly technicians with overtime, and part-time front office staff all on the same payroll. We manage all of it at $25-$45 per employee per month."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including multi-location practices' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Payroll Reality for Vet Practices</p>
            <h2>Four compensation structures running simultaneously -- any one of them can break payroll.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Production pay</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Associate vet compensation requires integrating production data into every pay cycle</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Most associate vets earn a base salary plus a production percentage -- typically 18-25% of revenue they generate. Calculating it correctly requires pulling production figures from your practice management software, applying the right percentage, and reconciling adjustments every cycle.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Relief vet risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Relief and emergency vets are commonly misclassified as independent contractors</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The IRS and many states use a behavioral control test to determine whether a relief vet is truly an independent contractor or should be classified as a W-2 employee. Misclassification triggers back employment taxes, penalties, and benefits exposure for every relief vet you have paid as 1099.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Mixed workforce</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Salaried vets, hourly techs, part-time CSRs, and 1099 relief vets on one payroll</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Each employee category has different overtime rules, tax treatment, and documentation requirements. Running all four types correctly on a single payroll cycle is where most practice management software falls short and where compliance errors concentrate.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Every role in your practice, handled correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Associate veterinarians', body: 'Base salary plus production percentage, calculated from your practice management system. Bonus thresholds, drawback provisions, and annual true-ups handled.' },
              { title: 'Relief veterinarians', body: 'W-2 or 1099 processing based on your working relationship. We flag classification risk before it becomes an audit issue and handle year-end 1099-NEC filing for true contractors.' },
              { title: 'Veterinary technicians', body: 'Hourly pay with overtime calculations under FLSA. LVT versus unlicensed tech pay differentiation, shift differentials for overnight and emergency shifts.' },
              { title: 'Client service reps and front office', body: 'Part-time and full-time hourly staff, PTO accrual, and benefits eligibility tracking. ACA reporting for practices with 50+ FTE equivalent employees.' },
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
            <h2>Three steps to fully managed veterinary payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your associate production pay structure, relief vet agreements, tech overtime rules, and front office roster. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure production pay data pulls, relief vet classification review, overtime calculations, and multi-state registrations if applicable. No migration required -- we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every production percentage calculation, every 1099-NEC -- fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors do not offer veterinary practices</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We do not want to disrupt our practice management or payroll software."',
                body: 'We do not require you to switch software. BEG operates as your managed payroll team inside your current system -- whether that is AviMark, Cornerstone, ezyVet, or a standalone payroll platform. If you want to move to iSolved for a better experience, we can handle that transition, but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Payroll services charge extra for production pay integrations and 1099 processing."',
                body: 'The $25-$45 PEPM rate covers everything: production pay calculation, relief vet 1099 processing, multi-state filings, year-end W-2s, and BEG support. One number, every month.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands vet practice compensation.',
                objection: 'Common objection: "Generic payroll support does not understand production pay or relief vet arrangements."',
                body: 'Your BEG payroll specialist is your ongoing point of contact. When your production percentage changes, when you add a relief vet, or when you open a second location -- one message to your BEG contact handles it. No call center, no ticket queue, no explaining your practice structure from scratch each time.',
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
            <h2>From scope review to live veterinary payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your associate pay structure, relief vet arrangements, tech overtime, and multi-location setup -- and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, staff roster and relief vet agreements reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Production pay integration, relief vet classification review, and overtime calculations configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed veterinary pay run -- BEG executes, your team approves. No migration required.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A single relief vet reclassification audit costs more than years of managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>IRS reclassification of independent contractors to W-2 employees triggers back payroll taxes, both the employer and employee share, plus penalties and interest. For a practice that has paid five relief vets as 1099 over three years, the exposure can easily exceed $50,000. Fully managed payroll at $25-$45 PEPM on a 15-person practice costs under $9,000 per year -- including the protection.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix production pay calculations is before your next associate dispute.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. Clean quarter-start cutovers require starting the scope review now. Every cycle you run production pay manually is a cycle where an error can create an associate compensation dispute -- one of the top reasons veterinary associate turnover happens.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your production pay structure, relief vet situation, and staff roster -- and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from veterinary practices</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle production-based compensation for associate vets?</h3>
              <p>Yes. We integrate with your practice management system to pull production figures each pay cycle, apply the correct percentage, handle adjustments, and reconcile the calculation before payroll runs. Production pay errors are one of the most common associate retention issues -- we eliminate them.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle relief vet 1099 versus W-2 situations?</h3>
              <p>We review your relief vet agreements and working arrangements against IRS classification criteria. If a relief vet qualifies as a true independent contractor, we process 1099-NEC. If the arrangement carries W-2 risk, we flag it and walk you through the options before the next pay cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What if we have multiple clinic locations?</h3>
              <p>We manage multi-location payroll as a single unified engagement. Employees who work across locations, state registrations for each location, and consolidated reporting are all included in the flat PEPM rate.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, production pay calculations, federal and state tax filing, 1099-NEC processing for relief vets, year-end W-2s, compliance updates, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle ACA compliance for growing veterinary practices?</h3>
              <p>Practices approaching 50 full-time equivalent employees become Applicable Large Employers under the ACA and must offer qualifying coverage or face penalties. We track your FTE count throughout the year and flag the threshold before you cross it, so you can make benefits decisions proactively rather than reactively at the end of the year.</p>
            </div>
            <div className="faq-item">
              <h3>What if we expand to a second clinic in a different state?</h3>
              <p>Multi-state practice expansion is part of what we manage. We register in the new state, handle separate withholding requirements, and incorporate the new location into your existing managed payroll engagement. You get consolidated billing and reporting across all locations at the same per-employee rate -- no new contracts, no additional setup fees.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to transition to managed veterinary payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure your production pay structure, review relief vet classifications, and set up everything in your existing system. The first payroll under BEG management runs the week after onboarding -- no disruption to your practice schedule or your staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/veterinary/veterinary-staff-overtime-rules" style={{ color: '#ECAC60' }}>Veterinary Staff Overtime Rules: Which Roles Are Exempt and Which Are Not</Link></li>
            <li><Link href="/blog/payroll/veterinary/dvm-compensation-payroll" style={{ color: '#ECAC60' }}>DVM Compensation and Payroll: Base Salary, Production %, and Bonuses</Link></li>
            <li><Link href="/blog/payroll/veterinary/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Veterinary Practices</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different healthcare specialty?{' '}
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
              { '@type': 'Question', name: 'Can you handle production-based compensation for associate vets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate with your practice management system to pull production figures each cycle, apply the correct percentage, and reconcile before payroll runs.' } },
              { '@type': 'Question', name: 'How do you handle relief vet 1099 vs. W-2 situations?', acceptedAnswer: { '@type': 'Answer', text: 'We review relief vet agreements against IRS criteria. True contractors get 1099-NEC. Arrangements with W-2 risk are flagged before the next cycle.' } },
              { '@type': 'Question', name: 'What if we have multiple clinic locations?', acceptedAnswer: { '@type': 'Answer', text: 'Multi-location payroll is managed as a single engagement. State registrations, cross-location employees, and consolidated reporting are all included.' } },
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, production pay calculations, tax filing, 1099-NEC processing, year-end W-2s, and BEG support.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Veterinary Practices', item: 'https://www.beghr.com/services/managed-payroll/veterinary' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'How to Set Up DVM Salary and Production Bonuses in Payroll',
            excerpt: 'DVM production bonuses are calculated as a percentage of collections, not revenue. Here is how to set up the formula in payroll and process it correctly each cycle.',
            href: '/blog/payroll/veterinary/dvm-compensation-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'Veterinary Practice Payroll: FLSA Overtime Rules for Vet Staff',
            excerpt: 'Most vet techs and support staff are non-exempt. DVMs may qualify for learned professional exemption. Here is how to classify each role and avoid back-pay claims.',
            href: '/blog/payroll/veterinary/veterinary-staff-overtime-rules',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Veterinary Practices',
            excerpt: 'What single-location and multi-location practices spend managing payroll in-house vs. what fully managed outsourcing costs per employee per month.',
            href: '/blog/payroll/veterinary/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
