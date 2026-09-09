import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollMotion } from "@/components/system/ScrollMotion";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WeAreLeba } from "@/components/sections/WeAreLeba";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollMotion />
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <WeAreLeba />
      </main>
      <SiteFooter />
      <style>{`
        /* Home / What We Do — clearer editorial spacing and stronger work CTA */
        .what-we-do-footer {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) auto !important;
          align-items: end !important;
          column-gap: clamp(56px, 10vw, 180px) !important;
          row-gap: 42px !important;
        }

        .what-we-do-footer > div:first-child {
          display: grid !important;
          gap: clamp(26px, 3vw, 42px) !important;
        }

        .what-we-do-footer > div:first-child > span {
          display: inline-flex !important;
          align-items: center !important;
          gap: 16px !important;
          width: max-content !important;
        }

        .what-we-do-portfolio-prompt {
          max-width: 620px !important;
          margin: 0 !important;
          font-size: clamp(18px, 1.55vw, 25px) !important;
          line-height: 1.35 !important;
          letter-spacing: -.028em !important;
          color: #3f4246 !important;
        }

        .what-we-do-work-link {
          min-width: clamp(220px, 18vw, 290px) !important;
          min-height: 72px !important;
          padding: 0 24px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 28px !important;
          border: 1px solid rgba(41,42,45,.55) !important;
          border-radius: 999px !important;
          background: transparent !important;
          color: #292a2d !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          letter-spacing: .16em !important;
          transition: background .25s ease, color .25s ease, transform .25s ease !important;
        }

        .what-we-do-work-link b {
          font-size: 24px !important;
          font-weight: 400 !important;
          line-height: 1 !important;
        }

        .what-we-do-work-link:hover {
          background: #292a2d !important;
          color: #f1f0ed !important;
          transform: translateY(-2px) !important;
        }

        @media (max-width: 800px) {
          .what-we-do-footer {
            grid-template-columns: 1fr !important;
            align-items: start !important;
          }

          .what-we-do-work-link {
            width: 100% !important;
            max-width: 360px !important;
          }
        }
      `}</style>
    </LanguageProvider>
  );
}
