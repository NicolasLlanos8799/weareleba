"use client";

import { CSSProperties, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: [["Work", "/work"], ["About", "/nosotros"], ["Services", "/#what-we-do"], ["Journal", "/#process"]],
  es: [["Proyectos", "/work"], ["Nosotros", "/nosotros"], ["Servicios", "/#what-we-do"], ["Ideas", "/#process"]],
};

type SiteHeaderProps = { tone?: "light" | "dark" };

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en" ? { talk: "Let's talk", menu: "Menu", close: "Close" } : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };
  const isDark = tone === "dark";
  const strong = isDark ? "#292a2d" : "rgba(255,255,255,.92)";
  const muted = isDark ? "rgba(41,42,45,.68)" : "rgba(255,255,255,.78)";
  const border = isDark ? "rgba(41,42,45,.32)" : "rgba(255,255,255,.75)";
  const headerStyle = (isDark ? { color: strong, background: "rgba(232,231,227,.92)", borderBottom: "1px solid rgba(41,42,45,.1)" } : { color: strong }) as CSSProperties;
  const ctaStyle = { color: strong, borderColor: border } as CSSProperties;

  return (
    <header className={`site-header site-header-${tone}`} style={headerStyle}>
      <div className="site-header-inner">
        <a className="site-brand focusable" href="/" aria-label="LEBA">LEBA</a>
        <nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav" style={{ color: muted }}>
          {links.map(([label, href]) => <a className="focusable" key={label} href={href}>{label}</a>)}
        </nav>
        <div className="site-header-actions">
          <div className="site-language-selector flex items-center gap-2 mr-5 text-[11px] tracking-[0.16em]" style={{ color: muted }} aria-label="Language selector">
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "en" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={{ color: language === "en" ? strong : muted }} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span style={{ opacity: .55 }}>/</span>
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "es" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={{ color: language === "es" ? strong : muted }} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <a className="focusable site-header-cta" style={ctaStyle} href="/#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a>
          <button className="focusable menu-toggle" style={{ color: strong }} type="button" aria-label={open ? labels.close : labels.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? labels.close : labels.menu}</button>
        </div>
      </div>
      {open && <nav aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"} className="mobile-nav">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.16em]"><button className={language === "en" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "es" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("es")}>ES</button></div>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  );
}
