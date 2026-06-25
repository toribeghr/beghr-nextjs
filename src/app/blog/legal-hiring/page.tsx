import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Hiring & Recruiting | BEG Blog',
  description: 'Attorney market trends, law firm hiring strategies, and placement insights.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring' },
};

export default function BlogLegalHiringPage() {
  return (
    <section className="hero">
      <div className="container" style={{ maxWidth: '840px' }}>
        <p className="eyebrow">Blog · Legal Hiring</p>
        <h1>Legal Hiring &amp; Recruiting</h1>
        <p className="lede" style={{ margin: '18px 0 28px' }}>Posts coming soon. Check back for attorney market trends and law firm hiring insights.</p>
      </div>
    </section>
  );
}
