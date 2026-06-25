import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Healthcare | Business Executive Group',
  description: 'Fully managed payroll for healthcare teams. Shift differentials, compliance, on-time filings. Book a discovery call.',
  canonical: 'https://beghr.com/services/payroll-healthcare',
};

export default function PayrollHealthcarePage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Healthcare"
      title="Healthcare payroll, fully managed."
      subtitle="Managed Payroll for Healthcare"
      description="Running payroll for clinical and healthcare teams means shift differentials, 24/7 schedules, and compliance that cannot slip. We run all of it as a fully managed service."
      calendlyLink={getCalendlyLink('payroll-healthcare')}
      heroStats={[
        { value: '100%', label: 'Payroll handled' },
        { value: 'Nationwide', label: 'All 50 states' },
        { value: 'Compliance', label: 'Always current' },
      ]}
    >
      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Everything handled, the right way</h2>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>Payroll, run for you</h3>
              <ul>
                <li>Every pay cycle processed end to end</li>
                <li>Federal, state, and local tax filings</li>
                <li>W-2s and year-end handled</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Healthcare compliance</h3>
              <ul>
                <li>Shift differentials and overtime</li>
                <li>Licensing and credentialing tracked</li>
                <li>Compliance kept current</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>A team that knows healthcare</h3>
              <ul>
                <li>A dedicated contact</li>
                <li>Experience with clinical staffing</li>
                <li>Proactive support for your needs</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle healthcare payroll complexity?</h3>
              <p>Yes. We handle shift differentials, varying schedules, and healthcare-specific compliance requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you run payroll nationwide?</h3>
              <p>Yes. We run payroll for healthcare organizations in all 50 states.</p>
            </div>
            <div className="faq-item">
              <h3>Is this payroll software or a service?</h3>
              <p>A fully managed service. We run payroll, taxes, and filings for you, not one more login to manage.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
