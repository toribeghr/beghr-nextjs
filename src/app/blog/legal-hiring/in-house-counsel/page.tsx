import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'In-House Counsel Hiring: Building Your Legal Department',
  description: 'Hire your first or next in-house counsel. What to look for, where to find candidates, and how to fill the role fast.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring/in-house-counsel' },
};

export default function InHouseCounselPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · Legal Hiring & Recruiting</p>
          <h1>In-House Counsel Hiring: Building Your Legal Department</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/legal.svg" alt="In-House Counsel Hiring" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Hiring in-house counsel is different from law firm hiring. You're not just looking for a strong attorney—you're building a trusted advisor to your C-suite and board. The hire must understand your business, culture, and risk tolerance.</p>

        <p>Most companies take 4–6 months to fill an in-house counsel role. That's too long. Your legal needs don't pause while you search.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>What In-House Counsel Needs</h2>

        <p>In-house attorneys need broad legal knowledge, business judgment, and cultural fit. They manage contracts, employment law, compliance, and board matters — a scope that the <a href="https://www.acc.com/" target="_blank" rel="noopener noreferrer">Association of Corporate Counsel</a> calls the most complex generalist role in law. They report to the CEO or CFO. The right hire is part attorney, part business partner, part advisor.</p>

        <p>This role is harder to hire for than a law firm associate position because it demands both legal depth and business acumen.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Find In-House Counsel in 30–45 Days.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Business-minded attorneys with in-house or startup experience. We match your culture and legal needs.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>


        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/legal" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              BEG Legal Job Placement &rarr;
            </a>
            <a href="/blog/legal-hiring/attorney-market-trends" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              2026 Attorney Market Trends &rarr;
            </a>
          </div>
        </div>
        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony places in-house counsel for startups, growth-stage companies, and public corporations nationwide.</p>
        </div>
      </section>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Hiring In-House Counsel: What General Counsel Searches Really Take',
            description: 'How long in-house counsel searches take and how to speed them up',
            datePublished: '2026-06-25',
            dateModified: '2026-06-26',
            author: {
              '@type': 'Person',
              name: 'Anthony Moretti',
              jobTitle: 'VP of Sales',
              worksFor: {
                '@type': 'Organization',
                name: 'Business Executive Group',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://beghr.com/assets/beg-header-image.png',
              },
            },
            url: 'https://beghr.com/blog/legal-hiring/in-house-counsel',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://beghr.com/blog/legal-hiring/in-house-counsel',
            },
          }),
        }}
      />
    </article>
  );
}
