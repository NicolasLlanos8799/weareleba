import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { WorkPortfolio } from "@/components/sections/WorkPortfolio";

export default function WorkPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <WorkPortfolio />
      <SiteFooter />
    </LanguageProvider>
  );
}
