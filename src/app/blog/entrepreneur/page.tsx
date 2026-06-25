import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business & Entrepreneur Resources | BEG Blog',
  description: 'BEG network content, entrepreneur tips, and DFW business community updates.',
  alternates: { canonical: 'https://beghr.com/blog/entrepreneur' },
};

export default function BlogEntrepreneurPage() {
  return (
    <section className="hero">
      <div className="container" style={{ maxWidth: '840px' }}>
        <p className="eyebrow">Blog · Entrepreneur</p>
        <h1>Business &amp; Entrepreneur Resources</h1>
        <p className="lede" style={{ margin: '18px 0 28px' }}>Posts coming soon. Check back for DFW network updates and entrepreneur resources.</p>
      </div>
    </section>
  );
}
