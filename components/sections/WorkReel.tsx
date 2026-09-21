"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WorkReel.module.css";

type Kind = "shot" | "triptych" | "poster";

type Theme = {
  bg: string;
  fg: string;
  glow: string;
  line: string; // card border
  shadow: string; // card shadow alpha
};

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  kind: Kind;
  image?: string;
  alt?: string;
};

// Same palette the /work page already uses, one world per project.
const themes: Theme[] = [
  { bg: "#0b0908", fg: "#f7f5f0", glow: "rgba(214,160,96,.20)", line: "rgba(246,216,173,.22)", shadow: ".6" },
  { bg: "#f3f1ec", fg: "#202628", glow: "rgba(200,183,157,.38)", line: "rgba(32,38,40,.12)", shadow: ".22" },
  { bg: "#15191b", fg: "#f3f1ec", glow: "rgba(232,160,110,.16)", line: "rgba(241,238,232,.16)", shadow: ".6" },
  { bg: "#e8e6df", fg: "#202628", glow: "rgba(200,183,157,.38)", line: "rgba(32,38,40,.12)", shadow: ".22" },
  { bg: "#080b0d", fg: "#f3f1ec", glow: "rgba(120,90,220,.16)", line: "rgba(255,255,255,.12)", shadow: ".6" },
];

const covers = [
  ["/assets/bookea/custom/bombon-cover.jpg", "#B9B5B0"],
  ["/assets/bookea/custom/franco-cover.webp", "#0b0806"],
  ["/assets/bookea/custom/marea-cover.jpg", "#CFE7E4"],
];

// Rebels Kite School stays hidden, as on /work.
const content = {
  en: {
    eyebrow: "OUR WORK",
    titleLines: ["Ideas", "in action."],
    intro: "A selection of digital products, platforms and experiences we've designed and built to create real impact.",
    scroll: "SCROLL TO EXPLORE",
    view: "VIEW PROJECT",
    rail: "Go to project",
    projects: [
      { number: "01", category: "WEBSITE", title: "Seaduced\nExperience", description: "A premium digital journey for private experiences on the water.", tags: ["WEB DESIGN", "DEVELOPMENT", "UX"], href: "/work/seaduced-experience", kind: "shot", image: "/assets/seaducedexperience/seaduced-experience-1-1280.webp", alt: "Seaduced Experience website" },
      { number: "02", category: "CUSTOM SYSTEMS", title: "Bookea\nCustom Builds", description: "Three booking systems built around three businesses. The origin of Bookea SaaS.", tags: ["SYSTEM DESIGN", "DEVELOPMENT", "BOOKING"], href: "/work/bookea-a-medida", kind: "triptych" },
      { number: "03", category: "SAAS PRODUCT", title: "Bookea", description: "A booking platform built to simplify how service businesses manage their appointments, clients and daily operations.", tags: ["PRODUCT DESIGN", "DEVELOPMENT", "SAAS"], href: "/work/bookea", kind: "poster" },
      { number: "04", category: "ONLINE STORE", title: "Imagen\ncon Aura", description: "A store for printing photos in their original resolution, connected to an order system for the photographer.", tags: ["WEB DESIGN", "DEVELOPMENT", "ORDER SYSTEM"], href: "/work/imagen-con-aura", kind: "shot", image: "/assets/imagenconaura/home.webp", alt: "Imagen con Aura online store" },
      { number: "05", category: "AUTOMATION SYSTEM", title: "Order\nFlow", description: "A web-based ordering system designed to turn conversations into structured orders and give businesses a clearer operational flow.", tags: ["SYSTEM DESIGN", "AUTOMATION", "DEVELOPMENT"], href: "/work/order-flow", kind: "shot", image: "/assets/orderflow/panelcontrol.png", alt: "Order Flow control panel" },
    ] as Project[],
  },
  es: {
    eyebrow: "NUESTRO TRABAJO",
    titleLines: ["Ideas", "en acción."],
    intro: "Una selección de productos, plataformas y experiencias digitales que hemos diseñado y construido para generar un impacto real.",
    scroll: "SCROLL PARA EXPLORAR",
    view: "VER PROYECTO",
    rail: "Ir al proyecto",
    projects: [
      { number: "01", category: "SITIO WEB", title: "Seaduced\nExperience", description: "Una experiencia digital premium para experiencias privadas en el agua.", tags: ["DISEÑO WEB", "DESARROLLO", "UX"], href: "/work/seaduced-experience", kind: "shot", image: "/assets/seaducedexperience/seaduced-experience-1-1280.webp", alt: "Seaduced Experience website" },
      { number: "02", category: "SISTEMAS A MEDIDA", title: "Bookea\nA medida", description: "Tres sistemas de reservas hechos a la medida de tres negocios. El origen de Bookea SaaS.", tags: ["DISEÑO DE SISTEMAS", "DESARROLLO", "RESERVAS"], href: "/work/bookea-a-medida", kind: "triptych" },
      { number: "03", category: "PRODUCTO SAAS", title: "Bookea", description: "Una plataforma de reservas creada para simplificar la gestión diaria de negocios de servicios.", tags: ["DISEÑO DE PRODUCTO", "DESARROLLO", "SAAS"], href: "/work/bookea", kind: "poster" },
      { number: "04", category: "TIENDA ONLINE", title: "Imagen\ncon Aura", description: "Una tienda para imprimir fotos en su resolución original, conectada a un sistema de pedidos para la fotógrafa.", tags: ["DISEÑO WEB", "DESARROLLO", "SISTEMA DE PEDIDOS"], href: "/work/imagen-con-aura", kind: "shot", image: "/assets/imagenconaura/home.webp", alt: "Imagen con Aura online store" },
      { number: "05", category: "SISTEMA DE AUTOMATIZACIÓN", title: "Order\nFlow", description: "Un sistema web diseñado para convertir conversaciones en pedidos estructurados y dar a la operación un flujo más claro.", tags: ["DISEÑO DE SISTEMAS", "AUTOMATIZACIÓN", "DESARROLLO"], href: "/work/order-flow", kind: "shot", image: "/assets/orderflow/panelcontrol.png", alt: "Order Flow control panel" },
    ] as Project[],
  },
};

function CardBody({ project, es }: { project: Project; es: boolean }) {
  if (project.kind === "triptych") {
    return (
      <div className={styles.triptych}>
        {covers.map(([src, bg]) => <div key={src} style={{ background: bg }}><img src={src} alt="" /></div>)}
      </div>
    );
  }
  if (project.kind === "poster") {
    return (
      <div className={styles.poster}>
        <div className={styles.posterTop}><span>bookea</span><em>{es ? "LANZAMIENTO" : "LAUNCH"}</em></div>
        <div className={styles.posterDate}><strong>{es ? "1 DIC" : "DEC 1"}</strong><small>{es ? "Lista de espera abierta" : "Waitlist open"}</small></div>
        <div className={styles.posterBottom}>
          <p>{es ? "Los 5 primeros en la lista, plan Pro gratis un mes." : "First 5 on the list get the Pro plan free for a month."}</p>
          <span>{es ? "UNIRME →" : "JOIN →"}</span>
        </div>
      </div>
    );
  }
  return <img className={styles.shot} src={project.image} alt={project.alt} />;
}

export function WorkReel() {
  const { language } = useLanguage();
  const copy = content[language];
  const es = language === "es";
  const total = copy.projects.length;

  const heroRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const go = useCallback((to: number) => {
    const track = trackRef.current;
    if (!track) return;
    const top = track.getBoundingClientRect().top + window.scrollY;
    const span = track.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * to) / Math.max(1, total - 1) + 1, behavior: "smooth" });
  }, [total]);

  // Intro: each title line rises out of its own mask, then the rest fades in.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.15 })
        .fromTo("[data-hero-line]", { y: 0, yPercent: 112, rotate: 3 }, { y: 0, yPercent: 0, rotate: 0, duration: 1.4, stagger: 0.14, ease: "expo.out" })
        .fromTo("[data-hero-fade]", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }, 0.55);
    }, hero);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scenes = sceneRefs.current.filter(Boolean) as HTMLElement[];

    const ctx = gsap.context(() => {
      gsap.set(stage, { backgroundColor: themes[0].bg, color: themes[0].fg });
      scenes.forEach((scene, i) => gsap.set(scene, { autoAlpha: i === 0 ? 1 : 0 }));

      const change = (from: number, to: number) => {
        const dir = to > from ? 1 : -1;
        const theme = themes[to];
        const incoming = scenes[to];
        activeRef.current = to;
        setActive(to);

        scenes.forEach((scene, i) => {
          if (i !== to) gsap.to(scene, { autoAlpha: 0, y: reduced ? 0 : -28 * dir, duration: reduced ? 0 : 0.35, ease: "power2.in", overwrite: true });
        });
        // SiteHeader re-reads the background contrast on scroll, so nudge it once the color has settled.
        gsap.to(stage, { backgroundColor: theme.bg, color: theme.fg, duration: reduced ? 0 : 0.7, ease: "power2.inOut", overwrite: true, onComplete: () => window.dispatchEvent(new Event("scroll")) });

        const parts = incoming.querySelectorAll("[data-in]");
        const card = incoming.querySelector("[data-card]");
        if (reduced) {
          gsap.set(incoming, { autoAlpha: 1, y: 0 });
          gsap.set([parts, card], { clearProps: "all" });
          return;
        }
        gsap.set(incoming, { y: 0 });
        gsap.timeline({ delay: 0.22 })
          .set(incoming, { autoAlpha: 1 })
          .fromTo(parts, { autoAlpha: 0, y: 56 * dir }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity,visibility" }, 0)
          .fromTo(card, { clipPath: "inset(0% 0% 100% 0%)", y: 70 * dir }, { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.15, ease: "expo.out", clearProps: "clipPath,transform" }, 0.05);
      };

      ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.round(self.progress * (total - 1));
          if (next !== activeRef.current) change(activeRef.current, next);
        },
      });

      // First scene entrance.
      const first = scenes[0];
      if (first && !reduced) {
        gsap.from(first.querySelectorAll("[data-in]"), { autoAlpha: 0, y: 40, duration: 0.9, stagger: 0.07, ease: "power3.out", scrollTrigger: { trigger: track, start: "top 70%", once: true } });
        gsap.from(first.querySelector("[data-card]"), { autoAlpha: 0, y: 60, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: track, start: "top 70%", once: true } });
      }
    }, stage);

    return () => ctx.revert();
  }, [total]);

  return (
    <main className={styles.work}>
      <section ref={heroRef} className={styles.hero}>
        <span className={styles.eyebrow} data-hero-fade>{copy.eyebrow}</span>
        <h1>{copy.titleLines.map((line, i) => <span key={i} className={styles.line}><span className={styles.lineInner} data-hero-line>{line}</span></span>)}</h1>
        <div className={styles.heroFoot} data-hero-fade>
          <a className={styles.scrollHint} href="#reel"><span aria-hidden="true" />{copy.scroll} ↓</a>
          <p>{copy.intro}</p>
        </div>
      </section>

      <div id="reel" ref={trackRef} className={styles.track} style={{ ["--n" as string]: total }}>
        <div ref={stageRef} className={styles.stage}>
          {copy.projects.map((project, i) => {
            const theme = themes[i];
            return (
              <article
                key={project.number}
                ref={(el) => { sceneRefs.current[i] = el; }}
                className={styles.scene}
                data-first={i === 0 ? "" : undefined}
                aria-hidden={active !== i}
                style={{ ["--glow" as string]: theme.glow, ["--line" as string]: theme.line, ["--sh" as string]: theme.shadow }}
              >
                <div className={styles.glow} aria-hidden="true" />
                <div className={styles.info}>
                  <h2 data-in>{project.title.split("\n").map((line, k) => <span key={k}>{line}</span>)}</h2>
                  <span className={styles.category} data-in>{project.category}</span>
                  <p data-in>{project.description}</p>
                  <div className={styles.tags} data-in>{project.tags.map((tag, k) => <span key={tag}>{k > 0 && <i>·</i>}{tag}</span>)}</div>
                  <a className={styles.link} data-in href={project.href} tabIndex={active === i ? 0 : -1}>{copy.view} <b>⟶</b></a>
                </div>
                <a className={styles.cardWrap} href={project.href} aria-label={`${copy.view}: ${project.title.replace("\n", " ")}`} tabIndex={active === i ? 0 : -1}>
                  <div className={styles.card} data-card>
                    <div className={styles.bar} />
                    <div className={styles.cardBody}><CardBody project={project} es={es} /></div>
                  </div>
                </a>
              </article>
            );
          })}

          <span className={styles.count} aria-hidden="true">{copy.projects[active].number} / {String(total).padStart(2, "0")}</span>
          <div className={styles.rail}>
            {copy.projects.map((project, i) => (
              <button key={project.number} type="button" className={i === active ? styles.on : ""} onClick={() => go(i)} aria-label={`${copy.rail} ${project.number}`} aria-current={i === active} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
