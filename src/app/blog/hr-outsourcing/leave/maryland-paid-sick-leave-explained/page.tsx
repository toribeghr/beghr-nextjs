import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Does Maryland Require Paid Sick Leave? | BEG',
  description: 'Does Maryland mandate paid sick leave? What a compliant policy needs, plus FMLA basics and how HR outsourcing keeps it current.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/maryland-paid-sick-leave-explained' },
  openGraph: {
    title: 'Does Maryland Require Paid Sick Leave? | BEG',
    description: 'Does Maryland mandate paid sick leave? What a compliant policy needs, plus FMLA basics and how HR outsourcing keeps it current.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/maryland-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Does Maryland Require Paid Sick Leave? | BEG', description: 'Does Maryland mandate paid sick leave? What a compliant policy needs, plus FMLA basics and how HR outsourcing keeps it current.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [

  {
    question: 'Does Maryland require paid sick leave?',
    answer: 'Yes. Maryland requires covered employers to provide a compliant paid sick leave policy, including accrual, carryover, permitted uses, and notice procedures. Confirm current accrual rates and caps with the state labor office.',
  },
  {
    question: 'Is paid sick leave the same as FMLA?',
    answer: 'No. FMLA is a federal, unpaid, job-protected leave for eligible employees at covered employers, while paid sick leave (where required) is a separate, typically employer-funded benefit for shorter absences.',
  },
  {
    question: 'How is paid sick leave different from Maryland&apos;s Paid Family and Medical Leave program?',
    answer: 'Paid sick leave covers short, employee-driven absences and is usually employer-funded. Maryland&apos;s Paid Family and Medical Leave program has separate funding, eligibility, and longer duration for events like bonding or serious health conditions. Confirm current dates with the state labor office.',
  },
  {
    question: 'What should a compliant policy document?',
    answer: 'Accrual method, carryover rules, permitted uses, a reasonable documentation standard, and a notice procedure employees can follow, all confirmed against current state guidance rather than assumed from a generic template.',
  },
  {
    question: 'Is this a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; certified HR professionals support your team. HR outsourcing, powered by isolved.',
  }
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Does Maryland Require Paid Sick Leave?","description":"Does Maryland mandate paid sick leave? What a compliant policy needs, plus FMLA basics and how HR outsourcing keeps it current.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","url":"https://www.linkedin.com/in/theanthonymoretti"},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"mainEntityOfPage":"https://www.beghr.com/blog/hr-outsourcing/leave/maryland-paid-sick-leave-explained"}` }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Does Maryland Require Paid Sick Leave?</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Does Maryland mandate paid sick leave? Yes. Employers must provide a compliant accrual-based policy covering eligible uses, carryover, documentation, and notice, built and maintained correctly, not assumed.</p>

        <p>This page covers what Maryland employers need to know about paid sick leave, how it differs from federal FMLA and the state's Paid Family and Medical Leave program, and how to keep policy current as rules change. Nothing here is legal advice; confirm current figures and effective dates with the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">state labor office</a> before finalizing a handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What a Compliant Maryland Paid Sick Leave Policy Needs</h2>
        <p>Maryland requires covered employers to provide employees with a paid sick leave policy, and the details matter as much as the existence of the policy itself. A compliant policy generally needs an accrual method tied to hours worked, a clear statement of how unused time carries over from year to year (or whether it is capped or paid out), a list of permitted uses that at minimum covers the employee's own illness and the care of a family member, a reasonable documentation standard for extended absences, and a notice procedure employees can actually follow. None of the specific accrual rates, caps, or hour thresholds are printed here since those figures change and should always be confirmed with the state labor office before they are written into a handbook.</p><p>Employers frequently get the carryover and documentation pieces wrong. A policy that resets to zero every year without addressing carryover, or one that demands a doctor's note for a single sick day, can create exposure even when the employer believes it is being generous. The safer approach is to build the policy around the statute's actual permitted uses and notice standards, not around what feels administratively convenient.</p><p>Notice procedures deserve particular attention because they are where well-intentioned policies most often go wrong. A policy that requires advance notice for genuinely unforeseeable absences, such as a sudden illness, can conflict with the statute's intent even if the underlying accrual math is correct. The safer design gives employees a simple, low-friction way to report an absence as soon as practicable, reserves advance notice requirements for foreseeable uses such as a scheduled medical appointment, and avoids requiring documentation for short absences unless the statute or accompanying regulations specifically allow it.</p><p>Employers with employees in multiple locations inside Maryland, or with a mix of Maryland employees and employees working in other states, should also resist the temptation to build one blended PTO bucket that quietly satisfies every jurisdiction at once. That approach can work administratively, but only if the underlying accrual rate, carryover treatment, and permitted uses are checked against the strictest applicable rule, not the most convenient one. A policy audit against current state guidance before each plan year renewal is the most reliable way to catch drift before it becomes a claim.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave vs. Maryland&apos;s Paid Family and Medical Leave Program</h2>
        <p>Paid sick leave and Maryland's state Paid Family and Medical Leave program are not the same benefit, and handbooks that blend them together create confusion for employees and compliance gaps for employers. Paid sick leave is typically employer-funded, accrues from hours worked, and covers short-term, employee-driven absences such as a personal illness or a family member's appointment. The state Paid Family and Medical Leave program is usually funded through a separate contribution structure, has its own eligibility rules, and is designed for longer-duration events such as bonding with a new child, a serious health condition, or caring for a family member with a serious health condition. State FAMLI paid leave program is enacted and phasing in; confirm current dates. The triggers, funding mechanism, and maximum duration all differ from paid sick leave, so a handbook needs two distinct sections, not one blended policy. Confirm current contribution rates, benefit duration, and effective dates with the state labor office before publishing either section.</p><p>Employees themselves frequently conflate the two benefits, assuming the same bucket of time covers a multi-week bonding leave or a family member's serious health condition. Handbook language should explain plainly that the two programs are administered separately, may require separate applications or notice procedures, and are not interchangeable even though both ultimately provide paid time away from work.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Federal FMLA Baseline</h2>
        <p>Separate from any state paid sick leave or paid family leave rule, the federal Family and Medical Leave Act gives eligible employees at covered employers up to twelve weeks of unpaid, job-protected leave in a twelve-month period for a serious health condition, the birth or placement of a child, or to care for a covered family member. FMLA coverage depends on employer headcount and employee tenure thresholds, and it is unpaid by design, which is exactly why it should never be described in a handbook as a substitute for paid sick leave. The two protections solve different problems: FMLA protects the job during a long absence, while paid sick leave (where required) replaces income during a short one. Confirm current eligibility thresholds with the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> before finalizing handbook language.</p><p>Employers in Maryland sometimes assume that meeting the FMLA headcount threshold automatically means paid sick leave obligations exist too, or the reverse: that a small headcount below the FMLA threshold means no leave obligations of any kind apply. Neither assumption is safe. FMLA eligibility depends on employer size and employee tenure and hours worked in the prior year, while paid sick leave obligations (where they exist) typically depend on entirely different triggers, such as hours worked in the current year or the number of employees at a specific location. A handbook should evaluate each leave type against its own eligibility test rather than assuming one threshold governs all forms of leave.</p><p>It is also worth noting that FMLA leave and any paid sick leave benefit can run concurrently rather than sequentially in many circumstances, meaning an employee out on a serious health condition might use accrued paid sick leave to stay paid during at least part of an otherwise-unpaid FMLA leave. Handbook language should describe how the two interact for a given employer's specific policies, since the interaction is a common source of employee confusion during an actual leave event.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR Outsourcing Keeps Leave Policy Current</h2>
        <p>Leave law is one of the fastest-moving areas of employment compliance, and a policy that was correct last year can quietly fall out of date without anyone noticing until a claim surfaces. <a href="/services/hr-outsourcing">HR outsourcing</a>, powered by isolved, gives Maryland employers certified HR professionals who track accrual rules, carryover requirements, and any local ordinance activity, and update the written policy before it becomes a problem. That coverage extends past leave policy into hiring paperwork, handbook maintenance, and support for talent acquisition and direct hire decisions as headcount grows, all without the fixed overhead of an in-house HR hire that can run $60K to $100K a year.</p><p>This matters most for companies that are growing quickly or hiring across state lines, since every new state a company hires into can introduce its own leave rules, its own notice requirements, and its own documentation standards. Tracking that manually across a growing footprint is exactly the kind of ongoing, detail-heavy work that an in-house HR hire is meant to handle, but it is also the kind of work that outsourced HR support can absorb without adding headcount. Recruiting and direct hire activity tends to accelerate the same underlying problem, since every new hire in a new state is a new leave policy question waiting to surface.</p><p>See the <a href="/services/hr-outsourcing/maryland">Maryland HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing overview</a>, or <a href="/services/hr-outsourcing">get instant pricing</a>. For related reading, see how <a href="/blog/hr-outsourcing/leave/hawaii-paid-sick-leave-explained">Hawaii employers handle paid sick leave</a>.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Policy area</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Federal baseline</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Maryland status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["State paid sick leave mandate", "No federal mandate", "Required"],
                ["State paid family/medical leave", "N/A (see FMLA below)", "State program in place; confirm current details"],
                ["Federal FMLA", "Unpaid, job-protected, headcount-based", "Applies the same as in every state"],
                ["Local ordinances", "N/A", "Check for city/county overlays; confirm with state labor office"],
                ["Multi-state/remote employees", "N/A", "May trigger another state&apos;s paid sick leave law even if Maryland does not require it"],
              ].map(([area, fed, state], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{area}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{fed}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#777' }}>Sources: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division</a> and the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">DOL state labor office contacts directory</a>. This is general information, not legal advice; confirm current requirements with your state labor office.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Leave Policy Built for Maryland, Not a Generic Template</h3>
          <p style={{ marginBottom: '1.5rem' }}>Certified HR professionals build and maintain it for a fraction of an in-house hire that can run $60K to $100K a year.</p>
          <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.7 }}>A new hire in a new state changes payroll too. BEG pairs this with <a href="/services/managed-payroll">managed payroll</a> so the written policy and the actual paycheck stay in sync.</p>
            <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
            <div key={0} className="faq-item">
              <h3>Does Maryland require paid sick leave?</h3>
              <p>Yes. Maryland requires covered employers to provide a compliant paid sick leave policy, including accrual, carryover, permitted uses, and notice procedures. Confirm current accrual rates and caps with the state labor office.</p>
            </div>
            <div key={1} className="faq-item">
              <h3>Is paid sick leave the same as FMLA?</h3>
              <p>No. FMLA is a federal, unpaid, job-protected leave for eligible employees at covered employers, while paid sick leave (where required) is a separate, typically employer-funded benefit for shorter absences.</p>
            </div>
            <div key={2} className="faq-item">
              <h3>How is paid sick leave different from Maryland&apos;s Paid Family and Medical Leave program?</h3>
              <p>Paid sick leave covers short, employee-driven absences and is usually employer-funded. Maryland&apos;s Paid Family and Medical Leave program has separate funding, eligibility, and longer duration for events like bonding or serious health conditions. Confirm current dates with the state labor office.</p>
            </div>
            <div key={3} className="faq-item">
              <h3>What should a compliant policy document?</h3>
              <p>Accrual method, carryover rules, permitted uses, a reasonable documentation standard, and a notice procedure employees can follow, all confirmed against current state guidance rather than assumed from a generic template.</p>
            </div>
            <div key={4} className="faq-item">
              <h3>Is this a PEO?</h3>
              <p>No. There is no co-employment and no employer-of-record change. Your company stays the employer; certified HR professionals support your team. HR outsourcing, powered by isolved.</p>
            </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads HR outsourcing strategy at Business Executive Group, a national HR outsourcing firm serving employers across every state. BEG HR outsourcing is powered by isolved, with certified HR professionals building and maintaining state-correct leave policy, handbooks, and hiring paperwork, plus support for talent acquisition and direct hire needs as teams grow.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Maryland require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Maryland requires covered employers to provide a compliant paid sick leave policy, including accrual, carryover, permitted uses, and notice procedures. Confirm current accrual rates and caps with the state labor office."}},{"@type":"Question","name":"Is paid sick leave the same as FMLA?","acceptedAnswer":{"@type":"Answer","text":"No. FMLA is a federal, unpaid, job-protected leave for eligible employees at covered employers, while paid sick leave (where required) is a separate, typically employer-funded benefit for shorter absences."}},{"@type":"Question","name":"How is paid sick leave different from Maryland's Paid Family and Medical Leave program?","acceptedAnswer":{"@type":"Answer","text":"Paid sick leave covers short, employee-driven absences and is usually employer-funded. Maryland's Paid Family and Medical Leave program has separate funding, eligibility, and longer duration for events like bonding or serious health conditions. Confirm current dates with the state labor office."}},{"@type":"Question","name":"What should a compliant policy document?","acceptedAnswer":{"@type":"Answer","text":"Accrual method, carryover rules, permitted uses, a reasonable documentation standard, and a notice procedure employees can follow, all confirmed against current state guidance rather than assumed from a generic template."}},{"@type":"Question","name":"Is this a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; certified HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Does Maryland Require Paid Sick Leave?","item":"https://www.beghr.com/blog/hr-outsourcing/leave/maryland-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Does Hawaii Require Paid Sick Leave?", excerpt: "What Hawaii employers must know about paid sick leave, FMLA, and multi-state risk.", href: "/blog/hr-outsourcing/leave/hawaii-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Does Idaho Require Paid Sick Leave?", excerpt: "What Idaho employers must know about paid sick leave, FMLA, and multi-state risk.", href: "/blog/hr-outsourcing/leave/idaho-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Does Illinois Require Paid Sick Leave?", excerpt: "What Illinois employers must know about paid sick leave, FMLA, and multi-state risk.", href: "/blog/hr-outsourcing/leave/illinois-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
