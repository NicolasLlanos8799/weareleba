import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WorkReel } from "@/components/sections/WorkReel";

export default function WorkPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <WorkReel />
      <SiteFooter />
    </LanguageProvider>
  );
}
