import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Fraunces } from 'next/font/google';
import { site, images } from '@/lib/content';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouterPopup } from '@/components/RouterPopup';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    'AI-optimized websites and local marketing for Palm Beach businesses. Show up on Google and get recommended by AI tools like ChatGPT. Websites from $3,000, growth plans from $750/mo.',
  keywords: [
    'Palm Beach SEO',
    'Palm Beach marketing',
    'AI-optimized website',
    'local SEO West Palm Beach',
    'Google Ads Palm Beach',
    'website design Palm Beach',
  ],
  authors: [{ name: 'Matthew Durnya' }],
  creator: 'Grow Palm Beach',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      'AI-optimized websites and local marketing for Palm Beach businesses. When locals search for what you do, you should be the one they call.',
    images: images.ogImage
      ? [{ url: images.ogImage, width: 1200, height: 630, alt: site.name }]
      : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: 'AI-optimized websites and local marketing for Palm Beach businesses.',
    images: images.ogImage ? [images.ogImage] : [],
  },
  verification: {
    google: 'UKIDl4KnBkklVoSg2sv8Po6j99zTuSerbXkjCpuiRLU',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: site.url },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description:
    'AI-optimized websites and local marketing for Palm Beach businesses. Local SEO, Google Business Profile optimization, and paid ads.',
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  founder: { '@type': 'Person', name: 'Matthew Durnya' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'West Palm Beach',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.7056, longitude: -80.0571 },
  priceRange: '$$',
  areaServed: 'Palm Beach County, Florida',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FWJZFP46KJ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FWJZFP46KJ');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <RouterPopup />
      </body>
    </html>
  );
}
