import type { Metadata } from "next";
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
