"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./BookeaCaseStudy.module.css";
import { CustomDetail, customImages, rv, useScrollEffects, type CustomItem } from "./bookeaShared";

const copy = {
  es: {
    kicker: "CASO DE ESTUDIO · SISTEMAS A MEDIDA · RESERVAS",
    title: <>RESERVAS<br />A MEDIDA.</>,
    lead: "Tres negocios, tres sistemas de reservas hechos a su medida. De ellos nació la idea de crear Bookea SaaS.",
    meta: [["CLIENTES", "Studio Bombon · Franco Zoller Barbería · Marea Beauty House"], ["RUBROS", "Uñas · Barbería · Cejas y pestañas"], ["SERVICIOS", "Diseño · Desarrollo · Arquitectura de sistema"], ["RESULTADO", "El origen de Bookea SaaS"]],
    overview: [
      ["01 / EL PUNTO DE PARTIDA", "Tres negocios con la misma necesidad.", "Cada uno quería dejar de gestionar turnos por mensajes y llamadas, pero con su propia marca y su propia forma de trabajar."],
      ["02 / LO QUE APRENDIMOS", "Lo esencial se repite. Lo distinto importa.", "La reserva, la agenda, los emails y los avisos eran comunes. Los servicios combinables, los equipos, el idioma y la imagen de cada marca, no."],
      ["03 / EL SIGUIENTE PASO", "De tres sistemas a un producto.", "Esa base común se convirtió en Bookea SaaS: un sistema que cualquier negocio de servicios podrá adoptar sin partir de cero."],
    ],
    common: {
      eyebrow: "01 / LA BASE COMÚN",
      title: <>LO QUE LOS TRES<br />COMPARTEN.</>,
      body: "Antes de personalizar nada, los tres sistemas parten del mismo núcleo. Por eso una parte del panel funciona igual en todos.",
      icons: ["▤", "✂\uFE0E", "▦", "◷", "◔", "⚙"],
      items: [
        ["Estadísticas", "PANEL", "Ingresos realizados y proyectados del mes y total de turnos, para ver cómo va el negocio."],
        ["Servicios", "PANEL", "Alta, edición y baja de servicios con su duración, precio y estado, desde el mismo panel."],
        ["Calendario", "PANEL", "Vista semanal con todos los turnos, bloqueo de horarios y alta manual de un turno."],
        ["Turnos de hoy", "PANEL", "La agenda del día ordenada por hora, con el estado de cada turno."],
        ["Avisos push", "MÓVIL", "El panel se instala en el móvil y avisa de cada reserva nueva."],
        ["Configuración", "PANEL", "Horarios y reglas de reserva en un panel casi idéntico en los tres."],
      ],
    },
    custom: {
      eyebrow: "02 / LOS TRES DESARROLLOS",
      title: <>TRES NEGOCIOS.<br />TRES SISTEMAS.</>,
      body: "Cada sistema comparte una base común, pero se adaptó a la marca, al equipo y a la forma de trabajar de su negocio. Abre cada uno para ver qué cambió.",
      tag: "IMPLEMENTACIÓN A MEDIDA",
      more: "VER DETALLES", visit: "VER EL SITIO", close: "CERRAR", basedOn: "HEREDA DE BOOKEA", inherits: ["Reserva en 5 pasos", "Concurrencia controlada", "Email de confirmación", "Cancelación por link", "Recordatorios automáticos", "Precio guardado en cada turno", "Avisos push", "Panel con acceso seguro"], prev: "ANTERIOR", next: "SIGUIENTE",
      custom: "PERSONALIZADO",
      items: [
        { key: "bombon", url: "http://studiobombon.bookea.app/", name: "Studio Bombon", type: "Salón de uñas · Copenhague", text: "Un estudio de uñas con estética glam retro. Cada turno se arma con varios servicios y el sistema lo trabaja un equipo, con la configuración de cada persona.", bg: "#B9B5B0", fit: "cover", colors: ["#C8102E", "#F5DADF", "#551C25"], list: ["Turnos con varios servicios en una sola cita", "Multiusuario, con configuración propia por persona", "Paleta rojo, rosa y vino con tipografía script"], highlights: [["Turnos con varios servicios", "En un mismo turno, la clienta arma su combinación: una base (clean up, shellac, biab o extensiones), nail art, retirada de gel y extras. El sistema valida que la combinación sea posible y suma precio y duración para reservar el tiempo justo.", "COMBO"], ["Sistema multiusuario", "El estudio trabaja con más de una persona dentro del mismo sistema. Cada usuaria entra con su propia cuenta y trabaja sobre su propia agenda.", "MULTIUSUARIO"], ["Configuración propia por usuaria", "Cada persona define sus días y horarios, el espacio entre turnos, la antelación mínima y máxima para reservar, su email de avisos y su contraseña. Lo que no configura, lo hereda del negocio.", "A SU MEDIDA"]], lead: "Bombon necesitaba que una clienta pudiera combinar servicios en una sola cita y que el trabajo se repartiera entre dos personas. La base de Bookea creció para soportarlo, sin perder su sencillez.", groups: [
          { label: "VISUAL", items: [["Universo de marca", "Paleta roja, rosa y vino, tipografía script con League Spartan y una estética glam retro con decoraciones propias."], ["Fotografía por servicio", "Cada servicio muestra su foto de nail art, que el equipo sube y cambia desde el panel."], ["Tono cómplice", "Los textos hablan como la marca: cercanos, con humor y sin formalismos."]] },
          { label: "USO", items: [["Reglas propias del estudio", "El nail art pide una base compatible, las retiradas de gel pueden reservarse solas y los extras se suman a cualquier turno."], ["Duración real", "Precio y duración se suman entre todos los servicios elegidos, y el total define cuánto tiempo se bloquea en la agenda."], ["Cada quien, su agenda", "La disponibilidad que ve la clienta sale de los horarios y reglas de la persona que la atiende."]] },
          { label: "SISTEMA", items: [["Servicios con roles", "Cada servicio del catálogo tiene un rol (base, nail art, retirada o extra), y de esos roles salen las reglas de combinación."], ["Reglas compartidas", "Un turno guarda todos sus servicios, y la reserva y el servidor aplican las mismas reglas, así siempre coinciden."]] },
        ] },
        { key: "franco", url: "http://francozoller-barberia.bookea.app/barberia", name: "Franco Zoller Barbería", type: "Barbería · Franck, Santa Fe, Argentina", text: "Una barbería de barrio, clásica y precisa. La reserva reemplaza los mensajes: el cliente elige su turno solo, sin esperar una respuesta.", bg: "#0b0806", fit: "cover", colors: ["#000000", "#C8903A", "#E5D8C0"], list: ["Negro y dorado con tipografía clásica", "Reserva a cualquier hora, sin esperar respuesta", "Textos en español rioplatense"], lead: "Franco necesitaba dejar de recibir mensajes para dar turnos: sus clientes tenían que escribirle y esperar una respuesta rápida. La base de Bookea se envolvió en una web propia de la barbería, donde cada cliente reserva solo.", groups: [
          { label: "VISUAL", items: [["Negro y dorado", "Paleta sobria con tipografía clásica y ornamentos vectoriales propios: filigranas, navajas cruzadas y separadores."], ["Cuero y ambiente", "Texturas y fotografía del local que transmiten oficio, sin caer en el exceso ni en el estilo de moda."], ["Identidad en los emails", "Los correos usan la misma paleta y tipografía que el sitio."]] },
          { label: "USO", items: [["Página propia de la barbería", "Una portada con servicios, horarios y ubicación, alimentada desde el propio sistema y actualizada cada hora."], ["Reserva sin esperar respuesta", "El cliente elige servicio, día y hora cuando quiere, y recibe la confirmación por email al instante. Franco ya no tiene que contestar mensajes para cerrar cada turno."], ["Contacto directo", "Acceso a la ubicación en el mapa y a WhatsApp desde la portada."]] },
          { label: "SISTEMA", items: [["Portada conectada al sistema", "Servicios, horarios y ubicación se leen del propio sistema y se actualizan cada hora, sin tener que editar la web cada vez que algo cambia."], ["Emails con la identidad de la barbería", "Los correos usan la paleta y la tipografía del sitio, generados desde una plantilla base única."]] },
        ] },
        { key: "marea", url: "https://mareabeautyhouse.bookea.app/", name: "Marea Beauty House", type: "Cejas y pestañas", text: "Un estudio de belleza con identidad cálida y delicada, con sus servicios de laminado, lifting y perfilado.", bg: "#CFE7E4", fit: "cover", colors: ["#B98A4E", "#F4EAD9", "#3C3126"], list: ["Crema y bronce con tipografía serif elegante", "Servicios y packs propios del rubro", "Ilustración de marca en el flujo de reserva"], lead: "Marea necesitaba una reserva delicada, en español y con imágenes que expliquen cada tratamiento. Además, estadísticas fiables aunque cambien los precios.", groups: [
          { label: "VISUAL", items: [["Crema y bronce", "Paleta cálida con tipografía serif elegante, pensada para un estudio de belleza."], ["Imagen por tratamiento", "La reserva muestra la ilustración adecuada según el servicio: lifting, laminado, perfilado o pack completo."], ["Ilustración de marca", "Iconografía propia de cejas y pestañas presente durante todo el recorrido."]] },
          { label: "USO", items: [["Catálogo de tratamientos", "Lifting, laminado, perfilado de cejas y packs combinados, cada uno con su duración y su precio, pensados para un estudio de cejas y pestañas."], ["Un tratamiento, un turno", "Un recorrido simple y directo: la clienta elige el tratamiento que quiere y reserva su hora, sin combinaciones que armar."]] },
          { label: "SISTEMA", items: [["Misma base, marca propia", "Sobre el núcleo de Bookea se adaptó la capa de marca y el catálogo de servicios del estudio."]] },
        ] },
      ] as CustomItem[],
    },
    closing: {
      eyebrow: "03 / DESPUÉS",
      title: <>DE TRES<br />A UNO.</>,
      body: "Lo que aprendimos con estos tres negocios es la base de Bookea SaaS, que llegará el 1 de diciembre. Puedes apuntarte a la lista de espera.",
      cta: "CONOCER BOOKEA SAAS →",
      wait: "UNIRME A LA LISTA DE ESPERA",
      back: "VER MÁS PROYECTOS",
    },
  },
  en: {
    kicker: "CASE STUDY · CUSTOM SYSTEMS · BOOKING",
    title: <>BOOKING,<br />MADE TO MEASURE.</>,
    lead: "Three businesses, three booking systems built around them. They are where the idea for Bookea SaaS came from.",
    meta: [["CLIENTS", "Studio Bombon · Franco Zoller Barbería · Marea Beauty House"], ["INDUSTRIES", "Nails · Barbershop · Brows and lashes"], ["SERVICES", "Design · Development · System architecture"], ["OUTCOME", "The origin of Bookea SaaS"]],
    overview: [
      ["01 / THE STARTING POINT", "Three businesses, one need.", "Each wanted to stop managing appointments through messages and calls, but with its own brand and its own way of working."],
      ["02 / WHAT WE LEARNED", "The essentials repeat. The differences matter.", "Booking, calendar, emails and alerts were common. Combinable services, teams, language and each brand's look were not."],
      ["03 / THE NEXT STEP", "From three systems to one product.", "That common foundation became Bookea SaaS: a system any service business will be able to adopt without starting from scratch."],
    ],
    common: {
      eyebrow: "01 / THE COMMON BASE",
      title: <>WHAT ALL THREE<br />SHARE.</>,
      body: "Before anything is customized, the three systems start from the same core. That is why part of the panel works the same in all of them.",
      icons: ["▤", "✂\uFE0E", "▦", "◷", "◔", "⚙"],
      items: [
        ["Statistics", "PANEL", "Completed and projected revenue for the month and total appointments, to see how the business is doing."],
        ["Services", "PANEL", "Add, edit and remove services with their duration, price and status, from the same panel."],
        ["Calendar", "PANEL", "Weekly view with every appointment, time blocking and manual booking."],
        ["Today's appointments", "PANEL", "The day's agenda ordered by time, with the status of each appointment."],
        ["Push alerts", "MOBILE", "The panel installs on the phone and alerts on every new booking."],
        ["Settings", "PANEL", "Hours and booking rules in a panel that is almost identical across the three."],
      ],
    },
    custom: {
      eyebrow: "02 / THE THREE BUILDS",
      title: <>THREE BUSINESSES.<br />THREE SYSTEMS.</>,
      body: "Each system shares a common foundation, but was adapted to the brand, team and way of working of its business. Open each one to see what changed.",
      tag: "CUSTOM IMPLEMENTATION",
      more: "VIEW DETAILS", visit: "VISIT THE SITE", close: "CLOSE", basedOn: "INHERITED FROM BOOKEA", inherits: ["5-step booking", "Controlled concurrency", "Confirmation email", "Cancel by link", "Automatic reminders", "Price stored on each booking", "Push alerts", "Secure panel access"], prev: "PREVIOUS", next: "NEXT",
      custom: "CUSTOMIZED",
      items: [
        { key: "bombon", url: "http://studiobombon.bookea.app/", name: "Studio Bombon", type: "Nail salon · Copenhagen", text: "A nail studio with a retro-glam look. Each appointment is built from several services and the system is worked by a team, with each person's own settings.", bg: "#B9B5B0", fit: "cover", colors: ["#C8102E", "#F5DADF", "#551C25"], list: ["Appointments with several services in one booking", "Multi-user, with per-person settings", "Red, pink and wine palette with a script typeface"], highlights: [["Appointments with several services", "Within one appointment, the client builds her combination: a base (clean up, shellac, biab or extensions), nail art, gel removal and extras. The system checks the combination is possible and adds up price and duration to reserve exactly the right time.", "COMBO"], ["Multi-user system", "The studio works with more than one person inside the same system. Each user signs in with her own account and works on her own calendar.", "MULTI-USER"], ["Settings per user", "Each person sets her own days and hours, the buffer between appointments, the minimum and maximum booking lead time, her alert email and her password. Anything not set is inherited from the business.", "TAILORED"]], lead: "Bombon needed clients to combine services in a single appointment and the work to be shared between two people. Bookea's foundation grew to support that without losing its simplicity.", groups: [
          { label: "VISUAL", items: [["Brand universe", "Red, pink and wine palette, a script typeface with League Spartan and a retro-glam look with custom decorations."], ["Photography per service", "Each service shows its nail art photo, which the team uploads and swaps from the panel."], ["Playful tone", "Copy speaks like the brand: warm, humorous and informal."]] },
          { label: "USE", items: [["The studio's own rules", "Nail art needs a compatible base, gel removals can be booked on their own and extras can be added to any appointment."], ["Real duration", "Price and duration add up across all chosen services, and the total decides how much time is blocked in the calendar."], ["Each person, her calendar", "The availability a client sees comes from the hours and rules of the person who will serve her."]] },
          { label: "SYSTEM", items: [["Services with roles", "Each catalog service has a role (base, nail art, removal or extra), and the combination rules come from those roles."], ["Shared rules", "An appointment stores all its services, and booking and server apply the same rules, so they always agree."]] },
        ] },
        { key: "franco", url: "http://francozoller-barberia.bookea.app/barberia", name: "Franco Zoller Barbería", type: "Barbershop · Franck, Santa Fe, Argentina", text: "A classic, precise neighborhood barbershop. Booking replaces messages: clients pick their own slot without waiting for a reply.", bg: "#0b0806", fit: "cover", colors: ["#000000", "#C8903A", "#E5D8C0"], list: ["Black and gold with a classic typeface", "Book at any hour, no waiting for a reply", "Copy in Argentine Spanish"], lead: "Franco needed to stop receiving messages to give out appointments: clients had to write to him and wait for a quick reply. Bookea's foundation was wrapped in the barbershop's own website, where every client books on their own.", groups: [
          { label: "VISUAL", items: [["Black and gold", "A sober palette with a classic typeface and custom vector ornaments: filigree, crossed razors and dividers."], ["Leather and atmosphere", "Textures and photography of the shop that convey craft, without excess or trend styling."], ["Identity in the emails", "Emails use the same palette and typography as the site."]] },
          { label: "USE", items: [["The barbershop's own page", "A landing page with services, hours and location, fed from the system itself and refreshed every hour."], ["Booking without waiting for a reply", "Clients pick service, day and time whenever they like and get the confirmation by email right away. Franco no longer has to answer messages to close each appointment."], ["Direct contact", "Map location and WhatsApp reachable straight from the landing page."]] },
          { label: "SYSTEM", items: [["Landing connected to the system", "Services, hours and location are read from the system itself and refreshed every hour, so the site never needs editing when something changes."], ["Emails with the barbershop's identity", "Emails use the site's palette and typography, generated from a single base template."]] },
        ] },
        { key: "marea", url: "https://mareabeautyhouse.bookea.app/", name: "Marea Beauty House", type: "Brows and lashes", text: "A beauty studio with a warm, delicate identity, offering lamination, lifting and shaping services.", bg: "#CFE7E4", fit: "cover", colors: ["#B98A4E", "#F4EAD9", "#3C3126"], list: ["Cream and bronze with an elegant serif", "Industry-specific services and packs", "Brand illustration in the booking flow"], lead: "Marea needed a delicate booking flow, in Spanish, with images that explain each treatment. And reliable stats even when prices change.", groups: [
          { label: "VISUAL", items: [["Cream and bronze", "A warm palette with an elegant serif typeface, made for a beauty studio."], ["Image per treatment", "Booking shows the right illustration depending on the service: lifting, lamination, shaping or the full pack."], ["Brand illustration", "Custom brow and lash iconography throughout the journey."]] },
          { label: "USE", items: [["Treatment catalog", "Lifting, lamination, brow shaping and combined packs, each with its own duration and price, made for a brows-and-lashes studio."], ["One treatment, one appointment", "A simple, direct journey: the client picks the treatment she wants and books her slot, with no combinations to build."]] },
          { label: "SYSTEM", items: [["Same foundation, own brand", "On top of Bookea's core, the brand layer and the studio's service catalog were adapted."]] },
        ] },
      ] as CustomItem[],
    },
    closing: {
      eyebrow: "03 / AFTER",
      title: <>FROM THREE<br />TO ONE.</>,
      body: "What we learned with these three businesses is the foundation of Bookea SaaS, launching on December 1st. You can join the waitlist.",
      cta: "MEET BOOKEA SAAS →",
      wait: "JOIN THE WAITLIST",
      back: "MORE PROJECTS",
    },
  },
};

export function BookeaCustomCase() {
  const { language } = useLanguage();
  const t = copy[language];
  const mainRef = useRef<HTMLElement>(null);
  useScrollEffects(mainRef, language);
  const [openCustom, setOpenCustom] = useState<number | null>(null);
  const closeCustom = useCallback(() => setOpenCustom(null), []);

  return (
    <main className={styles.caseStudy} ref={mainRef}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.kicker}</span>
          <div className={styles.heroGrid}>
            <div>
              <h1>{t.title}</h1>
              <p className={styles.lead}>{t.lead}</p>
            </div>
            <dl className={styles.meta}>
              {t.meta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={`${styles.wrap} ${styles.overviewGrid}`}>
          {t.overview.map(([kicker, title, body], i) => (
            <article key={kicker} {...rv(i)}>
              <span className={styles.eyebrow}>{kicker}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.common}>
        <div className={styles.wrap}>
          <div className={styles.commonHead}>
            <div>
              <span className={styles.eyebrow}>{t.common.eyebrow}</span>
              <h2 {...rv()}>{t.common.title}</h2>
            </div>
            <p {...rv(1)}>{t.common.body}</p>
          </div>
          <ul className={styles.commonList}>
            {t.common.items.map(([title, pill, text], i) => (
              <li key={title} {...rv(i % 3)}>
                <span className={styles.commonIcon}>{t.common.icons[i]}</span>
                <div><b>{title}<em>{pill}</em></b><span>{text}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.custom}>
        <div className={styles.wrap}>
          <div className={styles.chapterHeader}>
            <div>
              <span className={styles.eyebrow} {...rv()}>{t.custom.eyebrow}</span>
              <h2 {...rv(1)}>{t.custom.title}</h2>
            </div>
            <div className={styles.chapterAside}><p {...rv(2)}>{t.custom.body}</p></div>
          </div>
          <div className={styles.customGrid}>
            {t.custom.items.map((item, i) => (
              <article className={styles.customCard} key={item.key} {...rv(i)} role="button" tabIndex={0} onClick={() => setOpenCustom(i)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCustom(i); } }} aria-label={`${item.name} — ${t.custom.more}`}>
                <div className={styles.customMedia} style={{ background: item.bg }}>
                  <Image src={customImages[item.key]} alt={item.name} fill sizes="(max-width: 900px) 92vw, 30vw" style={{ objectFit: item.fit, padding: item.fit === "contain" ? "12%" : 0 }} />
                  <span className={styles.customTag}>{t.custom.tag}</span>
                </div>
                <div className={styles.customBody}>
                  <div className={styles.swatches}>{item.colors.map(c => <i key={c} style={{ background: c }} />)}</div>
                  <h3>{item.name}</h3>
                  <span className={styles.customType}>{item.type}</span>
                  <p>{item.text}</p>
                  <ul>{item.list.map(l => <li key={l}>{l}</li>)}</ul>
                  <span className={styles.more}>{t.custom.more} <b>+</b></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {openCustom !== null && <CustomDetail items={t.custom.items} index={openCustom} labels={{ visit: t.custom.visit, close: t.custom.close, basedOn: t.custom.basedOn, inherits: t.custom.inherits, prev: t.custom.prev, next: t.custom.next, tag: t.custom.tag }} onClose={closeCustom} onNav={setOpenCustom} />}

      <section className={styles.closing}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.closing.eyebrow}</span>
          <div className={styles.closingGrid}>
            <h2 {...rv()}>{t.closing.title}</h2>
            <p className={styles.closingBody} {...rv(1)}>{t.closing.body}</p>
          </div>
          <div className={styles.closingActions}>
            <a className={styles.pill2} href="/work/bookea">{t.closing.cta}</a>
            <a className={styles.pill2} href="/work/bookea#waitlist">{t.closing.wait}</a>
            <a className={styles.back} href="/work">← {t.closing.back}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
