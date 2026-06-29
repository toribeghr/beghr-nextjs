import { Metadata } from 'next';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'The 2026 Accounting and CPA Talent Shortage Report | BEG',
  description: 'The pipeline of new CPAs has contracted for years while retirements accelerate. What the 2026 accounting shortage means for finance leaders trying to fill controller, audit, and tax roles.',
  alternates: { canonical: 'https://www.beghr.com/resources/talent-shortage-report/accounting-cpa' },
  openGraph: { title: 'The 2026 Accounting and CPA Talent Shortage Report | BEG', description: 'The pipeline of new CPAs has contracted for years while retirements accelerate. What the 2026 accounting shortage means for finance leaders trying to fill controller, audit, and tax roles.', url: 'https://www.beghr.com/resources/talent-shortage-report/accounting-cpa', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: 'The 2026 Accounting and CPA Talent Shortage Report | BEG', description: 'The pipeline of new CPAs has contracted for years while retirements accelerate. What the 2026 accounting shortage means for finance leaders trying to fill controller, audit, and tax roles.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('resources/talent-shortage-report/accounting-cpa');

const faqs = [
      {
            "question": "How bad is the accounting talent shortage in 2026?",
            "answer": "The shortage is structural: fewer people entering the profession through CPA exam and accounting degree pathways, a large cohort of experienced CPAs at or near retirement, and steady demand for finance talent. The result is more open roles than qualified available candidates, particularly for controllers, audit managers, and tax roles."
      },
      {
            "question": "How long does it take to fill an accounting role in 2026?",
            "answer": "In the current market, accounting roles that once filled in six to eight weeks are commonly staying open three to four months or more when employers rely on job postings. BEG fills accounting and CPA roles in 23-35 days using direct outreach to passive candidates."
      },
      {
            "question": "What roles are hardest to fill in accounting and finance in 2026?",
            "answer": "Controllers, audit managers, tax managers, and senior accountants with five or more years of experience in a specific industry are the hardest to fill. CPA-required roles at the manager level and above are particularly competitive."
      }
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"The 2026 Accounting and CPA Talent Shortage Report","datePublished":"2026-06-29","dateModified":"2026-06-29","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","url":"https://www.linkedin.com/in/theanthonymoretti"},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"mainEntityOfPage":"https://www.beghr.com/resources/talent-shortage-report/accounting-cpa"}) }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Resource &middot; Industry Report</p>
          <h1>The 2026 Accounting and CPA Talent Shortage Report</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>
            The accounting shortage is structural, not cyclical. Fewer people are entering the profession, experienced CPAs are retiring faster than they are being replaced, and demand for skilled finance talent has not softened. Here is what that means for hiring in 2026.
          </p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Updated:</strong> June 2026</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>The shortage is structural: qualified candidates are in short supply while demand continues to grow.</li>
              <li>The best candidates are passive, employed, and not responding to job postings. Reaching them requires direct outreach.</li>
              <li>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.</li>
            </ul>
          </aside>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>The Scale of the Shortage</h2>
          <p style={{ marginTop: 0 }}>The number of candidates sitting the CPA exam has declined well below its earlier peak, and accounting degree completions have followed. At the same time, a large share of the current licensed CPA population is at or near retirement age. The math is straightforward: the bottom of the pipeline is narrower, the top is emptying, and demand for controllers, audit managers, tax managers, and senior accountants has not decreased. The result is more open roles, longer fill times, and rising compensation for experienced talent.</p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>Why Standard Job Postings Fail</h2>
          <p style={{ marginTop: 0 }}>In a shortage, the candidates most worth hiring are the ones already doing the job well somewhere else. They are employed, busy, and not browsing job boards. A posting reaches the active job-seeker segment, which is smaller and shallower in a tight market. The accountant or CPA you actually want to hire is a passive candidate who will consider a move for the right opportunity if someone brings it to them directly.</p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>What This Means for Fill Time</h2>
          <p style={{ marginTop: 0 }}>Finance leaders who relied on job boards for accounting hires in 2023 and 2024 are finding that the same approach produces worse results in 2026. Open roles that once filled in six to eight weeks are now staying open for three to four months or longer. That vacancy carries a real cost: delayed closes, slower reporting, overtime burden on the remaining team, and increased turnover risk. The longer the seat sits open, the more expensive it becomes.</p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>How Employers Are Filling Roles Anyway</h2>
          <p style={{ marginTop: 0 }}>The organizations still filling accounting roles in 23-35 days are doing three things differently. First, they source passive candidates directly rather than waiting for applicants. Second, they move fast once a strong candidate appears, because passive candidates have a short decision window and are talking to other firms. Third, they lead with more than compensation, because in a shortage, pay alone rarely pulls someone out of a stable role. Scope, growth path, and the quality of the team are often the deciding factors.</p>



          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Methodology and Sources</h2>
          <p>This report draws on public labor-market data and published industry studies, including the U.S. Bureau of Labor Statistics, SHRM, and industry-specific workforce research. Figures are framed as indicative reads on direction and severity, not precise counts, and conditions vary by metro, role, and specialization. For a read on a specific role and market, book a discovery call and we will share what we are seeing in live searches.</p>

          <div style={{ background: '#000000', color: '#ffffff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0 0', textAlign: 'center' }}>
            <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Hiring into this shortage?</h2>
            <p style={{ color: '#cccccc', marginBottom: '1.25rem' }}>BEG reaches the passive candidates a posting never will, and fills permanent roles in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Book a 15-Minute Discovery Call</a>
          </div>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>
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
              <Link href="/services/job-placement/accounting-cpa" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Accounting and CPA Placement &rarr;</Link>
              <Link href="/blog/accounting-hiring" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Accounting Hiring Guides &rarr;</Link>
              <Link href="/blog/accounting-hiring/cpa-shortage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>The Accounting Talent Shortage in 2026 &rarr;</Link>
              <Link href="/resources/talent-shortage-report" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>2026 Talent Shortage Report &rarr;</Link>
            </div>
          </div>

          <p style={{ marginTop: '2rem' }}>See the full <Link href="/resources/talent-shortage-report" style={{ color: '#000000', fontWeight: 600 }}>2026 Talent Shortage Report</Link> covering all industries, or benchmark hiring speed with the <Link href="/resources/time-to-fill-report" style={{ color: '#000000', fontWeight: 600 }}>2026 Time-to-Fill Benchmark Report</Link>.</p>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    </article>
  );
}
