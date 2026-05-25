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
    images: [
      {
        url: "https://www.aipeakbiz.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Peak Biz — Revenue Recovery for Service Businesses",
      },
    ],
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
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: "AI Peak Biz",
  description:
    "Revenue recovery and customer communication company for service businesses. AI-powered call answering, lead response, appointment booking, and database reactivation.",
  url: "https://www.aipeakbiz.com",
  logo: "https://www.aipeakbiz.com/images/logo.png",
  image: "https://www.aipeakbiz.com/images/og-image.png",
  telephone: "+1-928-628-6080",
  email: "wylie@aipeakbiz.com",
  priceRange: "$$$$",
  areaServed: "US",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-928-628-6080",
    contactType: "sales",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
  founder: {
    "@type": "Person",
    name: "Wylie Stevens",
    jobTitle: "Founder",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/aipeakbiz/",
    "https://www.linkedin.com/in/aipeakbiz",
  ],
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
            __html: JSON.stringify(businessSchema),
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
