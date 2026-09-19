"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./OrderFlowCase.module.css";

const base = "/assets/orderflow";
const images = ["panelcontrol.png", "productos.png", "pedidos.png", "estadisticas.png"];

// Scroll-reveal helper: elements fade/rise in once, staggered by index.
const rv = (i = 0) => ({ "data-r": "", style: { "--d": `${i * 90}ms` } as CSSProperties });

function useScrollEffects(root: React.RefObject<HTMLElement | null>, language: string) {
  useEffect(() => {
    const main = root.current;
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    main.classList.add(styles.armed);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add(styles.in); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    main.querySelectorAll("[data-r]").forEach(el => observer.observe(el));

    // Scroll-linked progress (0 -> 1 as an element travels into view) for depth.
    const par = Array.from(main.querySelectorAll<HTMLElement>("[data-par]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      par.forEach(el => {
        const rect = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [root, language]); // re-observe on language change: keyed lists remount their nodes
}

const copy = {
  es: {
    kicker: "CASO DE ESTUDIO · SISTEMA · AUTOMATIZACIÓN · GESTIÓN DE PEDIDOS",
    title: <>DE LOS PEDIDOS<br />A LA OPERACIÓN.</>,
    lead: "Order Flow es un sistema web que convierte los pedidos y conversaciones de la web, WhatsApp e Instagram en pedidos estructurados, y da al equipo un único lugar para gestionar su día a día.",
    meta: [["TIPO", "Sistema de gestión de pedidos"], ["CANALES", "Web · WhatsApp · Instagram"], ["SERVICIOS", "Diseño de sistemas · Automatización · Desarrollo"], ["ENTREGABLES", "Centro de control, catálogo, pedidos y analíticas"]],
    overview: [
      ["01 / EL PROBLEMA", "Pedidos por todas partes.", "Los pedidos llegaban por distintos canales, la información de los productos estaba separada y el equipo organizaba la operación a mano."],
      ["02 / EL SISTEMA", "Un núcleo detrás de la tienda.", "Order Flow se sitúa detrás de la experiencia de pedidos online y conecta los pedidos entrantes con los sistemas que hacen funcionar el negocio."],
      ["03 / EL RESULTADO", "Un recorrido claro, de principio a fin.", "Del primer pedido del cliente a la visión operativa final, el equipo sigue todo el proceso desde un mismo panel."],
    ],
    panel: {
      eyebrow: "01 / EL PANEL",
      title: <>TODO EL NEGOCIO,<br />EN UN PANEL.</>,
      body: "Productos, stock, clientes, pedidos y analíticas conviven en una interfaz clara, pensada para usarse cada día sin fricción.",
      label: "Vista de Order Flow",
      points: ["Centro de control con accesos directos a cada área", "Catálogo con precio, estado y stock por producto", "Pedidos organizados por estado, con búsqueda y filtros", "Analíticas de conversaciones y productos más consultados"],
      screens: [
        ["Centro de control", "El punto de partida del equipo: accesos a la tienda, la gestión del negocio, el catálogo, los pedidos y las analíticas, con las métricas clave a la vista."],
        ["Gestión de productos", "Inventario con foto, SKU, precio, estado y stock. Filtros por estado y categoría, e importación y exportación para trabajar en bloque."],
        ["Captura de pedidos", "Pestañas por estado, búsqueda por cliente o #ID y filtro por fecha. Cada pedido muestra contacto, método de pago y total, con la acción de preparar a un clic."],
        ["Operación y análisis", "Conversaciones, conversión, distribución de intenciones y productos más consultados en un mismo tablero, para entender el rendimiento."],
      ],
    },
    lifecycle: {
      eyebrow: "02 / EL RECORRIDO",
      active: "SISTEMA ACTIVO",
      title: <>DEL PEDIDO<br />A LA ENTREGA.</>,
      body: "Cada pedido avanza por estados claros. El equipo siempre sabe qué hay que hacer y qué está resuelto.",
      stages: [
        ["Nuevo pedido", "NUEVO", "Entra desde la web, WhatsApp o Instagram y se registra con cliente, contacto, método de pago y total."],
        ["En preparación", "EN PREPARACIÓN", "El equipo lo toma con un clic desde la lista y ve de un vistazo qué falta por preparar."],
        ["Despachado", "DESPACHADO", "Se marca como despachado y queda registrado en el historial del pedido y del cliente."],
        ["Entregado", "ENTREGADO", "El pedido se cierra y pasa a alimentar las analíticas de ventas del negocio."],
      ],
      note: "Los pedidos cancelados tienen su propia pestaña, para no perderlos de vista.",
    },
    closing: {
      eyebrow: "03 / EN CONJUNTO",
      title: <>UN SISTEMA PARA<br />CONVERTIR PEDIDOS<br />EN OPERACIÓN.</>,
      pillars: [["CAPTURA", "Reúne los pedidos de todos los canales."], ["GESTIÓN", "Ordena productos, stock y clientes."], ["ANÁLISIS", "Convierte la actividad en decisiones."]],
      back: "VER MÁS PROYECTOS",
    },
  },
  en: {
    kicker: "CASE STUDY · SYSTEM · AUTOMATION · ORDER MANAGEMENT",
    title: <>FROM ONLINE ORDERS<br />TO OPERATIONS.</>,
    lead: "Order Flow is a web-based system that turns orders and conversations from the website, WhatsApp and Instagram into structured orders, and gives the team one place to run the day to day.",
    meta: [["TYPE", "Order management system"], ["CHANNELS", "Website · WhatsApp · Instagram"], ["SERVICES", "System design · Automation · Development"], ["DELIVERABLES", "Control center, catalog, orders and analytics"]],
    overview: [
      ["01 / THE PROBLEM", "Orders everywhere.", "Orders came through different channels, product information lived separately and the team organized the operation by hand."],
      ["02 / THE SYSTEM", "A core behind the store.", "Order Flow sits behind the online ordering experience and connects incoming orders with the systems that run the business."],
      ["03 / THE RESULT", "A clear path, start to finish.", "From the first customer order to the final operational view, the team follows the whole process from one panel."],
    ],
    panel: {
      eyebrow: "01 / THE PANEL",
      title: <>THE WHOLE BUSINESS,<br />IN ONE PANEL.</>,
      body: "Products, stock, customers, orders and analytics live in one clear interface, designed to be used every day without friction.",
      label: "Order Flow view",
      points: ["Control center with shortcuts to every area", "Catalog with price, status and stock per product", "Orders organized by status, with search and filters", "Analytics on conversations and most-asked products"],
      screens: [
        ["Control center", "The team's starting point: shortcuts to the store, business settings, catalog, orders and analytics, with key metrics in view."],
        ["Product management", "Inventory with photo, SKU, price, status and stock. Filter by status and category, plus import and export for bulk work."],
        ["Order capture", "Tabs by status, search by customer or #ID and a date filter. Each order shows contact, payment method and total, with a one-click prepare action."],
        ["Operations & insights", "Conversations, conversion, intent distribution and most-asked products on one board, to understand performance over time."],
      ],
    },
    lifecycle: {
      eyebrow: "02 / THE JOURNEY",
      active: "SYSTEM ACTIVE",
      title: <>FROM ORDER<br />TO DELIVERY.</>,
      body: "Every order moves through clear statuses. The team always knows what needs doing and what is done.",
      stages: [
        ["New order", "NEW", "Comes in from the website, WhatsApp or Instagram and is recorded with customer, contact, payment method and total."],
        ["In preparation", "IN PREPARATION", "The team picks it up with one click from the list and sees at a glance what is left to prepare."],
        ["Dispatched", "DISPATCHED", "It is marked as dispatched and kept in the order and customer history."],
        ["Delivered", "DELIVERED", "The order is closed and feeds the business's sales analytics."],
      ],
      note: "Cancelled orders have their own tab, so they never go out of sight.",
    },
    closing: {
      eyebrow: "03 / TOGETHER",
      title: <>A SYSTEM TO TURN<br />ORDERS INTO<br />OPERATIONS.</>,
      pillars: [["CAPTURE", "Brings orders from every channel together."], ["MANAGE", "Keeps products, stock and customers in order."], ["ANALYZE", "Turns activity into decisions."]],
      back: "MORE PROJECTS",
    },
  },
};

type Screen = string[];

function BrowserFrame({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className={styles.frame} data-par>
      <div className={styles.frameBar}><i /><i /><i /></div>
      <div className={styles.frameShot} key={src}>
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 92vw, 56vw" quality={90} priority={priority} />
      </div>
    </div>
  );
}

function Showcase({ screens, label }: { screens: Screen[]; label: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`${styles.showcase} ${styles.showcaseFlip}`}>
      <div className={styles.showcaseImage}>
        <BrowserFrame src={`${base}/${images[active]}`} alt={`${label}: ${screens[active][0]}`} priority={active === 0} />
      </div>
      <ol className={styles.screenList}>
        {screens.map(([title, description], index) => (
          <li key={title} {...rv(index + 1)}>
            <button type="button" className={index === active ? styles.screenActive : ""} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-pressed={index === active}>
              <span className={styles.screenNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.screenText}><b>{title}</b><span>{description}</span></span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function OrderFlowCase() {
  const { language } = useLanguage();
  const t = copy[language];
  const mainRef = useRef<HTMLElement>(null);
  useScrollEffects(mainRef, language);
  const icons = ["●", "◐", "➜", "✓"];

  return (
    <main className={styles.caseStudy} ref={mainRef}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.kicker}</span>
          <div className={styles.heroGrid}>
            <div>
              <h1>{t.title}</h1>
              <p className={styles.lead}>{t.lead}</p>
            </div>
            <dl className={styles.meta}>
              {t.meta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={`${styles.wrap} ${styles.overviewGrid}`}>
          {t.overview.map(([kicker, title, body], i) => (
            <article key={kicker} {...rv(i)}>
              <span className={styles.eyebrow}>{kicker}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <div className={styles.chapterHeader}>
            <div>
              <span className={styles.eyebrow} {...rv()}>{t.panel.eyebrow}</span>
              <h2 {...rv(1)}>{t.panel.title}</h2>
            </div>
            <div className={styles.chapterAside}>
              <p {...rv(2)}>{t.panel.body}</p>
              <ul>{t.panel.points.map((point, i) => <li key={point} {...rv(i + 3)}>{point}</li>)}</ul>
            </div>
          </div>
          <Showcase screens={t.panel.screens} label={t.panel.label} />
        </div>
      </section>

      <section className={styles.lifecycle}>
        <div className={styles.wrap}>
          <div className={styles.lifecycleTop}>
            <span className={styles.eyebrow}>{t.lifecycle.eyebrow}</span>
            <span className={styles.systemActive}><i /> {t.lifecycle.active}</span>
          </div>
          <div className={styles.lifecycleIntro}>
            <h2 {...rv()}>{t.lifecycle.title}</h2>
            <p {...rv(2)}>{t.lifecycle.body}</p>
          </div>
          <ol className={styles.stages} {...rv()}>
            {t.lifecycle.stages.map(([title, pill, text], i) => (
              <li className={styles.stage} key={title} {...rv(i)}>
                <div className={styles.stageTop}><span className={styles.stageNode}>{icons[i]}</span><span className={styles.stageNumber}>{String(i + 1).padStart(2, "0")}</span></div>
                <span className={styles.pill}>{pill}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.stageNote}><i /> {t.lifecycle.note}</p>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.closing.eyebrow}</span>
          <div className={styles.closingGrid}>
            <h2 {...rv()}>{t.closing.title}</h2>
            <ul>
              {t.closing.pillars.map(([name, text], index) => (
                <li key={name} {...rv(index + 1)}><span>{String(index + 1).padStart(2, "0")}</span><b>{name}</b><em>{text}</em></li>
              ))}
            </ul>
          </div>
          <a className={styles.back} href="/work">← {t.closing.back}</a>
        </div>
      </section>
    </main>
  );
}
