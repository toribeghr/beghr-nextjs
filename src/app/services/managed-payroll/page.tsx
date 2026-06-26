import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll Services | $25-$35 PEPM | Outsource Payroll | BEG',
  description: 'Fully managed payroll at $25-$35 per employee per month. All-inclusive: taxes, filings, and compliance. Works in your existing system. No migration.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll',
  },
};

const pageSlug = 'managed-payroll';
const calendlyLink = getCalendlyLink(pageSlug);

export default function ManagedPayrollPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.svg"
      eyebrow="Managed Payroll"
      title="Hand off payroll. For good."
      description="Fully managed payroll for businesses nationwide. We run payroll, taxes, and filings so your team never touches it again. One less thing to worry about, one more thing that works."
      calendlyLink={calendlyLink}
      heroStats={[
        { value: '100%', label: 'Payroll handled for you' },
        { value: 'All 50 States', label: 'Nationwide coverage' },
        { value: 'Fully Managed', label: 'Not software, not hassle' },
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
                <li>W-2s, 1099s, and year-end handled</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Taxes & compliance, handled</h3>
              <ul>
                <li>Deposits and filings done on time</li>
                <li>New-hire reporting and pay changes</li>
                <li>Compliance kept current as rules change</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>A team that answers</h3>
              <ul>
                <li>A dedicated contact, not a call center</li>
                <li>Clean migration from your current setup</li>
                <li>Proactive checks before problems hit</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head reveal">
            <p className="eyebrow">By Industry</p>
            <h2>Payroll solutions built for your business</h2>
          </div>
          <div className="cards">
            <Link href="/services/managed-payroll/legal" className="card-link reveal">
              <h3>Legal</h3>
              <p>Partner draws, multi-state attorneys, billable staff.</p>
            </Link>
            <Link href="/services/managed-payroll/healthcare" className="card-link reveal">
              <h3>Healthcare</h3>
              <p>Clinical staff, providers, compliance on time.</p>
            </Link>
            <Link href="/services/managed-payroll/finance" className="card-link reveal">
              <h3>Finance</h3>
              <p>Equity compensation, bonus structures, tax planning.</p>
            </Link>
            <Link href="/services/managed-payroll/technology" className="card-link reveal">
              <h3>Technology</h3>
              <p>Remote teams, stock options, rapid scaling.</p>
            </Link>
            <Link href="/services/managed-payroll/engineering" className="card-link reveal">
              <h3>Engineering</h3>
              <p>Specialized roles, benefits complexity, retention.</p>
            </Link>
            <Link href="/services/managed-payroll/trades" className="card-link reveal">
              <h3>Trades</h3>
              <p>Project payroll, workers comp, compliance.</p>
            </Link>
            <Link href="/services/managed-payroll/executive" className="card-link reveal">
              <h3>Executive</h3>
              <p>C-suite, deferred comp, executive benefits.</p>
            </Link>
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
              <h3>Is this payroll software or a service?</h3>
              <p>A fully managed service. We run payroll, taxes, and filings for you, not one more login to manage.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to switch?</h3>
              <p>Onboarding is on us. We migrate your data, set everything up, and run a clean first cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if something goes wrong with a pay run?</h3>
              <p>You call a real person on our team who fixes it. No call center, no ticket queue.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle payroll nationwide?</h3>
              <p>Yes. We run payroll for businesses in all 50 states.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
