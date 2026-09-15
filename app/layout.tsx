import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import "../styles/hero-tuning.css";
import "../styles/hero-reference-tuning.css";
import "../styles/hero-redesign.css";
import "../styles/hero-final-overrides.css";
import "../styles/language-layout.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WE ARE LEBA",
  url: "https://weareleba.com/",
  logo: "https://weareleba.com/assets/favicon.svg",
  description: "We design digital systems that organize, automate and help modern businesses grow.",
  sameAs: [
    "https://www.instagram.com/weareleba/",
    "https://www.linkedin.com/company/weareleba/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WE ARE LEBA",
  url: "https://weareleba.com/",
  description: "We design digital systems that organize, automate and help modern businesses grow.",
  publisher: {
    "@type": "Organization",
    name: "WE ARE LEBA",
    url: "https://weareleba.com/",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://weareleba.com"),
  title: "WE ARE LEBA — Digital Systems Studio",
  description: "We design digital systems that organize, automate and help modern businesses grow.",
  keywords: [
    "digital systems studio",
    "digital systems",
    "digital transformation",
    "web design",
    "custom software",
    "business automation",
    "AI automation",
    "digital solutions",
    "Copenhagen digital studio",
    "Denmark digital studio",
    "WE ARE LEBA",
  ],
  authors: [{ name: "WE ARE LEBA" }],
  creator: "WE ARE LEBA",
  publisher: "WE ARE LEBA",
  alternates: {
    canonical: "https://weareleba.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://weareleba.com/",
    siteName: "WE ARE LEBA",
    title: "WE ARE LEBA — Digital Systems Studio",
    description: "We design digital systems that organize, automate and help modern businesses grow.",
    locale: "en_US",
    images: [
      {
        url: "/assets/generated/portada.png",
        width: 1600,
        height: 900,
        alt: "WE ARE LEBA — Digital Systems Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WE ARE LEBA — Digital Systems Studio",
    description: "We design digital systems that organize, automate and help modern businesses grow.",
    images: ["/assets/generated/portada.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const language = pathname === "/nosotros" || pathname.startsWith("/nosotros/") ? "es" : "en";

  return (
    <html lang={language}>
      <body className={geist.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P0YEG9KJT5');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0YEG9KJT5"
          strategy="afterInteractive"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "w3yyyartvr");`}
        </Script>
      </body>
    </html>
  );
}
