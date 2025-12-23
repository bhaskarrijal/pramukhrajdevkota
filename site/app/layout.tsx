import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seoConfig } from "@/lib/seo-config";
import { generatePersonSchema, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: seoConfig.defaultMetadata.title,
  description: seoConfig.defaultMetadata.description,
  keywords: seoConfig.defaultMetadata.keywords,
  authors: [
    { 
      name: seoConfig.author.name,
      url: seoConfig.siteUrl,
    }
  ],
  creator: seoConfig.author.name,
  publisher: seoConfig.author.name,
  
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
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultMetadata.title.default,
    description: seoConfig.defaultMetadata.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: seoConfig.siteName,
        type: 'image/png',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitterHandle,
    creator: seoConfig.twitterHandle,
    title: seoConfig.defaultMetadata.title.default,
    description: seoConfig.defaultMetadata.description,
    images: ['/og.png'],
  },
  
  alternates: {
    canonical: seoConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, orgSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
