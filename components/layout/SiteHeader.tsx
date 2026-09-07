"use client";

import { useState } from "react";

const links = ["Work", "Capabilities", "Process", "About"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "fixed", inset: "0 0 auto 0", zIndex: 50, borderBottom: "1px solid var(--color-line)", background: "rgba(242,240,235,.88)", backdropFilter: "blur(14px)" }}>
      <div className="container" style={{ height: 88, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 24 }}>
        <a className="focusable" href="#top" aria-label="WE ARE LEBA" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-.02em" }}>WE ARE LEBA</a>
        <nav aria-label="Principal" className="desktop-nav" style={{ display: "flex", gap: 22, fontSize: 12, color: "var(--color-text-muted)" }}>
          {links.map((link) => <a className="focusable" key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 18 }}>
          <a className="focusable header-cta" href="#contact" style={{ fontSize: 12, borderBottom: "1px solid var(--color-text)", paddingBottom: 4 }}>Start a project →</a>
          <button className="focusable menu-toggle" type="button" aria-label={open ? "Close" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} style={{ display: "none", border: 0, background: "transparent", padding: 0, fontSize: 12, cursor: "pointer" }}>Menu</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" style={{ padding: "0 20px 24px", display: "grid", gap: 16, borderTop: "1px solid var(--color-line)" }}>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav>}
      <style jsx>{`@media (max-width: 700px){.desktop-nav,.header-cta{display:none!important}.menu-toggle{display:block!important}}`}</style>
    </header>
  );
}