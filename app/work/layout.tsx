import type { Metadata } from "next";

const title = "Work — WE ARE LEBA | Digital Products & Systems";
const description = "Explore selected digital products, platforms and experiences designed and built by WE ARE LEBA.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "WE ARE LEBA work",
    "digital products",
    "digital systems portfolio",
    "web design portfolio",
    "custom software portfolio",
    "digital experiences",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
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

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
