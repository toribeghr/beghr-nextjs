import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Solo Lawyer Expansion: Hiring Your First Associate',
  description: 'Growing from solo practice to a small firm? Learn how to hire your first associate without breaking the bank.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring/solo-firm-growth' },
};

export default function SoloFirmGrowthPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · Legal Hiring & Recruiting</p>
          <h1>Solo Lawyer Expansion: Hiring Your First Associate</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/entrepreneur.svg" alt="Solo Firm Growth" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Solo lawyers who are ready to hire their first associate face a unique challenge: finding an attorney who fits your practice, your culture, and your budget. The wrong hire can drain cash and slow growth. The right hire multiplies your capacity and revenue.</p>

        <p>Most solo practices hire based on network referrals, which is slow and limiting. There's a better way.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>The Solo Practice Hiring Problem</h2>

        <p>Solo lawyers are busy. You're managing clients, business development, and admin. Hiring an associate takes time you don't have. You can't afford to post on job boards and sort through hundreds of unqualified resumes.</p>

        <p>You need someone fast, affordable, and aligned with your practice style. That person exists—you just need the right search strategy.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Hire Your First Associate in 20–30 Days.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Cost-conscious hiring that matches your practice. Associates who understand solo firm economics and culture fit.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>


        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/legal" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              BEG Legal Job Placement &rarr;
            </a>
            <a href="/blog/legal-hiring/in-house-counsel" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Hiring In-House Counsel &rarr;
            </a>
          </div>
        </div>
        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony specializes in solo-to-small-firm hiring, helping solo practitioners build their first team cost-effectively.</p>
        </div>
      </section>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Growing a Solo Practice: Hiring Your First Legal Staff',
            description: 'Hiring strategies for solo practitioners expanding their practice',
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
            url: 'https://beghr.com/blog/legal-hiring/solo-firm-growth',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://beghr.com/blog/legal-hiring/solo-firm-growth',
            },
          }),
        }}
      />
    </article>
  );
}
