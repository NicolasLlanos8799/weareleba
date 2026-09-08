"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: "We are LEBA",
    text: "A digital studio for a more human future. We partner with ambitious people and organizations to create meaningful products, brands and experiences.",
    link: "Our story",
    values: ["People", "Ideas", "Products", "Impact"],
    leftBottom: "A MORE\nHUMAN FUTURE",
    bottomLeft: "FROM\nIDEAS\nTO IMPACT",
    bottomRight: "BUILT\nTOGETHER",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: "Somos LEBA",
    text: "Un estudio digital para un futuro más humano. Trabajamos junto a personas y organizaciones ambiciosas para crear productos, marcas y experiencias significativas.",
    link: "Nuestra historia",
    values: ["Personas", "Ideas", "Productos", "Impacto"],
    leftBottom: "UN FUTURO\nMÁS HUMANO",
    bottomLeft: "DE LAS\nIDEAS\nAL IMPACTO",
    bottomRight: "CONSTRUIDO\nJUNTOS",
  },
};

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className={styles.section} aria-labelledby="we-are-leba-title">
      <div className={styles.peopleImage} aria-hidden="true">
        <div className={styles.imageOverlay} />
        <span className={styles.futureLabel}>{content.leftBottom.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h2 id="we-are-leba-title">{content.title}</h2>
        <p>{content.text}</p>
        <Link className={styles.storyLink} href="/nosotros">
          <span>{content.link}</span><span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.values}>
        {content.values.map((value) => <span key={value}>{value}</span>)}
      </div>

      <div className={styles.mountainImage} aria-hidden="true">
        <div className={styles.mountainOverlay} />
        <span className={styles.bottomLabel}>{content.bottomLeft.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
        <span className={styles.togetherLabel}>{content.bottomRight.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
      </div>
    </section>
  );
}
