import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Owner Draw vs Salary: What New Founders Miss | BEG",
  description: "Owner draw vs salary: tax treatment by entity type, self-employment tax, and when to switch to formal payroll. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/entrepreneur-resources/owner-draw-vs-salary" },
  openGraph: {
    title: "Owner Draw vs Salary: What New Founders Miss | BEG",
    description: "Owner draw vs salary: tax treatment by entity type, self-employment tax, and when to switch to formal payroll. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/entrepreneur-resources/owner-draw-vs-salary",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-entrepreneur-resources-owner-draw-vs-salary.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Owner Draw vs Salary: What New Founders Miss | BEG", description: "Owner draw vs salary: tax treatment by entity type, self-employment tax, and when to switch to payroll. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/blog-images/blog-entrepreneur-resources-owner-draw-vs-salary.webp"] },
};

const faqs = [
  {
    question: "What is an owner draw and how is it different from a salary?",
    answer: "An owner draw is a distribution of business funds to the owner that is not treated as wages for payroll tax purposes. It is commonly used by sole proprietors, partners in partnerships, and owners of single-member or multi-member LLCs taxed as pass-through entities. A salary is wages paid through formal payroll, with all the associated payroll tax withholding, FICA employer match, and W-2 reporting. The fundamental difference is tax treatment: draws reduce the owner's equity stake and are not subject to FICA withholding at the time of payment, but the owner still pays self-employment tax on the underlying net income. Salaries trigger FICA at the time of payment and require the business to remit employment taxes with each payroll run.",
  },
  {
    question: "Which business structures allow owner draws instead of salary?",
    answer: "Sole proprietors and single-member LLCs taxed as sole proprietors are not employees of their own businesses -- they take draws, and all net profit is subject to self-employment tax regardless of how much they actually draw. Partners in partnerships and members of multi-member LLCs taxed as partnerships are similarly not employees -- their compensation comes through guaranteed payments or allocations, and they pay self-employment tax on their share of partnership income. S-corporation shareholders who provide services to the corporation are required to pay themselves a reasonable salary before taking additional distributions. C-corporation owners who work in the business are treated as employees and must be on payroll.",
  },
  {
    question: "Why do S-corp owners have to pay themselves a reasonable salary?",
    answer: "An S-corporation shareholder who performs services for the corporation must be paid reasonable compensation for those services through payroll -- not just distributions. This is because distributions from an S-corp are not subject to FICA taxes, while wages are. If a shareholder-employee took no salary and pulled all their compensation as distributions, they would pay no FICA on any of it. The IRS has consistently challenged and won against arrangements where the salary is set artificially low relative to the services provided. Reasonable compensation is defined as what you would pay a third party with the same skills and experience to perform the same services.",
  },
  {
    question: "When should an owner switch from draws to formal payroll?",
    answer: "The triggers for switching to formal payroll are typically: (1) you convert to an S-corp to reduce self-employment tax, which requires a W-2 salary; (2) you hire employees and need a payroll system anyway; (3) you need to demonstrate income for a loan, mortgage, or financing, where W-2 income is easier to document than draws; or (4) you want to participate in employer-sponsored benefits like a 401(k) match or health insurance deduction that require W-2 compensation. Many entrepreneurs also switch when the administrative burden of tracking quarterly estimated tax payments exceeds the cost of running formal payroll.",
  },
  {
    question: "Do I still owe self-employment tax on draws even if I take a small draw?",
    answer: "Yes. For sole proprietors and pass-through entities, self-employment tax is owed on net profit from the business -- not on the amount you draw. If your business earns $120,000 in net profit and you only draw $50,000, you owe self-employment tax on the full $120,000, not just the $50,000 you took. The draw does not determine your taxable income; the net business profit does. This is one of the most common misconceptions among new business owners. The amount you draw affects your cash flow and personal income availability, but not your self-employment tax obligation.",
  },
  {
    question: "What does BEG help with for owner payroll?",
    answer: "BEG manages payroll for business owners who pay themselves a W-2 salary -- typically S-corp shareholders. We configure the salary at a reasonable compensation level, run payroll through your existing system or BEG's iSolved platform, and produce W-2s at year end. The service is $25 per employee per month on your existing system, or $45 per employee per month on iSolved. For an S-corp owner running their own payroll, that is $25 to $45 per month, all-inclusive.",
  },
];

export default function OwnerDrawVsSalaryPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-27", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Entrepreneur Resources</p>
              <h1>Owner Draw vs Salary: Tax Implications, Entity Rules, and When to Switch to Payroll (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-entrepreneur-resources-owner-draw-vs-salary.webp" alt={`Owner Draw vs Salary: What New Founders Miss`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The owner draw vs. salary question is one of the first compensation decisions business owners make and one of the most frequently misunderstood. The answer depends almost entirely on your business structure -- and in some cases, the IRS does not give you a choice. Understanding how each method works, what you owe regardless of which method you use, and when switching to formal payroll actually reduces your tax burden is foundational for running a business that pays you efficiently.
        </p>

        <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "2.5rem", padding: "0.75rem 1rem", background: "#f9f9f9", borderLeft: "3px solid #ECAC60" }}>
          <em>Note: This article provides general educational information about payroll and compensation structures. It is not tax or legal advice. Consult a CPA or tax attorney for guidance specific to your business structure and situation.</em>
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How Owner Compensation Works by Business Structure</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Entity Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Compensation Method</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Self-Employment Tax?</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Required?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sole proprietor", "Owner draws", "Yes -- on net profit", "No"],
                ["Single-member LLC (default)", "Owner draws", "Yes -- on net profit", "No"],
                ["Partnership / multi-member LLC", "Guaranteed payments or allocations", "Yes -- on SE income", "No (unless S-corp election)"],
                ["S-corporation", "Reasonable salary + distributions", "On salary only (not distributions)", "Yes -- W-2 required for shareholder-employees"],
                ["C-corporation", "W-2 salary", "No SE tax -- FICA applies", "Yes -- owner-employees must be on payroll"],
              ].map(([entity, method, se, payroll], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{entity}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{method}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{se}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{payroll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The S-Corp Advantage (and the Reasonable Salary Requirement)</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The reason many profitable small businesses elect S-corp status is the opportunity to reduce self-employment tax. A sole proprietor pays 15.3% SE tax on all net profit up to the Social Security wage base ($168,600 in 2024). An S-corp shareholder-employee pays FICA only on wages -- not on distributions. If your business nets $200,000, taking $100,000 as a salary and $100,000 as a distribution saves approximately $15,300 in SE tax compared to taking all $200,000 as a sole proprietor draw.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The catch is that the IRS requires the salary to be "reasonable." The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS guidance on S-corp reasonable compensation</a> lists factors they consider, including training and experience, time devoted to the business, what comparable businesses pay for similar services, and the business's dividend history. Setting an unreasonably low salary to maximize distributions is one of the most audited S-corp positions.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Once you determine your reasonable salary, you need actual payroll to process it. We set up the payroll configuration, run it on your schedule, and produce your W-2 at year end.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>When to Switch from Draws to Formal Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The decision to formalize payroll typically happens at one of these crossroads: you elect S-corp status (payroll is now required for shareholder-employees); you want to qualify for a loan or mortgage that requires documented W-2 income; you are adding employees and need a payroll system regardless; or you want to participate in benefits that require earned income from employment. Working through the timing with a CPA who understands your entity structure is the right first step before setting up payroll.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Business Owner Payroll</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>S-corp shareholder-employee payroll configured at reasonable compensation level</li>
          <li>Payroll processed on your preferred frequency (monthly, semi-monthly, biweekly)</li>
          <li>Federal and state payroll tax filings and remittances</li>
          <li>W-2 production at year end</li>
          <li>Multi-owner payroll for S-corps with multiple shareholder-employees</li>
          <li>Can expand to cover additional employees as you grow</li>
          <li>Setup in 3 to 5 business days from contract signing</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Ready to Run Your Own Payroll the Right Way?</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages S-corp and owner payroll at $25 to $45 per employee per month, all-inclusive. Get your W-2 right and your estimated taxes simplified. Live in 3 to 5 business days.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: i < faqs.length - 1 ? "1px solid #eee" : "none" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{faq.question}</h3>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{faq.answer}</p>
            </div>
          ))}
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Owner Draw vs Salary: Tax Implications, Entity Rules, and When to Switch to Payroll (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/entrepreneur-resources/owner-draw-vs-salary"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Entrepreneur Resources", "item": "https://www.beghr.com/blog/entrepreneur-resources" },
          { "@type": "ListItem", "position": 4, "name": "Owner Draw vs Salary", "item": "https://www.beghr.com/blog/entrepreneur-resources/owner-draw-vs-salary" }
        ]
      }) }} />
      <section className="container" style={{ maxWidth: '840px', padding: '0 0 2rem' }}>
        <p style={{ fontSize: '0.95rem', color: '#333' }}>Ready to hand payroll off? See <a href="/services/managed-payroll" style={{ color: '#000', fontWeight: 600 }}>BEG Managed Payroll</a>.</p>
      </section>
          <RelatedPosts posts={[
        { category: "Entrepreneur Resources", title: "Payroll for LLC Owners: The Truth About SE Tax", excerpt: "Payroll for LLC owners: when payroll is required, self-employment tax on draws, S-corp election...", href: "/blog/entrepreneur-resources/payroll-for-llc-owners" },
        { category: "Entrepreneur Resources", title: "Remote Team Management: What Founders Learn Late", excerpt: "Build and manage remote teams effectively. Hiring remote talent, HR compliance, and culture in a...", href: "/blog/entrepreneur-resources/remote-team-management" },
        { category: "Entrepreneur Resources", title: "Startup Hiring: What Nobody Tells You First", excerpt: "How to hire your first employees as a founder. Recruiting strategy, offer structures, and building...", href: "/blog/entrepreneur-resources/startup-hiring" },
      ]} />
      </article>
  );
}
