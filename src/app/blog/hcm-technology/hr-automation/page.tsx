import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'HR Automation: Save 200+ Hours Per Year',
  description: 'Automate payroll, benefits, onboarding, and compliance. See how HR automation saves time and eliminates errors.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology/hr-automation' },
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
        <p>Your HR team spends 200+ hours per year on manual tasks: processing timecards, enrolling employees in benefits, sending reminders, collecting compliance docs. These tasks don't add value—they just take time.</p>

        <p>HR automation eliminates these tasks. Employees self-serve. Workflows run automatically. Your team focuses on strategy, culture, and hiring instead of paperwork.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>What HR Automation Covers</h2>

        <p>Modern HRIS platforms automate: payroll processing, benefits enrollment, time and attendance tracking, PTO requests and approvals, onboarding workflows, compliance tracking, and tax filing. Employees self-serve in a mobile app. HR gets visibility and control without lifting a finger.</p>

        <p>The result: fewer errors, faster workflows, better employee experience, and massive time savings for your HR team.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Automate HR. Reclaim Your Time.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Free up 200+ hours per year. Let's explore HR automation solutions for your company.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony helps HR teams implement automation and process optimization to reclaim time for strategic work.</p>
        </div>
      </section>
    </article>
  );
}
