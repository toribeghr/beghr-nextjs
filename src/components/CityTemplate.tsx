import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';
import { jpIndustries, jpMetros, jpMetroSlugs } from '@/lib/jpGridData';
import { legalWageByMetro, LEGAL_NATIONAL, LEGAL_WAGE_ASOF, LEGAL_WAGE_SOURCE, type LegalWage } from '@/lib/legalWageData';
import { healthcareWageByMetro, HEALTHCARE_NATIONAL } from '@/lib/healthcareWageData';
import { financeWageByMetro, FINANCE_NATIONAL } from '@/lib/financeWageData';
import { accountingCpaWageByMetro, ACCOUNTING_CPA_NATIONAL } from '@/lib/accounting-cpaWageData';
import { technologyWageByMetro, TECHNOLOGY_NATIONAL } from '@/lib/technologyWageData';
import { cybersecurityWageByMetro, CYBERSECURITY_NATIONAL } from '@/lib/cybersecurityWageData';
import { engineeringWageByMetro, ENGINEERING_NATIONAL } from '@/lib/engineeringWageData';
import { architectureWageByMetro, ARCHITECTURE_NATIONAL } from '@/lib/architectureWageData';
import { salesWageByMetro, SALES_NATIONAL } from '@/lib/salesWageData';
import { marketingWageByMetro, MARKETING_NATIONAL } from '@/lib/marketingWageData';
import { hrWageByMetro, HR_NATIONAL } from '@/lib/hrWageData';
import { executiveWageByMetro, EXECUTIVE_NATIONAL } from '@/lib/executiveWageData';
import { manufacturingWageByMetro, MANUFACTURING_NATIONAL } from '@/lib/manufacturingWageData';
import { constructionManagementWageByMetro, CONSTRUCTION_MANAGEMENT_NATIONAL } from '@/lib/construction-managementWageData';
import { tradesWageByMetro, TRADES_NATIONAL } from '@/lib/tradesWageData';
import { bankingWageByMetro, BANKING_NATIONAL } from '@/lib/bankingWageData';
import { insuranceWageByMetro, INSURANCE_NATIONAL } from '@/lib/insuranceWageData';
import { supplyChainWageByMetro, SUPPLY_CHAIN_NATIONAL } from '@/lib/supply-chainWageData';
import { realEstateWageByMetro, REAL_ESTATE_NATIONAL } from '@/lib/real-estateWageData';
import { hospitalityWageByMetro, HOSPITALITY_NATIONAL } from '@/lib/hospitalityWageData';
import { nonprofitWageByMetro, NONPROFIT_NATIONAL } from '@/lib/nonprofitWageData';
import { dentalWageByMetro, DENTAL_NATIONAL } from '@/lib/dentalWageData';
import { veterinaryWageByMetro, VETERINARY_NATIONAL } from '@/lib/veterinaryWageData';
import { biotechWageByMetro, BIOTECH_NATIONAL } from '@/lib/biotechWageData';
import { energyWageByMetro, ENERGY_NATIONAL } from '@/lib/energyWageData';
import { governmentWageByMetro, GOVERNMENT_NATIONAL } from '@/lib/governmentWageData';

// Real BLS OEWS compensation data, per industry. Add a row here as each industry is pulled.
// QUALITY GATE: only industry+metro pairs present here render an INDEXABLE city page. Every other
// city page is noindexed (thin, no local data) until real data lands. See CITY_DEPTH_PROCESS.md.
const WAGE_SETS: Record<string, { byMetro: Record<string, LegalWage>; national: { mean: number | null }; role: string }> = {
    'finance': { byMetro: financeWageByMetro, national: FINANCE_NATIONAL, role: 'financial analysts' },
    'accounting-cpa': { byMetro: accountingCpaWageByMetro, national: ACCOUNTING_CPA_NATIONAL, role: 'accountants' },
    'technology': { byMetro: technologyWageByMetro, national: TECHNOLOGY_NATIONAL, role: 'software engineers' },
    'cybersecurity': { byMetro: cybersecurityWageByMetro, national: CYBERSECURITY_NATIONAL, role: 'security analysts' },
    'engineering': { byMetro: engineeringWageByMetro, national: ENGINEERING_NATIONAL, role: 'engineers' },
    'architecture': { byMetro: architectureWageByMetro, national: ARCHITECTURE_NATIONAL, role: 'architects' },
    'sales': { byMetro: salesWageByMetro, national: SALES_NATIONAL, role: 'sales leaders' },
    'marketing': { byMetro: marketingWageByMetro, national: MARKETING_NATIONAL, role: 'marketing leaders' },
    'hr': { byMetro: hrWageByMetro, national: HR_NATIONAL, role: 'HR leaders' },
    'executive': { byMetro: executiveWageByMetro, national: EXECUTIVE_NATIONAL, role: 'executives' },
    'manufacturing': { byMetro: manufacturingWageByMetro, national: MANUFACTURING_NATIONAL, role: 'plant leaders' },
    'construction-management': { byMetro: constructionManagementWageByMetro, national: CONSTRUCTION_MANAGEMENT_NATIONAL, role: 'construction managers' },
    'trades': { byMetro: tradesWageByMetro, national: TRADES_NATIONAL, role: 'trade supervisors' },
    'banking': { byMetro: bankingWageByMetro, national: BANKING_NATIONAL, role: 'banking leaders' },
    'insurance': { byMetro: insuranceWageByMetro, national: INSURANCE_NATIONAL, role: 'underwriters' },
    'supply-chain': { byMetro: supplyChainWageByMetro, national: SUPPLY_CHAIN_NATIONAL, role: 'supply chain professionals' },
    'real-estate': { byMetro: realEstateWageByMetro, national: REAL_ESTATE_NATIONAL, role: 'real estate managers' },
    'hospitality': { byMetro: hospitalityWageByMetro, national: HOSPITALITY_NATIONAL, role: 'hospitality leaders' },
    'nonprofit': { byMetro: nonprofitWageByMetro, national: NONPROFIT_NATIONAL, role: 'nonprofit leaders' },
    'dental': { byMetro: dentalWageByMetro, national: DENTAL_NATIONAL, role: 'dentists' },
    'veterinary': { byMetro: veterinaryWageByMetro, national: VETERINARY_NATIONAL, role: 'veterinarians' },
    'biotech': { byMetro: biotechWageByMetro, national: BIOTECH_NATIONAL, role: 'life sciences professionals' },
    'energy': { byMetro: energyWageByMetro, national: ENERGY_NATIONAL, role: 'energy professionals' },
    'government': { byMetro: governmentWageByMetro, national: GOVERNMENT_NATIONAL, role: 'program professionals' },
  legal: { byMetro: legalWageByMetro, national: LEGAL_NATIONAL, role: 'attorneys' },
  healthcare: { byMetro: healthcareWageByMetro, national: HEALTHCARE_NATIONAL, role: 'registered nurses' },
};

export function cityHasWage(industrySlug: string, citySlug: string): boolean {
  const wset = WAGE_SETS[industrySlug];
  const wage = wset ? wset.byMetro[citySlug] : undefined;
  return !!(wage && wage.mean != null);
}

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
    robots: cityHasWage(industrySlug, citySlug) ? undefined : { index: false, follow: true },
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

  const wset = WAGE_SETS[industrySlug];
  const wage = wset ? wset.byMetro[citySlug] : undefined;
  const hasWage = !!(wage && wage.mean != null);
  const roleLabel = wset ? wset.role : `${lo} professionals`;
  const natMean = wset ? wset.national.mean : null;
  const fmt = (v: number | null | undefined) => (v == null ? null : v.toLocaleString('en-US'));
  const vsNat = hasWage && wage!.mean != null && natMean
    ? Math.round((wage!.mean / natMean - 1) * 100)
    : null;

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

  return (
    <ServicePage
      eyebrow={`Job Placement · ${name} · ${metro.name}`}
      title={`That open ${lo} role in ${metro.name} is costing you every week.`}
      description={`${metro.name} is ${metro.blurb}. We source passive ${lo} candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms.`}
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry={industrySlug} />}
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

      {hasWage && (
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">{metro.name} Compensation Data</p>
              <h2>What {roleLabel} earn in {metro.name}</h2>
            </div>
            <p className="reveal" style={{ textAlign: 'center', color: '#444444', marginTop: '0.9rem', lineHeight: 1.7 }}>
              {`The ${metro.name} area employs roughly ${fmt(wage!.employment) ?? 'thousands of'} ${roleLabel}. Getting the offer right against the local pay band is the difference between a hire that closes and a search that stalls.`}
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', margin: '1.9rem 0 1.25rem' }}>
              {[
                { label: 'Mean salary', v: wage!.mean },
                { label: 'Median salary', v: wage!.median },
                { label: '10th percentile', v: wage!.p10 },
                { label: '90th percentile', v: wage!.p90 },
              ].filter((x) => x.v != null).map((x) => (
                <div key={x.label} style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.1rem 1rem', textAlign: 'center', background: '#fff' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000000' }}>{`$${fmt(x.v)}`}</div>
                  <div style={{ fontSize: '0.8rem', color: '#666666', marginTop: '0.25rem', letterSpacing: '0.02em' }}>{x.label}</div>
                </div>
              ))}
            </div>
            {vsNat != null && (
              <p className="reveal" style={{ textAlign: 'center', color: '#444444', lineHeight: 1.7 }}>
                {`At a $${fmt(wage!.mean)} mean, ${roleLabel} pay in ${metro.name} runs about ${Math.abs(vsNat)}% ${vsNat >= 0 ? 'above' : 'below'} the national mean of $${fmt(natMean)}. We factor the local band into every search so your offer is competitive on day one, not after two counteroffers.`}
              </p>
            )}
            <p className="reveal" style={{ textAlign: 'center', fontSize: '0.78rem', color: '#999999', marginTop: '1rem' }}>
              {`Source: ${LEGAL_WAGE_SOURCE}, ${LEGAL_WAGE_ASOF}.`}
            </p>
          </div>
        </section>
      )}

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
