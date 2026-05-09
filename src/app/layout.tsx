import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aipeakbiz.com"),
  title: {
    default: "AI Peak Biz | Revenue Recovery for Service Businesses",
    template: "%s | AI Peak Biz",
  },
  description:
    "AI Peak Biz helps service businesses recover missed revenue with instant lead response, 24/7 call answering, and automated appointment booking. Built for contractors, roofers, HVAC, and local businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aipeakbiz.com",
    siteName: "AI Peak Biz",
    title: "AI Peak Biz | Revenue Recovery for Service Businesses",
    description:
      "Stop losing jobs to missed calls and slow follow-up. AI Peak Biz helps service businesses respond instantly and book more appointments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Peak Biz | Revenue Recovery for Service Businesses",
    description:
      "Stop losing jobs to missed calls and slow follow-up. Instant lead response for service businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aipeakbiz.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Peak Biz",
  url: "https://www.aipeakbiz.com",
  logo: "https://www.aipeakbiz.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-928-628-6080",
    contactType: "sales",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI Peak Biz",
  url: "https://www.aipeakbiz.com",
  telephone: "+1-928-628-6080",
  email: "wylie@aipeakbiz.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kingman",
    addressRegion: "AZ",
    postalCode: "86401",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.1894,
    longitude: -114.053,
  },
  image: "https://www.aipeakbiz.com/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="OEeYi3-tvnI3Z9PMuAclTB-aSxuPLTFAiB7tAR_ZCwA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
