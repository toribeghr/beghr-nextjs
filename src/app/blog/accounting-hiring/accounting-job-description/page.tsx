import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Job Description: What Candidates Notice First | BEG',
  description: 'Most accounting job descriptions repel the best candidates. Learn what to include, what to cut, and how to write a JD that fills the role faster.',
  alternates: { canonical: 'https://www.beghr.com/blog/accounting-hiring/accounting-job-description' },
  openGraph: {
    title: 'Accounting Job Description: What Candidates Notice First | BEG',
    description: 'Most accounting job descriptions repel the best candidates. Learn what to include, what to cut, and how to write a JD that fills the role faster.',
    url: 'https://www.beghr.com/blog/accounting-hiring/accounting-job-description',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-accounting-hiring-accounting-job-description.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Accounting Job Description: What Candidates Notice First | BEG', description: 'Most accounting job descriptions repel the best candidates. Learn what to include, what to cut, and how to write a JD that fills the role faster.', images: ['https://www.beghr.com/blog-images/blog-accounting-hiring-accounting-job-description.webp'] },
};


const faqs = [
  { question: 'What should an accounting job description always include?', answer: 'The role title, the direct report, the specific responsibilities (close the books, own the audit, manage AP/AR), the required credentials (CPA yes or no, years of experience, industry background), the software stack, and the comp range. Missing any of these forces candidates to guess, and the best ones do not guess - they move on.' },
  { question: 'Should I list a salary range in an accounting job description?', answer: 'Yes. In a tight market, experienced accountants have multiple options and filter out postings without pay transparency. A range also signals that you have thought through the role rather than hoping to low-ball the hire.' },
  { question: 'How long should an accounting job description be?', answer: 'Shorter than you think. A focused JD of 300 to 500 words outperforms a wall of text. Cover what the person will actually do, what they need to bring, and what they get. Cut the boilerplate about values and mission until the end, if at all.' },
  { question: 'Does a better job description replace a recruiter?', answer: 'No. A strong JD helps when you post, but the best accounting candidates are passive - they are already employed and not browsing job boards. Reaching them requires direct outreach, which is what BEG does on the milestone model.' },
];

export default function AccountingJobDescriptionPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Write an Accounting Job Description That Attracts Qualified Candidates","datePublished":"2026-06-29","dateModified":"2026-06-29","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","url":"https://www.linkedin.com/in/theanthonymoretti"},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"mainEntityOfPage":"https://www.beghr.com/blog/accounting-hiring/accounting-job-description"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Accounting &amp; CPA Hiring</p>
              <h1>How to Write an Accounting Job Description That Attracts Qualified Candidates</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Most accounting JDs are a copy-paste of last year's post with a date change. That is why they attract the wrong people and scare off the right ones. Here is what actually works.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Updated:</strong> June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-accounting-hiring-accounting-job-description.webp" alt={`An accountant reviewing spreadsheets and documents at a desk`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
        <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333' }}>
            <li>A vague JD filters in weak candidates and filters out strong ones who already have options.</li>
            <li>The five things every accounting JD must include: title, reporting line, actual responsibilities, required credentials, and a pay range.</li>
            <li>A better posting helps, but the strongest accounting candidates are passive. Reaching them requires direct outreach, not a job board.</li>
          </ul>
        </aside>

        <p>The accounting talent shortage makes every hiring mistake more expensive. A bad job description is one of the most common, and most fixable, mistakes. It either attracts a flood of unqualified applicants that wastes your team's time, or it signals enough ambiguity that the credentialed candidate you actually want moves on to the next posting. Here is how to write one that does its job.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Lead with the Role's Real Impact</h2>
        <p>The first paragraph should answer one question: why does this role matter? Not "we are a fast-growing company seeking a dynamic professional." That could apply to anything. Instead, be specific. "This controller owns the monthly close, manages a three-person AP team, and reports directly to the CFO. The seat has been open for 45 days and the team is feeling it." That kind of directness signals respect for the candidate's time and sets an honest context for the conversation.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Five Things That Must Be in Every Accounting JD</h2>
        <ol style={{ marginLeft: '1.5rem', lineHeight: '2.2', marginBottom: '1rem' }}>
          <li><strong>Exact title and level.</strong> Controller, not "Senior Accounting Professional." Tax Manager, not "Tax Specialist III."</li>
          <li><strong>Who they report to.</strong> "Reports to the CFO" or "reports to the Controller" removes ambiguity and signals the org structure.</li>
          <li><strong>The actual work.</strong> Own the monthly close, manage the audit relationship, prepare board-level financials, supervise two staff accountants. Not "assist with various accounting functions."</li>
          <li><strong>Required credentials.</strong> CPA required or CPA preferred, years of experience, industry background if it matters, and the software stack (NetSuite, QuickBooks, SAP, Sage).</li>
          <li><strong>A compensation range.</strong> Experienced accountants have options. A missing range reads as opacity, and the best candidates skip it.</li>
        </ol>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What to Cut</h2>
        <p>Five or more bullet points of generic requirements ("strong communication skills," "detail oriented," "team player") add length without adding signal. Cut them or move them to the bottom. A paragraph about your company's mission and values belongs at the end, not the top. And a list of 20-plus bullet point requirements tells a qualified candidate that you have not thought hard about what the role actually needs.</p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Not sure your JD is working?</h3>
          <p style={{ marginBottom: '1.5rem' }}>If your accounting search has been open more than 30 days, the posting may not be the problem. The best candidates are passive. We can show you how milestone placement reaches the ones who will never see your posting.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Limitation a Better JD Cannot Fix</h2>
        <p>A great job description improves your results on job boards. But in 2026's accounting shortage, the candidates you most want are employed and not on job boards. They will not see your posting no matter how well written it is. Reaching passive candidates requires a recruiter with direct-outreach capability and a process fast enough to keep them engaged before another offer lands. That is what BEG does on the milestone model, filling accounting and CPA roles in 23-35 days at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.</p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Reach the accounting candidates your posting will not</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Pick the role, answer a few quick questions, and see your placement quote on screen in 90 seconds.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>


        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ: Accounting Job Descriptions</h2>
        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/accounting-cpa" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Accounting &amp; CPA Placement &rarr;</a>
            <a href="/blog/accounting-hiring/cpa-shortage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>The 2026 Accounting Shortage &rarr;</a>
            <a href="/blog/accounting-hiring/controller-hiring" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How to Hire a Controller Fast &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads accounting and finance placement at BEG. BEG fills controller, CFO, and senior accounting roles through isolved Job Placement Services on a milestone model with an 86% fill rate, 23-35 day time-to-fill, and a 45-day replacement guarantee.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
          <RelatedPosts posts={[
        { category: "Accounting Hiring", title: "Accounting Salary Trends 2026: What Comp Data Hides", excerpt: "Accounting comp is climbing in 2026, but the best candidates are passive and pay is only part of...", href: "/blog/accounting-hiring/accounting-salary-trends" },
        { category: "Accounting Hiring", title: "Busy-Season Staffing: Plan Before It Costs You", excerpt: "The firms that survive busy season hire before the crunch. How to plan accounting and tax staffing...", href: "/blog/accounting-hiring/busy-season-staffing" },
        { category: "Accounting Hiring", title: "Controller Hiring: What Nobody Tells You", excerpt: "A vacant controller seat risks your close and audit. A practical playbook to hire a controller in...", href: "/blog/accounting-hiring/controller-hiring" },
      ]} />
      </article>
  );
}
