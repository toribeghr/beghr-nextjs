import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best HCM Software for Small Business 2026 | BEG',
  description: 'What to look for in small business HCM software in 2026, the simplicity-versus-growth tradeoff owners face, and why iSolved plus BEG is a done-for-you pick.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/best-hcm-software-for-small-business' },
  openGraph: {
    title: 'Best HCM Software for Small Business 2026 | BEG',
    description: 'What to look for in small business HCM software in 2026, the simplicity-versus-growth tradeoff owners face, and why iSolved plus BEG is a done-for-you pick.',
    url: 'https://beghr.com/services/hcm-software/best-hcm-software-for-small-business',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best HCM Software for Small Business 2026 | BEG', description: 'What to look for in small business HCM software in 2026, the simplicity-versus-growth tradeoff owners face, and why iSolved plus BEG is a done-for-you pick.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What should a small business look for in HCM software?',
    a: 'Look for simplicity now and room to grow later, accurate payroll and tax handling, and a way to avoid running it all alone. The right choice keeps things easy today without forcing a painful platform switch as you add headcount.',
  },
  {
    q: 'Why is iSolved plus BEG a strong pick for small business?',
    a: 'iSolved is a single connected platform that handles payroll, HR, time, and benefits, and BEG implements, configures, and supports it for you. That gives a small business a done-for-you setup that stays simple now and scales as you grow.',
  },
  {
    q: 'Is iSolved overkill for a very small business?',
    a: 'It can be, depending on your needs. A very small, simple operation may be served well by a lightweight payroll tool. iSolved plus BEG makes the most sense when you want room to grow and prefer a partner handling the platform rather than doing it yourself.',
  },
  {
    q: 'Do I have to manage the platform myself?',
    a: 'No. With BEG, you are not left to configure and run a system alone. BEG implements, configures, and supports iSolved for you, which is what many small businesses want most.',
  },
  {
    q: 'What does the Connector for Claude offer a small business?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. An owner or office manager can pull reports and update records through conversation, which is valuable when there is no dedicated HR team.',
  },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Best HCM Software for Small Business', item: 'https://beghr.com/services/hcm-software/best-hcm-software-for-small-business' },
  ],
};

export default function BestHCMSmallBusinessPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Small Business</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Best HCM Software for Small Business in 2026</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Small businesses want HR software that is simple now and does not box them in later. The right choice keeps payroll easy today, leaves room to grow, and does not leave you running it alone. Here is what to look for.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What to Look For in HCM Software for Small Business</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            For a small business, the first requirement is simplicity. You probably do not have a dedicated HR department, so the platform has to make payroll, tax filing, and basic HR easy enough for an owner or office manager to handle without becoming a second job. Accurate payroll and reliable tax handling are non-negotiable, because mistakes here cost real money and time you do not have.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second requirement is harder to see at the start, and it is room to grow. Many small businesses outgrow a basic payroll tool the moment they add their first multi-state hire, start offering benefits, or need to track time more seriously. Switching platforms later is disruptive, so the smarter move is choosing something that is simple now but has the depth to expand into. The third, and often most valuable, factor is whether you have to run it alone or can hand the setup and upkeep to a partner.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR and Payroll Challenges Specific to Small Business</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Limited time and no HR team is the defining constraint. The owner or a single office manager often carries payroll, hiring, and compliance on top of running the business, so anything that adds administrative weight is a real cost.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Outgrowing simple tools is the trap. A lightweight product is great until the day it is not, and discovering its limits mid-growth forces a disruptive switch at the worst possible time. Choosing for where you are headed, not just where you are, avoids that.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Compliance with no margin for error ties it together. Payroll tax, classification, and filing rules apply to small businesses just as they do to large ones, but small businesses have far less cushion to absorb a mistake. A platform that handles compliance correctly removes a serious source of risk.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why iSolved Plus BEG Is a Top Pick for Small Business</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved is a single connected platform for payroll, HR, time, and benefits, which means you start with what you need and grow into the rest without changing systems. That directly answers the small-business worry about outgrowing a tool. With more than 7 million employees managed on iSolved, you are choosing a platform proven well beyond your current size.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The bigger difference for a small business is that BEG implements, configures, and supports the platform for you. You are not handed software and left to figure it out. BEG sets it up for your business, manages the migration from your current system, and stays on as your contact for changes and questions, which is exactly the done-for-you support a small team needs. The Forrester-documented 330% ROI for iSolved reflects the kind of return that comes from accurate, consolidated HR rather than a patchwork of tools.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            To see the full platform, visit our <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>HCM software overview</Link>.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>How to Choose: It Depends on Where You Are Headed</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No platform is right for every small business, and it is fair to be honest about that. If you are very small, expect to stay that way, and want the cheapest, simplest payroll possible, a lightweight tool may be the better fit. There is no need to over-buy.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            iSolved plus BEG makes the most sense when you value simplicity now but want room to grow, and when you would rather have a partner run the platform than do it yourself. Ask whether you expect to add headcount, hire across states, or offer benefits, and whether you want done-for-you support. BEG will compare iSolved fairly against simpler options for your situation.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See iSolved for Your Business</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will look at where you are and where you are headed, run a cost comparison, and show you what iSolved plus BEG looks like for your business.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          { category: 'HCM technology', title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)", excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, and the Connector for Claude. Who it fits best.', href: '/blog/hcm-technology/isolved-platform' },
          { category: 'HCM technology', title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)', excerpt: 'Payroll, onboarding, and compliance reporting are high-ROI automation targets for small teams.', href: '/blog/hcm-technology/hr-automation' },
          { category: 'HCM technology', title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle', excerpt: 'What changed in 2026 and what your HCM platform should be handling automatically for a small business.', href: '/blog/hcm-technology/payroll-compliance' },
        ]}
      />
    </main>
  );
}
