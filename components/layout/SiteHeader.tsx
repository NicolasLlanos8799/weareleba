"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: ["Work", "About", "Services", "Journal"],
  es: ["Proyectos", "Nosotros", "Servicios", "Ideas"],
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en"
    ? { talk: "Let's talk", menu: "Menu", close: "Close" }
    : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand focusable" href="#top" aria-label="LEBA">LEBA</a>

        <nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav">
          {links.map((link) => (
            <a className="focusable" key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</a>
          ))}
        </nav>

        <div className="site-header-actions">
          <div className="language-switcher" aria-label="Language selector">
            <button className={language === "en" ? "is-active" : ""} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span>/</span>
            <button className={language === "es" ? "is-active" : ""} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <a className="focusable site-header-cta" href="#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a>
          <button className="focusable menu-toggle" type="button" aria-label={open ? labels.close : labels.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? labels.close : labels.menu}</button>
        </div>
      </div>

      {open && (
        <nav aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"} className="mobile-nav">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setOpen(false)}>{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
