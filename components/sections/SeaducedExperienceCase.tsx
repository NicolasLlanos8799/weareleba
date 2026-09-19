"use client";

import { ProjectCaseStudy, type CaseStudyData } from "@/components/ProjectCaseStudy";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const base = "/assets/seaducedexperience";

const data: CaseStudyData = {
  project: { en: "SEADUCED EXPERIENCE", es: "SEADUCED EXPERIENCE" },
  category: { en: "Website · Dashboard · Automation", es: "Sitio web · Dashboard · Automatización" },
  description: { en: "Digital infrastructure for a premium sailing experience.", es: "Infraestructura digital para una experiencia premium de navegación." },
  heroImage: { src: base + "/seaduced-experience-1.png", alt: { en: "Seaduced Experience website", es: "Sitio web de Seaduced Experience" }, fit: "cover", priority: true },
  projectInfo: {
    client: { en: "Seaduced Experience", es: "Seaduced Experience" },
    industry: { en: "Premium experiences · Sailing", es: "Experiencias premium · Navegación" },
    services: { en: "Website · Dashboard · Automation", es: "Sitio web · Dashboard · Automatización" },
    technologies: { en: "Next.js · React · Automation", es: "Next.js · React · Automatización" },
    year: "2026",
    website: "https://www.seaducedexperience.com",
  },
  projectDescription: {
    en: "We connected the customer journey with the operational side of the business: discovery, booking, management and automated follow-up become one digital system.",
    es: "Conectamos la experiencia del cliente con la operación del negocio: descubrimiento, reserva, gestión y seguimiento automatizado se convierten en un único sistema digital.",
  },
  challenge: {
    intro: { en: "A premium experience needed a digital system capable of connecting customer experience and operations.", es: "Una experiencia premium necesitaba un sistema digital capaz de conectar la experiencia del cliente con la operación." },
    points: [
      { title: { en: "Disconnected experience", es: "Experiencia desconectada" }, body: { en: "The journey from discovery to booking needed a clearer digital path.", es: "El recorrido desde el descubrimiento hasta la reserva necesitaba un camino digital más claro." } },
      { title: { en: "Manual operations", es: "Operaciones manuales" }, body: { en: "Bookings, activity and follow-up needed to live in one operational layer.", es: "Las reservas, la actividad y el seguimiento necesitaban convivir en una misma capa operativa." } },
      { title: { en: "Scaling limitations", es: "Limitaciones para escalar" }, body: { en: "The system needed to reduce repetitive work while keeping the experience premium.", es: "El sistema debía reducir el trabajo repetitivo manteniendo una experiencia premium." } },
    ],
  },
  solution: {
    intro: { en: "One connected system across the customer journey and the business.", es: "Un único sistema conectado entre la experiencia del cliente y el negocio." },
    areas: [
      { number: "01", title: { en: "Website", es: "Website" }, body: { en: "A clear, premium digital journey for discovering experiences and making a booking.", es: "Un recorrido digital claro y premium para descubrir experiencias y realizar una reserva." } },
      { number: "02", title: { en: "Dashboard", es: "Dashboard" }, body: { en: "A central operational workspace for bookings, calendar, activity and business visibility.", es: "Un espacio operativo central para reservas, calendario, actividad y visibilidad del negocio." } },
      { number: "03", title: { en: "Automation", es: "Automatización" }, body: { en: "Automated follow-up for completed experiences, unfinished bookings and booking issues.", es: "Seguimiento automatizado para experiencias finalizadas, reservas incompletas e incidencias durante la reserva." } },
    ],
  },
  visuals: [
    { src: base + "/seaduced-experience-2-1280.webp", alt: { en: "Seaduced Experience website detail", es: "Detalle del sitio web de Seaduced Experience" }, fit: "cover" },
    { src: base + "/dashboard-complete.png", alt: { en: "Seaduced Experience dashboard", es: "Dashboard de Seaduced Experience" }, fit: "contain" },
  ],
  results: {
    qualitative: [
      { title: { en: "One digital journey", es: "Un único recorrido digital" }, body: { en: "Customer-facing experience and internal operations are connected instead of working as separate layers.", es: "La experiencia del cliente y la operación interna quedan conectadas en lugar de funcionar como capas separadas." } },
      { title: { en: "Less repetitive work", es: "Menos trabajo repetitivo" }, body: { en: "Automated follow-up handles recurring moments without adding manual tasks to the team.", es: "El seguimiento automatizado resuelve momentos recurrentes sin sumar tareas manuales al equipo." } },
      { title: { en: "A system ready to evolve", es: "Un sistema preparado para evolucionar" }, body: { en: "The foundation can grow as the experience, operations and business needs evolve.", es: "La base puede crecer a medida que evolucionan la experiencia, la operación y las necesidades del negocio." } },
    ],
  },
  client: {
    en: "Seaduced Experience creates premium private sailing experiences. The project brings its digital touchpoints and operational workflow into one connected system.",
    es: "Seaduced Experience crea experiencias privadas premium de navegación. El proyecto reúne sus puntos de contacto digitales y su flujo operativo en un único sistema conectado.",
  },
  previous: { title: { en: "Work", es: "Trabajo" }, href: "/work" },
  next: { title: { en: "Bookea", es: "Bookea" }, href: "/work/bookea" },
};

export function SeaducedExperienceCase() {
  const { language } = useLanguage();
  return <ProjectCaseStudy key={language} data={data} />;
}
