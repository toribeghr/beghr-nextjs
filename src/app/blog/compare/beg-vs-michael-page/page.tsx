import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BEG vs Michael Page | Instant Fee Quote | BEG',
  description: 'BEG vs Michael Page on permanent professional placement: fee model, cost, and speed compared. See where milestone-based placement saves roughly 50%.',
  alternates: { canonical: 'https://www.beghr.com/blog/compare/beg-vs-michael-page' },
  openGraph: {
    title: 'BEG vs Michael Page | Instant Fee Quote | BEG',
    description: 'BEG vs Michael Page on permanent professional placement: fee model, cost, and speed compared. See where milestone-based placement saves roughly 50%.',
    url: 'https://www.beghr.com/blog/compare/beg-vs-michael-page',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'BEG vs Michael Page | Instant Fee Quote | BEG', description: 'BEG vs Michael Page on permanent placement compared fairly.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


export default function BegVsMichaelPagePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'BEG vs Michael Page: Permanent Placement Compared', datePublished: '2026-06-29', dateModified: '2026-06-29', author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', url: 'https://www.linkedin.com/in/theanthonymoretti' }, publisher: { '@type': 'Organization', name: 'Business Executive Group', logo: { '@type': 'ImageObject', url: 'https://www.beghr.com/assets/beg-header-image.png' } }, mainEntityOfPage: 'https://www.beghr.com/blog/compare/beg-vs-michael-page' }) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Hiring &middot; Comparison</p>
              <h1>BEG vs Michael Page: Permanent Placement Compared</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Michael Page is a global permanent recruitment firm with strong brand recognition across professional disciplines. BEG is a milestone-based permanent placement service. Both operate in permanent hiring. Here is a fair comparison of how they differ on cost, model, and fit.
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
            <li>Michael Page is a global professional recruitment firm focused on permanent placement across multiple disciplines, with strong salary-guide content aimed at job seekers.</li>
            <li>Permanent placement through Michael Page typically uses contingency pricing, commonly 20-25% of first-year salary.</li>
            <li>BEG focuses on permanent placement only, billed at defined milestones at roughly 50% less than contingency, with 23-35 day fills and a 45-day guarantee.</li>
          </ul>
        </aside>

        <p>
          Michael Page is part of the PageGroup global recruitment network, with a strong reputation in professional permanent placement across finance, technology, sales, and other disciplines. Much of its public-facing content is built around the job seeker experience. BEG&apos;s focus is the hiring manager: permanent direct hire, milestone-based pricing, and a model designed to fill roles faster at lower cost. This comparison covers the differences that matter for an employer.
        </p>
        <p>
          For the dollar comparison on your specific hire, the <a href="/resources/recruiting-fee-calculator" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>Recruiting Fee Calculator</a> runs the numbers.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What Is the Key Difference Between BEG and Michael Page?
        </h2>
        <p>
          Both firms place permanent hires. The difference is pricing model and market positioning. Michael Page operates on a contingency model at global scale, with strong job-seeker-facing content and brand. BEG operates on a milestone-based model, oriented to the employer experience, with a guaranteed fill speed and cost that is roughly 50% below standard contingency.
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', minWidth: '440px', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Factor</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Michael Page</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>BEG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Scope', 'Permanent placement, global', 'Permanent placement only, US'],
                ['Fee model', 'Contingency on placement', 'Milestone-based'],
                ['Typical fee', 'Commonly 20-25% of salary', 'Roughly 50% less than contingency'],
                ['When you pay', 'At placement', 'At defined milestones'],
                ['Primary audience', 'Global employers and job seekers', 'US hiring managers, SMB and mid-market'],
                ['Replacement guarantee', 'Varies by agreement', '45 days standard'],
              ].map(([factor, mp, beg], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '11px 14px', fontWeight: 600 }}>{factor}</td>
                  <td style={{ padding: '11px 14px' }}>{mp}</td>
                  <td style={{ padding: '11px 14px', color: '#2a7a2a', fontWeight: 600 }}>{beg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>Fee figures reflect common industry ranges; exact Michael Page terms vary by role, market, and agreement. Confirm current pricing directly.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Where Michael Page Is a Strong Fit</h2>
        <p>
          Michael Page&apos;s global reach and brand recognition are genuine advantages for multinational companies, global hiring, or organizations that value a large, well-known recruitment brand. Its job-seeker-side content also makes it a strong aggregator of active candidate applications. For international permanent placement, a global firm has the market access BEG does not.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Where BEG Is a Strong Fit</h2>
        <p>When the need is a permanent US hire at an SMB or mid-market company and total placement cost is a priority:</p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Roughly 50% less than standard contingency.</strong> Milestone fees replace the lump sum.</li>
          <li><strong>23-35 day average fill, 86% fill rate.</strong> Direct sourcing of passive candidates, not just active applicants.</li>
          <li><strong>45-day replacement guarantee.</strong> Longer than most standard arrangements and built into every engagement.</li>
          <li><strong>Mid-market and SMB orientation.</strong> BEG is built for the 20-200 employee company, not the enterprise.</li>
        </ul>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Comparing a permanent placement quote?</h3>
          <p style={{ marginBottom: '1.5rem' }}>Tell us the role and the salary. We will show you what a milestone-based placement would cost so you can compare it side by side.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/resources/recruiting-fee-calculator" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Recruiting Fee Calculator &rarr;</a>
            <a href="/blog/compare/beg-vs-robert-half" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG vs Robert Half &rarr;</a>
            <a href="/blog/compare/contingency-vs-retained-vs-milestone" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Contingency vs Retained vs Milestone &rarr;</a>
            <a href="/services/job-placement" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Job Placement &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony helps hiring leaders compare placement providers and fill permanent roles faster and at lower cost. BEG is an authorized reseller of iSolved Job Placement Services. Michael Page and PageGroup are trademarks of their respective owners and are not affiliated with BEG.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the difference between BEG and Michael Page?', acceptedAnswer: { '@type': 'Answer', text: 'Michael Page is a global professional recruitment firm operating on a contingency model across many disciplines. BEG focuses on US permanent placement using a milestone-based fee model that costs roughly 50% less than standard contingency, with a 23-35 day fill average and a 45-day replacement guarantee.' } },
          { '@type': 'Question', name: 'Is BEG cheaper than Michael Page?', acceptedAnswer: { '@type': 'Answer', text: 'For permanent direct hire, BEG milestone-based placement is designed to run roughly 50% less than standard contingency, which commonly sits at 20 to 25 percent of salary. Confirm current Michael Page terms directly when you compare.' } },
          { '@type': 'Question', name: 'When is Michael Page the better choice?', acceptedAnswer: { '@type': 'Answer', text: 'Michael Page is a strong fit for global or international permanent hiring, large enterprise clients, or organizations that prefer a well-known global brand with extensive job-seeker-facing content. BEG focuses on US SMB and mid-market permanent placement.' } },
        ],
      }) }} />
    </article>
  );
}
