import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What Your Michigan Handbook Must Cover in 2026",
  description: "What Michigan law requires in an employee handbook, from federal basics to state sick time rules employers often get wrong.",
  alternates: { canonical: "https://www.beghr.com/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements" },
  openGraph: {
    title: "What Your Michigan Handbook Must Cover in 2026",
    description: "What Michigan law requires in an employee handbook, from federal basics to state sick time rules employers often get wrong.",
    url: "https://www.beghr.com/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements",
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: "What Your Michigan Handbook Must Cover in 2026", description: "What Michigan law requires in an employee handbook, from federal basics to state sick time rules employers often get wrong.", images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: "What must a Michigan employee handbook include?",
    answer: "A Michigan employee handbook must cover federal at-will and anti-harassment basics plus the state's earned sick time law, which employers often misconfigure when building accrual and carryover policies.",
  },
  {
    question: "Does Michigan require a written handbook?",
    answer: "Michigan law does not require a handbook by name, but earned sick time notice obligations and other policies are easiest to document consistently through one. Most employers use a handbook to meet those notice duties.",
  },
  {
    question: "How often should a Michigan handbook be updated?",
    answer: "At least annually, and whenever the earned sick time law or minimum wage schedule changes. Michigan's minimum wage is on a scheduled path upward, which affects related pay policy language too.",
  },
  {
    question: "Do remote Michigan employees need different handbook language?",
    answer: "Yes. Any employee working from a Michigan address is covered by Michigan's earned sick time law regardless of where the employer is based, so the handbook needs a Michigan-specific supplement.",
  },
  {
    question: "What is the biggest handbook mistake Michigan employers make?",
    answer: "Treating earned sick time as identical to general PTO. Michigan's law has specific accrual and carryover requirements that a generic time-off policy often does not satisfy.",
  }
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BlogPosting\", \"headline\": \"Michigan Employee Handbook Requirements\", \"description\": \"What Michigan law requires in an employee handbook, from federal basics to state sick time rules employers often get wrong.\", \"datePublished\": \"2026-07-06\", \"dateModified\": \"2026-07-06\", \"author\": {\"@type\": \"Person\", \"name\": \"Anthony Moretti\", \"jobTitle\": \"VP of Sales\", \"url\": \"https://www.linkedin.com/in/theanthonymoretti\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Business Executive Group\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.beghr.com/assets/beg-header-image.png\"}}, \"url\": \"https://www.beghr.com/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements\", \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://www.beghr.com/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements\"}}" }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; HR Outsourcing</p>
              <h1>Michigan Employee Handbook Requirements</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>A Michigan employee handbook must cover federal at-will and anti-harassment basics plus the state's earned sick time law, which employers often misconfigure when building accrual and carryover policies.</p>

        <p>
          Every state employer, including those in Michigan, builds HR policy on the same federal floor. Get the details right at the federal level first, then layer in what Michigan adds, and the handbook stops being a generic template and starts functioning as an actual compliance document. For a broader look at how HR outsourcing works nationwide, see the{' '}
          <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or go straight to{' '}
          <a href="/services/hr-outsourcing">Get instant pricing</a> for your business.
        </p>

        <p>This guide walks through the federal requirements that apply to every Michigan employer, the specific additions Michigan law layers on top, the mistakes that show up most often in Michigan handbooks, and how a national HR outsourcing partner keeps the document current instead of letting it quietly go stale.</p>

        <p>This guide applies to any company with at least one employee working from a Michigan address, whether the rest of the team sits in-state or across the country. Michigan's earned sick time law applies once an employer crosses the state's employer-size threshold, so the first step for a growing company is confirming whether that threshold has been met, then building the accrual and carryover language into the handbook accordingly.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Federal Law Requires In Every Handbook</h2>

        <p>Regardless of state, every compliant handbook needs a core set of federal policies. These are not optional, and they apply to Michigan employers exactly as they apply everywhere else.</p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>An at-will employment statement, written clearly enough to hold up if challenged</li>
          <li style={{ marginBottom: '0.5rem' }}>Equal employment opportunity and anti-harassment policy, including a reporting process</li>
          <li style={{ marginBottom: '0.5rem' }}>FMLA notice for employers who meet the federal coverage threshold</li>
          <li style={{ marginBottom: '0.5rem' }}>Wage and hour basics, including how overtime is calculated under the Fair Labor Standards Act</li>
          <li style={{ marginBottom: '0.5rem' }}>Workplace safety expectations consistent with OSHA obligations</li>
          <li style={{ marginBottom: '0.5rem' }}>A signed acknowledgment page confirming the employee received and read the handbook</li>
        </ul>

        <p>
          The Department of Labor&apos;s{' '}
          <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Wage and Hour Division</a>{' '}
          publishes the federal baseline these policies are built on, and it is the right starting point before layering in any state-specific language.
        </p>

        <p>Michigan employers who also operate in other states can build the federal section once and reuse it, since FMLA eligibility, EEO obligations, and OSHA expectations do not change state to state. Only the state supplement layered on top needs to vary by location.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Michigan Adds</h2>

        <p>Michigan requires earned sick time, so the handbook needs a clear accrual formula, carryover rule, and usage policy that matches the state law rather than a generic paid time off paragraph.</p>

        <p>Michigan does not currently run a state paid family or medical leave program, so leave beyond sick time and federal FMLA should be described as company policy, not a state entitlement.</p>

        <p>Overtime in Michigan follows the standard weekly over 40 hours rule, and the minimum wage is scheduled to rise on a set date, so wage postings and pay policies need a periodic review.</p>

        <p>Any Michigan detail not covered here, including local variations, should be confirmed with the state labor office before it goes into a policy as fact.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Policy area</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Federal baseline</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Michigan addition</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: 600 }}>Paid sick leave</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>Not required by federal law</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>State-mandated earned sick time accrual and use</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: 600 }}>Family and medical leave</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>Unpaid FMLA for eligible employers</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>No additional state paid leave program</td>
              </tr>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: 600 }}>Overtime calculation</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>Weekly over 40 hours (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem' }}>Same weekly over 40 hours standard</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For anything specific to your location that is not covered here, confirm current requirements with the{' '}
          <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">state labor office</a>{' '}
          before finalizing policy language. See the Michigan-specific service page at{' '}
          <a href="/services/hr-outsourcing/michigan">HR outsourcing in Michigan</a> for how BEG applies these rules for local employers.
        </p>

        <p>Getting the Michigan layer wrong usually shows up first in inconsistent manager decisions. Without clear accrual and carryover language for earned sick time, one manager approves a request one way and another manager denies a similar request, and that inconsistency is exactly what turns a policy gap into a legal claim. A current, Michigan-specific handbook gives every manager the same answer regardless of location or tenure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Policies Employers In Michigan Commonly Get Wrong</h2>

        <p>Handbook mistakes tend to repeat across companies of similar size. The most common ones we see in Michigan include treating a template built for another state as a finished product, failing to update accrual language when a leave law changes, and leaving the acknowledgment page as an afterthought instead of a signed, dated record kept in the employee file.</p>

        <p>Another frequent gap involves talent acquisition. Handbooks rarely mention how job postings, interview practices, and offer letters connect to policy, yet inconsistent recruiting and direct hire practices are one of the fastest ways to create the exact discrimination exposure the EEO section is supposed to prevent.</p>

        <p>A related issue is inconsistent enforcement of the earned sick time policy across locations, especially for employers with both Michigan and out-of-state teams. Managers need the same training on the policy that the handbook itself received.</p>

        <p>It also helps to separate the employee-facing summary of a benefit from the underlying legal detail. Employees generally need plain language describing how to request earned sick time and how accrual works, while HR and payroll need the precise legal citations and thresholds. Handbooks that blend the two into one dense paragraph tend to confuse the audience that matters most, the employees actually using the policy day to day.</p>

        <p>Handbook policy decisions on PTO accrual and final pay also flow straight into how payroll actually runs each cycle. BEG&apos;s{' '}
          <a href="/services/managed-payroll">managed payroll</a>{' '}
          keeps those two systems connected so a policy change in the handbook does not quietly break how a final paycheck gets calculated.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>When To Update The Michigan Handbook</h2>

        <p>A handbook is not a one-time document. Update it at least once a year on a fixed schedule, and immediately any time federal law changes, Michigan passes new leave or wage legislation, or the company changes a benefit, policy, or reporting structure. Waiting until an audit or a claim forces the issue is the most expensive way to find an outdated policy.</p>

        <p>A useful practice is reviewing the handbook alongside each scheduled minimum wage increase, since Michigan's wage path is already set on a known schedule that makes planning the review straightforward.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How BEG Builds And Maintains It</h2>

        <p>BEG&apos;s certified HR professionals build a custom handbook with a Michigan supplement on the Expert plan, with two states included, powered by isolved. Instead of a static document that goes stale, the handbook is kept current as laws change, backed by HR professionals who understand both the federal floor and the Michigan-specific additions covered above. This is the same team that supports recruiting and direct hire decisions, so handbook policy and hiring practice stay consistent instead of drifting apart.</p>

        <p>For a growing company, the alternative to this kind of ongoing handbook support is usually one of two paths: assign it to an office manager or generalist who is already stretched across benefits, onboarding, and day-to-day questions, or bring on a dedicated in-house HR hire, typically in the range of $60K to $100K a year in salary and overhead, to own compliance work full time. BEG&apos;s Expert plan delivers certified HR professionals, a Michigan supplement, and ongoing maintenance as laws change, without adding a full-time headcount.</p>

        <p>Talent acquisition and direct hire decisions also connect back to the handbook more than most employers expect. A candidate&apos;s first real exposure to company policy often comes during recruiting and onboarding, so keeping the handbook, offer paperwork, and new hire packet aligned is part of getting talent acquisition right from day one, not a separate project.</p>

        <p>The Expert plan also covers a second state at no extra charge, which is useful for Michigan companies with employees just across the state line in Ohio, Indiana, or Wisconsin. Instead of managing separate handbook vendors for each state, one HR outsourcing relationship keeps both supplements accurate and current at the same time.</p>

        <p>Whether the immediate need is a first Michigan hire, a multi-state expansion, or simply catching an outdated policy before it becomes a problem, the fastest fix is usually not writing the whole document from scratch. It is having a certified HR professional review what already exists, flag what is missing against the current Michigan requirements described above, and update only what actually needs to change.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>A Michigan Handbook, Built Right The First Time.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Certified HR professionals build and maintain your Michigan handbook, powered by isolved. See your monthly estimate on screen.</p>
          <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
            <div key={0} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{faqs[0].question}</h3>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{faqs[0].answer}</p>
            </div>
            <div key={1} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{faqs[1].question}</h3>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{faqs[1].answer}</p>
            </div>
            <div key={2} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{faqs[2].question}</h3>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{faqs[2].answer}</p>
            </div>
            <div key={3} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{faqs[3].question}</h3>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{faqs[3].answer}</p>
            </div>
            <div key={4} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{faqs[4].question}</h3>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{faqs[4].answer}</p>
            </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What must a Michigan employee handbook include?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A Michigan employee handbook must cover federal at-will and anti-harassment basics plus the state's earned sick time law, which employers often misconfigure when building accrual and carryover policies.\"}}, {\"@type\": \"Question\", \"name\": \"Does Michigan require a written handbook?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Michigan law does not require a handbook by name, but earned sick time notice obligations and other policies are easiest to document consistently through one. Most employers use a handbook to meet those notice duties.\"}}, {\"@type\": \"Question\", \"name\": \"How often should a Michigan handbook be updated?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"At least annually, and whenever the earned sick time law or minimum wage schedule changes. Michigan's minimum wage is on a scheduled path upward, which affects related pay policy language too.\"}}, {\"@type\": \"Question\", \"name\": \"Do remote Michigan employees need different handbook language?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Any employee working from a Michigan address is covered by Michigan's earned sick time law regardless of where the employer is based, so the handbook needs a Michigan-specific supplement.\"}}, {\"@type\": \"Question\", \"name\": \"What is the biggest handbook mistake Michigan employers make?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Treating earned sick time as identical to general PTO. Michigan's law has specific accrual and carryover requirements that a generic time-off policy often does not satisfy.\"}}]}",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.beghr.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Blog\", \"item\": \"https://www.beghr.com/blog\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"HR Outsourcing\", \"item\": \"https://www.beghr.com/blog/hr-outsourcing\"}, {\"@type\": \"ListItem\", \"position\": 4, \"name\": \"Michigan Employee Handbook Requirements\", \"item\": \"https://www.beghr.com/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements\"}]}",
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Minnesota Employee Handbook Requirements", excerpt: "What Minnesota law requires in an employee handbook, from federal basics to state-specific additions.", href: "/blog/hr-outsourcing/handbooks/minnesota-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "Montana Employee Handbook Requirements", excerpt: "What Montana law requires in an employee handbook, from federal basics to state-specific additions.", href: "/blog/hr-outsourcing/handbooks/montana-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "New Hampshire Employee Handbook Requirements", excerpt: "What New Hampshire law requires in an employee handbook, from federal basics to state-specific additions.", href: "/blog/hr-outsourcing/handbooks/new-hampshire-employee-handbook-requirements" },
      ]} />
    </article>
  );
}
