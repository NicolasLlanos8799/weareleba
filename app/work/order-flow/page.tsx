import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { OrderFlowCase } from "@/components/sections/OrderFlowCase";

export default function OrderFlowPage() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <OrderFlowCase />
      <SiteFooter />
    </LanguageProvider>
  );
}
