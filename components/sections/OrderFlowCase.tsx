"use client";

import styles from "./OrderFlowCase.module.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const content = {
  en: {
    eyebrow: "AUTOMATION SYSTEM",
    title: <>Orders,<br />without the friction.</>,
    intro: "A web-based ordering system designed to structure incoming orders from WhatsApp and Instagram, turning scattered conversations into a clear operational workflow.",
    label: "THE SYSTEM",
    idea: "Order Flow connects the customer journey with the operational side of the business — bringing products, orders, customers and sales into one clear system.",
    blocks: [
      ["01", "Digital catalog", "A structured product catalog gives customers a clearer way to browse, choose and build an order.", "/assets/orderflow/productos.png", "Order Flow product catalog"],
      ["02", "Order capture", "Incoming requests are translated into structured orders instead of being lost inside chat conversations.", "/assets/orderflow/pedidos.png", "Order Flow orders"],
      ["03", "Live operations", "A central dashboard brings orders, products, customers and sales into one operational view.", "/assets/orderflow/panelcontrol.png", "Order Flow control panel"],
      ["04", "Statistics", "Clear operational data gives the business a better view of activity, sales and performance over time.", "/assets/orderflow/estadisticas.png", "Order Flow statistics"],
    ],
    closing: "A SYSTEM BUILT TO TURN CONVERSATIONS INTO OPERATIONS.",
    note: "From the first customer request to the final operational view, Order Flow creates a clearer path through the entire ordering process.",
  },
  es: {
    eyebrow: "SISTEMA DE AUTOMATIZACIÓN",
    title: <>Pedidos,<br />sin fricción.</>,
    intro: "Un sistema web diseñado para estructurar pedidos provenientes de WhatsApp e Instagram y convertir conversaciones dispersas en un flujo operativo claro.",
    label: "EL SISTEMA",
    idea: "Order Flow conecta la experiencia del cliente con la operación del negocio, reuniendo productos, pedidos, clientes y ventas dentro de un único sistema claro.",
    blocks: [
      ["01", "Catálogo digital", "Un catálogo estructurado permite a los clientes explorar productos, elegir y construir su pedido de forma más clara.", "/assets/orderflow/productos.png", "Catálogo de productos de Order Flow"],
      ["02", "Captura de pedidos", "Las solicitudes entrantes se convierten en pedidos estructurados en lugar de perderse dentro de las conversaciones.", "/assets/orderflow/pedidos.png", "Pedidos de Order Flow"],
      ["03", "Operación en tiempo real", "Un panel central reúne pedidos, productos, clientes y ventas en una única vista operativa.", "/assets/orderflow/panelcontrol.png", "Panel de control de Order Flow"],
      ["04", "Estadísticas", "Datos operativos claros permiten entender mejor la actividad, las ventas y el rendimiento del negocio a lo largo del tiempo.", "/assets/orderflow/estadisticas.png", "Estadísticas de Order Flow"],
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
      </section>

      <section className={styles.closing}>
        <h2>{copy.closing}</h2>
        <p>{copy.note}</p>
      </section>
    </main>
  );
}
