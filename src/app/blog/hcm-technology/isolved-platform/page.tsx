import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iSolved HCM Platform: Cloud Payroll & HR for Growing Companies',
  description: 'iSolved payroll and HRIS solutions for mid-market companies. Centralized HR, payroll, benefits, and talent management in one platform.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology/isolved-platform' },
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
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Growing companies need an all-in-one HR platform. Managing payroll, benefits, time and attendance, and talent separately creates silos, errors, and wasted time. iSolved brings all of it into one unified system—no more data transfers between platforms, no more mismatched records.</p>

        <p>For companies scaling from 50 to 500 employees, iSolved replaces multiple point solutions and keeps payroll and HR aligned.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>What iSolved Does</h2>

        <p>iSolved is a true unified HRIS: payroll processing, benefits administration, time and attendance, talent management, and HR compliance—all in one cloud platform. Employees self-serve benefits enrollment, timecards, and PTO requests. HR teams automate workflows instead of processing paperwork.</p>

        <p>It's designed for companies that have outgrown basic payroll but need more than just a processor.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Simplify HR & Payroll. One Platform.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Consolidate payroll, benefits, time, and talent management. Let's explore whether iSolved is right for your company.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony advises growing companies on HRIS selection, implementation, and optimization with iSolved and other HCM platforms.</p>
        </div>
      </section>
    </article>
  );
}
