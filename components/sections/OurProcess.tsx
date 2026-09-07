"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./OurProcess.module.css";

type Step = {
  number: string;
  title: string;
  description: string;
  actions: string[];
};

const content = {
  en: {
    kicker: "OUR PROCESS",
    title: <>How we approach<br />and execute<br />every project.</>,
    intro: "Every project starts with understanding the problem. From there, we design, build and continuously refine the right digital solution.",
    steps: [
      { number: "01", title: "Understand", description: "We diagnose your current business operations.", actions: ["LISTEN", "ANALYZE", "FIND OPPORTUNITIES"] },
      { number: "02", title: "Propose", description: "We design a robust digital architecture.", actions: ["DEFINE", "PLAN", "VALIDATE"] },
      { number: "03", title: "Build", description: "We develop your platform or system iteratively.", actions: ["DEVELOP", "TEST", "ITERATE"] },
      { number: "04", title: "Scale", description: "We integrate and refine dynamically in production.", actions: ["LAUNCH", "MEASURE", "IMPROVE"] },
    ] as Step[],
    footer: "SAME PURPOSE. DIFFERENT PATHS.",
  },
  es: {
    kicker: "NUESTRO PROCESO",
    title: <>Cómo abordamos<br />y ejecutamos<br />cada proyecto.</>,
    intro: "Cada proyecto comienza entendiendo el problema. A partir de ahí, diseñamos, construimos y refinamos continuamente la solución digital adecuada.",
    steps: [
      { number: "01", title: "Entender", description: "Diagnosticamos la operación actual del negocio.", actions: ["ESCUCHAR", "ANALIZAR", "ENCONTRAR OPORTUNIDADES"] },
      { number: "02", title: "Proponer", description: "Diseñamos una arquitectura digital robusta.", actions: ["DEFINIR", "PLANIFICAR", "VALIDAR"] },
      { number: "03", title: "Construir", description: "Desarrollamos iterativamente la plataforma o sistema.", actions: ["DESARROLLAR", "PROBAR", "ITERAR"] },
      { number: "04", title: "Escalar", description: "Integramos y refinamos dinámicamente en producción.", actions: ["LANZAR", "MEDIR", "MEJORAR"] },
    ] as Step[],
    footer: "MISMO PROPÓSITO. DIFERENTES CAMINOS.",
  },
};

export function OurProcess() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <section className={styles.process} id="process" aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.kicker}><span /> {copy.kicker}</div>
        <header className={styles.header}>
          <h2 id="process-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </header>

        <div className={styles.grid}>
          {copy.steps.map((step) => (
            <article className={styles.step} key={step.number}>
              <div className={styles.topline}><span>{step.number}</span><i /></div>
              <h3>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <div className={styles.actions}>
                {step.actions.map((action) => <span key={action}>{action}</span>)}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footer}>
          <span><i /> {copy.footer}</span>
          <span>WE ARE LEBA</span>
        </footer>
      </div>
    </section>
  );
}
