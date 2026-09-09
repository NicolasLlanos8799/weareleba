"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";
const websiteImages = ["seaduced-experience-1.png","seaduced-experience-2.png","seaduced-experience-3.png","seaduced-experience-4.png"];
const dashboardImages = ["dashboard-complete.png","dashboard-bookings.png","dashboard-calendar.png","dashboard-analytics.png"];

const copy = {
  es: {
    flow: ["SITIO WEB", "DASHBOARD", "AUTOMATIZACIÓN"],
    website: { eyebrow: "02 / SITIO WEB", title: <>DONDE COMIENZA<br />LA EXPERIENCIA.</>, body: "Descubre, explora y reserva experiencias privadas a través de un recorrido digital claro y premium.", label: "Vista del sitio web de Seaduced Experience" },
    dashboard: { eyebrow: "03 / DASHBOARD", title: <>EL NEGOCIO,<br />BAJO CONTROL.</>, body: "Reservas, cancelaciones, actividad reciente, calendario, diferentes canales y analíticas. Todo en un mismo lugar.", label: "Vista del dashboard de Seaduced Experience" },
    automation: { eyebrow: "04 / AUTOMATIZACIÓN", title: <>EL SISTEMA<br />SIGUE TRABAJANDO.</>, body: "Seguimiento, recuperación de reservas y asistencia proactiva, activados automáticamente en el momento adecuado.", cards: [["Después de la experiencia", "Experiencia finalizada → Email enviado → Reseña solicitada"], ["Reserva sin finalizar", "Reserva iniciada → Pago pendiente → Email de seguimiento"], ["Error durante la reserva", "Error detectado → Cliente contactado → Ayuda ofrecida"]] }
  },
  en: {
    flow: ["WEBSITE", "DASHBOARD", "AUTOMATION"],
    website: { eyebrow: "02 / WEBSITE", title: <>WHERE THE JOURNEY<br />BEGINS.</>, body: "Discover, explore and book private experiences through a clear and premium digital journey.", label: "Seaduced Experience website view" },
    dashboard: { eyebrow: "03 / DASHBOARD", title: <>THE BUSINESS,<br />IN CONTROL.</>, body: "Bookings, cancellations, recent activity, calendar, channels and analytics. All in one place.", label: "Seaduced Experience dashboard view" },
    automation: { eyebrow: "04 / AUTOMATION", title: <>THE SYSTEM<br />KEEPS WORKING.</>, body: "Follow-up, booking recovery and proactive support, automatically triggered at the right moment.", cards: [["After the experience", "Experience ends → Email sent → Review requested"], ["Unfinished booking", "Booking started → Payment incomplete → Follow-up sent"], ["Booking error", "Error detected → Customer contacted → Help offered"]] }
  }
};

function HorizontalGallery({ images, label }: { images: string[]; label: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current; const track = trackRef.current;
    if (!section || !track) return; let frame = 0;
    const measure = () => { if (window.innerWidth <= 800) { section.style.height = "auto"; track.style.transform = "translate3d(0,0,0)"; return; } const travel = Math.max(0, track.scrollWidth - window.innerWidth); section.style.height = `${Math.ceil(window.innerHeight + travel)}px`; };
    const update = () => { frame = 0; if (window.innerWidth <= 800) return; const rect = section.getBoundingClientRect(); const travel = Math.max(0, track.scrollWidth - window.innerWidth); const distance = Math.max(1, section.offsetHeight - window.innerHeight); const progress = Math.min(1, Math.max(0, -rect.top / distance)); track.style.transform = `translate3d(${-travel * progress}px,0,0)`; };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); }; const onResize = () => { measure(); update(); };
    measure(); update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  return <div className={styles.galleryScroll} ref={sectionRef}><div className={styles.gallerySticky}><div className={styles.galleryTrack} ref={trackRef}>{images.map((image,index)=><figure className={styles.galleryCard} key={image}><Image src={`${base}/${image}`} alt={`${label} ${index+1}`} fill sizes="(max-width: 800px) 78vw, 72vw" quality={100} priority={index===0}/><span>{String(index+1).padStart(2,"0")}</span></figure>)}</div></div></div>;
}

export function SeaducedExperienceCase() {
  const { language } = useLanguage();
  const t = copy[language];
  return <main className={styles.caseStudy}>
    <section className={styles.hero}><div className={styles.heroCopy}>
      <span>01 / SEADUCED EXPERIENCE</span>
      <h1>{language === "es" ? <>UN SISTEMA.<br/>TODO CONECTADO.</> : <>ONE SYSTEM.<br/>FULLY CONNECTED.</>}</h1>
      <div className={styles.systemFlow}>{t.flow.map((item, index) => <span key={item}>{item}{index < t.flow.length - 1 && <b>↓</b>}</span>)}</div>
    </div></section>
    <section className={styles.chapter}><div className={styles.chapterHeader}><div><span>{t.website.eyebrow}</span><h2>{t.website.title}</h2></div><p>{t.website.body}</p></div><HorizontalGallery images={websiteImages} label={t.website.label}/></section>
    <section className={`${styles.chapter} ${styles.dashboardChapter}`}><div className={styles.chapterHeader}><div><span>{t.dashboard.eyebrow}</span><h2>{t.dashboard.title}</h2></div><p>{t.dashboard.body}</p></div><HorizontalGallery images={dashboardImages} label={t.dashboard.label}/></section>
    <section className={styles.automation}><div className={styles.automationIntro}><div><span>{t.automation.eyebrow}</span><h2>{t.automation.title}</h2></div><p>{t.automation.body}</p></div><div className={styles.automationCards}>{t.automation.cards.map(([title, body], index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
  </main>;
}
