import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "WE ARE LEBA — Digital Systems Studio",
  description: "Diseñamos sistemas digitales que organizan y potencian negocios.",
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>
        {children}
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
