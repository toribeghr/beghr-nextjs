import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Business Executive Group',
  description: 'The terms that govern your use of beghr.com and Business Executive Group services.',
  alternates: {
    canonical: 'https://www.beghr.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Business Executive Group',
    description: 'The terms that govern your use of beghr.com and Business Executive Group services.',
    url: 'https://www.beghr.com/terms',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'BEG Terms of Service' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Terms of Service | Business Executive Group', description: 'The terms that govern your use of beghr.com and Business Executive Group services.', images: ['https://www.beghr.com/assets/og-image.png'] },
  robots: { index: false },
};

const h2 = { marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' } as const;
const gold = { color: 'var(--gold)' } as const;

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p style={{ color: 'var(--slate)', marginTop: '8px', marginBottom: '40px' }}>Last updated: June 2026</p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>
          <p>These Terms of Service (&quot;Terms&quot;) govern your use of beghr.com and the information and services offered by Business Executive Group (&quot;BEG,&quot; &quot;we,&quot; &quot;us&quot;). By using this site, you agree to these Terms.</p>

          <h2 style={h2}>1. Our Services</h2>
          <p>BEG provides fully managed payroll, resells and implements the isolved HCM platform as an authorized partner, and provides specialized job placement services. The website also offers free informational tools, calculators, and guides. Specific service terms, pricing, and scope are set out in the separate written agreement you sign before engaging us; in the event of a conflict, that agreement controls.</p>

          <h2 style={h2}>2. Informational Content and No Professional Advice</h2>
          <p>Content on this site, including calculators, guides, and articles, is for general information only and is not legal, tax, accounting, or financial advice. Payroll and employment rules change and vary by jurisdiction. You should consult a qualified professional before acting on anything you read here.</p>

          <h2 style={h2}>3. Estimates, Statistics, and Results</h2>
          <p>Any figures, ranges, savings, timelines, or performance statistics shown on this site (including cost comparisons, time-to-fill ranges, fill rates, and ROI figures) are estimates or are drawn from third-party or historical data and are provided for illustration. They are not a promise or guarantee of any particular outcome. Your results will vary based on your specific circumstances. Free tools produce estimates only and are not a quote.</p>

          <h2 style={h2}>4. Service Guarantees</h2>
          <p>Where we offer a specific guarantee (for example, a replacement guarantee on a placement), the exact terms, conditions, and time limits of that guarantee are defined in your written service agreement and apply only as stated there.</p>

          <h2 style={h2}>5. Intellectual Property</h2>
          <p>The site and its content, branding, and tools are owned by BEG or its licensors and are protected by law. You may use them for your own internal, non-commercial evaluation. You may not copy, resell, or redistribute them without our written permission.</p>

          <h2 style={h2}>6. Third-Party Links and Services</h2>
          <p>The site links to and integrates third-party services (such as Calendly, isolved, and analytics or advertising providers). We are not responsible for the content or practices of third parties, which are governed by their own terms and privacy policies.</p>

          <h2 style={h2}>7. Disclaimer and Limitation of Liability</h2>
          <p>The site is provided &quot;as is&quot; without warranties of any kind, express or implied, to the fullest extent permitted by law. To the maximum extent permitted by law, BEG will not be liable for any indirect, incidental, or consequential damages arising from your use of the site or its informational content.</p>

          <h2 style={h2}>8. Indemnification</h2>
          <p>You agree to indemnify and hold BEG harmless from claims arising out of your misuse of the site or violation of these Terms.</p>

          <h2 style={h2}>9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws rules. Disputes will be resolved in the state or federal courts located in Texas.</p>

          <h2 style={h2}>10. Changes and Contact</h2>
          <p>We may update these Terms from time to time; the &quot;Last updated&quot; date reflects the latest version. Questions: Business Executive Group, 7700 Windrose Ave, Plano, TX 75024, <a href="mailto:sales@beghr.com" style={gold}>sales@beghr.com</a>, <a href="tel:4694121204" style={gold}>469-412-1204</a>.</p>
        </div>
      </div>
    </section>
  );
}
