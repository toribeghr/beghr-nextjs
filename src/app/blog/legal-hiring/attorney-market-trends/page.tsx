import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: '2026 Attorney Market Trends: What Law Firms Need to Know',
  description: 'Law school enrollment trends, lateral market dynamics, and what it means for law firm hiring in 2026.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring/attorney-market-trends' },
};

export default function AttorneyMarketTrendsPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
          <p className="eyebrow">Blog · Legal Hiring & Recruiting</p>
          <h1>2026 Attorney Market Trends: What Law Firms Need to Know</h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Published:</strong> June 25, 2026</span>
          </div>
            </div>
            <HeroImageBox src="/assets/hero-images/trends.svg" alt="Attorney Market Trends" />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The attorney market is tightening. Law school enrollment is down 30% since 2010. The best lateral candidates aren't job hunting—they're passive and choosing between multiple offers. Traditional hiring timelines (60–90 days) no longer work.</p>

        <p>Law firms that understand 2026 market dynamics will hire fast. Those that don't will lose talent to competitors. Here's what's changing.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>The Supply Side: Fewer Attorneys</h2>

        <p>Law school enrollment is down 30% since 2010. That means fewer junior attorneys entering the market. Graduating law students have choice. They're picking the best firms, not the first offers.</p>

        <p>If your firm's hiring process is slow, you lose candidates to faster competitors.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #c41e3a', paddingBottom: '0.5rem' }}>The Lateral Market: Passive Candidates Dominate</h2>

        <p>The best attorneys aren't on job boards. They're at other firms, doing good work, and open to moving if the right opportunity comes. Reaching them requires direct recruiting, not job posting.</p>

        <p>Firms that win laterals are those that source actively, move fast, and make compelling offers. Firms that post and wait lose to competitors who proactively recruit.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Hire in 23–35 Days. Compete to Win.</h3>
          <p style={{ marginBottom: '1.5rem' }}>In today's attorney market, speed and sourcing strategy matter most. We source passive candidates and move fast.</p>
          <a href="https://calendly.com/anthony-weplacelawyers/legal-hiring-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Discovery Call</a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #c41e3a', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p>Anthony analyzes legal market trends and advises law firms on hiring strategy, sourcing, and placement.</p>
        </div>
      </section>
    </article>
  );
}
