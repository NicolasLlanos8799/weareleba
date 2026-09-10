"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";
const websiteImages = ["seaduced-experience-1.png","seaduced-experience-2.png","seaduced-experience-3.png","seaduced-experience-4.png"];
const dashboardImages = ["dashboard-complete.png","dashboard-bookings.png","dashboard-calendar.png","dashboard-analytics.png"];

const copy = {
  es: { flow: ["SITIO WEB", "DASHBOARD", "AUTOMATIZACIÓN"], website: { eyebrow: "SITIO WEB", title: <>DONDE COMIENZA<br />LA EXPERIENCIA.</>, body: "Descubre, explora y reserva experiencias privadas a través de un recorrido digital claro y premium.", label: "Vista del sitio web de Seaduced Experience" }, dashboard: { eyebrow: "DASHBOARD", title: <>EL NEGOCIO,<br />BAJO CONTROL.</>, body: "Reservas, cancelaciones, actividad reciente, calendario, diferentes canales y analíticas. Todo en un mismo lugar.", label: "Vista del dashboard de Seaduced Experience" }, automation: { eyebrow: "AUTOMATIZACIÓN", active: "SISTEMA ACTIVO", title: <>EL SISTEMA<br />SIGUE TRABAJANDO.</>, body: "Seguimiento, recuperación de reservas y asistencia proactiva, activados automáticamente en el momento adecuado.", cards: [["Después de la experiencia", "Cuando termina el tour, el sistema envía automáticamente un email de agradecimiento e invita al cliente a dejar una reseña.", ["EXPERIENCIA FINALIZADA", "EMAIL ENVIADO", "RESEÑA SOLICITADA"], ["Gracias por navegar con nosotros", "Nos encantaría conocer tu experiencia."]], ["Reserva sin finalizar", "Si un cliente comienza una reserva pero no completa el pago, el sistema detecta el abandono y envía un recordatorio.", ["RESERVA INICIADA", "PAGO PENDIENTE", "SEGUIMIENTO ENVIADO"], ["Completa tu reserva", "Tu reserva está casi completa."]], ["Error durante la reserva", "Si ocurre un problema durante el proceso, el sistema detecta el error y contacta al cliente para ofrecer ayuda.", ["ERROR DETECTADO", "CLIENTE CONTACTADO", "AYUDA OFRECIDA"], ["Estamos para ayudarte", "Detectamos un problema con tu reserva."]] ] } },
  en: { flow: ["WEBSITE", "DASHBOARD", "AUTOMATION"], website: { eyebrow: "WEBSITE", title: <>WHERE THE JOURNEY<br />BEGINS.</>, body: "Discover, explore and book private experiences through a clear and premium digital journey.", label: "Seaduced Experience website view" }, dashboard: { eyebrow: "DASHBOARD", title: <>THE BUSINESS,<br />IN CONTROL.</>, body: "Bookings, cancellations, recent activity, calendar, channels and analytics. All in one place.", label: "Seaduced Experience dashboard view" }, automation: { eyebrow: "AUTOMATION", active: "SYSTEM ACTIVE", title: <>THE SYSTEM<br />KEEPS WORKING.</>, body: "Follow-up, booking recovery and proactive support, automatically triggered at the right moment.", cards: [["After the experience", "As soon as the tour ends, the system automatically sends a thank-you email and invites the guest to leave a review.", ["EXPERIENCE ENDS", "EMAIL SENT", "REVIEW REQUESTED"], ["Thank you for sailing with us!", "We'd love to hear about your experience."]], ["Unfinished booking", "If a guest starts a booking but doesn't complete payment, the system detects the abandonment and sends a reminder.", ["BOOKING STARTED", "PAYMENT INCOMPLETE", "FOLLOW-UP SENT"], ["Complete your booking", "Your booking is almost complete."]], ["Booking error", "If something goes wrong during checkout, the system detects the issue and contacts the customer to offer help.", ["ERROR DETECTED", "CUSTOMER CONTACTED", "HELP OFFERED"], ["We're here to help.", "We noticed an issue with your booking."]] ] } }
};

function HorizontalGallery({ images, label }: { images: string[]; label: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current, sticky = stickyRef.current, track = trackRef.current;
    if (!section || !sticky || !track) return;
    let frame = 0, resizeTimer = 0;
    const getTravel = () => Math.max(0, Math.ceil(track.scrollWidth - window.innerWidth));
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = getTravel();
      const h = Math.ceil(sticky.getBoundingClientRect().height);
      const distance = Math.max(1, section.offsetHeight - h);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      track.style.transform = `translate3d(${-travel * progress}px,0,0)`;
    };
    const measure = () => {
      const travel = getTravel();
      const card = track.querySelector("." + styles.galleryCard) as HTMLElement | null;
      const h = Math.ceil(card?.getBoundingClientRect().height || 0);
      if (window.matchMedia("(max-width: 800px)").matches) {
        // The page itself provides the scroll input on mobile, exactly like desktop.
        // The sticky visual area remains compact; no touch handler is needed.
        sticky.style.height = `${h}px`;
        section.style.height = `${h + travel}px`;
      } else {
        sticky.style.removeProperty("height");
        section.style.height = `${Math.ceil(sticky.getBoundingClientRect().height) + travel}px`;
      }
      update();
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = window.setTimeout(measure, 50); };
    const observer = new ResizeObserver(onResize);
    observer.observe(track);
    measure();
    Promise.all(Array.from(track.querySelectorAll("img")).map(image => image.complete ? Promise.resolve() : new Promise<void>(resolve => image.addEventListener("load", () => resolve(), { once: true })))).then(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    return () => { observer.disconnect(); clearTimeout(resizeTimer); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); window.visualViewport?.removeEventListener("resize", onResize); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <div className={styles.galleryScroll} ref={sectionRef}><div className={styles.gallerySticky} ref={stickyRef}><div className={styles.galleryTrack} ref={trackRef}>{images.map((image,index)=><figure className={styles.galleryCard} key={image}><Image src={`${base}/${image}`} alt={`${label} ${index+1}`} fill sizes="(max-width: 800px) 84vw, 72vw" quality={100} priority={index===0}/><span>{String(index+1).padStart(2,"0")}</span></figure>)}</div></div></div>;
}

export function SeaducedExperienceCase(){const{language}=useLanguage();const t=copy[language];return <main className={styles.caseStudy}><section className={styles.hero}><div className={styles.heroCopy}><span>SEADUCED EXPERIENCE</span><h1>{language==="es"?<>UN SISTEMA.<br/>TODO CONECTADO.</>:<>ONE SYSTEM.<br/>FULLY CONNECTED.</>}</h1><div className={styles.systemFlow}>{t.flow.map((item,index)=><span key={item}>{item}{index<t.flow.length-1&&<b>↓</b>}</span>)}</div></div></section><section className={styles.chapter}><div className={styles.chapterHeader}><div><span>{t.website.eyebrow}</span><h2>{t.website.title}</h2></div><p>{t.website.body}</p></div><HorizontalGallery images={websiteImages} label={t.website.label}/></section><section className={`${styles.chapter} ${styles.dashboardChapter}`}><div className={styles.chapterHeader}><div><span>{t.dashboard.eyebrow}</span><h2>{t.dashboard.title}</h2></div><p>{t.dashboard.body}</p></div><HorizontalGallery images={dashboardImages} label={t.dashboard.label}/></section><section className={styles.automation}><div className={styles.automationTop}><span className={styles.automationLabel}>{t.automation.eyebrow}</span><span className={styles.systemActive}><i/> {t.automation.active}</span></div><div className={styles.automationIntro}><div><h2>{t.automation.title}</h2></div><p>{t.automation.body}</p></div><div className={styles.automationFlows}>{t.automation.cards.map(([title,description,steps,mock],index)=><article key={title as string}><div className={styles.flowTop}><div className={styles.flowNumber}>{String(index+1).padStart(2,"0")}</div><span className={styles.flowTrigger}>{(steps as string[])[0]}</span></div><div className={styles.flowContent}><div className={styles.flowCopy}><h3>{title as string}</h3><p>{description as string}</p><div className={styles.flowSteps}>{(steps as string[]).map((step,stepIndex)=><div key={step}><i>{stepIndex===0?"✦":stepIndex===1?"✉":"✓"}</i><span>{step}</span></div>)}</div></div><div className={`${styles.automationMock} ${styles[`mock${index+1}`]}`}><div className={styles.mockHeader}><span>{index===0?"✉":index===1?"◷":"◌"}</span><b>SEADUCED EXPERIENCE</b></div><strong>{(mock as string[])[0]}</strong><p>{(mock as string[])[1]}</p><div className={styles.mockButton}>{index===0?(language==="es"?"Dejar una reseña":"Leave a review"):index===1?(language==="es"?"Completar reserva →":"Complete booking →"):(language==="es"?"Obtener ayuda":"Get help")}</div><small>{language==="es"?"Equipo Seaduced Experience":"Seaduced Experience Team"}</small></div></div></article>)}</div></section></main>}
