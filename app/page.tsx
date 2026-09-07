import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
      </main>
    </LanguageProvider>
  );
}
