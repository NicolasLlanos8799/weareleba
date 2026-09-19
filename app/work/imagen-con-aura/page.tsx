import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { ImagenConAuraCase } from "@/components/sections/ImagenConAuraCase";

export default function ImagenConAuraPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <ImagenConAuraCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
