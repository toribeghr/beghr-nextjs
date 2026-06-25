import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Legal | Business Executive Group',
  description: 'Fully managed payroll for law firm teams. We run payroll, taxes, and filings so your team never touches it. Book a 15-minute discovery call.',
};

const pageSlug = 'payroll-legal';
const calendlyLink = getCalendlyLink(pageSlug);

export default function PayrollLegalPage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Legal"
      title="Payroll for legal, fully handled."
      subtitle="Managed Payroll for Legal"
      description="Running payroll for a law firm team means partner draws, multi-state attorneys, and billable staff who cannot lose time to back-office errors. We run all of it as a fully managed service, so your team never touches payroll again."
      calendlyLink={calendlyLink}
      heroStats={[
        { value: '100%', label: 'Payroll handled for you' },
        { value: 'Nationwide', label: 'All 50 states' },
        { value: 'Fully', label: 'Managed, not software' },
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
          <div className="head center reveal">
            <p className="eyebrow">Proven Results</p>
            <h2>Results we deliver on the iSolved platform</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              BEG runs your payroll and HR on iSolved. Here is what that delivers.
            </p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>24 hrs → 3 hrs</h3>
              <p>One company cut weekly payroll from 24 hours to 3, including time and taxes, after moving to iSolved.</p>
            </article>
            <article className="card reveal">
              <h3>84 hours saved monthly</h3>
              <p>A 200-plus location operator saved 84 hours a month on payroll and cut onboarding by 8 hours per hire.</p>
            </article>
            <article className="card reveal">
              <h3>#1 rated platform</h3>
              <p>iSolved ranked first for payroll, benefits, onboarding, and time in the 2024-2025 Sapient Insights midmarket survey.</p>
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
              <h3>Is this payroll software or a service?</h3>
              <p>A fully managed service. We run payroll, taxes, and filings for you, not one more login to manage.</p>
            </div>
            <div className="faq-item">
              <h3>Can you handle Legal payroll complexity?</h3>
              <p>Yes. We handle partner draws, multi-state attorneys, and billable staff who cannot lose time to back-office errors, and we keep you compliant as rules change.</p>
            </div>
            <div className="faq-item">
              <h3>Do you run payroll nationwide?</h3>
              <p>Yes. We run payroll for businesses in all 50 states.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
