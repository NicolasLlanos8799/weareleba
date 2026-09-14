"use client";

import styles from "./OrderFlowCase.module.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const content = {
  en: {
    eyebrow: "AUTOMATION SYSTEM / ORDER MANAGEMENT",
    title: <>From online orders<br /><span className="nowrapWord">to operations.</span></>,
    intro: "Order Flow is a web-based order management system for businesses that receive orders through their website, WhatsApp and Instagram. It turns incoming orders and conversations into structured orders and gives the team one place to manage products, stock, customers and daily operations.",
    systemLabel: "THE SYSTEM",
    system: "Order Flow sits behind the online ordering experience — connecting incoming orders with the operational systems needed to run the business.",
    problemLabel: "THE PROBLEM",
    problem: "Orders were coming through different channels, product information lived separately, and the team had to manually organize the operation. The system brings those pieces together.",
    blocks: [
      ["01", "Product Management", "A centralized product management system where administrators can add and manage products, update prices, descriptions and stock, and keep everything organized from one place.", "/assets/orderflow/productos.png", "Order Flow product management"],
      ["02", "Order Capture", "Incoming orders from the website, WhatsApp and Instagram are organized into structured orders, with the essential customer and order details ready for the team.", "/assets/orderflow/pedidos.png", "Order Flow orders"],
      ["03", "Operations & Insights", "The operational view brings order activity and business data together, helping the team follow the flow of work and understand performance over time.", "/assets/orderflow/estadisticas.png", "Order Flow operational insights"],
    ],
    closing: "A SYSTEM BUILT TO TURN ORDERS INTO OPERATIONS.",
    note: "From the first customer order to the final operational view, Order Flow creates a clearer path through the entire ordering process.",
  },
  es: {
    eyebrow: "SISTEMA DE AUTOMATIZACIÓN / GESTIÓN DE PEDIDOS",
    title: <>De los pedidos online<br /><span className="nowrapWord">a la operación.</span></>,
    intro: "Order Flow es un sistema web de gestión de pedidos para negocios que reciben pedidos a través de su web, WhatsApp e Instagram. Convierte los pedidos y conversaciones entrantes en pedidos estructurados y permite al equipo gestionar productos, stock, clientes y la operación diaria desde un único lugar.",
    systemLabel: "EL SISTEMA",
    system: "Order Flow se sitúa detrás de la experiencia de pedidos online, conectando los pedidos entrantes con los sistemas operativos necesarios para gestionar el negocio.",
    problemLabel: "EL PROBLEMA",
    problem: "Los pedidos llegaban a través de distintos canales, la información de los productos estaba separada y el equipo tenía que organizar la operación manualmente. El sistema reúne esas piezas.",
    blocks: [
      ["01", "Gestión de productos", "Un sistema centralizado para que los administradores puedan cargar y gestionar productos, actualizar precios, descripciones y stock, y mantener todo organizado desde un único lugar.", "/assets/orderflow/productos.png", "Gestión de productos de Order Flow"],
      ["02", "Captura de pedidos", "Los pedidos provenientes de la web, WhatsApp e Instagram se organizan como pedidos estructurados, con la información esencial del cliente y del pedido preparada para el equipo.", "/assets/orderflow/pedidos.png", "Pedidos de Order Flow"],
      ["03", "Operación y análisis", "La visión operativa reúne la actividad de los pedidos y los datos del negocio, facilitando el seguimiento del trabajo y la comprensión del rendimiento a lo largo del tiempo.", "/assets/orderflow/estadisticas.png", "Análisis operativo de Order Flow"],
    ],
    closing: "UN SISTEMA CREADO PARA CONVERTIR PEDIDOS EN OPERACIÓN.",
    note: "Desde el primer pedido del cliente hasta la visión operativa final, Order Flow crea un recorrido más claro para todo el proceso de pedidos.",
  },
};

export function OrderFlowCase() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className={styles.case}>
      <section className={styles.hero}>
        <div className={styles.heroMeta}>{copy.eyebrow}</div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </div>
          <div className={styles.heroVisual}>
            <img src="/assets/orderflow/panelcontrol.png" alt="Order Flow control panel" />
          </div>
        </div>
        <div className={styles.scrollHint}><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className={styles.systemIntro}>
        <div className={styles.introNumber}>01</div>
        <div className={styles.introContent}>
          <span>{copy.systemLabel}</span>
          <p>{copy.system}</p>
        </div>
      </section>

      <section className={styles.problem}>
        <div className={styles.problemVisual}>
          <div className={styles.signal}><span>WEB</span><i /><span>WHATSAPP</span><i /><span>INSTAGRAM</span></div>
          <div className={styles.signalCore}>ORDER<br />FLOW</div>
        </div>
        <div className={styles.problemCopy}>
          <div className={styles.introNumber}>02</div>
          <span>{copy.problemLabel}</span>
          <p>{copy.problem}</p>
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureMeta}><span>03</span><span>PRODUCT MANAGEMENT</span></div>
        <div className={styles.featureHeader}>
          <h2>{copy.blocks[0][1]}</h2>
          <p>{copy.blocks[0][2]}</p>
        </div>
        <div className={styles.featureVisual}>
          <img src={copy.blocks[0][3]} alt={copy.blocks[0][4]} loading="lazy" />
        </div>
      </section>

      <section className={`${styles.feature} ${styles.altFeature}`}>
        <div className={styles.featureVisual}><img src={copy.blocks[1][3]} alt={copy.blocks[1][4]} loading="lazy" /></div>
        <div className={styles.featureHeader}>
          <div className={styles.featureMeta}><span>04</span><span>ORDER CAPTURE</span></div>
          <h2>{copy.blocks[1][1]}</h2>
          <p>{copy.blocks[1][2]}</p>
        </div>
      </section>

      <section className={styles.insights}>
        <div className={styles.insightsCopy}>
          <div className={styles.featureMeta}><span>05</span><span>OPERATIONS & INSIGHTS</span></div>
          <h2>{copy.blocks[2][1]}</h2>
          <p>{copy.blocks[2][2]}</p>
        </div>
        <div className={styles.insightsVisual}><img src={copy.blocks[2][3]} alt={copy.blocks[2][4]} loading="lazy" /></div>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementIndex}>06 / SYSTEM</div>
        <h2>{copy.closing}</h2>
        <p>{copy.note}</p>
      </section>
    </main>
  );
}
