import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnalyticsScripts } from "@/components/analytics";
import { SkipToMain } from "@/components/skip-to-main";

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
    default: "AI Peak Biz | AI Automation for Service Businesses",
    template: "%s | AI Peak Biz",
  },
  description:
    "AI Peak Biz builds and manages AI automation systems for service businesses. Every call answered. Every lead captured. More appointments booked. More 5-star reviews.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aipeakbiz.com",
    siteName: "AI Peak Biz",
    title: "AI Peak Biz | AI Automation for Service Businesses",
    description:
      "AI Peak Biz builds and manages AI automation systems for service businesses. Every call answered. Every lead captured. More appointments booked.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Peak Biz | AI Automation for Service Businesses",
    description:
      "AI automation systems for service businesses. Every call answered. Every lead captured.",
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
    <html lang="en" className="dark">
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
        <SkipToMain />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <AnalyticsScripts />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67ddf0a80d1911aaceb3e991"
          async
        />
      </body>
    </html>
  );
}
