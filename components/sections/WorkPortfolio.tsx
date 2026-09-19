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
  hidden?: boolean; // kept in the data, not shown in the list
  visual: "seaduced" | "bookea" | "custom" | "orders" | "aura" | "rebels";
};

const content = {
  en: {
    eyebrow: "OUR WORK",
    title: <>Ideas<br />in action.</>,
    intro: "A selection of digital products, platforms and experiences we've designed and built to create real impact.",
    scroll: "SCROLL TO EXPLORE",
    view: "VIEW PROJECT",
    projects: [
      { number: "01", category: "WEBSITE", title: "Seaduced\nExperience", description: "A premium digital journey for private experiences on the water.", tags: ["WEB DESIGN", "DEVELOPMENT", "UX"], href: "/work/seaduced-experience", visual: "seaduced" },
      { number: "02", category: "CUSTOM SYSTEMS", title: "Bookea\nCustom Builds", description: "Three booking systems built around three businesses. The origin of Bookea SaaS.", tags: ["SYSTEM DESIGN", "DEVELOPMENT", "BOOKING"], href: "/work/bookea-a-medida", visual: "custom" },
      { number: "03", category: "SAAS PRODUCT", title: "Bookea", description: "A booking platform built to simplify how service businesses manage their appointments, clients and daily operations.", tags: ["PRODUCT DESIGN", "DEVELOPMENT", "SAAS"], href: "/work/bookea", visual: "bookea" },
      { number: "04", category: "ONLINE STORE", title: "Imagen\ncon Aura", description: "A store for printing photos in their original resolution, connected to an order system for the photographer.", tags: ["WEB DESIGN", "DEVELOPMENT", "ORDER SYSTEM"], href: "/work/imagen-con-aura", visual: "aura" },
      { number: "05", category: "AUTOMATION SYSTEM", title: "Order\nFlow", description: "A web-based ordering system designed to turn conversations into structured orders and give businesses a clearer operational flow.", tags: ["SYSTEM DESIGN", "AUTOMATION", "DEVELOPMENT"], href: "/work/order-flow", visual: "orders" },
      { number: "06", category: "MANAGEMENT SYSTEM", title: "Rebels Kite\nSchool", description: "A custom management system built to bring lessons, instructors, students and payments into one operational workspace.", tags: ["SYSTEM DESIGN", "DEVELOPMENT", "OPERATIONS"], href: "/work/rebels-kite-school", visual: "rebels", hidden: true },
    ] as Project[],
  },
  es: {
    eyebrow: "NUESTRO TRABAJO",
    title: <>Ideas<br />en acción.</>,
    intro: "Una selección de productos, plataformas y experiencias digitales que hemos diseñado y construido para generar un impacto real.",
    scroll: "SCROLL PARA EXPLORAR",
    view: "VER PROYECTO",
    projects: [
      { number: "01", category: "SITIO WEB", title: "Seaduced\nExperience", description: "Una experiencia digital premium para experiencias privadas en el agua.", tags: ["DISEÑO WEB", "DESARROLLO", "UX"], href: "/work/seaduced-experience", visual: "seaduced" },
      { number: "02", category: "SISTEMAS A MEDIDA", title: "Bookea\nA medida", description: "Tres sistemas de reservas hechos a la medida de tres negocios. El origen de Bookea SaaS.", tags: ["DISEÑO DE SISTEMAS", "DESARROLLO", "RESERVAS"], href: "/work/bookea-a-medida", visual: "custom" },
      { number: "03", category: "PRODUCTO SAAS", title: "Bookea", description: "Una plataforma de reservas creada para simplificar la gestión diaria de negocios de servicios.", tags: ["DISEÑO DE PRODUCTO", "DESARROLLO", "SAAS"], href: "/work/bookea", visual: "bookea" },
      { number: "04", category: "TIENDA ONLINE", title: "Imagen\ncon Aura", description: "Una tienda para imprimir fotos en su resolución original, conectada a un sistema de pedidos para la fotógrafa.", tags: ["DISEÑO WEB", "DESARROLLO", "SISTEMA DE PEDIDOS"], href: "/work/imagen-con-aura", visual: "aura" },
      { number: "05", category: "SISTEMA DE AUTOMATIZACIÓN", title: "Order\nFlow", description: "Un sistema web diseñado para convertir conversaciones en pedidos estructurados y dar a la operación un flujo más claro.", tags: ["DISEÑO DE SISTEMAS", "AUTOMATIZACIÓN", "DESARROLLO"], href: "/work/order-flow", visual: "orders" },
      { number: "06", category: "SISTEMA DE GESTIÓN", title: "Rebels Kite\nSchool", description: "Un sistema de gestión a medida creado para centralizar clases, profesores, alumnos y pagos en un único espacio operativo.", tags: ["DISEÑO DE SISTEMAS", "DESARROLLO", "OPERACIONES"], href: "/work/rebels-kite-school", visual: "rebels", hidden: true },
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

function AuraVisual({ href }: { href: string }) {
  return (
    <div className={`${styles.visual} ${styles.aura}`}>
      <a href={href} className={styles.visualLink} aria-label="View Imagen con Aura project">
        <div className={styles.auraFrame}>
          <img src="/assets/imagenconaura/home.webp" alt="Imagen con Aura online store" />
          <span className={styles.visualMark}>04</span>
        </div>
      </a>
    </div>
  );
}

function CustomVisual({ href }: { href: string }) {
  const tiles = [["/assets/bookea/custom/bombon-cover.jpg", "#B9B5B0"], ["/assets/bookea/custom/franco-cover.webp", "#0b0806"], ["/assets/bookea/custom/marea-cover.jpg", "#CFE7E4"]];
  return (
    <div className={`${styles.visual} ${styles.custom}`}>
      <a href={href} className={styles.visualLink} aria-label="View Bookea custom builds">
        <div className={styles.customFrame}>
          {tiles.map(([src, bg], i) => <div key={src} style={{ background: bg }}><img src={src} alt="" style={{ objectFit: "cover" }} /></div>)}
          <span className={styles.visualMark}>02</span>
        </div>
      </a>
    </div>
  );
}

function BookeaVisual({ href }: { href: string }) {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <div className={`${styles.visual} ${styles.bookea}`}>
      <a href={`${href}#waitlist`} className={styles.visualLink} aria-label={es ? "Unirme a la lista de espera de Bookea" : "Join the Bookea waitlist"}>
        <div className={styles.posterFrame}>
          <div className={styles.posterTop}><span>bookea</span><em>{es ? "LANZAMIENTO" : "LAUNCH"}</em></div>
          <div className={styles.posterDate}>
            <strong>{es ? "1 DIC" : "DEC 1"}</strong>
            <small>{es ? "Lista de espera abierta" : "Waitlist open"}</small>
          </div>
          <div className={styles.posterBottom}>
            <p>{es ? "Los 5 primeros en la lista, plan Pro gratis un mes." : "First 5 on the list get the Pro plan free for a month."}</p>
            <span>{es ? "UNIRME →" : "JOIN →"}</span>
          </div>
          <span className={styles.visualMark}>03</span>
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
          <span className={styles.visualMark}>05</span>
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
          <span className={styles.visualMark}>06</span>
        </div>
      </a>
    </div>
  );
}

function HeroCollage() {
  return (
    <div className={styles.collage} aria-hidden="true">
      <div className={`${styles.card} ${styles.cardA}`}><i /><img src="/assets/seaducedexperience/seaduced-experience-1-800.webp" alt="" /></div>
      <div className={`${styles.card} ${styles.cardB}`}><i /><img src="/assets/orderflow/panelcontrol.png" alt="" /></div>
      <div className={`${styles.card} ${styles.cardC}`}><i /><img src="/assets/bookea/custom/franco-cover.webp" alt="" /></div>
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
        <HeroCollage />
        <div className={styles.heroContent}><span className={styles.eyebrow}>{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
        <div className={styles.scroll}><span />{copy.scroll} ↓</div>
      </section>
      <section className={styles.projects}>
        {copy.projects.filter((project) => !project.hidden).map((project) => (
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
            {project.visual === "custom" && <CustomVisual href={project.href} />}
            {project.visual === "aura" && <AuraVisual href={project.href} />}
            {project.visual === "orders" && <OrdersVisual href={project.href} />}
            {project.visual === "rebels" && <RebelsVisual href={project.href} />}
          </article>
        ))}
      </section>
    </main>
  );
}
