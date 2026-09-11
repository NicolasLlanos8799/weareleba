"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import visualStyles from "./WhatWeDoVisuals.module.css";

type Service = { number: string; title: string; description: string; note: string; visual: "website" | "software" | "automation" | "systems" };
type Copy = { heading: ReactNode; intro: string; learnMore: string; footer: string; portfolioPrompt: string; exploreWork: string; services: Service[] };

const content: Record<"en" | "es", Copy> = {
  en: { heading: <>Digital solutions<br />to help grow<br />your business.</>, intro: "We design, build and automate digital tools that let you focus on what matters most: growing your business.", learnMore: "LEARN MORE", footer: "SAME PURPOSE. DIFFERENT PATHS.", portfolioPrompt: "This is what happens when ideas become real digital solutions.", exploreWork: "EXPLORE OUR WORK", services: [
    { number: "01", title: "Websites", description: "We design clear, professional websites that represent your business and make it easier to attract new clients.", note: "Ideal for businesses that need an online presence or want to improve how they present their services.", visual: "website" },
    { number: "02", title: "Custom Software", description: "We build systems tailored to the way your business works. Organize tasks, processes and operations in a tool designed for your day-to-day needs.", note: "Built for businesses that can no longer manage their operations with generic tools or manual processes.", visual: "software" },
    { number: "03", title: "Automation & AI", description: "We automate repetitive tasks and connect your tools to reduce manual work. Less time operating, more time focused on growing your business.", note: "Especially useful if you spend a large part of your day answering, managing or repeating manual tasks.", visual: "automation" },
    { number: "04", title: "Connected Systems", description: "We connect the different parts of your digital business so information, tools and processes work together as one system.", note: "For businesses that need more than individual solutions and want their digital infrastructure to work together.", visual: "systems" },
  ] },
  es: { heading: <>Soluciones digitales<br />para hacer crecer<br />tu negocio.</>, intro: "Diseñamos, desarrollamos y automatizamos herramientas digitales para que puedas enfocarte en lo más importante: hacer crecer tu negocio.", learnMore: "SABER MÁS", footer: "MISMO PROPÓSITO. DIFERENTES CAMINOS.", portfolioPrompt: "Esto es lo que ocurre cuando las ideas se convierten en soluciones digitales reales.", exploreWork: "EXPLORA NUESTRO TRABAJO", services: [
    { number: "01", title: "Páginas Web", description: "Diseñamos páginas web claras y profesionales que representan tu negocio y facilitan la captación de clientes.", note: "Ideal para negocios que necesitan presencia online o mejorar cómo presentan sus servicios.", visual: "website" },
    { number: "02", title: "Software a Medida", description: "Creamos sistemas adaptados a cómo funciona tu negocio. Organiza tareas, procesos y operaciones en una herramienta pensada para tu día a día.", note: "Pensado para negocios que ya no pueden manejar su operación con herramientas genéricas o procesos manuales.", visual: "software" },
    { number: "03", title: "Automatización e IA", description: "Automatizamos tareas repetitivas y conectamos tus herramientas para reducir trabajo manual. Menos tiempo operando, más tiempo enfocándote en hacer crecer tu negocio.", note: "Especialmente útil si pasas gran parte del día respondiendo, gestionando o repitiendo tareas manualmente.", visual: "automation" },
    { number: "04", title: "Sistemas Conectados", description: "Conectamos las diferentes partes de tu negocio digital para que la información, las herramientas y los procesos funcionen como un solo sistema.", note: "Para negocios que necesitan más que soluciones individuales y quieren que toda su infraestructura digital trabaje en conjunto.", visual: "systems" },
  ] },
};

const serviceImages: Record<Service["visual"], string> = {
  website: "/assets/services/website.png",
  software: "/assets/services/customsoftware.png",
  automation: "/assets/services/automation.png",
  systems: "/assets/services/system.png",
};

function ServiceVisual({ type }: { type: Service["visual"] }) {
  return (
    <div className={`${visualStyles.visual} ${visualStyles[type]}`} aria-hidden="true">
      <img
        src={serviceImages[type]}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function WhatWeDo() {
  const { language } = useLanguage();
  const copy = content[language] || content.en;
  return <section className={`what-we-do language-${language}`} id="what-we-do"><div className="what-we-do-inner"><div className="what-we-do-intro"><div className="section-kicker" data-reveal="left"><span /> WHAT WE DO</div><h2 data-reveal>{copy.heading}</h2><p className="motion-stagger-1" data-reveal="right">{copy.intro}</p></div><div className="service-grid">{copy.services.map((service, index) => <article className={`service-card ${service.visual === "systems" ? "service-card-systems" : ""} motion-stagger-${index + 1}`} data-reveal="scale" key={service.number}><div className="service-topline"><span>{service.number}</span><i /></div><ServiceVisual type={service.visual} /><div className={service.visual === "systems" ? "service-card-systems-copy" : ""}><h3>{service.title}</h3><p className="service-description">{service.description}</p><p className="service-note">{service.note}</p><a className="service-link focusable" href="#contact">{copy.learnMore} <span /></a></div></article>)}</div><div className="what-we-do-footer" data-reveal><div><span><i /> {copy.footer}</span><p className="what-we-do-portfolio-prompt">{copy.portfolioPrompt}</p></div><Link className="what-we-do-work-link focusable" href="/work">{copy.exploreWork} <b>⟶</b></Link></div></div></section>;
}
