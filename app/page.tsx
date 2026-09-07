import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { OurProcess } from "@/components/sections/OurProcess";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <OurProcess />
      </main>
    </LanguageProvider>
  );
}
