import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Salary & Hiring Guide 2026 | BEG',
  description: 'Free 2026 salary ranges across every major industry, from public labor data. Benchmark pay, then fill permanent roles in 23-35 days at roughly 50% less.',
  alternates: { canonical: 'https://beghr.com/resources/salary-guide' },
  openGraph: { title: 'Salary & Hiring Guide 2026 | BEG', description: 'Free 2026 salary ranges across every major industry, from public labor data. Benchmark pay, then fill permanent roles in 23-35 days at roughly 50% less.', url: 'https://beghr.com/resources/salary-guide', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Salary & Hiring Guide 2026 | BEG', description: 'Free 2026 salary ranges across every major industry, from public labor data. Benchmark pay, then fill permanent roles in 23-35 days at roughly 50% less.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('salary-guide');

export default function SalaryGuideHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"BEG Salary and Hiring Guide 2026\",\"datePublished\":\"2026-06-25\",\"dateModified\":\"2026-06-28\",\"author\":{\"@type\":\"Person\",\"name\":\"Anthony Moretti\",\"jobTitle\":\"VP of Sales\",\"url\":\"https://www.linkedin.com/in/theanthonymoretti\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://beghr.com/assets/beg-header-image.png\"}},\"mainEntityOfPage\":\"https://beghr.com/resources/salary-guide\"}" }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Resources &middot; Salary Guide</p>
          <h1>BEG Salary &amp; Hiring Guide (2026)</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>Indicative 2026 pay ranges across every major industry, built from public labor data and market salary guides. Benchmark a role, then fill the seat in 23-35 days at roughly 50% less than contingency.</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Updated:</strong> June 2026</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Salary ranges across every major industry, from public labor data, refreshed for 2026.</li>
              <li>Ranges are indicative and national. Total comp shifts with bonus, commission, equity, and metro.</li>
              <li>When a number tells you the seat is worth filling, BEG fills it in 23-35 days at roughly 50% less than contingency.</li>
            </ul>
          </aside>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', margin: '0 0 2rem' }}>
            <Link href="/resources/salary-guide/legal" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Legal</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>6 roles &middot; $55k - $900k</span>
            </Link>
            <Link href="/resources/salary-guide/accounting-cpa" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Accounting & CPA</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>6 roles &middot; $75k - $450k</span>
            </Link>
            <Link href="/resources/salary-guide/sales" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Sales</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $450k</span>
            </Link>
            <Link href="/resources/salary-guide/cybersecurity" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Cybersecurity</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $65k - $450k</span>
            </Link>
            <Link href="/resources/salary-guide/insurance" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Insurance</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $55k - $220k</span>
            </Link>
            <Link href="/resources/salary-guide/hr" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Human Resources</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $85k - $400k</span>
            </Link>
            <Link href="/resources/salary-guide/construction-management" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Construction Management</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $80k - $300k</span>
            </Link>
            <Link href="/resources/salary-guide/supply-chain" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Supply Chain</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $160k</span>
            </Link>
            <Link href="/resources/salary-guide/marketing" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Marketing</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $80k - $200k</span>
            </Link>
            <Link href="/resources/salary-guide/banking" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Banking</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $65k - $250k</span>
            </Link>
            <Link href="/resources/salary-guide/biotech" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Biotech & Life Sciences</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $230k</span>
            </Link>
            <Link href="/resources/salary-guide/manufacturing" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Manufacturing</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $80k - $230k</span>
            </Link>
            <Link href="/resources/salary-guide/dental" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Dental</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $45k - $400k</span>
            </Link>
            <Link href="/resources/salary-guide/nonprofit" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Nonprofit</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $200k</span>
            </Link>
            <Link href="/resources/salary-guide/real-estate" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Real Estate</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $60k - $250k</span>
            </Link>
            <Link href="/resources/salary-guide/energy" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Energy</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $80k - $180k</span>
            </Link>
            <Link href="/resources/salary-guide/architecture" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Architecture</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $80k - $280k</span>
            </Link>
            <Link href="/resources/salary-guide/hospitality" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Hospitality</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $160k</span>
            </Link>
            <Link href="/resources/salary-guide/veterinary" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Veterinary</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $45k - $300k</span>
            </Link>
            <Link href="/resources/salary-guide/government" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Government Contracting</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $190k</span>
            </Link>
            <Link href="/resources/salary-guide/healthcare" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Healthcare</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $75k - $400k</span>
            </Link>
            <Link href="/resources/salary-guide/finance" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Corporate Finance</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $70k - $300k</span>
            </Link>
            <Link href="/resources/salary-guide/technology" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Technology</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $100k - $260k</span>
            </Link>
            <Link href="/resources/salary-guide/engineering" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Engineering</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $75k - $200k</span>
            </Link>
            <Link href="/resources/salary-guide/executive" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Executive Search</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $110k - $600k</span>
            </Link>
            <Link href="/resources/salary-guide/trades" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>Skilled Trades</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>5 roles &middot; $50k - $130k</span>
            </Link>
          </div>
          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Methodology and sources</h2>
          <p>These are indicative 2026 national ranges, not job offers. Actual compensation varies by metro, years of experience, certifications, company size, and total-comp structure (base, bonus, commission, and equity). Ranges were compiled from public labor data and published market salary guides, including the U.S. Bureau of Labor Statistics, Robert Half, BCG, Glassdoor, ZipRecruiter, and Payscale. For a market read on a specific role and location, book a call and we will share what we are seeing in live searches.</p>
          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Get the printable guide</h2>
          <p style={{ marginBottom: '1.25rem' }}>Want the full BEG Salary and Hiring Guide as a clean, printable PDF covering every major industry? Grab it here.</p>
          <LeadCaptureForm toolName={'Salary & Hiring Guide (PDF)'} toolDescription="The full 2026 guide across every major industry, printable and ready to download." assetUrl="/assets/beg-salary-guide-2026.pdf" assetLabel="Get the PDF" calendlyLink={CALENDLY} />

          <div style={{ background: '#000000', color: '#ffffff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0 0', textAlign: 'center' }}>
            <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Hiring for one of these roles?</h2>
            <p style={{ color: '#cccccc', marginBottom: '1.25rem' }}>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Book a 15-Minute Discovery Call</a>
          </div>
        </div>
      </section>
    </article>
  );
}
