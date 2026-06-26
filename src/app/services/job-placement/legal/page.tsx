import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Legal Job Placement Services | Business Executive Group',
  description: 'Legal hiring services. Fill attorney, paralegal, and counsel roles faster and at lower cost than commission-based recruiters.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/legal',
  },
};

export default function PlacementLegalPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/legal.svg"
      eyebrow="Job Placement · Legal"
      title="Fill your open legal roles faster."
      description="Finding the right attorney or paralegal is not a numbers game. We source, screen, and shortlist qualified legal talent for your firm, backed by a 45-day replacement guarantee and milestone-based pricing."
      calendlyLink={getCalendlyLink('placement-legal')}
      heroStats={[
        { value: '2-3x', label: 'Faster than traditional recruiting' },
        { value: '45-day', label: 'Replacement guarantee' },
        { value: 'Specialized', label: 'Legal talent sourcing' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Legal placement questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What legal roles do you place?</h3>
              <p>Attorneys, paralegals, legal counsel, associates, and other specialized legal roles.</p>
            </div>
            <div className="faq-item">
              <h3>How long does placement typically take?</h3>
              <p>2 to 3 times faster than the industry standard. We give you a realistic timeline on your discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What if the hire doesn't work out?</h3>
              <p>Every legal placement carries a 45-day replacement guarantee at no additional cost.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
