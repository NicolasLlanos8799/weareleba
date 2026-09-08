"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WeAreLeba.module.css";

type Step = {
  number: string;
  title: string;
  description: string;
  actions: string[];
};

const copy = {
  en: {
    brand: "WE ARE LEBA",
    statement: "We bring clarity to complexity.",
    description: "We are a digital studio that brings clarity and structure to growing businesses. We take the time to understand how your business works, where the friction is and what is holding you back. Then we transform complexity into clear, purposeful digital solutions — creating structure, bringing order and building systems that give you more control and more time.",
    link: "Discover LEBA",
    keywords: ["IDEAS", "STRUCTURE", "SOLUTIONS", "IMPACT"],
    steps: [
      { number: "01", title: "Understand", description: "We diagnose your current business operations.", actions: ["LISTEN", "ANALYZE", "FIND OPPORTUNITIES"] },
      { number: "02", title: "Propose", description: "We design a robust digital architecture.", actions: ["DEFINE", "PLAN", "VALIDATE"] },
      { number: "03", title: "Build", description: "We develop your platform or system iteratively.", actions: ["DEVELOP", "TEST", "ITERATE"] },
      { number: "04", title: "Scale", description: "We integrate and refine dynamically in production.", actions: ["LAUNCH", "MEASURE", "IMPROVE"] },
    ] as Step[],
  },
  es: {
    brand: "WE ARE LEBA",
    statement: "Damos claridad a la complejidad.",
    description: "Somos un estudio digital que aporta claridad y estructura a negocios en crecimiento. Nos tomamos el tiempo para entender cómo funciona tu negocio, dónde está la fricción y qué te está frenando. Después transformamos esa complejidad en soluciones digitales claras y con propósito: creando estructura, poniendo orden y construyendo sistemas que te dan más control y más tiempo.",
    link: "Descubre LEBA",
    keywords: ["IDEAS", "ESTRUCTURA", "SOLUCIONES", "IMPACTO"],
    steps: [
      { number: "01", title: "Entender", description: "Diagnosticamos la operación actual del negocio.", actions: ["ESCUCHAR", "ANALIZAR", "ENCONTRAR OPORTUNIDADES"] },
      { number: "02", title: "Proponer", description: "Diseñamos una arquitectura digital robusta.", actions: ["DEFINIR", "PLANIFICAR", "VALIDAR"] },
      { number: "03", title: "Construir", description: "Desarrollamos iterativamente la plataforma o sistema.", actions: ["DESARROLLAR", "PROBAR", "ITERAR"] },
      { number: "04", title: "Escalar", description: "Integramos y refinamos dinámicamente en producción.", actions: ["LANZAR", "MEDIR", "MEJORAR"] },
    ] as Step[],
  },
};

function ProcessIcon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (index === 0) return <svg viewBox="0 0 96 72" aria-hidden="true"><circle cx="37" cy="36" r="25" {...common} /><circle cx="59" cy="36" r="25" {...common} /><circle cx="48" cy="36" r="4" fill="currentColor" /></svg>;
  if (index === 1) return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M48 10 76 27 48 44 20 27 48 10Z" {...common} /><path d="m20 36 28 17 28-17M20 45l28 17 28-17" {...common} /></svg>;
  if (index === 2) return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M48 8 76 24v32L48 72 20 56V24L48 8Z" {...common} /><path d="M20 24 48 40l28-16M48 40v32" {...common} /></svg>;
  return <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M24 60 72 12M48 12h24v24" {...common} /></svg>;
}

export function WeAreLeba() {
  const { language } = useLanguage();
  const content = copy[language];
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = stepRefs.current.map((element, index) => {
      if (!element) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSteps((current) => current.includes(index) ? current : [...current, index]);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.22, rootMargin: "0px 0px -5% 0px" });
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [language]);

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ""}`} id="about" aria-labelledby="we-are-leba-title">
      <div className={styles.inner}>
        <header className={styles.hero}>
          <h2 id="we-are-leba-title" className={styles.brand}>{content.brand}</h2>
          <div className={styles.intro}>
            <h3>{content.statement}</h3>
            <p>{content.description}</p>
            <Link className={styles.storyLink} href="/nosotros"><span>{content.link}</span><span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.keywords} aria-hidden="true">
            <i />
            <div>{content.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
          </div>
        </header>

        <div className={styles.grid}>
          {content.steps.map((step, index) => (
            <article
              className={`${styles.step} ${visibleSteps.includes(index) ? styles.stepVisible : ""}`}
              key={step.number}
              ref={(element) => { stepRefs.current[index] = element; }}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <div className={styles.topline}><span>{step.number}</span><i /></div>
              <div className={styles.icon}><ProcessIcon index={index} /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className={styles.actions}>{step.actions.map((action) => <span key={action}>{action}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
