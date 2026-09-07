"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./OurProcess.module.css";

type Step = {
  number: string;
  title: string;
  description: string;
  actions: string[];
  visual: "understand" | "propose" | "build" | "scale";
};

const content = {
  en: {
    kicker: "OUR PROCESS",
    title: <>How we approach<br />and execute<br />every project.</>,
    intro: "Every project starts with understanding the problem. From there, we design, build and continuously refine the right digital solution.",
    steps: [
      { number: "01", title: "Understand", description: "We diagnose your current business operations.", actions: ["LISTEN", "ANALYZE", "FIND OPPORTUNITIES"], visual: "understand" },
      { number: "02", title: "Propose", description: "We design a robust digital architecture.", actions: ["DEFINE", "PLAN", "VALIDATE"], visual: "propose" },
      { number: "03", title: "Build", description: "We develop your platform or system iteratively.", actions: ["DEVELOP", "TEST", "ITERATE"], visual: "build" },
      { number: "04", title: "Scale", description: "We integrate and refine dynamically in production.", actions: ["LAUNCH", "MEASURE", "IMPROVE"], visual: "scale" },
    ] as Step[],
    footer: "SAME PURPOSE. DIFFERENT PATHS.",
  },
  es: {
    kicker: "NUESTRO PROCESO",
    title: <>Cómo abordamos<br />y ejecutamos<br />cada proyecto.</>,
    intro: "Cada proyecto comienza entendiendo el problema. A partir de ahí, diseñamos, construimos y refinamos continuamente la solución digital adecuada.",
    steps: [
      { number: "01", title: "Entender", description: "Diagnosticamos la operación actual del negocio.", actions: ["ESCUCHAR", "ANALIZAR", "ENCONTRAR OPORTUNIDADES"], visual: "understand" },
      { number: "02", title: "Proponer", description: "Diseñamos una arquitectura digital robusta.", actions: ["DEFINIR", "PLANIFICAR", "VALIDAR"], visual: "propose" },
      { number: "03", title: "Construir", description: "Desarrollamos iterativamente la plataforma o sistema.", actions: ["DESARROLLAR", "PROBAR", "ITERAR"], visual: "build" },
      { number: "04", title: "Escalar", description: "Integramos y refinamos dinámicamente en producción.", actions: ["LANZAR", "MEDIR", "MEJORAR"], visual: "scale" },
    ] as Step[],
    footer: "MISMO PROPÓSITO. DIFERENTES CAMINOS.",
  },
};

function ProcessVisual({ type }: { type: Step["visual"] }) {
  if (type === "understand") {
    return <svg className={styles.visual} viewBox="0 0 320 180" fill="none" aria-hidden="true"><circle cx="88" cy="86" r="54" stroke="currentColor" opacity=".24"/><circle cx="128" cy="104" r="48" fill="currentColor" opacity=".09"/><circle cx="152" cy="124" r="28" fill="currentColor" opacity=".14"/><circle cx="174" cy="130" r="16" fill="currentColor" opacity=".8"/><path d="M34 88H128M128 88V32M174 72V146M128 124H214" stroke="currentColor" opacity=".42"/><circle cx="226" cy="88" r="2.5" fill="currentColor"/><circle cx="256" cy="88" r="2.5" fill="currentColor"/><circle cx="286" cy="88" r="2.5" fill="currentColor"/></svg>;
  }
  if (type === "propose") {
    return <svg className={styles.visual} viewBox="0 0 320 180" fill="none" aria-hidden="true"><path d="M72 142V48L154 16V110L72 142Z" fill="currentColor" opacity=".08"/><path d="M112 152V56L194 24V120L112 152Z" fill="currentColor" opacity=".16"/><path d="M154 158V64L238 30V126L154 158Z" fill="currentColor" opacity=".28"/><path d="M72 142V48L154 16M112 152V56L194 24M154 158V64L238 30" stroke="currentColor" opacity=".45"/><path d="M42 108H280M74 168H242" stroke="currentColor" opacity=".28"/></svg>;
  }
  if (type === "build") {
    return <svg className={styles.visual} viewBox="0 0 320 180" fill="none" aria-hidden="true"><path d="M92 62L126 42L160 62L126 82L92 62Z" fill="currentColor" opacity=".28"/><path d="M92 62V102L126 122V82L92 62ZM126 82L160 62V102L126 122V82Z" fill="currentColor" opacity=".12"/><path d="M154 96L190 74L226 96L190 118L154 96Z" fill="currentColor" opacity=".38"/><path d="M154 96V136L190 158V118L154 96ZM190 118L226 96V136L190 158V118Z" fill="currentColor" opacity=".18"/><path d="M128 88L188 118M160 62L226 96" stroke="currentColor" opacity=".42"/><circle cx="58" cy="96" r="2.5" fill="currentColor"/><circle cx="270" cy="72" r="2.5" fill="currentColor"/><path d="M58 96H92M226 96H270" stroke="currentColor" opacity=".35"/></svg>;
  }
  return <svg className={styles.visual} viewBox="0 0 320 180" fill="none" aria-hidden="true"><circle cx="160" cy="90" r="58" fill="currentColor" opacity=".1"/><path d="M54 122C76 50 128 154 266 44" stroke="currentColor" opacity=".55"/><path d="M264 44L244 45M264 44L258 62" stroke="currentColor" opacity=".7"/><circle cx="58" cy="122" r="4" fill="currentColor"/><circle cx="264" cy="44" r="4" fill="currentColor"/><path d="M224 118C246 132 268 128 282 114" stroke="currentColor" opacity=".28"/><circle cx="286" cy="108" r="2.5" fill="currentColor"/></svg>;
}

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
              <ProcessVisual type={step.visual} />
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
