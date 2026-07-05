import PricingCta from '@/components/pricing/PricingCta';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';
import {
  competitorBySlug,
  competitorSlugs,
  type PayrollCompetitor,
} from '@/lib/payrollCompetitorData';

// ---------------------------------------------------------------------------
// ISR config -- pre-build top slugs, revalidate daily, allow others on demand
// ---------------------------------------------------------------------------
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return competitorSlugs.map((slug) => ({ competitor: slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export function generateMetadata({
  params,
}: {
  params: { competitor: string };
}): Metadata {
  const c = competitorBySlug[params.competitor];
  if (!c) return { title: 'Managed Payroll | BEG' };

  return {
    title: c.titleTag,
    description: c.metaDescription,
    alternates: {
      canonical: `https://www.beghr.com/services/managed-payroll/${c.slug}`,
    },
    openGraph: {
      title: c.titleTag,
      description: c.metaDescription,
      url: `https://www.beghr.com/services/managed-payroll/${c.slug}`,
      siteName: 'Business Executive Group',
      images: [
        {
          url: 'https://www.beghr.com/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Business Executive Group',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: c.titleTag,
      description: c.metaDescription,
      images: ['https://www.beghr.com/assets/og-image.png'],
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
const GOLD = '#ECAC60';

export default function PayrollCompetitorPage({
  params,
}: {
  params: { competitor: string };
}) {
  const c: PayrollCompetitor | undefined = competitorBySlug[params.competitor];
  if (!c) notFound();

  const CALENDLY = getCalendlyLink(`payroll-vs-${c.slug}`);

  return (
    <ServicePage
      heroVideoId={c.videoId}
      imageSrc="/assets/hero-images/payroll.webp"
      showHeroImage={true}
      eyebrow={`Managed Payroll vs. ${c.name}`}
      title={c.headline}
      description={c.subHeadline}
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'PEPM, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >
      {/* PAIN ----------------------------------------------------------------*/}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Buyers Leave {c.name}</p>
            <h2>Three reasons companies switch to BEG managed payroll.</h2>
          </div>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {c.pains.map((pain, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderTop: `4px solid ${GOLD}`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: '900',
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                    opacity: 0.9,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#444444', lineHeight: '1.65' }}>
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE ---------------------------------------------------*/}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Side by Side</p>
            <h2>BEG managed payroll vs. {c.name}</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: GOLD }}>
                  <th
                    style={{
                      padding: '14px 16px',
                      textAlign: 'left',
                      fontWeight: 700,
                      minWidth: '160px',
                    }}
                  >
                    Factor
                  </th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>
                    BEG Managed Payroll
                  </th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>
                    {c.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.compRows.map(([factor, beg, competitor], i) => (
                  <tr
                    key={factor}
                    style={{
                      background: i % 2 === 0 ? '#f9f9f9' : '#ffffff',
                      borderBottom: '1px solid #e5e5e5',
                    }}
                  >
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>
                      {factor}
                    </td>
                    <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>
                      {beg}
                    </td>
                    <td style={{ padding: '13px 16px', color: '#555555' }}>{competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OFFER + THREE BONUSES ----------------------------------------------*/}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The BEG Difference</p>
            <h2>Three things {c.name} does not offer at this price.</h2>
          </div>
          <div
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}
          >
            {c.bonuses.map(({ badge, title, objection, body }) => (
              <div
                key={badge}
                className="beg-grid-bonus"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '1.75rem',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: GOLD,
                      color: '#000000',
                      fontWeight: '700',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      marginBottom: '0.6rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {badge}
                  </span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>
                    {title}
                  </strong>
                </div>
                <div>
                  <p
                    style={{
                      margin: '0 0 0.6rem',
                      fontSize: '0.82rem',
                      color: '#888888',
                      fontStyle: 'italic',
                    }}
                  >
                    {objection}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY + CTA -----------------------------------------------------*/}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: GOLD }}>
                The Math
              </p>
              <h2
                style={{
                  color: '#ffffff',
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  marginBottom: '1rem',
                }}
              >
                Every month you stay on {c.name} is a month you overpay.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                BEG managed payroll is $25-$45 per employee per month, all-inclusive. One flat rate that covers every cycle, every
                filing, every year-end form.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: GOLD }}>
                Onboarding Capacity
              </p>
              <h2
                style={{
                  color: '#ffffff',
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  marginBottom: '1rem',
                }}
              >
                BEG onboards 3 new payroll clients per month. Slots fill.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                To guarantee a flawless first payroll cycle, BEG limits new managed payroll onboards to
                3 per month. Get your quote this week to secure your slot in the next available
                onboarding cohort.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              We review your setup and send your exact monthly cost within 24 hours. No commitment
              required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ ----------------------------------------------------------------*/}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Common Questions</p>
            <h2>
              BEG managed payroll vs. {c.name}: frequently asked questions
            </h2>
          </div>
          <div className="faq reveal">
            {c.faqs.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES -------------------------------------------------*/}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Managed Payroll by Industry</p>
            <h2>Fully managed payroll built for how your industry runs.</h2>
          </div>
          <div className="cards reveal" style={{ marginTop: '2rem' }}>
            {c.relatedIndustries.map(({ href, label }) => (
              <Link key={href} href={href} className="card-link">
                <h3>{label}</h3>
                <p>
                  Industry-specific payroll compliance and processing, fully managed at $25-$45 PEPM.
                </p>
              </Link>
            ))}
            <Link
              href="/services/managed-payroll"
              className="card-link"
              style={{ borderTop: `3px solid ${GOLD}` }}
            >
              <h3>All Managed Payroll Services</h3>
              <p>View the full managed payroll hub: industries, states, pricing, and how it works.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEMA -------------------------------------------------------------*/}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: c.faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Managed Payroll Services vs ${c.name}`,
            description: c.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://www.beghr.com',
            },
            url: `https://www.beghr.com/services/managed-payroll/${c.slug}`,
            areaServed: 'United States',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: c.headline, item: `https://www.beghr.com/services/managed-payroll/${c.slug}` },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
