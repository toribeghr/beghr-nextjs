import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Insurance Salary Guide 2026 | BEG',
  description: 'Insurance salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent insurance talent in 23-35 days.',
  alternates: { canonical: 'https://beghr.com/resources/salary-guide/insurance' },
  openGraph: { title: 'Insurance Salary Guide 2026 | BEG', description: 'Insurance salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent insurance talent in 23-35 days.', url: 'https://beghr.com/resources/salary-guide/insurance', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Insurance Salary Guide 2026 | BEG', description: 'Insurance salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent insurance talent in 23-35 days.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('salary-guide');

export default function SalaryGuideInsurancePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Insurance Salary Guide 2026\",\"datePublished\":\"2026-06-25\",\"dateModified\":\"2026-06-28\",\"author\":{\"@type\":\"Person\",\"name\":\"Anthony Moretti\",\"jobTitle\":\"VP of Sales\",\"url\":\"https://www.linkedin.com/in/theanthonymoretti\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://beghr.com/assets/beg-header-image.png\"}},\"mainEntityOfPage\":\"https://beghr.com/resources/salary-guide/insurance\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the typical insurance salary range in 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Across the roles in this guide, 2026 insurance pay ranges from roughly $55k to $220k nationally, depending on role, experience, and metro.\"}},{\"@type\":\"Question\",\"name\":\"Are these salary figures offers?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. These are indicative national ranges compiled from public labor data and market salary guides. Actual pay varies by location, experience, and total-comp structure.\"}},{\"@type\":\"Question\",\"name\":\"How fast can BEG fill a insurance role?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"On average 23-35 days from discovery call to placed hire, at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}}]}" }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Salary Guide &middot; Insurance</p>
          <h1>Insurance Salary Guide (2026)</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>Typical 2026 pay ranges for insurance roles, compiled from public labor data and market salary guides. Use them to benchmark an offer, then fill the seat in 23-35 days.</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Updated:</strong> June 2026</span>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Get the printable guide</h2>
          <p style={{ marginBottom: '0.5rem', color: '#555' }}>Want the full BEG Salary and Hiring Guide as a clean, printable PDF covering every major industry? Grab it here.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <LeadCaptureForm toolName={'Salary & Hiring Guide (PDF)'} toolDescription="The full 2026 guide across every major industry, printable and ready to download." assetUrl="/assets/beg-salary-guide-2026.pdf" assetLabel="Get the PDF" calendlyLink={CALENDLY} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Insurance pay in 2026 spans roughly $55k to $220k nationally, depending on role, experience, and metro.</li>
              <li>These are indicative ranges from public data, not offers. Total comp shifts with bonus, commission, and equity.</li>
              <li>BEG fills permanent insurance roles in 23-35 days at roughly 50% less than contingency, with a 45-day guarantee.</li>
            </ul>
          </aside>
          <div style={{ overflowX: 'auto', margin: '0 0 1rem' }}>
          <table style={{ width: '100%', minWidth: '440px', borderCollapse: 'collapse', fontSize: '0.97rem' }}>
            <thead>
              <tr style={{ background: '#000000', color: '#ECAC60' }}>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Typical 2026 range</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Midpoint</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/insurance/account-manager" style={{ color: '#000000', fontWeight: 600 }}>Account Manager</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$55k - $95k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$75k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/insurance/commercial-lines-underwriter" style={{ color: '#000000', fontWeight: 600 }}>Commercial Lines Underwriter</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$80k - $150k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$115k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/insurance/claims-manager" style={{ color: '#000000', fontWeight: 600 }}>Claims Manager</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$90k - $150k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$120k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/insurance/producer" style={{ color: '#000000', fontWeight: 600 }}>Producer</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$60k - $200k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$130k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/insurance/actuary" style={{ color: '#000000', fontWeight: 600 }}>Actuary</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$110k - $220k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$165k</td>
            </tr>
            </tbody>
          </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>Ranges are national and indicative. Click any role to see how we place it.</p>
          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Methodology and sources</h2>
          <p>These are indicative 2026 national ranges, not job offers. Actual compensation varies by metro, years of experience, certifications, company size, and total-comp structure (base, bonus, commission, and equity). Ranges were compiled from public labor data and published market salary guides, including the U.S. Bureau of Labor Statistics, Robert Half, BCG, Glassdoor, ZipRecruiter, and Payscale. For a market read on a specific role and location, book a call and we will share what we are seeing in live searches.</p>
          <div style={{ background: '#000000', color: '#ffffff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0 0', textAlign: 'center' }}>
            <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Hiring for one of these roles?</h2>
            <p style={{ color: '#cccccc', marginBottom: '1.25rem' }}>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Book a 15-Minute Discovery Call</a>
          </div>
          <p style={{ marginTop: '2rem' }}>See the full <Link href="/resources/salary-guide" style={{ color: '#000000', fontWeight: 600 }}>BEG Salary and Hiring Guide</Link> or our <Link href="/services/job-placement/insurance" style={{ color: '#000000', fontWeight: 600 }}>insurance placement service</Link>.</p>
        </div>
      </section>
    </article>
  );
}
