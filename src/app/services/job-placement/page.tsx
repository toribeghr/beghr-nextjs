import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Job Placement Services Powered by iSolved | Business Executive Group',
  description: 'BEG Job Placement Services. Fill specialized roles 2-3x faster than industry standard. Milestone pricing, 45-day replacement guarantee.',
};

const pageSlug = 'job-placement';
const calendlyLink = getCalendlyLink(pageSlug);

export default function JobPlacementPage() {
  return (
    <ServicePage
      eyebrow="Job Placement Services · Powered by iSolved"
      title="Fill the role that has been open too long."
      subtitle="Job Placement"
      description="How long has that seat sat empty, and what is it costing you every week it stays that way? We source, screen, and shortlist the right people for your specialized and hard-to-fill roles, so you stop losing time and revenue to an empty chair."
      calendlyLink={calendlyLink}
      heroStats={[
        { value: '2-3x', label: 'Faster than industry' },
        { value: '45-day', label: 'Replacement guarantee' },
        { value: 'Milestone', label: 'Pricing, not commissions' },
      ]}
    >
      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Industries We Place For</p>
            <h2>Specialized recruiting, tuned to your field</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              Every industry hires differently. Pick yours to see how we fill your hardest roles.
            </p>
          </div>
          <div className="cards">
            <Link href="/services/placement-legal" className="card-link reveal">
              <span className="tag">Legal</span>
              <h3>Legal & Attorney</h3>
              <p>Fill open attorney, paralegal, and counsel seats without the contingency-fee gamble.</p>
            </Link>
            <Link href="/services/placement-healthcare" className="card-link reveal">
              <span className="tag">Healthcare</span>
              <h3>Healthcare & Nursing</h3>
              <p>Clinical and nursing talent placed before burnout sets in.</p>
            </Link>
            <Link href="/services/placement-finance" className="card-link reveal">
              <span className="tag">Finance</span>
              <h3>Finance & Accounting</h3>
              <p>Controllers, accountants, and analysts, including CPA-credentialed roles.</p>
            </Link>
            <Link href="/services/placement-technology" className="card-link reveal">
              <span className="tag">Technology</span>
              <h3>IT & Technology</h3>
              <p>Software, data, and IT roles filled before your roadmap slips.</p>
            </Link>
            <Link href="/services/placement-engineering" className="card-link reveal">
              <span className="tag">Engineering</span>
              <h3>Engineering</h3>
              <p>Qualified engineers sourced so your projects keep moving.</p>
            </Link>
            <Link href="/services/placement-trades" className="card-link reveal">
              <span className="tag">Trades</span>
              <h3>Skilled Trades & Manufacturing</h3>
              <p>Production and skilled-trade talent to keep your line running.</p>
            </Link>
            <Link href="/services/placement-executive" className="card-link reveal">
              <span className="tag">Executive</span>
              <h3>Executive & Director+</h3>
              <p>Focused, confidential search for director and above leadership.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Why BEG Job Placement</p>
            <h2>A recruiting partner that does the heavy lifting</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              Finding the right person with the right skills and culture fit is no easy task.
            </p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>A dedicated specialist</h3>
              <ul>
                <li>One Placement Specialist owns your search</li>
                <li>Weekly calibration calls to stay on target</li>
                <li>Sourcing, pre-screening, and shortlisting done for you</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Faster, at lower cost</h3>
              <ul>
                <li>Candidates placed 2 to 3 times faster</li>
                <li>A fraction of the cost of commission-based recruiters</li>
                <li>Milestone-based, tiered pricing tied to real progress</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Lower risk hiring</h3>
              <ul>
                <li>45-day replacement guarantee on every placement</li>
                <li>Candidates vetted against your must-have requirements</li>
                <li>An established, relationship-managed candidate pool</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From open role to the right hire</h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <h4>Book a call</h4>
              <p>We learn the role, the must-haves, and what it is costing you to leave it open.</p>
            </div>
            <div className="step reveal">
              <h4>We build the search</h4>
              <p>Your specialist sources and pre-screens against your exact criteria.</p>
            </div>
            <div className="step reveal">
              <h4>You review shortlists</h4>
              <p>Only qualified, vetted candidates reach your desk, with weekly calibration.</p>
            </div>
            <div className="step reveal">
              <h4>You hire with confidence</h4>
              <p>Backed by a 45-day replacement guarantee on your placement.</p>
            </div>
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
              <h3>What kinds of roles do you place?</h3>
              <p>Specialized, hard-to-fill roles across legal, healthcare, finance and accounting, technology, engineering, skilled trades and manufacturing, and executive search.</p>
            </div>
            <div className="faq-item">
              <h3>How fast can you fill a role?</h3>
              <p>2 to 3 times faster than the industry standard. On your call we give you a realistic timeline for your specific role.</p>
            </div>
            <div className="faq-item">
              <h3>How is pricing structured?</h3>
              <p>Milestone-based and tied to real progress, a fraction of the cost of commission-based recruiters.</p>
            </div>
            <div className="faq-item">
              <h3>What if the hire does not work out?</h3>
              <p>Every placement carries a 45-day replacement guarantee.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
