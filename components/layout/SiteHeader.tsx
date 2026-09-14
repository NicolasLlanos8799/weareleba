"use client";

import { CSSProperties, useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navigation = {
  en: [["Work", "/workinprocess"], ["Systems", "/#what-we-do"], ["Studio", "/about"]],
  es: [["Work", "/workinprocess"], ["Systems", "/#what-we-do"], ["Studio", "/nosotros"]],
};

type SiteHeaderProps = { tone?: "light" | "dark" };

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const { language, setLanguage } = useLanguage();
  const links = navigation[language];
  const labels = language === "en" ? { talk: "Let's talk", menu: "Menu", close: "Close" } : { talk: "Hablemos", menu: "Menú", close: "Cerrar" };

  useEffect(() => {
    let frame = 0;

    const updateContrast = () => {
      const headerHeight = 110;
      const samplePoints = [
        [window.innerWidth * 0.12, headerHeight],
        [window.innerWidth * 0.5, headerHeight],
        [window.innerWidth * 0.88, headerHeight],
      ];

      const luminances: number[] = [];

      for (const [x, y] of samplePoints) {
        const element = document.elementFromPoint(x, Math.min(y, window.innerHeight - 1)) as HTMLElement | null;
        let current = element;
        let background = "transparent";

        while (current && current !== document.body) {
          const computed = window.getComputedStyle(current);
          if (computed.backgroundColor !== "rgba(0, 0, 0, 0)" && computed.backgroundColor !== "transparent") {
            background = computed.backgroundColor;
            break;
          }
          current = current.parentElement;
        }

        const match = background.match(/rgba?\(([^)]+)\)/);
        if (match) {
          const parts = match[1].split(",").map((part) => parseFloat(part.trim()));
          const [r, g, b] = parts;
          if ([r, g, b].every((value) => Number.isFinite(value))) {
            luminances.push((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255);
          }
        }
      }

      if (luminances.length) {
        const average = luminances.reduce((sum, value) => sum + value, 0) / luminances.length;
        setIsDarkBackground(average < 0.52);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateContrast);
    };

    updateContrast();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateContrast);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateContrast);
    };
  }, []);

  const foreground = isDarkBackground ? "rgba(255,255,255,.96)" : "rgba(23,23,23,.94)";
  const muted = isDarkBackground ? "rgba(255,255,255,.72)" : "rgba(23,23,23,.68)";
  const border = isDarkBackground ? "rgba(255,255,255,.42)" : "rgba(23,23,23,.30)";

  const headerStyle = {
    background: "transparent",
    backdropFilter: "blur(28px) saturate(115%)",
    WebkitBackdropFilter: "blur(28px) saturate(115%)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    color: foreground,
    "--header-fg": foreground,
    "--header-muted": muted,
    "--header-border": border,
    transition: "color 220ms ease",
  } as CSSProperties;

  const textStyle = { color: "var(--header-fg)", transition: "color 220ms ease" } as CSSProperties;
  const mutedStyle = { color: "var(--header-muted)", transition: "color 220ms ease" } as CSSProperties;
  const ctaStyle = { color: "var(--header-fg)", borderColor: "var(--header-border)", transition: "color 220ms ease, border-color 220ms ease" } as CSSProperties;

  return (
    <header className={`site-header site-header-${tone}`} style={headerStyle}>
      <div className="site-header-inner">
        <a className="site-brand focusable" style={textStyle} href="/" aria-label="LEBA">LEBA</a>
        <nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className="desktop-nav site-nav" style={mutedStyle}>
          {links.map(([label, href]) => <a className="focusable" style={mutedStyle} key={label} href={href}>{label}</a>)}
        </nav>
        <div className="site-header-actions">
          <div className="site-language-selector flex items-center gap-2 mr-5 text-[11px] tracking-[0.16em]" style={mutedStyle} aria-label="Language selector">
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "en" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={textStyle} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span style={{ opacity: .55 }}> / </span>
            <button className={`focusable border-0 bg-transparent p-0 cursor-pointer transition-opacity ${language === "es" ? "opacity-100" : "opacity-45 hover:opacity-100"}`} style={textStyle} type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <a className="focusable site-header-cta" style={ctaStyle} href="/#contact"><span>{labels.talk}</span><span aria-hidden="true">→</span></a>
          <button
            className="focusable menu-toggle"
            style={textStyle}
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
