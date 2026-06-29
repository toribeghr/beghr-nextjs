import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Business Executive Group',
  description: 'Privacy policy for Business Executive Group: how we collect, use, share, and protect your information, including cookies, analytics, and advertising.',
  alternates: {
    canonical: 'https://www.beghr.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Business Executive Group',
    description: 'How Business Executive Group collects, uses, shares, and protects your information.',
    url: 'https://www.beghr.com/privacy-policy',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'BEG Privacy Policy' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy | Business Executive Group', description: 'How Business Executive Group collects, uses, shares, and protects your information.', images: ['https://www.beghr.com/assets/og-image.png'] },
  robots: { index: false },
};

const h2 = { marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' } as const;
const gold = { color: 'var(--gold)' } as const;

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p style={{ color: 'var(--slate)', marginTop: '8px', marginBottom: '40px' }}>Last updated: June 2026</p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>
          <p>Business Executive Group (&quot;BEG,&quot; &quot;we,&quot; &quot;us&quot;) operates beghr.com. This policy explains what information we collect, how we use and share it, and the choices you have. Questions: <a href="mailto:sales@beghr.com" style={gold}>sales@beghr.com</a> or 469-412-1204, 7700 Windrose Ave, Plano, TX 75024.</p>

          <h2 style={h2}>1. Information We Collect</h2>
          <p>When you submit a form or book a discovery call, we collect the details you provide: name, email address, company, and (if you book a call) phone number. We also automatically collect standard usage data through cookies and similar technologies, such as pages viewed, session activity, device and browser type, approximate location derived from IP address, and the referring site.</p>

          <h2 style={h2}>2. How We Use Your Information</h2>
          <p>We use your information to respond to your inquiry, deliver the resource you requested, schedule and conduct discovery calls, follow up about our services (managed payroll, HCM software, and job placement), measure and improve our website and marketing, and meet legal obligations. We do not sell your personal information.</p>

          <h2 style={h2}>3. Cookies, Analytics, and Advertising</h2>
          <p>We use cookies and tags for analytics and advertising, including <strong>Google Analytics 4 and Google Tag Manager</strong>, the <strong>Meta (Facebook) Pixel</strong>, and the <strong>LinkedIn Insight Tag</strong>. These help us understand site usage and measure and optimize advertising, and they may be used for <strong>remarketing/personalized advertising</strong> (showing you BEG ads on Google, Meta, or LinkedIn after you visit). Non-essential cookies load only after you consent through our cookie banner, and you can decline or change your choice at any time. You can also opt out via the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={gold}>Google Analytics opt-out</a>,{' '}
            <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer" style={gold}>Google Ad Settings</a>, your{' '}
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" style={gold}>Meta ad preferences</a>, and the{' '}
            <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={gold}>DAA opt-out tools</a>.</p>

          <h2 style={h2}>4. How We Share Information</h2>
          <p>We do not sell your personal information. We share it only with service providers that help us operate, and only as needed for them to perform their service: Google Workspace, Google Sheets, and Gmail (lead storage and notifications); Calendly (scheduling); and the analytics and advertising providers named above. We may also disclose information if required by law or to protect our rights.</p>

          <h2 style={h2}>5. Your Privacy Rights</h2>
          <p><strong>California (CCPA/CPRA):</strong> you have the right to know the categories and specific pieces of personal information we collect (identifiers and internet activity), to request deletion or correction, and to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information. We do not sell personal information; declining cookies through our banner opts you out of cross-context behavioral advertising. We will not discriminate against you for exercising these rights.</p>
          <p><strong>EU/UK (GDPR):</strong> where applicable, our legal bases are your consent (cookies/marketing) and our legitimate interests and steps taken at your request (responding to inquiries). You may request access, correction, deletion, restriction, portability, or object to processing, and you may withdraw consent at any time.</p>
          <p>To exercise any right, email <a href="mailto:sales@beghr.com" style={gold}>sales@beghr.com</a>.</p>

          <h2 style={h2}>6. Data Retention</h2>
          <p>We keep contact information for as long as needed to service your inquiry and for our legitimate business and legal purposes, then delete or de-identify it. You may request deletion at any time.</p>

          <h2 style={h2}>7. Security</h2>
          <p>We use reasonable administrative and technical measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>

          <h2 style={h2}>8. Children</h2>
          <p>This site is intended for businesses and is not directed to children under 16, and we do not knowingly collect their information.</p>

          <h2 style={h2}>9. Changes</h2>
          <p>We may update this policy from time to time. Material changes will be reflected by the &quot;Last updated&quot; date above.</p>

          <h2 style={h2}>10. Contact</h2>
          <p>Business Executive Group, 7700 Windrose Ave, Plano, TX 75024. Email <a href="mailto:sales@beghr.com" style={gold}>sales@beghr.com</a> or call <a href="tel:4694121204" style={gold}>469-412-1204</a>.</p>
        </div>
      </div>
    </section>
  );
}
