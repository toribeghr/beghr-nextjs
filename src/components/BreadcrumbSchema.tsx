'use client';

import { usePathname } from 'next/navigation';

const SITE = 'https://www.beghr.com';

// Human labels for path segments. Anything not listed is title-cased from the slug.
const OVERRIDES: Record<string, string> = {
  'hcm-software': 'HCM Software',
  'job-placement': 'Job Placement',
  'managed-payroll': 'Managed Payroll',
  'case-studies': 'Case Studies',
  'privacy-policy': 'Privacy Policy',
  hcm: 'HCM',
  faq: 'FAQ',
  hr: 'HR',
  cpa: 'CPA',
  ai: 'AI',
  peo: 'PEO',
  pto: 'PTO',
  isolved: 'isolved',
};

const ACRONYMS = new Set(['hr', 'cpa', 'hcm', 'ai', 'faq', 'peo', 'pto', 'us', 'it', 'seo', 'roi']);

function label(seg: string): string {
  if (OVERRIDES[seg]) return OVERRIDES[seg];
  return seg
    .split('-')
    .map((w) => (ACRONYMS.has(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

// Emits BreadcrumbList JSON-LD derived from the current route. Rendered once in the
// root layout so every non-home page gets a valid breadcrumb trail with zero per-page work.
export default function BreadcrumbSchema() {
  const pathname = usePathname() || '/';
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs: { name: string; url: string }[] = [{ name: 'Home', url: `${SITE}/` }];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    crumbs.push({ name: label(seg), url: `${SITE}${acc}` });
  }

  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
