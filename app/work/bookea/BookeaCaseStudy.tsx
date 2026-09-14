"use client";

import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const images = [
  "/assets/bookea/sistema-reservas-1-opt.webp",
  "/assets/bookea/sistema-reservas-2-opt.webp",
  "/assets/bookea/sistema-reservas-3-opt.webp",
  "/assets/bookea/sistema-reservas-4-opt.webp",
];

const copy = {
  en: {
    heroKicker: "PRODUCT · SAAS · DESIGN · DEVELOPMENT",
    heroTitle: "Bookea",
    heroLead: "A smarter reservation system for modern service businesses.",
    heroBody: "Bookea replaces fragmented bookings across WhatsApp, Instagram and manual calendars with one simple system.",
    problemKicker: "02 / THE PROBLEM",
    problemTitle: "Bookings shouldn't live across conversations, notebooks and spreadsheets.",
    problemBody: "Businesses were managing reservations across disconnected tools, creating unnecessary work for both owners and clients.",
    problemFlow: ["INSTAGRAM", "WHATSAPP", "MESSAGES", "MANUAL CALENDAR", "MISSED BOOKINGS"],
    ideaKicker: "03 / THE IDEA",
    ideaTitle: "One system. Every booking.",
    ideaBody: "Bookea brings the entire reservation journey into one connected system — from the moment a client discovers a service to the moment the booking is confirmed.",
    ideaNodes: ["CLIENT", "BOOKEA", "BUSINESS"],
    worksKicker: "04 / HOW IT WORKS",
    worksTitle: "From discovery to booking.",
    steps: [
      ["01", "Discover", "Client finds the business."],
      ["02", "Select", "Chooses service, date and time."],
      ["03", "Book", "Completes the reservation."],
      ["04", "Confirm", "Booking appears in the business dashboard."],
      ["05", "Manage", "Business manages appointments, clients and availability."],
    ],
    productKicker: "05 / THE PRODUCT",
    productTitle: "Built around the way businesses work.",
    productIntro: "The product is organized around the core systems a service business needs every day.",
    products: [
      ["01", "BOOKING", "A frictionless booking experience for clients."],
      ["02", "DASHBOARD", "Centralized appointment and calendar management."],
      ["03", "CLIENTS", "Customer information and booking history in one place."],
      ["04", "SERVICES", "A simple way to configure what the business offers."],
    ],
    experienceKicker: "06 / THE EXPERIENCE",
    experienceTitle: "Two sides of the same system.",
    clientTitle: "For clients",
    clientBody: "Booking should feel effortless.",
    clientFlow: "SERVICE → DATE → TIME → CONFIRMATION",
    businessTitle: "For businesses",
    businessBody: "Managing bookings should feel just as simple.",
    businessFlow: "DASHBOARD → CALENDAR → CLIENTS → OPERATIONS",
    systemKicker: "07 / THE SYSTEM",
    systemTitle: "A connected business system.",
    systemBody: "Bookea connects the customer experience with the operational side of the business. The booking, dashboard, clients and services are not separate features — they are views of one system.",
    designKicker: "08 / DESIGN SYSTEM",
    designTitle: "Designed as a system.",
    designBody: "The interface is built from a consistent visual language across booking flows, dashboards, forms, calendars, cards and responsive states.",
    designLabels: ["TYPE", "COLORS", "COMPONENTS", "LAYOUT"],
    techKicker: "09 / TECHNOLOGY",
    techTitle: "Built to scale.",
    techBody: "A scalable architecture designed to support multiple businesses, services and booking flows from a single platform.",
    techStack: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "NEON"],
    buildKicker: "10 / BUILDING",
    buildTitle: "Currently building.",
    buildBody: "Bookea is currently in development, evolving from a simple booking tool into a complete operating system for service-based businesses.",
    now: ["BOOKING", "DASHBOARD", "CLIENTS"],
    next: ["AUTOMATION", "ADVANCED ANALYTICS", "MORE INTEGRATIONS"],
    outcomeKicker: "11 / OUTCOME",
    outcomeTitle: "What we're building towards.",
    outcomes: ["LESS MANUAL WORK", "FEWER MISSED BOOKINGS", "BETTER CLIENT EXPERIENCE", "ONE SOURCE OF TRUTH"],
    finalTitle: "Bookea is more than a booking tool. It's the system behind the business.",
    cta: "EXPLORE BOOKEA →",
  },
  es: {
    heroKicker: "PRODUCTO · SAAS · DISEÑO · DESARROLLO",
    heroTitle: "Bookea",
    heroLead: "Un sistema de reservas más inteligente para negocios de servicios modernos.",
    heroBody: "Bookea reemplaza las reservas fragmentadas entre WhatsApp, Instagram y calendarios manuales por un único sistema simple.",
    problemKicker: "02 / EL PROBLEMA",
    problemTitle: "Las reservas no deberían vivir entre conversaciones, libretas y spreadsheets.",
    problemBody: "Los negocios gestionaban sus reservas con herramientas desconectadas, creando trabajo innecesario tanto para propietarios como para clientes.",
    problemFlow: ["INSTAGRAM", "WHATSAPP", "MENSAJES", "CALENDARIO MANUAL", "RESERVAS PERDIDAS"],
    ideaKicker: "03 / LA IDEA",
    ideaTitle: "Un sistema. Cada reserva.",
    ideaBody: "Bookea conecta todo el recorrido de una reserva — desde que el cliente descubre un servicio hasta que la reserva queda confirmada.",
    ideaNodes: ["CLIENTE", "BOOKEA", "NEGOCIO"],
    worksKicker: "04 / CÓMO FUNCIONA",
    worksTitle: "Del descubrimiento a la reserva.",
    steps: [
      ["01", "Descubrir", "El cliente encuentra el negocio."],
      ["02", "Seleccionar", "Elige servicio, fecha y horario."],
      ["03", "Reservar", "Completa la reserva."],
      ["04", "Confirmar", "La reserva aparece en el dashboard."],
      ["05", "Gestionar", "El negocio gestiona citas, clientes y disponibilidad."],
    ],
    productKicker: "05 / EL PRODUCTO",
    productTitle: "Construido alrededor de cómo trabajan los negocios.",
    productIntro: "El producto se organiza alrededor de los sistemas esenciales que un negocio de servicios necesita cada día.",
    products: [
      ["01", "BOOKING", "Una experiencia de reserva sencilla para clientes."],
      ["02", "DASHBOARD", "Gestión centralizada de citas y calendario."],
      ["03", "CLIENTES", "Información e historial de reservas en un solo lugar."],
      ["04", "SERVICIOS", "Una forma simple de configurar lo que ofrece el negocio."],
    ],
    experienceKicker: "06 / LA EXPERIENCIA",
    experienceTitle: "Dos lados del mismo sistema.",
    clientTitle: "Para clientes",
    clientBody: "Reservar debería sentirse effortless.",
    clientFlow: "SERVICIO → FECHA → HORA → CONFIRMACIÓN",
    businessTitle: "Para negocios",
    businessBody: "Gestionar reservas debería ser igual de simple.",
    businessFlow: "DASHBOARD → CALENDARIO → CLIENTES → OPERACIÓN",
    systemKicker: "07 / EL SISTEMA",
    systemTitle: "Un sistema conectado para el negocio.",
    systemBody: "Bookea conecta la experiencia del cliente con la operación del negocio. Booking, dashboard, clientes y servicios no son funcionalidades separadas: son vistas de un mismo sistema.",
    designKicker: "08 / SISTEMA DE DISEÑO",
    designTitle: "Diseñado como un sistema.",
    designBody: "La interfaz utiliza un lenguaje visual consistente en flujos de reserva, dashboards, formularios, calendarios, cards y estados responsive.",
    designLabels: ["TIPOGRAFÍA", "COLORES", "COMPONENTES", "LAYOUT"],
    techKicker: "09 / TECNOLOGÍA",
    techTitle: "Construido para escalar.",
    techBody: "Una arquitectura escalable preparada para soportar múltiples negocios, servicios y flujos de reserva desde una sola plataforma.",
    techStack: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "NEON"],
    buildKicker: "10 / CONSTRUYENDO",
    buildTitle: "Actualmente en construcción.",
    buildBody: "Bookea está actualmente en desarrollo, evolucionando desde una herramienta de reservas hacia un sistema operativo completo para negocios de servicios.",
    now: ["BOOKING", "DASHBOARD", "CLIENTES"],
    next: ["AUTOMATIZACIÓN", "ANALYTICS AVANZADO", "MÁS INTEGRACIONES"],
    outcomeKicker: "11 / OBJETIVO",
    outcomeTitle: "Lo que estamos construyendo.",
    outcomes: ["MENOS TRABAJO MANUAL", "MENOS RESERVAS PERDIDAS", "MEJOR EXPERIENCIA", "UNA ÚNICA FUENTE DE VERDAD"],
    finalTitle: "Bookea es más que una herramienta de reservas. Es el sistema detrás del negocio.",
    cta: "EXPLORAR BOOKEA →",
  },
} as const;

export function BookeaCaseStudy() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <main className="bookea-page">
      <style>{`
        .bookea-page{background:#f4f3ef;color:#111;overflow:hidden}.bk-wrap{width:min(1240px,calc(100% - 48px));margin:auto}.bk-kicker{font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}.bk-hero{min-height:calc(100vh - 72px);display:grid;grid-template-columns:.82fr 1.18fr;gap:56px;align-items:end;padding:82px 0 64px}.bk-hero-copy{padding-bottom:8px}.bk-hero h1{font-size:clamp(88px,13vw,176px);line-height:.78;letter-spacing:-.075em;font-weight:500;margin:24px 0 32px}.bk-hero-lead{font-size:clamp(28px,3.1vw,44px);line-height:1.04;letter-spacing:-.045em;max-width:610px}.bk-hero-body{font-size:15px;line-height:1.5;color:#666;max-width:470px;margin-top:24px}.bk-hero-media{background:#fff;border:1px solid #d7d5ce;overflow:hidden}.bk-hero-media img{display:block;width:100%;height:auto}.bk-meta{margin-top:24px;font-size:10px;letter-spacing:.13em;color:#777}.bk-section{padding:108px 0;border-top:1px solid #d5d3cc}.bk-grid{display:grid;grid-template-columns:.75fr 1.25fr;gap:64px}.bk-title{font-size:clamp(48px,6vw,82px);line-height:.91;letter-spacing:-.06em;font-weight:500;margin:16px 0 26px;max-width:900px}.bk-copy{font-size:18px;line-height:1.52;color:#555;max-width:720px}.bk-problem-flow{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #bcbab3;border-bottom:1px solid #bcbab3;margin-top:64px}.bk-flow-node{min-height:130px;padding:18px 16px;border-right:1px solid #bcbab3;display:flex;align-items:flex-end;font-size:11px;letter-spacing:.08em}.bk-flow-node:last-child{border-right:0}.bk-flow-node:not(:last-child)::after{content:'→';position:absolute;transform:translateX(calc(100% + 7px));font-size:15px}.bk-idea{background:#111;color:#f4f3ef}.bk-idea .bk-copy{color:#aaa}.bk-idea-flow{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;margin-top:56px;border-top:1px solid #464646;border-bottom:1px solid #464646}.bk-idea-node{min-height:170px;padding:22px;border-right:1px solid #464646;display:flex;align-items:center;justify-content:center;font-size:15px;letter-spacing:.1em;position:relative}.bk-idea-node:last-child{border-right:0}.bk-idea-node:not(:last-child)::after{content:'↓';position:absolute;right:-8px;top:50%;background:#111;padding:0 3px;font-size:15px}.bk-steps{margin-top:56px;border-top:1px solid #bcbab3}.bk-step{display:grid;grid-template-columns:70px 190px 1fr;gap:28px;padding:22px 0;border-bottom:1px solid #d0cec7;align-items:baseline}.bk-step-num{font-size:10px;color:#777;letter-spacing:.1em}.bk-step-title{font-size:20px;letter-spacing:-.02em}.bk-step-desc{font-size:14px;color:#666}.bk-product-intro{max-width:650px;margin:0 0 52px auto}.bk-products{display:grid;grid-template-columns:1fr 1fr;gap:18px}.bk-product{background:#fff;border:1px solid #d7d5ce}.bk-product-copy{padding:20px 20px 22px}.bk-product-number{font-size:10px;color:#888;letter-spacing:.1em}.bk-product h3{font-size:26px;letter-spacing:-.04em;font-weight:500;margin:13px 0 7px}.bk-product p{font-size:13px;line-height:1.45;color:#666;margin:0}.bk-product-image{border-bottom:1px solid #d7d5ce;overflow:hidden}.bk-product-image img{display:block;width:100%;height:auto}.bk-experience{background:#e7e5df}.bk-experience-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#c8c6bf;margin-top:56px;border:1px solid #c8c6bf}.bk-experience-card{background:#e7e5df;padding:36px}.bk-experience-card h3{font-size:34px;letter-spacing:-.045em;font-weight:500;margin:14px 0 8px}.bk-experience-card p{font-size:16px;color:#666;margin:0 0 34px}.bk-experience-flow{font-size:11px;letter-spacing:.1em;border-top:1px solid #aaa79f;padding-top:16px}.bk-system{background:#111;color:#f4f3ef}.bk-system .bk-copy{color:#aaa}.bk-system-map{margin-top:58px;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #464646;border-bottom:1px solid #464646}.bk-system-node{min-height:135px;padding:20px;border-right:1px solid #464646;display:flex;align-items:center;justify-content:center;text-align:center;font-size:12px;letter-spacing:.08em;position:relative}.bk-system-node:last-child{border-right:0}.bk-system-node:not(:last-child)::after{content:'→';position:absolute;right:-7px;background:#111;padding:0 2px}.bk-design{display:grid;grid-template-columns:.75fr 1.25fr;gap:64px}.bk-design-board{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#c8c6bf;border:1px solid #c8c6bf}.bk-design-card{background:#f4f3ef;min-height:145px;padding:20px}.bk-design-card span{font-size:9px;letter-spacing:.12em;color:#777}.bk-design-card strong{display:block;font-size:32px;letter-spacing:-.06em;font-weight:500;margin-top:32px}.bk-design-card:nth-child(2) strong{font-size:13px;letter-spacing:.05em}.bk-design-card:nth-child(3) strong{font-size:14px;margin-top:42px}.bk-design-card:nth-child(4) strong{font-size:18px;margin-top:42px}.bk-tech{background:#171717;color:#f4f3ef}.bk-tech .bk-copy{color:#aaa}.bk-stack{display:flex;flex-wrap:wrap;gap:8px;margin-top:40px}.bk-stack span{border:1px solid #555;padding:10px 13px;font-size:10px;letter-spacing:.1em}.bk-build{display:grid;grid-template-columns:.75fr 1.25fr;gap:64px}.bk-build-title{font-size:clamp(60px,8vw,110px);line-height:.82;letter-spacing:-.07em;font-weight:500;margin-top:20px}.bk-build-columns{display:grid;grid-template-columns:1fr 1fr;gap:28px}.bk-build-column{border-top:1px solid #aaa79f;padding-top:16px}.bk-build-column h3{font-size:10px;letter-spacing:.13em;margin:0 0 20px}.bk-build-column div{font-size:13px;padding:10px 0;border-bottom:1px solid #d0cec7}.bk-outcomes{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #bbb9b2;margin-top:54px}.bk-outcome{padding:26px 0;border-bottom:1px solid #bbb9b2;font-size:14px;letter-spacing:.05em}.bk-outcome:nth-child(odd){padding-right:30px;border-right:1px solid #bbb9b2}.bk-outcome:nth-child(even){padding-left:30px}.bk-final{padding:150px 0 120px;text-align:center}.bk-final h2{font-size:clamp(54px,8vw,112px);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:1050px;margin:0 auto 38px}.bk-cta{display:inline-block;color:inherit;text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:8px;font-size:11px;letter-spacing:.12em;font-weight:600}
        @media(max-width:900px){.bk-wrap{width:min(100% - 32px,680px)}.bk-hero{min-height:auto;grid-template-columns:1fr;gap:40px;padding:92px 0 70px}.bk-hero h1{font-size:clamp(82px,19vw,140px)}.bk-section{padding:82px 0}.bk-grid,.bk-design,.bk-build{grid-template-columns:1fr;gap:34px}.bk-title{font-size:clamp(46px,10vw,72px)}.bk-problem-flow{grid-template-columns:1fr 1fr}.bk-flow-node:nth-child(2){border-right:0}.bk-flow-node:nth-child(4),.bk-flow-node:nth-child(5){border-top:1px solid #bcbab3}.bk-flow-node:not(:last-child)::after{display:none}.bk-step{grid-template-columns:55px 150px 1fr;gap:18px}.bk-products{grid-template-columns:1fr}.bk-experience-grid{grid-template-columns:1fr}.bk-system-map{grid-template-columns:1fr 1fr}.bk-system-node:nth-child(2){border-right:0}.bk-system-node:nth-child(3),.bk-system-node:nth-child(4){border-top:1px solid #464646}.bk-system-node:nth-child(3){border-right:1px solid #464646}.bk-system-node:not(:last-child)::after{display:none}.bk-build-columns{grid-template-columns:1fr}.bk-outcomes{grid-template-columns:1fr}.bk-outcome:nth-child(odd){border-right:0;padding-right:0}.bk-outcome:nth-child(even){padding-left:0}.bk-final{padding:110px 0 90px}}
        @media(max-width:560px){.bk-wrap{width:calc(100% - 28px)}.bk-hero{padding-top:82px}.bk-hero-lead{font-size:27px}.bk-section{padding:70px 0}.bk-title{font-size:clamp(43px,11vw,62px)}.bk-copy{font-size:16px}.bk-problem-flow,.bk-idea-flow,.bk-system-map{grid-template-columns:1fr}.bk-flow-node,.bk-idea-node,.bk-system-node{min-height:78px;border-right:0!important;border-top:1px solid #bcbab3}.bk-flow-node:first-child,.bk-idea-node:first-child,.bk-system-node:first-child{border-top:0}.bk-idea-node:not(:last-child)::after{content:'↓';right:auto;top:auto;bottom:-8px}.bk-step{grid-template-columns:40px 1fr;gap:10px}.bk-step-desc{grid-column:2}.bk-step-title{font-size:18px}.bk-product h3{font-size:23px}.bk-experience-card{padding:26px}.bk-experience-card h3{font-size:29px}.bk-design-board{grid-template-columns:1fr}.bk-design-card{min-height:120px}.bk-final h2{font-size:49px}}
      `}</style>

      <div className="bk-wrap">
        <section className="bk-hero">
          <div className="bk-hero-copy">
            <div className="bk-kicker">{t.heroKicker}</div>
            <h1>{t.heroTitle}</h1>
            <div className="bk-hero-lead">{t.heroLead}</div>
            <p className="bk-hero-body">{t.heroBody}</p>
            <div className="bk-meta">PRODUCT / IN DEVELOPMENT</div>
          </div>
          <div className="bk-hero-media"><Image src={images[0]} alt="Bookea booking interface" width={1600} height={1000} priority /></div>
        </section>

        <section className="bk-section">
          <div className="bk-grid"><div><div className="bk-kicker">{t.problemKicker}</div></div><div><h2 className="bk-title">{t.problemTitle}</h2><p className="bk-copy">{t.problemBody}</p></div></div>
          <div className="bk-problem-flow">{t.problemFlow.map((item)=><div className="bk-flow-node" key={item}>{item}</div>)}</div>
        </section>

        <section className="bk-section bk-idea">
          <div className="bk-grid"><div><div className="bk-kicker">{t.ideaKicker}</div></div><div><h2 className="bk-title">{t.ideaTitle}</h2><p className="bk-copy">{t.ideaBody}</p></div></div>
          <div className="bk-idea-flow">{t.ideaNodes.map((item)=><div className="bk-idea-node" key={item}>{item}</div>)}</div>
        </section>

        <section className="bk-section">
          <div className="bk-grid"><div><div className="bk-kicker">{t.worksKicker}</div></div><div><h2 className="bk-title">{t.worksTitle}</h2></div></div>
          <div className="bk-steps">{t.steps.map(([num,title,desc])=><div className="bk-step" key={num}><div className="bk-step-num">{num}</div><div className="bk-step-title">{title}</div><div className="bk-step-desc">{desc}</div></div>)}</div>
        </section>

        <section className="bk-section">
          <div className="bk-grid"><div><div className="bk-kicker">{t.productKicker}</div></div><div><h2 className="bk-title">{t.productTitle}</h2><p className="bk-copy bk-product-intro">{t.productIntro}</p></div></div>
          <div className="bk-products">{t.products.map(([num,title,desc],i)=><article className="bk-product" key={num}><div className="bk-product-image"><Image src={images[i]} alt={title} width={1600} height={1000} loading="lazy" /></div><div className="bk-product-copy"><div className="bk-product-number">{num}</div><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
        </section>

        <section className="bk-section bk-experience">
          <div className="bk-grid"><div><div className="bk-kicker">{t.experienceKicker}</div></div><div><h2 className="bk-title">{t.experienceTitle}</h2></div></div>
          <div className="bk-experience-grid"><div className="bk-experience-card"><div className="bk-kicker">CLIENT SIDE</div><h3>{t.clientTitle}</h3><p>{t.clientBody}</p><div className="bk-experience-flow">{t.clientFlow}</div></div><div className="bk-experience-card"><div className="bk-kicker">BUSINESS SIDE</div><h3>{t.businessTitle}</h3><p>{t.businessBody}</p><div className="bk-experience-flow">{t.businessFlow}</div></div></div>
        </section>

        <section className="bk-section bk-system">
          <div className="bk-grid"><div><div className="bk-kicker">{t.systemKicker}</div></div><div><h2 className="bk-title">{t.systemTitle}</h2><p className="bk-copy">{t.systemBody}</p></div></div>
          <div className="bk-system-map">{["BOOKING","DASHBOARD","CLIENTS","SERVICES"].map(item=><div className="bk-system-node" key={item}>{item}</div>)}</div>
        </section>

        <section className="bk-section">
          <div className="bk-design"><div><div className="bk-kicker">{t.designKicker}</div><h2 className="bk-title">{t.designTitle}</h2><p className="bk-copy">{t.designBody}</p></div><div className="bk-design-board">{t.designLabels.map((label,i)=><div className="bk-design-card" key={label}><span>{label}</span><strong>{i===0?"Aa":i===1?"●  ●  ●  ●":i===2?"[ BUTTON ]":"DESKTOP → MOBILE"}</strong></div>)}</div></div>
        </section>

        <section className="bk-section bk-tech">
          <div className="bk-grid"><div><div className="bk-kicker">{t.techKicker}</div></div><div><h2 className="bk-title">{t.techTitle}</h2><p className="bk-copy">{t.techBody}</p><div className="bk-stack">{t.techStack.map(item=><span key={item}>{item}</span>)}</div></div></div>
        </section>

        <section className="bk-section">
          <div className="bk-build"><div><div className="bk-kicker">{t.buildKicker}</div><div className="bk-build-title">{t.buildTitle}</div></div><div><p className="bk-copy">{t.buildBody}</p><div className="bk-build-columns"><div className="bk-build-column"><h3>NOW</h3>{t.now.map(item=><div key={item}>{item}</div>)}</div><div className="bk-build-column"><h3>NEXT</h3>{t.next.map(item=><div key={item}>{item}</div>)}</div></div></div></div>
        </section>

        <section className="bk-section">
          <div className="bk-grid"><div><div className="bk-kicker">{t.outcomeKicker}</div></div><div><h2 className="bk-title">{t.outcomeTitle}</h2></div></div>
          <div className="bk-outcomes">{t.outcomes.map(item=><div className="bk-outcome" key={item}>{item}</div>)}</div>
        </section>

        <section className="bk-final"><h2>{t.finalTitle}</h2><a className="bk-cta" href="/#contact">{t.cta}</a></section>
      </div>
    </main>
  );
}
