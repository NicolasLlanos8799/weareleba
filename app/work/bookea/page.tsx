import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { BookeaCase } from "@/components/sections/BookeaCase";

export default function BookeaPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <BookeaCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
