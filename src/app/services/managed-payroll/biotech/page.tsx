import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Biotech Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
  description: 'Biotech and life sciences payroll fully managed at $25-$45 PEPM. Clinical stipend classification, R&D wage documentation, equity comp withholding handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/biotech' },
  openGraph: {
    title: 'Biotech Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
    description: 'Biotech and life sciences payroll fully managed at $25-$45 PEPM. Clinical stipend classification, R&D wage documentation, equity comp withholding handled.',
    url: 'https://www.beghr.com/services/managed-payroll/biotech',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Biotech Payroll Services | Instant Quote, $25-$45 PEPM | BEG', description: 'Biotech and life sciences payroll fully managed at $25-$45 PEPM. Clinical stipend classification, R&D wage documentation, equity comp withholding handled.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-biotech');

export default function PayrollBiotechPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/compliance.svg"
      imageAlt="Biotech lab with fully managed payroll"
      eyebrow="Managed Payroll · Biotech & Life Sciences"
      title="Biotech payroll touches your R&D tax credit, your cap table, and the IRS all at once."
      description="Clinical trial stipend classification, R&D tax credit wage documentation, equity compensation withholding, and multi-state remote scientific staff make biotech payroll unlike payroll anywhere else. BEG manages all of it at $25-$45 per employee per month, fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="biotech" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered for remote scientific staff' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.25rem 1.5rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#333333' }}>
            <strong>Bottom line up front:</strong> Biotech payroll has four compliance points with no equivalent in most industries: correctly classifying clinical trial participant stipends against true W-2 or 1099 payroll, documenting wages accurately enough to support an R&D tax credit claim, withholding correctly on equity compensation, and managing multi-state remote scientific staff. BEG manages all of it at $25-$45 PEPM, fully managed, no migration required.
          </p>
        </div>
      </section>

      {/* PAIN */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Biotech Payroll Is Different</p>
            <h2>What makes payroll harder for biotech and life sciences companies?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Clinical trial stipends are not payroll, R&D tax credit documentation depends on accurate wage allocation, equity compensation withholding is technical, and remote scientific staff span many states.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Stipend vs. payroll</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Clinical trial participant stipends must be classified correctly and kept separate from employee and contractor payroll</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Clinical trial participants receiving stipends are generally not employees and are typically reported differently from W-2 staff or 1099 contractors performing services for the company. Biotech companies running trials alongside a scientific staff of employees and consultants need a payroll process that keeps these categories cleanly separated, since misclassifying any worker type creates IRS exposure.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>R&D credit documentation</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>The federal R&D tax credit depends on accurate wage allocation by project, tracked at the payroll level</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The Section 41 research credit requires documenting qualified research expenses, and wages paid to employees performing qualified research make up a substantial share of most biotech companies' claims. If payroll records do not allocate wages accurately by project and by qualifying activity, the wage documentation supporting the credit is weaker in an IRS examination. Clean, project-coded payroll data makes the credit claim defensible.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Equity comp withholding</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Stock option and RSU withholding is common at venture-backed biotech companies and easy to get wrong</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Venture-backed biotech companies routinely grant incentive stock options, non-qualified stock options, and restricted stock units as part of compensation. Each has different withholding and reporting treatment at exercise or vesting, and the payroll system has to reflect the correct treatment on the affected employee's W-2 for that tax year. Errors here surface at tax filing time, when they are hardest to unwind.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Remote Scientific Staff</p>
            <h2>How do you manage payroll for scientists working remotely across states?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Every state where a remote scientist lives and works can require its own withholding registration, unemployment insurance account, and compliance with that state's specific wage and hour rules.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: '760px', margin: '2rem auto 0' }}>
            <p style={{ fontSize: '0.97rem', color: '#444444', lineHeight: '1.7' }}>
              Biotech companies increasingly hire computational biologists, bioinformaticians, and other scientific staff who work fully remote, often in states where the company has no physical office. Each new state generally triggers a withholding tax registration and a state unemployment insurance account, and some states have their own paid leave or wage notice requirements that apply the moment an employee resides there, according to guidance published by the{' '}
              <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's Wage and Hour Division</a>. BEG registers and files for every state your remote scientific staff touches, so headcount growth never outruns your compliance footprint.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Every worker category in your organization, classified and paid correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Bench scientists and lab staff', body: 'Standard W-2 payroll with project-level wage coding to support R&D tax credit documentation, without adding manual work to your finance team.' },
              { title: 'Clinical and regulatory affairs staff', body: 'W-2 payroll for employed clinical operations and regulatory staff, kept cleanly separate from any trial participant stipend payments.' },
              { title: 'Consultants and scientific advisors', body: '1099 processing for genuine independent contractor relationships, reviewed against IRS worker classification standards before onboarding.' },
              { title: 'Remote computational and data science staff', body: 'Multi-state registration and withholding for remote scientific employees, wherever they are located, with new-state setup handled as you hire.' },
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
            <h2>Three steps to fully managed biotech payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your worker categories (W-2 staff, 1099 consultants, trial stipend recipients), equity compensation plans, and remote-staff state footprint. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure project-level wage coding for R&D credit documentation, set up correct equity comp withholding, and complete multi-state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every equity event withholding, and clean wage data your finance team can hand to whoever prepares your R&D credit claim -- fully managed by BEG.' },
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
            <h2>Three things most payroll vendors do not offer biotech companies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We just closed a funding round and cannot afford a payroll system change right now."',
                body: 'BEG operates as your managed payroll team inside your current system. No platform switch required. If you eventually want isolved for deeper HCM functionality as you scale headcount, we can manage that transition, but never as a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Our burn rate is tight and we cannot absorb variable payroll vendor fees."',
                body: 'The $25-$45 PEPM rate covers everything: W-2 and 1099 processing, equity comp withholding, multi-state filings, project-level wage coding, year-end forms, and BEG support. One predictable number every month.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands biotech payroll.',
                objection: 'Common objection: "Our last payroll provider had no idea what an ISO or an R&D credit was."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center. When your finance team needs project-coded wage data for an R&D credit study, or an employee exercises options and asks about withholding, one message to your BEG contact gets it explained and handled.',
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
            <h2>From scope review to compliant biotech payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your worker categories, equity plans, and remote-staff footprint, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, worker classification and equity plan documentation reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Project-level wage coding, equity comp withholding, and multi-state registrations configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed biotech pay run, with clean project-coded wage data from cycle one.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Weak wage documentation can shrink or unwind an R&D tax credit claim.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The Section 41 research credit requires substantiating qualified research expenses, and wages are typically the largest component of most biotech claims, per{' '}
                <a href="https://www.irs.gov/pub/irs-pdf/i6765.pdf" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#ECAC60' }}>IRS Form 6765 instructions</a>. Payroll records that were never coded to a project cannot be reconstructed after the fact with the same confidence. Clean, project-level wage coding from the start protects the credit your CPA or R&D study firm will claim.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix payroll classification is before your next funding round's diligence.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Transitions take 30-60 days. Investor diligence teams increasingly review worker classification and equity comp withholding as part of the process. Starting now means clean records well before term sheets are signed.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="biotech" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your worker classification, equity comp plans, and multi-state footprint, and give you a fixed monthly cost.</p>
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
              { title: 'Healthcare Payroll', href: '/services/managed-payroll/healthcare', desc: 'Clinical staff, shift differentials, and provider compensation compliance.' },
              { title: 'Technology & SaaS Payroll', href: '/services/managed-payroll/technology', desc: 'Equity comp, remote-first compliance, and contractor payroll for tech companies.' },
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
            <h2>Common questions from biotech and life sciences companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you handle clinical trial participant stipends versus employee payroll?</h3>
              <p>Trial participant stipends are generally not employee wages and are kept in a separate process from W-2 and 1099 payroll. We review your trial structure to confirm stipend recipients are classified correctly and that stipend payments do not get commingled with your employee or contractor payroll records.</p>
            </div>
            <div className="faq-item">
              <h3>Can you code payroll data to support our R&D tax credit claim?</h3>
              <p>Yes. We set up project-level wage coding so wages for employees performing qualified research are tracked and allocated correctly. Whoever prepares your Section 41 credit claim, whether an internal team or an outside R&D study firm, gets cleaner source data to work from.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle equity compensation withholding?</h3>
              <p>We configure correct withholding treatment for incentive stock options, non-qualified stock options, and RSUs based on the specific event (exercise or vesting), and make sure the resulting W-2 reporting is accurate for the tax year.</p>
            </div>
            <div className="faq-item">
              <h3>We have scientists working remotely in multiple states. Can you handle that?</h3>
              <p>Yes. BEG manages state withholding registration, unemployment insurance accounts, and compliance filings for remote employees in any state. As you hire in new states, we handle the registration as part of the standard managed payroll engagement.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll platforms?</h3>
              <p>No. BEG operates inside your existing system. Migration to isolved is available if you want a more capable platform as you scale, but it is never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: W-2 and 1099 processing, project-level wage coding, equity comp withholding, multi-state filings, year-end forms, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed biotech payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure worker classification, project-level wage coding, equity comp withholding, and multi-state registrations in your existing system.</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you handle clinical trial participant stipends versus employee payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Trial stipends are kept separate from W-2 and 1099 payroll, with classification reviewed to confirm correct treatment.' } },
          { '@type': 'Question', name: 'Can you code payroll data to support our R&D tax credit claim?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we set up project-level wage coding for employees performing qualified research to support Section 41 credit documentation.' } },
          { '@type': 'Question', name: 'How do you handle equity compensation withholding?', acceptedAnswer: { '@type': 'Answer', text: 'We configure correct withholding for ISOs, NSOs, and RSUs based on the specific exercise or vesting event and ensure accurate W-2 reporting.' } },
          { '@type': 'Question', name: 'We have scientists working remotely in multiple states. Can you handle that?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, BEG manages state withholding registration and unemployment insurance accounts for remote employees in any state.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
          { '@type': 'ListItem', position: 3, name: 'Biotech & Life Sciences', item: 'https://www.beghr.com/services/managed-payroll/biotech' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/services/managed-payroll/biotech',
      }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Clinical Trial Stipends vs. Payroll: Getting Worker Classification Right',
            excerpt: 'Why trial participant stipends are not employee wages, and how biotech companies keep the two processes cleanly separated.',
            href: '/blog/payroll/biotech/clinical-trial-stipends-vs-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'R&D Tax Credit Wage Documentation: What Payroll Records Need to Show',
            excerpt: 'How project-level wage coding supports a defensible Section 41 research credit claim.',
            href: '/blog/payroll/biotech/rd-tax-credit-wage-documentation',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. In-House for Venture-Backed Biotech',
            excerpt: 'What early-stage biotech companies actually spend on in-house payroll administration versus fully managed outsourcing.',
            href: '/blog/payroll/biotech/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
