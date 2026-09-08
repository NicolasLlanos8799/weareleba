"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

const copy = {
  en: {
    eyebrow: "WE ARE LEBA",
    title: "We bring clarity to complexity.",
    description: "We are a digital studio that brings clarity and structure to growing businesses.\n\nAs businesses grow, so does complexity. More processes, more tools, more tasks and less time to focus on what truly matters.\n\nThat’s where we come in.\n\nWe take the time to understand how your business works, where the friction is and what is holding you back. Then we transform complexity into clear, purposeful digital solutions.\n\nWe create structure. We bring order. We build systems that give you more control and more time.\n\nNot to add more technology, but to make business feel simpler.",
    link: "Discover LEBA",
  },
  es: {
    eyebrow: "SOMOS LEBA",
    title: "Damos claridad a la complejidad.",
    description: "Somos un estudio digital que aporta claridad y estructura a negocios en crecimiento.\n\nA medida que los negocios crecen, también lo hace la complejidad. Más procesos, más herramientas, más tareas y menos tiempo para enfocarse en lo que realmente importa.\n\nAhí es donde entramos nosotros.\n\nNos tomamos el tiempo para entender cómo funciona tu negocio, dónde está la fricción y qué te está frenando. Después transformamos esa complejidad en soluciones digitales claras y con propósito.\n\nCreamos estructura. Ponemos orden. Construimos sistemas que te dan más control y más tiempo.\n\nNo para añadir más tecnología, sino para hacer que tu negocio se sienta más simple.",
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
        <div className={styles.layout}>
          <h2 id="we-are-leba-title">{content.title}</h2>
          <div className={styles.description}>
            {content.description.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className={styles.storyLink} href="/nosotros">
              <span>{content.link}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
