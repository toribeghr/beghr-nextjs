import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'iSolved HCM Platform: Cloud Payroll & HR for Growing Companies',
  description: 'iSolved payroll and HRIS solutions for mid-market companies. Centralized HR, payroll, benefits, and talent management in one platform.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-software/isolved-platform' },
};

export default function iSolvedPlatformPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · HCM Software & HR Tech</p>
          <h1>iSolved HCM Platform: Cloud Payroll & HR for Growing Companies</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/hcm-software.svg" alt="iSolved HCM Platform" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Growing companies need an all-in-one HR platform. Managing payroll, benefits, time and attendance, and talent separately creates silos, errors, and wasted time. <a href="https://www.isolved.com/" target="_blank" rel="noopener noreferrer">iSolved</a> brings all of it into one unified system&mdash;no more data transfers between platforms, no more mismatched records.</p>

        <p>For companies scaling from 50 to 500 employees, iSolved replaces multiple point solutions and keeps payroll and HR aligned.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What iSolved Does</h2>

        <p>iSolved is a true unified HRIS: payroll processing, benefits administration, time and attendance, talent management, and HR compliance&mdash;all in one cloud platform. Employees self-serve benefits enrollment, timecards, and PTO requests. HR teams automate workflows instead of processing paperwork.</p>

        <p>It&apos;s designed for companies that have outgrown basic payroll but need more than just a processor.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The iSolved Connector for Claude</h2>

        <p>In June 2026, iSolved launched the first-ever Claude AI integration for an HCM platform. The iSolved Connector for Claude is now generally available in Claude&apos;s directory. Unlike competitors&apos; chatbots that only answer questions, the iSolved Connector completes actual HR tasks&mdash;running payroll, pulling reports, updating records&mdash;directly through a conversation with Claude.</p>

        <p>This is the most advanced HR AI integration available in any HCM platform today. BEG is an authorized reseller with direct implementation support.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Simplify HR & Payroll. One Platform.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Consolidate payroll, benefits, time, and talent management. Let&apos;s explore whether iSolved is right for your company.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>


        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/hcm-software" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              iSolved HCM Software &rarr;
            </a>
            <a href="/blog/hcm-software/hr-automation" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              HR Automation with iSolved &rarr;
            </a>
          </div>
        </div>
        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony advises growing companies on HRIS selection, implementation, and optimization with iSolved and other HCM platforms.</p>
        </div>
      </section>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'The iSolved Platform: Everything in One Place',
            description: 'Complete guide to the iSolved People Cloud HCM platform',
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
            url: 'https://beghr.com/blog/hcm-software/isolved-platform',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://beghr.com/blog/hcm-software/isolved-platform',
            },
          }),
        }}
      />
    </article>
  );
}
