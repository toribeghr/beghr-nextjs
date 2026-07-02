import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Workforce Analytics Software | Instant Price Quote | BEG',
  description: 'Workforce analytics and HR reporting software for headcount, turnover, labor cost, and overtime trends. isolved dashboards on one platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/workforce-analytics-software' },
  openGraph: {
    title: 'Workforce Analytics Software | Instant Price Quote | BEG',
    description: 'Workforce analytics and HR reporting software for headcount, turnover, labor cost, and overtime trends. isolved dashboards on one platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/workforce-analytics-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Workforce Analytics Software | Instant Price Quote | BEG', description: 'Workforce analytics and HR reporting software for headcount, turnover, labor cost, and overtime trends. isolved dashboards on one platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'What does workforce analytics software do?',
    a: 'Workforce analytics software turns your HR, time, and payroll data into dashboards and reports on headcount, turnover, labor cost, and overtime. It lets leaders see trends and answer staffing and cost questions without exporting data and rebuilding spreadsheets each month.',
  },
  {
    q: 'What metrics can isolved report on?',
    a: 'isolved reports on headcount, turnover, labor cost, overtime trends, and other measures drawn from your HR, time, and payroll data. Because everything lives on one platform, the numbers come from the same source rather than from separate exports that have to be reconciled.',
  },
  {
    q: 'How does isolved deliver dashboards and reports?',
    a: 'isolved provides dashboards and reporting that read directly from your live HR, time, and payroll data. Leaders and managers can view trends and pull reports themselves, so workforce questions get answered in the platform instead of through a custom spreadsheet request.',
  },
  {
    q: 'Why does single-platform data matter for analytics?',
    a: 'Analytics is only as good as its data. Because isolved keeps HR, time, and payroll on one connected platform, reports draw from a single source instead of stitched-together exports. That means headcount, turnover, and labor cost numbers actually agree with payroll.',
  },
  {
    q: 'Why use BEG to implement workforce analytics?',
    a: 'BEG configures the dashboards and reports that matter to your leadership and makes sure your underlying data is clean enough to trust. You work with one BEG contact who knows your setup rather than filing tickets with a general support queue.',
  },
  {
    q: 'Do we need analytics if we already pull reports?',
    a: 'It depends on how you report today. If you rebuild spreadsheets from exports each month, connected analytics saves real time and reduces errors. If your needs are simple, basic reporting may be enough. BEG will give you an honest read rather than oversell it.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Workforce Analytics Software', item: 'https://www.beghr.com/services/hcm-software/workforce-analytics-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/workforce-analytics-software',
};

export default function WorkforceAnalyticsSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Workforce Analytics</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Workforce Analytics Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Headcount, turnover, labor cost, and overtime trends become clear when reporting reads from one source instead of stitched-together exports. Here is what to look for and how isolved plus BEG handles it.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good workforce analytics software turns HR, time, and payroll data into dashboards and reports on headcount, turnover, labor cost, and overtime, all drawn from one source. The isolved platform does this on a single connected platform so the numbers agree with payroll, and BEG configures the reports your leadership actually uses.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is workforce analytics software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Workforce analytics software, sometimes called HR reporting, turns the data you already collect into a clear view of your people and their cost. It pulls headcount, turnover, labor cost, overtime, and related measures into dashboards and reports that leaders and managers can read at a glance. The right tool answers staffing and cost questions in the moment instead of through a week of spreadsheet work.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Dashboards that surface the metrics leadership cares about, such as headcount, turnover, and labor cost. Trend views over time, not just a single snapshot. Self-service reporting so managers can answer their own questions. And, above all, a single data source, because analytics built on exports from separate systems will quietly disagree with payroll. Reporting is only as trustworthy as the data underneath it.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is decisions made on stale or conflicting numbers. When headcount comes from one system, turnover from another, and labor cost from payroll, every report is a manual reconciliation, and by the time it is built the numbers are out of date. Leaders end up debating whose figure is right instead of deciding what to do about it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is hidden cost trends. Overtime creep, rising turnover in one department, or labor cost drifting above plan are easy to miss when nobody has a current view. Workforce analytics software solves both by reading from one source so the numbers agree, and by surfacing trends early enough to act on them rather than explain them after the quarter closes.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles analytics as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved provides workforce analytics that read directly from the same platform running your HR, time, and payroll. Dashboards and reports cover headcount, turnover, labor cost, overtime trends, and related measures, and because everything sits on one platform the numbers come from a single source rather than from separate exports that have to be reconciled. Leaders and managers can view trends and pull reports themselves.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            That single source is the whole point. When your labor cost report and your payroll come from the same data, they agree, and decisions rest on numbers nobody has to defend. Because more than 7 million employees are managed on isolved, the reporting is proven across the headcount sizes, multi-location structures, and cost questions employers of every size bring to it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Workforce analytics is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and a leader can ask for a turnover or labor cost figure through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than building a report by hand.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Analytics is only useful if it shows the right things and the data is clean. Which metrics belong on a leadership dashboard, how departments and locations roll up, and how reports are shared all have to match how your business makes decisions. BEG configures the dashboards and reports your leadership uses and makes sure the underlying data is structured to be trusted.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in analytics that return shows up where single-source reporting replaces manual reconciliation and surfaces cost trends early enough to act on. When you want a new dashboard, a different rollup, or a report for a new audience, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A small company that checks headcount once in a while may not need dashboards at all. The value of workforce analytics grows with headcount, with the number of locations and departments you track, and with how often labor cost and overtime drive real decisions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how you report today, whether your current numbers agree across systems, and whether trends in turnover and labor cost would change what you do. The isolved platform is a strong fit when reporting matters and you want it drawn from one source with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div className="faq">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <h3 style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>{q}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See workforce analytics in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through the metrics your leadership watches, look at how you report today, and show you what isolved plus BEG looks like for your team.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>
    </main>
  );
}
