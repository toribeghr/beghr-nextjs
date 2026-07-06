import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Hampshire Paid Sick Leave Explained (2026 Guide)',
  description: 'Does New Hampshire mandate paid sick leave? How the voluntary state paid family leave plan fits in, and what employers must build.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained' },
  openGraph: {
    title: 'New Hampshire Paid Sick Leave Explained (2026 Guide)',
    description: 'Does New Hampshire mandate paid sick leave? How the voluntary state paid family leave plan fits in, and what employers must build.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-new-hampshire-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Hampshire Paid Sick Leave Explained (2026 Guide)', description: 'Does New Hampshire mandate paid sick leave? How the voluntary state paid family leave plan fits in, and what employers must build.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-new-hampshire-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does New Hampshire require paid sick leave?',
    answer: 'No. New Hampshire has no statewide paid sick leave mandate. Employers set their own policy. A voluntary state paid family leave plan exists separately and is not a mandate on employers.',
  },
  {
    question: 'Is New Hampshire\'s paid family leave plan mandatory?',
    answer: 'No. It is a voluntary plan employers and employees may opt into. It is not a mandatory payroll deduction or employer requirement the way some other states\' programs are structured.',
  },
  {
    question: 'How does the voluntary plan differ from paid sick leave?',
    answer: 'Paid sick leave, where offered, covers short absences and is employer-designed. The voluntary paid family leave plan is a separate opt-in wage-replacement option tied to qualifying family or medical events.',
  },
  {
    question: 'Does FMLA apply to New Hampshire employers?',
    answer: 'Yes, FMLA is a federal law providing unpaid, job-protected leave to eligible employees at covered employers nationwide, including New Hampshire, based on headcount and hours-worked thresholds.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting",
        "image": "https://beghr.com/blog-images/blog-hr-outsourcing-leave-new-hampshire-paid-sick-leave-explained.webp", "headline": "New Hampshire Paid Sick Leave Explained (2026 Guide)", "description": "Does New Hampshire mandate paid sick leave? How the voluntary state paid family leave plan fits in, and what employers must build.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>New Hampshire Paid Sick Leave Explained (2026 Guide)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-new-hampshire-paid-sick-leave-explained.webp" alt={`An HR team reviewing employee documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New Hampshire has no statewide paid sick leave mandate, and its state paid family leave plan is voluntary rather than required, which means employers must decide both policies for themselves in writing.</p>

        <p>New Hampshire occupies an unusual position. It has no mandated sick leave law, but it does offer a state-run voluntary paid family leave plan that employers and employees can opt into. That combination confuses employers who assume "voluntary" means "irrelevant" or, worse, assume the plan is a mandate they are already supposed to be complying with. Neither assumption is correct, and getting the distinction wrong in employee-facing materials creates real confusion.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> helps New Hampshire employers, building policy that correctly separates a discretionary sick leave benefit from an optional state program.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>No sick leave mandate, but still a policy decision</h2>

        <p>New Hampshire has not adopted a statewide paid sick leave law. There is no required accrual rate, no state-mandated carryover rule, and no minimum permitted-use list that private employers must follow. Employers are free to build their own approach, whether that is a traditional sick bank, a combined PTO policy, or no formal paid sick leave benefit at all, but the choice should be documented rather than left inconsistent across managers.</p>

        <p>Employers with locations or remote employees outside New Hampshire should also watch for local ordinances in other states, such as Pennsylvania's Philadelphia and Pittsburgh rules, and for any state mandate that would apply to an out-of-state remote hire regardless of New Hampshire's own approach.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The voluntary state paid family leave plan</h2>

        <p>New Hampshire offers a voluntary state paid family leave plan that employers can choose to participate in, and employees can independently opt into aspects of it as well. This is meaningfully different from a mandatory state paid family and medical leave program of the kind found in some other states. Participation is not required, funding mechanics differ from a mandatory payroll tax structure, and an employer that does not opt in has no ongoing compliance obligation tied to the plan.</p>

        <p>Because it is voluntary, employers should be precise in employee communications: this is an available option, not a benefit every employee automatically receives, and it should never be described in handbook language as though it functions like a mandatory state program. Confirm current plan details, enrollment mechanics, and any related dates directly with the state before finalizing employee materials.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act applies in New Hampshire the same way it applies nationally, independent of both the absence of a sick leave mandate and the voluntary nature of the state family leave plan. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, determined by headcount and hours-worked thresholds, for qualifying medical and family circumstances. It guarantees job restoration but does not itself provide wage replacement. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>New Hampshire's combination of no sick leave mandate and a voluntary paid family leave plan requires policy language that is precise about what is required, what is optional, and what applies only if the employer opts in. BEG's certified HR professionals track New Hampshire's approach alongside every other state where a client has employees, keeping handbook language accurate as the voluntary plan evolves, powered by isolved. This runs alongside talent acquisition and direct hire support as New Hampshire employers grow their teams. See the <a href="/services/hr-outsourcing/new-hampshire">New Hampshire HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a state with its own voluntary paid family leave plan alongside a statewide sick leave mandate, see how <a href="/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained">Vermont paid sick leave</a> handles both pieces together.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>New Hampshire status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'No mandate', 'Adopt a written policy anyway for consistency'],
                ['State paid family leave plan', 'Voluntary, opt-in', 'Confirm current enrollment details; do not describe as mandatory'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on headcount; does not require paid leave'],
                ['Local ordinances', 'None currently in New Hampshire', 'Monitor if operations expand into cities with ordinances'],
                ['Remote employees in other states', 'Governed by the employee\'s work state', 'Build multi-state policy as headcount grows'],
              ].map(([type, status, action], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{type}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{status}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#666' }}>General information, not legal advice. For anything not covered above, confirm current requirements with your state labor office: <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">DOL state labor office contacts</a>.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Sick Leave and Voluntary Leave Plan Policy, Written Correctly.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Certified HR professionals build and maintain it for a fraction of an in-house hire that can run $60K to $100K a year.</p>
          <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.7 }}>A new hire in a new state changes payroll too. BEG pairs this with <a href="/services/managed-payroll">managed payroll</a> so the written policy and the actual paycheck stay in sync.</p>
            <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads HR outsourcing strategy at Business Executive Group, a national HR outsourcing firm serving employers across every state. BEG HR outsourcing is powered by isolved, with certified HR professionals building and maintaining state-correct leave policy as laws change.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does New Hampshire require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. New Hampshire has no statewide paid sick leave mandate. Employers set their own policy. A voluntary state paid family leave plan exists separately and is not a mandate on employers."}},{"@type":"Question","name":"Is New Hampshire's paid family leave plan mandatory?","acceptedAnswer":{"@type":"Answer","text":"No. It is a voluntary plan employers and employees may opt into. It is not a mandatory payroll deduction or employer requirement the way some other states' programs are structured."}},{"@type":"Question","name":"How does the voluntary plan differ from paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Paid sick leave, where offered, covers short absences and is employer-designed. The voluntary paid family leave plan is a separate opt-in wage-replacement option tied to qualifying family or medical events."}},{"@type":"Question","name":"Does FMLA apply to New Hampshire employers?","acceptedAnswer":{"@type":"Answer","text":"Yes, FMLA is a federal law providing unpaid, job-protected leave to eligible employees at covered employers nationwide, including New Hampshire, based on headcount and hours-worked thresholds."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"New Hampshire Paid Sick Leave Explained (2026 Guide)","item":"https://www.beghr.com/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Vermont Paid Sick Leave Explained", excerpt: "How Vermont's earned sick time mandate and voluntary paid family leave plan work.", href: "/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "New Jersey Paid Sick Leave Explained", excerpt: "How New Jersey's statewide paid sick leave mandate and PFML program work together.", href: "/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Pennsylvania Paid Sick Leave Explained", excerpt: "How Philadelphia and Pittsburgh local ordinances change the picture for employers.", href: "/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
