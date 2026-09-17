import type { Metadata } from 'next';
import { siteData } from '@/lib/site-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://detoxcuppingtherapy.com'),
  title: siteData.seo.title,
  description: siteData.seo.description,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: 'website',
    url: 'https://detoxcuppingtherapy.com',
    images: [
      {
        url: siteData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.brand.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFBF5" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          as="style"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
