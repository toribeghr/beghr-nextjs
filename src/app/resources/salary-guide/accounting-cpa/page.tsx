import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Accounting & CPA Salary Guide 2026 | BEG',
  description: 'Accounting & CPA salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent accounting & cpa talent in 23-35 day',
  alternates: { canonical: 'https://beghr.com/resources/salary-guide/accounting-cpa' },
  openGraph: { title: 'Accounting & CPA Salary Guide 2026 | BEG', description: 'Accounting & CPA salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent accounting & cpa talent in 23-35 day', url: 'https://beghr.com/resources/salary-guide/accounting-cpa', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Accounting & CPA Salary Guide 2026 | BEG', description: 'Accounting & CPA salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent accounting & cpa talent in 23-35 day', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('salary-guide');

export default function SalaryGuideAccountingCpaPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Accounting & CPA Salary Guide 2026\",\"datePublished\":\"2026-06-25\",\"dateModified\":\"2026-06-28\",\"author\":{\"@type\":\"Person\",\"name\":\"Anthony Moretti\",\"jobTitle\":\"VP of Sales\",\"url\":\"https://www.linkedin.com/in/theanthonymoretti\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://beghr.com/assets/beg-header-image.png\"}},\"mainEntityOfPage\":\"https://beghr.com/resources/salary-guide/accounting-cpa\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the typical accounting & cpa salary range in 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Across the roles in this guide, 2026 accounting & cpa pay ranges from roughly $75k to $450k nationally, depending on role, experience, and metro.\"}},{\"@type\":\"Question\",\"name\":\"Are these salary figures offers?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. These are indicative national ranges compiled from public labor data and market salary guides. Actual pay varies by location, experience, and total-comp structure.\"}},{\"@type\":\"Question\",\"name\":\"How fast can BEG fill a accounting & cpa role?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"On average 23-35 days from discovery call to placed hire, at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}}]}" }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Salary Guide &middot; Accounting & CPA</p>
          <h1>Accounting & CPA Salary Guide (2026)</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>Typical 2026 pay ranges for accounting & cpa roles, compiled from public labor data and market salary guides. Use them to benchmark an offer, then fill the seat in 23-35 days.</p>
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
              <li>Accounting & CPA pay in 2026 spans roughly $75k to $450k nationally, depending on role, experience, and metro.</li>
              <li>These are indicative ranges from public data, not offers. Total comp shifts with bonus, commission, and equity.</li>
              <li>BEG fills permanent accounting & cpa roles in 23-35 days at roughly 50% less than contingency, with a 45-day guarantee.</li>
            </ul>
          </aside>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 0 1rem', fontSize: '0.97rem' }}>
            <thead>
              <tr style={{ background: '#000000', color: '#ECAC60' }}>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Typical 2026 range</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Midpoint</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/senior-accountant" style={{ color: '#000000', fontWeight: 600 }}>Senior Accountant</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$75k - $110k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$93k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/accounting-manager" style={{ color: '#000000', fontWeight: 600 }}>Accounting Manager</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$90k - $140k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$115k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/tax-manager" style={{ color: '#000000', fontWeight: 600 }}>Tax Manager</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$100k - $165k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$133k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/audit-manager" style={{ color: '#000000', fontWeight: 600 }}>Audit Manager</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$100k - $160k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$130k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/controller" style={{ color: '#000000', fontWeight: 600 }}>Controller</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$110k - $215k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$163k</td>
            </tr>
            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="/services/job-placement/accounting-cpa/cfo" style={{ color: '#000000', fontWeight: 600 }}>CFO</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>$200k - $450k</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>$325k</td>
            </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>Ranges are national and indicative. Click any role to see how we place it.</p>
          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Methodology and sources</h2>
          <p>These are indicative 2026 national ranges, not job offers. Actual compensation varies by metro, years of experience, certifications, company size, and total-comp structure (base, bonus, commission, and equity). Ranges were compiled from public labor data and published market salary guides, including the U.S. Bureau of Labor Statistics, Robert Half, BCG, Glassdoor, ZipRecruiter, and Payscale. For a market read on a specific role and location, book a call and we will share what we are seeing in live searches.</p>
          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Get the printable guide</h2>
          <p style={{ marginBottom: '1.25rem' }}>Want the full BEG Salary and Hiring Guide as a clean, printable PDF covering all 19 industries? Grab it here.</p>
          <LeadCaptureForm toolName={'Salary & Hiring Guide (PDF)'} toolDescription="The full 2026 guide across 19 industries, printable and ready to download." assetUrl="/assets/beg-salary-guide-2026.pdf" assetLabel="Get the PDF" calendlyLink={CALENDLY} />

          <div style={{ background: '#000000', color: '#ffffff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0 0', textAlign: 'center' }}>
            <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Hiring for one of these roles?</h2>
            <p style={{ color: '#cccccc', marginBottom: '1.25rem' }}>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Book a 15-Minute Discovery Call</a>
          </div>
          <p style={{ marginTop: '2rem' }}>See the full <Link href="/resources/salary-guide" style={{ color: '#000000', fontWeight: 600 }}>BEG Salary and Hiring Guide</Link> or our <Link href="/services/job-placement/accounting-cpa" style={{ color: '#000000', fontWeight: 600 }}>accounting & cpa placement service</Link>.</p>
        </div>
      </section>
    </article>
  );
}
