const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "We design clear, professional websites that represent your business and make it easier to attract new clients.",
    note:
      "Ideal for businesses that need an online presence or want to improve how they present their services.",
    visual: "website",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "We build systems tailored to the way your business works. Organize tasks, processes and operations in a tool designed for your day-to-day needs.",
    note:
      "Built for businesses that can no longer manage their operations with generic tools or manual processes.",
    visual: "software",
  },
  {
    number: "03",
    title: "Automation & AI",
    description:
      "We automate repetitive tasks and connect your tools to reduce manual work. Less time operating, more time focused on growing your business.",
    note:
      "Especially useful if you spend a large part of your day answering, managing or repeating manual tasks.",
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
              <strong>Your business,<br />at its best.</strong>
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
            <b>Your Business</b><span>Home</span><span>Clients</span><span>Services</span><span>Bookings</span><span>Reports</span>
          </aside>
          <div className="visual-dashboard-main">
            <div className="visual-dashboard-title">Overview</div>
            <div className="visual-stat-grid">
              <div><small>Clients</small><b>124</b><em>↗ 12%</em></div>
              <div><small>Bookings</small><b>58</b><em>↗ 8%</em></div>
            </div>
            <div className="visual-list-title">Upcoming bookings</div>
            <div className="visual-list-row"><i /> <span>Maria Gonzalez</span><small>10:00</small></div>
            <div className="visual-list-row"><i /> <span>Juan Perez</span><small>11:30</small></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual service-visual-automation" aria-hidden="true">
      <div className="automation-flow">
        <div className="automation-inputs">
          <div>↗ <span>New messages</span></div><div>▣ <span>New bookings</span></div><div>✉ <span>Forms</span></div><div>≋ <span>Other tools</span></div>
        </div>
        <div className="automation-core">✦<small>Automate</small></div>
        <div className="automation-output">
          <span>✓ &nbsp; Reply</span><span>✓ &nbsp; Create task</span><span>✓ &nbsp; Update client</span><span>✓ &nbsp; Send notification</span>
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
          <h2>Digital solutions<br />to help grow<br />your business.</h2>
          <p>We design, build and automate digital tools that let you focus on what matters most: growing your business.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-topline"><span>{service.number}</span><i /></div>
              <ServiceVisual type={service.visual} />
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-note">{service.note}</p>
              <a className="service-link focusable" href="#contact">LEARN MORE <span /></a>
            </article>
          ))}
        </div>
        <div className="what-we-do-footer">
          <span><i /> SAME PURPOSE. DIFFERENT PATHS.</span><span>WE ARE LEBA</span>
        </div>
      </div>
    </section>
  );
}
