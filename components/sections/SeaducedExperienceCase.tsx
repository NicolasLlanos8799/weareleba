"use client";

import styles from "./SeaducedExperienceCase.module.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const base="/assets/seaducedexperience";

const content={
  en:{
    eyebrow:"DIGITAL SYSTEM / PREMIUM SAILING EXPERIENCE",
    title:<>A premium experience<br/><span>built as a system.</span></>,
    intro:"Seaduced Experience connects the customer journey with the operational side of the business — from discovery and booking to management and automated follow-up.",
    systemLabel:"THE SYSTEM",
    system:"One connected digital layer across Website, Dashboard and Automation. The experience customers see and the operation the team runs work as one system.",
    problemLabel:"THE PROBLEM",
    problem:"A premium sailing experience needed more than a website. Customer discovery, bookings, internal management and follow-up were separated across different processes. The system brings them together.",
    websiteLabel:"WEBSITE",
    websiteTitle:"A clearer path to booking.",
    websiteText:"A premium digital experience designed to make the service easy to understand, explore and book without losing the character of the brand.",
    dashboardLabel:"DASHBOARD",
    dashboardTitle:"Operations in one place.",
    dashboardText:"A central operational workspace for bookings, calendar, activity and business visibility — turning the service behind the experience into a manageable digital layer.",
    automationLabel:"AUTOMATION",
    automationTitle:"The system keeps moving.",
    automationText:"Automated follow-up handles recurring moments after and around bookings, reducing repetitive work while keeping the customer journey connected.",
    closing:"ONE EXPERIENCE. ONE CONNECTED SYSTEM.",
    note:"From the first interaction to the operational follow-up, Seaduced Experience now has a digital foundation built to evolve with the business.",
    next:"BACK TO WORK →"
  },
  es:{
    eyebrow:"SISTEMA DIGITAL / EXPERIENCIA PREMIUM DE NAVEGACIÓN",
    title:<>Una experiencia premium<br/><span>construida como sistema.</span></>,
    intro:"Seaduced Experience conecta la experiencia del cliente con la operación del negocio — desde el descubrimiento y la reserva hasta la gestión y el seguimiento automatizado.",
    systemLabel:"EL SISTEMA",
    system:"Una única capa digital conectando Website, Dashboard y Automatización. La experiencia que ve el cliente y la operación del equipo funcionan como un solo sistema.",
    problemLabel:"EL PROBLEMA",
    problem:"Una experiencia premium de navegación necesitaba más que un sitio web. El descubrimiento, las reservas, la gestión interna y el seguimiento estaban separados en distintos procesos. El sistema los conecta.",
    websiteLabel:"WEBSITE",
    websiteTitle:"Un camino más claro hacia la reserva.",
    websiteText:"Una experiencia digital premium diseñada para hacer que el servicio sea fácil de entender, explorar y reservar sin perder el carácter de la marca.",
    dashboardLabel:"DASHBOARD",
    dashboardTitle:"La operación en un solo lugar.",
    dashboardText:"Un espacio operativo central para reservas, calendario, actividad y visibilidad del negocio — convirtiendo la operación detrás de la experiencia en una capa digital gestionable.",
    automationLabel:"AUTOMATIZACIÓN",
    automationTitle:"El sistema sigue funcionando.",
    automationText:"El seguimiento automatizado resuelve momentos recurrentes alrededor de las reservas, reduciendo trabajo repetitivo y manteniendo conectado el recorrido del cliente.",
    closing:"UNA EXPERIENCIA. UN ÚNICO SISTEMA CONECTADO.",
    note:"Desde la primera interacción hasta el seguimiento operativo, Seaduced Experience cuenta ahora con una base digital preparada para evolucionar con el negocio.",
    next:"VOLVER A WORK →"
  }
};

export function SeaducedExperienceCase(){
  const {language}=useLanguage();
  const c=content[language];
  return <main className={styles.case}>
    <section className={styles.hero}>
      <div className={styles.eyebrow}>{c.eyebrow}</div>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}><h1>{c.title}</h1><p>{c.intro}</p></div>
        <div className={styles.heroVisual}><img src={base+"/seaduced-experience-1-1280.webp"} alt="Seaduced Experience website" /></div>
      </div>
      <div className={styles.scrollHint}><span/> SCROLL TO EXPLORE</div>
    </section>
    <section className={styles.context}>
      <div className={styles.number}>01</div>
      <div className={styles.contextContent}><span>{c.systemLabel}</span><p>{c.system}</p></div>
    </section>
    <section className={styles.problem}>
      <div className={styles.problemCopy}><div className={styles.number}>02</div><span>{c.problemLabel}</span><p>{c.problem}</p></div>
    </section>
    <section className={styles.feature+" "+styles.website}>
      <div className={styles.featureHead}><div className={styles.meta}><span>03</span><span>{c.websiteLabel}</span></div><h2>{c.websiteTitle}</h2><p>{c.websiteText}</p></div>
      <div className={styles.featureVisual}><img src={base+"/seaduced-experience-2-1280.webp"} alt="Seaduced Experience website interface" loading="lazy"/></div>
    </section>
    <section className={styles.feature+" "+styles.dashboard}>
      <div className={styles.featureVisual}><img src={base+"/dashboard-complete.png"} alt="Seaduced Experience dashboard" loading="lazy"/></div>
      <div className={styles.featureHead}><div className={styles.meta}><span>04</span><span>{c.dashboardLabel}</span></div><h2>{c.dashboardTitle}</h2><p>{c.dashboardText}</p></div>
    </section>
    <section className={styles.automation}>
      <div className={styles.automationCopy}><div className={styles.meta}><span>05</span><span>{c.automationLabel}</span></div><h2>{c.automationTitle}</h2><p>{c.automationText}</p></div>
      <div className={styles.automationVisual}><img src={base+"/dashboard-analytics.png"} alt="Seaduced Experience analytics and automation view" loading="lazy"/></div>
    </section>
    <section className={styles.statement}>
      <div className={styles.number}>06 / SYSTEM</div><div><h2>{c.closing}</h2><p>{c.note}</p></div>
    </section>
    <div className={styles.next}><a href="/work">{c.next} <span>→</span></a></div>
  </main>;
}
