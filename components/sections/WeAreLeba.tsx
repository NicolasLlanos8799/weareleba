"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    brand: "WE ARE LEBA",
    statement: "We bring clarity to complexity.",
    description: "We are a digital studio that brings clarity and structure to growing businesses. We take the time to understand how your business works, where the friction is and what is holding you back. Then we transform complexity into clear, purposeful digital solutions — creating structure, bringing order and building systems that give you more control and more time.",
    link: "Discover LEBA",
    transition: "FROM CLARITY, WE BUILD.",
  },
  es: {
    brand: "SOMOS LEBA",
    statement: "Damos claridad a la complejidad.",
    description: "Somos un estudio digital que aporta claridad y estructura a negocios en crecimiento. Nos tomamos el tiempo para entender cómo funciona tu negocio, dónde está la fricción y qué te está frenando. Después transformamos esa complejidad en soluciones digitales claras y con propósito: creando estructura, poniendo orden y construyendo sistemas que te dan más control y más tiempo.",
    link: "Descubre LEBA",
    transition: "DESDE LA CLARIDAD, CONSTRUIMOS.",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="we-are-leba-title" className={styles.brand} data-reveal="up">{content.brand}</h2>
        <div className={styles.message}>
          <h3 data-reveal="up">{content.statement}</h3>
          <p data-reveal="up">{content.description}</p>
          <Link className={styles.storyLink} href="/nosotros" data-reveal="up">
            <span>{content.link}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className={styles.transition} aria-hidden="true">
        <span />
        <p>{content.transition}</p>
        <b>↓</b>
        <span />
      </div>
    </section>
  );
}
