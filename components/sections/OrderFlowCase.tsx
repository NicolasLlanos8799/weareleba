"use client";

import styles from "./OrderFlowCase.module.css";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const content = {
  en: {
    eyebrow: "AUTOMATION SYSTEM · CONCEPT",
    title: <>Orders,<br />without the friction.</>,
    intro: "A web system concept designed to structure incoming orders from WhatsApp and Instagram, turning scattered conversations into a clear operational workflow.",
    label: "THE IDEA",
    idea: "We explored how a service business could move from manual order handling to a single operational system — connecting catalog, orders, customers and sales in one place.",
    blocks: [
      ["01", "Digital catalog", "A structured product catalog gives customers a clearer way to browse and choose before sending an order."],
      ["02", "Order capture", "Incoming requests are translated into structured orders instead of being lost inside chat conversations."],
      ["03", "Live operations", "A central dashboard brings orders, products, customers and sales into one operational view."],
      ["04", "Automation", "The system concept reduces repetitive work and creates a more consistent path from request to fulfillment."],
    ],
    closing: "A SYSTEM BUILT TO TURN CONVERSATIONS INTO OPERATIONS.",
    note: "This project was developed as a product concept and working demonstration to explore the opportunity and validate the system experience.",
  },
  es: {
    eyebrow: "SISTEMA DE AUTOMATIZACIÓN · CONCEPTO",
    title: <>Pedidos,<br />sin fricción.</>,
    intro: "Un concepto de sistema web diseñado para estructurar pedidos provenientes de WhatsApp e Instagram y convertir conversaciones dispersas en un flujo operativo claro.",
    label: "LA IDEA",
    idea: "Exploramos cómo un negocio de servicios podía pasar de gestionar pedidos manualmente a trabajar desde un único sistema operativo, conectando catálogo, pedidos, clientes y ventas.",
    blocks: [
      ["01", "Catálogo digital", "Un catálogo estructurado permite a los clientes explorar productos y elegir antes de enviar un pedido."],
      ["02", "Captura de pedidos", "Las solicitudes entrantes se convierten en pedidos estructurados en lugar de perderse dentro de las conversaciones."],
      ["03", "Operación en tiempo real", "Un panel central reúne pedidos, productos, clientes y ventas en una única vista operativa."],
      ["04", "Automatización", "El concepto reduce tareas repetitivas y crea un recorrido más consistente desde la solicitud hasta la preparación."],
    ],
    closing: "UN SISTEMA CREADO PARA CONVERTIR CONVERSACIONES EN OPERACIONES.",
    note: "Este proyecto fue desarrollado como concepto de producto y demostración funcional para explorar la oportunidad y validar la experiencia del sistema.",
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
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.mockup}>
            <div className={styles.top}><b>ORDER FLOW</b><span>LIVE OPERATIONS</span></div>
            <div className={styles.body}>
              <aside><b>Orders</b><span>Catalog</span><span>Customers</span><span>Sales</span></aside>
              <div className={styles.dashboard}>
                <div className={styles.dashboardHead}><span>Today's orders</span><b>24</b></div>
                <div className={styles.stats}><i><small>NEW</small><strong>08</strong></i><i><small>PROCESSING</small><strong>11</strong></i><i><small>READY</small><strong>05</strong></i></div>
                <div className={styles.rows}><span>#1048</span><span>WhatsApp</span><b>€42.00</b><span>#1047</span><span>Instagram</span><b>€68.50</b><span>#1046</span><span>WhatsApp</span><b>€31.00</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.idea}>
        <span>{copy.label}</span>
        <p>{copy.idea}</p>
      </section>

      <section className={styles.blocks}>
        {copy.blocks.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
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
