import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { SeaducedExperienceCase } from "@/components/sections/SeaducedExperienceCase";

export default function SeaducedExperiencePage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <SeaducedExperienceCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
