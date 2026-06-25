import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software Powered by iSolved | Business Executive Group',
  description: 'BEG HCM Software powered by iSolved. Payroll, HR, time, and benefits on one platform, set up and supported by BEG.',
  canonical: 'https://beghr.com/services/hcm-software',
};

const pageSlug = 'hcm-software';
const calendlyLink = getCalendlyLink(pageSlug);

export default function HCMSoftwarePage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Powered by iSolved"
      title="Payroll, HR, time, and benefits on one platform."
      subtitle="HCM Software"
      description="Prefer to keep HR in-house? Our HCM Software, powered by iSolved, puts everything on one system, set up and supported by BEG, so your team is never stuck stitching tools together or going it alone."
      calendlyLink={calendlyLink}
      heroStats={[
        { value: 'One', label: 'Platform for all HR' },
        { value: '7M+', label: 'Employees on iSolved' },
        { value: 'BEG', label: 'Setup & support included' },
      ]}
    >
      <section className="section section--soft" id="included">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Everything in one connected system</h2>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>One connected system</h3>
              <ul>
                <li>Payroll, HR, time, and benefits in one place</li>
                <li>One login, one source of truth</li>
                <li>Employee self-service built in</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Set up the right way</h3>
              <ul>
                <li>Guided implementation and data migration</li>
                <li>Configured to your workflows</li>
                <li>Powered by iSolved, used by 7M+ employees</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Supported by BEG</h3>
              <ul>
                <li>A real contact, not a ticket queue</li>
                <li>Training for your team</li>
                <li>Help when the rules change</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">HCM Software by Industry</p>
            <h2>One platform, configured for your industry</h2>
          </div>
          <div className="cards">
            <Link href="/services/hcm-legal" className="card-link reveal">
              <span className="tag">Legal</span>
              <h3>Law Firms</h3>
              <p>Partner draws, multi-state attorneys, billable staff.</p>
            </Link>
            <Link href="/services/hcm-healthcare" className="card-link reveal">
              <span className="tag">Healthcare</span>
              <h3>Healthcare</h3>
              <p>Shift differentials, 24/7 schedules, high turnover.</p>
            </Link>
            <Link href="/services/hcm-finance" className="card-link reveal">
              <span className="tag">Finance</span>
              <h3>Finance & Accounting</h3>
              <p>Bonus and commission structures, zero error tolerance.</p>
            </Link>
            <Link href="/services/hcm-technology" className="card-link reveal">
              <span className="tag">Technology</span>
              <h3>IT & Technology</h3>
              <p>Equity, contractors, multi-state teams.</p>
            </Link>
            <Link href="/services/hcm-engineering" className="card-link reveal">
              <span className="tag">Engineering</span>
              <h3>Engineering</h3>
              <p>Prevailing wage, certified payroll, project labor.</p>
            </Link>
            <Link href="/services/hcm-trades" className="card-link reveal">
              <span className="tag">Trades</span>
              <h3>Skilled Trades & Mfg</h3>
              <p>Union rules, certified payroll, multiple job sites.</p>
            </Link>
            <Link href="/services/hcm-executive" className="card-link reveal">
              <span className="tag">Executive</span>
              <h3>Executive & Leadership</h3>
              <p>Complex, deferred comp handled discreetly.</p>
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
              <h3>What is included in the HCM platform?</h3>
              <p>Payroll, HR, time, and benefits on one system, powered by iSolved.</p>
            </div>
            <div className="faq-item">
              <h3>Do we manage it ourselves?</h3>
              <p>You run it in-house, and BEG sets it up and supports you, so you are never on your own.</p>
            </div>
            <div className="faq-item">
              <h3>Can you tailor it to our industry?</h3>
              <p>Yes. Pick your industry above and we configure the platform for how your team actually works.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
