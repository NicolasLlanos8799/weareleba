"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

const copy = {
  en: {
    title: <>Ideas<br />that build<br />what&apos;s next</>,
    body: <>We design, develop and scale digital products<br />for a brighter tomorrow.</>,
    talk: "Let's talk",
    scroll: "SCROLL TO EXPLORE",
  },
  es: {
    title: <>Ideas<br />que construyen<br />lo que viene</>,
    body: <>Diseñamos, desarrollamos y hacemos crecer productos digitales<br />para construir un mañana mejor.</>,
    talk: "Hablemos",
    scroll: "DESLIZA PARA EXPLORAR",
  },
};

export function Hero() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="top" className="hero hero-cinematic" aria-labelledby="hero-title">
      <HeroReferenceVisual />
      <div className="hero-content">
        <div className="hero-copy-cinematic">
          <h1 id="hero-title" className="hero-title">{content.title}</h1>
          <p className="hero-body">{content.body}</p>
          <div className="hero-actions">
            <a className="button-primary focusable" href="#contact"><span>{content.talk}</span><span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
          <div><span className="technical">{content.scroll}</span><span className="hero-scroll-arrow">↓</span></div>
        </div>
      </div>
    </section>
  );
}
