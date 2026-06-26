import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Firm Paralegal Hiring: Skills to Look For',
  description: 'Find qualified paralegals fast. What to look for, where to search, and how to assess paralegal candidates quickly.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring/paralegal-recruiting' },
};

export default function ParalegalHiringPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Blog · Legal Hiring & Recruiting</p>
          <h1>Law Firm Paralegal Hiring: Skills to Look For</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Paralegal hiring is easier than attorney hiring, but it's easy to get wrong. The wrong paralegal slows down attorney productivity. The right one frees your attorneys to focus on client relationships and billable work.</p>

        <p>Most law firms post on job boards and sort through unqualified resumes. It takes weeks. Here's how to hire a great paralegal in 14–21 days.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>What to Look For in Paralegals</h2>

        <p>Technical skills matter: case management software, legal research, document management, and writing. But culture fit matters more. A detail-oriented, well-organized paralegal who fits your firm's pace and style is worth more than a technically perfect hire who doesn't mesh with your team.</p>

        <p>Experience in your practice area is valuable, but trainability is key. A great paralegal with litigation experience can learn transactional work. The reverse is harder.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Find Qualified Paralegals in 14–21 Days.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Pre-screened, culture-fit paralegals who are ready to work. Skip the sorting—we handle matching.</p>
          <a href="https://calendly.com/anthony-weplacelawyers/legal-hiring-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony specializes in paralegal placement and support staff hiring for law firms nationwide.</p>
        </div>
      </section>
    </article>
  );
}
