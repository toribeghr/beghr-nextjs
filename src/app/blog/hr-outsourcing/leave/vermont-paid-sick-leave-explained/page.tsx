import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vermont Paid Sick Leave Explained: What Employers Must Do',
  description: 'Does Vermont mandate paid sick leave? How the voluntary paid family leave plan fits in, and what a compliant policy needs.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained' },
  openGraph: {
    title: 'Vermont Paid Sick Leave Explained: What Employers Must Do',
    description: 'Does Vermont mandate paid sick leave? How the voluntary paid family leave plan fits in, and what a compliant policy needs.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Vermont Paid Sick Leave Explained: What Employers Must Do', description: 'Does Vermont mandate paid sick leave? How the voluntary paid family leave plan fits in, and what a compliant policy needs.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Does Vermont require paid sick leave?',
    answer: 'Yes. Vermont mandates statewide earned sick time. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office.',
  },
  {
    question: 'Does Vermont have a mandatory state paid family leave program?',
    answer: 'No. Vermont offers a voluntary state paid family leave plan that employers may opt into. It is not a mandatory payroll-funded program the way some other states structure paid family leave.',
  },
  {
    question: 'How does the voluntary plan differ from Vermont\'s earned sick time mandate?',
    answer: 'Earned sick time is a required employer benefit for short-term absences. The voluntary paid family leave plan is a separate opt-in wage-replacement option tied to qualifying family or medical events.',
  },
  {
    question: 'Does FMLA apply to Vermont employers?',
    answer: 'Yes, FMLA is a federal law providing unpaid, job-protected leave to eligible employees at covered employers nationwide, including Vermont, based on headcount and hours-worked thresholds.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Vermont Paid Sick Leave Explained: What Employers Must Do", "description": "Does Vermont mandate paid sick leave? How the voluntary paid family leave plan fits in, and what a compliant policy needs.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Vermont Paid Sick Leave Explained: What Employers Must Do</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Vermont mandates statewide earned sick time and separately offers a voluntary state paid family leave plan. Employers must build a compliant sick time policy and confirm current figures with the state labor office.</p>

        <p>Vermont sits in a middle position among the states in this cluster. Its earned sick time mandate is a real, required employer obligation, not a discretionary benefit, but the state's paid family leave option is voluntary rather than mandatory. Employers who blur that distinction in handbook language risk either overstating what they are required to provide or understating an option employees may want to know about.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> helps Vermont employers, building a compliant earned sick time policy while keeping the voluntary paid family leave plan clearly separate.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What a compliant earned sick time policy needs</h2>

        <p>Vermont's statewide earned sick time mandate requires an accrual method, generally tied to hours worked, that reflects the current legal requirement. Unused time typically carries over between years in some form, though the exact mechanics and any cap should be confirmed directly rather than assumed. The policy needs a clear list of permitted uses, generally covering the employee's own illness or medical need and caring for a covered family member, along with reasonable documentation standards for extended absences and a fair notice provision for foreseeable absences.</p>

        <p>Because accrual rates, carryover caps, and permitted-use language can be updated, employers should confirm the current figures with the state labor office rather than relying on older policy language. The <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a> is a reliable starting point.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Earned sick time vs. the voluntary paid family leave plan</h2>

        <p>Vermont's earned sick time mandate and its voluntary paid family leave plan are easy to confuse but serve different purposes and carry different legal weight. Earned sick time is a required employer benefit generally designed for shorter, day-to-day absences tied to illness or family caregiving. The voluntary paid family leave plan, by contrast, is an optional program employers may choose to participate in, typically intended to provide wage replacement for events such as the birth of a child, bonding with a new child, or a serious health condition affecting a family member.</p>

        <p>Because the paid family leave plan is voluntary, employers are not required to offer it, and an employer that does not opt in has no ongoing compliance obligation tied to that specific plan. That is very different from the state's earned sick time law, which applies regardless of employer choice. Handbook language should be precise about which program is mandatory and which is optional, and current plan details should be confirmed directly with the state before finalizing employee-facing materials.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act adds a federal layer independent of both Vermont's earned sick time mandate and its voluntary paid family leave plan. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, determined by headcount and hours-worked thresholds, for qualifying medical and family circumstances. It guarantees job restoration but does not itself pay wages, and it should be documented separately from both Vermont programs. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Vermont's earned sick time figures and voluntary paid family leave plan details are both subject to change, and remote hiring can add employees whose home state has an entirely different structure. BEG's certified HR professionals monitor Vermont's requirements alongside every other state where a client has employees, keeping accrual, carryover, and program language current, powered by isolved. This runs alongside talent acquisition and direct hire support as companies scale their Vermont workforce. See the <a href="/services/hr-outsourcing/vermont">Vermont HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a neighboring state with a similar voluntary paid family leave approach but no sick leave mandate, see <a href="/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained">New Hampshire paid sick leave</a>.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Vermont status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide earned sick time', 'Mandated', 'Confirm current accrual, carryover, and cap figures with the state'],
                ['State paid family leave plan', 'Voluntary, opt-in', 'Confirm current enrollment details; do not describe as mandatory'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on headcount; runs independently of both state programs'],
                ['Permitted sick time uses', 'Own illness, family care, and other qualifying reasons', 'Confirm the full current list with the state labor office'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Earned Sick Time and Leave Plan Policy, Kept Current for Vermont.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Vermont require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Vermont mandates statewide earned sick time. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office."}},{"@type":"Question","name":"Does Vermont have a mandatory state paid family leave program?","acceptedAnswer":{"@type":"Answer","text":"No. Vermont offers a voluntary state paid family leave plan that employers may opt into. It is not a mandatory payroll-funded program the way some other states structure paid family leave."}},{"@type":"Question","name":"How does the voluntary plan differ from Vermont's earned sick time mandate?","acceptedAnswer":{"@type":"Answer","text":"Earned sick time is a required employer benefit for short-term absences. The voluntary paid family leave plan is a separate opt-in wage-replacement option tied to qualifying family or medical events."}},{"@type":"Question","name":"Does FMLA apply to Vermont employers?","acceptedAnswer":{"@type":"Answer","text":"Yes, FMLA is a federal law providing unpaid, job-protected leave to eligible employees at covered employers nationwide, including Vermont, based on headcount and hours-worked thresholds."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Vermont Paid Sick Leave Explained: What Employers Must Do","item":"https://www.beghr.com/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "New Hampshire Paid Sick Leave Explained", excerpt: "How New Hampshire's voluntary paid family leave plan works without a sick leave mandate.", href: "/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "New Jersey Paid Sick Leave Explained", excerpt: "How New Jersey's statewide paid sick leave mandate and PFML program work together.", href: "/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Washington Paid Sick Leave Explained", excerpt: "How Washington's statewide mandate, PFML program, and Seattle local rules work together.", href: "/blog/hr-outsourcing/leave/washington-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
