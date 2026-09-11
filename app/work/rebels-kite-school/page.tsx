import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { RebelsKiteSchoolCase } from "@/components/sections/RebelsKiteSchoolCase";

export default function RebelsKiteSchoolPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <RebelsKiteSchoolCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
