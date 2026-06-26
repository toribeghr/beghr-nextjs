import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://beghr.com'),
  title: 'Business Executive Group - Payroll, HCM Software & Job Placement',
  description: 'Fully managed payroll, HCM software powered by iSolved, and specialized job placement services for businesses nationwide.',
  icons: {
    icon: '/assets/beg-logo-gold.png',
  },
  alternates: {
    canonical: 'https://beghr.com',
  },
  openGraph: {
    title: 'Business Executive Group',
    description: 'Fully managed payroll, HCM software powered by iSolved, and specialized job placement services for businesses nationwide.',
    url: 'https://beghr.com',
    siteName: 'Business Executive Group',
    images: [
      {
        url: 'https://beghr.com/assets/beg-header-image.png',
        width: 1200,
        height: 630,
        alt: 'Business Executive Group',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Executive Group',
    description: 'Fully managed payroll, HCM software powered by iSolved, and specialized job placement services for businesses nationwide.',
    images: ['https://beghr.com/assets/beg-header-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Organization + LocalBusiness Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://beghr.com',
              logo: 'https://beghr.com/assets/beg-header-image.png',
              telephone: '469-412-1204',
              email: 'tori.wint@beghr.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Celina',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              description: 'Managed payroll, HCM software powered by iSolved, and specialized job placement services for businesses nationwide.',
              areaServed: 'United States',
              sameAs: [
                'https://www.linkedin.com/company/businessexecutivegroup/',
                'https://facebook.com/thehrexecutivegroup',
                'https://instagram.com/thehrexecutivegroup',
                'https://youtube.com/@TheHRExecutiveGroup',
              ],
            }),
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVSLWC2S');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVSLWC2S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />

        <script
          dangerouslySetInnerHTML={{
            __html: `const t=document.getElementById('navToggle'),l=document.getElementById('navLinks');
if(t&&l){t.addEventListener('click',()=>l.classList.toggle('open'));l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('open')));}
document.querySelectorAll('.reveal').forEach(el=>el.classList.add('will-animate'));
const io=new IntersectionObserver((es)=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
(function(){var s=document.getElementById("stickyCta");var hero=document.querySelector(".hero");if(!s||!hero)return;var io=new IntersectionObserver(function(es){es.forEach(function(e){s.classList.toggle("show",!e.isIntersecting)})},{threshold:0});io.observe(hero);})();`,
          }}
        />
      </body>
    </html>
  );
}
