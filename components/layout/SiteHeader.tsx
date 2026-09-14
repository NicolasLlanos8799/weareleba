"use client";

import { CSSProperties, useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: [["Work", "/work"], ["About", "/nosotros"], ["Services", "/#what-we-do"], ["Journal", "/#process"]],
  es: [["Proyectos", "/work"], ["Nosotros", "/nosotros"], ["Servicios", "/#what-we-do"], ["Ideas", "/#process"]],
};

type SiteHeaderProps = { tone?: "light" | "dark" };

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(tone === "dark");
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en" ? { talk: "Let's talk", menu: "Menu", close: "Close" } : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };

  useEffect(() => {
    const detectBackground = () => {
      const probe = document.elementFromPoint(window.innerWidth / 2, 72);
      let node: Element | null = probe;
      let background = "rgba(0, 0, 0, 0)";

      while (node) {
        const value = window.getComputedStyle(node).backgroundColor;
        if (value && value !== "rgba(0, 0, 0, 0)" && value !== "transparent") {
          background = value;
          break;
        }
        node = node.parentElement;
      }

      const match = background.match(/rgba?\(([^)]+)\)/);
      if (match) {
        const values = match[1].split(",").map((value) => Number.parseFloat(value.trim()));
        if (values.length >= 3) {
          const alpha = values.length === 4 ? values[3] : 1;
          if (alpha > 0.05) {
            const luminance = (0.299 * values[0] + 0.587 * values[1] + 0.114 * values[2]) / 255;
            setIsDarkBackground(luminance < 0.52);
            return;
          }
        }
      }
    };

    detectBackground();
    window.addEventListener("scroll", detectBackground, { passive: true });
    window.addEventListener("resize", detectBackground);
    return () => {
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, [tone]);

  const strong = isDarkBackground ? "rgba(255,255,255,.96)" : "#292a2d";
  const muted = isDarkBackground ? "rgba(255,255,255,.72)" : "rgba(41,42,45,.68)";
  const border = isDarkBackground ? "rgba(255,255,255,.48)" : "rgba(41,42,45,.32)";
  const headerStyle = {
    color: strong,
    background: isDarkBackground ? "rgba(10,10,10,.72)" : "rgba(242,240,235,.78)",
    backdropFilter: "blur(18px) saturate(115%)",
    WebkitBackdropFilter: "blur(18px) saturate(115%)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  } as CSSProperties;
  const ctaStyle = { color: strong, borderColor: border } as CSSProperties;

  return (
    <header className={`site-header site-header-${tone}`} style={headerStyle}>
      <div className="site-header-inner">
        <a className="site-brand focusable" style={{ color: strong }} href="/" aria-label="LEBA">LEBA</a>
        <nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav" style={{ color: muted }}>
          {links.map(([label, href]) => <a className="focusable" style={{ color: muted }} key={label} href={href}>{label}</a>)}
        </nav>
        <div className="site-header-actions">
          <div className="site-language-selector flex items-center gap-2 mr-5 text-[11px] tracking-[0.16em]" style={{ color: muted }} aria-label="Language selector">
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "en" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={{ color: language === "en" ? strong : muted }} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span style={{ opacity: .55 }}>/</span>
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "es" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={{ color: language === "es" ? strong : muted }} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <a className="focusable site-header-cta" style={ctaStyle} href="/#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a>
          <button
            className="focusable menu-toggle"
            style={{ color: strong }}
            type="button"
            aria-label={open ? labels.close : labels.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? labels.close : labels.menu}</span>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && <nav aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"} className="mobile-nav">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.16em]"><button className={language === "en" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "es" ? "font-medium" : "opacity-50"} type="button" onClick={() => setLanguage("es")}>ES</button></div>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  );
}
