"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "@/components/sections/BookeaCaseStudy.module.css";
import { BookeaWaitlist } from "@/components/sections/BookeaWaitlist";
import { rv, useScrollEffects } from "@/components/sections/bookeaShared";

const base = "/assets/bookea";
const shot = (n: number) => `${base}/sistema-reservas-${n}-opt.webp`;

type Screen = { shot: number; title: string; text: string };

type Stage = [title: string, pill: string, text: string];

const copy = {
  es: {
    kicker: "CASO DE ESTUDIO · PRODUCTO SAAS · DISEÑO · DESARROLLO",
    title: <>RESERVAS,<br />CONSTRUIDAS<br />COMO SISTEMA.</>,
    lead: "Bookea SaaS es nuestro propio producto: un sistema de reservas para negocios de servicios que reemplaza los mensajes, las libretas y los calendarios manuales por un único flujo. Nace de tres sistemas a medida que ya funcionan.",
    meta: [["TIPO", "Producto SaaS propio"], ["LANZAMIENTO", "1 de diciembre · lista de espera abierta"], ["SERVICIOS", "Diseño de producto · Desarrollo · Arquitectura de sistema"], ["TECNOLOGÍA", "Next.js · React · TypeScript · PostgreSQL · Neon"]],
    overview: [
      ["01 / EL PROBLEMA", "Reservas entre chats y libretas.", "Los negocios gestionaban sus reservas entre WhatsApp, Instagram y calendarios manuales: trabajo extra para el dueño y turnos que se perdían por el camino."],
      ["02 / LA IDEA", "Un sistema. Cada reserva.", "Bookea conecta todo el recorrido: desde que el cliente descubre un servicio hasta que la reserva queda confirmada y aparece en el panel del negocio."],
      ["03 / EL OBJETIVO", "Menos trabajo manual, menos turnos perdidos.", "Una única fuente de verdad para la agenda, y una mejor experiencia tanto para el cliente como para quien atiende."],
    ],
    journey: {
      eyebrow: "01 / EL RECORRIDO",
      active: "RESERVA EN 5 PASOS",
      title: <>DEL DESCUBRIMIENTO<br />A LA RESERVA.</>,
      body: "El cliente avanza por un asistente de cinco pasos, siempre con claridad sobre dónde está y qué falta.",
      icons: ["✂", "▦", "◷", "✎", "✓"],
      stages: [
        ["Servicio", "PASO 1", "Elige qué quiere reservar entre los servicios activos del negocio."],
        ["Fecha", "PASO 2", "Selecciona un día disponible en el calendario."],
        ["Hora", "PASO 3", "Ve las franjas libres de mañana y tarde y elige la que le viene bien."],
        ["Datos", "PASO 4", "Deja sus datos de contacto para confirmar el turno."],
        ["Listo", "PASO 5", "Recibe la confirmación con el resumen y puede añadirla a su calendario."],
      ] as Stage[],
    },
    client: {
      eyebrow: "02 / PARA CLIENTES",
      title: <>RESERVAR SIN<br />VAIVENES.</>,
      body: "Cada negocio tiene su propia página de reservas: sin cuentas, sin mensajes de ida y vuelta, y con la información justa en cada paso.",
      label: "Vista de la reserva en Bookea",
      points: ["Asistente de cinco pasos con progreso visible", "Franjas horarias separadas en mañana y tarde", "Resumen claro con servicio, duración, fecha y precio", "Opción de añadir el turno al calendario"],
      screens: [
        { shot: 1, title: "Elegí un horario", text: "El paso de la hora muestra las franjas libres agrupadas en mañana y tarde. La elegida se resalta y el cliente siempre puede volver atrás." },
        { shot: 2, title: "Reserva confirmada", text: "Una pantalla de cierre con el resumen del turno, el aviso de que le llegará un email con un link para cancelar y el botón para añadirlo al calendario." },
      ] as Screen[],
    },
    business: {
      eyebrow: "03 / PARA NEGOCIOS",
      title: <>EL NEGOCIO,<br />EN UN PANEL.</>,
      body: "Un panel de administración pensado para saber qué pasa hoy y cómo va el mes, sin abrir hojas de cálculo ni revisar chats.",
      label: "Vista del panel de Bookea",
      points: ["Turnos del día con estado: en curso y próximo", "Calendario semanal con bloqueo de horarios", "Estadísticas de ingresos, turnos y días más reservados", "Catálogo de servicios con duración y precio"],
      screens: [
        { shot: 3, title: "Turnos de hoy", text: "La agenda del día ordenada por hora, con cliente, servicio y contacto. Marca cuál está en curso y cuál es el próximo." },
        { shot: 6, title: "Calendario", text: "Vista semanal con todos los turnos de cada día, acceso a cancelados, bloqueo de horarios y alta manual de un turno." },
        { shot: 4, title: "Estadísticas", text: "Lo realizado y lo proyectado del mes, total de turnos, y los días y horarios más reservados para decidir mejor." },
        { shot: 5, title: "Servicios", text: "Cada servicio con su duración, precio y estado. El dueño puede editarlos o crear uno nuevo en cualquier momento." },
      ] as Screen[],
    },
    automation: {
      eyebrow: "04 / AUTOMATIZACIÓN",
      active: "SISTEMA ACTIVO",
      title: <>EL SISTEMA<br />SIGUE TRABAJANDO.</>,
      body: "Las comunicaciones y los controles importantes ocurren solos, para que nadie tenga que acordarse.",
      icons: ["✉", "↺", "◔", "⛨"],
      stages: [
        ["Confirmación", "AL RESERVAR", "El cliente recibe un email con los detalles de su turno apenas termina la reserva."],
        ["Link de cancelación", "EN EL EMAIL", "Puede cancelar por su cuenta desde un link, sin escribir al negocio."],
        ["Aviso al dueño", "NOTIFICACIÓN", "El negocio recibe el aviso de cada reserva nueva y de cada cancelación."],
        ["Sin duplicados", "CONCURRENCIA", "Controles de concurrencia protegen la agenda de reservas dobles en el mismo horario."],
      ] as Stage[],
      note: "Además, recordatorios el día anterior a cada turno.",
    },
    model: {
      eyebrow: "06 / EL PRODUCTO",
      title: <>CREADO PARA<br />CRECER CON<br />EL NEGOCIO.</>,
      body: "Un modelo simple, con clientes ilimitados desde el primer día. Cuando un negocio necesita algo específico, adaptamos el diseño y el flujo de reserva a su marca y operación.",
      plans: [["FREE", "Empezar con Bookea", "Para probar el sistema."], ["BASE", "Para negocios en crecimiento", "Lo esencial para operar."], ["PRO", "Para operaciones avanzadas", "Más control y personalización."]],
      stack: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "NEON"],
    },
    origin: {
      eyebrow: "05 / SU ORIGEN",
      title: <>NACIÓ DE TRES<br />SISTEMAS A MEDIDA.</>,
      body: "Antes de Bookea SaaS construimos reservas a medida para tres negocios. Cada uno tenía necesidades propias: servicios combinables, equipos, idioma, marca. Lo que se repetía en los tres es la base de este producto.",
      names: ["Studio Bombon", "Franco Zoller Barbería", "Marea Beauty House"],
      cta: "VER LOS TRES DESARROLLOS →",
    },
    closing: {
      eyebrow: "08 / EN CONJUNTO",
      title: <>DE LA RESERVA<br />A LA OPERACIÓN.</>,
      pillars: [["RESERVA", "Una experiencia simple para el cliente."], ["GESTIÓN", "Agenda, servicios y estadísticas en un panel."], ["AUTOMATIZACIÓN", "Comunicación y controles que trabajan solos."]],
      cta: "EXPLORAR BOOKEA →",
      back: "VER MÁS PROYECTOS",
    },
  },
  en: {
    kicker: "CASE STUDY · SAAS PRODUCT · DESIGN · DEVELOPMENT",
    title: <>BOOKING,<br />BUILT<br />AS A SYSTEM.</>,
    lead: "Bookea SaaS is our own product: a booking system for service businesses that replaces messages, notebooks and manual calendars with one single flow. It grew out of three custom systems already in use.",
    meta: [["TYPE", "In-house SaaS product"], ["LAUNCH", "December 1st · waitlist open"], ["SERVICES", "Product design · Development · System architecture"], ["TECHNOLOGY", "Next.js · React · TypeScript · PostgreSQL · Neon"]],
    overview: [
      ["01 / THE PROBLEM", "Bookings across chats and notebooks.", "Businesses managed reservations across WhatsApp, Instagram and manual calendars: extra work for the owner and appointments lost along the way."],
      ["02 / THE IDEA", "One system. Every booking.", "Bookea connects the whole journey: from the moment a client discovers a service to the moment the booking is confirmed and shows up in the business dashboard."],
      ["03 / THE GOAL", "Less manual work, fewer missed bookings.", "One source of truth for the calendar, and a better experience for both the client and the person running the business."],
    ],
    journey: {
      eyebrow: "01 / THE JOURNEY",
      active: "BOOK IN 5 STEPS",
      title: <>FROM DISCOVERY<br />TO BOOKING.</>,
      body: "Clients move through a five-step flow, always clear about where they are and what is left.",
      icons: ["✂", "▦", "◷", "✎", "✓"],
      stages: [
        ["Service", "STEP 1", "Picks what to book from the business's active services."],
        ["Date", "STEP 2", "Selects an available day on the calendar."],
        ["Time", "STEP 3", "Sees the free morning and afternoon slots and picks the one that suits them."],
        ["Details", "STEP 4", "Leaves contact details to confirm the appointment."],
        ["Done", "STEP 5", "Gets a confirmation with the summary and can add it to their calendar."],
      ] as Stage[],
    },
    client: {
      eyebrow: "02 / FOR CLIENTS",
      title: <>BOOKING WITHOUT<br />THE BACK-AND-FORTH.</>,
      body: "Every business gets its own booking page: no accounts, no message ping-pong, and just the right information at each step.",
      label: "Bookea booking view",
      points: ["Five-step flow with visible progress", "Time slots split into morning and afternoon", "Clear summary with service, duration, date and price", "Option to add the appointment to a calendar"],
      screens: [
        { shot: 1, title: "Pick a time", text: "The time step shows free slots grouped into morning and afternoon. The chosen slot is highlighted and the client can always go back." },
        { shot: 2, title: "Booking confirmed", text: "A closing screen with the appointment summary, a note that an email with a cancellation link is on its way, and a button to add it to a calendar." },
      ] as Screen[],
    },
    business: {
      eyebrow: "03 / FOR BUSINESSES",
      title: <>THE BUSINESS,<br />IN ONE PANEL.</>,
      body: "An admin panel built to know what is happening today and how the month is going, without opening spreadsheets or checking chats.",
      label: "Bookea dashboard view",
      points: ["Today's appointments with in-progress and next status", "Weekly calendar with time blocking", "Stats on revenue, appointments and busiest days", "Service catalog with duration and price"],
      screens: [
        { shot: 3, title: "Today's appointments", text: "The day's agenda ordered by time, with client, service and contact. It flags which one is in progress and which is next." },
        { shot: 6, title: "Calendar", text: "A weekly view with every appointment of each day, access to cancelled ones, time blocking and manual booking." },
        { shot: 4, title: "Statistics", text: "Completed and projected revenue for the month, total appointments, plus the busiest days and times to make better decisions." },
        { shot: 5, title: "Services", text: "Each service with its duration, price and status. Owners can edit them or add a new one at any time." },
      ] as Screen[],
    },
    automation: {
      eyebrow: "04 / AUTOMATION",
      active: "SYSTEM ACTIVE",
      title: <>THE SYSTEM<br />KEEPS WORKING.</>,
      body: "Communication and key safeguards happen on their own, so nobody has to remember.",
      icons: ["✉", "↺", "◔", "⛨"],
      stages: [
        ["Confirmation", "ON BOOKING", "The client gets an email with the appointment details as soon as the booking is done."],
        ["Cancellation link", "IN THE EMAIL", "They can cancel on their own from a link, without messaging the business."],
        ["Owner alert", "NOTIFICATION", "The business is notified of every new booking and every cancellation."],
        ["No double bookings", "CONCURRENCY", "Concurrency controls protect the calendar from double bookings in the same slot."],
      ] as Stage[],
      note: "Plus reminders the day before each appointment.",
    },
    model: {
      eyebrow: "06 / THE PRODUCT",
      title: <>BUILT TO GROW<br />WITH THE<br />BUSINESS.</>,
      body: "A simple model, with unlimited clients from day one. When a business needs something specific, we adapt the design and booking flow to its brand and operation.",
      plans: [["FREE", "Start with Bookea", "To try out the system."], ["BASE", "For growing businesses", "The essentials to operate."], ["PRO", "For advanced operations", "More control and customization."]],
      stack: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "NEON"],
    },
    origin: {
      eyebrow: "05 / ORIGIN",
      title: <>BORN FROM THREE<br />CUSTOM SYSTEMS.</>,
      body: "Before Bookea SaaS we built custom booking systems for three businesses. Each had its own needs: combinable services, teams, language, brand. What repeated across all three is the foundation of this product.",
      names: ["Studio Bombon", "Franco Zoller Barbería", "Marea Beauty House"],
      cta: "SEE THE THREE BUILDS →",
    },
    closing: {
      eyebrow: "08 / TOGETHER",
      title: <>FROM BOOKING<br />TO OPERATIONS.</>,
      pillars: [["BOOKING", "A simple experience for the client."], ["MANAGEMENT", "Calendar, services and stats in one panel."], ["AUTOMATION", "Communication and safeguards that run on their own."]],
      cta: "EXPLORE BOOKEA →",
      back: "MORE PROJECTS",
    },
  },
};

function Showcase({ screens, label, flip }: { screens: Screen[]; label: string; flip?: boolean }) {
  const [active, setActive] = useState(0);
  const current = screens[active];
  return (
    <div className={`${styles.showcase} ${flip ? styles.showcaseFlip : ""}`}>
      <div className={styles.showcaseImage}>
        <div className={styles.frame} data-par>
          <div className={styles.frameBar}><i /><i /><i /></div>
          <div className={styles.frameShot} key={current.shot}>
            <Image src={shot(current.shot)} alt={`${label}: ${current.title}`} fill sizes="(max-width: 900px) 92vw, 56vw" quality={90} priority={active === 0} />
          </div>
        </div>
      </div>
      <ol className={styles.screenList}>
        {screens.map(({ title, text }, index) => (
          <li key={title} {...rv(index + 1)}>
            <button type="button" className={index === active ? styles.screenActive : ""} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-pressed={index === active}>
              <span className={styles.screenNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.screenText}><b>{title}</b><span>{text}</span></span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Chapter({ data, flip, light }: { data: typeof copy.es.client; flip?: boolean; light?: boolean }) {
  return (
    <section className={`${styles.chapter} ${light ? styles.chapterLight : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.chapterHeader}>
          <div>
            <span className={styles.eyebrow} {...rv()}>{data.eyebrow}</span>
            <h2 {...rv(1)}>{data.title}</h2>
          </div>
          <div className={styles.chapterAside}>
            <p {...rv(2)}>{data.body}</p>
            <ul>{data.points.map((point, i) => <li key={point} {...rv(i + 3)}>{point}</li>)}</ul>
          </div>
        </div>
        <Showcase screens={data.screens} label={data.label} flip={flip} />
      </div>
    </section>
  );
}

function StageSection({ data, dark, note }: { data: { eyebrow: string; active: string; title: React.ReactNode; body: string; icons: string[]; stages: Stage[] }; dark?: boolean; note?: string }) {
  return (
    <section className={`${styles.lifecycle} ${dark ? styles.lifecycleDark : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.lifecycleTop}>
          <span className={styles.eyebrow}>{data.eyebrow}</span>
          <span className={styles.systemActive}><i /> {data.active}</span>
        </div>
        <div className={styles.lifecycleIntro}>
          <h2 {...rv()}>{data.title}</h2>
          <p {...rv(2)}>{data.body}</p>
        </div>
        <ol className={styles.stages} data-r="" style={{ "--cols": data.stages.length, "--d": "0ms" } as CSSProperties}>
          {data.stages.map(([title, pill, text], i) => (
            <li className={styles.stage} key={title} {...rv(i)}>
              <div className={styles.stageTop}><span className={styles.stageNode}>{data.icons[i]}</span><span className={styles.stageNumber}>{String(i + 1).padStart(2, "0")}</span></div>
              <span className={styles.pill}>{pill}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        {note && <p className={styles.stageNote}><i /> {note}</p>}
      </div>
    </section>
  );
}

export function BookeaCaseStudy() {
  const { language } = useLanguage();
  const t = copy[language];
  const mainRef = useRef<HTMLElement>(null);
  useScrollEffects(mainRef, language);

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

      <StageSection data={t.journey} />
      <Chapter data={t.client} />
      <Chapter data={t.business} flip light />
      <StageSection data={t.automation} note={t.automation.note} />

      <section className={styles.origin}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.origin.eyebrow}</span>
          <div className={styles.modelGrid}>
            <h2 {...rv()}>{t.origin.title}</h2>
            <p {...rv(2)}>{t.origin.body}</p>
          </div>
          <div className={styles.originRow} {...rv(1)}>
            <div className={styles.originNames}>{t.origin.names.map(n => <span key={n}>{n}</span>)}</div>
            <a className={styles.pill2} href="/work/bookea-a-medida">{t.origin.cta}</a>
          </div>
        </div>
      </section>

      <section className={styles.model}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.model.eyebrow}</span>
          <div className={styles.modelGrid}>
            <h2 {...rv()}>{t.model.title}</h2>
            <p {...rv(2)}>{t.model.body}</p>
          </div>
          <div className={styles.plans}>
            {t.model.plans.map(([name, title, text], i) => (
              <div className={styles.plan} key={name} {...rv(i)}><b>{name}</b><div><strong>{title}</strong><br /><span>{text}</span></div></div>
            ))}
          </div>
          <div className={styles.stack}>{t.model.stack.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <BookeaWaitlist language={language} eyebrowNumber="07" />

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
