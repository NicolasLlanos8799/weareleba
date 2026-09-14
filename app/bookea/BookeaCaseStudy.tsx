"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

const copy = {
  en: {
    heroEyebrow: "PRODUCT — IN DEVELOPMENT",
    heroTitle: "Bookea",
    heroSubtitle: "A booking and management system for service businesses, built by Leba.",
    heroSupport: "From scattered conversations to one organized system.",
    introTitle: "Bookea is a product we're building, not just a project we delivered.",
    intro: "Most of the work in this portfolio is client work: a business came to us with a problem, and we built the system to solve it. Bookea is different. It's a product of our own — a booking and management platform for service businesses, currently in development.",
    intro2: "We're including it here because it represents the same way of thinking we bring to every client project: start from the operational problem, not the feature list. Bookea is that thinking applied to a product we own end to end.",
    problemTitle: "Bookings without a system",
    problem: "Many service businesses — nail salons, hairdressers, beauty professionals, wellness studios, and other appointment-based businesses — still run their bookings through WhatsApp, Instagram DMs, phone calls, and paper or spreadsheet agendas.",
    problem2: "It works, until it doesn't. Requests arrive from different channels at once. Time gets lost replying to the same questions. The calendar lives in someone's head, or across three different apps. Double-bookings happen. Client history and service details aren't recorded anywhere central.",
    problem3: "None of this is a failure on the business's part. It's what happens when a growing operation outgrows tools that were never meant to run it.",
    whatTitle: "One system for booking and running the business",
    what: "Bookea is a booking and management SaaS for service businesses. It's designed to centralize the reservation process and give businesses a single place to manage their day-to-day operations — instead of spreading it across chats, calls, and manual notes.",
    what2: "It connects the customer-facing side of booking with the internal side of running the business: the calendar, client list, services, and business settings.",
    howTitle: "One flow, from the client's first click to the business's calendar",
    how: "The flow is intentionally simple on the surface, even though there's a system running underneath it. A customer opens the business's booking page, selects the service they want, and chooses an available time. The reservation is created and reflected on the business's side — no manual entry, no double-checking a separate calendar.",
    how2: "That's the visible part. Availability, booking rules, business data, and the relationship between each reservation and its underlying records are what make the system work reliably.",
    systemTitle: "More than a calendar",
    system: "It's easy to describe a booking tool as just a calendar with a form in front of it. Bookea is built as something else: a system where booking, clients, services, the calendar, and business management are connected parts of the same structure.",
    system2: "A booking isn't just a slot on a calendar — it's tied to a client record, a specific service, and the business's own configuration. When one part changes, the rest of the system is designed to reflect it instead of requiring the business to update several places by hand.",
    systemQuote: "That's the difference between a tool that displays information and a system that manages it.",
    experienceTitle: "What the system looks like today",
    experienceIntro: "The screens below reflect where Bookea stands right now. Some parts are further along than others — where something is still being built, it's marked as such.",
    screens: [
      ["01", "Booking experience", "The customer-facing side — how a client finds a business, chooses a service, and books a time."],
      ["02", "Calendar / appointment management", "How the business sees and manages its schedule once bookings start coming in."],
      ["03", "Client management", "A centralized view of clients and their booking history."],
      ["04", "Service management", "Where a business defines what it offers — services, duration, and availability."],
    ],
    whyTitle: "The gap we kept seeing",
    why: "Bookea started from something we noticed repeatedly in client work: small service businesses need digital tools, but the tools available to them are often either too generic or too complex — built for enterprises, not for a two-person nail salon or an independent hairdresser managing bookings between clients.",
    why2: "Meanwhile, the actual day-to-day still runs on conversation. A message here, a call there, an agenda kept by hand. It works, but it doesn't scale, and it costs time that should be going into the service itself.",
    buildingTitle: "A product we're actively building",
    building: "Bookea isn't a finished product being marketed — it's a system in progress, and that process is part of what we wanted to show here.",
    building2: "Building it has meant working through it the way we'd work through any serious system: starting from the problem, defining what booking needs to mean for a service business, mapping how the core parts connect, then designing and iterating on both the customer experience and the business dashboard.",
    customTitle: "From custom builds to a product",
    customSubtitle: "Bookea started as implementations, before it became a SaaS",
    custom: "Before building Bookea as a self-serve platform, we implemented the same system directly for a small number of clients — customized, single-business versions built and deployed by Leba rather than set up by the business itself.",
    custom2: "That work informed Bookea SaaS: the self-service version now in development, designed so a service business can set it up on its own, without a custom build from us.",
    custom3: "The system is the same. What's changing is how a business gets access to it — from something we build for one client at a time, to something a business can set up for itself.",
    statusTitle: "In development",
    status: "Bookea is currently under development. The screens and flows shown on this page represent the product as it exists today, and they'll keep changing as the system evolves.",
    status2: "This page will be updated as Bookea moves forward.",
    closeTitle: "This is how we think about products.",
    close: "Bookea is a small proof of what Leba does for clients at a larger scale: understand the real operational problem first, then build the system that solves it — not the other way around.",
    cta: "GET IN TOUCH →",
  },
  es: {
    heroEyebrow: "PRODUCTO — EN DESARROLLO",
    heroTitle: "Bookea",
    heroSubtitle: "Un sistema de reservas y gestión para negocios de servicios, creado por Leba.",
    heroSupport: "De conversaciones dispersas a un sistema organizado.",
    introTitle: "Bookea es un producto que estamos construyendo, no solo un proyecto que entregamos.",
    intro: "La mayor parte del trabajo de este portfolio son proyectos para clientes: un negocio llega con un problema y construimos el sistema para resolverlo. Bookea es diferente. Es un producto propio — una plataforma de reservas y gestión para negocios de servicios, actualmente en desarrollo.",
    intro2: "Lo mostramos aquí porque representa la misma forma de pensar que llevamos a cada proyecto: empezar por el problema operativo, no por la lista de funcionalidades. Bookea aplica esa forma de pensar a un producto que desarrollamos de principio a fin.",
    problemTitle: "Reservas sin un sistema",
    problem: "Muchos negocios de servicios — salones de uñas, peluquerías, profesionales de belleza, estudios de wellness y otros negocios basados en citas — todavía gestionan sus reservas mediante WhatsApp, Instagram, llamadas y agendas de papel o spreadsheets.",
    problem2: "Funciona, hasta que deja de funcionar. Las solicitudes llegan por distintos canales. Se pierde tiempo respondiendo las mismas preguntas. El calendario vive en la cabeza de alguien o repartido entre varias herramientas. Aparecen reservas duplicadas. El historial del cliente y los detalles del servicio no están centralizados.",
    problem3: "No es un fallo del negocio. Es lo que ocurre cuando una operación crece más allá de herramientas que nunca fueron pensadas para gestionarla.",
    whatTitle: "Un sistema para reservar y gestionar el negocio",
    what: "Bookea es un SaaS de reservas y gestión para negocios de servicios. Está diseñado para centralizar el proceso de reserva y dar al negocio un único lugar desde el que gestionar su operación diaria.",
    what2: "Conecta el lado visible de la reserva con el lado interno del negocio: calendario, clientes, servicios y configuración.",
    howTitle: "Un flujo, desde el primer clic del cliente hasta el calendario del negocio",
    how: "El flujo es simple en superficie, aunque debajo existe un sistema completo. El cliente abre la página de reservas, selecciona el servicio y elige un horario disponible. La reserva se crea y aparece en el lado del negocio.",
    how2: "Esa es la parte visible. La disponibilidad, las reglas de reserva, los datos de cada negocio y la relación entre una reserva y sus registros son lo que hace funcionar el sistema.",
    systemTitle: "Más que un calendario",
    system: "Es fácil describir una herramienta de reservas como un calendario con un formulario delante. Bookea está construido como algo diferente: un sistema donde reservas, clientes, servicios, calendario y gestión del negocio son partes conectadas de una misma estructura.",
    system2: "Una reserva no es solo un hueco en el calendario: está vinculada a un cliente, a un servicio concreto y a la configuración del negocio. Cuando una parte cambia, el resto del sistema está diseñado para reflejarlo sin tener que actualizar varios lugares manualmente.",
    systemQuote: "La diferencia entre una herramienta que muestra información y un sistema que la gestiona.",
    experienceTitle: "Así se ve el sistema hoy",
    experienceIntro: "Las pantallas muestran dónde está Bookea actualmente. Algunas partes están más avanzadas que otras; cuando algo sigue en construcción, lo indicamos como tal.",
    screens: [
      ["01", "Experiencia de reserva", "La parte que ve el cliente: encontrar un negocio, elegir un servicio y reservar un horario."],
      ["02", "Calendario / gestión de citas", "Cómo el negocio ve y gestiona su agenda cuando empiezan a llegar reservas."],
      ["03", "Gestión de clientes", "Una vista centralizada de clientes y su historial de reservas."],
      ["04", "Gestión de servicios", "Donde el negocio define lo que ofrece, su duración y disponibilidad."],
    ],
    whyTitle: "La brecha que seguíamos viendo",
    why: "Bookea nació de algo que vimos repetidamente trabajando con clientes: los pequeños negocios de servicios necesitan herramientas digitales, pero muchas son demasiado genéricas o demasiado complejas — pensadas para empresas grandes, no para un salón de uñas de dos personas o un peluquero independiente.",
    why2: "Mientras tanto, el día a día sigue funcionando a través de conversaciones. Un mensaje aquí, una llamada allá, una agenda escrita a mano. Funciona, pero no escala y consume tiempo que debería estar dedicado al servicio.",
    buildingTitle: "Un producto que estamos construyendo activamente",
    building: "Bookea no es un producto terminado que estamos comercializando — es un sistema en progreso, y ese proceso forma parte de lo que queremos mostrar aquí.",
    building2: "Lo hemos construido como cualquier sistema serio: empezando por el problema, definiendo qué significa realmente reservar para un negocio de servicios, mapeando cómo se conectan sus partes y diseñando e iterando tanto la experiencia del cliente como el dashboard del negocio.",
    customTitle: "De implementaciones a producto",
    customSubtitle: "Bookea empezó como implementaciones antes de convertirse en SaaS",
    custom: "Antes de construir Bookea como plataforma self-service, implementamos el mismo sistema directamente para un pequeño número de clientes — versiones personalizadas para un solo negocio, construidas y desplegadas por Leba.",
    custom2: "Ese trabajo dio forma a Bookea SaaS: la versión self-service actualmente en desarrollo, pensada para que un negocio de servicios pueda configurarla por sí mismo, sin un desarrollo personalizado de nuestra parte.",
    custom3: "El sistema es el mismo. Lo que cambia es cómo un negocio accede a él: de algo que construimos para un cliente cada vez, a algo que un negocio puede configurar por sí mismo.",
    statusTitle: "En desarrollo",
    status: "Bookea está actualmente en desarrollo. Las pantallas y flujos mostrados representan el producto tal como existe hoy y seguirán cambiando a medida que evolucione el sistema.",
    status2: "Esta página se actualizará a medida que Bookea avance.",
    closeTitle: "Así pensamos los productos.",
    close: "Bookea es una pequeña muestra de lo que Leba hace para clientes a mayor escala: entender primero el problema operativo real y después construir el sistema que lo resuelve.",
    cta: "HABLEMOS →",
  },
};

function Diagram({ type }: { type: "scatter" | "flow" | "system" }) {
  if (type === "flow") return <div className="bk-flow-diagram">{["CUSTOMER", "BOOKING PAGE", "APPOINTMENT", "DASHBOARD"].map((item, i) => <div className="bk-flow-node" key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b>{i < 3 && <i>→</i>}</div>)}</div>;
  if (type === "system") return <div className="bk-system-diagram">{["BOOKING", "CLIENTS", "SERVICES", "CALENDAR", "BUSINESS MANAGEMENT"].map((item, i) => <div className="bk-system-node" key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div>;
  return <div className="bk-scatter"><div className="bk-orbit bk-o1">WHATSAPP</div><div className="bk-orbit bk-o2">INSTAGRAM</div><div className="bk-orbit bk-o3">PHONE</div><div className="bk-orbit bk-o4">AGENDA</div><div className="bk-scatter-core">BOOKEA<br /><small>ONE SYSTEM</small></div></div>;
}

function MockScreen({ index }: { index: number }) {
  return <div className={`bk-mock bk-mock-${index}`}><div className="bk-browser"><span /><span /><span /></div><div className="bk-ui"><aside><strong>BOOKEA</strong><em /><em /><em /><em /></aside><main><div className="bk-ui-top"><b>{["New booking", "Calendar", "Clients", "Services"][index - 1]}</b><span>•••</span></div><div className="bk-ui-lines"><i /><i /><i /><i /><i /><i /></div><div className="bk-ui-card"><span /><b /><small /><small /></div><div className="bk-ui-card second"><span /><b /><small /><small /></div></main></div></div>;
}

export function BookeaCaseStudy() {
  const { language } = useLanguage();
  const c = copy[language];
  return <main className="bk-page">
    <style>{`
      .bk-page{background:#f1f0ed;color:#292a2d;overflow:hidden}
      .bk-section{padding:clamp(92px,11vw,170px) clamp(28px,5.9vw,102px);border-top:1px solid rgba(41,42,45,.13)}
      .bk-inner{width:100%;max-width:1560px;margin:auto}.bk-kicker{display:flex;align-items:center;gap:15px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#686a6d}.bk-kicker:before{content:"";width:42px;height:1px;background:#74767a}
      .bk-hero{min-height:100svh;background:#0b0c0d;color:#f3f1ec;padding:clamp(150px,20vh,220px) clamp(28px,5.9vw,102px) 70px;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(340px,.9fr);align-items:end;gap:7vw;position:relative}
      .bk-hero:after{content:"";position:absolute;width:52vw;height:52vw;max-width:800px;max-height:800px;right:-12vw;top:20%;border:1px solid rgba(255,255,255,.12);border-radius:50%;box-shadow:0 0 0 90px rgba(255,255,255,.025),0 0 0 180px rgba(255,255,255,.015);pointer-events:none}
      .bk-hero-copy{position:relative;z-index:1}.bk-hero .bk-kicker{color:rgba(255,255,255,.48)}.bk-hero .bk-kicker:before{background:rgba(255,255,255,.4)}.bk-title{font-size:clamp(82px,12vw,190px);font-weight:400;letter-spacing:-.08em;line-height:.82;margin:34px 0 34px}.bk-subtitle{font-size:clamp(22px,2.15vw,34px);line-height:1.15;letter-spacing:-.04em;max-width:690px;color:rgba(255,255,255,.78);margin:0}.bk-support{margin:38px 0 0;font-size:14px;letter-spacing:.02em;color:rgba(255,255,255,.46)}
      .bk-hero-ui{position:relative;z-index:1;align-self:center;justify-self:end;width:min(100%,590px);transform:rotate(-3deg)}
      .bk-hero-ui .bk-mock{box-shadow:0 35px 80px rgba(0,0,0,.5)}
      .bk-two{display:grid;grid-template-columns:minmax(250px,.72fr) minmax(0,1.28fr);gap:10vw}.bk-two-copy{max-width:680px}.bk-two h2,.bk-section-title{font-size:clamp(45px,5.1vw,82px);line-height:.94;letter-spacing:-.065em;font-weight:400;margin:28px 0 38px}.bk-copy{font-size:clamp(17px,1.35vw,21px);line-height:1.48;letter-spacing:-.022em;color:#55585d;max-width:700px}.bk-copy+p{margin-top:22px}
      .bk-problem{background:#e7e5e0}.bk-problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:9vw;align-items:center}.bk-problem-copy{max-width:690px}.bk-scatter{height:540px;position:relative;display:grid;place-items:center}.bk-scatter:before{content:"";position:absolute;width:390px;height:390px;border:1px solid rgba(41,42,45,.18);border-radius:50%}.bk-scatter-core{width:150px;height:150px;border-radius:50%;background:#292a2d;color:#f1f0ed;display:grid;place-items:center;text-align:center;font-size:17px;letter-spacing:.04em;line-height:1.05;position:relative;z-index:2;box-shadow:0 0 0 18px rgba(41,42,45,.04)}.bk-scatter-core small{font-size:7px;letter-spacing:.2em;color:#aaa}.bk-orbit{position:absolute;border:1px solid rgba(41,42,45,.28);padding:12px 15px;font-size:8px;letter-spacing:.16em;background:#e7e5e0}.bk-o1{top:13%;left:8%}.bk-o2{top:19%;right:7%}.bk-o3{bottom:17%;left:13%}.bk-o4{bottom:12%;right:14%}
      .bk-what{background:#f1f0ed}.bk-what-quote{margin-top:80px;font-size:clamp(28px,3.3vw,52px);line-height:1;letter-spacing:-.05em;max-width:930px;color:#777a7e}
      .bk-flow{background:#292a2d;color:#f1f0ed}.bk-flow .bk-kicker{color:rgba(255,255,255,.45)}.bk-flow .bk-kicker:before{background:rgba(255,255,255,.35)}.bk-flow .bk-section-title{max-width:900px}.bk-flow .bk-copy{color:rgba(255,255,255,.6)}.bk-flow-diagram{margin:90px 0 70px;display:grid;grid-template-columns:repeat(4,1fr);align-items:center}.bk-flow-node{position:relative;min-height:120px;border-top:1px solid rgba(255,255,255,.3);padding-top:18px}.bk-flow-node+ .bk-flow-node{margin-left:20px}.bk-flow-node span,.bk-system-node span{display:block;font-size:9px;letter-spacing:.2em;color:rgba(255,255,255,.4);margin-bottom:18px}.bk-flow-node b{font-size:clamp(12px,1.1vw,16px);font-weight:500;letter-spacing:.08em}.bk-flow-node i{position:absolute;right:18px;top:52px;font-size:25px;font-style:normal;color:rgba(255,255,255,.5)}
      .bk-system{background:#111314;color:#f1f0ed}.bk-system .bk-kicker{color:rgba(255,255,255,.45)}.bk-system .bk-kicker:before{background:rgba(255,255,255,.35)}.bk-system .bk-copy{color:rgba(255,255,255,.58)}.bk-system-grid{display:grid;grid-template-columns:1fr 1fr;gap:10vw;align-items:center}.bk-system-diagram{position:relative;display:grid;gap:1px}.bk-system-node{min-height:92px;border:1px solid rgba(255,255,255,.16);padding:15px 18px;display:flex;align-items:center;gap:22px;background:rgba(255,255,255,.025)}.bk-system-node span{margin:0;width:28px}.bk-system-node b{font-size:11px;letter-spacing:.13em;font-weight:500}.bk-system-node:not(:last-child):after{content:"↓";position:absolute;left:40px;margin-top:110px;color:rgba(255,255,255,.3)}
      .bk-experience{background:#f1f0ed}.bk-experience-intro{max-width:690px;margin:0 0 85px auto}.bk-screens{display:grid;grid-template-columns:1fr 1fr;gap:90px 34px}.bk-screen-item:nth-child(2){margin-top:100px}.bk-screen-item:nth-child(4){margin-top:100px}.bk-caption{display:grid;grid-template-columns:48px 1fr;gap:18px;margin-top:24px}.bk-caption-num{font-size:10px;letter-spacing:.15em;color:#8a8c8f}.bk-caption h3{font-size:24px;font-weight:400;letter-spacing:-.035em;margin:0 0 9px}.bk-caption p{font-size:14px;line-height:1.45;color:#696c70;max-width:460px;margin:0}.bk-dev-note{display:inline-block;margin-top:12px;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#8b5d5d}
      .bk-mock{aspect-ratio:16/10;background:#dad8d2;border:1px solid rgba(41,42,45,.16);overflow:hidden}.bk-browser{height:25px;background:#222426;display:flex;align-items:center;gap:5px;padding-left:12px}.bk-browser span{width:5px;height:5px;border-radius:50%;background:#777}.bk-ui{height:calc(100% - 25px);display:grid;grid-template-columns:22% 1fr;background:#f5f4f1;color:#333}.bk-ui aside{background:#e8e6e0;padding:18px 12px;display:grid;align-content:start;gap:15px}.bk-ui aside strong{font-size:10px;letter-spacing:.1em;margin-bottom:16px}.bk-ui aside em{height:5px;width:70%;background:#b8b6b1;border-radius:10px}.bk-ui main{padding:25px 28px}.bk-ui-top{display:flex;justify-content:space-between;font-size:13px;margin-bottom:25px}.bk-ui-lines{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.bk-ui-lines i{height:7px;background:#d4d2cc;border-radius:2px}.bk-ui-card{margin-top:25px;border:1px solid #dedcd6;background:#fbfaf8;height:78px;padding:12px;display:grid;grid-template-columns:18px 1fr;gap:4px}.bk-ui-card span{grid-row:1/4;width:18px;height:18px;border-radius:50%;background:#a9a69e}.bk-ui-card b{width:55%;height:6px;background:#88857f}.bk-ui-card small{width:80%;height:4px;background:#d2d0ca}.bk-ui-card.second{margin-top:10px}
      .bk-why{background:#e6e4df}.bk-why .bk-two-copy{max-width:820px}.bk-building{background:#f1f0ed}.bk-process{display:flex;flex-wrap:wrap;border-top:1px solid rgba(41,42,45,.18);margin-top:70px}.bk-process span{flex:1;min-width:170px;padding:22px 16px 22px 0;font-size:9px;letter-spacing:.18em;text-transform:uppercase;border-bottom:1px solid rgba(41,42,45,.18)}
      .bk-custom{background:#292a2d;color:#f1f0ed}.bk-custom .bk-kicker{color:rgba(255,255,255,.45)}.bk-custom .bk-kicker:before{background:rgba(255,255,255,.35)}.bk-custom .bk-copy{color:rgba(255,255,255,.6)}.bk-compare{display:grid;grid-template-columns:1fr 1fr;margin-top:80px;border:1px solid rgba(255,255,255,.18)}.bk-compare>div{padding:34px;border-right:1px solid rgba(255,255,255,.18)}.bk-compare>div:last-child{border-right:0}.bk-compare small{font-size:9px;letter-spacing:.18em;color:rgba(255,255,255,.4)}.bk-compare strong{display:block;margin-top:20px;font-size:clamp(24px,2.4vw,38px);font-weight:400;letter-spacing:-.045em}.bk-status{background:#e7e5e0}.bk-status-inner{display:grid;grid-template-columns:1fr 1fr;gap:10vw;align-items:end}.bk-status-mark{font-size:clamp(100px,15vw,230px);line-height:.72;letter-spacing:-.09em;font-weight:400}.bk-close{background:#111314;color:#f1f0ed;min-height:70vh;display:grid;align-items:center}.bk-close .bk-kicker{color:rgba(255,255,255,.45)}.bk-close .bk-kicker:before{background:rgba(255,255,255,.35)}.bk-close h2{font-size:clamp(54px,7vw,110px);line-height:.9;letter-spacing:-.07em;font-weight:400;max-width:900px;margin:28px 0 42px}.bk-close .bk-copy{color:rgba(255,255,255,.58);max-width:700px}.bk-cta{display:inline-flex;align-items:center;justify-content:space-between;min-width:210px;height:60px;padding:0 22px;margin-top:38px;border:1px solid rgba(255,255,255,.55);border-radius:999px;font-size:10px;letter-spacing:.16em}.bk-cta:hover{background:#f1f0ed;color:#292a2d}
      @media(max-width:850px){.bk-hero{grid-template-columns:1fr;min-height:auto;padding-top:155px}.bk-hero-ui{width:92%;margin:55px 0 10px}.bk-two,.bk-problem-grid,.bk-system-grid,.bk-status-inner{grid-template-columns:1fr;gap:55px}.bk-scatter{height:400px}.bk-flow-diagram{grid-template-columns:1fr;gap:0;margin:60px 0}.bk-flow-node{min-height:88px}.bk-flow-node+.bk-flow-node{margin-left:0;border-top:0;padding-left:0}.bk-flow-node i{right:18px;top:20px;transform:rotate(90deg)}.bk-screens{grid-template-columns:1fr;gap:65px}.bk-screen-item:nth-child(2),.bk-screen-item:nth-child(4){margin-top:0}.bk-experience-intro{margin-left:0}.bk-compare{grid-template-columns:1fr}.bk-compare>div{border-right:0;border-bottom:1px solid rgba(255,255,255,.18)}.bk-compare>div:last-child{border-bottom:0}.bk-status-mark{font-size:30vw}.bk-close{min-height:60vh}}
      @media(max-width:520px){.bk-section{padding:82px 22px}.bk-hero{padding-left:22px;padding-right:22px}.bk-title{font-size:24vw}.bk-scatter:before{width:290px;height:290px}.bk-orbit{font-size:7px;padding:9px}.bk-scatter-core{width:125px;height:125px;font-size:14px}.bk-ui main{padding:15px}.bk-ui aside{padding:14px 8px}.bk-caption{grid-template-columns:34px 1fr}.bk-process span{min-width:50%;}}
      @media(prefers-reduced-motion:no-preference){.bk-section{animation:bkReveal .8s both;animation-timeline:view();animation-range:entry 8% cover 28%}.bk-flow-node,.bk-system-node{animation:bkRise .7s both;animation-timeline:view();animation-range:entry 10% cover 35%}@keyframes bkReveal{from{opacity:.25;transform:translateY(30px)}to{opacity:1;transform:none}}@keyframes bkRise{from{opacity:.2;transform:translateY(22px)}to{opacity:1;transform:none}}}
    `}</style>

    <section className="bk-hero">
      <div className="bk-hero-copy"><div className="bk-kicker">{c.heroEyebrow}</div><h1 className="bk-title">{c.heroTitle}</h1><p className="bk-subtitle">{c.heroSubtitle}</p><p className="bk-support">{c.heroSupport}</p></div>
      <div className="bk-hero-ui"><MockScreen index={1} /></div>
    </section>

    <section className="bk-section"><div className="bk-inner bk-two"><div><div className="bk-kicker">ABOUT THE PRODUCT</div></div><div className="bk-two-copy"><h2>{c.introTitle}</h2><p className="bk-copy">{c.intro}</p><p className="bk-copy">{c.intro2}</p></div></div></section>

    <section className="bk-section bk-problem"><div className="bk-inner bk-problem-grid"><div className="bk-problem-copy"><div className="bk-kicker">01 — THE PROBLEM</div><h2 className="bk-section-title">{c.problemTitle}</h2><p className="bk-copy">{c.problem}</p><p className="bk-copy">{c.problem2}</p><p className="bk-copy">{c.problem3}</p></div><Diagram type="scatter" /></div></section>

    <section className="bk-section bk-what"><div className="bk-inner bk-two"><div><div className="bk-kicker">02 — WHAT IS BOOKEA?</div></div><div className="bk-two-copy"><h2>{c.whatTitle}</h2><p className="bk-copy">{c.what}</p><p className="bk-copy">{c.what2}</p><div className="bk-what-quote">From scattered conversations to one organized system.</div></div></div></section>

    <section className="bk-section bk-flow"><div className="bk-inner"><div className="bk-kicker">03 — HOW IT WORKS</div><h2 className="bk-section-title">{c.howTitle}</h2><p className="bk-copy">{c.how}</p><Diagram type="flow" /><p className="bk-copy">{c.how2}</p></div></section>

    <section className="bk-section bk-system"><div className="bk-inner bk-system-grid"><div><div className="bk-kicker">04 — THE SYSTEM</div><h2 className="bk-section-title">{c.systemTitle}</h2><p className="bk-copy">{c.system}</p><p className="bk-copy">{c.system2}</p></div><div><Diagram type="system" /><p className="bk-what-quote">{c.systemQuote}</p></div></div></section>

    <section className="bk-section bk-experience"><div className="bk-inner"><div className="bk-kicker">05 — PRODUCT EXPERIENCE</div><h2 className="bk-section-title">{c.experienceTitle}</h2><p className="bk-copy bk-experience-intro">{c.experienceIntro}</p><div className="bk-screens">{c.screens.map(([num,title,desc],i)=><article className="bk-screen-item" key={num}><MockScreen index={i+1}/><div className="bk-caption"><span className="bk-caption-num">{num}</span><div><h3>{title}</h3><p>{desc}</p><span className="bk-dev-note">Currently in development</span></div></div></article>)}</div></div></section>

    <section className="bk-section bk-why"><div className="bk-inner bk-two"><div><div className="bk-kicker">06 — WHY WE BUILT IT</div></div><div className="bk-two-copy"><h2>{c.whyTitle}</h2><p className="bk-copy">{c.why}</p><p className="bk-copy">{c.why2}</p></div></div></section>

    <section className="bk-section bk-building"><div className="bk-inner"><div className="bk-kicker">07 — BUILDING THE PRODUCT</div><h2 className="bk-section-title">{c.buildingTitle}</h2><div className="bk-two"><div><p className="bk-copy">{c.building}</p></div><div><p className="bk-copy">{c.building2}</p></div></div><div className="bk-process">{["Problem definition","Experience design","Product architecture","SaaS development","Booking flow","Dashboard","Iteration"].map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section className="bk-section bk-custom"><div className="bk-inner"><div className="bk-kicker">07.5 — FROM CUSTOM BUILDS TO A PRODUCT</div><h2 className="bk-section-title">{c.customTitle}</h2><p className="bk-copy">{c.customSubtitle}</p><div className="bk-two" style={{marginTop:55}}><p className="bk-copy">{c.custom}</p><div><p className="bk-copy">{c.custom2}</p><p className="bk-copy">{c.custom3}</p></div></div><div className="bk-compare"><div><small>CUSTOM IMPLEMENTATIONS</small><strong>Built by Leba, for one business.</strong></div><div><small>BOOKEA SaaS</small><strong>Self-serve, multi-tenant, any business.</strong></div></div></div></section>

    <section className="bk-section bk-status"><div className="bk-inner bk-status-inner"><div><div className="bk-kicker">08 — CURRENT STATUS</div><h2 className="bk-section-title">{c.statusTitle}</h2><p className="bk-copy">{c.status}</p><p className="bk-copy">{c.status2}</p></div><div className="bk-status-mark">01<br/>→</div></div></section>

    <section className="bk-section bk-close"><div className="bk-inner"><div className="bk-kicker">WE ARE LEBA</div><h2>{c.closeTitle}</h2><p className="bk-copy">{c.close}</p><a className="bk-cta" href="/#contact"><span>{c.cta}</span><span>↗</span></a></div></section>
  </main>;
}
