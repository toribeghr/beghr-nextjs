import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Nonprofit Payroll Services | Instant Quote | BEG';
const DESC = 'Payroll services for nonprofits fully managed at $25-45 PEPM. Grant-restricted fund coding, Form 990 compensation disclosure, and volunteer misclassification risk handled.';
const URL = 'https://www.beghr.com/services/managed-payroll/nonprofit';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-nonprofit');

const FAQS: [string, string][] = [
  [
    'Do nonprofit employees get taxed differently than for-profit employees?',
    'No. A 501(c)(3) organization\'s federal income tax exemption does not extend to its employees. Wages are subject to the same federal income tax withholding, Social Security, and Medicare rules as any other employer, with narrow exceptions like qualifying student workers.',
  ],
  [
    'Can we pay someone as a volunteer and a paid employee at the same time?',
    'It is legally risky and heavily scrutinized. The Department of Labor looks at whether the person performs the same duties in both roles and whether the "volunteer" hours are effectively unpaid work for the same job. We flag these situations during scope review before they become a wage claim.',
  ],
  [
    'How do you allocate payroll costs across multiple grants?',
    'We configure your payroll system with labor allocation categories that map to each grant or program, so every pay run distributes salary and burden costs to the correct funding source automatically, with documentation ready for your grant reporting and single audit if required.',
  ],
  [
    'Does the executive director\'s compensation have to be disclosed publicly?',
    'Yes. Form 990 requires reporting compensation for officers, directors, trustees, key employees, and the five highest-compensated employees above $100,000, and the return is a public document. We format payroll data so your compensation reporting is accurate and ready before filing season.',
  ],
  [
    'Are 501(c)(3) organizations exempt from unemployment insurance?',
    'Most are not automatically exempt from state unemployment tax, though nonprofits can elect the reimbursable method under federal law instead of paying standard SUTA, reimbursing the state only for actual claims paid. We help you evaluate which method costs less for your organization.',
  ],
  [
    'Do we have to change payroll systems to work with BEG?',
    'No. BEG operates as your managed payroll team inside your existing system. Migration to isolved is available if you want a more capable platform, but it is never a requirement to start.',
  ],
  [
    'What does the $25-$45 PEPM rate include?',
    'Everything: multi-program payroll coding, grant fund allocation, unemployment insurance method review, Form 990 compensation data prep, state filings, year-end W-2s, and a dedicated BEG contact.',
  ],
  [
    'How long does setup take?',
    'From signed agreement to live payroll: 3-5 business days. We map your programs and grants, configure labor allocation categories, and review your current unemployment insurance election before your first managed pay cycle.',
  ],
];

export default function PayrollNonprofitPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/nonprofit.svg"
      imageAlt="Nonprofit organization staff with fully managed payroll"
      showHeroImage={true}
      eyebrow="Managed Payroll · Nonprofit Organizations"
      title="Payroll Services for Nonprofits: Grant Coding, Form 990 Disclosure, and Volunteer Risk Handled"
      description="501(c)(3) payroll has its own set of traps: grant-restricted fund allocation, volunteer vs. employee misclassification exposure, executive compensation that must be publicly disclosed on Form 990, and multi-program coding across every funding source. We manage all of it at $25-$45 per employee per month, inside your existing system."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, multi-program nonprofits included' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >
      {/* TL;DR */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
            <p style={{ margin: 0, fontSize: '0.97rem', color: '#333333', lineHeight: '1.7' }}>
              <strong>Bottom line:</strong> Nonprofit payroll is not just regular payroll with a tax exemption attached. Grant-restricted funds need program-level cost coding, volunteers who also draw a paycheck create wage-claim risk, and executive compensation lands on a publicly filed Form 990. BEG runs nonprofit payroll at $25-$45 PEPM, all-inclusive, in your existing system, live in 3-5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Nonprofit Payroll Is Different</p>
            <h2>What makes 501(c)(3) payroll different from a standard business?</h2>
            <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
              A 501(c)(3)&apos;s tax exemption covers the organization&apos;s income, not its payroll obligations. Grant fund coding, volunteer misclassification risk, and public compensation disclosure create nonprofit-specific payroll exposure that standard business payroll setups do not handle.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Grant coding</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Restricted grant funds require payroll costs allocated to the correct program, not just the correct employee</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Federal and foundation grants often restrict how funds are spent, and payroll charged against a grant must be documented with time-and-effort records showing the employee actually worked on that program. Organizations subject to the Uniform Guidance single audit threshold face additional documentation standards under <a href="https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200" target="_blank" rel="noopener noreferrer">2 CFR Part 200</a>. Miscoded labor allocation is one of the most common single-audit findings.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Volunteer risk</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Volunteers who also do paid work for the same organization create real wage-claim exposure</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The Fair Labor Standards Act permits genuine volunteering for a nonprofit, but the <a href="https://www.dol.gov/agencies/whd/fact-sheets/14-flsa-employees-vs-independent-contractors" target="_blank" rel="noopener noreferrer">Department of Labor</a> scrutinizes situations where a paid employee also "volunteers" similar duties off the clock. If the volunteer role overlaps with the paid job description, it can be recharacterized as unpaid work owed back wages. Board members who also serve as unpaid staff face the same exposure.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Public disclosure</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Executive and board compensation is reported on a public tax return, not filed away privately</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Form 990 requires reporting compensation for officers, directors, trustees, key employees, and the five highest-compensated employees earning over $100,000, per the <a href="https://www.irs.gov/charities-non-profits/form-990-resources-and-tools" target="_blank" rel="noopener noreferrer">IRS Form 990 instructions</a>. Unlike private company payroll, this data becomes public record, inviting donor, watchdog, and media scrutiny of pay decisions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Which roles at a nonprofit does managed payroll actually cover?</h2>
            <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
              BEG manages payroll for every role type a 501(c)(3) employs: executive staff subject to Form 990 disclosure, program staff coded to specific grants, part-time and seasonal workers, and multi-program or multi-location organizations under one engagement.
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Executive directors and officers', body: 'Compensation structured and documented for accurate Form 990 reporting, including base pay, bonuses, and reportable benefits that must be disclosed publicly.' },
              { title: 'Program and grant-funded staff', body: 'Salaries coded to the correct program or grant, with labor allocation categories configured so time-and-effort documentation is ready for funder and single-audit review.' },
              { title: 'Part-time, seasonal, and event staff', body: 'Fundraising event staff, seasonal program workers, and part-time support staff processed correctly with appropriate new hire reporting and unemployment insurance treatment.' },
              { title: 'Multi-program and multi-location nonprofits', body: 'Organizations running multiple programs, chapters, or physical locations managed under one unified payroll engagement with program-level cost reporting.' },
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
            <h2>How does BEG set up managed payroll for a nonprofit?</h2>
            <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
              A scope review maps your programs, grants, and staff roster, then we configure grant-level labor coding and unemployment insurance treatment in your existing system before running your first live payroll.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your programs, active grants, executive compensation structure, and unemployment insurance election status. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure grant-level labor allocation coding, Form 990 compensation reporting categories, and volunteer-vs-employee role documentation. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every grant allocation report, every state filing, and every year-end W-2 fully managed by BEG. Your board approves compensation, we process everything else.' },
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
            <h2>Three things most payroll vendors do not offer nonprofits</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We are on a tight budget and cannot disrupt the system our bookkeeper already knows."',
                body: 'BEG operates as your managed payroll team inside your current system, whatever it is. If you want to move to isolved for a platform that handles grant-fund coding and multi-program allocation natively, we can manage that transition, but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate, budget-friendly for grant reporting.',
                objection: 'Common objection: "Our funders want to see exactly what payroll administration costs against each grant, and add-on fees make that messy."',
                body: 'The $25-$45 PEPM rate covers everything: grant fund allocation, Form 990 compensation data prep, state filings, year-end W-2s, and BEG support. One predictable number your finance committee and funders can both understand.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands nonprofit payroll.',
                objection: 'Common objection: "We call our payroll company and they have never heard of a single audit or a Form 990."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center that has to look up what grant-restricted funding means. When your finance committee needs a grant allocation report, or you add a new program, one message to your BEG contact gets it handled.',
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
            <h2>How long does it take to get compliant nonprofit payroll running?</h2>
            <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
              From scope review to your first live pay cycle takes 3-5 business days, including grant-level labor coding setup and a review of your unemployment insurance election.
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your programs, grants, executive compensation structure, and unemployment insurance status, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, grant and program list confirmed, current-year Form 990 compensation categories reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Grant-level labor allocation coding, volunteer vs. employee role documentation, and unemployment insurance treatment configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed nonprofit pay run. BEG executes, your board approves compensation, we handle everything else.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Miscoded grant labor is one of the most common single-audit findings.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Nonprofits that spend $1,000,000 or more in federal awards in a fiscal year are subject to a single audit under <a href="https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>2 CFR Part 200</a>, and payroll cost allocation is consistently one of the areas auditors flag. A finding can mean disallowed costs, corrective action plans, and funder scrutiny on your next grant cycle. Managed payroll includes labor allocation coding built for audit review from day one.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Filing Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix payroll coding is before your next Form 990 is due.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Form 990 compensation disclosures pull directly from your payroll records. Transitions typically take 30-60 days. Starting the scope review now means clean, correctly-coded compensation data ready well before your filing deadline, not a scramble the week it is due.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your programs, grants, and compensation reporting needs, and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from nonprofit organizations</h2>
          </div>
          <div className="faq reveal">
            {FAQS.map(([q, a]) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/nonprofit/grant-fund-payroll-allocation" style={{ color: '#ECAC60' }}>Grant Fund Payroll Allocation: Setting Up Labor Coding That Survives a Single Audit</Link></li>
            <li><Link href="/blog/payroll/nonprofit/form-990-executive-compensation-payroll" style={{ color: '#ECAC60' }}>Form 990 and Executive Compensation: What Payroll Needs to Get Right</Link></li>
            <li><Link href="/blog/payroll/nonprofit/volunteer-vs-employee-misclassification" style={{ color: '#ECAC60' }}>Volunteer vs. Employee: Avoiding Misclassification Risk at Nonprofits</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Running payroll for a church or other faith-based organization specifically?{' '}
            <Link href="/services/managed-payroll/church" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See managed payroll for churches
            </Link>
            {' '}or{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              see all managed payroll services
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
            '@type': 'Service',
            name: 'Nonprofit Payroll Services',
            description: DESC,
            serviceType: 'Nonprofit Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: 'United States',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
            url: URL,
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Nonprofit Organizations', item: URL },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Grant Fund Payroll Allocation: Setting Up Labor Coding That Survives a Single Audit',
            excerpt: 'Restricted grants require time-and-effort documentation, not just a program name in a memo field. Here is how to set up allocation coding correctly.',
            href: '/blog/payroll/nonprofit/grant-fund-payroll-allocation',
          },
          {
            category: 'Payroll compliance',
            title: 'Form 990 and Executive Compensation: What Payroll Needs to Get Right',
            excerpt: 'Executive and key employee pay becomes a public record on Form 990. A clear breakdown of what payroll data needs to be accurate before filing.',
            href: '/blog/payroll/nonprofit/form-990-executive-compensation-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Volunteer vs. Employee: Avoiding Misclassification Risk at Nonprofits',
            excerpt: 'When a volunteer role overlaps with paid duties, nonprofits face real wage-claim exposure. What to document and how managed payroll helps.',
            href: '/blog/payroll/nonprofit/volunteer-vs-employee-misclassification',
          },
        ]}
      />
    </ServicePage>
  );
}
