"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

const copy = {
  en: {
    eyebrow: "IDEAS TO IMPACT",
    title: <>Ideas<br />in action<span className="hero-title-dot">.</span></>,
    body: <>A selection of digital products, platforms and experiences we&apos;ve designed and built to create real impact.</>,
    explore: "EXPLORE OUR WORK",
    scroll: "SCROLL TO EXPLORE",
  },
  es: {
    eyebrow: "IDEAS TO IMPACT",
    title: <>Ideas<br />en acción<span className="hero-title-dot">.</span></>,
    body: <>Una selección de productos, plataformas y experiencias digitales que hemos diseñado y construido para generar un impacto real.</>,
    explore: "EXPLORAR NUESTRO TRABAJO",
    scroll: "DESLIZA PARA EXPLORAR",
  },
};

export function Hero() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="top" className={`hero hero-cinematic language-${language}`} aria-labelledby="hero-title">
      <HeroReferenceVisual />

      <div className="hero-content">
        <div className="hero-copy-cinematic">
          <p className="hero-eyebrow technical" data-reveal="left">{content.eyebrow}</p>
          <h1 id="hero-title" className="hero-title" data-reveal="left">{content.title}</h1>
          <p className="hero-body motion-stagger-1" data-reveal>{content.body}</p>

          <div className="hero-actions motion-stagger-2" data-reveal>
            <a className="hero-work-link focusable" href="/work">
              <span className="hero-work-icon" aria-hidden="true">→</span>
              <span>{content.explore}</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
          <div>
            <span className="technical">{content.scroll}</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
