import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Hiring 101: Building Your First Team',
  description: 'How to hire your first employees as a founder. Recruiting strategy, offer structures, and building company culture early.',
  alternates: { canonical: 'https://beghr.com/blog/entrepreneur-resources/startup-hiring' },
};

export default function StartupHiringPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Blog · Business & Entrepreneur Resources</p>
          <h1>Startup Hiring 101: Building Your First Team</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Hiring your first employees is both exciting and terrifying. You're no longer just a founder—you're building a team, a culture, and a company. Your first hires set the tone for everything that comes next.</p>

        <p>Getting it right requires strategy, clarity, and speed. Here's how top founders build their first teams.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>Define Your First Hires</h2>

        <p>Don't hire for need—hire for leverage. Your first employees should be people who multiply your impact. A great engineer handles technical debt you can't. A great operations person builds the systems that let you scale.</p>

        <p>Avoid hiring specialists too early. You need generalists who can wear multiple hats and grow with the company.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>Speed Matters</h2>

        <p>Startup hiring is competitive. The best people have options. Move fast—from first conversation to offer in 1–2 weeks. Delayed decisions lose candidates.</p>

        <p>Have your equity plan, offer structure, and salary benchmarks ready. Remove friction so you can move at startup speed.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Build Your First Team. We Handle the Rest.</h3>
          <p style={{ marginBottom: '1.5rem' }}>From recruiting to equity strategy to compliance. Let's get your first team in place quickly.</p>
          <a href="https://calendly.com/tori-beghr?id=1" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony advises founders on early-stage hiring, equity structure, and building culture from day one.</p>
        </div>
      </section>
    </article>
  );
}
