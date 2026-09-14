"use client";

import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const images = [
  "/assets/bookea/sistema-reservas-1-opt.webp",
  "/assets/bookea/sistema-reservas-2-opt.webp",
  "/assets/bookea/sistema-reservas-3-opt.webp",
  "/assets/bookea/sistema-reservas-4-opt.webp",
  "/assets/bookea/sistema-reservas-5-opt.webp",
  "/assets/bookea/sistema-reservas-6-opt.webp",
];

const copy = {
  en: {
    heroKicker: "PRODUCT — IN DEVELOPMENT",
    heroTitle: "Bookea",
    heroLead: "A booking and management system for service businesses, built by Leba.",
    heroSub: "From scattered conversations to one organized system.",
    introTitle: "Bookea is a product we're building, not just a project we delivered.",
    intro: "Bookea is a product of our own — a booking and management platform for service businesses, currently in development. It represents the same way of thinking we bring to every client project: start from the operational problem, not the feature list.",
    problemKicker: "01 — THE PROBLEM",
    problemTitle: "Bookings without a system",
    problem: "Many service businesses still run bookings through WhatsApp, Instagram DMs, phone calls, and paper or spreadsheet agendas. Requests arrive through different channels, the same questions get answered repeatedly, calendars become fragmented, double-bookings happen, and client history is left scattered across conversations and memory.",
    whatKicker: "02 — WHAT IS BOOKEA?",
    whatTitle: "One system for booking and running the business",
    what: "Bookea is a booking and management SaaS for service businesses. It centralizes the reservation process and gives the business one place to manage its day-to-day operations — connecting the customer-facing booking experience with the calendar, clients, services, and business settings.",
    howKicker: "03 — HOW IT WORKS",
    howTitle: "One flow, from the client's first click to the business's calendar",
    how: "A customer opens a business's booking page, selects a service, and chooses an available time. The reservation is created and reflected immediately on the business side — without manual entry or checking a separate calendar.",
    systemKicker: "04 — THE SYSTEM",
    systemTitle: "More than a calendar",
    system: "A booking is not just a slot on a calendar. It is connected to a client, a service, and the business configuration. When one part changes, the rest of the system reflects it instead of requiring the business to update several places by hand.",
    experienceKicker: "05 — PRODUCT EXPERIENCE",
    experienceTitle: "What the system looks like today",
    experience: "These are real Bookea screens from the product as it exists today. The interface will continue to evolve as the system moves forward.",
    captions: [
      ["01", "Booking experience", "The customer-facing side of Bookea."],
      ["02", "Calendar / appointment management", "The business view of its schedule and appointments."],
      ["03", "Client management", "A centralized view of clients and their booking information."],
      ["04", "Service management", "Where the business defines the services it offers."],
      ["05", "Business administration", "Controls for configuring the business inside Bookea."],
      ["06", "Product flow", "Another view of the system currently being built."],
    ],
    whyKicker: "06 — WHY WE BUILT IT",
    whyTitle: "The gap we kept seeing",
    why: "Small service businesses need digital tools, but many are either too generic or too complex. Meanwhile, the actual day-to-day still runs through messages, calls, and manual agendas. Bookea is our attempt to close that gap with a system that makes the operation simple, centralized, and structured.",
    buildKicker: "07 — BUILDING THE PRODUCT",
    buildTitle: "A product we're actively building",
    build: "We are building Bookea the way we approach serious systems: starting from the problem, mapping how booking, clients, services, and the calendar connect, then iterating as real constraints surface. The booking flow and the business dashboard are two views of the same system.",
    customKicker: "07.5 — FROM CUSTOM BUILDS TO A PRODUCT",
    customTitle: "Bookea started as implementations, before it became a SaaS",
    custom: "Before building Bookea as a self-serve platform, we implemented the same system directly for a small number of clients. That work informed Bookea SaaS — the self-service version now in development. The system is the same; what changes is how a business gets access to it.",
    statusKicker: "08 — CURRENT STATUS",
    statusTitle: "In development",
    status: "Bookea is currently under development. The screens shown here represent the product as it exists today and will keep changing as the system evolves.",
    closeTitle: "This is how we think about products.",
    close: "Understand the real operational problem first, then build the system that solves it — not the other way around.",
    cta: "GET IN TOUCH →",
  },
  es: {
    heroKicker: "PRODUCTO — EN DESARROLLO",
    heroTitle: "Bookea",
    heroLead: "Un sistema de reservas y gestión para negocios de servicios, creado por Leba.",
    heroSub: "De conversaciones dispersas a un sistema organizado.",
    introTitle: "Bookea es un producto que estamos construyendo, no solo un proyecto que entregamos.",
    intro: "Bookea es un producto propio — una plataforma de reservas y gestión para negocios de servicios, actualmente en desarrollo. Representa la misma forma de pensar que llevamos a cada proyecto: empezar por el problema operativo, no por la lista de funcionalidades.",
    problemKicker: "01 — EL PROBLEMA",
    problemTitle: "Reservas sin un sistema",
    problem: "Muchos negocios de servicios todavía gestionan sus reservas mediante WhatsApp, Instagram, llamadas y agendas de papel o spreadsheets. Las solicitudes llegan por distintos canales, se responden las mismas preguntas una y otra vez, los calendarios se fragmentan, aparecen reservas duplicadas y el historial del cliente queda repartido entre conversaciones y memoria.",
    whatKicker: "02 — ¿QUÉ ES BOOKEA?",
    whatTitle: "Un sistema para reservar y gestionar el negocio",
    what: "Bookea es un SaaS de reservas y gestión para negocios de servicios. Centraliza el proceso de reserva y ofrece un único lugar para gestionar la operación diaria, conectando la experiencia de reserva del cliente con calendario, clientes, servicios y configuración del negocio.",
    howKicker: "03 — CÓMO FUNCIONA",
    howTitle: "Un flujo, desde el primer clic del cliente hasta el calendario del negocio",
    how: "El cliente abre la página de reservas, selecciona un servicio y elige un horario disponible. La reserva se crea y se refleja inmediatamente en el lado del negocio, sin entrada manual ni necesidad de comprobar otro calendario.",
    systemKicker: "04 — EL SISTEMA",
    systemTitle: "Más que un calendario",
    system: "Una reserva no es solo un hueco en el calendario. Está conectada con un cliente, un servicio y la configuración del negocio. Cuando una parte cambia, el resto del sistema refleja ese cambio sin obligar a actualizar varios lugares manualmente.",
    experienceKicker: "05 — EXPERIENCIA DE PRODUCTO",
    experienceTitle: "Así se ve el sistema hoy",
    experience: "Estas son pantallas reales de Bookea tal como existe hoy. La interfaz seguirá evolucionando a medida que avance el sistema.",
    captions: [
      ["01", "Experiencia de reserva", "La parte de Bookea que ve el cliente."],
      ["02", "Calendario / gestión de citas", "La vista del negocio sobre su agenda y citas."],
      ["03", "Gestión de clientes", "Una vista centralizada de clientes y sus reservas."],
      ["04", "Gestión de servicios", "Donde el negocio define los servicios que ofrece."],
      ["05", "Administración del negocio", "Controles para configurar el negocio dentro de Bookea."],
      ["06", "Flujo del producto", "Otra vista del sistema que estamos construyendo."],
    ],
    whyKicker: "06 — POR QUÉ LO CONSTRUIMOS",
    whyTitle: "La brecha que seguíamos viendo",
    why: "Los pequeños negocios de servicios necesitan herramientas digitales, pero muchas son demasiado genéricas o demasiado complejas. Mientras tanto, el día a día sigue funcionando mediante mensajes, llamadas y agendas manuales. Bookea intenta cerrar esa brecha con un sistema simple, centralizado y estructurado.",
    buildKicker: "07 — CONSTRUYENDO EL PRODUCTO",
    buildTitle: "Un producto que estamos construyendo activamente",
    build: "Estamos construyendo Bookea como cualquier sistema serio: empezando por el problema, mapeando cómo se conectan reservas, clientes, servicios y calendario, e iterando a medida que aparecen restricciones reales. El flujo de reserva y el dashboard del negocio son dos vistas del mismo sistema.",
    customKicker: "07.5 — DE IMPLEMENTACIONES A PRODUCTO",
    customTitle: "Bookea empezó como implementaciones antes de convertirse en SaaS",
    custom: "Antes de construir Bookea como plataforma self-service, implementamos el mismo sistema directamente para un pequeño número de clientes. Ese trabajo dio forma a Bookea SaaS — la versión self-service actualmente en desarrollo. El sistema es el mismo; lo que cambia es cómo un negocio accede a él.",
    statusKicker: "08 — ESTADO ACTUAL",
    statusTitle: "En desarrollo",
    status: "Bookea está actualmente en desarrollo. Las pantallas mostradas representan el producto tal como existe hoy y seguirán cambiando a medida que evolucione el sistema.",
    closeTitle: "Así pensamos los productos.",
    close: "Entender primero el problema operativo real y después construir el sistema que lo resuelve — no al revés.",
    cta: "HABLEMOS →",
  },
} as const;

const flow = ["CUSTOMER", "BOOKING PAGE", "APPOINTMENT", "BUSINESS DASHBOARD"];
const system = ["BOOKING", "CLIENTS", "SERVICES", "CALENDAR", "BUSINESS MANAGEMENT"];

function Diagram({ items }: { items: readonly string[] }) {
  return (
    <div className="bk-diagram">
      {items.map((item, index) => (
        <div className="bk-node" key={item}>
          <span>0{index + 1}</span>
          <strong>{item}</strong>
          {index < items.length - 1 && <i>→</i>}
        </div>
      ))}
    </div>
  );
}

export function BookeaCaseStudy() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <main className="bookea-page">
      <style>{`
        .bookea-page{background:#f4f3ef;color:#111;overflow:hidden}
        .bk-wrap{width:min(1380px,calc(100% - 48px));margin:0 auto}
        .bk-kicker{font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:600}
        .bk-hero{min-height:calc(100vh - 76px);display:grid;grid-template-columns:1fr 1.25fr;gap:64px;align-items:end;padding:92px 0 72px}
        .bk-hero-copy{padding-bottom:20px;max-width:620px}
        .bk-hero h1{font-size:clamp(76px,11vw,168px);line-height:.82;letter-spacing:-.065em;font-weight:500;margin:26px 0 34px}
        .bk-hero-lead{font-size:clamp(25px,2.6vw,40px);line-height:1.08;letter-spacing:-.035em;max-width:600px}
        .bk-hero-sub{font-size:14px;margin-top:24px;color:#555}
        .bk-hero-media{background:#fff;border:1px solid #d9d8d2;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.08)}
        .bk-hero-media img{display:block;width:100%;height:auto}
        .bk-section{padding:150px 0;border-top:1px solid #d5d4cf}
        .bk-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:70px}
        .bk-title{font-size:clamp(42px,5.4vw,78px);line-height:.95;letter-spacing:-.055em;font-weight:500;max-width:850px;margin:18px 0 30px}
        .bk-copy{font-size:18px;line-height:1.55;color:#4f4f4b;max-width:720px}
        .bk-copy + .bk-copy{margin-top:22px}
        .bk-diagram{margin-top:72px;border-top:1px solid #bbb9b2;border-bottom:1px solid #bbb9b2;display:grid;grid-template-columns:repeat(4,1fr)}
        .bk-node{position:relative;min-height:155px;padding:24px 22px;border-right:1px solid #bbb9b2;display:flex;flex-direction:column;justify-content:space-between}
        .bk-node:last-child{border-right:0}
        .bk-node span{font-size:10px;color:#777;letter-spacing:.08em}
        .bk-node strong{font-size:14px;letter-spacing:.03em}
        .bk-node i{position:absolute;right:-8px;top:50%;font-size:16px;font-style:normal;background:#f4f3ef;padding:0 2px;z-index:1}
        .bk-system{background:#111;color:#f4f3ef}
        .bk-system .bk-diagram{border-color:#454545}
        .bk-system .bk-node{border-color:#454545}
        .bk-system .bk-node i{background:#111}
        .bk-system .bk-copy{color:#aaa}
        .bk-experience-intro{max-width:760px;margin-left:auto}
        .bk-screens{margin-top:90px;display:grid;gap:90px}
        .bk-screen{display:grid;grid-template-columns:190px 1fr;gap:42px;align-items:start}
        .bk-screen-meta{padding-top:8px}
        .bk-screen-number{font-size:11px;letter-spacing:.1em}
        .bk-screen-title{font-size:18px;font-weight:500;margin-top:18px;line-height:1.15}
        .bk-screen-desc{font-size:13px;color:#777;line-height:1.45;margin-top:12px}
        .bk-image-frame{background:#fff;border:1px solid #d7d6d0;overflow:hidden}
        .bk-image-frame img{display:block;width:100%;height:auto}
        .bk-dark{background:#171717;color:#f4f3ef}
        .bk-dark .bk-copy{color:#aaa}.bk-dark .bk-kicker{color:#aaa}
        .bk-status{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}
        .bk-status-title{font-size:clamp(64px,9vw,140px);line-height:.82;letter-spacing:-.065em;font-weight:500;margin-top:24px}
        .bk-close{padding:190px 0 120px;text-align:center}
        .bk-close h2{font-size:clamp(48px,7vw,100px);line-height:.9;letter-spacing:-.06em;font-weight:500;max-width:1000px;margin:0 auto 34px}
        .bk-close p{max-width:650px;margin:0 auto 40px;font-size:18px;line-height:1.5;color:#555}
        .bk-cta{display:inline-block;color:inherit;text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:7px;font-size:12px;letter-spacing:.1em;font-weight:600}
        @media(max-width:900px){.bk-wrap{width:min(100% - 32px,680px)}.bk-hero{grid-template-columns:1fr;gap:45px;min-height:auto;padding:90px 0 70px}.bk-hero-copy{padding:0}.bk-hero h1{font-size:clamp(76px,20vw,130px)}.bk-section{padding:100px 0}.bk-grid,.bk-status{grid-template-columns:1fr;gap:35px}.bk-diagram{grid-template-columns:1fr 1fr}.bk-node:nth-child(2){border-right:0}.bk-node:nth-child(1),.bk-node:nth-child(2){border-bottom:1px solid #bbb9b2}.bk-node i{display:none}.bk-screen{grid-template-columns:1fr;gap:20px}.bk-screen-meta{padding:0}.bk-screens{gap:65px}.bk-close{padding:120px 0 90px}}
        @media(max-width:560px){.bk-wrap{width:calc(100% - 24px)}.bk-hero{padding-top:72px}.bk-hero-lead{font-size:25px}.bk-section{padding:82px 0}.bk-title{font-size:44px}.bk-copy{font-size:16px}.bk-diagram{grid-template-columns:1fr}.bk-node,.bk-node:nth-child(2){border-right:0;border-bottom:1px solid #bbb9b2;min-height:100px}.bk-node:last-child{border-bottom:0}.bk-close h2{font-size:48px}}
      `}</style>

      <div className="bk-wrap">
        <section className="bk-hero">
          <div className="bk-hero-copy">
            <div className="bk-kicker">{t.heroKicker}</div>
            <h1>{t.heroTitle}</h1>
            <div className="bk-hero-lead">{t.heroLead}</div>
            <div className="bk-hero-sub">{t.heroSub}</div>
          </div>
          <div className="bk-hero-media">
            <Image src={images[0]} alt="Bookea product interface" width={1600} height={1000} priority />
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">BOOKEA / PRODUCT</div></div>
            <div><h2 className="bk-title">{t.introTitle}</h2><p className="bk-copy">{t.intro}</p></div>
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.problemKicker}</div></div>
            <div><h2 className="bk-title">{t.problemTitle}</h2><p className="bk-copy">{t.problem}</p></div>
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.whatKicker}</div></div>
            <div><h2 className="bk-title">{t.whatTitle}</h2><p className="bk-copy">{t.what}</p></div>
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.howKicker}</div></div>
            <div><h2 className="bk-title">{t.howTitle}</h2><p className="bk-copy">{t.how}</p></div>
          </div>
          <Diagram items={flow} />
        </section>

        <section className="bk-section bk-system">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.systemKicker}</div></div>
            <div><h2 className="bk-title">{t.systemTitle}</h2><p className="bk-copy">{t.system}</p></div>
          </div>
          <Diagram items={system} />
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.experienceKicker}</div></div>
            <div className="bk-experience-intro"><h2 className="bk-title">{t.experienceTitle}</h2><p className="bk-copy">{t.experience}</p></div>
          </div>
          <div className="bk-screens">
            {t.captions.map((caption, index) => (
              <article className="bk-screen" key={caption[0]}>
                <div className="bk-screen-meta"><div className="bk-screen-number">{caption[0]}</div><div className="bk-screen-title">{caption[1]}</div><div className="bk-screen-desc">{caption[2]}</div></div>
                <div className="bk-image-frame"><Image src={images[index]} alt={caption[1]} width={1600} height={1000} loading={index === 0 ? "eager" : "lazy"} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.whyKicker}</div></div>
            <div><h2 className="bk-title">{t.whyTitle}</h2><p className="bk-copy">{t.why}</p></div>
          </div>
        </section>

        <section className="bk-section bk-dark">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.buildKicker}</div></div>
            <div><h2 className="bk-title">{t.buildTitle}</h2><p className="bk-copy">{t.build}</p></div>
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-grid">
            <div><div className="bk-kicker">{t.customKicker}</div></div>
            <div><h2 className="bk-title">{t.customTitle}</h2><p className="bk-copy">{t.custom}</p></div>
          </div>
        </section>

        <section className="bk-section bk-dark">
          <div className="bk-status">
            <div><div className="bk-kicker">{t.statusKicker}</div><div className="bk-status-title">{t.statusTitle}</div></div>
            <p className="bk-copy">{t.status}</p>
          </div>
        </section>

        <section className="bk-close">
          <h2>{t.closeTitle}</h2>
          <p>{t.close}</p>
          <a className="bk-cta" href="/#contact">{t.cta}</a>
        </section>
      </div>
    </main>
  );
}
