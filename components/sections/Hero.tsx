"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

const copy = {
  en: {
    eyebrow: "DIGITAL SOLUTIONS / FOR REAL IMPACT",
    title: <>Ideas<br />in action<span className="hero-title-dot">.</span></>,
    body: <>We design and build digital products, platforms and experiences that help businesses grow and make a real impact.</>,
    explore: "SEE OUR WORK",
    scroll: "SCROLL TO EXPLORE",
  },
  es: {
    eyebrow: "SOLUCIONES DIGITALES / PARA UN IMPACTO REAL",
    title: <>Ideas<br />en acción<span className="hero-title-dot">.</span></>,
    body: <>Diseñamos y construimos productos, plataformas y experiencias digitales que ayudan a las empresas a crecer y generar un impacto real.</>,
    explore: "VER NUESTRO TRABAJO",
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
              <span className="hero-work-label">{content.explore}</span>
              <span className="hero-work-arrow" aria-hidden="true">→</span>
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
