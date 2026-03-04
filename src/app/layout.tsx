import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aboukhalid-zidane.com'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  title: {
    template: '%s | Zidane Aboukhalid — Full Stack Developer',
    default: 'Zidane Aboukhalid — Full Stack .NET & React Developer',
  },
  description:
    'Zidane Aboukhalid — Full Stack Developer based in Casablanca, Morocco. Specialising in ASP.NET Core, React, Blazor, Docker, and CI/CD. 3+ years building scalable, production-grade web applications.',
  keywords: [
    'Zidane Aboukhalid',
    'Aboukhalid Zidane',
    'Full Stack Developer Casablanca',
    'ASP.NET Core Developer',
    'React Developer Morocco',
    '.NET Developer',
    'Blazor Developer',
    'DevOps Engineer Morocco',
    'Portfolio Developer',
    'TypeScript',
    'Docker Jenkins',
  ],
  authors: [{ name: 'Zidane Aboukhalid', url: 'https://aboukhalid-zidane.com' }],
  creator: 'Zidane Aboukhalid',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aboukhalid-zidane.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://aboukhalid-zidane.com',
    siteName: 'Zidane Aboukhalid — Portfolio',
    title: 'Zidane Aboukhalid — Full Stack .NET & React Developer',
    description:
      'Full Stack Developer based in Casablanca, Morocco. Building production-grade apps with ASP.NET Core, React, Blazor, Docker and CI/CD pipelines.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zidane Aboukhalid — Full Stack Developer',
    description:
      'Full Stack Developer based in Casablanca. ASP.NET Core, React, Blazor, Docker, CI/CD.',
    creator: '@zidane_aboukhalid',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zidane Aboukhalid',
  url: 'https://aboukhalid-zidane.com',
  jobTitle: 'Full Stack Developer',
  description:
    'Full Stack Developer specialising in ASP.NET Core, React, Blazor, Docker, and CI/CD. Based in Casablanca, Morocco.',
  email: 'contact@aboukhalid-zidane.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  sameAs: [
    'https://linkedin.com/in/zidane-aboukhalid',
    'https://github.com/zidane-aboukhalid',
  ],
  knowsAbout: [
    'ASP.NET Core', 'React.js', 'Blazor', 'C#', 'Docker',
    'Jenkins', 'CQRS', 'Microservices', 'TypeScript',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDFT85L6');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDFT85L6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
