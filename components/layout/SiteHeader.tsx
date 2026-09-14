"use client";

import { useState } from "react";

const links = ["Work", "About", "Services", "Journal"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand focusable" href="#top" aria-label="LEBA">
          LEBA
        </a>

        <nav aria-label="Principal" className="desktop-nav site-nav">
          {links.map((link) => (
            <a className="focusable" key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a className="focusable site-header-cta" href="#contact">
            <span>Let&apos;s talk</span>
            <span aria-hidden="true">→</span>
          </a>
          <button
            className="focusable menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`hamburger-icon${open ? " is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="mobile-nav"
          style={{
            color: "rgba(255,255,255,.96)",
            background: "rgba(8,8,8,.98)",
            borderTopColor: "rgba(255,255,255,.14)",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: "rgba(255,255,255,.96)" }}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
