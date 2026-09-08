"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: "We bring clarity to complexity.",
    description: "We are a digital studio that brings clarity and structure to growing businesses. We take the time to understand how your business works, where the friction is and what is holding you back. Then we transform complexity into clear, purposeful digital solutions — creating structure, bringing order and building systems that give you more control and more time.",
    link: "Discover LEBA",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: "Damos claridad a la complejidad.",
    description: "Somos un estudio digital que aporta claridad y estructura a negocios en crecimiento. Nos tomamos el tiempo para entender cómo funciona tu negocio, dónde está la fricción y qué te está frenando. Después transformamos esa complejidad en soluciones digitales claras y con propósito: creando estructura, poniendo orden y construyendo sistemas que te dan más control y más tiempo.",
    link: "Descubre LEBA",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h2 id="we-are-leba-title">{content.title}</h2>
        <div className={styles.content}>
          <p>{content.description}</p>
          <Link className={styles.storyLink} href="/nosotros">
            <span>{content.link}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
