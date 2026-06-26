import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Real Estate Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
  description: 'Real estate company payroll outsourcing vs. hiring in-house. Save $62K-$95K annually. Simplify multi-property, multi-state payroll.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/real-estate/property-management' },
};

export default function RealEstatePayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · Payroll Management · Real Estate</p>
          <h1>Real Estate Payroll Outsourcing: Cost vs. Hiring HR Coordinator</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/real-estate.svg" alt="Real Estate Payroll" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Real estate companies manage payroll across multiple properties, property managers, and states. Each property operates independently, yet corporate must consolidate payroll and allocate expenses correctly.</p>

        <p>Most real estate firms hire an HR coordinator for $48K–$65K annually. Add overhead and benefits, and you're at $70K–$95K per year.</p>

        <p><strong>Outsource payroll to a provider who understands multi-property, multi-state management. Reclaim time for leasing and operations.</strong></p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>Why Real Estate Payroll is Complex</h2>

        <p>Properties in different states have different tax requirements. Property managers earn commissions or bonuses. Tenant reimbursements and expense allocations must be tracked separately. One error cascades across the portfolio.</p>

        <p>Your HR coordinator spends time on compliance, not on retention or culture initiatives that drive performance.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>The Financial Reality</h2>

        <p>For a 12-property real estate company with 60 employees:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>In-house HR coordinator:</strong> $78,000/year</li>
          <li><strong>Outsourced payroll:</strong> $1,600/month × 12 = $19,200/year</li>
          <li><strong>Savings:</strong> $58,800/year</li>
        </ul>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Multi-Property Payroll, Simplified.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Consolidate payroll across all properties. We handle multi-state tax, commission tracking, and expense allocation.</p>
          <a href="https://calendly.com/tori-beghr?id=1" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony serves real estate investment companies, property management firms, and commercial landlords with centralized payroll and multi-property HR solutions.</p>
        </div>
      </section>
    </article>
  );
}
