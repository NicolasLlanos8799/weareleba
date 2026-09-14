import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function WorkInProcessPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="min-h-screen bg-[#171717] text-white flex items-center">
        <section className="w-full px-6 md:px-12 lg:px-20 pt-32 pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="border-t border-white/25 pt-5 flex items-start justify-between gap-8">
              <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-white/60">WE ARE LEBA / WORK</span>
              <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-white/60">01 — 01</span>
            </div>

            <div className="min-h-[58vh] flex flex-col justify-center py-20 md:py-28">
              <p className="text-[11px] md:text-xs tracking-[0.18em] uppercase text-white/55 mb-8">Portfolio in progress</p>
              <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-[-0.055em] font-medium max-w-6xl">
                Work is<br />
                <span className="text-white/45">in process.</span>
              </h1>
              <div className="mt-12 md:mt-16 max-w-xl">
                <p className="text-base md:text-lg leading-relaxed text-white/70">
                  We are currently building this space to showcase the digital products,
                  systems and experiences we create. Our selected work will be here soon.
                </p>
              </div>
            </div>

            <div className="border-t border-white/15 pt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="text-[10px] md:text-xs tracking-[0.14em] uppercase text-white/45 max-w-sm">
                Digital products · systems · experiences
              </p>
              <a href="/" className="text-xs md:text-sm tracking-[0.12em] uppercase text-white hover:text-white/60 transition-colors">
                Back to studio <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
