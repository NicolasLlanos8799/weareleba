"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

const process = {
  en: [
    ["01", "Understand", "LISTEN · ANALYZE · FIND OPPORTUNITIES"],
    ["02", "Propose", "DEFINE · PLAN · VALIDATE"],
    ["03", "Build", "DEVELOP · TEST · ITERATE"],
    ["04", "Scale", "LAUNCH · MEASURE · IMPROVE"],
  ],
  es: [
    ["01", "Entender", "ESCUCHAR · ANALIZAR · ENCONTRAR OPORTUNIDADES"],
    ["02", "Proponer", "DEFINIR · PLANIFICAR · VALIDAR"],
    ["03", "Construir", "DESARROLLAR · PROBAR · ITERAR"],
    ["04", "Escalar", "LANZAR · MEDIR · MEJORAR"],
  ],
};

export function ProcessSection() {
  const { language } = useLanguage();
  const steps = process[language];

  return (
    <section id="process" className="bg-[#f1f0ed] text-[#292a2d] px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-[#292a2d]/30 pt-5 flex items-start justify-between gap-8">
          <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase opacity-65">
            {language === "en" ? "WE ARE LEBA / PROCESS" : "WE ARE LEBA / PROCESO"}
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase opacity-65">04 — 04</span>
        </div>

        <div className="py-16 md:py-20 lg:py-24 grid lg:grid-cols-[minmax(280px,.7fr)_1.3fr] gap-14 lg:gap-24">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.18em] uppercase opacity-55 mb-7">
              {language === "en" ? "Our process" : "Nuestro proceso"}
            </p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] leading-[.9] tracking-[-.055em] font-medium max-w-3xl">
              {language === "en" ? <>From complexity<br />to clarity.</> : <>De la complejidad<br />a la claridad.</>}
            </h2>
          </div>

          <div className="border-t border-[#292a2d]/20">
            {steps.map(([number, title, detail]) => (
              <div key={number} className="grid grid-cols-[52px_1fr] md:grid-cols-[70px_1fr_auto] gap-5 md:gap-8 py-7 md:py-9 border-b border-[#292a2d]/20">
                <span className="text-[11px] tracking-[0.16em] opacity-50">{number}</span>
                <h3 className="text-[clamp(1.7rem,3vw,3rem)] leading-none tracking-[-.035em] font-medium">{title}</h3>
                <p className="md:text-right text-[9px] md:text-[10px] tracking-[0.15em] leading-relaxed opacity-55 col-start-2 md:col-start-auto max-w-[300px]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
