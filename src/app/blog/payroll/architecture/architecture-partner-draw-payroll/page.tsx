import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Architecture Partner Draw Payroll | K-1 + W-2 | BEG",
  description: "Architecture partnership payroll: managing partner draws, W-2 salaries, K-1 distributions, and reasonable compensation rules. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/architecture/architecture-partner-draw-payroll" },
  openGraph: {
    title: "Architecture Partner Draw Payroll | K-1 + W-2 | BEG",
    description: "Architecture partnership payroll: managing partner draws, W-2 salaries, K-1 distributions, and reasonable compensation rules. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/architecture/architecture-partner-draw-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Architecture Partner Draw Payroll | K-1 + W-2 | BEG", description: "Architecture partnership payroll: partner draws, W-2 salaries, and K-1 distributions explained. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is the difference between a partner draw and a salary in an architecture firm?",
    answer: "A salary is a fixed periodic payment to an employee that runs through payroll, with income taxes withheld and employer payroll taxes paid. A draw is a distribution of profits to an owner - it does not run through payroll and is not subject to withholding in the traditional sense. Whether partner compensation is characterized as a salary, a draw, or both depends on the entity structure. In an S-corporation or professional corporation, owner-employees must receive a reasonable salary through payroll. In a partnership or LLC taxed as a partnership, partners receive guaranteed payments and profit distributions reported on Schedule K-1, not through payroll.",
  },
  {
    question: "We are an LLC. Do our managing partners need to be on payroll?",
    answer: "If your LLC is taxed as a partnership (the default for multi-member LLCs), managing partners are not employees and generally should not receive a W-2. Instead, they receive guaranteed payments (a fixed amount regardless of profit) and a share of net profit, both reported on Schedule K-1. Partners then pay self-employment tax on guaranteed payments and their allocable share of active income. If your LLC has elected S-corporation tax treatment, the rules change: owner-employees who perform services for the company must receive a reasonable W-2 salary through payroll. The distinction matters significantly for payroll tax purposes.",
  },
  {
    question: "What is reasonable compensation and why does it matter for architecture firm partners?",
    answer: "For S-corporation partners or owner-employees in a professional corporation, the IRS requires that owners who perform services for the company receive compensation comparable to what the company would pay an unrelated employee to do the same work. This is the reasonable compensation standard. If a partner takes all of their compensation as distributions to avoid payroll taxes, the IRS can reclassify those distributions as wages and assess back payroll taxes plus penalties. For architecture firms, reasonable compensation benchmarks are generally set by comparing to salary survey data for licensed architects or firm principals in similar markets and firm sizes.",
  },
  {
    question: "Can a partner receive both a W-2 and a K-1 in the same year?",
    answer: "Yes, in an S-corporation structure this is the normal arrangement. The partner receives a W-2 for their salary, which runs through payroll with standard withholding and employer tax payments. They also receive a K-1 showing their share of the firm's net income, which flows through to their personal return as pass-through income. S-corporation distributions on the K-1 are not subject to self-employment tax, which is part of the appeal of the S-corporation structure for owner-operators. The salary portion must meet the reasonable compensation standard; the distribution portion has no minimum requirement.",
  },
  {
    question: "We have partners who contribute different levels of effort to the firm. How do we structure payroll accordingly?",
    answer: "Differential partner effort is typically handled through the partnership or operating agreement rather than through payroll mechanics. Partners who contribute more time and effort can receive larger guaranteed payments, larger profit allocation percentages, or both. If the firm is an S-corporation, partners who work more can receive higher W-2 salaries reflecting their greater contribution. The payroll system itself processes whatever salary amounts are set in the compensation agreements - the strategic question of how to allocate compensation among partners is one your accountant and operating agreement should address.",
  },
  {
    question: "What happens at year-end for partners who received draws throughout the year?",
    answer: "At year-end, the firm reconciles each partner's draws against their actual profit allocation. If a partner took draws exceeding their profit share, the excess is a distribution of capital (or a loan from the partnership if the operating agreement allows). If their profit share exceeds what they drew, the remaining amount is credited to their capital account or distributed as a final payment. For tax purposes, each partner receives a K-1 showing their guaranteed payments and profit share for the year, which they report on their personal returns. W-2 salaries for S-corporation partners are reported on W-2 forms issued through payroll.",
  },
];

export default function ArchitecturePartnerDrawPayrollPage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Architecture</p>
              <h1>Architecture Partnership Payroll: Managing Partner Draws, W-2 Salaries, and K-1 Distributions</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Partner compensation in architecture firms is one of the most commonly mishandled payroll situations in the professional services sector. The mechanics depend entirely on the firm's legal entity structure, and the rules for partnerships, LLCs, professional corporations, and S-corporations differ significantly. Getting it wrong creates payroll tax liability, IRS scrutiny, and in some cases conflicts among partners who discover their compensation was not structured as intended. This article explains how partner draws, W-2 salaries, and K-1 distributions work in an architecture firm context and where each structure applies.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Entity Structure Determines Payroll Structure</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The first question in any partner payroll discussion is: what is the firm's legal entity? Architecture firms commonly operate as professional corporations (PCs), limited liability companies (LLCs), limited liability partnerships (LLPs), or general partnerships. Each structure has different rules for how owner-operator compensation flows.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          In a professional corporation taxed as an S-corporation, partner-employees must receive a W-2 salary through payroll. In an LLC taxed as a partnership, partners receive guaranteed payments and profit allocations on a K-1, not through payroll. In an LLC that has elected S-corporation treatment, the same W-2 requirement applies as for a standard S-corporation. These are not options a firm can choose situationally. The entity structure determines the compliance requirement.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Partnership and LLC: Guaranteed Payments and K-1 Distributions</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          In a standard partnership or LLC taxed as a partnership, partners do not receive a salary through payroll. Instead, they receive two types of compensation: guaranteed payments and profit distributions.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Guaranteed payments are fixed amounts paid to a partner for services or use of capital, regardless of whether the firm is profitable. They are analogous to a salary in economic function but are not processed through payroll. No withholding occurs. The partner receives a K-1 at year-end showing guaranteed payments received, and they pay self-employment tax on that amount plus their share of active ordinary business income.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Profit distributions are the partner's share of the firm's net income after guaranteed payments and other deductions. These also appear on the K-1 and flow through to the partner's personal return. Partners who take regular draws throughout the year are essentially taking advances against their anticipated profit share, which is reconciled at year-end.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>S-Corporation and Professional Corporation: W-2 Salary Requirement</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          In an S-corporation or a professional corporation that has elected S-corporation treatment, owner-employees who provide services to the corporation must receive a W-2 salary. This salary must meet the IRS reasonable compensation standard - it cannot be set artificially low to reduce payroll taxes.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Reasonable compensation for architecture firm principals is typically benchmarked against published salary surveys for licensed architects in comparable roles and markets. The AIA and other professional organizations publish annual compensation surveys that serve as useful benchmarks. If the IRS audits an S-corporation and determines that the owner-employee salary is unreasonably low relative to market, it can reclassify distributions as wages and assess payroll taxes plus penalties.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Above the reasonable salary, an S-corporation partner may receive distributions of profit through a K-1. Those distributions are not subject to self-employment tax, which is the primary tax advantage of the S-corporation structure for owner-operators.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How BEG Handles Architecture Partner Payroll</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>W-2 salary payroll for S-corporation and PC partner-employees</li>
          <li>Coordination with your accountant on reasonable compensation benchmarks</li>
          <li>Correct exclusion of guaranteed payments and K-1 distributions from payroll processing</li>
          <li>Year-end W-2 preparation for partners on payroll</li>
          <li>Multi-partner payroll with different salary levels for different principals</li>
          <li>Benefits administration for partners including health insurance premium treatment</li>
          <li>401(k) and retirement plan contributions for partner-employees</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Partner Payroll Structured Right from the Start</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages architecture firm payroll including complex partner compensation structures at $25 to $45 per employee per month. Setup in 3 to 5 business days.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
          >
            Book a 15-Minute Discovery Call
          </a>
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

        <p style={{ lineHeight: "1.7" }}>
          Also relevant: <Link href="/services/managed-payroll/architecture" style={{ color: "#ECAC60" }}>Managed Payroll for Architecture Firms</Link> and <Link href="/blog/payroll/architecture/architecture-firm-payroll-guide" style={{ color: "#ECAC60" }}>Architecture Firm Payroll Guide 2026</Link>.
        </p>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Architecture Partnership Payroll: Managing Partner Draws, W-2 Salaries, and K-1 Distributions",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/architecture/architecture-partner-draw-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Architecture", "item": "https://www.beghr.com/blog/payroll/architecture" },
          { "@type": "ListItem", "position": 5, "name": "Partner Draw Payroll", "item": "https://www.beghr.com/blog/payroll/architecture/architecture-partner-draw-payroll" }
        ]
      }) }} />
    </article>
  );
}
