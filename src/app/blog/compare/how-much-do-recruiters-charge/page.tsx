import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Do Recruiters Charge? Fees Explained | BEG',
  description: 'Recruiter fees explained: contingency runs 20-25% of salary, retained adds a retainer. See what each model costs and a roughly 50% less alternative.',
  alternates: { canonical: 'https://www.beghr.com/blog/compare/how-much-do-recruiters-charge' },
  openGraph: {
    title: 'How Much Do Recruiters Charge? Fees Explained | BEG',
    description: 'Recruiter fees explained: contingency runs 20-25% of salary, retained adds a retainer. See what each model costs and a roughly 50% less alternative.',
    url: 'https://www.beghr.com/blog/compare/how-much-do-recruiters-charge',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'How Much Do Recruiters Charge? Fees Explained | BEG', description: 'Recruiter fees explained: contingency runs 20-25% of salary, retained adds a retainer. See what each model costs and a roughly 50% less alternative.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


export default function HowMuchDoRecruitersChargePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "How Much Do Recruiters Charge? Fees Explained | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/compare/how-much-do-recruiters-charge"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Recruiting Fees &middot; Comparison</p>
              <h1>How Much Do Recruiters Charge? A Plain Breakdown of Recruiting Fees</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Most hiring leaders learn what a recruiter costs only after a candidate accepts and the invoice lands. By then the role has been open for weeks and the fee is non-negotiable. Here is what each model actually costs, in dollars, before you commit.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Updated:</strong> June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>

        <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>BOTTOM LINE</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
            <li>Contingency recruiters typically charge 20-25% of first-year salary, paid only when a candidate starts.</li>
            <li>Retained search costs a similar total but is billed in advance, regardless of outcome.</li>
            <li>BEG milestone billing costs roughly 50% less than contingency, tied to defined search milestones. Use the fee calculator to compare your role.</li>
          </ul>
        </aside>

                <p>
          When a role has been open for a month, cost stops being abstract. Every week the seat sits empty is lost output, and the recruiting fee is layered on top of that. So the real question is not just &quot;how much do recruiters charge&quot; but &quot;what am I getting for the fee, and is there a faster, cheaper way to fill this.&quot;
        </p>
        <p>
          This page breaks down the three common fee structures, shows the dollar math, and explains where a milestone-based model lands. If you want to run your own numbers, the <a href="/resources/recruiting-fee-calculator" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>Recruiting Fee Calculator</a> does the arithmetic for any salary.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          The Three Fee Models
        </h2>
        <p>
          Almost every recruiting arrangement is a variation on one of three structures: contingency, retained, or milestone-based. The percentage looks similar across them. What differs is when you pay, what you get for the money, and what happens if no one is placed.
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Model</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Typical Fee</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>When You Pay</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Risk If No Hire</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Contingency', '20-25% of first-year salary', 'Once, at start date', 'You owe nothing'],
                ['Retained', '25-35% + upfront retainer', 'Upfront, then in stages', 'You lose the retainer'],
                ['Milestone-based (BEG)', 'Roughly 50% less than contingency', 'At defined milestones', 'You owe nothing'],
              ].map(([model, fee, when, risk], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '11px 14px', fontWeight: 600 }}>{model}</td>
                  <td style={{ padding: '11px 14px', color: i === 2 ? '#2a7a2a' : 'inherit', fontWeight: i === 2 ? 600 : 400 }}>{fee}</td>
                  <td style={{ padding: '11px 14px' }}>{when}</td>
                  <td style={{ padding: '11px 14px' }}>{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Contingency: The Default, and What It Really Costs
        </h2>
        <p>
          Contingency is the most common arrangement. You pay a fee only if you hire a candidate the recruiter presents, calculated as a percentage of the placed candidate&apos;s first-year salary. The standard range is 20-25%, paid in full when the candidate starts. There is no upfront cost and no fee if no one is hired, which is why most firms default to it.
        </p>
        <p>
          The dollars add up faster than the percentage suggests:
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>First-Year Salary</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Contingency at 20%</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Contingency at 25%</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Milestone (Roughly 50% Less)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$100,000', '$20,000', '$25,000', '~$11,250'],
                ['$150,000', '$30,000', '$37,500', '~$16,875'],
                ['$200,000', '$40,000', '$50,000', '~$22,500'],
                ['$250,000', '$50,000', '$62,500', '~$28,125'],
              ].map(([salary, low, high, mile], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: 600 }}>{salary}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{low}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{high}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: 700 }}>{mile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The milestone figures use the midpoint of the contingency range as a reference. To run your exact role, use the <a href="/resources/recruiting-fee-calculator" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>Recruiting Fee Calculator</a>.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Retained: Higher Fee, Upfront Commitment
        </h2>
        <p>
          In a retained search, you pay a portion of the estimated fee upfront (often one-third), more at the presentation of a finalist slate, and the balance at hire. The total fee is higher, usually 25-35% of first-year compensation plus the retainer. In exchange the search firm works your assignment exclusively. The trade-off is real: if the search does not produce a hire, you lose the retainer. For senior, specialized, or confidential searches that is often worth it. For standard roles it is usually more cost and commitment than the situation requires.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What Drives the Fee You Are Quoted
        </h2>
        <p>
          Recruiters do not pick a percentage at random. The fee reflects a handful of factors:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>How scarce the talent is.</strong> Tighter pools command higher fees. In legal, for instance, law school enrollment is down roughly 30% since 2010, which keeps mid-career attorney searches expensive.</li>
          <li><strong>Seniority and salary.</strong> Higher salaries mean higher absolute fees even at the same percentage.</li>
          <li><strong>Exclusivity.</strong> Exclusive and retained arrangements cost more because the firm dedicates capacity to your role.</li>
          <li><strong>Sourcing overhead.</strong> Traditional recruiters price in the manual cost of finding passive candidates. A platform that lowers that overhead can charge less for the same result.</li>
        </ul>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Want the exact fee for your role?</h3>
          <p style={{ marginBottom: '1.5rem' }}>Run the numbers in the Recruiting Fee Calculator, then book a call and we will show you what a milestone-based placement would cost for that specific salary and timeline.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Where Milestone-Based Pricing Comes In
        </h2>
        <p>
          BEG fills permanent roles on a milestone-based model through iSolved Job Placement Services. The fee runs roughly 50% less than standard contingency, paid at defined milestones rather than upfront, with no retainer at risk. The discount is structural, not promotional: the iSolved platform reduces the manual sourcing overhead that traditional recruiters build into their fee.
        </p>
        <p>
          The lower fee does not come with a weaker result. The placement program averages a 23-35 day fill time and an 86% fill rate, reaches passive candidates who are not on job boards, and carries a 45-day replacement guarantee. If the placed employee leaves within 45 days, BEG fills the role again at no additional fee. BEG is the authorized reseller, so the payment relationship runs to iSolved directly.
        </p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Get a fee quote for your specific role</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Pick the role, answer a few quick questions, and see your placement quote on screen in 90 seconds.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/resources/recruiting-fee-calculator" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Recruiting Fee Calculator &rarr;</a>
            <a href="/blog/compare/contingency-vs-retained-vs-milestone" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Contingency vs. Retained vs. Milestone &rarr;</a>
            <a href="/blog/compare/direct-hire-vs-contingency" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Direct Hire vs. Contingency &rarr;</a>
            <a href="/services/job-placement/accounting-cpa" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Accounting Placement &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony helps hiring leaders understand recruiting costs and fill permanent roles faster and at lower cost than traditional contingency search. BEG is an authorized reseller of iSolved Job Placement Services.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'How Much Do Recruiters Charge? A Plain Breakdown of Recruiting Fees',
        description: 'Recruiter fees explained: contingency, retained, and milestone-based pricing, with dollar examples and a calculator to run your own role.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/blog/compare/how-much-do-recruiters-charge',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much do recruiters charge to fill a role?', acceptedAnswer: { '@type': 'Answer', text: 'Contingency recruiters typically charge 20 to 25 percent of the placed candidate first-year salary, paid in full at the start date. Retained search runs 25 to 35 percent plus an upfront retainer. BEG milestone-based placement runs roughly 50 percent less than standard contingency.' } },
          { '@type': 'Question', name: 'Do you pay a recruiter if they do not find anyone?', acceptedAnswer: { '@type': 'Answer', text: 'With a contingency or milestone-based model you owe nothing if no candidate is placed. With a retained search you pay an upfront retainer that is generally not refundable, so you can lose that portion even if the search does not result in a hire.' } },
          { '@type': 'Question', name: 'What is the cheapest way to use a recruiter?', acceptedAnswer: { '@type': 'Answer', text: 'A milestone-based model is typically the lowest-cost option that still reaches passive candidates. BEG fills permanent roles at roughly 50 percent less than standard contingency through iSolved Job Placement Services, with no upfront retainer and a 45-day replacement guarantee.' } },
          { '@type': 'Question', name: 'How do I calculate a recruiting fee?', acceptedAnswer: { '@type': 'Answer', text: 'Multiply the candidate first-year salary by the fee percentage. A $150,000 salary at a 25 percent contingency rate is $37,500. The BEG Recruiting Fee Calculator runs this for any salary and shows the milestone-based comparison.' } },
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Compare", title: "Alternatives to Contingency Recruiting", excerpt: "Tired of contingency fees? Compare retained search, RPO, in-house, and milestone-based placement on...", href: "/blog/compare/alternatives-to-contingency-recruiting" },
        { category: "Compare", title: "BEG vs Insight Global | Instant Fee Quote", excerpt: "BEG vs Insight Global on permanent direct hire: fee model, cost, and speed compared fairly. See...", href: "/blog/compare/beg-vs-insight-global" },
        { category: "Compare", title: "BEG vs Kforce | Instant Fee Quote", excerpt: "BEG vs Kforce on permanent direct hire: fee model, cost, and speed compared fairly. See where...", href: "/blog/compare/beg-vs-kforce" },
      ]} />
      </article>
  );
}
