import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Payroll Tax Compliance: 2026 Updates & What Changed',
  description: 'Tax law changes, new payroll requirements, and what HR teams need to know about payroll compliance in 2026.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology/payroll-compliance' },
};

export default function PayrollCompliancePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · HCM Software & HR Tech</p>
          <h1>Payroll Tax Compliance: 2026 Updates & What Changed</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/compliance.svg" alt="Payroll Compliance" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Payroll tax rules change every year. State requirements shift. IRS thresholds update. Federal withholding changes. If your payroll system isn't updated, you're exposed to penalties, penalties, and audits.</p>

        <p>Here's what changed in 2026 and what your payroll system needs to handle.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>Why Compliance Matters</h2>

        <p>Payroll tax errors are costly. A missed withholding, incorrect state tax calculation, or late filing triggers IRS penalties, state notices, and audit risk. Your company faces back-payment liability and reputation damage.</p>

        <p>Modern payroll platforms auto-update tax tables, calculate state requirements, and file on time. They're your insurance policy against compliance mistakes.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Stay Compliant. Avoid Penalties.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Let's ensure your payroll system is 2026-ready and compliant with all state and federal requirements.</p>
          <a href="https://calendly.com/tori-beghr?id=1" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony advises companies on payroll compliance, tax strategy, and regulatory updates across all 50 states.</p>
        </div>
      </section>
    </article>
  );
}
