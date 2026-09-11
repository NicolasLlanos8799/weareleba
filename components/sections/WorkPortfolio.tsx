"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WorkPortfolio.module.css";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  visual: "seaduced" | "bookea" | "orders" | "rebels";
};

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
    projects: [
      { number: "01", category: "WEBSITE", title: "Seaduced\nExperience", description: "A premium digital journey for private experiences on the water.", tags: ["WEB DESIGN", "DEVELOPMENT", "UX"], href: "/work/seaduced-experience", visual: "seaduced" },
      { number: "02", category: "SAAS PRODUCT", title: "Bookea", description: "A booking platform built to simplify how service businesses manage their appointments, clients and daily operations.", tags: ["PRODUCT DESIGN", "DEVELOPMENT", "SAAS"], href: "/work/bookea", visual: "bookea" },
      { number: "03", category: "AUTOMATION SYSTEM", title: "Order\nFlow", description: "A web-based ordering system designed to turn conversations into structured orders and give businesses a clearer operational flow.", tags: ["SYSTEM DESIGN", "AUTOMATION", "DEVELOPMENT"], href: "/work/order-flow", visual: "orders" },
      { number: "04", category: "MANAGEMENT SYSTEM", title: "Rebels Kite\nSchool", description: "A custom management system built to bring lessons, instructors, students and payments into one operational workspace.", tags: ["SYSTEM DESIGN", "DEVELOPMENT", "OPERATIONS"], href: "/work/rebels-kite-school", visual: "rebels" },
    ] as Project[],
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
    projects: [
      { number: "01", category: "SITIO WEB", title: "Seaduced\nExperience", description: "Una experiencia digital premium para experiencias privadas en el agua.", tags: ["DISEÑO WEB", "DESARROLLO", "UX"], href: "/work/seaduced-experience", visual: "seaduced" },
      { number: "02", category: "PRODUCTO SAAS", title: "Bookea", description: "Una plataforma de reservas creada para simplificar la gestión diaria de negocios de servicios.", tags: ["DISEÑO DE PRODUCTO", "DESARROLLO", "SAAS"], href: "/work/bookea", visual: "bookea" },
      { number: "03", category: "SISTEMA DE AUTOMATIZACIÓN", title: "Order\nFlow", description: "Un sistema web diseñado para convertir conversaciones en pedidos estructurados y dar a la operación un flujo más claro.", tags: ["DISEÑO DE SISTEMAS", "AUTOMATIZACIÓN", "DESARROLLO"], href: "/work/order-flow", visual: "orders" },
      { number: "04", category: "SISTEMA DE GESTIÓN", title: "Rebels Kite\nSchool", description: "Un sistema de gestión a medida creado para centralizar clases, profesores, alumnos y pagos en un único espacio operativo.", tags: ["DISEÑO DE SISTEMAS", "DESARROLLO", "OPERACIONES"], href: "/work/rebels-kite-school", visual: "rebels" },
    ] as Project[],
  },
};

function SeaducedVisual({ href }: { href: string }) {
  return (
    <div className={`${styles.visual} ${styles.seaduced}`}>
      <a href={href} className={styles.visualLink} aria-label="View Seaduced Experience project">
        <div className={styles.visualFrame}>
          <img src="/assets/seaducedexperience/seaduced-experience-1-1280.webp" srcSet="/assets/seaducedexperience/seaduced-experience-1-800.webp 800w, /assets/seaducedexperience/seaduced-experience-1-1280.webp 1280w" sizes="(max-width: 800px) 100vw, 60vw" alt="Seaduced Experience website" />
          <span className={styles.visualMark}>01</span>
        </div>
      </a>
    </div>
  );
}

function BookeaVisual({ href }: { href: string }) {
  return (
    <div className={`${styles.visual} ${styles.bookea}`}>
      <a href={href} className={styles.visualLink} aria-label="View Bookea project">
        <div className={styles.bookeaFrame}>
          <div className={styles.bookeaWindow}>
            <div className={styles.bookeaTop}><span>bookea</span><i /><i /><i /></div>
            <div className={styles.bookeaBody}>
              <aside><b>Overview</b><span>Calendar</span><span>Bookings</span><span>Clients</span><span>Analytics</span></aside>
              <div className={styles.bookeaMain}>
                <div className={styles.bookeaHeading}><span>Good morning</span><strong>Tuesday, September 11</strong></div>
                <div className={styles.bookeaStats}><div><small>Today</small><b>18</b><em>bookings</em></div><div><small>This month</small><b>142</b><em>appointments</em></div><div><small>Revenue</small><b>18.4k</b><em>DKK</em></div></div>
                <div className={styles.bookeaCalendar}><div /><div /><div /><div /><div /><div /></div>
              </div>
            </div>
          </div>
          <span className={styles.visualMark}>02</span>
        </div>
      </a>
    </div>
  );
}

function OrdersVisual({ href }: { href: string }) {
  return (
    <div className={`${styles.visual} ${styles.orders}`}>
      <a href={href} className={styles.visualLink} aria-label="View automated ordering system project">
        <div className={styles.ordersFrame}>
          <img src="/assets/orderflow/panelcontrol.png" alt="Order Flow control panel" />
          <span className={styles.visualMark}>03</span>
        </div>
      </a>
    </div>
  );
}

function RebelsVisual({ href }: { href: string }) {
  return (
    <div className={`${styles.visual} ${styles.rebels}`}>
      <a href={href} className={styles.visualLink} aria-label="View Rebels Kite School project">
        <div className={styles.rebelsFrame}>
          <div className={styles.rebelsWindow}>
            <div className={styles.rebelsTop}><span>REBELS</span><small>MANAGEMENT</small></div>
            <div className={styles.rebelsBody}>
              <aside><b>Calendar</b><span>Students</span><span>Instructors</span><span>Payments</span></aside>
              <div className={styles.rebelsMain}>
                <div className={styles.rebelsHeading}><span>Weekly schedule</span><b>MON — SUN</b></div>
                <div className={styles.rebelsBars}><i /><i /><i /><i /><i /></div>
                <div className={styles.rebelsStats}><div>LESSONS <b>32</b></div><div>STUDENTS <b>86</b></div><div>PAID <b>79</b></div></div>
              </div>
            </div>
          </div>
          <span className={styles.visualMark}>04</span>
        </div>
      </a>
    </div>
  );
}

function WorkHeroVisual() {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <picture className={styles.heroPicture}>
        <source media="(max-width: 800px)" srcSet="/assets/portadaworksphones.png" />
        <img src="/assets/portadaworks2.png" alt="" className={styles.heroImage} fetchPriority="high" />
      </picture>
      <div className={styles.heroShade} />
      <div className={styles.heroVignette} />
    </div>
  );
}

export function WorkPortfolio() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className={`${styles.work} ${styles[`language${language.toUpperCase()}`]}`}>
      <section className={styles.hero}>
        <WorkHeroVisual />
        <div className={styles.heroContent}><span className={styles.eyebrow}>{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
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
              <a href={project.href}>{copy.view} <b>⟶</b></a>
            </div>
            {project.visual === "seaduced" && <SeaducedVisual href={project.href} />}
            {project.visual === "bookea" && <BookeaVisual href={project.href} />}
            {project.visual === "orders" && <OrdersVisual href={project.href} />}
            {project.visual === "rebels" && <RebelsVisual href={project.href} />}
          </article>
        ))}
      </section>
      <section className={styles.more}>
        <div className={styles.moreGlow} />
        <div><h2>{copy.moreTitle}</h2><p>{copy.moreCopy}</p></div>
        <div className={styles.moreContact} id="contact"><span /><div><h3>{copy.contactTitle.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h3><p>{copy.contactCopy}</p><a href="mailto:hello@weareleba.com">{copy.contact} <b>⟶</b></a></div></div>
      </section>
    </main>
  );
}
