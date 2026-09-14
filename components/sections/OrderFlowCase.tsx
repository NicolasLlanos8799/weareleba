"use client";

import styles from "./OrderFlowCase.module.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const content = {
  en: {
    eyebrow: "AUTOMATION SYSTEM",
    title: <>From online orders<br />to operations.</>,
    intro: "Order Flow is a web-based order management system designed for businesses that receive orders through WhatsApp and Instagram. It turns incoming conversations into structured orders and gives the team one place to manage products, stock, customers and daily operations.",
    label: "THE SYSTEM",
    idea: "Order Flow was designed as the operational layer behind an online ordering experience — connecting the customer journey with the systems needed to run the business behind it.",
    problemLabel: "THE PROBLEM",
    problem: "Orders were coming through conversations, product information lived separately, and the team had to manually organize the operation. Order Flow brings those pieces together into one structured workflow.",
    flow: ["ONLINE ORDER", "ORDER FLOW", "PRODUCTS + STOCK", "OPERATIONS", "INSIGHTS"],
    blocks: [
      ["01", "Product Management", "A centralized product management system where administrators can add and manage products, update prices, descriptions and stock, and keep everything organized from one place.", "/assets/orderflow/productos.png", "Order Flow product management"],
      ["02", "Order Capture", "Incoming requests are translated into structured orders, with the essential customer and order details organized for the team.", "/assets/orderflow/pedidos.png", "Order Flow orders"],
      ["03", "Operations & Insights", "The operational view brings order activity and business data together, helping the team follow the flow of work and understand performance over time.", "/assets/orderflow/estadisticas.png", "Order Flow operational insights"],
    ],
    closing: "A SYSTEM BUILT TO TURN CONVERSATIONS INTO OPERATIONS.",
    note: "From the first customer request to the final operational view, Order Flow creates a clearer path through the entire ordering process.",
  },
  es: {
    eyebrow: "SISTEMA DE AUTOMATIZACIÓN",
    title: <>De los pedidos online<br />a la operación.</>,
    intro: "Order Flow es un sistema web de gestión de pedidos para negocios que reciben pedidos por WhatsApp e Instagram. Convierte las conversaciones entrantes en pedidos estructurados y permite al equipo gestionar productos, stock, clientes y la operación diaria desde un único lugar.",
    label: "EL SISTEMA",
    idea: "Order Flow fue diseñado como la capa operativa detrás de una experiencia de pedidos online, conectando el recorrido del cliente con los sistemas necesarios para gestionar el negocio.",
    problemLabel: "EL PROBLEMA",
    problem: "Los pedidos llegaban a través de conversaciones, la información de los productos estaba separada y el equipo tenía que organizar la operación manualmente. Order Flow reúne esas piezas dentro de un único flujo estructurado.",
    flow: ["PEDIDO ONLINE", "ORDER FLOW", "PRODUCTOS + STOCK", "OPERACIÓN", "ANÁLISIS"],
    blocks: [
      ["01", "Gestión de productos", "Un sistema centralizado para que los administradores puedan cargar y gestionar productos, actualizar precios, descripciones y stock, y mantener todo organizado desde un único lugar.", "/assets/orderflow/productos.png", "Gestión de productos de Order Flow"],
      ["02", "Captura de pedidos", "Las solicitudes entrantes se convierten en pedidos estructurados, con la información esencial del cliente y del pedido organizada para el equipo.", "/assets/orderflow/pedidos.png", "Pedidos de Order Flow"],
      ["03", "Operación y análisis", "La visión operativa reúne la actividad de los pedidos y los datos del negocio, facilitando el seguimiento del trabajo y la comprensión del rendimiento a lo largo del tiempo.", "/assets/orderflow/estadisticas.png", "Análisis operativo de Order Flow"],
    ],
    closing: "UN SISTEMA CREADO PARA CONVERTIR CONVERSACIONES EN OPERACIONES.",
    note: "Desde la primera solicitud del cliente hasta la visión operativa final, Order Flow crea un recorrido más claro para todo el proceso de pedidos.",
  },
};

export function OrderFlowCase() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className={styles.case}>
      <section className={styles.hero}>
        <div className={styles.heroMeta}>{copy.eyebrow}</div>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <div className={styles.heroVisual}>
          <img src="/assets/orderflow/panelcontrol.png" alt="Order Flow control panel" />
        </div>
      </section>

      <section className={styles.idea}>
        <span>{copy.label}</span>
        <p>{copy.idea}</p>
      </section>

      <section className={styles.problem}>
        <span>{copy.problemLabel}</span>
        <p>{copy.problem}</p>
      </section>

      <section className={styles.flowSection}>
        <div className={styles.flowSticky}>
          <span className={styles.flowLabel}>{language === "en" ? "THE FLOW" : "EL FLUJO"}</span>
          <div className={styles.flowTrack}>
            {copy.flow.map((step, index) => (
              <div className={styles.flowStep} key={step}>
                <div className={styles.flowNode}>{String(index + 1).padStart(2, "0")}</div>
                <span>{step}</span>
                {index < copy.flow.length - 1 && <i />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blocks}>
        {copy.blocks.map(([number, title, text, image, alt]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={styles.blockVisual}>
              <img src={image} alt={alt} loading="lazy" />
            </div>
          </article>
        ))}

        <article className={styles.statement}>
          <span>04 / SYSTEM</span>
          <div className={styles.statementContent}>
            <h2>{copy.closing}</h2>
            <p>{copy.note}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
