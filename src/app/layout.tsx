import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialFollow from '@/components/SocialFollow';
import ConsentBanner from '@/components/ConsentBanner';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RevealOnNavigate from '@/components/RevealOnNavigate';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

// Self-hosted at build time via next/font — removes the render-blocking request to
// fonts.googleapis.com and the two font-file round trips on fonts.gstatic.com.
const fraunces = Fraunces({ subsets: ['latin'], weight: ['500', '600'], display: 'swap', variable: '--font-fraunces' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beghr.com'),
  title: 'Business Executive Group - Payroll, HCM Software & Job Placement',
  description: 'Fully managed payroll, HCM software powered by isolved, and specialized job placement services for businesses nationwide.',
  icons: {
    // Same stable URL Google already crawled, now a multi-size icon
    // (16/32/48/64/96/128). Google requires a square favicon and recommends
    // larger than 48x48 so it renders well in search results.
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://www.beghr.com',
    types: {
      'application/rss+xml': 'https://www.beghr.com/feed.xml',
    },
  },
  openGraph: {
    title: 'Business Executive Group',
    description: 'Fully managed payroll, HCM software powered by isolved, and specialized job placement services for businesses nationwide.',
    url: 'https://www.beghr.com',
    siteName: 'Business Executive Group',
    images: [
      {
        url: 'https://www.beghr.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Business Executive Group -- Managed Payroll, HCM Software & Job Placement',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Executive Group',
    description: 'Fully managed payroll, HCM software powered by isolved, and specialized job placement services for businesses nationwide.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Fonts are self-hosted via next/font (fraunces + inter above) — no external font request. */}
        {/* Hero video thumbnail host — open the connection early to speed LCP. */}
        <link rel="preconnect" href="https://i.ytimg.com" />

        {/* Organization + LocalBusiness Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Business Executive Group',
              legalName: 'Business Executive Group',
              alternateName: 'BEG',
              url: 'https://www.beghr.com',
              logo: 'https://www.beghr.com/assets/beg-header-image.png',
              image: 'https://www.beghr.com/assets/og-image.png',
              telephone: '469-412-1204',
              email: 'sales@beghr.com',
              slogan: 'Managed payroll, HCM software, and job placement for growing companies.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '7700 Windrose Ave',
                addressLocality: 'Plano',
                addressRegion: 'TX',
                postalCode: '75024',
                addressCountry: 'US',
              },
              description: 'Business Executive Group is an authorized isolved partner delivering fully managed payroll, the isolved HCM platform implemented and supported by BEG, and specialized job placement. isolved is the only HCM platform with a Connector for Claude.',
              areaServed: 'United States',
              knowsAbout: [
                'Managed payroll',
                'HCM software',
                'isolved',
                'isolved Connector for Claude',
                'Payroll outsourcing',
                'HR outsourcing',
                'Benefits administration',
                'Time and attendance',
                'Job placement',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-469-412-1204',
                email: 'sales@beghr.com',
                contactType: 'sales',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://www.linkedin.com/company/joinbeghr/',
                'https://facebook.com/joinbeghr',
                'https://instagram.com/joinbeghr',
                'https://youtube.com/@joinbeghr',
                'https://x.com/joinbeghr',
              ],
            }),
          }}
        />

        {/* WebSite Schema (entity for AI search and sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Business Executive Group',
              url: 'https://www.beghr.com',
              publisher: { '@type': 'Organization', name: 'Business Executive Group' },
              description: 'Managed payroll, isolved HCM software, and job placement for growing companies. isolved is the only HCM platform with a Connector for Claude.',
            }),
          }}
        />

        {/* Consent Mode v2 defaults (denied until the visitor accepts via the banner). Must load before GTM/GA/pixels. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{if(document.cookie.indexOf('beg_consent=granted')>-1){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}`,
          }}
        />


        {/* Google Tag Manager — afterInteractive moves container execution off the critical
            render path while keeping analytics reliable. Consent defaults above run first;
            book_call_click / generate_lead events queue in dataLayer and are picked up on load. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVSLWC2S');`}
        </Script>
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
        <BreadcrumbSchema />
        <RevealOnNavigate />
        <SocialFollow />
        <Footer />
        <ConsentBanner />

        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll('.reveal').forEach(el=>el.classList.add('will-animate'));
const io=new IntersectionObserver((es)=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));`,
          }}
        />
      </body>
    </html>
  );
}
