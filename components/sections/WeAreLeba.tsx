"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: "We bring clarity\nto complexity.",
    text: "We help growing businesses transform complexity into clear, purposeful digital solutions.",
    link: "Discover LEBA",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: "Damos claridad\na la complejidad.",
    text: "Ayudamos a negocios en crecimiento a transformar la complejidad en soluciones digitales claras y con propósito.",
    link: "Descubre LEBA",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h2 id="we-are-leba-title">{content.title.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h2>
        </div>

        <div className={styles.bottomRow}>
          <p>{content.text}</p>
          <Link className={styles.storyLink} href="/nosotros">
            <span>{content.link}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
