import type { Metadata } from "next";

const title = "About WE ARE LEBA — Digital Systems Studio";
const description = "Meet WE ARE LEBA, a digital systems studio building clear, connected and scalable digital solutions for modern businesses.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about WE ARE LEBA",
    "digital systems studio",
    "digital studio Copenhagen",
    "digital transformation",
    "custom software",
    "business automation",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    siteName: "WE ARE LEBA",
    title,
    description,
    locale: "en_US",
    images: [{ url: "/portada.png", alt: "WE ARE LEBA — Digital Systems Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/portada.png"],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
