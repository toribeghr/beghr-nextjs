import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';
import { jpIndustries, jpMetros, jpMetroSlugs } from '@/lib/jpGridData';

const svcBase = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
};

export function cityExists(industrySlug: string, citySlug: string): boolean {
  return Boolean(jpIndustries[industrySlug]) && jpMetroSlugs.has(citySlug);
}

export function cityMeta(industrySlug: string, citySlug: string) {
  const ind = jpIndustries[industrySlug];
  const metro = jpMetros.find((m) => m.slug === citySlug);
  if (!ind || !metro) return null;
  const name = ind.name;
  const url = `https://www.beghr.com/services/job-placement/${industrySlug}/${citySlug}`;
  const title = `${name} Recruiters in ${metro.name} | BEG`;
  const description = `${name} placement in ${metro.name}. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.`;
  const ogDesc = `${name} placement in ${metro.name} in 23-35 days at roughly 50% less than contingency.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: ogDesc,
      url,
      siteName: 'Business Executive Group',
      images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description: ogDesc,
      images: ['https://www.beghr.com/assets/og-image.png'],
    },
  };
}

export default function CityTemplate({ industrySlug, citySlug }: { industrySlug: string; citySlug: string }) {
  const ind = jpIndustries[industrySlug];
  const metro = jpMetros.find((m) => m.slug === citySlug);
  if (!ind || !metro) return null;

  const name = ind.name;
  const lo = name.toLowerCase();
  const url = `https://www.beghr.com/services/job-placement/${industrySlug}/${citySlug}`;
  const CALENDLY = getCalendlyLink(`placement-${industrySlug}-${citySlug}`);

  const nearby = (metro.nearby || []).filter((s) => jpMetroSlugs.has(s)).slice(0, 3);

  const serviceSchema = {
    ...svcBase,
    serviceType: `${name} placement`,
    name: `${name} Placement in ${metro.name}`,
    areaServed: { '@type': 'City', name: metro.name },
    url,
    description: `Permanent ${lo} placement in ${metro.name} in 23-35 days at roughly 50% less than contingency.`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you place ${lo} candidates in ${metro.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. We run permanent ${lo} searches in ${metro.name} and across ${metro.state}, sourcing passive candidates directly. Average time to fill is 23-35 days.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from a staffing agency?',
        acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' },
      },
      {
        '@type': 'Question',
        name: 'What does it cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' },
      },
    ],
  };

  const jdDesc = `A weak posting quietly kills your pipeline. Paste your ${lo} job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.`;

  return (
    <ServicePage
      eyebrow={`Job Placement · ${name} · ${metro.name}`}
      title={`That open ${lo} role in ${metro.name} is costing you every week.`}
      description={`${metro.name} is ${metro.blurb}. We source passive ${lo} candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms.`}
      calendlyLink={CALENDLY}
      heroStats={ind.stats}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>{`${name} roles in ${metro.name} stay open because the best candidates are passive and rarely on job boards.`}</li>
              <li>{`BEG sources ${lo} talent in ${metro.name} directly and fills permanent roles in 23-35 days.`}</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The {metro.name} Talent Market</p>
            <h2>Why {lo} roles are hard to fill in {metro.name}</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            {`${metro.name} sits in the ${metro.region} and is ${metro.blurb}. The strongest ${lo} candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive ${lo} talent in ${metro.name} and the surrounding ${metro.stateAbbr} market directly, before they ever see a listing.`}
          </p>
        </div>
      </section>

      {/* JOB DESCRIPTION GRADER */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>{`Hiring ${name} in ${metro.name}? Grade your job description first.`}</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>{jdDesc}</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that {metro.name} seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>{ind.costLogic}</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>{ind.talentContext}</p>
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
            <h2>{name} placement near {metro.name}</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our{' '}
            <Link href={`/services/job-placement/${industrySlug}`} style={{ color: '#000000', fontWeight: 600 }}>{lo} placement service</Link>
            {nearby.length > 0 && (
              <>
                {', or explore nearby markets: '}
                {nearby.map((s, i) => {
                  const m = jpMetros.find((x) => x.slug === s);
                  return (
                    <span key={s}>
                      {i > 0 ? ', ' : ''}
                      <Link href={`/services/job-placement/${industrySlug}/${s}`} style={{ color: '#000000', fontWeight: 600 }}>{m ? m.name : s}</Link>
                    </span>
                  );
                })}
              </>
            )}
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </ServicePage>
  );
}
