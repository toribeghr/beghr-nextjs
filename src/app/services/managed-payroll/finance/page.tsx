import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Finance & Accounting | Business Executive Group',
  description: 'Managed payroll for finance firms. Bonus structures, equity compensation, zero error tolerance. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/finance',
  },
};

export default function PayrollFinancePage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Finance"
      title="Finance payroll, fully handled."
      description="Finance and accounting payroll means bonus structures, commission tracking, and zero error tolerance. We run all of it as a fully managed service, so your team never touches it."
      calendlyLink={getCalendlyLink('payroll-finance')}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle complex bonus and compensation structures?</h3>
              <p>Yes. We manage bonus structures, commissions, equity compensation, and zero error tolerance for accounting firms.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle multi-state compliance?</h3>
              <p>Yes. We run payroll nationwide and keep you compliant in all 50 states.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
