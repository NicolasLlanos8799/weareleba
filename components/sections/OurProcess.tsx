"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
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

function ProcessIcon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (index === 0) {
    return <svg viewBox="0 0 96 72" aria-hidden="true"><circle cx="37" cy="36" r="25" {...common} /><circle cx="59" cy="36" r="25" {...common} /><circle cx="48" cy="36" r="4" fill="currentColor" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M48 10 76 27 48 44 20 27 48 10Z" {...common} /><path d="m20 36 28 17 28-17M20 45l28 17 28-17" {...common} /></svg>;
  }
  if (index === 2) {
    return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M48 8 76 24v32L48 72 20 56V24L48 8Z" {...common} /><path d="M20 24 48 40l28-16M48 40v32" {...common} /></svg>;
  }
  return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M24 60 72 12M48 12h24v24" {...common} /></svg>;
}

export function OurProcess() {
  const { language } = useLanguage();
  const copy = content[language];
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((element, index) => {
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((current) => current.includes(index) ? current : [...current, index]);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [language]);

  return (
    <section className={styles.process} id="process" aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.kicker}><span /> {copy.kicker}</div>
        <header className={styles.header}>
          <h2 id="process-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </header>

        <div className={styles.grid}>
          {copy.steps.map((step, index) => (
            <article
              className={`${styles.step} ${visibleSteps.includes(index) ? styles.visible : ""}`}
              key={step.number}
              ref={(element) => { stepRefs.current[index] = element; }}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <div className={styles.topline}><span>{step.number}</span><i /></div>
              <div className={styles.icon}><ProcessIcon index={index} /></div>
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
