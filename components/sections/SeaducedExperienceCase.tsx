"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";
const websiteImages = ["seaduced-experience-1.png","seaduced-experience-2.png","seaduced-experience-3.png","seaduced-experience-4.png"];
const dashboardImages = ["dashboard-complete.png","dashboard-bookings.png","dashboard-calendar.png","dashboard-analytics.png"];

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
  return <main className={styles.caseStudy}>
    <section className={styles.hero}><div className={styles.heroCopy}>
      <span>01 / SEADUCED EXPERIENCE</span>
      <h1>UN SISTEMA.<br/>TODO CONECTADO.</h1>
      <div className={styles.systemFlow}><span>SITIO WEB</span><b>↓</b><span>DASHBOARD</span><b>↓</b><span>AUTOMATIZACIÓN</span></div>
    </div></section>
    <section className={styles.chapter}><div className={styles.chapterHeader}><div><span>02 / SITIO WEB</span><h2>DONDE COMIENZA<br/>LA EXPERIENCIA.</h2></div><p>Descubre, explora y reserva experiencias privadas a través de un recorrido digital claro y premium.</p></div><HorizontalGallery images={websiteImages} label="Vista del sitio web de Seaduced Experience"/></section>
    <section className={`${styles.chapter} ${styles.dashboardChapter}`}><div className={styles.chapterHeader}><div><span>03 / DASHBOARD</span><h2>EL NEGOCIO,<br/>BAJO CONTROL.</h2></div><p>Reservas, cancelaciones, actividad reciente, calendario, diferentes canales y analíticas. Todo en un mismo lugar.</p></div><HorizontalGallery images={dashboardImages} label="Vista del dashboard de Seaduced Experience"/></section>
    <section className={styles.automation}><div className={styles.automationIntro}><div><span>04 / AUTOMATIZACIÓN</span><h2>EL SISTEMA<br/>SIGUE TRABAJANDO.</h2></div><p>Seguimiento, recuperación de reservas y asistencia proactiva, activados automáticamente en el momento adecuado.</p></div><div className={styles.automationCards}><article><span>01</span><h3>Después de la experiencia</h3><p>Experiencia finalizada → Email enviado → Reseña solicitada</p></article><article><span>02</span><h3>Reserva sin finalizar</h3><p>Reserva iniciada → Pago pendiente → Email de seguimiento</p></article><article><span>03</span><h3>Error durante la reserva</h3><p>Error detectado → Cliente contactado → Ayuda ofrecida</p></article></div></section>
  </main>;
}
