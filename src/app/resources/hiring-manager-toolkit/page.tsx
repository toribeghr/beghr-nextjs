import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hiring Manager Toolkit | Free Templates | BEG',
  description: 'Free hiring manager toolkit: interview scorecard, job description template, offer checklist, and a 30-60-90 onboarding plan. Download the PDF.',
  alternates: { canonical: 'https://www.beghr.com/resources/hiring-manager-toolkit' },
  openGraph: { title: 'Hiring Manager Toolkit | Free Templates | BEG', description: 'Interview scorecard, JD template, offer checklist, and a 30-60-90 onboarding plan. Free PDF.', url: 'https://www.beghr.com/resources/hiring-manager-toolkit', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Hiring Manager Toolkit | Free Templates | BEG', description: 'Interview scorecard, JD template, offer checklist, and a 30-60-90 onboarding plan. Free PDF.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const calendly = getCalendlyLink('hiring-manager-toolkit');

export default function HiringManagerToolkitPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Free Resource</p>
          <h1>The Hiring Manager Toolkit</h1>
          <p className="lede" style={{ margin: '18px 0 0', maxWidth: '680px' }}>
            Everything you need to run a sharper, faster hire: a weighted interview scorecard, a job description template that actually attracts candidates, an offer checklist, and a 30-60-90 onboarding plan. One printable PDF.
          </p>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <LeadCaptureForm
              toolName="Hiring Manager Toolkit"
              toolDescription="The full toolkit as a printable PDF: scorecard, JD template, offer checklist, and 30-60-90 plan."
              assetUrl="/assets/beg-hiring-manager-toolkit.pdf"
              assetLabel="Get the toolkit"
              calendlyLink={calendly}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>What is inside</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { t: 'Interview scorecard', d: 'A weighted 1 to 5 rubric so every candidate is judged on the same criteria, not gut feel.' },
              { t: 'Job description template', d: 'A structure that sells the role and keeps must-haves short, so strong candidates actually apply.' },
              { t: 'Offer checklist', d: 'The steps that protect a close: same-day verbal, 24-hour written offer, and staying in contact through notice.' },
              { t: '30-60-90 onboarding plan', d: 'A simple ramp that turns a new hire into a contributor by day 90.' },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{t}</strong>
                <span style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', color: '#444' }}>
            Hiring for a specific role? See <Link href="/services/job-placement" style={{ color: '#000', fontWeight: 600 }}>BEG job placement</Link> or grab the <Link href="/resources/45-day-search-playbook" style={{ color: '#000', fontWeight: 600 }}>45-Day Search Playbook</Link>.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>When you are ready</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Hand the role to BEG and fill it in 23-35 days.</h2>
          <p style={{ color: '#cccccc', lineHeight: 1.7, marginBottom: '2rem' }}>
            We place permanent hires at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.
          </p>
          <PricingCta service="job-placement" subline={false} />
        </div>
      </section>
    </>
  );
}
