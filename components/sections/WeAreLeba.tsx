"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: "We build what's next.",
    text: "We are a digital studio working with ambitious people and organizations to build meaningful digital products and experiences.",
    link: "Our story",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: "Construimos lo que viene.",
    text: "Somos un estudio digital que trabaja junto a personas y organizaciones ambiciosas para crear productos y experiencias digitales significativas.",
    link: "Nuestra historia",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h2 id="we-are-leba-title">{content.title}</h2>
        <p>{content.text}</p>
        <Link className={styles.storyLink} href="/nosotros">
          <span>{content.link}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.panorama} aria-hidden="true" />
    </section>
  );
}
