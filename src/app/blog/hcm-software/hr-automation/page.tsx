import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'HR Automation: Save 200+ Hours Per Year',
  description: 'Automate payroll, benefits, onboarding, and compliance. See how HR automation saves time and eliminates errors.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-software/hr-automation' },
};

export default function HRAutomationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · HCM Software & HR Tech</p>
          <h1>HR Automation: Save 200+ Hours Per Year</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/automation.svg" alt="HR Automation" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>According to <a href="https://www.shrm.org/topics-tools/topics/human-resources" target="_blank" rel="noopener noreferrer">SHRM</a>, your HR team spends 200+ hours per year on manual tasks: processing timecards, enrolling employees in benefits, sending reminders, collecting compliance docs. These tasks don&apos;t add value&mdash;they just take time.</p>

        <p>HR automation eliminates these tasks. Employees self-serve. Workflows run automatically. Your team focuses on strategy, culture, and hiring instead of paperwork.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What HR Automation Covers</h2>

        <p>Modern HRIS platforms automate: payroll processing, benefits enrollment, time and attendance tracking, PTO requests and approvals, onboarding workflows, compliance tracking, and tax filing. Employees self-serve in a mobile app. HR gets visibility and control without lifting a finger.</p>

        <p>The result: fewer errors, faster workflows, better employee experience, and massive time savings for your HR team.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>iSolved + Claude: Automation That Acts</h2>

        <p>iSolved People Cloud goes beyond answering HR questions. With the iSolved Connector for Claude, your team can complete HR tasks directly through an AI conversation. Run payroll, pull reports, update employee records. No manual data entry. No switching between systems. The AI does the work.</p>

        <p>This is not a chatbot. This is HR automation with an AI layer on top.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Automate HR. Reclaim Your Time.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Free up 200+ hours per year. Let&apos;s explore HR automation solutions for your company.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>


        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/hcm-software" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              iSolved HCM Software &rarr;
            </a>
            <a href="/blog/hcm-software/isolved-platform" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              The iSolved Platform &rarr;
            </a>
          </div>
        </div>
        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony helps HR teams implement automation and process optimization to reclaim time for strategic work.</p>
        </div>
      </section>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'HR Automation with iSolved: What Actually Gets Automated',
            description: 'How iSolved automates HR workflows and reduces manual work',
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
            url: 'https://beghr.com/blog/hcm-software/hr-automation',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://beghr.com/blog/hcm-software/hr-automation',
            },
          }),
        }}
      />
    </article>
  );
}
