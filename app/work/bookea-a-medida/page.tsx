import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { BookeaCustomCase } from "@/components/sections/BookeaCustomCase";

export default function BookeaCustomPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <BookeaCustomCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
