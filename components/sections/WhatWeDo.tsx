const services = [
  {
    number: "01",
    title: "Páginas Web",
    description:
      "Diseñamos páginas web claras y profesionales que representan tu negocio y facilitan la captación de clientes.",
    note:
      "Ideal para negocios que necesitan presencia online o mejorar cómo presentan sus servicios.",
    visual: "website",
  },
  {
    number: "02",
    title: "Software a Medida",
    description:
      "Creamos sistemas adaptados a cómo funciona tu negocio. Organiza tareas, procesos y operaciones en una herramienta pensada para tu día a día.",
    note:
      "Pensado para negocios que ya no pueden manejar su operación con herramientas genéricas o procesos manuales.",
    visual: "software",
  },
  {
    number: "03",
    title: "Automatización e IA",
    description:
      "Automatizamos tareas repetitivas y conectamos tus herramientas para reducir trabajo manual. Menos tiempo operando, más tiempo enfocándote en hacer crecer tu negocio.",
    note:
      "Especialmente útil si pasas gran parte del día respondiendo, gestionando o repitiendo tareas manualmente.",
    visual: "automation",
  },
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="service-visual service-visual-website" aria-hidden="true">
        <div className="visual-laptop">
          <div className="visual-laptop-screen">
            <div className="visual-browser-bar"><span /><span /><span /></div>
            <div className="visual-website-copy">
              <small>WE ARE LEBA</small>
              <strong>Tu negocio,<br />en su mejor versión.</strong>
              <i />
            </div>
            <div className="visual-website-orb" />
          </div>
          <div className="visual-laptop-base" />
        </div>
      </div>
    );
  }

  if (type === "software") {
    return (
      <div className="service-visual service-visual-software" aria-hidden="true">
        <div className="visual-dashboard">
          <aside>
            <b>Tu Negocio</b><span>Inicio</span><span>Clientes</span><span>Servicios</span><span>Reservas</span><span>Reportes</span>
          </aside>
          <div className="visual-dashboard-main">
            <div className="visual-dashboard-title">Resumen</div>
            <div className="visual-stat-grid">
              <div><small>Clientes</small><b>124</b><em>↗ 12%</em></div>
              <div><small>Reservas</small><b>58</b><em>↗ 8%</em></div>
            </div>
            <div className="visual-list-title">Próximas reservas</div>
            <div className="visual-list-row"><i /> <span>María González</span><small>10:00</small></div>
            <div className="visual-list-row"><i /> <span>Juan Pérez</span><small>11:30</small></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual service-visual-automation" aria-hidden="true">
      <div className="automation-flow">
        <div className="automation-inputs">
          <div>↗ <span>Nuevos mensajes</span></div><div>▣ <span>Nuevas reservas</span></div><div>✉ <span>Formularios</span></div><div>≋ <span>Otras herramientas</span></div>
        </div>
        <div className="automation-core">✦<small>Automatizar</small></div>
        <div className="automation-output">
          <span>✓ &nbsp; Responder</span><span>✓ &nbsp; Crear tarea</span><span>✓ &nbsp; Actualizar cliente</span><span>✓ &nbsp; Enviar notificación</span>
        </div>
      </div>
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section className="what-we-do" id="what-we-do">
      <div className="what-we-do-inner">
        <div className="what-we-do-intro">
          <div className="section-kicker"><span /> WHAT WE DO</div>
          <h2>Soluciones digitales<br />para hacer crecer<br />tu negocio.</h2>
          <p>Diseñamos, desarrollamos y automatizamos herramientas digitales que te permiten enfocarte en lo más importante: hacer crecer tu negocio.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-topline"><span>{service.number}</span><i /></div>
              <ServiceVisual type={service.visual} />
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-note">{service.note}</p>
              <a className="service-link focusable" href="#contact">SABER MÁS <span /></a>
            </article>
          ))}
        </div>
        <div className="what-we-do-footer">
          <span><i /> MISMO PROPÓSITO. DIFERENTES CAMINOS.</span><span>WE ARE LEBA</span>
        </div>
      </div>
    </section>
  );
}
