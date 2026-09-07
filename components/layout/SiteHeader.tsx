"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: [["Work", "/work"], ["About", "/#team"], ["Services", "/#what-we-do"], ["Journal", "/#process"]],
  es: [["Proyectos", "/work"], ["Nosotros", "/#team"], ["Servicios", "/#what-we-do"], ["Ideas", "/#process"]],
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en" ? { talk: "Let's talk", menu: "Menu", close: "Close" } : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };
  return <header className="site-header"><div className="site-header-inner"><a className="site-brand focusable" href="/" aria-label="LEBA">LEBA</a><nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav">{links.map(([label, href]) => <a className="focusable" key={label} href={href}>{label}</a>)}</nav><div className="site-header-actions"><div className="flex items-center gap-2 mr-5 text-[11px] tracking-[0.16em] text-white/70" aria-label="Language selector"><button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "en" ? "text-white opacity-100" : "text-white/45 opacity-70 hover:opacity-100"}`} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button><span className="text-white/35">/</span><button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "es" ? "text-white opacity-100" : "text-white/45 opacity-70 hover:opacity-100"}`} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button></div><a className="focusable site-header-cta" href="/#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a><button className="focusable menu-toggle" type="button" aria-label={open ? labels.close : labels.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? labels.close : labels.menu}</button></div></div>{open && <nav aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"} className="mobile-nav"><div className="flex items-center gap-2 text-[11px] tracking-[0.16em]"><button className={language === "en" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "es" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("es")}>ES</button></div>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>;
}
