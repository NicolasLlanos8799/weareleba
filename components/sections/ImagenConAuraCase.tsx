"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/system/ArrowUpRight";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./BookeaCaseStudy.module.css";
import { ShowcaseImage } from "@/components/system/ShowcaseImage";
import { rv, useScrollEffects } from "./bookeaShared";

const base = "/assets/imagenconaura";

type Screen = { img: string; title: string; text: string };
type Stage = [title: string, pill: string, text: string];

const copy = {
  es: {
    visit: "VER LA WEB EN VIVO",
    kicker: "CASO DE ESTUDIO · TIENDA ONLINE · SISTEMA DE PEDIDOS",
    title: <>DE TUS FOTOS<br />A TU PUERTA.</>,
    lead: "Imagen con Aura es una tienda para imprimir fotos: la clienta elige un pack, sube sus fotos en su resolución original y las recibe en casa. Detrás, un sistema a medida ordena cada pedido para la fotógrafa.",
    meta: [["CLIENTE", "Imagen con Aura · Rosario, Argentina"], ["RUBRO", "Fotografía artesanal e impresión"], ["SERVICIOS", "Diseño web · Desarrollo · Sistema de pedidos"], ["TECNOLOGÍA", "Next.js · PostgreSQL (Neon) · Google Drive"]],
    overview: [
      ["01 / EL RETO", "Fotos que llegan sin perder calidad.", "Para imprimir bien, las fotos tienen que llegar en su resolución original y ordenadas por pedido, sin comprimirse por el camino."],
      ["02 / EL SISTEMA", "Del catálogo al taller.", "La clienta elige un pack, sube sus fotos y hace el pedido. El sistema crea la carpeta en Google Drive, guarda el pedido y avisa por email."],
      ["03 / EL RESULTADO", "Un pedido, una carpeta.", "Cada pedido llega ordenado: datos de la clienta, packs, color de marco y las fotos originales, listos para imprimir."],
    ],
    shop: {
      eyebrow: "01 / LA TIENDA",
      title: <>UNA TIENDA<br />CON CARÁCTER.</>,
      body: "Un diseño limpio y editorial, con tipografía serif y mucho aire, que deja hablar a las fotos. Comprar es tan simple como elegir, subir y pedir.",
      label: "Vista de Imagen con Aura",
      points: ["Catálogo con filtros por tipo de producto", "Fotos subidas sin compresión: JPG, PNG y HEIC", "Aviso si una foto no alcanza la resolución mínima del pack", "Carrito con varios packs en un mismo pedido"],
      screens: [
        { img: "home", title: "Portada", text: "«Tus fotos, impresas como se debe»: una propuesta clara con dos acciones, ver los packs o entender cómo funciona." },
        { img: "catalog", title: "Catálogo", text: "Polaroid, fotos, imanes, cuadros y fotolibro, con filtros por categoría. Cada pack muestra su formato, cuántas fotos incluye y su precio." },
        { img: "configurator", title: "Configurar el pack", text: "La clienta ve exactamente cuántas fotos necesita y las sube arrastrando o desde el dispositivo, sin compresión. Puede seguir eligiendo o ir directo al pedido." },
        { img: "payments", title: "Medios de pago", text: "Efectivo o transferencia, coordinados con la entrega. No hace falta pagar nada al subir las fotos." },
        { img: "about", title: "La fotógrafa detrás", text: "Una página que pone cara a la marca y cuenta quién está detrás de cada copia." },
      ] as Screen[],
    },
    journey: {
      eyebrow: "02 / EL RECORRIDO",
      active: "PEDIDO EN 5 PASOS",
      title: <>DEL PACK<br />AL PEDIDO.</>,
      body: "Un recorrido guiado que evita errores: la clienta siempre sabe qué falta para completar su pedido.",
      icons: ["▦", "↑", "◐", "✎", "✓"],
      stages: [
        ["Elegir el pack", "PASO 1", "Recorre el catálogo, filtra por tipo de producto y elige el formato que quiere."],
        ["Subir las fotos", "PASO 2", "Arrastra sus fotos. El sistema valida la cantidad exacta y avisa si alguna tiene poca resolución."],
        ["Personalizar", "PASO 3", "En cuadros y fotolibros elige el color del marco o de la tapa."],
        ["Datos y pago", "PASO 4", "Deja sus datos y elige cómo pagar: efectivo o transferencia."],
        ["Confirmación", "PASO 5", "El pedido queda registrado y recibe un email de confirmación."],
      ] as Stage[],
    },
    system: {
      eyebrow: "03 / POR DENTRO",
      active: "SISTEMA ACTIVO",
      title: <>UN SISTEMA<br />PARA EL TALLER.</>,
      body: "Lo que la clienta no ve: cómo llega cada pedido, ordenado y completo, a la fotógrafa.",
      icons: ["☁", "▤", "◔", "✉\uFE0E"],
      stages: [
        ["Fotos directo a Drive", "SIN COMPRESIÓN", "Las fotos se suben por partes a una carpeta de Google Drive de la fotógrafa, incluso las más pesadas."],
        ["Una carpeta por pedido", "ORDEN", "Cada pedido crea su carpeta, con una subcarpeta por pack y un resumen con los datos de la clienta."],
        ["Carrito que no se pierde", "EN EL NAVEGADOR", "El pedido se guarda en el navegador, así sobrevive a una recarga o a abrir otro pack en otra pestaña."],
        ["Avisos por email", "AUTOMÁTICO", "La fotógrafa recibe un aviso por cada pedido nuevo y la clienta su confirmación, enviados desde la cuenta de Gmail del negocio."],
      ] as Stage[],
    },
    closing: {
      eyebrow: "04 / EN CONJUNTO",
      title: <>UNA TIENDA.<br />UN TALLER ORDENADO.</>,
      pillars: [["TIENDA", "Elegir y pedir, sin fricción."], ["PEDIDO", "Fotos originales, sin compresión."], ["TALLER", "Cada pedido, en su carpeta."]],
      back: "VER MÁS PROYECTOS",
    },
  },
  en: {
    visit: "VISIT THE LIVE SITE",
    kicker: "CASE STUDY · ONLINE STORE · ORDER SYSTEM",
    title: <>FROM YOUR PHOTOS<br />TO YOUR DOOR.</>,
    lead: "Imagen con Aura is a store for printing photos: the client picks a pack, uploads her photos in their original resolution and receives the prints at home. Behind it, a custom system keeps every order in order for the photographer.",
    meta: [["CLIENT", "Imagen con Aura · Rosario, Argentina"], ["INDUSTRY", "Artisan photography and printing"], ["SERVICES", "Web design · Development · Order system"], ["TECHNOLOGY", "Next.js · PostgreSQL (Neon) · Google Drive"]],
    overview: [
      ["01 / THE CHALLENGE", "Photos that arrive without losing quality.", "To print well, photos have to arrive in their original resolution and organized by order, without being compressed along the way."],
      ["02 / THE SYSTEM", "From the catalog to the workshop.", "The client picks a pack, uploads her photos and places the order. The system creates the Google Drive folder, saves the order and sends emails."],
      ["03 / THE RESULT", "One order, one folder.", "Every order arrives organized: client details, packs, frame color and the original photos, ready to print."],
    ],
    shop: {
      eyebrow: "01 / THE STORE",
      title: <>A STORE<br />WITH CHARACTER.</>,
      body: "A clean, editorial design with serif type and lots of air, letting the photos do the talking. Buying is as simple as choose, upload and order.",
      label: "Imagen con Aura view",
      points: ["Catalog with filters by product type", "Photos uploaded uncompressed: JPG, PNG and HEIC", "Warning when a photo falls short of the pack's minimum resolution", "Cart with several packs in one order"],
      screens: [
        { img: "home", title: "Landing", text: "“Your photos, printed the way they should be”: a clear proposition with two actions, see the packs or learn how it works." },
        { img: "catalog", title: "Catalog", text: "Polaroid, photos, magnets, frames and photobook, with category filters. Each pack shows its format, how many photos it includes and its price." },
        { img: "configurator", title: "Configure the pack", text: "The client sees exactly how many photos she needs and uploads them by dragging or from her device, uncompressed. She can keep browsing or go straight to the order." },
        { img: "payments", title: "Payment methods", text: "Cash or bank transfer, coordinated with delivery. Nothing to pay when uploading the photos." },
        { img: "about", title: "The photographer behind it", text: "A page that puts a face to the brand and tells who is behind every print." },
      ] as Screen[],
    },
    journey: {
      eyebrow: "02 / THE JOURNEY",
      active: "ORDER IN 5 STEPS",
      title: <>FROM PACK<br />TO ORDER.</>,
      body: "A guided journey that prevents mistakes: the client always knows what is left to complete her order.",
      icons: ["▦", "↑", "◐", "✎", "✓"],
      stages: [
        ["Choose the pack", "STEP 1", "Browses the catalog, filters by product type and picks the format she wants."],
        ["Upload the photos", "STEP 2", "Drags in her photos. The system checks the exact count and warns if any has low resolution."],
        ["Customize", "STEP 3", "For frames and photobooks, she picks the frame or cover color."],
        ["Details and payment", "STEP 4", "Leaves her details and chooses how to pay: cash or transfer."],
        ["Confirmation", "STEP 5", "The order is recorded and she gets a confirmation email."],
      ] as Stage[],
    },
    system: {
      eyebrow: "03 / UNDER THE HOOD",
      active: "SYSTEM ACTIVE",
      title: <>A SYSTEM<br />FOR THE WORKSHOP.</>,
      body: "What the client doesn't see: how each order reaches the photographer, organized and complete.",
      icons: ["☁", "▤", "◔", "✉\uFE0E"],
      stages: [
        ["Photos straight to Drive", "UNCOMPRESSED", "Photos are uploaded in parts to a Google Drive folder of the photographer, even the heaviest ones."],
        ["One folder per order", "ORDER", "Each order creates its folder, with a subfolder per pack and a summary with the client's details."],
        ["A cart that isn't lost", "IN THE BROWSER", "The order is kept in the browser, so it survives a reload or opening another pack in another tab."],
        ["Email alerts", "AUTOMATIC", "The photographer is notified of every new order and the client gets her confirmation, sent from the business's Gmail account."],
      ] as Stage[],
    },
    closing: {
      eyebrow: "04 / TOGETHER",
      title: <>ONE STORE.<br />ONE ORDERLY WORKSHOP.</>,
      pillars: [["STORE", "Choose and order, frictionless."], ["ORDER", "Original photos, uncompressed."], ["WORKSHOP", "Every order, in its folder."]],
      back: "MORE PROJECTS",
    },
  },
};

function Showcase({ screens, label }: { screens: Screen[]; label: string }) {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const items = screens.map(({ title, img }) => ({ src: `${base}/${img}.webp`, alt: `${label}: ${title}` }));
  const current = screens[active];
  return (
    <div className={`${styles.showcase} ${styles.showcaseFlip}`}>
      <ShowcaseImage className={styles.showcaseImage} lang={language} active={active} onChange={setActive} items={items}>
        <div className={styles.frame} data-par>
          <div className={styles.frameBar}><i /><i /><i /></div>
          <div className={styles.frameShot} key={current.img}>
            <Image src={`${base}/${current.img}.webp`} alt={`${label}: ${current.title}`} fill sizes="(max-width: 900px) 92vw, 56vw" quality={90} priority={active === 0} />
          </div>
        </div>
      </ShowcaseImage>
      <ol className={styles.screenList}>
        {screens.map(({ title, text }, index) => (
          <li key={title} {...rv(index + 1)}>
            <button type="button" className={index === active ? styles.screenActive : ""} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-pressed={index === active}>
              <span className={styles.screenNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.screenText}><b>{title}</b><span>{text}</span></span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StageSection({ data, dark }: { data: { eyebrow: string; active: string; title: React.ReactNode; body: string; icons: string[]; stages: Stage[] }; dark?: boolean }) {
  return (
    <section className={`${styles.lifecycle} ${dark ? styles.lifecycleDark : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.lifecycleTop}>
          <span className={styles.eyebrow}>{data.eyebrow}</span>
          <span className={styles.systemActive}><i /> {data.active}</span>
        </div>
        <div className={styles.lifecycleIntro}>
          <h2 {...rv()}>{data.title}</h2>
          <p {...rv(2)}>{data.body}</p>
        </div>
        <ol className={styles.stages} data-r="" style={{ "--cols": data.stages.length, "--d": "0ms" } as CSSProperties}>
          {data.stages.map(([title, pill, text], i) => (
            <li className={styles.stage} key={title} {...rv(i)}>
              <div className={styles.stageTop}><span className={styles.stageNode}>{data.icons[i]}</span><span className={styles.stageNumber}>{String(i + 1).padStart(2, "0")}</span></div>
              <span className={styles.pill}>{pill}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ImagenConAuraCase() {
  const { language } = useLanguage();
  const t = copy[language];
  const mainRef = useRef<HTMLElement>(null);
  useScrollEffects(mainRef, language);

  return (
    <main className={styles.caseStudy} ref={mainRef}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.kicker}</span>
          <div className={styles.heroGrid}>
            <div>
              <h1>{t.title}</h1>
              <p className={styles.lead}>{t.lead}</p>
              <a className={styles.visit} href="https://imagenconaura.com" target="_blank" rel="noreferrer"><span>{t.visit}</span><b>imagenconaura.com <ArrowUpRight /></b></a>
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

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <div className={styles.chapterHeader}>
            <div>
              <span className={styles.eyebrow} {...rv()}>{t.shop.eyebrow}</span>
              <h2 {...rv(1)}>{t.shop.title}</h2>
            </div>
            <div className={styles.chapterAside}>
              <p {...rv(2)}>{t.shop.body}</p>
              <ul>{t.shop.points.map((point, i) => <li key={point} {...rv(i + 3)}>{point}</li>)}</ul>
            </div>
          </div>
          <Showcase screens={t.shop.screens} label={t.shop.label} />
        </div>
      </section>

      <StageSection data={t.journey} />
      <StageSection data={t.system} dark />

      <section className={styles.closing}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>{t.closing.eyebrow}</span>
          <div className={styles.closingGrid}>
            <h2 {...rv()}>{t.closing.title}</h2>
            <ul>
              {t.closing.pillars.map(([name, text], index) => (
                <li key={name} {...rv(index + 1)}><span>{String(index + 1).padStart(2, "0")}</span><b>{name}</b><em>{text}</em></li>
              ))}
            </ul>
          </div>
          <a className={styles.visit} href="https://imagenconaura.com" target="_blank" rel="noreferrer"><span>{t.visit}</span><b>imagenconaura.com <ArrowUpRight /></b></a>
          <a className={styles.back} href="/work">← {t.closing.back}</a>
        </div>
      </section>
    </main>
  );
}
