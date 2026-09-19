"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/system/ArrowUpRight";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SeaducedExperienceCase.module.css";
import { ShowcaseImage } from "@/components/system/ShowcaseImage";

const base = "/assets/seaducedexperience";
const websiteImages = ["seaduced-experience-1-1280.webp", "seaduced-experience-2-1280.webp", "seaduced-experience-3-1280.webp", "seaduced-experience-4-1280.webp"];
const dashboardImages = ["dashboard-complete.png", "dashboard-bookings.png", "dashboard-calendar.png", "dashboard-analytics.png"];

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

    // Scroll-linked progress (0 -> 1 as an element travels into view) for parallax / depth.
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

type Screen = [title: string, description: string];
type Flow = [title: string, description: string, steps: string[], mock: [string, string]];

const copy = {
  es: {
    visit: "VER LA WEB EN VIVO",
    kicker: "CASO DE ESTUDIO · SITIO WEB · DASHBOARD · AUTOMATIZACIÓN",
    title: <>UN SISTEMA.<br />TODO CONECTADO.</>,
    lead: "Un negocio de tours privados en barco por Copenhague necesitaba más que una web bonita: necesitaba una forma de vender, operar y hacer seguimiento sin trabajo manual.",
    meta: [["CLIENTE", "Seaduced Experience"], ["UBICACIÓN", "Copenhague, Dinamarca"], ["SERVICIOS", "Diseño web · Desarrollo · UX · Dashboard · Automatización"], ["ENTREGABLES", "Sitio web de reservas, panel de administración y flujos automáticos"]],
    overview: [
      ["01 / EL RETO", "Vender experiencias premium, sin fricción.", "Los clientes reservan desde el móvil, a menudo de paso por la ciudad. El sitio tenía que transmitir la calidad del servicio y llevar a la reserva en muy pocos pasos."],
      ["02 / EL ENFOQUE", "Diseñar el sistema, no solo las pantallas.", "Web, panel y automatizaciones comparten datos y lenguaje visual. Cada reserva que entra por la web aparece en el dashboard y activa los mensajes correctos."],
      ["03 / EL RESULTADO", "Menos gestión manual, más tiempo en el agua.", "El equipo ve todas sus reservas en un solo lugar, entiende cuándo se reserva más y deja que el sistema se ocupe del seguimiento."],
    ],
    website: {
      eyebrow: "01 / SITIO WEB",
      title: <>DONDE COMIENZA<br />LA EXPERIENCIA.</>,
      body: "Un recorrido claro y premium: de descubrir el destino a confirmar una reserva privada, con la confianza de que todo está resuelto.",
      label: "Vista del sitio web de Seaduced Experience",
      screens: [
        ["Portada", "Una imagen inmersiva de los canales al atardecer y un mensaje directo. Dos acciones claras: reservar o explorar los tours."],
        ["Catálogo de experiencias", "Más de ocho experiencias organizadas en tarjetas con duración, foto y descripción, para comparar de un vistazo."],
        ["Confianza y personalidad", "Un bloque que explica por qué elegirlos: tours privados, guías locales y datos de reseñas que respaldan la promesa."],
        ["Reserva en un panel", "Participantes, duración, fecha, hora e idioma del guía en una sola tarjeta, con precio visible y cancelación gratuita."],
      ] as Screen[],
      points: ["Diseño editorial con tipografía serif y paleta cálida", "Selector de idioma integrado", "Precio y política de cancelación visibles al reservar", "Diseño adaptable a móvil"],
    },
    dashboard: {
      eyebrow: "02 / DASHBOARD",
      title: <>EL NEGOCIO,<br />BAJO CONTROL.</>,
      body: "Un panel de administración para el día a día: qué reservas entraron, quién sale hoy, qué días están ocupados y cómo va el negocio.",
      label: "Vista del dashboard de Seaduced Experience",
      screens: [
        ["Notificaciones", "Las reservas y cancelaciones de las últimas 48 horas, con el detalle justo para actuar sin abrir nada más."],
        ["Reservas directas", "Tabla filtrable por estado (pagadas, pendientes, canceladas), búsqueda por nombre o tour y rango de fechas."],
        ["Calendario", "Vista semanal o mensual que une reservas directas, las de GetYourGuide y los bloqueos de horario en un solo calendario."],
        ["Analíticas", "Demanda por hora, rendimiento por día de la semana y recomendaciones operativas basadas en los datos."],
      ] as Screen[],
      points: ["Reservas directas y de GetYourGuide unificadas", "Estados y filtros para localizar cualquier reserva", "Bloqueo de horarios desde el calendario", "Analíticas con sugerencias accionables"],
    },
    automation: {
      eyebrow: "03 / AUTOMATIZACIÓN",
      active: "SISTEMA ACTIVO",
      title: <>EL SISTEMA<br />SIGUE TRABAJANDO.</>,
      body: "Seguimiento, recuperación de reservas y asistencia proactiva, activados automáticamente en el momento adecuado, sin que nadie tenga que acordarse.",
      cta: ["Dejar una reseña", "Completar reserva →", "Obtener ayuda"],
      team: "Equipo Seaduced Experience",
      auto: "Automático",
      cards: [
        ["Después de la experiencia", "Cuando termina el tour, el sistema envía automáticamente un email de agradecimiento e invita al cliente a dejar una reseña.", ["EXPERIENCIA FINALIZADA", "EMAIL ENVIADO", "RESEÑA SOLICITADA"], ["Gracias por navegar con nosotros", "Nos encantaría conocer tu experiencia."]],
        ["Reserva sin finalizar", "Si un cliente comienza una reserva pero no completa el pago, el sistema detecta el abandono y envía un recordatorio.", ["RESERVA INICIADA", "PAGO PENDIENTE", "SEGUIMIENTO ENVIADO"], ["Completa tu reserva", "Tu reserva está casi completa."]],
        ["Error durante la reserva", "Si ocurre un problema durante el proceso, el sistema detecta el error y contacta al cliente para ofrecer ayuda.", ["ERROR DETECTADO", "CLIENTE CONTACTADO", "AYUDA OFRECIDA"], ["Estamos para ayudarte", "Detectamos un problema con tu reserva."]],
      ] as Flow[],
    },
    closing: {
      eyebrow: "04 / EN CONJUNTO",
      title: <>TRES PIEZAS.<br />UN SOLO SISTEMA.</>,
      pillars: [["SITIO WEB", "Convierte visitas en reservas."], ["DASHBOARD", "Ordena la operación."], ["AUTOMATIZACIÓN", "Cuida al cliente antes y después."]],
      back: "VER MÁS PROYECTOS",
    },
  },
  en: {
    visit: "VISIT THE LIVE SITE",
    kicker: "CASE STUDY · WEBSITE · DASHBOARD · AUTOMATION",
    title: <>ONE SYSTEM.<br />FULLY CONNECTED.</>,
    lead: "A private boat tour business in Copenhagen needed more than a good-looking website: it needed a way to sell, operate and follow up without manual work.",
    meta: [["CLIENT", "Seaduced Experience"], ["LOCATION", "Copenhagen, Denmark"], ["SERVICES", "Web design · Development · UX · Dashboard · Automation"], ["DELIVERABLES", "Booking website, admin panel and automated flows"]],
    overview: [
      ["01 / THE CHALLENGE", "Sell premium experiences, without friction.", "Guests book from their phone, often while passing through the city. The site had to convey the quality of the service and lead to a booking in very few steps."],
      ["02 / THE APPROACH", "Design the system, not just the screens.", "Website, dashboard and automations share data and visual language. Every booking that comes in through the site shows up in the dashboard and triggers the right messages."],
      ["03 / THE RESULT", "Less admin, more time on the water.", "The team sees every booking in one place, understands when demand peaks, and lets the system take care of follow-up."],
    ],
    website: {
      eyebrow: "01 / WEBSITE",
      title: <>WHERE THE JOURNEY<br />BEGINS.</>,
      body: "A clear, premium journey: from discovering the destination to confirming a private booking, with the confidence that everything is taken care of.",
      label: "Seaduced Experience website view",
      screens: [
        ["Landing", "An immersive image of the canals at sunset and a direct message. Two clear actions: book now or explore the tours."],
        ["Experience catalog", "Eight-plus experiences laid out as cards with duration, photo and description, so guests can compare at a glance."],
        ["Trust and personality", "A section explaining why choose them: private tours, local guides and review figures that back up the promise."],
        ["Booking in one panel", "Participants, duration, date, time and guide language in a single card, with visible pricing and free cancellation."],
      ] as Screen[],
      points: ["Editorial design with serif type and a warm palette", "Built-in language switcher", "Price and cancellation policy visible at booking", "Responsive, mobile-friendly layout"],
    },
    dashboard: {
      eyebrow: "02 / DASHBOARD",
      title: <>THE BUSINESS,<br />IN CONTROL.</>,
      body: "An admin panel for the day to day: which bookings came in, who is sailing today, which days are full and how the business is performing.",
      label: "Seaduced Experience dashboard view",
      screens: [
        ["Notifications", "New bookings and cancellations from the last 48 hours, with just enough detail to act without opening anything else."],
        ["Direct bookings", "A table you can filter by status (paid, pending, cancelled), search by name or tour, and narrow by date range."],
        ["Calendar", "Week or month view that merges direct bookings, GetYourGuide reservations and blocked time slots in a single calendar."],
        ["Analytics", "Demand by hour, performance by weekday and operational recommendations drawn from the data."],
      ] as Screen[],
      points: ["Direct and GetYourGuide bookings unified", "Statuses and filters to find any booking", "Block time slots straight from the calendar", "Analytics with actionable suggestions"],
    },
    automation: {
      eyebrow: "03 / AUTOMATION",
      active: "SYSTEM ACTIVE",
      title: <>THE SYSTEM<br />KEEPS WORKING.</>,
      body: "Follow-up, booking recovery and proactive support, automatically triggered at the right moment, without anyone having to remember.",
      cta: ["Leave a review", "Complete booking →", "Get help"],
      team: "Seaduced Experience Team",
      auto: "Automatic",
      cards: [
        ["After the experience", "As soon as the tour ends, the system automatically sends a thank-you email and invites the guest to leave a review.", ["EXPERIENCE ENDS", "EMAIL SENT", "REVIEW REQUESTED"], ["Thank you for sailing with us!", "We'd love to hear about your experience."]],
        ["Unfinished booking", "If a guest starts a booking but doesn't complete payment, the system detects the abandonment and sends a reminder.", ["BOOKING STARTED", "PAYMENT INCOMPLETE", "FOLLOW-UP SENT"], ["Complete your booking", "Your booking is almost complete."]],
        ["Booking error", "If something goes wrong during checkout, the system detects the issue and contacts the customer to offer help.", ["ERROR DETECTED", "CUSTOMER CONTACTED", "HELP OFFERED"], ["We're here to help.", "We noticed an issue with your booking."]],
      ] as Flow[],
    },
    closing: {
      eyebrow: "04 / TOGETHER",
      title: <>THREE PIECES.<br />ONE SYSTEM.</>,
      pillars: [["WEBSITE", "Turns visits into bookings."], ["DASHBOARD", "Keeps operations in order."], ["AUTOMATION", "Looks after guests before and after."]],
      back: "MORE PROJECTS",
    },
  },
};

function BrowserFrame({ src, alt, sizes, priority, dark }: { src: string; alt: string; sizes: string; priority?: boolean; dark?: boolean }) {
  return (
    <div className={`${styles.frame} ${dark ? styles.frameDark : ""}`} data-par>
      <div className={styles.frameBar}><i /><i /><i /></div>
      <div className={styles.frameShot} key={src}>
        <Image src={src} alt={alt} fill sizes={sizes} quality={90} priority={priority} />
      </div>
    </div>
  );
}

function Showcase({ images, screens, label, flip, dark }: { images: string[]; screens: Screen[]; label: string; flip?: boolean; dark?: boolean }) {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const items = screens.map(([title], i) => ({ src: `${base}/${images[i]}`, alt: `${label}: ${title}` }));
  return (
    <div className={`${styles.showcase} ${flip ? styles.showcaseFlip : ""}`}>
      <ShowcaseImage className={styles.showcaseImage} lang={language} active={active} onChange={setActive} items={items}>
        <BrowserFrame src={`${base}/${images[active]}`} alt={`${label}: ${screens[active][0]}`} sizes="(max-width: 900px) 92vw, 56vw" priority={active === 0} dark={dark} />
      </ShowcaseImage>
      <ol className={styles.screenList}>
        {screens.map(([title, description], index) => (
          <li key={title} {...rv(index + 1)}>
            <button type="button" className={index === active ? styles.screenActive : ""} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-pressed={index === active}>
              <span className={styles.screenNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.screenText}>
                <b>{title}</b>
                <span>{description}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Chapter({ data, images, dark, flip }: { data: typeof copy.es.website; images: string[]; dark?: boolean; flip?: boolean }) {
  return (
    <section className={`${styles.chapter} ${dark ? "" : styles.chapterLight}`}>
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
        <Showcase images={images} screens={data.screens} label={data.label} flip={flip} dark={dark} />
      </div>
    </section>
  );
}

export function SeaducedExperienceCase() {
  const { language } = useLanguage();
  const t = copy[language];
  const mainRef = useRef<HTMLElement>(null);
  useScrollEffects(mainRef, language);
  const mockIcons = ["✉\uFE0E", "◷", "◌"];
  const stepIcons = ["●", "✉\uFE0E", "✓"];

  return (
    <main className={styles.caseStudy} ref={mainRef}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.kicker}</span>
          <div className={styles.heroGrid}>
            <div>
              <h1>{t.title}</h1>
              <p className={styles.lead}>{t.lead}</p>
              <a className={styles.visit} href="https://www.seaducedexperience.com" target="_blank" rel="noreferrer"><span>{t.visit}</span><b>www.seaducedexperience.com <ArrowUpRight /></b></a>
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

      <Chapter data={t.website} images={websiteImages} dark />
      <Chapter data={t.dashboard} images={dashboardImages} flip />

      <section className={styles.automation}>
        <div className={styles.wrap}>
          <div className={styles.automationTop}>
            <span className={styles.eyebrow}>{t.automation.eyebrow}</span>
            <span className={styles.systemActive}><i /> {t.automation.active}</span>
          </div>
          <div className={styles.automationIntro}>
            <h2 {...rv()}>{t.automation.title}</h2>
            <p {...rv(2)}>{t.automation.body}</p>
          </div>
          <div className={styles.automationFlows}>
            {t.automation.cards.map(([title, description, steps, mock], index) => (
              <article key={title} className={styles[`tone${index + 1}`]} {...rv(index * 2)}>
                <div className={styles.flowNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.flowCopy}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ol className={styles.timeline}>
                  {steps.map((step, stepIndex) => <li key={step}><i>{stepIcons[stepIndex]}</i><span>{step}</span></li>)}
                </ol>
                <div className={styles.email}>
                  <div className={styles.emailBar}><span>{mockIcons[index]}</span><b>SEADUCED EXPERIENCE</b><em>{t.automation.auto}</em></div>
                  <div className={styles.emailBody}>
                    <strong>{mock[0]}</strong>
                    <p>{mock[1]}</p>
                    <div className={styles.mockButton}>{t.automation.cta[index]}</div>
                    <small>{t.automation.team}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
          <a className={styles.visit} href="https://www.seaducedexperience.com" target="_blank" rel="noreferrer"><span>{t.visit}</span><b>www.seaducedexperience.com <ArrowUpRight /></b></a>
          <a className={styles.back} href="/work">← {t.closing.back}</a>
        </div>
      </section>
    </main>
  );
}
