"use client";

import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./ProjectCaseStudy.module.css";

export type CaseStudyImage = {
  src: string;
  alt: { en: string; es: string };
  fit?: "cover" | "contain";
  priority?: boolean;
  label?: { en: string; es: string };
};

export type CaseStudyData = {
  project: { en: string; es: string };
  category: { en: string; es: string };
  description: { en: string; es: string };
  heroImage: CaseStudyImage;
  projectInfo: {
    client: { en: string; es: string };
    industry: { en: string; es: string };
    services: { en: string; es: string };
    technologies: { en: string; es: string };
    year: string;
    website?: string;
  };
  projectDescription: { en: string; es: string };
  challenge: {
    intro: { en: string; es: string };
    points: Array<{ title: { en: string; es: string }; body?: { en: string; es: string } }>;
  };
  solution: {
    intro: { en: string; es: string };
    areas: Array<{ number: string; title: { en: string; es: string }; body: { en: string; es: string } }>;
  };
  visuals: CaseStudyImage[];
  results:
    | { metrics: Array<{ value: string; label: { en: string; es: string } }> }
    | { qualitative: Array<{ title: { en: string; es: string }; body: { en: string; es: string } }> };
  client: { en: string; es: string };
  previous?: { title: { en: string; es: string }; href: string };
  next?: { title: { en: string; es: string }; href: string };
};

const labels = {
  en: {
    project: "PROJECT",
    challenge: "THE CHALLENGE",
    solution: "THE SOLUTION",
    visuals: "SELECTED VISUALS",
    results: "RESULTS",
    client: "ABOUT THE CLIENT",
    previous: "PREVIOUS PROJECT",
    next: "NEXT PROJECT",
    cta: "LET'S BUILD WHAT'S NEXT.",
    clientLabel: "Client",
    industry: "Industry",
    services: "Services",
    technologies: "Technologies",
    year: "Year",
    view: "VIEW PROJECT",
    website: "Website",
  },
  es: {
    project: "PROYECTO",
    challenge: "EL DESAFÍO",
    solution: "LA SOLUCIÓN",
    visuals: "VISUALES SELECCIONADOS",
    results: "RESULTADOS",
    client: "SOBRE EL CLIENTE",
    previous: "PROYECTO ANTERIOR",
    next: "SIGUIENTE PROYECTO",
    cta: "CONSTRUYAMOS LO QUE SIGUE.",
    clientLabel: "Cliente",
    industry: "Industria",
    services: "Servicios",
    technologies: "Tecnologías",
    year: "Año",
    view: "VER PROYECTO",
    website: "Sitio web",
  },
};

export function ProjectCaseStudy({ data }: { data: CaseStudyData }) {
  const { language } = useLanguage();
  const l = labels[language];
  const text = (value: { en: string; es: string }) => value[language];

  return (
    <main className={styles.caseStudy}>
      <section className={styles.hero}>
        <div className={styles.heroTopline}>
          <span>01 — CASE STUDY</span>
          <span>{text(data.category)}</span>
        </div>

        <div className={styles.heroCopy}>
          <div>
            <span className={styles.kicker}>{text(data.category)}</span>
            <h1>{text(data.project)}</h1>
          </div>
          <p>{text(data.description)}</p>
        </div>

        <CaseImage image={data.heroImage} priority />
        <div className={styles.imageCaption}>
          <span>{text(data.project)}</span>
          <span>{l.view} <b>↗</b></span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><span>{l.project}</span></div>
        <div className={styles.projectGrid}>
          <div className={styles.metaGrid}>
            {([
              [l.clientLabel, data.projectInfo.client],
              [l.industry, data.projectInfo.industry],
              [l.services, data.projectInfo.services],
              [l.technologies, data.projectInfo.technologies],
              [l.year, { en: data.projectInfo.year, es: data.projectInfo.year }],
            ] as const).map(([label, value]) => (
              <div className={styles.metaItem} key={label}>
                <span>{label}</span>
                <strong>{text(value)}</strong>
              </div>
            ))}
          </div>
          <p className={styles.lead}>{text(data.projectDescription)}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>03</span><span>{l.challenge}</span></div>
        <div className={styles.twoColumn}>
          <h2>{text(data.challenge.intro)}</h2>
          <div className={styles.pointList}>
            {data.challenge.points.map((point, index) => (
              <article key={point.title.en} className={styles.point}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{text(point.title)}</h3>
                  {point.body && <p>{text(point.body)}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>04</span><span>{l.solution}</span></div>
        <div className={styles.solutionIntro}><h2>{text(data.solution.intro)}</h2></div>
        <div className={styles.solutionList}>
          {data.solution.areas.map((area) => (
            <article key={area.number} className={styles.solutionRow}>
              <span>{area.number}</span>
              <h3>{text(area.title)}</h3>
              <p>{text(area.body)}</p>
              <span className={styles.solutionArrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section + " " + styles.visualSection}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <span>{l.visuals}</span>
        </div>
        <div className={styles.visuals}>
          {data.visuals.slice(0, 3).map((image, index) => (
            <CaseImage key={image.src} image={image} index={index} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>06</span><span>{l.results}</span></div>
        <div className={styles.results}>
          {"metrics" in data.results
            ? data.results.metrics.map((metric) => (
                <div className={styles.metric} key={metric.value + metric.label.en}>
                  <strong>{metric.value}</strong>
                  <span>{text(metric.label)}</span>
                </div>
              ))
            : data.results.qualitative.map((result) => (
                <article className={styles.resultText} key={result.title.en}>
                  <span>—</span>
                  <h3>{text(result.title)}</h3>
                  <p>{text(result.body)}</p>
                </article>
              ))}
        </div>
      </section>

      <section className={styles.clientSection}>
        <div className={styles.sectionLabel}><span>07</span><span>{l.client}</span></div>
        <div className={styles.clientBlock}>
          <span className={styles.clientMark}>SEADUCED</span>
          <h2>{text(data.client)}</h2>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.nextLinks}>
          {data.previous ? (
            <a href={data.previous.href}>
              <span>← {l.previous}</span>
              <strong>{text(data.previous.title)}</strong>
            </a>
          ) : <span />}
          {data.next ? (
            <a href={data.next.href}>
              <span>{l.next} →</span>
              <strong>{text(data.next.title)}</strong>
            </a>
          ) : <span />}
        </div>
        <a className={styles.cta} href="/#contact">{l.cta} <span>↗</span></a>
      </section>
    </main>
  );
}

function CaseImage({ image, index = 0, priority = false }: { image: CaseStudyImage; index?: number; priority?: boolean }) {
  return (
    <figure className={styles.imageFrame}>
      <Image
        src={image.src}
        alt={image.alt.en}
        fill
        priority={priority || image.priority || index === 0}
        sizes="(max-width: 800px) 100vw, 92vw"
        className={image.fit === "contain" ? styles.contain : styles.cover}
      />
      {image.label && <figcaption>{image.label.en}</figcaption>}
    </figure>
  );
}
