import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HCM Software & HR Tech | BEG Blog',
  description: 'iSolved features, HR automation, and software comparisons for growing businesses.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-software' },
};

export default function BlogHcmPage() {
  return (
    <section className="hero">
      <div className="container" style={{ maxWidth: '840px' }}>
        <p className="eyebrow">Blog · HCM Software</p>
        <h1>HCM Software &amp; HR Tech</h1>
        <p className="lede" style={{ margin: '18px 0 28px' }}>Posts coming soon. Check back for iSolved guides, HR automation tips, and software comparisons.</p>
      </div>
    </section>
  );
}
