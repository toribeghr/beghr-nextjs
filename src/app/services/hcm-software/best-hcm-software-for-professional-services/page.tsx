import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best HCM Software for Pro Services | Instant Quote | BEG',
  description: 'What to look for in professional services HCM software in 2026, the utilization and exempt classification challenges firms face, and why isolved plus BEG fits.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-professional-services' },
  openGraph: {
    title: 'Best HCM Software for Pro Services | Instant Quote | BEG',
    description: 'What to look for in professional services HCM software in 2026, the utilization and exempt classification challenges firms face, and why isolved plus BEG fits.',
    url: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-professional-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best HCM Software for Pro Services | Instant Quote | BEG', description: 'What to look for in professional services HCM software in 2026, the utilization and exempt classification challenges firms face, and why isolved plus BEG fits.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What should professional services firms look for in HCM software?',
    a: 'Look for clean handling of exempt and non-exempt classification, support for tracking utilization, strong talent and performance tools, and benefits administration that helps retain skilled people. The platform should fit a salaried, knowledge-worker workforce.',
  },
  {
    q: 'Why is isolved a strong pick for professional services?',
    a: 'isolved keeps payroll, HR, time, and benefits on a single connected platform, so classification, talent, and benefits are managed in one place. BEG configures it for your roles, pay structures, and growth plans.',
  },
  {
    q: 'Can isolved help with exempt and non-exempt classification?',
    a: 'isolved supports the pay rules and structures that exempt and non-exempt workforces require, and keeps the data consistent across payroll and HR. BEG configures the setup so classification is applied correctly.',
  },
  {
    q: 'Is isolved right for every firm?',
    a: 'It depends on your needs. A very small firm with a few salaried staff may do fine on a simpler tool. The value grows as you add headcount, manage utilization, and need stronger talent and benefits capabilities.',
  },
  {
    q: 'What does the Connector for Claude offer a firm?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Leaders can pull headcount and labor reports and update records through conversation rather than navigating screens.',
  },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Best HCM Software for Professional Services', item: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-professional-services' },
  ],
};

export default function BestHCMProfessionalServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Professional Services</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Best HCM Software for Professional Services in 2026</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Billable utilization, exempt classification, and retaining skilled people define professional services HR. The right HCM platform supports a salaried, knowledge-worker firm end to end. Here is what to look for.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What to Look For in HCM Software for Professional Services</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Professional services firms sell expertise, and their workforce is mostly salaried, exempt knowledge workers. That shifts what matters in HCM software away from hourly time clocks and toward classification, talent, and retention. The platform has to handle exempt and non-exempt employees correctly, because misclassification carries real compliance risk, and it has to keep that classification consistent across payroll and HR.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Because the people are the product, talent and performance capabilities carry weight here. The strongest platforms support performance management, compensation planning, and benefits administration that help a firm attract and keep skilled professionals. Many firms also care about visibility into utilization, so the ability to capture time against clients or projects, even for exempt staff, supports the management decisions that drive profitability.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR and Payroll Challenges Specific to Professional Services</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Classification is the quiet risk. Drawing the exempt and non-exempt line correctly, and keeping it consistent as roles evolve, protects the firm. A platform that treats classification as an afterthought leaves that exposure on the table.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Utilization and profitability are the management challenge. Firms live on billable hours, and leaders need a clear read on how time is spent across clients and projects. When that data sits outside the HR and payroll system, it is harder to connect people costs to results.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Retention ties it together. Skilled professionals are expensive to replace, so competitive benefits, clear compensation, and credible performance processes matter. Disconnected tools make those programs harder to run well.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why isolved Plus BEG Is a Top Pick for Firms</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved is a single connected platform, which suits a firm that needs classification, talent, and benefits to work together. Exempt and non-exempt employees are handled under the right rules, talent and performance tools live alongside payroll and benefits, and time can be captured against clients or projects where utilization matters. With more than 7 million employees managed on isolved, the platform supports professional workforces as they grow.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            BEG implements, configures, and supports the platform for your roles, pay structures, and talent programs, and stays with you as the firm scales. The Forrester-documented 330% ROI for isolved tends to appear in professional services where consolidated talent, benefits, and payroll reduce administrative drag and support retention.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            For the firm-specific setup, see our <Link href="/services/hcm-software/professional-services" style={{ color: '#000', fontWeight: 600 }}>isolved HCM for professional services</Link> page.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>How to Choose: It Depends on Your Firm</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No platform is best for every firm, and a fair comparison should say so. A very small practice with a handful of salaried staff may be served well by a simpler tool. The case for a connected platform strengthens as you add headcount, formalize talent and performance processes, and need stronger benefits to retain people.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Ask how much you rely on utilization data, how important talent and benefits are to retention, how complex your classification is, and whether you want a partner managing the platform. The isolved platform is a strong choice for growing firms that want BEG running it. BEG will compare it fairly against your current setup.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{q}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See isolved for Your Firm</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through classification, talent, and benefits and show you what isolved plus BEG looks like for your firm.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          { category: 'HCM technology', title: "isolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)", excerpt: 'Full isolved platform review covering payroll, benefits, talent, time tracking, and the Connector for Claude.', href: '/blog/hcm-software/isolved-platform' },
          { category: 'HCM technology', title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)', excerpt: 'Classification, onboarding, and benefits administration are high-ROI automation targets for firms.', href: '/blog/hcm-software/hr-automation' },
          { category: 'HCM technology', title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle', excerpt: 'FLSA threshold updates, classification, and what your HCM platform should handle automatically.', href: '/blog/hcm-software/payroll-compliance' },
        ]}
      />
    </main>
  );
}
