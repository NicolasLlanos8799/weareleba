"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WorkPortfolio.module.css";

type Project = { number: string; category: string; title: string; description: string; tags: string[]; href: string };

const content = {
  en: {
    eyebrow: "OUR WORK",
    title: <>Ideas<br />in action.</>,
    intro: "A selection of digital products, platforms and experiences we've designed and built to create real impact.",
    scroll: "SCROLL TO EXPLORE",
    view: "VIEW PROJECT",
    moreTitle: <>More ideas<br />coming soon.</>,
    moreCopy: "We're always working on new projects. Check back soon for updates.",
    contactTitle: "HAVE A PROJECT\nIN MIND?",
    contactCopy: "Let's build something together.",
    contact: "GET IN TOUCH",
    projects: [{ number: "01", category: "WEBSITE", title: "Seaduced\nExperience", description: "A premium digital journey for private experiences on the water.", tags: ["WEB DESIGN", "DEVELOPMENT", "UX"], href: "/work/seaduced-experience" }] as Project[],
  },
  es: {
    eyebrow: "NUESTRO TRABAJO",
    title: <>Ideas<br />en acción.</>,
    intro: "Una selección de productos, plataformas y experiencias digitales que hemos diseñado y construido para generar un impacto real.",
    scroll: "SCROLL PARA EXPLORAR",
    view: "VER PROYECTO",
    moreTitle: <>Más ideas<br />muy pronto.</>,
    moreCopy: "Siempre estamos trabajando en nuevos proyectos. Vuelve pronto para ver las novedades.",
    contactTitle: "¿TIENES UN PROYECTO\nEN MENTE?",
    contactCopy: "Construyamos algo juntos.",
    contact: "HABLEMOS",
    projects: [{ number: "01", category: "SITIO WEB", title: "Seaduced\nExperience", description: "Una experiencia digital premium para experiencias privadas en el agua.", tags: ["DISEÑO WEB", "DESARROLLO", "UX"], href: "/work/seaduced-experience" }] as Project[],
  },
};

function SeaducedVisual() {
  return (
    <div className={`${styles.visual} ${styles.seaduced}`}>
      <img
        src="/assets/seaducedexperience/seaduced-experience-1.png"
        alt="Seaduced Experience website"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}

function WorkSystemVisual() {
  return (
    <div className={styles.heroBackdrop} aria-hidden="true">
      <div className={`${styles.systemPanel} ${styles.systemMain}`}>
        <img src="/assets/seaducedexperience/seaduced-experience-1-1280.webp" alt="" />
      </div>
      <div className={`${styles.systemPanel} ${styles.systemCalendar}`}>
        <img src="/assets/seaducedexperience/dashboard-calendar.png" alt="" />
      </div>
      <div className={`${styles.systemPanel} ${styles.systemAnalytics}`}>
        <img src="/assets/seaducedexperience/dashboard-analytics.png" alt="" />
      </div>
      <div className={`${styles.systemPanel} ${styles.systemDetail}`}>
        <img src="/assets/seaducedexperience/seaduced-experience-2-1280.webp" alt="" />
      </div>
      <span className={`${styles.systemLine} ${styles.systemLineOne}`} />
      <span className={`${styles.systemLine} ${styles.systemLineTwo}`} />
      <span className={styles.systemGlow} />
    </div>
  );
}

export function WorkPortfolio() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className={`${styles.work} ${styles[`language${language.toUpperCase()}`]}`}>
      <section className={styles.hero}>
        <WorkSystemVisual />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </div>
        <div className={styles.scroll}><span />{copy.scroll} ↓</div>
      </section>
      <section className={styles.projects}>
        {copy.projects.map((project) => (
          <article key={project.number} className={styles.project}>
            <div className={styles.projectInfo}>
              <span className={styles.category}>{project.number} / {project.category}</span>
              <h2>{project.title.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h2>
              <p>{project.description}</p>
              <div className={styles.tags}>{project.tags.map((tag, i) => <span key={tag}>{i > 0 && <i>·</i>}{tag}</span>)}</div>
              <a href={project.href}>{copy.view}<b>⟶</b></a>
            </div>
            <SeaducedVisual />
          </article>
        ))}
      </section>
      <section className={styles.more}>
        <div className={styles.moreGlow} />
        <div><h2>{copy.moreTitle}</h2><p>{copy.moreCopy}</p></div>
        <div className={styles.moreContact} id="contact">
          <span />
          <div>
            <h3>{copy.contactTitle.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h3>
            <p>{copy.contactCopy}</p>
            <a href="mailto:hello.weareleba@gmail.com">{copy.contact} <b>⟶</b></a>
          </div>
        </div>
      </section>
    </main>
  );
}
