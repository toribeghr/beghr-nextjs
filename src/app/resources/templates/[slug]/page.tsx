import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PricingCta from '@/components/pricing/PricingCta';
import TemplateGenerateForm from '@/components/TemplateGenerateForm';
import { getAllTemplateSlugs, getTemplateBySlug } from '@/lib/templates';

// Pre-render every template at build time; only known slugs are valid.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getTemplateBySlug(params.slug);
  if (!t) return { title: 'Template | BEG' };

  const title = t.seoTitle ?? `${t.title} Template | BEG`;
  const description = t.metaDescription ?? t.description;
  const url = `https://www.beghr.com/resources/templates/${t.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Business Executive Group',
      images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.beghr.com/assets/og-image.png'],
    },
  };
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const t = getTemplateBySlug(params.slug);
  if (!t) notFound();

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
              { '@type': 'ListItem', position: 4, name: t.title, item: `https://www.beghr.com/resources/templates/${t.slug}` },
            ],
          }),
        }}
      />

      {/* HERO + FORM */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Link
              href="/resources/templates"
              style={{ color: 'var(--gold-deep)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
            >
              ← All templates
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 520px)',
              gap: '2.5rem',
              alignItems: 'start',
            }}
            className="tpl-grid"
          >
            {/* Left: context */}
            <div>
              <p className="eyebrow">{t.category}</p>
              <h1 style={{ marginTop: '0.5rem' }}>{t.title}</h1>
              <p
                style={{
                  marginTop: '1rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.75',
                  color: '#555',
                }}
              >
                {t.description}
              </p>
              <ul
                style={{
                  marginTop: '1.5rem',
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  color: '#444',
                  fontSize: '0.95rem',
                }}
              >
                <li>• Fill in the fields on the right.</li>
                <li>• Download a ready-to-use {t.docType.toUpperCase()} instantly.</li>
                <li>• A work email is required — no personal inboxes.</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: '#888', lineHeight: 1.5 }}>
                This template is provided for general informational purposes and is not legal
                advice. Review with qualified counsel before use.
              </p>
            </div>

            {/* Right: fillable form */}
            <div>
              <TemplateGenerateForm
                slug={t.slug}
                title={t.title}
                docType={t.docType}
                fields={t.fields}
              />
            </div>
          </div>
        </div>
      </section>

      <PricingCta service="hr-outsourcing" />

      {/* Single-column stack on narrow viewports. */}
      <style
        dangerouslySetInnerHTML={{
          __html: '@media (max-width: 820px){.tpl-grid{grid-template-columns:1fr !important;}}',
        }}
      />
    </>
  );
}
