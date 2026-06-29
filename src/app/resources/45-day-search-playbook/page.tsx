import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '45-Day Search Playbook | Free Download | BEG',
  description: 'The free 45-Day Search Playbook: how BEG fills permanent roles in 23-35 days, step by step, at roughly 50% less than contingency. Download the PDF.',
  alternates: { canonical: 'https://www.beghr.com/resources/45-day-search-playbook' },
  openGraph: { title: '45-Day Search Playbook | Free Download | BEG', description: 'How BEG fills permanent roles in 23-35 days, step by step. Free PDF.', url: 'https://www.beghr.com/resources/45-day-search-playbook', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: '45-Day Search Playbook | Free Download | BEG', description: 'How BEG fills permanent roles in 23-35 days, step by step. Free PDF.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const calendly = getCalendlyLink('45-day-search-playbook');

export default function SearchPlaybookPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Free Resource</p>
          <h1>The 45-Day Search Playbook</h1>
          <p className="lede" style={{ margin: '18px 0 0', maxWidth: '680px' }}>
            The exact method BEG uses to fill permanent roles in 23-35 days: direct sourcing of passive candidates, a curated shortlist, milestone billing, and a 45-day guarantee. A step-by-step PDF you can run yourself or hand to us.
          </p>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <LeadCaptureForm
              toolName="45-Day Search Playbook"
              toolDescription="The step-by-step method as a printable PDF: sourcing, shortlist, milestone billing, and the guarantee."
              assetUrl="/assets/beg-45-day-search-playbook.pdf"
              assetLabel="Get the playbook"
              calendlyLink={calendly}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>What you will learn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { t: 'Why most searches stall', d: 'The best candidates are passive and available for two to four weeks. Posting and waiting misses them.' },
              { t: 'The week-by-week method', d: 'Discovery, active sourcing, a shortlist of 3 to 5, interviews, and close, mapped across 35 days.' },
              { t: 'Why it costs less', d: 'Milestone billing replaces the 20-25% contingency fee, for roughly 50% less, with aligned incentives.' },
              { t: 'What to have ready', d: 'A tight role profile, a real comp range, and a fast two-round interview process.' },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{t}</strong>
                <span style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', color: '#444' }}>
            See <Link href="/services/job-placement" style={{ color: '#000', fontWeight: 600 }}>BEG job placement</Link>, or grab the <Link href="/resources/hiring-manager-toolkit" style={{ color: '#000', fontWeight: 600 }}>Hiring Manager Toolkit</Link>.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Skip the DIY</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Or just hand us the role.</h2>
          <p style={{ color: '#cccccc', lineHeight: 1.7, marginBottom: '2rem' }}>
            BEG runs this playbook for you and fills the seat in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.
          </p>
          <Link href={calendly} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
