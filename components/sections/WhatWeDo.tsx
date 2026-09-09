"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import visualStyles from "./WhatWeDoVisuals.module.css";

type Service = { number: string; title: string; description: string; note: string; visual: "website" | "software" | "automation" };
type Copy = { heading: ReactNode; intro: string; learnMore: string; footer: string; portfolioPrompt: string; exploreWork: string; services: Service[] };

const content: Record<"en" | "es", Copy> = {
  en: { heading: <>Digital solutions<br />to help grow<br />your business.</>, intro: "We design, build and automate digital tools that let you focus on what matters most: growing your business.", learnMore: "LEARN MORE", footer: "SAME PURPOSE. DIFFERENT PATHS.", portfolioPrompt: "This is what happens when ideas become real digital solutions.", exploreWork: "EXPLORE OUR WORK", services: [
    { number: "01", title: "Websites", description: "We design clear, professional websites that represent your business and make it easier to attract new clients.", note: "Ideal for businesses that need an online presence or want to improve how they present their services.", visual: "website" },
    { number: "02", title: "Custom Software", description: "We build systems tailored to the way your business works. Organize tasks, processes and operations in a tool designed for your day-to-day needs.", note: "Built for businesses that can no longer manage their operations with generic tools or manual processes.", visual: "software" },
    { number: "03", title: "Automation & AI", description: "We automate repetitive tasks and connect your tools to reduce manual work. Less time operating, more time focused on growing your business.", note: "Especially useful if you spend a large part of your day answering, managing or repeating manual tasks.", visual: "automation" },
  ] },
  es: { heading: <>Soluciones digitales<br />para hacer crecer<br />tu negocio.</>, intro: "Diseñamos, desarrollamos y automatizamos herramientas digitales para que puedas enfocarte en lo más importante: hacer crecer tu negocio.", learnMore: "SABER MÁS", footer: "MISMO PROPÓSITO. DIFERENTES CAMINOS.", portfolioPrompt: "Esto es lo que ocurre cuando las ideas se convierten en soluciones digitales reales.", exploreWork: "EXPLORA NUESTRO TRABAJO", services: [
    { number: "01", title: "Páginas Web", description: "Diseñamos páginas web claras y profesionales que representan tu negocio y facilitan la captación de clientes.", note: "Ideal para negocios que necesitan presencia online o mejorar cómo presentan sus servicios.", visual: "website" },
    { number: "02", title: "Software a Medida", description: "Creamos sistemas adaptados a cómo funciona tu negocio. Organiza tareas, procesos y operaciones en una herramienta pensada para tu día a día.", note: "Pensado para negocios que ya no pueden manejar su operación con herramientas genéricas o procesos manuales.", visual: "software" },
    { number: "03", title: "Automatización e IA", description: "Automatizamos tareas repetitivas y conectamos tus herramientas para reducir trabajo manual. Menos tiempo operando, más tiempo enfocándote en hacer crecer tu negocio.", note: "Especialmente útil si pasas gran parte del día respondiendo, gestionando o repitiendo tareas manualmente.", visual: "automation" },
  ] },
};

function ServiceVisual({ type, language }: { type: Service["visual"]; language: "en" | "es" }) {
  const es = language === "es";

  if (type === "website") return <div className={`${visualStyles.visual} ${visualStyles.website}`} aria-hidden="true" data-parallax>
    <div className={visualStyles.browser}>
      <div className={visualStyles.browserBar}><i className={visualStyles.dot} /><i className={visualStyles.dot} /><i className={visualStyles.dot} /><div className={visualStyles.siteNav}><span>{es ? "ESTUDIO" : "STUDIO"}</span><span>{es ? "PROYECTOS" : "WORK"}</span><span>{es ? "CONTACTO" : "CONTACT"}</span></div></div>
      <div className={visualStyles.siteHero}><span className={visualStyles.eyebrow}>NORD STUDIO — COPENHAGEN</span><div className={visualStyles.siteTitle}>{es ? <>Espacios<br />que se sienten.</> : <>Spaces<br />you can feel.</>}</div><div className={visualStyles.siteMeta}><i className={visualStyles.siteLine} /><span>{es ? "ARQUITECTURA & INTERIORES" : "ARCHITECTURE & INTERIORS"}</span></div></div>
    </div>
  </div>;

  if (type === "software") return <div className={`${visualStyles.visual} ${visualStyles.software}`} aria-hidden="true" data-parallax>
    <div className={visualStyles.app}>
      <aside className={visualStyles.sidebar}><strong className={visualStyles.brand}>{es ? "TU NEGOCIO" : "YOUR BUSINESS"}</strong><span className={`${visualStyles.navItem} ${visualStyles.active}`}>{es ? "Resumen" : "Overview"}</span><span className={visualStyles.navItem}>{es ? "Clientes" : "Clients"}</span><span className={visualStyles.navItem}>{es ? "Proyectos" : "Projects"}</span><span className={visualStyles.navItem}>{es ? "Equipo" : "Team"}</span></aside>
      <div className={visualStyles.main}><div className={visualStyles.greeting}>{es ? "Buenos días, Michael." : "Good morning, Michael."}</div><div className={visualStyles.date}>{es ? "Lunes, 9 de septiembre" : "Monday, September 9"}</div><div className={visualStyles.priority}><small>{es ? "PRIORIDADES DE HOY" : "TODAY'S PRIORITIES"}</small><div className={visualStyles.priorityRow}><span>{es ? "Revisar nuevas solicitudes" : "Review new client requests"}</span><b className={visualStyles.priorityStatus}>03</b></div><div className={visualStyles.priorityRow}><span>{es ? "Confirmar pendientes" : "Confirm pending appointments"}</span><b className={visualStyles.priorityStatus}>08</b></div><div className={visualStyles.priorityRow}><span>{es ? "Seguimiento de proyectos" : "Follow up with projects"}</span><b className={visualStyles.priorityStatus}>04</b></div></div><div className={visualStyles.activity}><div className={visualStyles.activityTitle}>{es ? "ACTIVIDAD RECIENTE" : "RECENT ACTIVITY"}</div><div className={visualStyles.activityRow}><span>09:42</span><span>{es ? "Nuevo cliente añadido" : "New client added"}</span></div><div className={visualStyles.activityRow}><span>09:15</span><span>{es ? "Proyecto actualizado" : "Project updated"}</span></div></div></div>
    </div>
  </div>;

  return <div className={`${visualStyles.visual} ${visualStyles.automation}`} aria-hidden="true" data-parallax>
    <div className={visualStyles.flow}><div className={visualStyles.message}><small>{es ? "NUEVA SOLICITUD" : "NEW CLIENT REQUEST"}</small><p>{es ? <>Hola, me gustaría reservar una cita el próximo jueves por la tarde.</> : <>Hi, I would like to book an appointment next Thursday afternoon.</>}</p></div><div><div className={visualStyles.flowArrow} /><div className={visualStyles.process}><span className={visualStyles.processIcon}>✦</span><small>{es ? "AUTOMATIZACIÓN" : "AUTOMATION"}</small></div><div className={visualStyles.flowArrow} /></div><div className={visualStyles.result}><div className={visualStyles.resultItem}><span className={visualStyles.check}>✓</span>{es ? "Solicitud recibida" : "Request received"}</div><div className={visualStyles.resultItem}><span className={visualStyles.check}>✓</span>{es ? "Disponibilidad comprobada" : "Availability checked"}</div><div className={visualStyles.resultItem}><span className={visualStyles.check}>✓</span>{es ? "Reserva creada" : "Booking created"}</div><div className={visualStyles.resultItem}><span className={visualStyles.check}>✓</span>{es ? "Confirmación enviada" : "Confirmation sent"}</div></div></div>
  </div>;
}

export function WhatWeDo() {
  const { language } = useLanguage();
  const copy = content[language] || content.en;
  return <section className={`what-we-do language-${language}`} id="what-we-do"><div className="what-we-do-inner"><div className="what-we-do-intro"><div className="section-kicker" data-reveal="left"><span /> WHAT WE DO</div><h2 data-reveal>{copy.heading}</h2><p className="motion-stagger-1" data-reveal="right">{copy.intro}</p></div><div className="service-grid">{copy.services.map((service, index) => <article className={`service-card motion-stagger-${index + 1}`} data-reveal="scale" key={service.number}><div className="service-topline"><span>{service.number}</span><i /></div><ServiceVisual type={service.visual} language={language} /><h3>{service.title}</h3><p className="service-description">{service.description}</p><p className="service-note">{service.note}</p><a className="service-link focusable" href="#contact">{copy.learnMore} <span /></a></article>)}</div><div className="what-we-do-footer" data-reveal><div><span><i /> {copy.footer}</span><p className="what-we-do-portfolio-prompt">{copy.portfolioPrompt}</p></div><Link className="what-we-do-work-link focusable" href="/work">{copy.exploreWork} <b>⟶</b></Link></div></div></section>;
}
