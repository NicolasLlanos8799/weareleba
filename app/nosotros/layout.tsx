import type { Metadata } from "next";

const title = "Nosotros — WE ARE LEBA | Digital Systems Studio";
const description = "Conoce WE ARE LEBA, un estudio de sistemas digitales que diseña soluciones claras, conectadas y escalables para negocios modernos.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "WE ARE LEBA nosotros",
    "estudio de sistemas digitales",
    "estudio digital Copenhague",
    "transformación digital",
    "software a medida",
    "automatización de negocios",
  ],
  alternates: { canonical: "/nosotros" },
  openGraph: {
    type: "website",
    url: "/nosotros",
    siteName: "WE ARE LEBA",
    title,
    description,
    locale: "es_ES",
    images: [{ url: "/portada.png", alt: "WE ARE LEBA — Digital Systems Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/portada.png"],
  },
};

export default function NosotrosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
