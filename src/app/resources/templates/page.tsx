import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TEMPLATE_CATEGORIES,
  getTemplatesByCategory,
} from '@/lib/templates';

const TITLE = 'HR Compliance Templates | Fillable & Free | BEG';
const DESC =
  'Fillable HR compliance templates for hiring, payroll, policy, and termination. Enter your details and download a ready-to-use document, free from Business Executive Group.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://www.beghr.com/resources/templates' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://www.beghr.com/resources/templates',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function TemplatesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Templates', item: 'https://www.beghr.com/resources/templates' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Templates</p>
            <h1>HR compliance templates you can fill in and download</h1>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '1.05rem',
                lineHeight: '1.75',
                color: '#555555',
                maxWidth: '640px',
                margin: '1rem auto 0',
                textAlign: 'center',
              }}
            >
              Pick a template, enter your details, and download a ready-to-use document. Built for
              employers who need compliant paperwork without the guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          {TEMPLATE_CATEGORIES.map((category) => {
            const items = getTemplatesByCategory(category);
            return (
              <div key={category} style={{ marginBottom: '3rem' }}>
                <div className="head reveal" style={{ marginBottom: '1.5rem' }}>
                  <p className="eyebrow">{category}</p>
                </div>
                {items.length > 0 ? (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.5rem',
                    }}
                  >
                    {items.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/resources/templates/${t.slug}`}
                        className="card-link"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="tag">{t.docType.toUpperCase()}</span>
                        <h3>{t.title}</h3>
                        <p style={{ color: '#555' }}>{t.description}</p>
                        <span style={{ color: 'var(--gold-deep)', fontWeight: 600, fontSize: '0.9rem' }}>
                          Fill &amp; download →
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#888', fontSize: '0.95rem' }}>More templates coming soon.</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/*
        Route-level exclusion: the templates hub intentionally does NOT render the sitewide
        "Get Instant Pricing" CTA banner, matching the /resources/templates/[slug] detail pages.
        The PricingCta component is unchanged and still renders on every other page and in the
        header nav.
      */}
    </>
  );
}
