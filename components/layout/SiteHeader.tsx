"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: [["Work", "/work"], ["About", "/nosotros"], ["Services", "/#what-we-do"], ["Journal", "/#process"]],
  es: [["Proyectos", "/work"], ["Nosotros", "/nosotros"], ["Servicios", "/#what-we-do"], ["Ideas", "/#process"]],
};

type SiteHeaderProps = {
  tone?: "light" | "dark";
};

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en" ? { talk: "Let's talk", menu: "Menu", close: "Close" } : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };

  return (
    <header className={`site-header site-header-${tone}`}>
      <div className="site-header-inner">
        <a className="site-brand focusable" href="/" aria-label="LEBA">LEBA</a>
        <nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav">
          {links.map(([label, href]) => <a className="focusable" key={label} href={href}>{label}</a>)}
        </nav>
        <div className="site-header-actions">
          <div className="site-language-selector flex items-center gap-2 mr-5 text-[11px] tracking-[0.16em]" aria-label="Language selector">
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "en" ? "is-active" : "is-inactive"}`} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span className="language-separator">/</span>
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "es" ? "is-active" : "is-inactive"}`} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <a className="focusable site-header-cta" href="/#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a>
          <button className="focusable menu-toggle" type="button" aria-label={open ? labels.close : labels.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? labels.close : labels.menu}</button>
        </div>
      </div>
      {open && <nav aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"} className="mobile-nav">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.16em]">
          <button className={language === "en" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "es" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("es")}>ES</button>
        </div>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  );
}
