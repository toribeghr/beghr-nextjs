import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Nonprofit Payroll Outsourcing: Cost vs. Hiring HR Staff',
  description: 'Nonprofit payroll outsourcing vs. hiring in-house. Save $55K-$85K annually. Simplify tax-exempt compliance.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/nonprofits/charity-payroll' },
};

export default function NonprofitPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · Payroll Management · Nonprofits</p>
          <h1>Nonprofit Payroll Outsourcing: Cost vs. Hiring HR Staff</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/nonprofit.svg" alt="Nonprofit Payroll" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Nonprofits operate on tight budgets. Every dollar spent on overhead is a dollar not going to your mission. Yet most nonprofits still hire in-house payroll staff, burning $55K–$80K annually on a role that could be outsourced.</p>

        <p>Tax-exempt organizations face unique payroll complexity: Form 990 reporting, tax-exempt status requirements, restricted fund payroll allocations. One mistake risks your nonprofit's tax status.</p>

        <p><strong>Outsource payroll to experts who understand nonprofit compliance, reclaim budget for mission work.</strong></p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>Why Nonprofit Payroll is Uniquely Complex</h2>

        <p>Nonprofits manage payroll across restricted and unrestricted funds, track grant-funded positions separately, and must file Form 990-N. Miss a requirement and your tax-exempt status is at risk.</p>

        <p>In-house payroll staff don't specialize in nonprofit compliance. That's expensive expertise to hire.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>The Financial Reality</h2>

        <p>For a 35-person nonprofit:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>In-house payroll staff:</strong> $62,000/year</li>
          <li><strong>Outsourced payroll:</strong> $1,200/month × 12 = $14,400/year</li>
          <li><strong>Savings:</strong> $47,600/year</li>
        </ul>

        <p>That's nearly $50K per year to reinvest in programs and mission delivery.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Nonprofit Payroll, Mission-Focused.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Keep more dollars in mission work. We handle tax-exempt compliance, grant-funded payroll tracking, and Form 990 reporting.</p>
          <a href="https://calendly.com/tori-beghr?id=1" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony partners with nonprofits nationwide on tax-exempt payroll, compliance, and budget-conscious HR solutions.</p>
        </div>
      </section>
    </article>
  );
}
