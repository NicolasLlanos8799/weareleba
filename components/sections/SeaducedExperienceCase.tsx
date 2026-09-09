"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";
const websiteImages = ["seaduced-experience-1.png","seaduced-experience-2.png","seaduced-experience-3.png","seaduced-experience-4.png"];
const dashboardImages = ["dashboard-complete.png","dashboard-bookings.png","dashboard-calendar.png","dashboard-analytics.png"];

const copy = {
  es: { flow: ["SITIO WEB", "DASHBOARD", "AUTOMATIZACIÓN"], website: { eyebrow: "SITIO WEB", title: <>DONDE COMIENZA<br />LA EXPERIENCIA.</>, body: "Descubre, explora y reserva experiencias privadas a través de un recorrido digital claro y premium.", label: "Vista del sitio web de Seaduced Experience" }, dashboard: { eyebrow: "DASHBOARD", title: <>EL NEGOCIO,<br />BAJO CONTROL.</>, body: "Reservas, cancelaciones, actividad reciente, calendario, diferentes canales y analíticas. Todo en un mismo lugar.", label: "Vista del dashboard de Seaduced Experience" }, automation: { eyebrow: "AUTOMATIZACIÓN", active: "SISTEMA ACTIVO", title: <>EL SISTEMA<br />SIGUE TRABAJANDO.</>, body: "Seguimiento, recuperación de reservas y asistencia proactiva, activados automáticamente en el momento adecuado.", cards: [["Después de la experiencia", ["EXPERIENCIA FINALIZADA", "EMAIL ENVIADO", "RESEÑA SOLICITADA"]], ["Reserva sin finalizar", ["RESERVA INICIADA", "PAGO PENDIENTE", "EMAIL DE SEGUIMIENTO"]], ["Error durante la reserva", ["ERROR DETECTADO", "CLIENTE CONTACTADO", "AYUDA OFRECIDA"]]] } },
  en: { flow: ["WEBSITE", "DASHBOARD", "AUTOMATION"], website: { eyebrow: "WEBSITE", title: <>WHERE THE JOURNEY<br />BEGINS.</>, body: "Discover, explore and book private experiences through a clear and premium digital journey.", label: "Seaduced Experience website view" }, dashboard: { eyebrow: "DASHBOARD", title: <>THE BUSINESS,<br />IN CONTROL.</>, body: "Bookings, cancellations, recent activity, calendar, channels and analytics. All in one place.", label: "Seaduced Experience dashboard view" }, automation: { eyebrow: "AUTOMATION", active: "SYSTEM ACTIVE", title: <>THE SYSTEM<br />KEEPS WORKING.</>, body: "Follow-up, booking recovery and proactive support, automatically triggered at the right moment.", cards: [["After the experience", ["EXPERIENCE ENDS", "EMAIL SENT", "REVIEW REQUESTED"]], ["Unfinished booking", ["BOOKING STARTED", "PAYMENT INCOMPLETE", "FOLLOW-UP SENT"]], ["Booking error", ["ERROR DETECTED", "CUSTOMER CONTACTED", "HELP OFFERED"]]] } }
};

function HorizontalGallery({ images, label }: { images: string[]; label: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track) return;

    let frame = 0;
    let resizeTimer = 0;
    const getTravel = () => Math.max(0, Math.ceil(track.scrollWidth - window.innerWidth));
    const getStickyHeight = () => Math.ceil(sticky.getBoundingClientRect().height);

    const measure = () => {
      const travel = getTravel();
      const stickyHeight = getStickyHeight();
      section.style.height = `${stickyHeight + travel}px`;
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = getTravel();
      const stickyHeight = getStickyHeight();
      const scrollDistance = Math.max(1, section.offsetHeight - stickyHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
      track.style.transform = `translate3d(${-travel * progress}px,0,0)`;
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { measure(); update(); }, 50);
    };

    const observer = new ResizeObserver(onResize);
    observer.observe(track);
    observer.observe(sticky);

    const imageLoads = Array.from(track.querySelectorAll("img")).map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise<void>((resolve) => image.addEventListener("load", () => resolve(), { once: true }));
    });

    measure();
    update();
    Promise.all(imageLoads).then(() => { measure(); update(); });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className={styles.galleryScroll} ref={sectionRef}><div className={styles.gallerySticky} ref={stickyRef}><div className={styles.galleryTrack} ref={trackRef}>{images.map((image,index)=><figure className={styles.galleryCard} key={image}><Image src={`${base}/${image}`} alt={`${label} ${index+1}`} fill sizes="(max-width: 800px) 84vw, 72vw" quality={100} priority={index===0}/><span>{String(index+1).padStart(2,"0")}</span></figure>)}</div></div></div>;
}

export function SeaducedExperienceCase() { const { language } = useLanguage(); const t = copy[language]; return <main className={styles.caseStudy}><section className={styles.hero}><div className={styles.heroCopy}><span>SEADUCED EXPERIENCE</span><h1>{language === "es" ? <>UN SISTEMA.<br/>TODO CONECTADO.</> : <>ONE SYSTEM.<br/>FULLY CONNECTED.</>}</h1><div className={styles.systemFlow}>{t.flow.map((item,index)=><span key={item}>{item}{index<t.flow.length-1&&<b>↓</b>}</span>)}</div></div></section><section className={styles.chapter}><div className={styles.chapterHeader}><div><span>{t.website.eyebrow}</span><h2>{t.website.title}</h2></div><p>{t.website.body}</p></div><HorizontalGallery images={websiteImages} label={t.website.label}/></section><section className={`${styles.chapter} ${styles.dashboardChapter}`}><div className={styles.chapterHeader}><div><span>{t.dashboard.eyebrow}</span><h2>{t.dashboard.title}</h2></div><p>{t.dashboard.body}</p></div><HorizontalGallery images={dashboardImages} label={t.dashboard.label}/></section><section className={styles.automation}><div className={styles.automationTop}><span className={styles.automationLabel}>{t.automation.eyebrow}</span><span className={styles.systemActive}><i/> {t.automation.active}</span></div><div className={styles.automationIntro}><div><h2>{t.automation.title}</h2></div><p>{t.automation.body}</p></div><div className={styles.automationFlows}>{t.automation.cards.map(([title,steps],index)=><article key={title as string}><div className={styles.flowNumber}>{String(index+1).padStart(2,"0")}</div><h3>{title as string}</h3><div className={styles.flowSteps}>{(steps as string[]).map((step,stepIndex)=><div key={step}><span>{step}</span>{stepIndex<(steps as string[]).length-1&&<b>↓</b>}</div>)}</div></article>)}</div></section></main>; }
