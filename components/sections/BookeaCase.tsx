"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./BookeaCase.module.css";

const copy = {
  en: {
    eyebrow: "BOOKEA · SAAS PRODUCT",
    title: <>BOOKING,<br />BUILT AS A SYSTEM.</>,
    intro: "Bookea is our own SaaS product, designed to make bookings simpler for service businesses — and the operations behind them easier to run.",
    role: "PRODUCT DESIGN · DEVELOPMENT · SYSTEM ARCHITECTURE",
    sections: [
      ["01", "A PUBLIC BOOKING EXPERIENCE", "Every business gets a dedicated booking page where clients can discover services, choose a time and confirm an appointment without the back-and-forth of messages.", "BOOKING PAGE"],
      ["02", "ONE PLACE TO RUN THE BUSINESS", "A complete admin workspace brings the calendar, bookings, clients, billing and statistics together so owners can see what is happening at a glance.", "ADMIN DASHBOARD"],
      ["03", "THE SYSTEM KEEPS WORKING", "Confirmation emails, cancellation links, owner notifications and next-day reminders run automatically. Concurrency controls protect the calendar from double bookings.", "NOTIFICATIONS · AUTOMATION"],
    ],
    modelTitle: "BUILT TO GROW WITH THE BUSINESS.",
    modelBody: "Bookea uses a simple Free, Base and Pro model, with unlimited clients from day one. When a business needs something more specific, the booking experience can be adapted to its brand and workflow.",
    finalTitle: <>FROM BOOKING<br />TO OPERATIONS.</>,
    finalBody: "What started as a booking tool became a connected business system — combining the customer experience, internal operations and automated communication in one product.",
    back: "BACK TO WORK",
  },
  es: {
    eyebrow: "BOOKEA · PRODUCTO SAAS",
    title: <>RESERVAS,<br />CONSTRUIDAS COMO SISTEMA.</>,
    intro: "Bookea es nuestro propio producto SaaS, creado para simplificar las reservas de negocios de servicios y hacer más fácil la operación detrás de cada turno.",
    role: "DISEÑO DE PRODUCTO · DESARROLLO · ARQUITECTURA DE SISTEMA",
    sections: [
      ["01", "UNA EXPERIENCIA PÚBLICA DE RESERVAS", "Cada negocio obtiene una página propia donde sus clientes pueden descubrir servicios, elegir un horario y confirmar una cita sin depender del intercambio de mensajes.", "PÁGINA DE RESERVAS"],
      ["02", "TODO EL NEGOCIO EN UN SOLO LUGAR", "Agenda, reservas, clientes, facturación y estadísticas conviven en un panel de administración pensado para saber qué está pasando de un vistazo.", "PANEL DE ADMINISTRACIÓN"],
      ["03", "EL SISTEMA SIGUE TRABAJANDO", "Confirmaciones, links de cancelación, avisos al dueño y recordatorios del día anterior funcionan automáticamente. El sistema de concurrencia evita reservas duplicadas.", "NOTIFICACIONES · AUTOMATIZACIÓN"],
    ],
    modelTitle: "CREADO PARA CRECER CON EL NEGOCIO.",
    modelBody: "Bookea utiliza un modelo simple Free, Base y Pro, con clientes ilimitados desde el primer día. Cuando un negocio necesita algo específico, podemos adaptar el diseño y el flujo de reserva a su marca y operación.",
    finalTitle: <>DE LA RESERVA<br />A LA OPERACIÓN.</>,
    finalBody: "Lo que comenzó como una herramienta de reservas se convirtió en un sistema de negocio conectado: experiencia del cliente, operaciones internas y comunicación automatizada dentro de un mismo producto.",
    back: "VOLVER A WORK",
  },
};

function ProductMock({ kind, label }: { kind: "booking" | "dashboard" | "automation"; label: string }) {
  return <div className={`${styles.mock} ${styles[kind]}`}>
    <div className={styles.mockChrome}><span>bookea</span><i /><i /><i /></div>
    {kind === "booking" && <div className={styles.bookingMock}><small>{label}</small><h3>Book your appointment</h3><div className={styles.serviceRow}><span>Haircut</span><b>45 min</b></div><div className={styles.serviceRow}><span>Beard trim</span><b>30 min</b></div><div className={styles.serviceRow}><span>Hair + beard</span><b>60 min</b></div><button>Choose a time →</button></div>}
    {kind === "dashboard" && <div className={styles.dashboardMock}><div className={styles.side}><b>Overview</b><span>Calendar</span><span>Bookings</span><span>Clients</span><span>Analytics</span></div><div className={styles.dashContent}><small>Today</small><h3>18 bookings</h3><div className={styles.metricGrid}><div>142<small>appointments</small></div><div>18.4k<small>DKK revenue</small></div><div>94%<small>attendance</small></div></div><div className={styles.chart}><i /><i /><i /><i /><i /><i /><i /></div></div></div>}
    {kind === "automation" && <div className={styles.automationMock}><div className={styles.node}>NEW BOOKING</div><b>→</b><div className={styles.node}>CONFIRMATION</div><b>→</b><div className={styles.node}>REMINDER</div><div className={styles.status}>● SYSTEM ACTIVE</div></div>}
    <span className={styles.mockLabel}>{label}</span>
  </div>;
}

export function BookeaCase() {
  const { language } = useLanguage();
  const t = copy[language];
  return <main className={styles.case}>
    <section className={styles.hero}><div className={styles.heroCopy}><span>{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p><small>{t.role}</small></div><div className={styles.heroVisual}><div className={styles.heroCard}><div className={styles.heroCardTop}><span>BOOKEA</span><b>BOOKING SYSTEM</b></div><div className={styles.heroCalendar}><div className={styles.calHead}><b>September</b><span>‹ &nbsp; ›</span></div><div className={styles.calDays}>{["M","T","W","T","F","S","S"].map((d,i)=><i key={i}>{d}</i>)}</div><div className={styles.calDates}>{Array.from({length:28},(_,i)=><i className={i===10?styles.active:""} key={i}>{i+1}</i>)}</div></div></div></div></section>
    <section className={styles.statement}><span>OUR OWN PRODUCT</span><h2>A booking tool<br />that thinks beyond<br />the booking.</h2></section>
    <section className={styles.chapters}>{t.sections.map(([num,title,body,label],i)=><article className={styles.chapter} key={num}><div className={styles.chapterCopy}><span>{num} / {title}</span><h2>{title}</h2><p>{body}</p></div><ProductMock kind={i===0?"booking":i===1?"dashboard":"automation"} label={label}/></article>)}</section>
    <section className={styles.model}><div><span>PRODUCT MODEL</span><h2>{t.modelTitle}</h2></div><p>{t.modelBody}</p><div className={styles.plans}><div><b>FREE</b><small>Start with Bookea</small></div><div><b>BASE</b><small>For growing businesses</small></div><div><b>PRO</b><small>For advanced operations</small></div></div></section>
    <section className={styles.final}><span>BOOKEA</span><h2>{t.finalTitle}</h2><p>{t.finalBody}</p><a href="/work">{t.back} <b>⟶</b></a></section>
  </main>;
}
