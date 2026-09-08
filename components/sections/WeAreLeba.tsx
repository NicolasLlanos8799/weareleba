"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: <>We build what&apos;s next.<br />Together.</>,
    text: "A digital studio for a more human future. We partner with ambitious people and organizations to turn meaningful ideas into products, brands and experiences.",
    link: "Meet the people behind it",
    values: ["People", "Ideas", "Products", "Impact"],
    index: "04 / 04",
    imageCaption: "A more human future",
    landscapeCaption: "From ideas to impact",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: <>Construimos lo que sigue.<br />Juntos.</>,
    text: "Un estudio digital para un futuro más humano. Trabajamos junto a personas y organizaciones ambiciosas para transformar ideas significativas en productos, marcas y experiencias.",
    link: "Conoce a las personas detrás",
    values: ["Personas", "Ideas", "Productos", "Impacto"],
    index: "04 / 04",
    imageCaption: "Un futuro más humano",
    landscapeCaption: "De las ideas al impacto",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.header}>
        <span>{content.eyebrow}</span>
        <span>{content.index}</span>
      </div>

      <div className={styles.intro}>
        <div className={styles.portrait} aria-hidden="true">
          <div className={styles.portraitCaption}>{content.imageCaption}</div>
        </div>

        <div className={styles.statement}>
          <h2 id="we-are-leba-title">{content.title}</h2>
          <div className={styles.description}>
            <p>{content.text}</p>
            <Link className={styles.storyLink} href="/nosotros">
              <span>{content.link}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.values} aria-label="LEBA values">
          {content.values.map((value, index) => (
            <div className={styles.value} key={value}>
              <span>0{index + 1}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.landscape} aria-hidden="true">
        <div className={styles.landscapeCaption}>{content.landscapeCaption}</div>
        <div className={styles.landscapeLine} />
        <span className={styles.landscapeNumber}>WE ARE LEBA</span>
      </div>
    </section>
  );
}
