import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { WhoHelps } from "@/components/sections/WhoHelps";

export default function NosotrosPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <main>
        <WhoHelps />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
