import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { OurProcess } from "@/components/sections/OurProcess";
import { WhoHelps } from "@/components/sections/WhoHelps";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <OurProcess />
        <WhoHelps />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
