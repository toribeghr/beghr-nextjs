import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Skilled Trades Recruiters in San Diego | BEG',
  description: 'Skilled Trades placement in San Diego. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/trades/san-diego' },
  openGraph: { title: 'Skilled Trades Recruiters in San Diego | BEG', description: 'Skilled Trades placement in San Diego in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/trades/san-diego', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Skilled Trades Recruiters in San Diego | BEG', description: 'Skilled Trades placement in San Diego in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-trades-san-diego');

export default function PlacementTradesSandiegoPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Skilled Trades · San Diego"
      title="That open skilled trades role in San Diego is costing you every week."
      description="San Diego is a biotech, defense, and healthcare hub where specialized candidates field multiple offers. We source passive skilled trades candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The San Diego Talent Market</p>
            <h2>Why skilled trades roles are hard to fill in San Diego</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            San Diego sits in the West and is a biotech, defense, and healthcare hub where specialized candidates field multiple offers. The strongest skilled trades candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive skilled trades talent in San Diego and the surrounding CA market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that San Diego seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Overtime to cover one unfilled trades position costs $3,000-$5,000 per week at 1.5x base pay rates. At 12 weeks, that is $36,000-$60,000 in excess labor cost - before counting missed production quotas, reduced throughput, and equipment underutilization. A 23-35 day search eliminates the bulk of that exposure.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Licensed and certified tradespeople - electricians, HVAC techs, welders, machinists - are in short supply and high demand. When a certified tradesperson becomes available, multiple employers reach out immediately. A reactive search that waits for applications will consistently miss the most qualified candidates.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Keep Exploring</p>
            <h2>Skilled Trades placement near San Diego</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/trades" style={{ color: '#000000', fontWeight: 600 }}>skilled trades placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/trades/los-angeles" style={{ color: '#000000', fontWeight: 600 }}>Los Angeles</Link>.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do you place skilled trades candidates in San Diego?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent skilled trades searches in San Diego and across California, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
